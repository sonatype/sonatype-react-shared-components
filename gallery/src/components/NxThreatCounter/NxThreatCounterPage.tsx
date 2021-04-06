/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxThreatCounterExample from './NxThreatCounterExample';
import NxThreatCounterColumnExample from './NxThreatCounterColumnExample';
import NxThreatCounterGridExample from './NxThreatCounterGridExample';

const NxThreatCounterCode = require('./NxThreatCounterExample?raw'),
    NxThreatCounterColumnCode = require('./NxThreatCounterColumnExample?raw'),
    NxThreatCounterGridCode = require('./NxThreatCounterGridExample?raw');

const NxThreatCounterPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Basic style for small counter which displays a number representing a count of violations, and a short pre-set
        text string which displays the threat severity.
      </p>
      <p className="nx-p">
        Three basic layouts have been demonstrated below. It is expected that one of these should satisfy any
        requirement.
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
            <td className="nx-cell"><code className="nx-code">.nx-threat-counter-container</code></td>
            <td className="nx-cell">Container</td>
            <td className="nx-cell">Basic container class. It's always used with one of the modifiers below.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">
              <code className="nx-code">.nx-threat-counter-container--row</code>
            </td>
            <td className="nx-cell">
              Modifier of <code className="nx-code">.nx-threat-counter-container</code>
            </td>
            <td className="nx-cell">
              Used when you want the counters to appear in a row. This is the default. If no layout is specified
              "row" will be used.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">
              <code className="nx-code">.nx-threat-counter-container--column</code>
            </td>
            <td className="nx-cell">
              Modifier of <code className="nx-code">.nx-threat-counter-container</code>
            </td>
            <td className="nx-cell">Used when you want the counters to appear in a column.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">
              <code className="nx-code">.nx-threat-counter-container--grid</code>
            </td>
            <td className="nx-cell">
              Modifier of <code className="nx-code">.nx-threat-counter-container</code>
            </td>
            <td className="nx-cell">Used when you want the threat counters to appear in a two by two grid layout.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-threat-counter</code></td>
            <td className="nx-cell">Top level</td>
            <td className="nx-cell">Basic threat counter styling.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">
              <code className="nx-code">nx-threat-counter--critical</code><br/>
              <code className="nx-code">nx-threat-counter--severe</code><br/>
              <code className="nx-code">nx-threat-counter--moderate</code><br/>
              <code className="nx-code">nx-threat-counter--low</code>
            </td>
            <td className="nx-cell">Modifiers of <code className="nx-code">.nx-threat-counter</code></td>
            <td className="nx-cell">
              These four modifiers style <code className="nx-code">.nx-threat-counter</code>
              to match the required threat level.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-threat-counter__count</code></td>
            <td className="nx-cell">Element of <code className="nx-code">.nx-threat-counter</code></td>
            <td className="nx-cell">This class styles the count text.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-threat-counter__text</code></td>
            <td className="nx-cell">Element of <code className="nx-code">.nx-threat-counter</code></td>
            <td className="nx-cell">this class styles the threat level text.</td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="NxThreatCounter Default Example"
                        id="nx-threat-counter-row"
                        liveExample={NxThreatCounterExample}
                        codeExamples={NxThreatCounterCode}>
      <code className="nx-code">nx-threat-counter</code>s in the default layout.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxThreatCounter Column Example"
                        id="nx-threat-counter-column"
                        liveExample={NxThreatCounterColumnExample}
                        codeExamples={NxThreatCounterColumnCode}>
      <code className="nx-code">nx-threat-counter</code>s in column layout.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxThreatCounter Grid Example"
                        id="nx-threat-counter-grid"
                        liveExample={NxThreatCounterGridExample}
                        codeExamples={NxThreatCounterGridCode}>
      <code className="nx-code">nx-threat-counter</code>s in "grid" layout.
    </GalleryExampleTile>
  </>;

export default NxThreatCounterPage;
