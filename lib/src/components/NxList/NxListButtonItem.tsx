/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { includesDisabledClass } from '../../util/classUtil';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { NxListButtonItemProps, nxListButtonItemPropTypes } from './types';

const NxListButtonItem = forwardRef<HTMLLIElement, NxListButtonItemProps>(
    function NxListButtonItem(props, ref) {
      const {
            children,
            className,
            disabled,
            selected: selectedProp,
            buttonClassName,
            buttonAttributes,
            ...attrs
          } = props,
          selected = selectedProp ?? undefined,
          liClassNames = classnames('nx-list__item', 'nx-list__item--clickable', className),
          buttonClassNames = classnames('nx-list__btn', buttonClassName, { selected, disabled });

      return (
        // aria-current is the valid one here by the standards, but aria-selected is the one that actually
        // tends to work in real-world screenreaders
        <li ref={ref} className={liClassNames} {...attrs} aria-selected={selected} aria-current={selected}>
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
