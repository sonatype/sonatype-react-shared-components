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
import { NxFontAwesomeIcon, useUniqueId } from '../..';
import { ButtonItemProps, buttonItemPropTypes } from './types';

const NxDescriptionListButtonItem = forwardRef<HTMLDivElement, ButtonItemProps>(
    function NxDescriptionListButtonItem(props) {
      const {
            onClick,
            className,
            disabled,
            selected: selectedProp,
            buttonClassName,
            buttonAttributes,
            term,
            description,
            ...attrs
          } = props,
          selected = selectedProp ?? undefined,
          divClassNames = classnames('nx-list__item', 'nx-list__item--clickable', className),
          buttonClassNames = classnames('nx-list__btn', buttonClassName, { selected, disabled }),
          descriptionId = useUniqueId('nx-list-description');

      return (
        <div className={divClassNames} {...attrs} aria-selected={selected} aria-current={selected}>
          <dt className="nx-list__term">
            <button {...buttonAttributes}
                    aria-disabled={includesDisabledClass(buttonClassNames)}
                    aria-describedby={descriptionId}
                    className={buttonClassNames}
                    disabled={disabled ? true : false}
                    onClick={() => onClick()}>
              <span className="nx-list__text">{term}</span>
            </button>
          </dt>
          <dd className="nx-list__description">
            {/* This button only exists for the sake of expanding the click target all the way across the
                row. From a screenreader/keynav perspective only the other button is present. This button's
                text is attached to the other button via aria-describedby
            */}
            <button {...buttonAttributes}
                    onClick={() => onClick()}
                    aria-hidden={true}
                    tabIndex={-1}
                    className={buttonClassNames}
                    disabled={disabled ? true : false}>
              <span id={descriptionId} className="nx-list__text">{description}</span>
              <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
            </button>
          </dd>
        </div>
      );
    }
);

NxDescriptionListButtonItem.propTypes = buttonItemPropTypes;

export default NxDescriptionListButtonItem;
