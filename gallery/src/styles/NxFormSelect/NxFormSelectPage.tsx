/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxFormSelectExample from './NxFormSelectExample';
import NxFormSelectDisabledExample from './NxFormSelectDisabledExample';

const sourceCode = require('./NxFormSelectExample?raw');

const NxFormSelectPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Basic styles for Sonatype form select inputs. There isn't very much styling available for the
        <NxCode>&lt;select&gt;</NxCode> tag. As such we've just implemented the basic borders, font,
        and padding as well as disabled and focus styles.
      </p>
      <p className="nx-p">Classes:</p>
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
            <td className="nx-cell"><NxCode>.nx-form-select</NxCode></td>
            <td className="nx-cell">
              Base class
            </td>
            <td className="nx-cell">
              Base class for a form <NxCode>&lt;select&gt;</NxCode>.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Form Select Example"
                        id="nx-form-select-example"
                        codeExamples={sourceCode}
                        liveExample={NxFormSelectExample}>
      Demonstrates a form <NxCode>&lt;select&gt;</NxCode> active state.
    </GalleryExampleTile>
    <GalleryExampleTile title="Form Select Disabled Example"
                        id="nx-form-select-disabled-example"
                        codeExamples={sourceCode}
                        liveExample={NxFormSelectDisabledExample}>
      Demonstrates a form <NxCode>&lt;select&gt;</NxCode> disabled state.
    </GalleryExampleTile>
  </>;

export default NxFormSelectPage;
