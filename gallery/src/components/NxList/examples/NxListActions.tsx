/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxButton, NxFontAwesomeIcon, NxList } from '@sonatype/react-shared-components';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function NxListActions() {
  return (
    <NxList>
      <NxList.Item>
        <NxList.Text>List item</NxList.Text>
        <NxList.Actions>
          <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
        </NxList.Actions>
      </NxList.Item>
      <NxList.Item>
        <NxList.Text>List item deliberately made very long so that the text will wrap before it gets
          to the action buttons nodal point bridge kanji San Francisco render-farm chrome human paranoid
          San Francisco skyscraper convenience store
        </NxList.Text>
        <NxList.Subtext>This is some sub-text to demonstrate spacing point bridge kanji San Francisco
          render-farm chrome human paranoid San Francisco skyscraper convenience store
        </NxList.Subtext>
        <NxList.Actions>
          <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
          <NxButton title="Trash" variant="icon-only"><NxFontAwesomeIcon icon={faTrash} /></NxButton>
        </NxList.Actions>
      </NxList.Item>
      <NxList.Item>
        <NxList.Text truncate>List item deliberately made very long so that the text will wrap before it gets
          to the action buttons nodal point bridge kanji San Francisco render-farm chrome human paranoid
          San Francisco skyscraper convenience store
        </NxList.Text>
        <NxList.Subtext truncate>This is some sub-text to demonstrate spacing point bridge kanji San Francisco
          render-farm chrome human paranoid San Francisco skyscraper convenience store
        </NxList.Subtext>
        <NxList.Actions>
          <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
          <NxButton title="Trash" variant="icon-only"><NxFontAwesomeIcon icon={faTrash} /></NxButton>
        </NxList.Actions>
      </NxList.Item>
    </NxList>
  );
}

export default NxListActions;
