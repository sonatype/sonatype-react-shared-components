/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NxFontAwesomeIcon } from '../..';
import {NxListLinkItemProps, nxListLinkItemPropTypes} from './types';
import classnames from 'classnames';
import { includesDisabledClass } from '../../util/classUtil';

const NxListLinkItem = forwardRef<HTMLAnchorElement, NxListLinkItemProps>(
    function nxListLinkItem({ children, className, disabled, href, selected, ...attrs}, ref) {
      const aClassNames = classnames('nx-list__link', className, {selected, disabled});
      return (
        <li className='nx-list__item nx-list__item--clickable'>
          <a aria-disabled={includesDisabledClass(aClassNames)}
             ref={ref}
             href={href}
             {...attrs}
             className={aClassNames}
          >
            {children}
            <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
          </a>
        </li>
      );
    }
);

NxListLinkItem.propTypes = nxListLinkItemPropTypes;

export default NxListLinkItem;
