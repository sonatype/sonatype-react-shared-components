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

const NxListButtonItem = forwardRef<HTMLLIElement, NxListButtonItemProps>(
    function NxListButtonItem({ children, className, disabled, selected, buttonClassName,
      buttonAttributes, ...attrs }, ref) {
      const liClassNames = classnames('nx-list__item', 'nx-list__item--clickable', className);
      const buttonClassNames = classnames('nx-list__btn', buttonClassName, { selected, disabled });
      return (
        <li ref={ref} className={liClassNames} {...attrs}>
          <button aria-disabled={includesDisabledClass(buttonClassNames)}
                  className={buttonClassNames}
                  disabled={disabled ? true : false}
                  {...buttonAttributes}
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
