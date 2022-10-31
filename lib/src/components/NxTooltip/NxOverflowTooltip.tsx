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
      console.warn('Got non-pixel computed value for border-rigth-width, assuming 0');
    }

    return boundingClientRect.width - paddingBorderSum;
  }
  else {
    return boundingClientRect.width;
  }
}

// Note: this won't detect overflowing non-text content, but for the purpose of an overflow tooltip we
// only care about text content anyway
function isOverflowing(el: Element) {
  const contentBoxWidth = getContentBoxWidth(el),
      range = new Range();

  range.selectNode(el);
  const contentBoundingRectWidth = range.getBoundingClientRect().width;
  range.detach();

  return contentBoxWidth < contentBoundingRectWidth;
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
