/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxH3, NxTile } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile, GalleryTile} from '../../gallery-components/GalleryTiles';

import NxAlertExample from './NxAlertExample';
import NxErrorAlertExample from './NxErrorAlertExample';
import NxWarningAlertExample from './NxWarningAlertExample';
import NxInfoAlertExample from './NxInfoAlertExample';
import NxSuccessAlertExample from './NxSuccessAlertExample';
import NxNoCloseAlertExample from './NxNoCloseAlertExample';

const nxErrorAlertExampleCode = require('./NxErrorAlertExample?raw'),
    nxInfoAlertExampleCode = require('./NxInfoAlertExample?raw'),
    nxSuccessAlertExampleCode = require('./NxSuccessAlertExample?raw'),
    nxNoCloseAlertExampleCode = require('./NxNoCloseAlertExample?raw'),
    nxWarningAlertExampleCode = require('./NxWarningAlertExample?raw'),
    nxAlertExampleCode = require('./NxAlertExample?raw');

const NxAlertPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>Generic alert.</NxP>
      <NxP>Handy for DIY alert variations</NxP>
      <NxP>Accepts any prop that is valid on a div as well as the following:</NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Prop</NxTable.Cell>
            <NxTable.Cell>Type</NxTable.Cell>
            <NxTable.Cell>Required</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell>icon</NxTable.Cell>
            <NxTable.Cell>FontAwesome's Icons</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              A FontAwesome icon to use in the alert message
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>iconLabel</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Brief descriptive text to apply to the icon using
              the <NxCode>aria-label</NxCode> attribute. Optional for backwards compatibility, but
              strongly recommended.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onClose</NxTable.Cell>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              A handler that dismisses the alert when called. If this prop is present, a close button will be rendered
              at the right-hand side of the alert. When that button is clicked, this callback will be fired. Note that
              while this callback (and button) are optional, our UX patterns call for almost all alerts to be
              dismissable in some way. Therefore, an <NxCode>onClose</NxCode> callback should
              be provided, unless some other mechanism for closing the alert is provided within the alert children.
              A "Retry" button would be an example of such an alternative mechanism. Conversely, in the
              case where such an alternative mechanism is present, the <NxCode>onClose</NxCode>
              callback <em>should not</em> be provided.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Alert Example"
                        id="nx-alert-custom-example"
                        liveExample={NxAlertExample}
                        codeExamples={nxAlertExampleCode}>
      An example of a simple alert which adds a custom modifier class.
    </GalleryExampleTile>

    <GalleryTile title="NxErrorAlert, etc.">
      <NxP>Standard sonatype alerts.</NxP>
      <NxP>They come in four variations: Error, Info, Warning, and Success.</NxP>
      <NxP>
        Accepts any prop that is valid on a div as well as the <NxCode>onClose</NxCode> prop
        described above.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Accessibility Considerations</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          Different types of alerts use
          different <a target="_blank" rel="noreferrer" href="https://www.w3.org/WAI/PF/aria/roles">ARIA roles</a>.{' '}
          <NxCode>NxErrorAlert</NxCode> uses <NxCode>alert</NxCode>.{' '}
          <NxCode>NxSuccessAlert</NxCode> uses <NxCode>status</NxCode>.{' '}
          <NxCode>NxInfoAlert</NxCode> uses no special role by default, though
          the <NxCode>status</NxCode> role may be appropriate in some use cases.{' '}
          Finally, <NxCode>NxWarningAlert</NxCode> also has no default role, but
          when used in dynamic circumstances, should typically be given either
          the <NxCode>status</NxCode> or <NxCode>alert</NxCode> role.
          The roles which are provided by default may be overridden by the caller.
        </NxP>
      </NxTile.Subsection>
    </GalleryTile>

    <GalleryExampleTile title="Success Alert Example"
                        id="nx-alert-success-example"
                        liveExample={NxSuccessAlertExample}
                        codeExamples={nxSuccessAlertExampleCode}>
      An example of an alert demonstrating success styling.
    </GalleryExampleTile>

    <GalleryExampleTile title="Error Alert Example"
                        id="nx-alert-error-example"
                        liveExample={NxErrorAlertExample}
                        codeExamples={nxErrorAlertExampleCode}>
      An example of an alert demonstrating error styling.
    </GalleryExampleTile>

    <GalleryExampleTile title="Info Alert Example"
                        id="nx-alert-info-example"
                        liveExample={NxInfoAlertExample}
                        codeExamples={nxInfoAlertExampleCode}>
      An example of an alert demonstrating information styling.
    </GalleryExampleTile>

    <GalleryExampleTile title="Warning Alert Example"
                        id="nx-alert-warning-example"
                        liveExample={NxWarningAlertExample}
                        codeExamples={nxWarningAlertExampleCode}>
      An example of an alert demonstrating warning styling.
    </GalleryExampleTile>

    <GalleryExampleTile title="Unclosable Alert Example"
                        id="nx-alert-no-close-example"
                        liveExample={NxNoCloseAlertExample}
                        codeExamples={nxNoCloseAlertExampleCode}>
      An example of an alert that does not have a close button.
    </GalleryExampleTile>
  </>;

export default NxAlertPage;
