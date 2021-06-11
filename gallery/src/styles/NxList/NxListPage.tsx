/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxInfoAlert, NxTable, NxTableHead, NxTableRow, NxTableCell, NxTableBody }
  from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import NxListExamples from './NxListExamples';

const NxListPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">Lists take many forms:</p>
      <ul className="nx-list nx-list--bulleted">
        <li className="nx-list__item">Simple data lists</li>
        <li className="nx-list__item">Lists with clickable list items</li>
        <li className="nx-list__item">Lists with bullets</li>
        <li className="nx-list__item">Lists with actions</li>
        <li className="nx-list__item">Lists with items that have multiple lines of text</li>
      </ul>
      <p className="nx-p">Lists can also have modified states depending on their content:</p>
      <ul className="nx-list nx-list--bulleted">
        <li className="nx-list__item">Lists with no data</li>
        <li className="nx-list__item">Error states</li>
      </ul>
      <p className="nx-p">
        The basic layout is a <code className="nx-code">&lt;ul&gt;</code>. If the list has a title a simple heading
        such as <code className="nx-code">&lt;h3 className="nx-h3"&gt;</code> should be used before the &lt;ul&gt;.
      </p>
      <p className="nx-p">
        There are also lists that are "clickable", the list items in these lists indicate hover and click states and
        when clicked an event occurs - usually navigation. Clickable lists have hover and disabled states. They share
        error and empty states with default lists.
      </p>
      <table className="nx-table nx-table--gallery-props">
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
            <td className="nx-cell"><code className="nx-code">.nx-list</code></td>
            <td className="nx-cell"><code className="nx-code">NxList</code></td>
            <td className="nx-cell">Top-Level <code className="nx-code">&lt;ul&gt;</code></td>
            <td className="nx-cell">The parent list class. It has no bullets.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-list--clickable</code></td>
            <td className="nx-cell"/>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-list</code></td>
            <td className="nx-cell">
              This modifier causes list items to respond to hover events. There is normally a chevron icon on the
              right to make it clear to the user that clicking will navigate away from the page.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-list--bulleted</code></td>
            <td className="nx-cell"/>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-list</code></td>
            <td className="nx-cell">If you need a list with bullets.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-list__item</code></td>
            <td className="nx-cell"><code className="nx-code">NxList.Item</code></td>
            <td className="nx-cell">The <code className="nx-code">&lt;li&gt;</code> elements within the list</td>
            <td className="nx-cell">
              This class should be present on all list items within an <code className="nx-code">nx-list</code>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.selected</code></td>
            <td className="nx-cell"/>
            <td className="nx-cell">
              Utility class that goes along with <code className="nx-code">.nx-list__item</code>
            </td>
            <td className="nx-cell">
              Use the <code className="nx-code">selected</code> class alongside
              <code className="nx-code">.nx-list__item</code> when a clickable list item is selected
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-list__text</code></td>
            <td className="nx-cell"><code className="nx-code">NxList.Text</code></td>
            <td className="nx-cell">Element within <code className="nx-code">&lt;li&gt;</code></td>
            <td className="nx-cell">
              The primary text content of the list item, displayed in a heavier font weight.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-list__subtext</code></td>
            <td className="nx-cell"><code className="nx-code">NxList.Subtext</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              When you want a separate section of non-bolded text below the main list item text use
              a <code className="nx-code">&lt;span&gt;</code> with <code className="nx-code">.nx-list__subtext</code>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-list__actions</code></td>
            <td className="nx-cell"><code className="nx-code">NxList.Actions</code></td>
            <td className="nx-cell">A container for buttons inside list items</td>
            <td className="nx-cell">Use this when you want to have a button on the far right.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-list__item--empty</code></td>
            <td className="nx-cell"/>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-list__item</code></td>
            <td className="nx-cell">Used when there are no list items returned.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">nx-list__item--error</code></td>
            <td className="nx-cell"/>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-list__item</code></td>
            <td className="nx-cell">
              This is added to a list item when the list is in an error state. In this case it's expected that there
              would only be a single list item which contains the error alert.
            </td>
          </tr>
        </tbody>
      </table>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__title">
          <h3 className="nx-h3">Description Lists</h3>
        </header>
        <p className="nx-p">
          In addition to ordered and unordered lists, <code className="nx-code">nx-list</code> also supports the
          styling of description lists using the following classes. Terms and descriptions are laid out side-by-side
          in rows. Currently only one description per term, and one term per description, are supported – not multiple.
        </p>
        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Class</NxTableCell>
              <NxTableCell>Convenience Component</NxTableCell>
              <NxTableCell>Location</NxTableCell>
              <NxTableCell>Details</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody>
            <NxTableRow>
              <NxTableCell><code className="nx-code">.nx-list--description-list</code></NxTableCell>
              <NxTableCell/>
              <NxTableCell>
                <code className="nx-code">&lt;dl&gt;</code> which also
                has <code className="nx-code">.nx-list</code>.
              </NxTableCell>
              <NxTableCell>Root class to apply RSC description list styles</NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell><code className="nx-code">.nx-list__item</code></NxTableCell>
              <NxTableCell><code className="nx-code">NxList.Item</code></NxTableCell>
              <NxTableCell>
                <code className="nx-code">&lt;div&gt;</code> wrapping <code className="nx-code">&lt;dt&gt;</code>{' '}
                and <code className="nx-code">&lt;dd&gt;</code> elements
              </NxTableCell>
              <NxTableCell>
                Each <code className="nx-code">&lt;dt&gt;</code>/<code className="nx-code">&lt;dd&gt;</code> pairing
                should be wrapped in a div which is styled similarly to an item row in a normal nx-list.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell><code className="nx-code">.nx-list__term</code></NxTableCell>
              <NxTableCell><code className="nx-code">NxList.Term</code></NxTableCell>
              <NxTableCell><code className="nx-code">&lt;dt&gt;</code></NxTableCell>
              <NxTableCell>Styles the description term elements</NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell><code className="nx-code">.nx-list__description</code></NxTableCell>
              <NxTableCell><code className="nx-code">NxList.Description</code></NxTableCell>
              <NxTableCell><code className="nx-code">&lt;dd&gt;</code></NxTableCell>
              <NxTableCell>Styles the description elements</NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </section>
      <NxInfoAlert>
        Note that some of these examples are shown in React as they includes specific icons. When working in
        React, <code className="nx-code">NxFontAwesomeIcon</code> should be used as shown to get these icons.
        When not working in React, check the FontAwesome 5 documentation for alternative ways to include the icons.
      </NxInfoAlert>
    </GalleryDescriptionTile>
    <NxListExamples />
  </>;

export default NxListPage;
