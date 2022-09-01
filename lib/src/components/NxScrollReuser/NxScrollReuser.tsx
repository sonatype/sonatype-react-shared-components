/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import useResizeObserver from '@react-hook/resize-observer';
import { useThrottleCallback } from '@react-hook/throttle';

import { Props } from './types';
import { clamp, dec, defaultTo, identity, inc } from 'ramda';

// intended to wrap division operations that may result in NaN, returns zero instead in that case
const divOrZero = defaultTo(0);

export default function NxScrollReuser({ children }: Props) {
  const fullParent = children,
      allChildren = React.Children.toArray(fullParent.props.children),
      childCount = allChildren.length,

      parentRef = useRef<HTMLElement>(null),
      leadingSpacerRef = useRef<HTMLDivElement>(null),
      trailingSpacerRef = useRef<HTMLDivElement>(null),

      [parentHeight, setParentHeight] = useState(0),
      [childHeight, setChildHeight] = useState(0),
      sumChildHeight = childHeight * childCount,
      renderedChildCount = Math.ceil(divOrZero(parentHeight / childHeight)) + 2,
      renderedChildHeight = childHeight * renderedChildCount,

      [leadingSpacerHeight, setLeadingSpacerHeight] = useState(0),
      [trailingSpacerHeight, setTrailingSpacerHeight] = useState(0),

      [firstRenderedChildIdx, setFirstRenderedChildIdx] = useState(0),
      renderedRealChildren = allChildren.slice(firstRenderedChildIdx, firstRenderedChildIdx + renderedChildCount);

  const renderedChildren = (
    <>
      <div ref={leadingSpacerRef}
           className="nx-scroll-reuser__spacer"
           style={{ height: leadingSpacerHeight }} />
      {renderedRealChildren}
      <div ref={trailingSpacerRef}
           className="nx-scroll-reuser__spacer"
           style={{ height: trailingSpacerHeight }} />
    </>
  );

  const updateRendering = useThrottleCallback(useCallback(function updateRendering() {
    const scrollTop = parentRef.current?.scrollTop ?? 0,
        parentTop = parentRef.current?.getBoundingClientRect().top,
        leadingSpacerTop = leadingSpacerRef.current?.getBoundingClientRect().top,
        topDifference = (parentTop ?? 0) - (leadingSpacerTop ?? 0),
        topTooClose = topDifference < childHeight,
        topTooFar = topDifference > childHeight * 2,
        adjust =
          topTooClose ? dec :
          topTooFar ? inc :
          identity,
        sumSpacerHeight = sumChildHeight - renderedChildHeight,
        clampFirstRenderedChildIdx = clamp(0, childCount - renderedChildCount),
        clampSpacerHeight = clamp(0, sumSpacerHeight),
        newFirstRenderedChildIdx = clampFirstRenderedChildIdx(
            adjust(Math.floor(divOrZero(scrollTop / childHeight)) - 2)
        ),
        newLeadingSpacerHeight = clampSpacerHeight(newFirstRenderedChildIdx * childHeight),
        newTrailingSpacerHeight = clampSpacerHeight(
            sumChildHeight - (newLeadingSpacerHeight + renderedChildCount * childHeight)
        );

    setFirstRenderedChildIdx(newFirstRenderedChildIdx);
    setLeadingSpacerHeight(newLeadingSpacerHeight);
    setTrailingSpacerHeight(newTrailingSpacerHeight);
  }, [childCount, childHeight, renderedChildCount, renderedChildHeight, sumChildHeight]), 15);

  const adjustedParent = React.cloneElement(fullParent, {
    ref: parentRef,
    children: renderedChildren,
    onScroll: updateRendering
  });

  useLayoutEffect(function() {
    if (parentRef.current) {
      // note: not counting the spacer
      const firstChild = parentRef.current.children[1],
          secondChild = parentRef.current.children[2],
          firstChildTop = firstChild?.getBoundingClientRect()?.top ?? 0,
          secondChildTop = secondChild?.getBoundingClientRect()?.top ?? 0;

      setChildHeight(secondChildTop - firstChildTop);
    }
  }, []);

  useResizeObserver(parentRef, useCallback(function({ contentBoxSize: [{ blockSize }] }) {
    setParentHeight(blockSize);
  }, []));

  useEffect(updateRendering, [updateRendering]);

  return adjustedParent;
}
