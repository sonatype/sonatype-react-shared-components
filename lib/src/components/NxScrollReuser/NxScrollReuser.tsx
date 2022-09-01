/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import useResizeObserver from '@react-hook/resize-observer';

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

      /*
       * Intersection Observers that check when the leading spacing is within one child of being
       * visible (innerIsIntersecting), and when it is within two children of being visible (outerIsIntersecting).
       * When it is within two children but not one, things are fine. When it is no longer within two children,
       * the container has scrolled down and rows should be added to the bottom and removed from the top.
       * When it is within one child, the container has scrolled up and rows should be added to the top and removed
       * from the bottom
       */
      //{ isIntersecting: outerIsIntersecting } = useIntersectionObserver(leadingSpacerRef, {
        //root: parentRef.current,
        //rootMargin: `${childHeight * 2}px 0px 0px 0px`,
        //initialIsIntersecting: true
      //}),
      //{ isIntersecting: innerIsIntersecting } = useIntersectionObserver(leadingSpacerRef, {
        //root: parentRef.current,
        //rootMargin: `${childHeight}px 0px 0px 0px`,
        //initialIsIntersecting: true
      //});

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

  const updateRendering = useCallback(function updateRendering() {
    const scrollTop = parentRef.current?.scrollTop ?? 0,
        parentTop = parentRef.current?.getBoundingClientRect().top,
        leadingSpacerTop = leadingSpacerRef.current?.getBoundingClientRect().top,
        topDifference = (parentTop ?? 0) - (leadingSpacerTop ?? 0),
        topTooClose = topDifference < childHeight,
        topTooFar = topDifference > childHeight * 2,
        adjust = topTooClose ? dec :
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

    console.assert(newLeadingSpacerHeight + newTrailingSpacerHeight === sumSpacerHeight, 'Spacer heights do not add up');

    console.log('updateRendering');
    console.log('  scrollTop', scrollTop);
    console.log('  parentTop', parentTop);
    console.log('  leadingSpacerTop', leadingSpacerTop);
    console.log('  topDifference', topDifference);
    console.log('  topTooClose', topTooClose);
    console.log('  topTooFar', topTooFar);
    console.log('  newFirstRenderedChildIdx', newFirstRenderedChildIdx);
    console.log('  newLeadingSpacerHeight', newLeadingSpacerHeight);
    console.log('  newTrailingSpacerHeight', newTrailingSpacerHeight);

    setFirstRenderedChildIdx(newFirstRenderedChildIdx);
    setLeadingSpacerHeight(newLeadingSpacerHeight);
    setTrailingSpacerHeight(newTrailingSpacerHeight);
  }, [childCount, childHeight, renderedChildCount, renderedChildHeight, sumChildHeight]);

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

  // update first rendered child and spacer sizes
  //const updateRendering = useCallback(function updateRendering(goingDown: boolean) {
    //const scrollTop = parentRef.current?.scrollTop ?? 0,
        //adjust = goingDown ? inc : dec,
        //newFirstRenderedChildIdx = Math.max(0, adjust(Math.floor(divOrZero(scrollTop / childHeight)) - 2)),

        //newLeadingSpacerHeight = newFirstRenderedChildIdx * childHeight,
        //newTrailingSpacerHeight = sumChildHeight -
            //(newLeadingSpacerHeight + renderedChildCount * childHeight);

    //console.log('updateRendering');
    //console.log('  scrollTop', scrollTop);
    //console.log('  goingDown', goingDown);
    //console.log('  newFirstRenderedChildIdx', newFirstRenderedChildIdx);
    //console.log('  newLeadingSpacerHeight', newLeadingSpacerHeight);
    //console.log('  newTrailingSpacerHeight', newTrailingSpacerHeight);

    //setFirstRenderedChildIdx(newFirstRenderedChildIdx);
    //setLeadingSpacerHeight(newLeadingSpacerHeight);
    //setTrailingSpacerHeight(newTrailingSpacerHeight);
  //}, [childHeight, renderedChildCount, sumChildHeight]);

  //useEffect(function handleLeadingSpacerIntersectionChange() {
    //console.log('handleLeadingSpacerIntersectionChange');
    //console.log('  outerIsIntersecting', outerIsIntersecting);
    //console.log('  innerIsIntersecting', innerIsIntersecting);

    //if (outerIsIntersecting) {
      //if (innerIsIntersecting) {
        //updateRendering(false);
      //}
      //else {
        //// Between the two, stable
      //}
    //}
    //else {
      //if (innerIsIntersecting) {
        //throw new TypeError(
            //'Encountered situation which should be impossible: top spacer is reported to be within one child\'s ' +
            //'height of the scroll container, and simultaneously farther than two child\'s height of the ' +
            //'scroll container'
        //);
      //}
      //else {
        //updateRendering(true);
      //}
    //}
  //}, [outerIsIntersecting, innerIsIntersecting, updateRendering]);

  return adjustedParent;
}
