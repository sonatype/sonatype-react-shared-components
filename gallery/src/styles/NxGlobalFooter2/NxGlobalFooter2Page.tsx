/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxP, NxCode, NxTile, NxH2, NxTextLink, NxStatefulAccordion, NxAccordion }
  from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

import CodeExample from '../../CodeExample';

const nxGlobalFooter2ExampleCode = require('./NxGlobalFooter2Example?raw'),
    nxGlobalFooter2InnerSidebarExampleCode = require('./NxGlobalFooter2InnerSidebarExample?raw'),
    nxGlobalFooter2ViewportSizedExampleCode = require('./NxGlobalFooter2ViewportSizedExample?raw'),
    nxGlobalFooter2ViewportSizedExpandingExampleCode = require('./NxGlobalFooter2ViewportSizedExpandingExample?raw');

const NxGlobalFooter2Page = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A page footer to be used along with the <NxCode>NxGlobalSidebar2</NxCode>. So named in order to make it clear
        that it should be used with that component. Like all parts of the <NxCode>NxGlobalSidebar2</NxCode> layout, this
        component is only to be used in full-width, section-scrolling layouts.
      </NxP>
      <NxP>
        <NxCode>NxGlobalFooter2</NxCode> appears at the bottom of the main content area of the page, and scrolls with
        the main content.  It does not undercut either <NxCode>NxGlobalSidebar2</NxCode> nor{' '}
        <NxCode>NxPageSidebar</NxCode>. The <NxCode>NxGlobalFooter2</NxCode> and <NxCode>NxPageMain</NxCode> elements
        should be siblings, contained within an <NxCode>NxGlobalFooter2.Container</NxCode> element that is a direct
        child of the <NxCode>.nx-page</NxCode> element.
      </NxP>
      <NxTable className="gallery-documentation-table">
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Class</NxTable.Cell>
            <NxTable.Cell>Convenience Component</NxTable.Cell>
            <NxTable.Cell>Location</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-global-footer-2</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxGlobalFooter2</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Direct child of <NxCode>NxGlobalFooter2.Container</NxCode>
            </NxTable.Cell>
            <NxTable.Cell>
              The overall block element for the footer. Its children should consist of
              zero or more <NxCode>&lt;span&gt;</NxCode> or <NxCode>&lt;NxTextLink&gt;</NxCode> elements.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-global-footer-2-container</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxGlobalFooter2.Container</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Direct child of <NxCode>.nx-page</NxCode>
            </NxTable.Cell>
            <NxTable.Cell>
              This element wraps the footer and the main content area of the page (typically
              an <NxCode>NxPageMain</NxCode>).
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Typical Example</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          A page using a <NxCode>NxGlobalFooter2</NxCode> with a text span and several links.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxGlobalFooter2Example">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
      </NxTile.Content>
      <NxTile.Content className="nx-tile-content--accordion-container">
        <NxStatefulAccordion>
          <NxAccordion.Header>
            <NxAccordion.Title>Code Examples</NxAccordion.Title>
          </NxAccordion.Header>
          <CodeExample content={nxGlobalFooter2ExampleCode} />
        </NxStatefulAccordion>
      </NxTile.Content>
    </NxTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Inner Sidebar Example</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          A page using a <NxCode>NxGlobalFooter2</NxCode> with a text span and several links. Unlike the other example,
          this one includes an inner <NxCode>NxPageSidebar</NxCode>. This example also includes enough main content
          to typically cause the main content and footer to scroll.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxGlobalFooter2InnerSidebarExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
      </NxTile.Content>
      <NxTile.Content className="nx-tile-content--accordion-container">
        <NxStatefulAccordion>
          <NxAccordion.Header>
            <NxAccordion.Title>Code Examples</NxAccordion.Title>
          </NxAccordion.Header>
          <CodeExample content={nxGlobalFooter2InnerSidebarExampleCode} />
        </NxStatefulAccordion>
      </NxTile.Content>
    </NxTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Example with viewport-sized main content</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          This example demonstrates that <NxCode>NxGlobalFooter2.Container</NxCode> works correctly with main content
          that uses the <NxCode>.nx-viewport-sized</NxCode> family of classes.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxGlobalFooter2ViewportSizedExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
      </NxTile.Content>
      <NxTile.Content className="nx-tile-content--accordion-container">
        <NxStatefulAccordion>
          <NxAccordion.Header>
            <NxAccordion.Title>Code Examples</NxAccordion.Title>
          </NxAccordion.Header>
          <CodeExample content={nxGlobalFooter2ViewportSizedExampleCode} />
        </NxStatefulAccordion>
      </NxTile.Content>
    </NxTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Example with expanding viewport-sized main content</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          This is another example demonstrating compatibility with <NxCode>.nx-viewport-sized</NxCode>. In this one, the
          main content is short and will be stretched to fit on my screens.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxGlobalFooter2ViewportSizedExpandingExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
      </NxTile.Content>
      <NxTile.Content className="nx-tile-content--accordion-container">
        <NxStatefulAccordion>
          <NxAccordion.Header>
            <NxAccordion.Title>Code Examples</NxAccordion.Title>
          </NxAccordion.Header>
          <CodeExample content={nxGlobalFooter2ViewportSizedExpandingExampleCode} />
        </NxStatefulAccordion>
      </NxTile.Content>
    </NxTile>
  </>;

export default NxGlobalFooter2Page;
