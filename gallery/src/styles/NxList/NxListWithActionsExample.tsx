/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import {faEdit} from '@fortawesome/free-solid-svg-icons';

const NxListWithActions = () =>
  <div className="nx-list">
    <h4 className="nx-list__title">
      List title
    </h4>
    <ul>
      <li className="nx-list__item nx-list__item--with-modifier-icon">
        <button className="nx-btn nx-btn--tertiary nx-btn--icon-only nx-pull-right" type="button">
          <NxFontAwesomeIcon icon={faEdit}/>
        </button>
        List item
      </li>
      <li className="nx-list__item nx-list__item--with-modifier-icon">
        <button className="nx-btn nx-btn--tertiary nx-btn--icon-only nx-pull-right" type="button">
          <NxFontAwesomeIcon icon={faEdit}/>
        </button>
        List item
      </li>
    </ul>
  </div>;

export default NxListWithActions;
