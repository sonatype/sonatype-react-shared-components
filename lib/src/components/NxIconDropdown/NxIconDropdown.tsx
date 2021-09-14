/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, ReactElement } from 'react';
import classnames from 'classnames';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { Props, propTypes } from './types';
import NxButton from '../NxButton/NxButton';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import './NxIconDropdown.scss';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';
import NxDropdownMenu from '../NxDropdownMenu/NxDropdownMenu';
import useDropdownEvents from '../../util/useDropdownEvents';

const NxIconDropdown: FunctionComponent<Props> = function NxIconDropdown(props) {
  const {
    icon,
    className,
    isOpen,
    disabled,
    children,
    title,
    onToggleCollapse: externalOnToggleCollapse,
    onKeyDown: externalOnKeyDown,
    onCloseClick,
    onCloseKeyDown,
    ...attrs
  } = props;

  const { onKeyDown, onToggleCollapse, menuRef, toggleRef, onMenuClosing } =
      useDropdownEvents(isOpen, disabled, externalOnToggleCollapse, onCloseClick, onCloseKeyDown, externalOnKeyDown);

  const buttonClasses = classnames('nx-icon-dropdown__toggle', { disabled, open: isOpen });

  const classes = classnames('nx-dropdown nx-icon-dropdown', className);

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
              aria-expanded={isOpen}
              title={title}>
      <NxFontAwesomeIcon icon={icon || faEllipsisV}/>
    </NxButton>
  );

  return (
    <div className={classes} onKeyDown={onKeyDown} {...attrs}>
      {toggle}
      { isOpen && <NxDropdownMenu ref={menuRef} onClosing={onMenuClosing}>{wrappedChildren}</NxDropdownMenu> }
    </div>
  );
};

NxIconDropdown.propTypes = propTypes;
export default NxIconDropdown;

export { Props, propTypes } from './types';
