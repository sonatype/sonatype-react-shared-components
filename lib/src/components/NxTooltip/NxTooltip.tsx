/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { createContext, FunctionComponent, Ref, useCallback, useContext, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';

import { NxModalContext } from '../NxModal/NxModal';
import { Props, propTypes, TooltipPlacement } from './types';
export { Props, propTypes, TooltipPlacement } from './types';

import './NxToolTip.scss';
import useMergedRef from '../../util/useMergedRef';
import useIntersectionObserverRef from '@rooks/use-intersection-observer-ref';
import { any, prop } from 'ramda';
import batch from './updateBatcher';

function convertPlacement(placement: TooltipPlacement | null | undefined): TooltipProps['placement'] {
  switch (placement) {
    case 'top':
    case null:
    case undefined:
      return 'top-start';
    case 'bottom':
      return 'bottom-start';
    case 'top-middle':
      return 'top';
    case 'bottom-middle':
      return 'bottom';
    default:
      return placement;
  }
}

// thanks to PropTypes, we have to accept null in addition to undefined for all optional properties. MUI doesn't
// seem to follow that convention, so this function converts all null-valued props to undefined-valued props
function fixOptional(props: Omit<Props, 'title' | 'children'>): Omit<TooltipProps, 'title' | 'children'> {
  return {
    ...props,
    className: props.className || undefined,
    onOpen: props.onOpen || undefined,
    onClose: props.onClose || undefined,
    open: props.open === null ? undefined : props.open,
    placement: convertPlacement(props.placement)
  };
}

/*
 * This context tells components whether they are already wrapped within an NxTooltip, which can prevent them
 * from rendering an NxTooltip themselves. This is particularly important for components such as NxButton that
 * conditionally render a tooltip depending on whether they have received a `title` prop. If the NxButton is wrapped
 * in an NxTooltip, it gets a title passed to it but only when the actual tooltip is not displayed. If NxButton
 * needs to know whether to render its own tooltip internally based on the title prop, that can get screwed up.
 */
export const TooltipContext = createContext<boolean>(false);

const NxTooltip: FunctionComponent<Props> =
    function NxTooltip({ className, title, children, scrollContainerRef, ...otherProps }) {

      /*
       * For performance reasons, in some cases it can be worthwhile to only activate tooltips on items
       * that are scrolled into view: For instance in a large NxTransferList where only about 10 items are
       * visible at a time, but there could be thousands, all with tooltips. When scrollContainerRef is defined,
       * we use an IntersectionObserver to track whether this item is scrolled into view within that container,
       * and enable the tooltip only if so.
       */
      const handleIntersection = useCallback(function handleIntersection(entries: IntersectionObserverEntry[]) {
        if (scrollContainerRef) {
          // use batching. If there are many tooltips checking their scroll position, batching improves throughput
          // substantially
          batch(() => {
            if (!isUnmounted.current) {
              setIsVisisble(any(prop('isIntersecting'), entries));
            }
          });
        }
      }, [scrollContainerRef]);

      const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(null),
          [isVisible, setIsVisisble] = useState(!scrollContainerRef),

          tooltipClassName = classnames('nx-tooltip', className),
          parentModal = useContext(NxModalContext),
          [intersectionRef] = useIntersectionObserverRef(handleIntersection, { root: scrollContainer }),

          isUnmounted = useRef(false),
          ref: Ref<HTMLElement> = useMergedRef(children.ref, intersectionRef),
          childrenWithRef = React.cloneElement(children, { ref });

      useEffect(function() {
        // The useIntersectionObserverRef API requires an actual DOM node for the root (rather than a Ref containing
        // one). On first render the ref isn't typically populated yet, so we have to use useEffect to wait until it
        // is populated, and then set it as a state value to trigger a re-render
        setScrollContainer(scrollContainerRef?.current ?? null);
      }, [scrollContainerRef?.current]);

      useEffect(() => () => { isUnmounted.current = true; }, []);

      return (
        <TooltipContext.Provider value={true}>
          <Tooltip { ...fixOptional(otherProps) }
                   title={isVisible && title || ''}
                   classes={{ tooltip: tooltipClassName }}
                   PopperProps={{ container: parentModal }}>
            {childrenWithRef}
          </Tooltip>
        </TooltipContext.Provider>
      );
    };

NxTooltip.propTypes = propTypes;
export default NxTooltip;
