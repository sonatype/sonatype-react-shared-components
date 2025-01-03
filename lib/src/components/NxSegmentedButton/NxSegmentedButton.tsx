/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxButton from '../NxButton/NxButton';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';

import {Props, propTypes} from './types';

import './NxSegmentedButton.scss';

import AbstractDropdown, { AbstractDropdownRenderToggleElement } from '../NxDropdown/AbstractDropdown';

const NxSegmentedButton = forwardRef<HTMLDivElement, Props>(
    function NxSegmentedButton(props, ref) {
      const {
            variant,
            className,
            disabled,
            buttonContent,
            onClick,
            children,
            isOpen,
            type,
            onToggleOpen: externalOnToggleCollapse,
            ...attrs
          } = props,
          classes = classnames('nx-segmented-btn', className, {
            'nx-segmented-btn--open': isOpen
          }),
          wrappedMenuItems = React.Children.map(children, item => (
            <NxOverflowTooltip>{item}</NxOverflowTooltip>
          ));

      const renderToggleElement: AbstractDropdownRenderToggleElement = (toggleRef, onToggleCollapse) => (
        <>
          <NxButton type={type || undefined}
                    variant={variant}
                    className="nx-segmented-btn__main-btn"
                    onClick={onClick}
                    disabled={disabled || undefined}>
            {buttonContent}
          </NxButton>
          <NxButton ref={toggleRef}
                    type="button"
                    variant={variant}
                    className="nx-segmented-btn__dropdown-btn"
                    onClick={onToggleCollapse}
                    aria-label="more options"
                    disabled={disabled || undefined}>
            <NxFontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} />
          </NxButton>
        </>
      );

      return (
        <AbstractDropdown ref={ref}
                          isOpen={isOpen}
                          disabled={disabled}
                          className={classes}
                          renderToggleElement={renderToggleElement}
                          onToggleCollapse={externalOnToggleCollapse}
                          { ...attrs }>

          { wrappedMenuItems }
        </AbstractDropdown>
      );
    }
);

NxSegmentedButton.propTypes = propTypes;

export default NxSegmentedButton;
export {Props, propTypes};
