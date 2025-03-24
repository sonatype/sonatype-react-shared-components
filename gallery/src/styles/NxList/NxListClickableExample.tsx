/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';

const NxListClickableExample = () =>
  <ul className="nx-list">
    <li className="nx-list__item nx-list__item--clickable">
      <button className="nx-list__btn">
        <span className="nx-list__text">Action 1</span>
        <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
      </button>
    </li>
    <li className="nx-list__item nx-list__item--clickable">
      <button className="nx-list__btn">
        <span className="nx-list__text nx-truncate-ellipsis">
          This list item should be truncated at the right end edge. youtube weathered network network systemic
          systema claymore mine voodoo
        </span>
        <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
      </button>
    </li>
    <li className="nx-list__item nx-list__item--clickable">
      <button className="nx-list__btn">
        <span className="nx-list__text">Action 3</span>
        <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
      </button>
    </li>
    <li className="nx-list__item nx-list__item--clickable">
      {/* aria-current is the valid one here by the standards, but aria-selected is the one that actually
        * tends to work in real-world screenreaders
        */}
      <button className="nx-list__btn selected" aria-selected="true" aria-current="true">
        <span className="nx-list__text">Action 4</span>
        <span className="nx-list__subtext">
          This list item demonstrates the selected styles
        </span>
        <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
      </button>
    </li>
    <li className="nx-list__item nx-list__item--clickable">
      <button className="nx-list__btn" disabled>
        <span className="nx-list__text">This list item is disabled</span>
        <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
      </button>
    </li>
  </ul>;

export default NxListClickableExample;
