/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef, useState, useEffect, useCallback } from 'react';
import useResizeObserver from '@react-hook/resize-observer';
import useMergedRef from '@react-hook/merged-ref';

import { textContent } from '../../util/childUtil';

import { OverflowTooltipProps, overflowTooltipPropTypes } from './types';
import NxTooltip from './NxTooltip';
import { any, defaultTo, map, sum } from 'ramda';
import batch from './updateBatcher';

export { OverflowTooltipProps };

function parsePx(pxStr: string) {
  const unitStrippedStr = pxStr?.match(/(.*)px$/)?.[1];
  return unitStrippedStr == null ? null : parseFloat(unitStrippedStr);
}

// Rounding floats to a particular number of decimal places is an uncertain thing, since floats are internally
// coded in base 2 and not base 10. So instead we round to a "bicemals" place (not sure if that's the real world)
const ROUNDING_BICEMALS_PLACE = 5;
function roundTo5Bicemals(num: number) {
  const multiplier = 1 << ROUNDING_BICEMALS_PLACE;
  return Math.round(num * multiplier) / multiplier;
}

function sanityCheckParsedSizes(paddingRight: number | null, borderRightWidth: number | null) {
  // We know this happens in JSDOM; we don't need warnings about it there. The warnings are so we notice
  // if this ever happens in a real browser
  if (!navigator.userAgent.includes('jsdom')) {
    if (paddingRight == null) {
      console.warn('Got non-pixel computed value for padding-right, assuming 0');
    }
    if (borderRightWidth == null) {
      console.warn('Got non-pixel computed value for border-right-width, assuming 0');
    }
  }
}

function getContentBoxRight(el: Element) {
  const boundingClientRect = el.getBoundingClientRect();

  if (el instanceof HTMLElement) {
    const { paddingRight, borderRightWidth } = getComputedStyle(el),
        parsedSizes = map(parsePx, [paddingRight, borderRightWidth]) as [number | null, number | null],
        paddingBorderSum = sum(map(defaultTo(0), parsedSizes));

    // I've seen cases where paddings defined in % units don't get converted to px on inline elements.
    // This would be a very rare case where expected behavior is unclear, so just warn about it
    sanityCheckParsedSizes(...parsedSizes);

    return boundingClientRect.right - paddingBorderSum;
  }
  else {
    return boundingClientRect.right;
  }
}

// Get the rightmost edge of the bounding rectangles of all text content children of el
function getTextBoundingRectRight(el: Element) {
  const nodeIterator = document.createNodeIterator(el, NodeFilter.SHOW_TEXT),
      range = new Range();

  let right;
  for (let node = nodeIterator.nextNode(); node != null; node = nodeIterator.nextNode()) {
    range.selectNode(node);

    const nodeBoundingBox = range.getBoundingClientRect();

    // accumulate farthest right
    right = right != null && right > nodeBoundingBox.right ? right : nodeBoundingBox.right;
  }

  return right;
}

// Note: this won't detect overflowing non-text content, but for the purpose of an overflow tooltip we
// only care about text content anyway
function isOverflowing(el: Element) {
  const contentBoxRight = getContentBoxRight(el),
      textBoundingRectRight = getTextBoundingRectRight(el);

  // rounding due to discrepancies within the browser engine at non-100% zoom levels
  return textBoundingRectRight ? roundTo5Bicemals(contentBoxRight) < roundTo5Bicemals(textBoundingRectRight) : false;
}

function selfOrChildrenOverflowing(el: Element): boolean {
  return isOverflowing(el) || any(selfOrChildrenOverflowing, Array.from(el.children));
}

export default function NxOverflowTooltip<C extends HTMLElement = HTMLElement>(props: OverflowTooltipProps<C>) {
  const { title, children, ...otherProps } = props,
      computedTitle = title || textContent(children),
      [needsTooltip, setNeedsTooltip] = useState(false),
      ref = useRef<C>(null),
      isUnmounted = useRef(false),
      childRef = children.ref,
      mergedRef = useMergedRef(ref, childRef ?? null),
      childrenWithRef = React.cloneElement(children, { ref: mergedRef });

  const updateNeedsTooltip = useCallback(function updateNeedsTooltip() {
    const el = ref.current;

    batch(() => {
      if (!isUnmounted.current) {
        setNeedsTooltip(!!el && selfOrChildrenOverflowing(el));
      }
    });
  }, []);

  // check the width on initial layout and any time computedTitle changes
  useEffect(updateNeedsTooltip, [computedTitle]);
  useEffect(() => () => { isUnmounted.current = true; }, []);

  // check the width any time the element resizes
  useResizeObserver(ref, updateNeedsTooltip);

  return (
    <NxTooltip { ...otherProps } title={needsTooltip ? computedTitle : ''}>
      {childrenWithRef}
    </NxTooltip>
  );
}

NxOverflowTooltip.propTypes = overflowTooltipPropTypes;
