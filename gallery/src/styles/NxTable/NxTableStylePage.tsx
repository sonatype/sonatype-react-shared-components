/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxInfoAlert } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import NxTableExamples from './NxTableExamples';

const NxTableStylePage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        This is the styling and layout for a basic table. There are few variations demonstrated here:
      </p>
      <ul className="nx-list nx-list--bulleted">
        <li className="nx-list__item">Basic table layout</li>
        <li className="nx-list__item">Tables with clickable rows</li>
        <li className="nx-list__item">Empty tables</li>
        <li className="nx-list__item">A table with an error.</li>
      </ul>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row nx-table-row--header">
            <th className="nx-cell nx-cell--header">Class</th>
            <th className="nx-cell nx-cell--header">Location</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-table</code></td>
            <td className="nx-cell">Top-Level</td>
            <td className="nx-cell">
              Default table class. Note that a properly configured table require
              <code className="nx-code">&lt;thead&gt;</code>, <code className="nx-code">&lt;tbody&gt;</code>
              and correct classes on rows and cells.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-table--clickable</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-table</code></td>
            <td className="nx-cell">
              A "clickable" table is one where the table rows accept a click event and (usually) navigate to another
              view.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-table-row</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">Basic table row class.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-table-row--header</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-table-row</code></td>
            <td className="nx-cell">Used for table rows within a <code className="nx-code">&lt;thead&gt;</code>.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-cell</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Standard tabel cell class, applied to both <code className="nx-code">&lt;td&gt;</code> and
              <code className="nx-code">&lt;th&gt;</code>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-cell--header</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-cell</code></td>
            <td className="nx-cell">Used for style table header cells.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-cell--num</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-cell</code></td>
            <td className="nx-cell">
              Used to style header and body cells whose content is numerical. Centers the header and content.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-cell--empty</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-cell</code></td>
            <td className="nx-cell">
              Applied to a <code className="nx-code">&lt;td&gt;</code>
              to indicate a table without contents.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">
              <code className="nx-code">.nx-cell--chevron</code>
              &amp; <code className="nx-code">.nx-cell--icon</code>
            </td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-cell</code></td>
            <td className="nx-cell">
              Both of these classes are used when the only contents of a cell are an icon. This class creates a narrow
              column suitable for holding a single icon. The chevron is used for "clickable" rows and indicates
              that a navigation event will occur if the table row is clicked. Examples of icons might be edit icons,
              trash icons, or confirmation icons.
            </td>
          </tr>
        </tbody>
      </table>

      <p className="nx-p">
        When a table which scrolls in of itself is desired, wrap the table in
        a <code className="nx-code">.nx-scrollable</code> wrapper and give it a class
        of <code className="nx-code">.nx-scrollable__table</code> as documented on
        the <a href="#/pages/nx-scrollable">nx-scrollable</a> page.
      </p>

      <NxInfoAlert>
        Note that some of these examples are shown in react as they includes specific icons. When working in
        React, <code className="nx-code">NxFontAwesomeIcon</code> should be used as shown to get these icons.
        When not working in react, check the FontAwesome 5 documentation for alternative ways to include the icons.
      </NxInfoAlert>
    </GalleryDescriptionTile>
    <NxTableExamples />
  </>;

export default NxTableStylePage;
