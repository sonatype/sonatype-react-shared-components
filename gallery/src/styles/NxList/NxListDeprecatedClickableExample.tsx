/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';

const NxListDeprecatedClickableExample = () =>
  <ul className="nx-list nx-list--clickable">
    <li className="nx-list__item">
      <span className="nx-list__text">Action 1</span>
      <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
    </li>
    <li className="nx-list__item">
      <span className="nx-list__text nx-truncate-ellipsis">
        This list item should be truncated at the right end edge. youtube weathered network network systemic
        systema claymore mine voodoo
      </span>
      <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
    </li>
    <li className="nx-list__item selected">
      <span className="nx-list__text">Action 3</span>
      <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
    </li>
    <li className="nx-list__item">
      <span className="nx-list__text">Action 4</span>
      <span className="nx-list__subtext">
        This list item demonstrates the selected styles
      </span>
      <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
    </li>
    <li className="nx-list__item disabled" aria-disabled="true">
      <span className="nx-list__text">This list item is disabled</span>
      <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
    </li>
  </ul>;

export default NxListDeprecatedClickableExample;
