/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxInfoAlert, NxFontAwesomeIcon, NxWarningAlert } from '@sonatype/react-shared-components';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

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
            <td className="nx-cell"><NxCode>.nx-table</NxCode></td>
            <td className="nx-cell">Top-Level</td>
            <td className="nx-cell">
              Default table class. Note that a properly configured table require
              <NxCode>&lt;thead&gt;</NxCode>, <NxCode>&lt;tbody&gt;</NxCode>
              and correct classes on rows and cells.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-table--clickable</NxCode></td>
            <td className="nx-cell">Modifier of <NxCode>.nx-table</NxCode></td>
            <td className="nx-cell">
              A "clickable" table is one where the table rows accept a click event and (usually) navigate to another
              view.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-table--scrollable</NxCode></td>
            <td className="nx-cell">Modifier of <NxCode>.nx-table</NxCode></td>
            <td className="nx-cell">
              <NxWarningAlert>
                Deprecated. Use an <NxCode>.nx-table-container.nx-scrollable</NxCode> wrapper
                around a plain <NxCode>.nx-table</NxCode> instead.
              </NxWarningAlert>
              When a table which scrolls in of itself is desired, wrap the table in
              an <NxCode>.nx-scrollable</NxCode> wrapper and give it a class
              of <NxCode>.nx-table--scrollable</NxCode>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-table--fixed-layout</NxCode></td>
            <td className="nx-cell">Modifier of <NxCode>.nx-table</NxCode></td>
            <td className="nx-cell">
              Used to apply{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout"
                 className="nx-text-link"
                 target="_blank"
                 rel="noreferrer">
                <NxCode>table-layout: fixed</NxCode>
                <NxFontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
              {' '}to <NxCode>nx-table</NxCode>s. This class should be used in lieu of setting
              <NxCode>table-layout</NxCode> manually, as it also makes some adjustments to the
              behavior of other table classes in order to make them compatible with a fixed layout.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-table-row</NxCode></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">Basic table row class.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-table-row--header</NxCode></td>
            <td className="nx-cell">Modifier of <NxCode>.nx-table-row</NxCode></td>
            <td className="nx-cell">Used for table rows within a <NxCode>&lt;thead&gt;</NxCode>.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-cell</NxCode></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Standard tabel cell class, applied to both <NxCode>&lt;td&gt;</NxCode> and
              <NxCode>&lt;th&gt;</NxCode>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-cell--header</NxCode></td>
            <td className="nx-cell">Modifier of <NxCode>.nx-cell</NxCode></td>
            <td className="nx-cell">Used for style table header cells.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-cell--num</NxCode></td>
            <td className="nx-cell">Modifier of <NxCode>.nx-cell</NxCode></td>
            <td className="nx-cell">
              Used to style header and body cells whose content is numerical. Centers the header and content.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-cell--meta-info</NxCode></td>
            <td className="nx-cell">Modifier of <NxCode>.nx-cell</NxCode></td>
            <td className="nx-cell">
              Applied to table cells that provide meta-information about the table data. There are three known use
              cases for this: loading states, error states, and empty states. In each of these cases, the table body
              should contain a single row with a single cell. That cell should use the `colspan` attribute to
              stretch all the way across the table, and should use this class.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">
              <NxCode>.nx-cell--icon</NxCode>
            </td>
            <td className="nx-cell">Modifier of <NxCode>.nx-cell</NxCode></td>
            <td className="nx-cell">
              This class should be used when the only contents of a cell one or more icons.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">
              <NxCode>.nx-cell--chevron</NxCode>
            </td>
            <td className="nx-cell">Modifier of <NxCode>.nx-cell</NxCode></td>
            <td className="nx-cell">
              This class is intended for the cells holding the Chevron icons that should be placed on the right
              side of clickable table rows. It creates a column of the appropriate width for the icon. It
              is <em>not</em> necessary to additional use <NxCode>.nx-cell--icon</NxCode> on these
              cells.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">
              <NxCode>.nx-cell--filter-header</NxCode>
            </td>
            <td className="nx-cell">Modifier of <NxCode>.nx-cell</NxCode></td>
            <td className="nx-cell">
              Used for style table header cells with a filter
            </td>
          </tr>
        </tbody>
      </table>

      <NxInfoAlert>
        Note that some of these examples are shown in react as they includes specific icons. When working in
        React, <NxCode>NxFontAwesomeIcon</NxCode> should be used as shown to get these icons.
        When not working in react, check the FontAwesome 5 documentation for alternative ways to include the icons.
      </NxInfoAlert>
    </GalleryDescriptionTile>
    <NxTableExamples />
  </>;

export default NxTableStylePage;
