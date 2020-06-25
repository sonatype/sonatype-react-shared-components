/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';

import NxThreatNumberTableExample from './NxThreatNumberTableExample';
import NxThreatNumberListExample from './NxThreatNumberListExample';

const nxThreatNumberTableExampleCode = require('!!raw-loader!./NxThreatNumberTableExample').default,
    nxThreatNumberListExampleCode = require('!!raw-loader!./NxThreatNumberListExample').default;

const NxThreatNumberPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        When an IQ Policy Threat Number is displayed adjacent to an <code className="nx-code">NxThreatBar</code>,
        style the number with <code className="nx-code">nx-threat-number</code>
      </p>
      <p className="nx-p">
        Note that if a threat bar is used inside <code className="nx-code">nx-cell</code> the {''}
        <code className="nx-code">nx-cell--threat-bar</code> modifier must be applied to the table cell. If that cell
        might have multi-line content, that content would need to be wrapped in a custom class to restore the padding
        removed by <code className="nx-code">nx-cell--threat-bar</code>.
      </p>
    </GalleryDescriptionTile>
    <GalleryTile title="List Example">
      <NxThreatNumberListExample />
      <CodeExample content={nxThreatNumberListExampleCode} />
    </GalleryTile>
    <GalleryTile title="Table Example">
      <NxThreatNumberTableExample />
      <CodeExample content={nxThreatNumberTableExampleCode} />
    </GalleryTile>
  </>;

export default NxThreatNumberPage;
