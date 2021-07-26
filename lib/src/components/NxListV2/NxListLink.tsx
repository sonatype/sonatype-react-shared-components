/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NxFontAwesomeIcon } from '../..';
import {NxListLinkProps, nxListItemPropTypes} from './types';

const NxListLink = forwardRef<HTMLAnchorElement, NxListLinkProps>(
    function nxListLink({ children, href, selected}, ref) {
      return (
        <li className='nx-list__item nx-list__item--clickable'>
          <a ref={ref} href={href} className={`nx-list__link ${selected ? 'selected' : ''}`}>
            {children}
            <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
          </a>
        </li>
      );
    }
);

NxListLink.propTypes = nxListItemPropTypes;

export default NxListLink;
