/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

const NxListClickableExample = () =>
  <div className="nx-list nx-list--clickable">
    <h4 className="nx-list__title">
      Clickable list title
    </h4>
    <ul>
      <li className="nx-list__item">
        <NxFontAwesomeIcon icon={faChevronRight} className="nx-pull-right" />action 1
      </li>
      <li className="nx-list__item">
        <NxFontAwesomeIcon icon={faChevronRight} className="nx-pull-right" />action 2 - this list item should be
        truncated at the right end edge. youtube weathered network network systemic systema claymore mine voodoo
        god garage monofilament realism order-flow corporation car footage vinyl.
      </li>
      <li className="nx-list__item selected">
        <NxFontAwesomeIcon icon={faChevronRight} className="nx-pull-right" />action 3
        <p className="nx-list__subtext">
          This is a third line. It is selected
        </p>
      </li>
      <li className="nx-list__item">
        <NxFontAwesomeIcon icon={faChevronRight} className="nx-pull-right" />action 4
        <p className="nx-list__subtext">
          This is a fourth line. It includes text that might relate to the top line or might not.
        </p>
      </li>
      <li className="nx-list__item nx-list__item--disabled nx-disabled">
        <NxFontAwesomeIcon icon={faChevronRight} className="nx-pull-right" />This list item is disabled
      </li>
    </ul>
  </div>;

export default NxListClickableExample;
