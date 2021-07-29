/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NxFontAwesomeIcon } from '../..';
import {NxListLinkProps, nxListLinkPropTypes} from './types';
import classnames from 'classnames';
import { includesDisabledClass } from '../../util/classUtil';

const NxListLink = forwardRef<HTMLAnchorElement, NxListLinkProps>(
    function nxListLink({ children, className, disabled, href, selected, ...attrs}, ref) {
      const aClassNames = classnames('nx-list__link', className, {'selected': selected}, {'disabled': disabled});
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

NxListLink.propTypes = nxListLinkPropTypes;

export default NxListLink;
