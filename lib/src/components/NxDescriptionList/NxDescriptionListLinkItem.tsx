/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, MouseEvent } from 'react';
import classnames from 'classnames';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { useUniqueId } from '../../util/idUtil';
import { includesDisabledClass } from '../../util/classUtil';
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
          linkClassNames = classnames('nx-list__link', anchorClassName, { selected, disabled }),
          isDisabled = includesDisabledClass(linkClassNames),
          divClassNames = classnames('nx-list__item', 'nx-list__item--clickable', className, {
            selected,
            disabled: isDisabled
          }),
          descriptionId = useUniqueId('nx-list-description');

      function preventMouseInteraction(evt: MouseEvent<HTMLAnchorElement>) {
        if (disabled) {
          evt.preventDefault();
        }
      }

      return (
        <div ref={ref} className={divClassNames} {...attrs} aria-selected={selected} aria-current={selected}>
          <dt className="nx-list__term">
            <a {...anchorAttributes}
               aria-disabled={isDisabled}
               aria-describedby={descriptionId}
               className={linkClassNames}
               href={href}
               onClick={preventMouseInteraction}
               onMouseDown={preventMouseInteraction}
               tabIndex={isDisabled ? -1 : 0}>
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
               onClick={preventMouseInteraction}
               onMouseDown={preventMouseInteraction}>
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
