/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import React, { forwardRef } from 'react';
import { NxFontAwesomeIcon } from '../..';
import {NxListButtonItemProps, nxListButtonItemPropTypes} from './types';
import { includesDisabledClass } from '../../util/classUtil';

const NxListButtonItem = forwardRef<HTMLButtonElement, NxListButtonItemProps>(
    function nxListButtonItem({ children, className, disabled, selected, ...attrs}, ref) {
      const buttonClassNames = classnames('nx-list__btn', className, { selected, disabled });
      return (
        <li className='nx-list__item nx-list__item--clickable'>
          <button aria-disabled={includesDisabledClass(buttonClassNames)}
                  ref={ref}
                  className={buttonClassNames}
                  disabled={disabled}
                  {...attrs}
          >
            {children}
            <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
          </button>
        </li>
      );
    }
);

NxListButtonItem.propTypes = nxListButtonItemPropTypes;

export default NxListButtonItem;
