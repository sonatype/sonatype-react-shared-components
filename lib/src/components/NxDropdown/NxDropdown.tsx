/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, ReactElement } from 'react';
import classnames from 'classnames';
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';

import { Props, propTypes } from './types';
import NxTooltip from '../NxTooltip/NxTooltip';
import NxButton from '../NxButton/NxButton';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { wrapTooltipProps } from '../../util/tooltipUtils';
import './NxDropdown.scss';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';

import AbstractDropdown, { AbstractDropdownRenderToggleElement } from './AbstractDropdown';

const NxDropdown = forwardRef<HTMLDivElement, Props>(function NxDropdown(props, ref) {
  const {
    children,
    className,
    disabled,
    isOpen,
    label,
    toggleTooltip,
    variant,
    ...otherProps
  } = props;

  const buttonClasses = classnames('nx-dropdown__toggle', { disabled, open: isOpen });

  const classes = classnames('nx-dropdown', className);

  const toggleTooltipProps = toggleTooltip && wrapTooltipProps(toggleTooltip);

  // Wrap .nx-dropdown-button and .nx-dropdown-link children in overflow tooltips
  const wrappedChildren = children && React.Children.map<ReactElement, ReactElement>(children, child => (
    /(\s|^)nx-dropdown-(button|link)(\s|$)/.test(child.props.className) ?
      <NxOverflowTooltip>{child}</NxOverflowTooltip> :
      child
  ));

  const renderToggleElement: AbstractDropdownRenderToggleElement = (toggleRef, onToggleCollapse) => {
    const button = (
      <NxButton ref={toggleRef}
                type="button"
                variant={variant || 'tertiary'}
                className={buttonClasses}
                onClick={!disabled && onToggleCollapse || undefined}
                aria-haspopup="true"
                aria-expanded={isOpen}>
        <span className="nx-dropdown__toggle-label">{ label }</span>
        <NxFontAwesomeIcon className="nx-dropdown__toggle-caret" icon={isOpen ? faCaretUp : faCaretDown} size="lg" />
      </NxButton>
    );

    return toggleTooltipProps ? <NxTooltip { ...toggleTooltipProps } >{button}</NxTooltip> : button;
  };

  return (
    <AbstractDropdown className={classes}
                      isOpen={isOpen}
                      disabled={disabled}
                      renderToggleElement={renderToggleElement}
                      ref={ref}
                      { ...otherProps }
    >
      { wrappedChildren }
    </AbstractDropdown>
  );
});

NxDropdown.propTypes = propTypes;

export default NxDropdown;

export const NxDropdownDivider = () => (
  <div className="nx-dropdown--divider"/>
);

export { Props, propTypes } from './types';
