/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, MouseEvent } from 'react';
import classnames from 'classnames';
import { includesDisabledClass } from '../../util/classUtil';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NxFontAwesomeIcon, useUniqueId } from '../..';
import { LinkItemProps, linkItemPropTypes } from './types';

const NxDescriptionListLinkItem = forwardRef<HTMLDivElement, LinkItemProps>(
    function NxDescriptionListLinkItem(props, ref) {
      const {
            href,
            className,
            disabled,
            selected: selectedProp,
            anchorClassName,
            anchorAttributes,
            term,
            description,
            ...attrs
          } = props,
          selected = selectedProp ?? undefined,
          divClassNames = classnames('nx-list__item', 'nx-list__item--clickable', className),
          linkClassNames = classnames('nx-list__link', anchorClassName, { selected, disabled }),
          descriptionId = useUniqueId('nx-list-description');

      function onClick(evt: MouseEvent<HTMLAnchorElement>) {
        if (includesDisabledClass(linkClassNames)) {
          evt.preventDefault();
        }
      }

      return (
        <div ref={ref} className={divClassNames} {...attrs} aria-selected={selected} aria-current={selected}>
          <dt className="nx-list__term">
            <a {...anchorAttributes}
               aria-disabled={includesDisabledClass(linkClassNames)}
               aria-describedby={descriptionId}
               className={linkClassNames}
               href={href}
               onClick={onClick}>
              <span className="nx-list__text">{term}</span>
            </a>
          </dt>
          <dd className="nx-list__description">
            {/* This link only exists for the sake of expanding the click target all the way across the
                row. From a screenreader/keynav perspective only the other link is present. This link's
                text is attached to the other link via aria-describedby
            */}
            <a {...anchorAttributes}
               aria-hidden={true}
               tabIndex={-1}
               className={linkClassNames}
               href={href}
               onClick={onClick}>
              <span id={descriptionId} className="nx-list__text">{description}</span>
              <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
            </a>
          </dd>
        </div>
      );
    }
);

NxDescriptionListLinkItem.propTypes = linkItemPropTypes;

export default NxDescriptionListLinkItem;
