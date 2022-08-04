/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';
import useResizeObserver from '@react-hook/resize-observer';

import { Props } from './types';
import { dec, defaultTo, inc } from 'ramda';

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
      renderedChildCount = divOrZero(parentHeight/ childHeight) + 2,

      [leadingSpacerHeight, setLeadingSpacerHeight] = useState(0),
      [trailingSpacerHeight, setTrailingSpacerHeight] = useState(0),

      [firstRenderedChildIdx, setFirstRenderedChildIdx] = useState(0),
      renderedRealChildren = allChildren.slice(firstRenderedChildIdx, firstRenderedChildIdx + renderedChildCount),

      observerOpts = {
        root: parentRef.current,
        rootMargin: `${childHeight}px 0px ${childHeight}px 0px`
      },
      { isIntersecting: isLeadingSpacerIntersecting } = useIntersectionObserver(leadingSpacerRef, observerOpts),
      { isIntersecting: isTrailingSpacerIntersecting } = useIntersectionObserver(trailingSpacerRef, observerOpts);

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

  const adjustedParent = React.cloneElement(fullParent, { ref: parentRef, children: renderedChildren });

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

  // update first rendered child and spacer sizes
  const updateRendering = useCallback(function updateRendering(goingDown: boolean) {
    const scrollTop = parentRef.current?.scrollTop ?? 0,
        adjust = goingDown ? inc : dec,
        newFirstRenderedChildIdx = Math.max(0, adjust(Math.floor(divOrZero(scrollTop / childHeight)))),

        newLeadingSpacerHeight = newFirstRenderedChildIdx * childHeight,
        newTrailingSpacerHeight = sumChildHeight -
            (newLeadingSpacerHeight + renderedChildCount * childHeight);

    setFirstRenderedChildIdx(newFirstRenderedChildIdx);
    setLeadingSpacerHeight(newLeadingSpacerHeight);
    setTrailingSpacerHeight(newTrailingSpacerHeight);
  }, [leadingSpacerHeight, trailingSpacerHeight, childHeight, renderedChildCount, sumChildHeight]);

  useEffect(function handleLeadingSpacerIntersectionChange() {
    updateRendering(!isLeadingSpacerIntersecting);
  }, [isLeadingSpacerIntersecting, updateRendering]);

  useEffect(function handleTrailingSpacerIntersectionChange() {
    updateRendering(isTrailingSpacerIntersecting);
  }, [isTrailingSpacerIntersecting, updateRendering]);


  return adjustedParent;
}
