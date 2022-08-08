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
import { NxListButtonItemProps, nxListButtonItemPropTypes } from './types';

const NxDescriptionListButtonItem = forwardRef<HTMLDivElement, NxListButtonItemProps>(
    function NxDescriptionListButtonItem(props) {
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
          divClassNames = classnames('nx-list__item', 'nx-list__item--clickable', className),
          buttonClassNames = classnames('nx-list__btn', buttonClassName, { selected, disabled });

      return (
        // aria-current is the valid one here by the standards, but aria-selected is the one that actually
        // tends to work in real-world screenreaders
        /* eslint-disable-next-line jsx-a11y/role-supports-aria-props */
        <div className={divClassNames} {...attrs} aria-selected={selected} aria-current={selected}>
          <dt className="nx-list__term">
            <button aria-disabled={includesDisabledClass(buttonClassNames)}
                    className={buttonClassNames}
                    disabled={disabled ? true : false}
                    {...buttonAttributes}
            >
              {children[0]?.props?.children}
            </button>
          </dt>
          <dd className="nx-list__description">
            <button aria-disabled={includesDisabledClass(buttonClassNames)}
                      className={buttonClassNames}
                      disabled={disabled ? true : false}
                      {...buttonAttributes}
              >
              {props.children[1].props.children}
              <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
            </button>
          </dd>
        </div>
      );
    }
);

NxDescriptionListButtonItem.propTypes = nxListButtonItemPropTypes;

export default NxDescriptionListButtonItem;
