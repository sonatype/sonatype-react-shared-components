/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';

import {
  NxTable,
  NxTableBody,
  NxTableCell,
  NxTableHead,
  NxTableRow
} from '@sonatype/react-shared-components';

import NxTabsSimpleExample from './NxTabsSimpleExample';

const tabsSimpleExampleCode = require('!!raw-loader!./NxTabsSimpleExample').default;

export default function NxTabsPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <h5>NxTabs</h5>

        <p>
          The top-level container for tabbed navigation.
          It can have <code className="nx-code">&lt;NxTabList&gt;</code> and
          {' '}<code className="nx-code">&lt;NxTabPanel&gt;</code> components as children.
        </p>

        <hr />

        <h5>NxTabs</h5>

        <p>The parent container for the tabs.</p>

        <hr />

        <h5>NxTabList</h5>

        <p>
          The parent container for <code className="nx-code">&lt;NxTab&gt;</code> components.
          These are the components the user would click on to switch tabs.
        </p>

        <hr />

        <h5>NxTab</h5>

        <p>The component the user clicks on to switch tabs.</p>

        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Prop</NxTableCell>
              <NxTableCell>Type</NxTableCell>
              <NxTableCell>Required</NxTableCell>
              <NxTableCell>Details</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody>
            <NxTableRow>
              <NxTableCell>active</NxTableCell>
              <NxTableCell>boolean</NxTableCell>
              <NxTableCell>false</NxTableCell>
              <NxTableCell>Used to mark the current tab as active</NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>

        <hr />

        <h5>NxTabPanel</h5>

        <p>
          Container component for the tab contents.
        </p>

        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Prop</NxTableCell>
              <NxTableCell>Type</NxTableCell>
              <NxTableCell>Required</NxTableCell>
              <NxTableCell>Details</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody>
            <NxTableRow>
              <NxTableCell>labelledBy</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>true</NxTableCell>
              <NxTableCell>
                The id of the related <code className="nx-code">&lt;NxTab&gt;</code>.
              </NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </GalleryDescriptionTile>
      <GalleryTile title="Simple Example">
        <NxTabsSimpleExample />
        <CodeExample content={tabsSimpleExampleCode} />
      </GalleryTile>
    </>
  );
}
