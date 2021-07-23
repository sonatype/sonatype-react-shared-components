/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
// import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { NxListV2 } from '@sonatype/react-shared-components';
import React from 'react';

function NxListExample() {

  return (
    <NxListV2>
      <NxListV2.Title>Test Title</NxListV2.Title>
      <NxListV2.Item clickable>
        <NxListV2.Text>Text</NxListV2.Text>
        <NxListV2.Subtext>Subtext</NxListV2.Subtext>
      </NxListV2.Item>
      <NxListV2.Item>
        <NxListV2.Text> List item</NxListV2.Text>
        <NxListV2.Subtext>This is some sub-text to demonstrate spacing point bridge kanji San Francisco
          render-farm chrome human paranoid San Francisco skyscraper convenience store
        </NxListV2.Subtext>
        <NxListV2.Action title="Edit" />
        <NxListV2.Action title="Trash" />
      </NxListV2.Item>
      <NxListV2.Item>
        <NxListV2.Text>Text1</NxListV2.Text>
        <NxListV2.Subtext>Subtext1</NxListV2.Subtext>
      </NxListV2.Item>
      <NxListV2.Item>Test 2</NxListV2.Item>
      <NxListV2.Item>Test 3</NxListV2.Item>
    </NxListV2>
  );
}

export default NxListExample;
