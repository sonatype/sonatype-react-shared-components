/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxCode } from '@sonatype/react-shared-components';

import './NxReadOnlyGridExample.scss';

const nxReadOnlyDlExampleCode = require('./NxReadOnlyDlExample.html'),
    nxReadOnlyGridExampleCode = require('./NxReadOnlyGridExample.html'),
    nxReadOnlyGridExampleStyles = require('./NxReadOnlyGridExample.scss?raw');

const gridCode = [nxReadOnlyGridExampleCode, { content: nxReadOnlyGridExampleStyles, language: 'scss' }];

const NxReadOnlyPage = () => {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          <code className="nx-code">.nx-read-only</code> is a design pattern for when you wish to display read-only
          data in a form. Its basic structure is a label and one or more data points.
        </p>
        <p className="nx-p">
          <code className="nx-code">.nx-read-only</code> is layed out using a description list
          (<code className="nx-code">&lt;dl&gt;</code>) as the container.
        </p>
        <table className="nx-table">
          <thead>
            <tr className="nx-table-row">
              <th className="nx-cell nx-cell--header">Class</th>
              <th className="nx-cell nx-cell--header">Convenience Component</th>
              <th className="nx-cell nx-cell--header">Location</th>
              <th className="nx-cell nx-cell--header">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="nx-table-row">
              <td className="nx-cell"><code className="nx-code">.nx-read-only</code></td>
              <td className="nx-cell"><code className="nx-code">NxReadOnly</code></td>
              <td className="nx-cell">Top level</td>
              <td className="nx-cell">
                This is the basic wrapper class. It is applied to the <code className="nx-code">&lt;dl&gt;</code>.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell"><code className="nx-code">.nx-read-only--grid</code></td>
              <td className="nx-cell"></td>
              <td className="nx-cell">Modifier of <NxCode>.nx-read-only</NxCode></td>
              <td className="nx-cell">
                This class preps the <NxCode>nx-read-only</NxCode> to display its entries in a grid. While this class
                adds the basic grid properties (<NxCode>display</NxCode>, <NxCode>gap</NxCode>, etc) it is up to
                the caller to specify additional CSS to define their desired grid layout in terms of the number
                and arrangement of the grid cells.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell"><code className="nx-code">.nx-read-only__label</code></td>
              <td className="nx-cell"><code className="nx-code">NxReadOnly.Label</code></td>
              <td className="nx-cell">Element</td>
              <td className="nx-cell">
                This class is applied to the <code className="nx-code">&lt;dt&gt;</code>, it represents the label for
                the data below.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell"><code className="nx-code">.nx-read-only__data</code></td>
              <td className="nx-cell"><code className="nx-code">NxReadOnly.Data</code></td>
              <td className="nx-cell">Element</td>
              <td className="nx-cell">
                This class is applied to any <code className="nx-code">&lt;dd&gt;</code>'s that appear. The data
                displayed can be any string or HTML markup.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell"><code className="nx-code">.nx-read-only__item</code></td>
              <td className="nx-cell"><code className="nx-code">NxReadOnly.Item</code></td>
              <td className="nx-cell">
                Child of <NxCode>.nx-read-only--grid</NxCode>, parent of <NxCode>.nx-read-only__label</NxCode> and
                {' '}<NxCode>.nx-read-only__data</NxCode>.
              </td>
              <td className="nx-cell">
                When creating an <NxCode>.nx-read-only</NxCode> with a grid layout,
                each <NxCode>&lt;dt&gt;</NxCode>/<NxCode>&lt;dd&gt;</NxCode> group must be wrapped
                in a div with this class. This class/element should not be used in non-grid layouts.
              </td>
            </tr>
          </tbody>
        </table>
      </GalleryDescriptionTile>
      <GalleryExampleTile title="Simple Example"
                          id="nx-read-only-simple-example"
                          codeExamples={nxReadOnlyDlExampleCode}
                          htmlExample={nxReadOnlyDlExampleCode}>
        Standard <code className="nx-code">nx-read-only</code> layouts, by default all text wraps.
      </GalleryExampleTile>

      <GalleryExampleTile title="Grid Example"
                          id="nx-read-only-grid-example"
                          codeExamples={gridCode}
                          htmlExample={nxReadOnlyGridExampleCode}>
        An <NxCode>nx-read-only</NxCode> arranged in a grid. The exact layout of the grid is custom to this example.
        In typical usage, the layout of the grid would be usage-specific requiring the use
        of <NxCode>grid-template</NxCode> and/or <NxCode>grid-area</NxCode> CSS properties.
      </GalleryExampleTile>
    </>
  );
};

export default NxReadOnlyPage;
