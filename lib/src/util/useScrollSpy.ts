/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { RefObject, useState, UIEvent, useCallback } from 'react';
import { useDebounceCallback } from '@react-hook/debounce';
import { bind, compose, curry, keys, map, nthArg, pipe, prop, transduce, values } from 'ramda';

type RefsParentType = Record<string, RefObject<HTMLElement>>;

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
      [activeSection, setActiveSection] = useState(firstSection);

  function scrollTo(sectionName: keyof T) {
    sectionRefs[sectionName].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const handleScroll = useCallback(function handleScroll(container: Element) {
    const containerBoundingBox = container.getBoundingClientRect(),

        // a transducer that finds the first visible or partially visible section
        transducer = _compose(
            map(prop('current')),
            map(getBottomScrollOffset(containerBoundingBox)),
            smallestPositiveTransducer
        ),

        smallestPositiveBottomOffsetIndex: number =
            _transduce(transducer, nthArg(1), null, sectionRefValues);

    setActiveSection(sectionNames[smallestPositiveBottomOffsetIndex]);
  }, [...sectionNames, ...sectionRefValues]);

  const debouncedHandleScroll = useDebounceCallback(handleScroll, 100);

  const onScroll = useCallback(function onScroll(evt: UIEvent) {
    // Note: this event object is reused within react for performance reasons and so currentTarget must be accessed
    // synchronously rather than within the debounced logic
    debouncedHandleScroll(evt.currentTarget);
  }, [debouncedHandleScroll]);

  return { onScroll, scrollTo, activeSection };
}
