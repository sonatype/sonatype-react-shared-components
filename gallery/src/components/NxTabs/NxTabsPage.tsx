/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxTextLink, NxP, NxTile, NxH3 } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTabsTileHeaderExample from './NxTabsTileHeaderExample';
import NxTabsOutsideTileExample from './NxTabsOutsideTileExample';
import NxTabsTileNoHeaderExample from './NxTabsTileNoHeaderExample';
import NxTabsModalExample from './NxTabsModalExample';
import NxTabsModalNoHeaderExample from './NxTabsModalNoHeaderExample';
import NxTabsSimpleExample from './NxTabsSimpleExample';

const NxTabsTileHeaderExampleCode = require('./NxTabsTileHeaderExample?raw');
const NxTabsOutsideTileExampleCode = require('./NxTabsOutsideTileExample?raw');
const NxTabsTileNoHeaderExampleCode = require('./NxTabsTileNoHeaderExample?raw');
const NxTabsModalExampleCode = require('./NxTabsModalExample?raw');
const NxTabsModalNoHeaderExampleCode = require('./NxTabsModalNoHeaderExample?raw');
const NxTabsSimpleExampleCode = require('./NxTabsSimpleExample?raw');

export default function NxTabsPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          A set of accessible tab components which must be used together.
        </NxP>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>NxTabs</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            The top-level container for tabbed navigation.
            It can have <NxCode>&lt;NxTabList&gt;</NxCode> and
            {' '}<NxCode>&lt;NxTabPanel&gt;</NxCode> components as children.
          </NxP>
          <NxTable>
            <NxTable.Head>
              <NxTable.Row>
                <NxTable.Cell>Prop</NxTable.Cell>
                <NxTable.Cell>Type</NxTable.Cell>
                <NxTable.Cell>Required</NxTable.Cell>
                <NxTable.Cell>Details</NxTable.Cell>
              </NxTable.Row>
            </NxTable.Head>
            <NxTable.Body>
              <NxTable.Row>
                <NxTable.Cell>activeTab</NxTable.Cell>
                <NxTable.Cell>number</NxTable.Cell>
                <NxTable.Cell>false</NxTable.Cell>
                <NxTable.Cell>
                  The index of the active tab. If not set no tab contents will be shown.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>onTabSelect</NxTable.Cell>
                <NxTable.Cell>function(number)</NxTable.Cell>
                <NxTable.Cell>false</NxTable.Cell>
                <NxTable.Cell>
                  Called with the index of the newly selected tab when the currently selected tab changes.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </NxTile.Subsection>

        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>NxTabList</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            The parent container for the <NxCode>&lt;NxTab&gt;</NxCode> components.
            Passes through all attributes to an underlying <NxCode>ul</NxCode> element.
          </NxP>
          <NxTable>
            <NxTable.Head>
              <NxTable.Row>
                <NxTable.Cell>Prop</NxTable.Cell>
                <NxTable.Cell>Type</NxTable.Cell>
                <NxTable.Cell>Required</NxTable.Cell>
                <NxTable.Cell>Details</NxTable.Cell>
              </NxTable.Row>
            </NxTable.Head>
            <NxTable.Body>
              <NxTable.Row>
                <NxTable.Cell>
                  HTML <NxCode>&lt;ul&gt;</NxCode> Attributes
                </NxTable.Cell>
                <NxTable.Cell>
                  <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/ul">
                    HTML ul Attributes
                  </NxTextLink><br/>
                </NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>
                  <NxCode>NxTabList</NxCode> supports any html attributes that are normally supported by the
                  {' '}<NxCode>&lt;ul&gt;</NxCode> element.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </NxTile.Subsection>

        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>NxTab</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            The component the user selects to switch tabs.
            The index prop is automatically configured by the <NxCode>NxTabs</NxCode> component.
            There should be one of these for each <NxCode>NxTabPanel</NxCode> component.
            Passes through all attributes to an underlying li element.
          </NxP>
          <NxTable>
            <NxTable.Head>
              <NxTable.Row>
                <NxTable.Cell>Prop</NxTable.Cell>
                <NxTable.Cell>Type</NxTable.Cell>
                <NxTable.Cell>Required</NxTable.Cell>
                <NxTable.Cell>Details</NxTable.Cell>
              </NxTable.Row>
            </NxTable.Head>
            <NxTable.Body>
              <NxTable.Row>
                <NxTable.Cell>
                  HTML <NxCode>&lt;li&gt;</NxCode> Attributes
                </NxTable.Cell>
                <NxTable.Cell>
                  <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/li">
                    HTML li Attributes
                  </NxTextLink>
                </NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>
                  <NxCode>NxTab</NxCode> supports any html attributes that are normally supported by the
                  {' '}<NxCode>&lt;li&gt;</NxCode> element.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </NxTile.Subsection>

        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>NxTabPanel</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            Container component for the tab contents.
            The index prop is automatically configured by the <NxCode>NxTabs</NxCode> component.
            There should be one of these for each <NxCode>NxTab</NxCode> component.
            Passes through all attributes to an underlying div element.
          </NxP>
          <NxTable>
            <NxTable.Head>
              <NxTable.Row>
                <NxTable.Cell>Prop</NxTable.Cell>
                <NxTable.Cell>Type</NxTable.Cell>
                <NxTable.Cell>Required</NxTable.Cell>
                <NxTable.Cell>Details</NxTable.Cell>
              </NxTable.Row>
            </NxTable.Head>
            <NxTable.Body>
              <NxTable.Row>
                <NxTable.Cell>
                  HTML <NxCode>&lt;div&gt;</NxCode> Attributes
                </NxTable.Cell>
                <NxTable.Cell>
                  <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/div">
                    HTML div Attributes
                  </NxTextLink>
                </NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>
                  <NxCode>NxTabPanel</NxCode> supports any html attributes that are normally supported by the
                  {' '}<NxCode>&lt;div&gt;</NxCode> element.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>Keyboard Navigation</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            Adheres to the{' '}
            <NxTextLink href="https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/" external>
              Tabs WAI-ARIA design pattern
            </NxTextLink>.
          </NxP>
          <NxTable>
            <NxTable.Head>
              <NxTable.Row>
                <NxTable.Cell>Key</NxTable.Cell>
                <NxTable.Cell>Description</NxTable.Cell>
              </NxTable.Row>
            </NxTable.Head>
            <NxTable.Body>
              <NxTable.Row>
                <NxTable.Cell>
                  Tab
                </NxTable.Cell>
                <NxTable.Cell>
                  When focus moves into the tabs it goes to the active tab.{' '}
                  When you tab again the focus will move to the associated panel container.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>
                  Arrow Right | Arrow Left
                </NxTable.Cell>
                <NxTable.Cell>
                  When you're focused on a tab, you can use the right or left arrow keys to change{' '}
                  focus between tabs. You can then use "spacebar" or "enter" key to activate the focused tab.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>
                  Home
                </NxTable.Cell>
                <NxTable.Cell>
                  Focuses the first tab.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>
                  End
                </NxTable.Cell>
                <NxTable.Cell>
                  Focuses the last tab.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </NxTile.Subsection>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="NxTabs Simple Example"
                          id="nx-tab-simple-example"
                          liveExample={NxTabsSimpleExample}
                          codeExamples={NxTabsSimpleExampleCode}>
        A basic example of <NxCode>NxTabs</NxCode>.
      </GalleryExampleTile>
      <GalleryExampleTile title="NxTabs in NxTile Example"
                          id="nx-tab-tile-example"
                          defaultCheckeredBackground={true}
                          liveExample={NxTabsTileHeaderExample}
                          codeExamples={NxTabsTileHeaderExampleCode}>
        A basic example of how to use the <NxCode>NxTabs</NxCode> family of components in an
        {' '}<NxCode>NxTile</NxCode>. Note that one of the tabs has a long name that truncates after it reaches
        a built-in maximum width.
      </GalleryExampleTile>
      <GalleryExampleTile title="NxTabs in NxTile with no header Example"
                          id="nx-tab-tile-no-header-example"
                          defaultCheckeredBackground={true}
                          liveExample={NxTabsTileNoHeaderExample}
                          codeExamples={NxTabsTileNoHeaderExampleCode}>
        A basic example of how to use the <NxCode>NxTabs</NxCode> family of components in an
        {' '}<NxCode>NxTile</NxCode> where there is no tile header and the tabs are top most within
        the tile.
      </GalleryExampleTile>
      <GalleryExampleTile title="NxTabs outside of NxTile Example"
                          id="nx-tab-outside-tile-example"
                          defaultCheckeredBackground={true}
                          liveExample={NxTabsOutsideTileExample}
                          codeExamples={NxTabsOutsideTileExampleCode}>
        A basic example of how to use the <NxCode>NxTabs</NxCode> family of components at the page
        level, outside of tiles or tables.
      </GalleryExampleTile>
      <GalleryExampleTile title="NxTabs in NxModal Example"
                          id="nx-tab-modal-example"
                          liveExample={NxTabsModalExample}
                          codeExamples={NxTabsModalExampleCode}>
        A basic example of how to use the <NxCode>NxTabs</NxCode> family of components in an
        {' '}<NxCode>NxModal</NxCode>.
      </GalleryExampleTile>
      <GalleryExampleTile title="NxTabs in NxModal with No Header Example"
                          id="nx-tab-modal-no-header-example"
                          liveExample={NxTabsModalNoHeaderExample}
                          codeExamples={NxTabsModalNoHeaderExampleCode}>
        A basic example of how to use the <NxCode>NxTabs</NxCode> family of components in an
        {' '}<NxCode>NxModal</NxCode> with no modal header.
      </GalleryExampleTile>
    </>
  );
}
