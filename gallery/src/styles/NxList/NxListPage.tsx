/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxInfoAlert } from '@sonatype/react-shared-components';

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
        The basic layout is a container <code className="nx-code">&lt;div&gt;</code> wrapping a
        <code className="nx-code">&lt;ul&gt;</code>. If the list has a title it is placed inside
        the <code className="nx-code">&lt;div&gt;</code> before the &lt;ul&gt;.
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
            <th className="nx-cell nx-cell--header">Location</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-list</code></td>
            <td className="nx-cell">Top-Level</td>
            <td className="nx-cell">The parent list class. It has no bullets.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-list--clickable</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-list</code></td>
            <td className="nx-cell">
              This modifier causes list items to respond to hover events. There is normally a chevron icon on the
              right to make it clear to the user that clicking will navigate away from the page.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-list--bulleted</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-list</code></td>
            <td className="nx-cell">If you need a list with bullets.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-list__item--with-modifier-icon</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-list__item</code></td>
            <td className="nx-cell">Use this when you want to have a button on the far right.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.selected</code></td>
            <td className="nx-cell">Utility class that goes along
              with <code className="nx-code">.nx-list__item</code>
            </td>
            <td className="nx-cell">Use the <code className="nx-code">selected</code> class
              alongside <code className="nx-code">.nx-list__item</code> when a clickable list item is selected
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-list__subtext</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              When you want a separate line below the main list item use a <code className="nx-code">&lt;p&gt;</code>
              with <code className="nx-code">.nx-list__subtext</code>
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-list__item--empty</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-list__item</code></td>
            <td className="nx-cell">Used when there are no list items returned.</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-error</code></td>
            <td className="nx-cell">Modifier of <code className="nx-code">.nx-list__item</code></td>
            <td className="nx-cell">
              Not strictly speaking a modifier, this is added to a list item when the list is in an error state.
            </td>
          </tr>
        </tbody>
      </table>
      <NxInfoAlert>
        Note that some of these examples are shown in React as they includes specific icons. When working in
        React, <code className="nx-code">NxFontAwesomeIcon</code> should be used as shown to get these icons.
        When not working in React, check the FontAwesome 5 documentation for alternative ways to include the icons.
      </NxInfoAlert>
    </GalleryDescriptionTile>
    <NxListExamples />
  </>;

export default NxListPage;
