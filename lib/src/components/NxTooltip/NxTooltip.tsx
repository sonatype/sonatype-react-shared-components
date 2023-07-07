/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { createContext, FunctionComponent, useContext, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

import { DialogContext } from '../AbstractDialog/AbstractDialog';
import { Props, propTypes, TooltipPlacement } from './types';
export { Props, propTypes, TooltipPlacement } from './types';

import './NxToolTip.scss';
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
function fixOptional(props: Omit<Props, 'title'>): Omit<TooltipProps, 'title'> {
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
    function NxTooltip({ className, title, ...otherProps }) {

      const [initialized, setInitialized] = useState(false),
          tooltipClassName = classnames('nx-tooltip', className),
          parentModalContextValue = useContext(DialogContext),
          isUnmounted = useRef(false);

      useEffect(function() {
        batch(() => {
          if (!isUnmounted.current) {
            setInitialized(true);
          }
        });

        return () => { isUnmounted.current = true; };
      }, []);

      return (
        <TooltipContext.Provider value={true}>
          <Tooltip { ...fixOptional(otherProps) }
                   title={initialized && title || ''}
                   classes={{ tooltip: tooltipClassName }}
                   PopperProps={{ container: parentModalContextValue?.dialog }} />
        </TooltipContext.Provider>
      );
    };

NxTooltip.propTypes = propTypes;
export default NxTooltip;
