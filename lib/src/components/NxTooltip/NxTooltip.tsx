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

// You may wonder why we have this wrapper that just passes through to mui Tooltip. It is to encapsulate the fact
// that we are using mui, and then limit the available props down to just those that would be still be easily supported
// if we switched to a different implementation
const NxTooltip: FunctionComponent<Props> =
    function NxTooltip({ className, title, children, open, scrollContainerRef, ...otherProps }) {
      const tooltipClassName = classnames('nx-tooltip', className),
          parentModal = useContext(NxModalContext),
          isUnmounted = useRef(false);

      const handleIntersection = useCallback(function handleIntersection(entries: IntersectionObserverEntry[]) {
        if (scrollContainerRef) {
          batch(() => {
            if (!isUnmounted.current) {
              setIsVisisble(any(prop('isIntersecting'), entries));
            }
          });
        }
      }, [scrollContainerRef]);

      const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(null),
          [intersectionRef] = useIntersectionObserverRef(handleIntersection, { root: scrollContainer }),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ref: Ref<HTMLElement> = useMergedRef(children.ref, intersectionRef),
          [isVisible, setIsVisisble] = useState(false),
          childrenWithRef = React.cloneElement(children, { ref });

      useEffect(function() {
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
