/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, ReactElement } from 'react';
import classnames from 'classnames';

import { Props, propTypes } from './types';
import NxTooltip from '../NxTooltip/NxTooltip';
import NxButton from '../NxButton/NxButton';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { wrapTooltipProps } from '../../util/tooltipUtils';
import './NxDropdownIconOnly.scss';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';
import NxDropdownMenu from '../NxDropdownMenu/NxDropdownMenu';
import useDropdownEvents from '../../util/useDropdownEvents';

const NxDropdownIconOnly: FunctionComponent<Props> = function NxDropdownIconOnly(props) {
  const {
    icon,
    className,
    isOpen,
    disabled,
    children,
    toggleTooltip,
    onToggleCollapse: externalOnToggleCollapse,
    onKeyDown: externalOnKeyDown,
    onCloseClick,
    onCloseKeyDown,
    ...attrs
  } = props;

  const { onKeyDown, onToggleCollapse, menuRef, toggleRef, onMenuClosing } =
      useDropdownEvents(isOpen, disabled, externalOnToggleCollapse, onCloseClick, onCloseKeyDown, externalOnKeyDown);

  const buttonClasses = classnames('nx-dropdown__toggle', { disabled, open: isOpen });

  const classes = classnames('nx-dropdown nx-dropdown--icon-only', className);

  const toggleTooltipProps = toggleTooltip && wrapTooltipProps(toggleTooltip);

  // Wrap .nx-dropdown-button and .nx-dropdown-link children in overflow tooltips
  const wrappedChildren = children && React.Children.map<ReactElement, ReactElement>(children, child => (
    /(\s|^)nx-dropdown-(button|link)(\s|$)/.test(child.props.className) ?
      <NxOverflowTooltip>{child}</NxOverflowTooltip> :
      child
  ));

  const toggle = (
    <NxButton ref={toggleRef}
              type="button"
              variant="icon-only"
              className={buttonClasses}
              onClick={!disabled && onToggleCollapse || undefined}
              aria-haspopup="true"
              aria-expanded={isOpen}>
      <NxFontAwesomeIcon icon={icon} />
    </NxButton>
  );

  return (
    <div className={classes} onKeyDown={onKeyDown} {...attrs}>
      { toggleTooltipProps ? <NxTooltip { ...toggleTooltipProps } >{toggle}</NxTooltip> : toggle }
      { isOpen && <NxDropdownMenu ref={menuRef} onClosing={onMenuClosing}>{wrappedChildren}</NxDropdownMenu> }
    </div>
  );
};

NxDropdownIconOnly.propTypes = propTypes;
export default NxDropdownIconOnly;

export const NxDropdownDivider = () => (
  <div className="nx-dropdown--divider"/>
);

export { Props, propTypes } from './types';
