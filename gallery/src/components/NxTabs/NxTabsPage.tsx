/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import {
  NxTable,
  NxTableBody,
  NxTableCell,
  NxTableHead,
  NxTableRow
} from '@sonatype/react-shared-components';

import NxTabsSimpleExample from './NxTabsSimpleExample';

const NxTabsSimpleExampleCode = require('!!raw-loader!./NxTabsSimpleExample').default;

export default function NxTabsPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <h3 className="nx-h3">NxTabs</h3>

        <p className="nx-p">
          The top-level container for tabbed navigation.
          It can have <code className="nx-code">&lt;NxTabList&gt;</code> and
          {' '}<code className="nx-code">&lt;NxTabPanel&gt;</code> components as children.
        </p>

        <h3 className="nx-h3">NxTabList</h3>

        <p className="nx-p">
          The parent container for <code className="nx-code">&lt;NxTab&gt;</code> components.
          These are the components the user would click on to switch tabs.
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
              <NxTableCell>activeTab</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>true</NxTableCell>
              <NxTableCell>
                The id of the active <code className="nx-code">NxTab</code>,
                only the <code className="nx-code">NxTabPanel</code> with a
                matching <code className="nx-code">labelledBy</code> prop will be rendered.
              </NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>

        <h3 className="nx-h3">NxTab</h3>

        <p className="nx-p">The component the user clicks on to switch tabs.</p>

        <h3 className="nx-h3">NxTabPanel</h3>

        <p className="nx-p">
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
      <GalleryExampleTile title="Simple NxTabs Example"
                          liveExample={NxTabsSimpleExample}
                          codeExamples={NxTabsSimpleExampleCode}>
        A basic example of how to use the <code className="nx-code">NxTabs</code> family of components.
      </GalleryExampleTile>
    </>
  );
}
