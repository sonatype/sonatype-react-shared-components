/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import NxListExamples from './NxListExamples';

const NxListPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>Lists take many forms:</p>
      <ul>
        <li>Simple data lists</li>
        <li>Lists with clickable list items</li>
        <li>Lists with bullets</li>
        <li>Definition Lists</li>
        <li>Lists with actions</li>
        <li>Lists with items that have multiple lines of text</li>
      </ul>
      <p>Lists can also have modified states depending on their content:</p>
      <ul>
        <li>Lists with no data</li>
        <li>Error states</li>
      </ul>
      <p>
        The basic layout is a container <code className="nx-code">&lt;div&gt;</code> wrapping a
        <code className="nx-code">&lt;ul&gt;</code>. If the list has a title it is placed inside
        the <code className="nx-code">&lt;div&gt;</code> before the &lt;ul&gt;.
      </p>
      <p>
        There are also lists that are "clickable", the list items in these lists indicate hover and click states and
        when clicked an event occurs - usually navigation. Clickable lists have hover and disabled states. They share
        error and empty states with default lists.
      </p>
      <table className="gallery-props-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Location</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="nx-code">.nx-list</code></td>
            <td>Top-Level</td>
            <td>The parent list class. It has no bullets.</td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-list--clickable</code></td>
            <td>Modifier of <code className="nx-code">.nx-list</code></td>
            <td>
              This modifier causes list items to respond to hover events. There is normally a chevron icon on the
              right to make it clear to the user that clicking will navigate away from the page.
            </td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-list--bulleted</code></td>
            <td>Modifier of <code className="nx-code">.nx-list</code></td>
            <td>If you need a list with bullets.</td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-list--definition-list</code></td>
            <td>Modifier of <code className="nx-code">.nx-list</code></td>
            <td>Definition lists have two elements: a label and the data associated with that label.</td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-list__item--with-modifier-icon</code></td>
            <td>Modifier of <code className="nx-code">.nx-list__item</code></td>
            <td>Use this when you want to have a button on the far right.</td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-list__subtext</code></td>
            <td>Element</td>
            <td>
              When you want a separate line below the main list item use a <code className="nx-code">&lt;p&gt;</code>
              with <code className="nx-code">.nx-list__subtext</code>
            </td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-list__item--empty</code></td>
            <td>Modifier of <code className="nx-code">.nx-list__item</code></td>
            <td>Used when there are no list items returned.</td>
          </tr>
          <tr>
            <td><code className="nx-code">.nx-error</code></td>
            <td>Modifier of <code className="nx-code">.nx-list__item</code></td>
            <td>Not strictly speaking a modifier, this is added to a list item when the list is in an error state.</td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>
    <NxListExamples />
  </>;

export default NxListPage;
