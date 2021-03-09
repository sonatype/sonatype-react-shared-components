/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import NxCloseButtonExample from './NxCloseButtonExample';

const nxCloseButtonExampleCode = require('./NxCloseButtonExample?raw');

const NxCloseButtonPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <NxCode>NxCloseButton</NxCode> represents a standard "×" close button for use on modals,
        alerts, etc. It supports all attributes supported by HTML <NxCode>&lt;button&gt;</NxCode>s.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        codeExamples={nxCloseButtonExampleCode}
                        liveExample={NxCloseButtonExample}>
      This example demonstrates the display of an NxCloseButton with a simple
      click handler wired up. Note that additional button attributes are accepted as props and
      applied to the underlying &lt;button&gt;
    </GalleryExampleTile>
  </>;

export default NxCloseButtonPage;
