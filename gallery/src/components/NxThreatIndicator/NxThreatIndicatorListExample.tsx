/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxThreatIndicator, NxFontAwesomeIcon, NxButton, NxList } from '@sonatype/react-shared-components';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const NxThreatIndicatorListExample = () =>
  <NxList>
    <NxList.Item>
      <NxThreatIndicator />
      <NxList.Text>Indicator on simple list row</NxList.Text>
    </NxList.Item>
    <NxList.ButtonItem tabIndex={0}>
      <NxThreatIndicator threatLevelCategory="none" />
      <NxList.Text>Indicator on clickable list row</NxList.Text>
    </NxList.ButtonItem>
    <NxList.Item>
      <NxThreatIndicator threatLevelCategory="low" />
      <NxList.Text>Indicator on row with actions</NxList.Text>
      <NxList.Actions>
        <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
        <NxButton title="Trash" variant="icon-only"><NxFontAwesomeIcon icon={faTrash} /></NxButton>
      </NxList.Actions>
    </NxList.Item>
    <NxList.Item>
      <NxThreatIndicator threatLevelCategory="moderate" />
      <NxList.Text>Indicator on row with subtext</NxList.Text>
      <NxList.Subtext>
        This is list sub-text.  Lots of subtext. Such an incredible amount of subtext that it will surely wrap and
        show that the layout can handle that sort of thing.
      </NxList.Subtext>
    </NxList.Item>
    <NxList.Item>
      <NxThreatIndicator threatLevelCategory="severe" />
      <NxList.Text>Indicator on row with subtext and actions</NxList.Text>
      <NxList.Subtext>
        This is list sub-text.  Lots of subtext. Such an incredible amount of subtext that it will surely wrap and
        show that the layout can handle that sort of thing.
      </NxList.Subtext>
      <NxList.Actions>
        <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
        <NxButton title="Trash" variant="icon-only"><NxFontAwesomeIcon icon={faTrash} /></NxButton>
      </NxList.Actions>
    </NxList.Item>
    <NxList.ButtonItem tabIndex={0}>
      <NxThreatIndicator threatLevelCategory="critical" />
      <NxList.Text>
        Indicator on clickable row with subtext. This should wrap so here's some more content, and more, and more.
        Annnnndddd more.
      </NxList.Text>
      <NxList.Subtext>
        This is list sub-text.  Lots of subtext. Such an incredible amount of subtext that it will surely wrap and
        show that the layout can handle that sort of thing.
      </NxList.Subtext>
    </NxList.ButtonItem>
  </NxList>;

export default NxThreatIndicatorListExample;
