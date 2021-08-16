/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxP } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile, GalleryTile} from '../../gallery-components/GalleryTiles';

import NxStatefulAlertExample from './NxStatefulAlertExample';
import NxStatefulErrorAlertExample from './NxStatefulErrorAlertExample';
import NxStatefulWarningAlertExample from './NxStatefulWarningAlertExample';
import NxStatefulInfoAlertExample from './NxStatefulInfoAlertExample';
import NxStatefulSuccessAlertExample from './NxStatefulSuccessAlertExample';

const nxStatefulErrorAlertExampleCode = require('./NxStatefulErrorAlertExample?raw'),
    nxStatefulInfoAlertExampleCode = require('./NxStatefulInfoAlertExample?raw'),
    nxStatefulSuccessAlertExampleCode = require('./NxStatefulSuccessAlertExample?raw'),
    nxStatefulWarningAlertExampleCode = require('./NxStatefulWarningAlertExample?raw'),
    nxStatefulAlertExampleCode = require('./NxStatefulAlertExample?raw');

const NxStatefulAlertPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A Stateful version of generic alert that tracks its own dismissal state. It contains preconfigured variations
        for the info, warning, error, and success styles.
      </NxP>
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
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Alert Example"
                        id="nx-alert-custom-example"
                        liveExample={NxStatefulAlertExample}
                        codeExamples={nxStatefulAlertExampleCode}>
      An example of a simple alert which adds a custom modifier class.
    </GalleryExampleTile>

    <GalleryTile title="NxStatefulErrorAlert, etc.">
      <NxP>Standard sonatype alerts.</NxP>
      <NxP>They come in four variations: Error, Info, Warning, and Success.</NxP>
      <NxP>Accepts any prop that is valid on a div.</NxP>
    </GalleryTile>

    <GalleryExampleTile title="Success Alert Example"
                        id="nx-alert-success-example"
                        liveExample={NxStatefulSuccessAlertExample}
                        codeExamples={nxStatefulSuccessAlertExampleCode}>
      An example of an alert demonstrating success styling.
    </GalleryExampleTile>

    <GalleryExampleTile title="Error Alert Example"
                        id="nx-alert-error-example"
                        liveExample={NxStatefulErrorAlertExample}
                        codeExamples={nxStatefulErrorAlertExampleCode}>
      An example of an alert demonstrating error styling.
    </GalleryExampleTile>

    <GalleryExampleTile title="Info Alert Example"
                        id="nx-alert-info-example"
                        liveExample={NxStatefulInfoAlertExample}
                        codeExamples={nxStatefulInfoAlertExampleCode}>
      An example of an alert demonstrating information styling.
    </GalleryExampleTile>

    <GalleryExampleTile title="Warning Alert Example"
                        id="nx-alert-warning-example"
                        liveExample={NxStatefulWarningAlertExample}
                        codeExamples={nxStatefulWarningAlertExampleCode}>
      An example of an alert demonstrating warning styling.
    </GalleryExampleTile>
  </>;

export default NxStatefulAlertPage;
