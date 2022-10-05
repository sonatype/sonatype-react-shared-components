/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxP, NxCode, NxTile, NxH3 } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxCollapsibleItemsExample from './NxCollapsibleItemsExample';
import NxCollapsibleItemsTooltipExample from './NxCollapsibleItemsTooltipExample';
import NxCollapsibleItemsExtras from './NxCollapsibleItemsExtrasExample';
import NxCollapsibleItemsClickable from './NxCollapsibleItemsClickableExample';
import NxCollapsibleItemsClickableSidebar from './NxCollapsibleItemsClickableSidebarExample';
import NxCollapsibleItemsCheckbox from './NxCollapsibleItemsCheckboxExample';
import NxCollapsibleItemsEmpty from './NxCollapsibleItemsEmptyExample';
import NxCollapsibleItemsDisabled from './NxCollapsibleItemsDisabledExample';

const NxCollapsibleItemsCode = require('./NxCollapsibleItemsExample?raw'),
    NxCollapsibleItemsTooltipCode = require('./NxCollapsibleItemsTooltipExample?raw'),
    NxCollapsibleItemsExtrasCode = require('./NxCollapsibleItemsExtrasExample?raw'),
    NxCollapsibleItemsClickableCode = require('./NxCollapsibleItemsClickableExample?raw'),
    NxCollapsibleItemsClickableSidebarCode = require('./NxCollapsibleItemsClickableSidebarExample?raw'),
    NxCollapsibleItemsCheckboxCode = require('./NxCollapsibleItemsCheckboxExample?raw'),
    NxCollapsibleItemsEmptyCode = require('./NxCollapsibleItemsEmptyExample?raw'),
    NxCollapsibleItemsDisabledCode = require('./NxCollapsibleItemsDisabledExample?raw');

const NxCollapsibleItemsPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A set of default styles and React components for a collapsible series of items.
        These items consist of texts or elements that are augmented depending on the child specified.
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
            <NxTable.Cell>isOpen</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Controls whether the collapsible items is open or closed. Default is false.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onToggleCollapse</NxTable.Cell>
            <NxTable.Cell>() =&gt; void</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Callback that fires when the collapsible items collapse/expand toggle is clicked.
              Typically is a function that toggles the state value which controls the
              collapsible items's <NxCode>isOpen</NxCode> prop.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>disabled</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Controls whether the collapsible items should be rendered as disabled or not. Default is false.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>triggerContent</NxTable.Cell>
            <NxTable.Cell>VirtualDOM</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              The content of the collapsible items trigger.
              While not strictly speaking required if there is no content then
              nothing but the caret icon will appear.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>triggerTooltip</NxTable.Cell>
            <NxTable.Cell>string | NxTooltip Props</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              If present, describes a tooltip to be places on the collapsible items's trigger element.
              There are two ways to specify the tooltip:
              the simpler way is to simply specify the tooltip text as a string.
              If control of more complex tooltip options is desired,
              an object can be passed which will serve as the props for NxTooltip
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
          The "children" of an <NxCode>NxCollapsibleItems</NxCode> are the elements which appear when the
          collapsible items is expanded. All collapsible items children should be wrapped
          in <NxCode>NxCollapsibleItems.Child</NxCode> components.{' '}
          <NxCode>NxCollapsibleItems.Child</NxCode> does not actually create an element of its own – unless
          its children consist only of text – but rather augments the classes and attributes of its child element
          in order to apply the appropriate styles and accessibility roles. Note that
          {' '}<NxCode>NxCollapsibleItems.Child</NxCode>{' '}
          expects to have exactly one child, and this restriction is enforced in the typescript types.
          {' '}<NxCode>NxCollapsibleItems.Child</NxCode> can receive standard global HTML attributes.
        </NxP>
        <NxP>Certain types of collapsible items children get special styling treatment as described below.</NxP>
        <ul className="nx-list">
          <li className="nx-list__item">
            <span className="nx-list__text">Clickable/selectable children</span>
            <span className="nx-list__subtext">
              Links (<NxCode>&lt;a&gt;</NxCode> tags)
              and <NxCode>&lt;button&gt;</NxCode>s get hover, focus, and click styles which
              lay them out slightly differently from normal collapsible items children. When constructing
              a navigation list within an <NxCode>NxCollapsibleItems</NxCode>, the link representing the
              current page should be given the <NxCode>.selected</NxCode> class.
            </span>
          </li>
          <li className="nx-list__item">
            <span className="nx-list__text">Radio/Checkbox children</span>
            <span className="nx-list__subtext">
              Collapsible items children which are <NxCode>NxRadio</NxCode>s or{' '}
              <NxCode>NxCheckbox</NxCode>s get special indentation.
            </span>
          </li>
        </ul>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="NxCollapsibleItems Basic Example"
                        liveExample={NxCollapsibleItemsExample}
                        codeExamples={NxCollapsibleItemsCode}>
      A basic example of an <NxCode>NxCollapsibleItems</NxCode> with the corresponding logic necessary to
      track its collapse/expand state. The trigger content is long to demonstrate ellipsis truncation.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxCollapsibleItems Example with trigger tooltip"
                        liveExample={NxCollapsibleItemsTooltipExample}
                        codeExamples={NxCollapsibleItemsTooltipCode}>
      Examples of <NxCode>NxCollapsibleItems</NxCode>s with tooltips configured on their triggers. The first
      example uses a simple string for the tooltip while the second example demonstrates a more custom tooltip
      configuration.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxCollapsibleItems Example with Extras"
                        id="nx-collapsible-items-example"
                        liveExample={NxCollapsibleItemsExtras}
                        codeExamples={NxCollapsibleItemsExtrasCode}>
      These examples demonstrate <NxCode>NxCollapsibleItems</NxCode>s with extra content such as icons and
      <NxCode>nx-counter</NxCode>s in their triggers. Note that the last example also demonstrates
      text overflow behavior
    </GalleryExampleTile>

    <GalleryExampleTile title="NxCollapsibleItems Clickable Example"
                        id="nx-collapsible-items-clickable-example"
                        liveExample={NxCollapsibleItemsClickable}
                        codeExamples={NxCollapsibleItemsClickableCode}>
      Example of an <NxCode>NxCollapsibleItems</NxCode> with clickable children one of which is selected
    </GalleryExampleTile>

    <GalleryExampleTile title="NxCollapsibleItems Clickable Sidebar Example"
                        id="nx-collapsible-items-clickable-sidebar-example"
                        liveExample={NxCollapsibleItemsClickableSidebar}
                        codeExamples={NxCollapsibleItemsClickableSidebarCode}>
      Example of an <NxCode>NxCollapsibleItems</NxCode> with clickable children one of which is selected.
      This example differs from the previous one in that the collapsible items is contained within
      an <NxCode>.nx-page-sidebar</NxCode>. <NxCode>NxCollapsibleItems</NxCode>s that are
      descendants of sidebars use different colors for their hover and selected states.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxCollapsibleItems Checkbox and radio Example"
                        id="nx-collapsible-items-checkbox-example"
                        liveExample={NxCollapsibleItemsCheckbox}
                        codeExamples={NxCollapsibleItemsCheckboxCode}>
      Example showing how to construct <NxCode>NxCollapsibleItems</NxCode>s with checkboxes and radios as
      children. This example omits the input state management and is focused on demonstrating the styling.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxCollapsibleItems Empty Example"
                        id="nx-collapsible-items-empty-example"
                        liveExample={NxCollapsibleItemsEmpty}
                        codeExamples={NxCollapsibleItemsEmptyCode}>
      Example of an <NxCode>NxCollapsibleItems</NxCode> that cannot be opened because it has no children.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxCollapsibleItems Disabled Example"
                        id="nx-collapsible-items-disabled-example"
                        liveExample={NxCollapsibleItemsDisabled}
                        codeExamples={NxCollapsibleItemsDisabledCode}>
      Example of a disabled <NxCode>NxCollapsibleItems</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxCollapsibleItemsPage;
