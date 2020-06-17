/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { Props, propTypes } from './types';
import NxTooltip from '../NxTooltip/NxTooltip';
import NxButton from '../NxButton/NxButton';
import { wrapTooltipProps } from '../../util/tooltipUtils';
import CaratUp from '../../icons/CaratUp';
import CaratDown from '../../icons/CaratDown';
import './NxDropdown.scss';

const NxDropdown: FunctionComponent<Props> = function NxDropdown(props) {
  const {
    variant,
    label,
    className,
    isOpen,
    onToggleCollapse,
    disabled,
    children,
    toggleTooltip,
    ...attrs
  } = props;

  const buttonClasses = classnames('nx-dropdown__toggle', { disabled, open: isOpen });

  const classes = classnames('nx-dropdown', className);

  const toggleTooltipProps = toggleTooltip && wrapTooltipProps(toggleTooltip);

  const toggle = (
    <NxButton variant={variant || 'tertiary'}
              className={buttonClasses}
              onClick={!disabled && onToggleCollapse || undefined}>
      <span className="nx-dropdown__toggle-label">{ label }</span>
      { isOpen ? <CaratUp/> : <CaratDown/> }
    </NxButton>
  );

  return (
    <div className={classes} {...attrs}>
      { toggleTooltipProps ? <NxTooltip { ...toggleTooltipProps } >{toggle}</NxTooltip> : toggle }

      { isOpen &&
        <div className="nx-dropdown-menu">
          {children}
        </div>
      }
    </div>
  );
};

NxDropdown.propTypes = propTypes;
export default NxDropdown;

export const NxDropdownDivider = () => (
  <div className="nx-dropdown--divider"/>
);

export { Props, propTypes } from './types';
