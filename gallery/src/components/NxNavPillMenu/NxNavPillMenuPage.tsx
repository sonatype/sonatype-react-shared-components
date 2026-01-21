/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { 
  NxCode, 
  NxH3, 
  NxInfoAlert, 
  NxP, 
  NxTable, 
  NxTile, 
  NxWarningAlert 
} from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxNavPillMenuExample from './NxNavPillMenuExample';
import NxStatefulNavPillMenuExample from './NxStatefulNavPillMenuExample';
import NxNavPillMenuDisabledExample from './NxNavPillMenuDisabledExample';
import NxNavPillMenuResponsiveExample from './NxNavPillMenuResponsiveExample';

const exampleCode = require('./NxNavPillMenuExample?raw'),
    statefulExampleCode = require('./NxStatefulNavPillMenuExample?raw'),
    disabledExampleCode = require('./NxNavPillMenuDisabledExample?raw'),
    responsiveExampleCode = require('./NxNavPillMenuResponsiveExample?raw');

const NxNavPillMenuPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxNavPillMenu</NxCode> provides a pill-shaped navigation menu component for creating intuitive,
        interactive navigation experiences. The component supports smooth scrolling to page sections, external links,
        and various interactive states including hover, active, and disabled states.
      </NxP>
      <NxP>
        The component is designed to be responsive, wrapping pills on larger screens and providing horizontal 
        scrolling on mobile devices. It integrates seamlessly with the Sonatype design system and supports
        both controlled and stateful variants.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Props</NxH3>
        </NxTile.SubsectionHeader>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Prop</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>items</NxTable.Cell>
              <NxTable.Cell>NavPillMenuItem[]</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>
                Array of navigation items. Each item should have an <NxCode>id</NxCode>, <NxCode>label</NxCode>,
                and either a <NxCode>scrollTarget</NxCode> or <NxCode>href</NxCode>. Items can also be disabled.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>activeItem</NxTable.Cell>
              <NxTable.Cell>string | null</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>The ID of the currently active item. Used to highlight the active pill.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onItemClick</NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                Callback function called when an item is clicked. Receives the clicked item and the click event.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>scrollBehavior</NxTable.Cell>
              <NxTable.Cell>'smooth' | 'auto'</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>Scroll behavior when navigating to sections. Defaults to 'smooth'.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>scrollOffset</NxTable.Cell>
              <NxTable.Cell>number</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                Offset in pixels from the top when scrolling to sections. Useful for fixed headers. Defaults to 0.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>className</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>Additional CSS classes to apply to the navigation container.</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NavPillMenuItem Interface</NxH3>
        </NxTile.SubsectionHeader>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Property</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>id</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>Unique identifier for the navigation item.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>label</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>Display text for the navigation pill.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>scrollTarget</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                ID or CSS selector of the element to scroll to when the pill is clicked.
                Mutually exclusive with <NxCode>href</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>href</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                URL to navigate to when the pill is clicked. Used for external links.
                Mutually exclusive with <NxCode>scrollTarget</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>disabled</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>Whether the navigation pill is disabled. Defaults to false.</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Stateful Variant</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          <NxCode>NxStatefulNavPillMenu</NxCode> provides a convenience wrapper that automatically manages
          the active state. It accepts an <NxCode>initialActiveItem</NxCode> prop and an 
          <NxCode>onItemChange</NxCode> callback that's triggered when the active item changes.
        </NxP>
      </NxTile.Subsection>

      <NxInfoAlert>
        The component automatically handles scroll navigation when <NxCode>scrollTarget</NxCode> is provided.
        For external links, use the <NxCode>href</NxCode> property instead.
      </NxInfoAlert>

      <NxWarningAlert>
        Ensure that target elements for scroll navigation exist in the DOM and have the specified IDs
        or match the CSS selectors provided in <NxCode>scrollTarget</NxCode>.
      </NxWarningAlert>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic Example"
                        id="nx-nav-pill-menu-example"
                        liveExample={NxNavPillMenuExample}
                        codeExamples={exampleCode}>
      A basic example showing controlled navigation pills with smooth scrolling to page sections.
      The "Features" pill is set as active in this example.
    </GalleryExampleTile>

    <GalleryExampleTile title="Stateful Example"
                        id="nx-stateful-nav-pill-menu-example"
                        liveExample={NxStatefulNavPillMenuExample}
                        codeExamples={statefulExampleCode}>
      This example demonstrates the stateful variant that automatically manages the active state.
      Click different pills to see the active state change automatically.
    </GalleryExampleTile>

    <GalleryExampleTile title="Disabled Items & External Links"
                        id="nx-nav-pill-menu-disabled-example"
                        liveExample={NxNavPillMenuDisabledExample}
                        codeExamples={disabledExampleCode}>
      This example shows navigation pills with disabled items and external links. 
      Disabled pills are visually distinct and cannot be clicked, while external links
      navigate to different URLs.
    </GalleryExampleTile>

    <GalleryExampleTile title="Responsive Behavior"
                        id="nx-nav-pill-menu-responsive-example"
                        liveExample={NxNavPillMenuResponsiveExample}
                        codeExamples={responsiveExampleCode}>
      This example demonstrates responsive behavior with many navigation items.
      Pills wrap on larger screens and scroll horizontally on mobile devices.
      Try resizing your browser window to see the responsive behavior.
    </GalleryExampleTile>
  </>;

export default NxNavPillMenuPage;