/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxCode } from '@sonatype/react-shared-components';

const nxCounterCode = require('./NxCounterExample.html');

const NxCounterPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Basic style for small indicator token which typically displays a single #, a '# of #' string, or a short text
        string. When working in React, the <NxCode>NxCounter</NxCode> component is available for a more convenient way to
        create these elements.
      </p>
      <p className="nx-p">
        Some basic positioning CSS examples have been provided. To right justify the counter within its container use
        <code className="nx-code">nx-pull-right</code>.
      </p>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row">
            <th className="nx-cell nx-cell--header">Class</th>
            <th className="nx-cell nx-cell--header">Location</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-counter</code></td>
            <td className="nx-cell">Top level</td>
            <td className="nx-cell">Basic counter styling. Supports # of # and text string.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-counter--active</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-counter</code></td>
            <td className="nx-cell">
              An active state, used in lists or tree-views when the parent also has an active state.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="nx-counter Examples"
                        htmlExample={nxCounterCode}
                        codeExamples={nxCounterCode}>
      Examples of <code className="nx-code">nx-counter</code>s with variations. The first is a basic example. The
      second is an example of the active style. The third and fourth examples demonstrate the addition of the
      <code className="nx-code">nx-pull-right</code> class to put the counter on the right side of the container.
      The fourth example demonstrates this in conjunction with text that is long enough to overflow.
    </GalleryExampleTile>
  </>;

export default NxCounterPage;
