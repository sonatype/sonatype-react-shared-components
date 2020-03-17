/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';

import { Props, propTypes, TooltipPlacement } from './types';
export { Props, propTypes, TooltipPlacement } from './types';

import './NxToolTip.scss';

function convertPlacement(placement: TooltipPlacement | null | undefined): TooltipProps['placement'] {
  switch (placement) {
    case 'top':
    case null:
    case undefined:
      return 'top-start';
    case 'bottom':
      return 'bottom-start';
    default:
      return placement;
  }
}

// thanks to PropTypes, we have to accept null in addition to undefined for all optional properties. MUI doesn't
// seem to follow that convention, so this function converts all null-valued props to undefined-valued props
function fixOptional(props: Props): TooltipProps {
  return {
    ...props,
    className: props.className || undefined,
    onOpen: props.onOpen || undefined,
    onClose: props.onClose || undefined,
    open: props.open === null ? undefined : props.open,
    placement: convertPlacement(props.placement),
    title: props.title || undefined
  };
}

// You may wonder why we have this wrapper that just passes through to mui Tooltip. It is to encapsulate the fact
// that we are using mui, and then limit the available props down to just those that would be still be easily supported
// if we switched to a different implementation
const NxTooltip: FunctionComponent<Props> =
    function NxTooltip({ className, ...otherProps }) {
      const tooltipClassName = classnames('nx-tooltip', className);

      return <Tooltip { ...fixOptional(otherProps) } classes={{ tooltip: tooltipClassName }} />;
    };

NxTooltip.propTypes = propTypes;
export default NxTooltip;
