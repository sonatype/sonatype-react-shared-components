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
import { NxDescriptionListButtonItemProps, nxDescriptionListButtonItemPropTypes} from './types';

const NxDescriptionListButtonItem = forwardRef<HTMLDivElement, NxDescriptionListButtonItemProps>(
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

      /* Using children[0].props.children allows for a more natural API for the consuming developer. */
      return (
        <div className={divClassNames} {...attrs} aria-selected={selected} aria-current={selected}>
          <dt className="nx-list__term">
            <button aria-disabled={includesDisabledClass(buttonClassNames)}
                    className={buttonClassNames}
                    disabled={disabled ? true : false}
                    {...buttonAttributes}
            >
              {children[0].props.children}
            </button>
          </dt>
          <dd className="nx-list__description">
            <button aria-disabled={includesDisabledClass(buttonClassNames)}
                    className={buttonClassNames}
                    disabled={disabled ? true : false}
                    {...buttonAttributes}>
              <span className="nx-list__text">{children[1].props.children}</span>
              <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
            </button>
          </dd>
        </div>
      );
    }
);

NxDescriptionListButtonItem.propTypes = nxDescriptionListButtonItemPropTypes;

export default NxDescriptionListButtonItem;
