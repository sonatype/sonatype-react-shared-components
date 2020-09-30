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

import NxTabsTileHeaderExample from './NxTabsTileHeaderExample';
import NxTabsTileNoHeaderExample from './NxTabsTileNoHeaderExample';
import NxTabsModalExample from './NxTabsModalExample';
import NxTabsModalNoHeaderExample from './NxTabsModalNoHeaderExample';

const NxTabsTileHeaderExampleCode = require('!!raw-loader!./NxTabsTileHeaderExample').default;
const NxTabsTileNoHeaderExampleCode = require('!!raw-loader!./NxTabsTileNoHeaderExample').default;
const NxTabsModalExampleCode = require('!!raw-loader!./NxTabsModalExample').default;
const NxTabsModalNoHeaderExampleCode = require('!!raw-loader!./NxTabsModalNoHeaderExample').default;

export default function NxTabsPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          A set of accessible tab components which must be used together.
        </p>

        <section className="nx-tile-subsection">
          <header className="nx-tile-subsection__header">
            <h3 className="nx-h3">NxTabs</h3>
          </header>

          <p className="nx-p">
            The top-level container for tabbed navigation.
            It can have <code className="nx-code">&lt;NxTabList&gt;</code> and
            {' '}<code className="nx-code">&lt;NxTabPanel&gt;</code> components as children.
          </p>

          <NxTable className="nx-table--gallery-props">
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
                <NxTableCell>number</NxTableCell>
                <NxTableCell>false</NxTableCell>
                <NxTableCell>
                  The index of the active tab. If not set no tab contents will be shown.
                </NxTableCell>
              </NxTableRow>
              <NxTableRow>
                <NxTableCell>onTabSelect</NxTableCell>
                <NxTableCell>function(number)</NxTableCell>
                <NxTableCell>false</NxTableCell>
                <NxTableCell>
                  Called with the index of the newly selected tab when the currently selected tab changes.
                </NxTableCell>
              </NxTableRow>
              <NxTableRow>
                <NxTableCell>.nx-modal-content--tabs</NxTableCell>
                <NxTableCell>Modifier</NxTableCell>
                <NxTableCell></NxTableCell>
                <NxTableCell>
                  A modifier class that must be added to <code className="nx-code">.nx-modal-content</code> when
                  you want to use tabs within an <code className="nx-code">NxModal</code>. The modifier makes
                  keeps the tabs "sticky" while allowing the tab content to scroll.
                </NxTableCell>
              </NxTableRow>
            </NxTableBody>
          </NxTable>
        </section>

        <section className="nx-tile-subsection">
          <header className="nx-tile-subsection__header">
            <h3 className="nx-h3">NxTabList</h3>
          </header>

          <p className="nx-p">
            The parent container for the <code className="nx-code">&lt;NxTab&gt;</code> components.
            Passes through all attributes to an underlying ul element.
          </p>
        </section>

        <section className="nx-tile-subsection">
          <header className="nx-tile-subsection__header">
            <h3 className="nx-h3">NxTab</h3>
          </header>

          <p className="nx-p">
            The component the user selects to switch tabs.
            The index prop is automatically configured by the <code className="nx-code">NxTabs</code> component.
            There should be one of these for each <code className="nx-code">NxTabPanel</code> component.
            Passes through all attributes to an underlying li element.
          </p>
        </section>

        <section className="nx-tile-subsection">
          <header className="nx-tile-subsection__header">
            <h3 className="nx-h3">NxTabPanel</h3>
          </header>

          <p className="nx-p">
            Container component for the tab contents.
            The index prop is automatically configured by the <code className="nx-code">NxTabs</code> component.
            There should be one of these for each <code className="nx-code">NxTab</code> component.
          </p>
        </section>
      </GalleryDescriptionTile>
      <GalleryExampleTile title="NxTabs in NxTile Example"
                          id="nx-tab-tile-example"
                          liveExample={NxTabsTileHeaderExample}
                          codeExamples={NxTabsTileHeaderExampleCode}>
        A basic example of how to use the <code className="nx-code">NxTabs</code> family of components in an
        {' '}<code className="nx-code">NxTile</code>.
      </GalleryExampleTile>
      <GalleryExampleTile title="NxTabs in NxTile with no header Example"
                          id="nx-tab-tile-no-header-example"
                          liveExample={NxTabsTileNoHeaderExample}
                          codeExamples={NxTabsTileNoHeaderExampleCode}>
        A basic example of how to use the <code className="nx-code">NxTabs</code> family of components in an
        {' '}<code className="nx-code">NxTile</code> where there is no tile header and the tabs are top most within
        the tile.
      </GalleryExampleTile>
      <GalleryExampleTile title="NxTabs in NxModal Example"
                          id="nx-tab-modal-example"
                          liveExample={NxTabsModalExample}
                          codeExamples={NxTabsModalExampleCode}>
        A basic example of how to use the <code className="nx-code">NxTabs</code> family of components in an
        {' '}<code className="nx-code">NxModal</code>.
      </GalleryExampleTile>
      <GalleryExampleTile title="NxTabs in NxModal with No Header Example"
                          id="nx-tab-modal-no-header-example"
                          liveExample={NxTabsModalNoHeaderExample}
                          codeExamples={NxTabsModalNoHeaderExampleCode}>
        A basic example of how to use the <code className="nx-code">NxTabs</code> family of components in an
        {' '}<code className="nx-code">NxModal</code> with no modal header.
      </GalleryExampleTile>
    </>
  );
}
