/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ReactElement, useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { always, clamp, dec, identity, inc, isNil } from 'ramda';
import useResizeObserver from '@react-hook/resize-observer';
import { useThrottleCallback } from '@react-hook/throttle';

import { Props } from './types';

export { Props };

// intended to wrap division operations that may result in NaN, returns zero instead in that case
const divOrZero = (x: number, y: number) => x === 0 || y === 0 ? 0 : x / y;

const DEFAULT_INITIAL_CHILD_COUNT = 40;

export default function NxScrollRender<T extends HTMLElement = HTMLElement>(props: Props<T>) {
  const { children, reuseChildren, initialChildCount, spacerEl } = props,
      fullParent = children,

      childArray = useMemo(() => React.Children.toArray(fullParent.props.children) as ReactElement[],
          [fullParent.props.children]),

      childCount = childArray.length,

      parentRef = useRef<T>(null),
      leadingSpacerRef = useRef<HTMLElement | null>(null),
      leadingSpacerRefFn = (e: HTMLElement | null) => { leadingSpacerRef.current = e; },
      trailingSpacerRef = useRef<HTMLElement | null>(null),
      trailingSpacerRefFn = (e: HTMLElement | null) => { trailingSpacerRef.current = e; },

      [parentHeight, setParentHeight] = useState<number | null>(null),
      [childHeight, setChildHeight] = useState<number | null>(null),
      normalizedChildHeight = childHeight ?? 0,
      renderedChildCount = parentHeight == null || childHeight == null ?
        null : Math.min(Math.ceil(divOrZero(parentHeight, childHeight)) + 2, childCount),

      cloneWithKey = (child: ReactElement, idx: number) =>
        React.cloneElement(child, { key: idx % (renderedChildCount as number) }),
      keyedChildren = useMemo(
          () => reuseChildren === false || isNil(renderedChildCount) ? childArray : childArray.map(cloneWithKey),
          [childArray, reuseChildren, renderedChildCount]
      ),

      sumChildHeight = normalizedChildHeight * childCount,
      renderedChildHeight = renderedChildCount == null ? 0 : normalizedChildHeight * renderedChildCount,

      [firstRenderedChildIdx, setFirstRenderedChildIdx] = useState(0),

      renderedChildCountWithDefault = renderedChildCount ?? initialChildCount ?? DEFAULT_INITIAL_CHILD_COUNT,
      renderedRealChildren =
          keyedChildren.slice(firstRenderedChildIdx, firstRenderedChildIdx + renderedChildCountWithDefault),

      sumSpacerHeight = sumChildHeight - renderedChildHeight,
      clampSpacerHeight = clamp(0, sumSpacerHeight),
      leadingSpacerHeight = clampSpacerHeight(firstRenderedChildIdx * normalizedChildHeight),
      trailingSpacerHeight = renderedChildCount == null ? 0 : clampSpacerHeight(
          sumChildHeight - (leadingSpacerHeight + renderedChildCount * normalizedChildHeight)
      );

  const renderedChildren = childCount ? (
    <>
      {React.createElement(spacerEl ?? 'div', {
        ref: leadingSpacerRefFn,
        role: 'presentation',
        className: 'nx-scroll-render__spacer',
        style: { height: leadingSpacerHeight }
      })}
      {renderedRealChildren}
      {React.createElement(spacerEl ?? 'div', {
        ref: trailingSpacerRefFn,
        role: 'presentation',
        className: 'nx-scroll-render__spacer',
        style: { height: trailingSpacerHeight }
      })}
    </>
  ) : null;

  const updateRendering = useThrottleCallback(useCallback(function updateRendering() {
    const scrollTop = parentRef.current?.scrollTop ?? 0,
        parentTop = parentRef.current?.getBoundingClientRect().top,
        leadingSpacerTop = leadingSpacerRef.current?.getBoundingClientRect().top,
        topDifference = (parentTop ?? 0) - (leadingSpacerTop ?? 0),
        topTooClose = topDifference < normalizedChildHeight,
        topTooFar = topDifference > normalizedChildHeight * 2,
        adjust =
          topTooClose ? dec :
          topTooFar ? inc :
          identity,
        clampFirstRenderedChildIdx =
            renderedChildCount == null ? always(0) : clamp(0, childCount - renderedChildCount),
        newFirstRenderedChildIdx = clampFirstRenderedChildIdx(
            adjust(Math.floor(divOrZero(scrollTop, normalizedChildHeight)) - 2)
        );

    setFirstRenderedChildIdx(newFirstRenderedChildIdx);
  }, [childCount, normalizedChildHeight, renderedChildCount, renderedChildHeight, sumChildHeight]), 15);

  const adjustedParent = React.cloneElement(fullParent, {
    ref: parentRef,
    children: renderedChildren,
    onScroll: updateRendering
  });

  useLayoutEffect(function() {
    if (parentRef.current) {
      // note: not counting the spacer
      const firstChild = parentRef.current.children[1],
          secondChild = parentRef.current.children[2];

      if (!secondChild) {
        setChildHeight(0);
      }
      else {
        const firstChildTop = firstChild?.getBoundingClientRect()?.top ?? 0,
            secondChildTop = secondChild?.getBoundingClientRect()?.top ?? 0;

        setChildHeight(secondChildTop - firstChildTop);
      }

      setParentHeight(parentRef.current.clientHeight);
    }
  }, [childCount === 0]);

  useResizeObserver(parentRef, useCallback(function({ contentBoxSize: [{ blockSize }] }) {
    setParentHeight(blockSize);
  }, []));

  return adjustedParent;
}
