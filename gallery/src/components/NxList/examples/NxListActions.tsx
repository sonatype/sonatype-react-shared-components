/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxButton, NxFontAwesomeIcon, NxListV2 } from '@sonatype/react-shared-components';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function NxListActions() {
  return (
    <NxListV2>
      <NxListV2.Item>
        <NxListV2.Text>List item</NxListV2.Text>
        <NxListV2.Actions>
          <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
        </NxListV2.Actions>
      </NxListV2.Item>
      <NxListV2.Item>
        <NxListV2.Text>List item deliberately made very long so that the text will wrap before it gets
          to the action buttons nodal point bridge kanji San Francisco render-farm chrome human paranoid
          San Francisco skyscraper convenience store
        </NxListV2.Text>
        <NxListV2.Subtext>This is some sub-text to demonstrate spacing point bridge kanji San Francisco
          render-farm chrome human paranoid San Francisco skyscraper convenience store
        </NxListV2.Subtext>
        <NxListV2.Actions>
          <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
          <NxButton title="Trash" variant="icon-only"><NxFontAwesomeIcon icon={faTrash} /></NxButton>
        </NxListV2.Actions>
      </NxListV2.Item>
      <NxListV2.Item>
        <NxListV2.Text truncate>List item deliberately made very long so that the text will wrap before it gets
          to the action buttons nodal point bridge kanji San Francisco render-farm chrome human paranoid
          San Francisco skyscraper convenience store
        </NxListV2.Text>
        <NxListV2.Subtext truncate>This is some sub-text to demonstrate spacing point bridge kanji San Francisco
          render-farm chrome human paranoid San Francisco skyscraper convenience store
        </NxListV2.Subtext>
        <NxListV2.Actions>
          <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
          <NxButton title="Trash" variant="icon-only"><NxFontAwesomeIcon icon={faTrash} /></NxButton>
        </NxListV2.Actions>
      </NxListV2.Item>
    </NxListV2>
  );
}

export default NxListActions;
