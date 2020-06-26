/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const nxAlertInfoCode = require('./NxAlertInfoExample.html').default,
    nxAlertWarningCode = require('./NxAlertWarningExample.html').default,
    nxAlertErrorCode = require('./NxAlertErrorExample.html').default;

const NxAlertPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">Standard name spaced alert styles.</p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Information alert"
                        htmlExample={nxAlertInfoCode}
                        codeExamples={nxAlertInfoCode}>
      A <code className="nx-code">nx-alert</code> demonstrating information styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Warning alert"
                        htmlExample={nxAlertWarningCode}
                        codeExamples={nxAlertWarningCode}>
      A <code className="nx-code">nx-alert</code> demonstrating warning styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Error alert"
                        htmlExample={nxAlertErrorCode}
                        codeExamples={nxAlertErrorCode}>
      A <code className="nx-code">nx-alert</code> demonstrating error styles.
    </GalleryExampleTile>
  </>;

export default NxAlertPage;
