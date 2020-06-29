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

const nxAlertInfoCode = require('!!raw-loader!./NxAlertInfoExample').default,
    nxAlertSuccessCode = require('!!raw-loader!./NxAlertSuccessExample').default,
    nxAlertWarningCode = require('!!raw-loader!./NxAlertWarningExample').default,
    nxAlertErrorCode = require('!!raw-loader!./NxAlertErrorExample').default;

const NxAlertPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Standard name spaced alert styles. Note that these examples are shown in react as each style includes
        specific icons. When working in React, <code className="nx-code">NxFontAwesomeIcon</code> should be used
        as shown to get these icons (or preferably the <code className="nx-code">NxAlert</code> React component and
        its variations should be used). When not working in react, check the FontAwesome 5 documentation for alternative
        ways to include the icons.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Information alert"
                        liveExample={NxAlertInfoExample}
                        codeExamples={nxAlertInfoCode}>
      An <code className="nx-code">nx-alert</code> demonstrating information styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Success alert"
                        liveExample={NxAlertSuccessExample}
                        codeExamples={nxAlertSuccessCode}>
      An <code className="nx-code">nx-alert</code> demonstrating success styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Warning alert"
                        liveExample={NxAlertWarningExample}
                        codeExamples={nxAlertWarningCode}>
      An <code className="nx-code">nx-alert</code> demonstrating warning styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Error alert"
                        liveExample={NxAlertErrorExample}
                        codeExamples={nxAlertErrorCode}>
      An <code className="nx-code">nx-alert</code> demonstrating error styles.
    </GalleryExampleTile>
  </>;

export default NxAlertPage;
