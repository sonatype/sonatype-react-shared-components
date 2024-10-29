/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { Props, propTypes } from './types';
import NxButton from '../NxButton/NxButton';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import './NxIconDropdown.scss';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';

import AbstractDropdown, { AbstractDropdownRenderToggleElement } from '../NxDropdown/AbstractDropdown';
import { OptionalReactElement } from '../../util/reactUtil';

const NxIconDropdown: FunctionComponent<Props> = function NxIconDropdown(props) {
  const {
    icon,
    className,
    isOpen,
    disabled,
    children,
    title,
    ...otherProps
  } = props;

  const buttonClasses = classnames('nx-icon-dropdown__toggle', { disabled, open: isOpen });

  const classes = classnames('nx-dropdown nx-icon-dropdown', className);

  // Wrap .nx-dropdown-button and .nx-dropdown-link children in overflow tooltips
  const wrappedChildren = children && React.Children.map<OptionalReactElement, OptionalReactElement>(
      children,
      child => (
        child && typeof child !== 'boolean' && /(\s|^)nx-dropdown-(button|link)(\s|$)/.test(child.props.className) ?
          <NxOverflowTooltip>{child}</NxOverflowTooltip> :
          child
      )
  );

  const renderToggleElement: AbstractDropdownRenderToggleElement = (toggleRef, onToggleCollapse) => (
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
    <AbstractDropdown className={classes}
                      renderToggleElement={renderToggleElement}
                      isOpen={isOpen}
                      disabled={disabled}
                      { ...otherProps }>
      { wrappedChildren }
    </AbstractDropdown>
  );
};

NxIconDropdown.propTypes = propTypes;
export default NxIconDropdown;

export { Props, propTypes } from './types';
