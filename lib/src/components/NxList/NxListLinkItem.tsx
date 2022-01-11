/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';
import { includesDisabledClass } from '../../util/classUtil';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NxFontAwesomeIcon } from '../..';
import { NxListLinkItemProps, nxListLinkItemPropTypes } from './types';

const NxListLinkItem = forwardRef<HTMLLIElement, NxListLinkItemProps>(
    function nxListLinkItem(props, ref) {
      const {
            children,
            className,
            disabled,
            href,
            selected: selectedProp,
            anchorClassName,
            anchorAttributes,
            ...attrs
          } = props,
          selected = selectedProp ?? undefined,
          liClassNames = classnames('nx-list__item', 'nx-list__item--clickable', className),
          aClassNames = classnames('nx-list__link', anchorClassName, {selected, disabled});

      return (
        // aria-current is the valid one here by the standards, but aria-selected is the one that actually
        // tends to work in real-world screenreaders
        /* eslint-disable-next-line jsx-a11y/role-supports-aria-props */
        <li ref={ref} className={liClassNames} {...attrs} aria-selected={selected} aria-current={selected}>
          <a aria-disabled={includesDisabledClass(aClassNames)}
             className={aClassNames}
             href={href}
             {...anchorAttributes}
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
