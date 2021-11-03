/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxP, NxCode, NxTile, NxH3, NxTextLink, NxList } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTreeViewExample from './NxTreeViewExample';
import NxTreeViewTooltipExample from './NxTreeViewTooltipExample';
import NxTreeViewExtras from './NxTreeViewExtrasExample';
import NxTreeViewClickable from './NxTreeViewClickableExample';
import NxTreeViewClickableSidebar from './NxTreeViewClickableSidebarExample';
import NxTreeViewCheckbox from './NxTreeViewCheckboxExample';
import NxTreeViewEmpty from './NxTreeViewEmptyExample';
import NxTreeViewDisabled from './NxTreeViewDisabledExample';

const nxTreeViewCode = require('./NxTreeViewExample?raw'),
    nxTreeViewTooltipCode = require('./NxTreeViewTooltipExample?raw'),
    nxTreeViewExtrasCode = require('./NxTreeViewExtrasExample?raw'),
    nxTreeViewClickableCode = require('./NxTreeViewClickableExample?raw'),
    nxTreeViewClickableSidebarCode = require('./NxTreeViewClickableSidebarExample?raw'),
    nxTreeViewCheckboxCode = require('./NxTreeViewCheckboxExample?raw'),
    nxTreeViewEmptyCode = require('./NxTreeViewEmptyExample?raw'),
    nxTreeViewDisabledCode = require('./NxTreeViewDisabledExample?raw');

const NxTreeViewPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A set of default styles for an expandable series of items. Note that the name of this component is
        a misnomer as it no longer supports tree structures, and it is slated to be renamed in the near future. For
        an actual tree component, see <NxTextLink href="#/pages/NxTree"><NxCode>NxTree</NxCode></NxTextLink>.
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
            <NxTable.Cell>id</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Id to assign to the tree view element
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>isOpen</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Controls whether the tree view is open or closed. Default is false.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onToggleCollapse</NxTable.Cell>
            <NxTable.Cell>() =&gt; void</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Callback that fires when the tree view collapse/expand toggle is clicked. Typically is a function
              that toggles the state value which controls the tree view's <NxCode>isOpen</NxCode> prop.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>disabled</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Controls whether the tree view should be rendered as disabled or not. Default is false.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>triggerContent</NxTable.Cell>
            <NxTable.Cell>VirtualDOM</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              The content of the tree view trigger. While not strictly speaking required if there is no content then
              nothing but the caret icon will appear.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>triggerTooltip</NxTable.Cell>
            <NxTable.Cell>string | NxTooltip Props</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              If present, describes a tooltip to be places on the tree view's trigger element. There are two ways
              to specify the tooltip: the simpler way is to simply specify the tooltip text as a string. If control
              of more complex tooltip options is desired, an object can be passed which will serve as the props for
              NxTooltip
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>className</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>Classes to apply to the root element</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Children</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          The "children" of an <NxCode>NxTreeView</NxCode> are the elements which appear when the
          tree view is expanded. All tree view children should be wrapped
          in <NxCode>NxTreeViewChild</NxCode> components.{' '}
          <NxCode>NxTreeViewChild</NxCode> does not actually create an element of its own – unless
          its children consist only of text – but rather augments the classes and attributes of its child element
          in order to apply the appropriate styles and accessibility roles. Note that NxTreeViewChild expects to have
          exactly one child, and this restriction is enforced in the typescript types. NxTreeViewChild can receive
          standard global HTML attributes.
        </NxP>
        <NxP>Certain types of tree view children get special styling treatment as described below.</NxP>
        <NxList>
          <NxList.Item>
            <NxList.Text>Clickable/selectable children</NxList.Text>
            <NxList.Subtext>
              Links (<NxCode>&lt;a&gt;</NxCode> tags)
              and <NxCode>&lt;button&gt;</NxCode>s get hover, focus, and click styles which
              lay them out slightly differently from normal tree view children. When constructing
              a navigation list within an <NxCode>NxTreeView</NxCode>, the link representing the
              current page should be given the <NxCode>.selected</NxCode> class.
            </NxList.Subtext>
          </NxList.Item>
          <NxList.Item>
            <NxList.Text>Radio/Checkbox children</NxList.Text>
            <NxList.Subtext>
              Tree view children which are <NxCode>NxRadio</NxCode>s or{' '}
              <NxCode>NxCheckbox</NxCode>s get special indentation.
            </NxList.Subtext>
          </NxList.Item>
        </NxList>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="NxTreeView Basic Example"
                        liveExample={NxTreeViewExample}
                        codeExamples={nxTreeViewCode}>
      A basic example of an <NxCode>NxTreeView</NxCode> with the corresponding logic necessary to
      track its collapse/expand state. The trigger content is long to demonstrate ellipsis truncation.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeView Example with trigger tooltip"
                        liveExample={NxTreeViewTooltipExample}
                        codeExamples={nxTreeViewTooltipCode}>
      Examples of <NxCode>NxTreeView</NxCode>s with tooltips configured on their triggers. The first
      example uses a simple string for the tooltip while the second example demonstrates a more custom tooltip
      configuration.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeView Example with Extras"
                        id="nx-tree-view-example"
                        liveExample={NxTreeViewExtras}
                        codeExamples={nxTreeViewExtrasCode}>
      These examples demonstrate <NxCode>NxTreeView</NxCode>s with extra content such as icons and
      <NxCode>nx-counter</NxCode>s in their triggers. Note that the last example also demonstrates
      text overflow behavior
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeView Clickable Example"
                        id="nx-tree-view-clickable-example"
                        liveExample={NxTreeViewClickable}
                        codeExamples={nxTreeViewClickableCode}>
      Example of an <NxCode>NxTreeView</NxCode> with clickable children one of which is selected
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeView Clickable Sidebar Example"
                        id="nx-tree-view-clickable-sidebar-example"
                        liveExample={NxTreeViewClickableSidebar}
                        codeExamples={nxTreeViewClickableSidebarCode}>
      Example of an <NxCode>NxTreeView</NxCode> with clickable children one of which is selected.
      This example differs from the previous one in that the tree view is contained within
      an <NxCode>.nx-page-sidebar</NxCode>. <NxCode>NxTreeView</NxCode>s that are
      descendants of sidebars use different colors for their hover and selected states.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeView Checkbox and radio Example"
                        id="nx-tree-view-checkbox-example"
                        liveExample={NxTreeViewCheckbox}
                        codeExamples={nxTreeViewCheckboxCode}>
      Example showing how to construct <NxCode>NxTreeView</NxCode>s with checkboxes and radios as
      children. This example omits the input state management and is focused on demonstrating the styling.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeView Empty Example"
                        id="nx-tree-view-empty-example"
                        liveExample={NxTreeViewEmpty}
                        codeExamples={nxTreeViewEmptyCode}>
      Example of an <NxCode>NxTreeView</NxCode> that cannot be opened because it has no children.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeView Disabled Example"
                        id="nx-tree-view-disabled-example"
                        liveExample={NxTreeViewDisabled}
                        codeExamples={nxTreeViewDisabledCode}>
      Example of a disabled <NxCode>NxTreeView</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxTreeViewPage;
