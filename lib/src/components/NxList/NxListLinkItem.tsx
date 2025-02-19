/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { includesDisabledClass } from '../../util/classUtil';
import { NxListLinkItemProps, nxListLinkItemPropTypes } from './types';

export default function NxListLinkItem(props: NxListLinkItemProps) {
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
    <li className={liClassNames} {...attrs} aria-selected={selected} aria-current={selected}>
      <a aria-disabled={includesDisabledClass(aClassNames)}
         className={aClassNames}
         href={disabled ? undefined : href}
         role={disabled ? 'link' : undefined}
         {...anchorAttributes}
      >
        {children}
        <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
      </a>
    </li>
  );
}

NxListLinkItem.propTypes = nxListLinkItemPropTypes;
