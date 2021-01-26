/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, ReactElement } from 'react';
import classnames from 'classnames';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxButton from '../NxButton/NxButton';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';

import {Props, propTypes} from './types';

const NxSegmentedButton = forwardRef<HTMLDivElement, Props>(
    function NxSegmentedButton(props, ref) {
      const { variant, className, disabled, buttonContent, onClick, children, isOpen, onToggleOpen, ...attrs } = props,
          classes = classnames('nx-segmented-btn', className),
          wrappedMenuItems = React.Children.map<ReactElement, ReactElement>(children, item => (
            <NxOverflowTooltip>{item}</NxOverflowTooltip>
          ));

      return (
        <div ref={ref} className={classes} { ...attrs }>
          <NxButton variant={variant} className="nx-segmented-btn__main-btn" onClick={onClick}>
            {buttonContent}
          </NxButton>
          <NxButton variant={variant} className="nx-segmented-btn__dropdown" onClick={onToggleOpen}>
            <NxFontAwesomeIcon icon={faCaretDown} />
          </NxButton>
          { isOpen &&
            <div className="nx-dropdown-menu">
              {wrappedMenuItems}
            </div>
          }
        </div>
      );
    }
);

NxSegmentedButton.propTypes = propTypes;

export default NxSegmentedButton;
export {Props, propTypes};
