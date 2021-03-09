/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxAlertInfoExample from './NxAlertInfoExample';
import NxAlertSuccessExample from './NxAlertSuccessExample';
import NxAlertWarningExample from './NxAlertWarningExample';
import NxAlertErrorExample from './NxAlertErrorExample';

const nxAlertInfoCode = require('./NxAlertInfoExample?raw'),
    nxAlertSuccessCode = require('./NxAlertSuccessExample?raw'),
    nxAlertWarningCode = require('./NxAlertWarningExample?raw'),
    nxAlertErrorCode = require('./NxAlertErrorExample?raw');

const NxAlertPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Standard name spaced alert styles. Note that these examples are shown in react as each style includes
        specific icons. When working in React, <NxCode>NxFontAwesomeIcon</NxCode> should be used
        as shown to get these icons (or preferably the <NxCode>NxAlert</NxCode> React component and
        its variations should be used). When not working in react, check the FontAwesome 5 documentation for alternative
        ways to include the icons. Alerts should generally include Close buttons or another way to dismiss themselves.
        In this example standard Close button styling is provided by <NxCode>NxCloseButton</NxCode>.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Information alert"
                        liveExample={NxAlertInfoExample}
                        codeExamples={nxAlertInfoCode}>
      An <NxCode>nx-alert</NxCode> demonstrating information styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Success alert"
                        liveExample={NxAlertSuccessExample}
                        codeExamples={nxAlertSuccessCode}>
      An <NxCode>nx-alert</NxCode> demonstrating success styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Warning alert"
                        liveExample={NxAlertWarningExample}
                        codeExamples={nxAlertWarningCode}>
      An <NxCode>nx-alert</NxCode> demonstrating warning styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Error alert"
                        liveExample={NxAlertErrorExample}
                        codeExamples={nxAlertErrorCode}>
      An <NxCode>nx-alert</NxCode> demonstrating error styles.
    </GalleryExampleTile>
  </>;

export default NxAlertPage;
