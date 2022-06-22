/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxReadOnly, NxTile, NxH3 } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxStatusIndicatorComponentExample from './NxStatusIndicatorComponentExample';

const nxStatusIndicatorExampleCode = require('./NxStatusIndicatorExample.html'),
    nxStatusIndicatorComponentExampleCode = require('./NxStatusIndicatorComponentExample?raw');

const NxThreatIndicatorPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>nx-status-indicator</NxCode> is used to indicate four distinct states of a workflow or external system.
        Depending on the usage scenario, the exact wording associated with each state may vary.
        The associated wording must be specified as the text content of the element to which
        the <NxCode>nx-status-indicator</NxCode> class is applied.
      </NxP>
      <NxP>
        Unlike tags, <NxCode>nx-status-indicator</NxCode>s do not appear conditionally. They are always visible and
        indicate one of the
        four distinct states to reflect related object's current state. They should not be used to
        report error occurrences.
      </NxP>
      <NxReadOnly>
        <NxReadOnly.Label>Example</NxReadOnly.Label>
        <NxReadOnly.Data>
          Scenario – A REST call has failed (an event)<br/>
          Do not use nx-status-indicator
        </NxReadOnly.Data>
        <NxReadOnly.Data>
          Scenario – A REST service is broken and unresponsive (a state)<br/>
          Use <NxCode>nx-status-indicator</NxCode> with the <NxCode>error</NxCode> state
        </NxReadOnly.Data>
      </NxReadOnly>
      <NxP>
        The table below describes the four states that <NxCode>nx-status-indicator</NxCode> can represent as well as
        suggested paired wording for each state:
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>State</NxTable.Cell>
            <NxTable.Cell>Description</NxTable.Cell>
            <NxTable.Cell>Suggested Paired Wording</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell><NxCode>negative</NxCode></NxTable.Cell>
            <NxTable.Cell>The item in question is absent or not activated. </NxTable.Cell>
            <NxTable.Cell>
              "Off", "Disabled", "Inactive", "Not Started", "Down"
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>positive</NxCode></NxTable.Cell>
            <NxTable.Cell>
              The item in question is present and active or complete.
            </NxTable.Cell>
            <NxTable.Cell>
              "On", "Enabled", "Active", "Complete", "Up"
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>intermediate</NxCode></NxTable.Cell>
            <NxTable.Cell>
              In transition or partial state between negative and positive.
            </NxTable.Cell>
            <NxTable.Cell>
              "Starting", "Partial", "In Progress"
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>error</NxCode></NxTable.Cell>
            <NxTable.Cell>
              A status that may be used to indicate a failed attempt at achieving a positive status.
            </NxTable.Cell>
            <NxTable.Cell>
              "Error", "Failed"
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
      <NxP>
        <NxCode>nx-status-indicator</NxCode>s are created by using the following CSS classes:
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Class</NxTable.Cell>
            <NxTable.Cell>Location</NxTable.Cell>
            <NxTable.Cell>Convenience Component</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-status-indicator</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>&lt;span&gt;</NxCode> representing the status indicator</NxTable.Cell>
            <NxTable.Cell />
            <NxTable.Cell>
              The overall status indicator element. Should contain only simple, brief text describing the current status
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-status-indicator--negative</NxCode></NxTable.Cell>
            <NxTable.Cell>The <NxCode>.nx-status-indicator</NxCode> element</NxTable.Cell>
            <NxTable.Cell><NxCode>NxNegativeStatusIndicator</NxCode></NxTable.Cell>
            <NxTable.Cell>
              This class may optionally be set on <NxCode>negative</NxCode> status indicators. It is optional however
              - negative is the default state.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-status-indicator--positive</NxCode></NxTable.Cell>
            <NxTable.Cell>The <NxCode>.nx-status-indicator</NxCode> element</NxTable.Cell>
            <NxTable.Cell><NxCode>NxPositiveStatusIndicator</NxCode></NxTable.Cell>
            <NxTable.Cell>
              This class must be set on <NxCode>positive</NxCode> status indicators.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-status-indicator--intermediate</NxCode></NxTable.Cell>
            <NxTable.Cell>The <NxCode>.nx-status-indicator</NxCode> element</NxTable.Cell>
            <NxTable.Cell><NxCode>NxIntermediateStatusIndicator</NxCode></NxTable.Cell>
            <NxTable.Cell>
              This class must be set on <NxCode>intermediate</NxCode> status indicators.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-status-indicator--error</NxCode></NxTable.Cell>
            <NxTable.Cell>The <NxCode>.nx-status-indicator</NxCode> element</NxTable.Cell>
            <NxTable.Cell><NxCode>NxErrorStatusIndicator</NxCode></NxTable.Cell>
            <NxTable.Cell>
              This class must be set on <NxCode>error</NxCode> status indicators.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Accessibility Considerations</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          <NxCode>nx-status-indicator</NxCode>s should have the ARIA <NxCode>status</NxCode> role. When using the
          convenience components, this role is set automatically.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Mixed Example"
                        id="nx-status-indicator-example"
                        htmlExample={nxStatusIndicatorExampleCode}
                        codeExamples={nxStatusIndicatorExampleCode}>
      A series of <NxCode>.nx-status-indicator</NxCode>s of all statuses, intermixed with plain text content
    </GalleryExampleTile>

    <GalleryExampleTile title="Convenience Component Example"
                        liveExample={NxStatusIndicatorComponentExample}
                        codeExamples={nxStatusIndicatorComponentExampleCode}>
      Another example of all statuses intermixed with other content, but this time implemented using the
      convenience components.
    </GalleryExampleTile>
  </>;

export default NxThreatIndicatorPage;
