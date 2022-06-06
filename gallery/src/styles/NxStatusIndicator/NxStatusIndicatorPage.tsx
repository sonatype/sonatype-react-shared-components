/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxDescriptionList } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const nxStatusIndicatorExampleCode = require('./NxStatusIndicatorExample.html');

const NxThreatIndicatorPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>nx-status-indicator</NxCode> is used to indicate the status of workflows or external systems which
        could be in one of up to four different states. The four states have rough semantics assigned but the
        exact wording which should associated may vary from one usage case to another. The descriptions of the four
        states below give examples of wordings that might be used with them. The wording for a given indicator
        must be written into the HTML along with the usage of the <NxCode>nx-status-indicator</NxCode> classes.

        TODO usage guidelines
      </NxP>
      <NxDescriptionList>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term><NxCode>negative</NxCode></NxDescriptionList.Term>
          <NxDescriptionList.Description>
            The status in which the item in question is not present, activated, etc. Might be paired with wording such
            as "Off", "Disabled", "Inactive", "Not Started", "Down", etc.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term><NxCode>positive</NxCode></NxDescriptionList.Term>
          <NxDescriptionList.Description>
            The opposite status of <NxCode>negative</NxCode>. Might be paired with wording such as
            "On", "Enabled", "Active", "Complete", "Up", etc.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term><NxCode>intermediate</NxCode></NxDescriptionList.Term>
          <NxDescriptionList.Description>
            A less common status indicating a partial or in-transition state
            between <NxCode>negative</NxCode> and <NxCode>positive</NxCode>. Might be paired with wording such as
            "Starting", "Partial", "In Progress", "Indeterminate", etc.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term><NxCode>error</NxCode></NxDescriptionList.Term>
          <NxDescriptionList.Description>
            A status that may be used when the item described by the indicator attempted to get to the
            <NxCode>positive</NxCode> status but failed in some way. Might be paired with wording such as
            "Error", "Failed", "Died", etc.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
      </NxDescriptionList>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Class</NxTable.Cell>
            <NxTable.Cell>Location</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-status-indicator</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>&lt;span&gt;</NxCode> representing the status indicator</NxTable.Cell>
            <NxTable.Cell>
              The overall status indicator element. Should contain only simple, brief text describing the current status
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-status-indicator--negative</NxCode></NxTable.Cell>
            <NxTable.Cell>The <NxCode>.nx-status-indicator</NxCode> element</NxTable.Cell>
            <NxTable.Cell>
              This class may optionally be set on <NxCode>negative</NxCode> status indicators. It is optional however
              - negative is the default state.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-status-indicator--positive</NxCode></NxTable.Cell>
            <NxTable.Cell>The <NxCode>.nx-status-indicator</NxCode> element</NxTable.Cell>
            <NxTable.Cell>
              This class must be set on <NxCode>positive</NxCode> status indicators.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-status-indicator--intermediate</NxCode></NxTable.Cell>
            <NxTable.Cell>The <NxCode>.nx-status-indicator</NxCode> element</NxTable.Cell>
            <NxTable.Cell>
              This class must be set on <NxCode>intermediate</NxCode> status indicators.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-status-indicator--error</NxCode></NxTable.Cell>
            <NxTable.Cell>The <NxCode>.nx-status-indicator</NxCode> element</NxTable.Cell>
            <NxTable.Cell>
              This class must be set on <NxCode>error</NxCode> status indicators.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Mixed Example"
                        htmlExample={nxStatusIndicatorExampleCode}
                        codeExamples={nxStatusIndicatorExampleCode}>
      A series of <NxCode>.nx-status-indicator</NxCode>s of all statuses, intermixed with plain text content
    </GalleryExampleTile>
  </>;

export default NxThreatIndicatorPage;
