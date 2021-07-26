/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import React, { forwardRef } from 'react';
import { NxFontAwesomeIcon } from '../..';
import {NxListButtonProps, nxListItemPropTypes} from './types';

const NxListButton = forwardRef<HTMLButtonElement, NxListButtonProps>(
    function nxListButton({ children, selected}, ref) {
      return (
        <li className='nx-list__item nx-list__item--clickable'>
          <button ref={ref} className={`nx-list__btn ${selected ? 'selected' : ''}`}>
            {children}
            <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
          </button>
        </li>
      );
    }
);

NxListButton.propTypes = nxListItemPropTypes;

export default NxListButton;
