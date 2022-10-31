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

function getContentBoxWidth(el: Element) {
  const boundingClientRect = el.getBoundingClientRect();

  if (el instanceof HTMLElement) {
    const { paddingLeft, paddingRight, borderLeftWidth, borderRightWidth } = getComputedStyle(el),
        parsedSizes = map(parsePx, [paddingLeft, paddingRight, borderLeftWidth, borderRightWidth]),
        paddingBorderSum = sum(map(defaultTo(0), parsedSizes));

    // I've seen cases where paddings defined in % units don't get converted to px on inline elements.
    // This would be a very rare case where expected behavior is unclear, so just warn about it
    if (parsedSizes[0] == null) {
      console.warn('Got non-pixel computed value for padding-left, assuming 0');
    }
    if (parsedSizes[1] == null) {
      console.warn('Got non-pixel computed value for padding-right, assuming 0');
    }
    if (parsedSizes[2] == null) {
      console.warn('Got non-pixel computed value for border-left-width, assuming 0');
    }
    if (parsedSizes[2] == null) {
      console.warn('Got non-pixel computed value for border-right-width, assuming 0');
    }

    return boundingClientRect.width - paddingBorderSum;
  }
  else {
    return boundingClientRect.width;
  }
}

// Get the width of the bounding rectangle of all text content children of el
function getTextBoundingRectWidth(el: Element) {
  const nodeIterator = document.createNodeIterator(el, NodeFilter.SHOW_TEXT),
      range = new Range();

  let left, right;
  for (let node = nodeIterator.nextNode(); node != null; node = nodeIterator.nextNode()) {
    range.selectNode(node);

    const nodeBoundingBox = range.getBoundingClientRect();

    // accumulate widest spread
    left = left != null && left < nodeBoundingBox.left ? left : nodeBoundingBox.left;
    right = right != null && right > nodeBoundingBox.right ? right : nodeBoundingBox.right;
  }

  return right == null || left == null ? 0 : right - left;
}

// Note: this won't detect overflowing non-text content, but for the purpose of an overflow tooltip we
// only care about text content anyway
function isOverflowing(el: Element) {
  const contentBoxWidth = getContentBoxWidth(el),
      textBoundingRectWidth = getTextBoundingRectWidth(el);

  return contentBoxWidth < textBoundingRectWidth;
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
