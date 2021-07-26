/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxListV2 } from '@sonatype/react-shared-components';

function NxListSimple() {
  return (
    <NxListV2>
      <NxListV2.Item>
        <NxListV2.Text>Text wrapping - text that is very long and will wrap onto the next line, standard list
          item text that is very long and will wrap onto the next line
        </NxListV2.Text>
      </NxListV2.Item>
      <NxListV2.Item>
        <NxListV2.Text truncate>Text truncation - Add <NxCode>.nx-truncate-ellipsis</NxCode> to
          <NxCode>.nx-list__item</NxCode> to cause the text to truncate at the right edge of the list item.
        </NxListV2.Text>
      </NxListV2.Item>
      <NxListV2.Item>
        <NxListV2.Text>Subtext wrapping</NxListV2.Text>
        <NxListV2.Subtext> A long line of subtext that wraps. Add <NxCode>.nx-truncate-ellipsis</NxCode> to
          the <NxCode>&lt;p&gt;</NxCode> tag if you don't want the text to wrap. More text to trigger the
          wrapping
        </NxListV2.Subtext>
      </NxListV2.Item>
      <NxListV2.Item>
        <NxListV2.Text>Subtext truncation</NxListV2.Text>
        <NxListV2.Subtext truncate>Add <NxCode>.nx-truncate-ellipsis</NxCode> to <NxCode>.nx-list__subtext</NxCode> to
          cause the text to truncate at the right edge of the list item nodal point bridge kanji San Francisco
          render-farm knife nodality neon receding grenade
        </NxListV2.Subtext>
      </NxListV2.Item>
    </NxListV2>
  );
}

export default NxListSimple;
