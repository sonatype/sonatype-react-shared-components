/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, useRef, useState } from 'react';
import { textContent } from '../../util/childUtil';

import { OverflowTooltipProps, overflowTooltipPropTypes } from './types';
import NxTooltip from './NxTooltip';

// You may wonder why we have this wrapper that just passes through to mui Tooltip. It is to encapsulate the fact
// that we are using mui, and then limit the available props down to just those that would be still be easily supported
// if we switched to a different implementation
export default function NxOverflowTooltip({ children, ...otherProps }: OverflowTooltipProps) {
  const title = textContent(children),
      [needsTooltip, setNeedsTooltip] = useState(false),
      ref = useRef<Element>(null),
      childrenWithRef = React.cloneElement(children, { ref });

  useEffect(function() {
    const elementWithTooltip = ref.current;

    const resizeObserver = new ResizeObserver(function(entries) {
      for (const { target } of entries) {
        if (target === elementWithTooltip) {
          setNeedsTooltip(target.clientWidth < target.scrollWidth);
        }
      }
    });

    resizeObserver.observe(elementWithTooltip, { box: 'border-box' });

    return function() {
      resizeObserver.disconnect();
    };
  }, [title]);

  return (
    <NxTooltip { ...otherProps } title={needsTooltip ? title : ''}>
      {childrenWithRef}
    </NxTooltip>
  );
};

NxOverflowTooltip.propTypes = overflowTooltipPropTypes;
