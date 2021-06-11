/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';

const NxListClickableLinksExample = () =>
  <ul className="nx-list nx-list--clickable">
    <li className="nx-list__item nx-list__item--link">
      <a href="#/pages/nx-list" className="nx-list__link selected">
        <span className="nx-list__text">nx-list page</span>
        <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
      </a>
    </li>
    <li className="nx-list__item nx-list__item--link">
      <a href="#/pages/nx-table" className="nx-list__link">
        <span className="nx-list__text nx-truncate-ellipsis">
          nx-table page. This list item should be truncated at the right end edge. youtube weathered network
          network systemic systema claymore mine voodoo god garage monofilament realism order-flow corporation car
          footage vinyl.
        </span>
        <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
      </a>
    </li>
    <li className="nx-list__item nx-list__item--link">
      <a href="#/pages/nx-tile" className="nx-list__link">
        <span className="nx-list__text">nx-tile page</span>
        <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
      </a>
    </li>
    <li className="nx-list__item nx-list__item--link">
      <a href="#/pages/nx-alert" className="nx-list__link">
        <span className="nx-list__text">nx-alert page</span>
        <span className="nx-list__subtext">This row is a link to the nx-alert page</span>
        <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
      </a>
    </li>
  </ul>;

export default NxListClickableLinksExample;
