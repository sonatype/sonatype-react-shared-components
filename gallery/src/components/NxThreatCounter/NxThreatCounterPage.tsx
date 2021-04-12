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
        Component for a series of small counters which display a number representing a count of threats/violations,
        and a short pre-set text string which displays the severity (critical, severe, moderate, and low).
      </p>
      <p className="nx-p">
        Three basic layouts have been demonstrated below. It is expected that one of these should satisfy any
        requirement.
      </p>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row">
            <th className="nx-cell nx-cell--header">Prop</th>
            <th className="nx-cell nx-cell--header">Type</th>
            <th className="nx-cell nx-cell--header">Required</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell">criticalCount</td>
            <td className="nx-cell">number</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">A numerical value, the number of critical threats.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">severeCount</td>
            <td className="nx-cell">number</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">A numerical value, the number of severe threats.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">moderateCount</td>
            <td className="nx-cell">number</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">A numerical value, the number of moderate threats.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">lowCount</td>
            <td className="nx-cell">number</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">A numerical value, the number of low threats.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">layout</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Sets the layout of the counters. If no value is provided then "row" layout will be specified. The other
              options are <code className="nx-code">column</code> and <code className="nx-code">grid</code>.
            </td>
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
      <code className="nx-code">nx-threat-counter</code>s in a 2x2 "grid" layout.
    </GalleryExampleTile>
  </>;

export default NxThreatCounterPage;
