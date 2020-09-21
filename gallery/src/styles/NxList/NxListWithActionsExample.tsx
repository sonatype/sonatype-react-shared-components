/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { NxButton, NxFontAwesomeIcon } from '@sonatype/react-shared-components';

const NxListErrorExample = () =>
  <ul className="nx-list">
    <li className="nx-list__item">
      <span className="nx-list__text">
        List item
      </span>
      <div className="nx-list__actions">
        <NxButton variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
        <NxButton variant="icon-only"><NxFontAwesomeIcon icon={faTrash} /></NxButton>
      </div>
    </li>
    <li className="nx-list__item">
      <span className="nx-list__text nx-truncate-ellipsis">
        List item deliberately made very long so that the text will wrap before it gets to the action buttons nodal
        point bridge kanji San Francisco render-farm chrome human paranoid San Francisco skyscraper convenience store
      </span>
      <span className="nx-list__subtext">
        This is some sub-text to demonstrate spacing
      </span>
      <div className="nx-list__actions">
        <NxButton variant="icon-only"><NxFontAwesomeIcon icon={faTrash} /></NxButton>
      </div>
    </li>
  </ul>;

export default NxListErrorExample;
