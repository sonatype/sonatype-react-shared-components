/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const nxReadOnlyDlExampleCode = require('./NxReadOnlyDlExample.html');

const NxReadOnlyPage = () => {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          <NxCode>.nx-read-only</NxCode> is a design pattern for when you wish to display read-only
          data in a form. Its basic structure is a label and one or more data points.
        </p>
        <p className="nx-p">
          <NxCode>.nx-read-only</NxCode> is layed out using a description list
          (<NxCode>&lt;dl&gt;</NxCode>) as the container.
        </p>
        <table className="nx-table">
          <thead>
            <tr className="nx-table-row">
              <th className="nx-cell nx-cell--header">Class</th>
              <th className="nx-cell nx-cell--header">Location</th>
              <th className="nx-cell nx-cell--header">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="nx-table-row">
              <td className="nx-cell"><NxCode>.nx-read-only</NxCode></td>
              <td className="nx-cell">Top level</td>
              <td className="nx-cell">
                This is the basic wrapper class. It is applied to the <NxCode>&lt;dl&gt;</NxCode>.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell"><NxCode>.nx-read-only__label</NxCode></td>
              <td className="nx-cell">Element</td>
              <td className="nx-cell">
                This class is applied to the <NxCode>&lt;dt&gt;</NxCode>, it represents the label for
                the data below.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell"><NxCode>.nx-read-only__data</NxCode></td>
              <td className="nx-cell">Element</td>
              <td className="nx-cell">
                This class is applied to any <NxCode>&lt;dd&gt;</NxCode>'s that appear. The data
                displayed can be any string or HTML markup.
              </td>
            </tr>
          </tbody>
        </table>
      </GalleryDescriptionTile>
      <GalleryExampleTile title="Styling read-only lists of data"
                          codeExamples={nxReadOnlyDlExampleCode}
                          htmlExample={nxReadOnlyDlExampleCode}>
        Standard <NxCode>nx-read-only</NxCode> layouts, by default all text wraps.
      </GalleryExampleTile>
    </>
  );
};

export default NxReadOnlyPage;
