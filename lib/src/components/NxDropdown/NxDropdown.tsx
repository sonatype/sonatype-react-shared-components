/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, ReactElement } from 'react';
import classnames from 'classnames';
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';

import { Props, propTypes } from './types';
import NxTooltip from '../NxTooltip/NxTooltip';
import NxButton from '../NxButton/NxButton';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { wrapTooltipProps } from '../../util/tooltipUtils';
import './NxDropdown.scss';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';
import useDropdownEvents from '../../util/useDropdownEvents';

const NxDropdown: FunctionComponent<Props> = function NxDropdown(props) {
  const {
    variant,
    label,
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

  const { onKeyDown, onToggleCollapse } =
      useDropdownEvents(isOpen, disabled, externalOnToggleCollapse, onCloseClick, onCloseKeyDown, externalOnKeyDown);

  const buttonClasses = classnames('nx-dropdown__toggle', { disabled, open: isOpen });

  const classes = classnames('nx-dropdown', className);

  const toggleTooltipProps = toggleTooltip && wrapTooltipProps(toggleTooltip);

  // Wrap .nx-dropdown-button children in overflow tooltips
  const wrappedChildren = children && React.Children.map<ReactElement, ReactElement>(children, child => (
    /(\s|^)nx-dropdown-(button|link)(\s|$)/.test(child.props.className) ?
      <NxOverflowTooltip>{child}</NxOverflowTooltip> :
      child
  ));

  const toggle = (
    <NxButton type="button"
              variant={variant || 'tertiary'}
              className={buttonClasses}
              onClick={!disabled && onToggleCollapse || undefined}
              aria-haspopup="true"
              aria-expanded={isOpen}>
      <span className="nx-dropdown__toggle-label">{ label }</span>
      <NxFontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown}/>
    </NxButton>
  );

  return (
    <div className={classes} onKeyDown={onKeyDown} {...attrs}>
      { toggleTooltipProps ? <NxTooltip { ...toggleTooltipProps } >{toggle}</NxTooltip> : toggle }

      { isOpen &&
        <div className="nx-dropdown-menu">
          {wrappedChildren}
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
