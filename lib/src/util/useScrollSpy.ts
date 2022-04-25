/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { RefObject, useState, UIEvent, useCallback, useRef } from 'react';
import { useThrottleCallback } from '@react-hook/throttle';
import { bind, compose, curry, keys, map, nthArg, pipe, prop, transduce, values } from 'ramda';
import { useDebounceCallback } from '@react-hook/debounce';

type RefsParentType = Record<string, RefObject<HTMLElement>>;

const SCROLL_CHECKS_PER_SECOND = 10;

type SmallestPositiveAccumulator = null | {
  // these two properties store information about the smallest value found so far: what it was and where it was found
  idx?: number;
  value?: number;

  // where we are currently in the input list
  currentIndex: number;
};

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const _transduce: any = transduce, _compose: any = compose;

/**
 * A [transducer](https://github.com/cognitect-labs/transducers-js#transformer-protocol)
 * implementation that returns the index of the smallest positive value within a list of numbers.
 * Note that this is weakly typed because neither ramda nor the transducers-js library have typings that
 * correctly describe this type of transducer usage as far as I can tell
 */
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
function smallestPositiveTransducer(nextTransformer: any) {
  return {
    '@@transducer/result': pipe(prop('idx'), nextTransformer['@@transducer/result']),
    '@@transducer/step': (acc: SmallestPositiveAccumulator, currentValue: number) => {
      const newCurrentIndex = acc ? acc.currentIndex + 1 : 0,
          accWithIncrementedIndex = { ...acc, currentIndex: newCurrentIndex },
          next = bind(nextTransformer['@@transducer/step'], nextTransformer);

      // ignore null and non-positive values
      if (!currentValue || currentValue < 0) {
        if (acc) {
          return next(acc, accWithIncrementedIndex);
        }
        else {
          return accWithIncrementedIndex;
        }
      }
      else if (acc && typeof acc.value === 'number' && acc.value < currentValue) {
        return next(acc, accWithIncrementedIndex);
      }
      else {
        const newAcc = {
          idx: newCurrentIndex,
          value: currentValue,
          currentIndex: newCurrentIndex
        };

        return next(acc, newAcc);
      }
    }
  };
}

/**
 * How far from the top of its scroll container is the bottom of the element,
 * taking into account current scroll position
 */
const getBottomScrollOffset = curry(
    function getBottomScrollOffset(containerBoundingBox: DOMRect, el: Element | null): number | null {
      if (el) {
        const boundingBox = el.getBoundingClientRect();
        return boundingBox.bottom - containerBoundingBox.top;
      }
      else {
        return null;
      }
    }
);

export default function useScrollSpy<T extends RefsParentType>(sectionRefs: T) {
  const sectionNames = keys(sectionRefs),
      sectionRefValues = values(sectionRefs),
      firstSection = sectionNames[0],
      [activeSection, setActiveSection] = useState(firstSection),

      /*
       * The following refs help track whether we think a programmatic scroll initiated by scrollTo is
       * still in progress. We use the following criteria to determine when such a programmatic scroll has stopped:
       * 1. Is the scroll still moving in the same direction?
       * 2. Has it been more than a tenth of a second since we received a scroll event?
       * 3. Have we reached the ref that the programmatic scroll was destined for?
       */
      handlingProgrammaticScroll = useRef(false),
      programmaticScrollDirection = useRef<'down' | 'up' | null>(null),
      previousScrollTop = useRef<number | null>(null);

  /**
   * Users of this hook can call this function to scroll one of the named refs to the top of the container
   */
  function scrollTo(sectionName: keyof T) {
    handlingProgrammaticScroll.current = true;
    sectionRefs[sectionName].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(sectionName);
  }

  /**
   * Check the current scroll position and update activeSection accordingly.
   */
  const handleScroll = useCallback(function handleScroll(container: Element) {
    const containerBoundingBox = container.getBoundingClientRect(),

        // a transducer that finds the first visible or partially visible section
        transducer = _compose(
            map(prop('current')),
            map(getBottomScrollOffset(containerBoundingBox)),
            smallestPositiveTransducer
        ),

        smallestPositiveBottomOffsetIndex: number =
            _transduce(transducer, nthArg(1), null, sectionRefValues),
        newActiveSection = sectionNames[smallestPositiveBottomOffsetIndex];

    if (handlingProgrammaticScroll.current) {
      if (activeSection === newActiveSection) {
        resetProgrammaticScrollRefs();
      }
    }
    else {
      setActiveSection(newActiveSection);
    }
  }, [activeSection, ...sectionNames, ...sectionRefValues]);

  /**
   * Reset the refs that track programmatic scroll status and return whether or not a programmatic
   * scroll was in-progress
   */
  function resetProgrammaticScrollRefs() {
    const wasHandlingProgrammaticScroll = handlingProgrammaticScroll.current;

    handlingProgrammaticScroll.current = false;
    programmaticScrollDirection.current = null;
    previousScrollTop.current = null;

    return wasHandlingProgrammaticScroll;
  }

  /**
   * Reset the refs that track programmatic scroll status and, if a programmatic scroll was in-progress, call
   * handleScroll in order to update activeSection
   */
  const endProgrammaticScroll = useCallback(function endProgrammaticScroll(container: Element) {
    const wasHandlingProgrammaticScroll = resetProgrammaticScrollRefs();

    if (wasHandlingProgrammaticScroll) {
      handleScroll(container);
    }
  }, [handleScroll]);

  // A version of handleScroll that only executes up to once every tenth of a second, and a version of
  // endProgrammaticScroll that only executes after calls to it have ceased for at least a tenth of a second
  const throttledHandleScroll = useThrottleCallback(handleScroll, SCROLL_CHECKS_PER_SECOND),
      debouncedEndProgrammaticScroll = useDebounceCallback(endProgrammaticScroll, 1000 / SCROLL_CHECKS_PER_SECOND);

  /**
   * Listener that the hook caller should attach to the scroll container's onScroll prop
   */
  const onScroll = useCallback(function onScroll(evt: UIEvent) {
    if (handlingProgrammaticScroll.current) {
      const { scrollTop } = evt.currentTarget;

      if (previousScrollTop.current) {
        if (programmaticScrollDirection.current === 'down' && previousScrollTop.current > scrollTop) {
          // not going down anymore, programmatic scroll must be over/stopped by user
          resetProgrammaticScrollRefs();
        }
        else if (programmaticScrollDirection.current === 'up' && previousScrollTop.current < scrollTop) {
          // not going up anymore, programmatic scroll must be over/stopped by user
          resetProgrammaticScrollRefs();
        }
        else {
          if (programmaticScrollDirection.current === null) {
            programmaticScrollDirection.current = previousScrollTop.current < scrollTop ? 'down' : 'up';
          }

          previousScrollTop.current = scrollTop;
        }
      }
      else {
        previousScrollTop.current = scrollTop;
      }
    }

    // Note: this event object is reused within react for performance reasons and so currentTarget must be accessed
    // synchronously rather than within the throttled logic
    throttledHandleScroll(evt.currentTarget);

    // after scroll events stop for a tenth of a second, assume any current programmatic scroll has ceased
    debouncedEndProgrammaticScroll(evt.currentTarget);
  }, [throttledHandleScroll]);

  return { onScroll, scrollTo, activeSection };
}
