/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef, useState, useLayoutEffect } from 'react';
import useResizeObserver from '@react-hook/resize-observer';

import { textContent } from '../../util/childUtil';

import { OverflowTooltipProps, overflowTooltipPropTypes } from './types';
import NxTooltip from './NxTooltip';
import { any } from 'ramda';

export { OverflowTooltipProps };

function isOverflowing(el: Element) {
  return el.clientWidth < el.scrollWidth;
}

function selfOrChildrenOverflowing(el: Element): boolean {
  return isOverflowing(el) || any(selfOrChildrenOverflowing, Array.from(el.children));
}

export default function NxOverflowTooltip({ title, children, ...otherProps }: OverflowTooltipProps) {
  const computedTitle = title || textContent(children),
      [needsTooltip, setNeedsTooltip] = useState(false),
      ref = useRef<HTMLElement>(null),
      childrenWithRef = React.cloneElement(children, { ref });

  function updateNeedsTooltip() {
    const el = ref.current;

    setNeedsTooltip(!!el && selfOrChildrenOverflowing(el));
  }

  // check the width on initial layout and any time computedTitle changes
  useLayoutEffect(updateNeedsTooltip, [computedTitle]);

  // check the width any time the element resizes
  useResizeObserver(ref, updateNeedsTooltip);

  return (
    <NxTooltip { ...otherProps } title={needsTooltip ? computedTitle : ''}>
      {childrenWithRef}
    </NxTooltip>
  );
};

NxOverflowTooltip.propTypes = overflowTooltipPropTypes;
