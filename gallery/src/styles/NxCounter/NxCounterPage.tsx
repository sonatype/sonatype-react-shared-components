/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';

import NxCounterExample from './NxCounterExample';

const nxCounterCode = require('!!raw-loader!./NxCounterExample').default;

const NxCounterPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Basic style for small indicator token which typically displays a single #, a '# of #' string, or a short text
        string.
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

    <GalleryTile title="nx-counter Examples">
      <NxCounterExample/>
      <CodeExample content={nxCounterCode}/>
    </GalleryTile>
  </>;

export default NxCounterPage;
