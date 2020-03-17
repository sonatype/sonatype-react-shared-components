/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';

import NxIconExample from './NxIconExample';

const nxIconExampleCode = require('!!raw-loader!./NxIconExample').default;

const NxIconPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>
        <code className="nx-code">.nx-icon</code> is a class that gives standard layout, namely left and right margin,
        to icons in a way that is compatible with the <code className="nx-code">nx-container-helpers</code>.
      </p>
      <p>
        When using <code className="nx-code">.nx-icon</code> manually, be careful to set up heights and widths in
        ways that work in all supported browsers. For instance, note that in the example below, only the height OR the
        width need to be specified for Chrome and Firefox due to the instrinsic aspect ratio from
        the <code className="nx-code">viewBox</code>, while for IE, both the width and the height are necessary.
      </p>
    </GalleryDescriptionTile>
    <GalleryExampleTile>
      <NxIconExample />
      <CodeExample content={nxIconExampleCode} />
    </GalleryExampleTile>
  </>;

export default NxIconPage;
