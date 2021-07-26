/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxListV2 } from '@sonatype/react-shared-components';

function NxListBulleted() {
  return (
    <NxListV2 bulleted>
      <NxListV2.Title>Bulleted lists with a heading</NxListV2.Title>
      <NxListV2.Item>
        <NxListV2.Text>Item 1</NxListV2.Text>
      </NxListV2.Item>
      <NxListV2.Item>
        <NxListV2.Text>Item 2</NxListV2.Text>
        <NxListV2 bulleted>
          <NxListV2.Item>
            <NxListV2.Text>Item 1</NxListV2.Text>
          </NxListV2.Item>
          <NxListV2.Item>
            <NxListV2.Text>Item 2</NxListV2.Text>
          </NxListV2.Item>
          <NxListV2.Item>
            <NxListV2.Text>Item 3</NxListV2.Text>
            <NxListV2 bulleted>
              <NxListV2.Item>
                <NxListV2.Text>Item 1 this list items is also long enough that it wraps,
                  or at least it should if I have typed enough text, how much wood would a
                  woodchuck chuck
                </NxListV2.Text>
              </NxListV2.Item>
              <NxListV2.Item>
                <NxListV2.Text>Item 2</NxListV2.Text>
              </NxListV2.Item>
              <NxListV2.Item>
                <NxListV2.Text>Item 3</NxListV2.Text>
              </NxListV2.Item>
            </NxListV2>
          </NxListV2.Item>
          <NxListV2.Item>
            <NxListV2.Text>Item 4</NxListV2.Text>
          </NxListV2.Item>
        </NxListV2>
      </NxListV2.Item>
      <NxListV2.Item>
        <NxListV2.Text>Item 3</NxListV2.Text>
      </NxListV2.Item>
    </NxListV2>
  );
}

export default NxListBulleted;
