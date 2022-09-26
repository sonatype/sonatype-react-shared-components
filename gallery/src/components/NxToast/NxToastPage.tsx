/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode,
  NxP,
  NxTable,
  NxTile,
  NxH2,
  NxH3,
  NxTextLink,
  NxStatefulAccordion,
  NxAccordion,
  NxWarningAlert
} from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import { GalleryTileFooter } from '../../gallery-components/GalleryTileFooter';

import CodeExample from '../../CodeExample';

const NxToastComplexLayoutExampleCode = require('./NxToastComplexLayoutExample?raw'),
    NxToastSimpleLayoutExampleCode = require('./NxToastSimpleLayoutExample?raw'),
    NxToastLegacyLayoutExampleCode = require('./NxToastLegacyLayoutExample?raw'),
    NxDrawerWithNxToastExampleCode = require('../NxDrawer/NxDrawerWithNxToastExample?raw');

const NxToastPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Toasts are rendered on the right side the screen, underneath the header, and will remain in place until the user
        dismisses them individually. Each toast renders one
        {' '}<NxCode><NxTextLink href="#/pages/Alert">NxAlert</NxTextLink></NxCode>, which comes in four
        variations: Error, Info, Warning, and Success.
      </NxP>
      <NxP>
        Toasts generally fall under a "global and static" context, in a sense that throughout the application,
        toasts are rendered within the same container on right side of the screen.
      </NxP>
      <NxWarningAlert>
        Note: In order to render toasts in the correct position, all toasts must be wrapped within the parent React
        component <NxCode>NxToastContainer</NxCode>, which must be a direct child of <NxCode>.nx-page</NxCode>.
      </NxWarningAlert>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxToastContainer</NxH3>
        </NxTile.SubsectionHeader>
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
              <NxTable.Cell>children</NxTable.Cell>
              <NxTable.Cell>React Node</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>
                All <NxCode>NxToast</NxCode>s rendered within <NxCode>NxToastContainer</NxCode>.
                <NxWarningAlert>
                  Note: <NxCode>NxToast</NxCode>s must be rendered in descending order, with the newest toast at the
                  top and as the first child of <NxCode>NxToastContainer</NxCode>.
                </NxWarningAlert>
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxToast</NxH3>
        </NxTile.SubsectionHeader>
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
              <NxTable.Cell>onClose</NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>
                A function that dismisses the toast when called. When the close button is clicked, this callback
                will be fired.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>children</NxTable.Cell>
              <NxTable.Cell>React Element</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>
                <NxP>
                  A single <NxCode>ReactElement</NxCode> which accepts an <NxCode>onClose</NxCode> prop and which
                  ultimately renders an <NxCode>NxAlert</NxCode> (or one of its variants such as
                  {' '}<NxCode>NxSuccessAlert</NxCode>). Most commonly, this would just be one of the RSC
                  {' '}<NxCode>Nx*Alert</NxCode> components themselves, but custom wrapping components are also
                  permitted. Note that the calling code should not specify the <NxCode>onClose</NxCode> prop for the
                  alert; it will be set up internally by <NxCode>NxToast</NxCode>. Calling code should instead use the
                  {' '}<NxCode>onClose</NxCode> prop of <NxCode>NxToast</NxCode> itself. Additionally, note that the
                  alert text content should be brief: only one rendered line of text per toast is supported.
                </NxP>
                <NxP>
                  <NxCode>Nx*Alert</NxCode>s as children of <NxCode>NxToast</NxCode> will be assigned a default role
                  of <NxCode>alert</NxCode>, which can be overridden if necessary.
                </NxP>
              </NxTable.Cell>
            </NxTable.Row>
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
                <NxCode>NxToast</NxCode> supports any html attributes that are normally supported by the
                {' '}<NxCode>&lt;div&gt;</NxCode> element.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Toasts With Simple Page Layout Example</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          A simple full page layout example. Note that this layout does not have <NxCode>NxGlobalHeader</NxCode> and
          therefore the toasts will be positioned in the top right corner of the screen.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxToastSimpleLayoutExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
      </NxTile.Content>
      <NxTile.Content className= "nx-tile-content--accordion-container">
        <NxStatefulAccordion>
          <NxAccordion.Header>
            <NxAccordion.Title>Example Code</NxAccordion.Title>
          </NxAccordion.Header>
          <CodeExample content={NxToastSimpleLayoutExampleCode} />
          <GalleryTileFooter clipboardContent={NxToastSimpleLayoutExampleCode}/>
        </NxStatefulAccordion>
      </NxTile.Content>
    </NxTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Toasts With Complex Page Layout Example</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          A complex full page layout example. With the inclusion of <NxCode>NxGlobalHeader</NxCode>, the toasts
          will be positioned on the right side of the viewport, underneath the header. Extra content is provided
          to be able to view the positioning of the toasts with scrolling behavior. The role for
          {' '}<NxCode>NxInfoAlert</NxCode> has also been updated to <NxCode>status</NxCode>.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxToastComplexLayoutExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
      </NxTile.Content>
      <NxTile.Content className= "nx-tile-content--accordion-container">
        <NxStatefulAccordion>
          <NxAccordion.Header>
            <NxAccordion.Title>Example Code</NxAccordion.Title>
          </NxAccordion.Header>
          <CodeExample content={NxToastComplexLayoutExampleCode} />
          <GalleryTileFooter clipboardContent={NxToastComplexLayoutExampleCode}/>
        </NxStatefulAccordion>
      </NxTile.Content>
    </NxTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Legacy Page Layout with Section Scrolling Example</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          A legacy layout page example with section scrolling (the default) enabled. <NxCode>NxToast</NxCode>s will
          be positioned on the right side of the viewport, underneath <NxCode>NxPageHeader</NxCode>. Note that in
          legacy layouts, if the viewport's width extends beyond 1600px, <NxCode>NxToast</NxCode>s will remain on the
          right side of the viewport and not the page content.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxToastLegacySectionScrollingExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
      </NxTile.Content>
      <NxTile.Content className= "nx-tile-content--accordion-container">
        <NxStatefulAccordion>
          <NxAccordion.Header>
            <NxAccordion.Title>Example Code</NxAccordion.Title>
          </NxAccordion.Header>
          <CodeExample content={NxToastLegacyLayoutExampleCode} />
          <GalleryTileFooter clipboardContent={NxToastLegacyLayoutExampleCode}/>
        </NxStatefulAccordion>
      </NxTile.Content>
    </NxTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Legacy Page Layout with Page Scrolling Example</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          A legacy layout page example with page scrolling enabled. Note that in legacy layouts, if the
          viewport's width extends beyond 1600px, <NxCode>NxToast</NxCode>s will remain on the right side of
          the viewport and not the page content.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxToastLegacyPageScrollingExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
      </NxTile.Content>
      <NxTile.Content className= "nx-tile-content--accordion-container">
        <NxStatefulAccordion>
          <NxAccordion.Header>
            <NxAccordion.Title>Example Code</NxAccordion.Title>
          </NxAccordion.Header>
          <CodeExample content={NxToastLegacyLayoutExampleCode} />
          <GalleryTileFooter clipboardContent={NxToastLegacyLayoutExampleCode}/>
        </NxStatefulAccordion>
      </NxTile.Content>
    </NxTile>

    <NxTile>
      <NxTile.HeaderTitle>
        <NxH2>NxDrawer With NxToast Example</NxH2>
      </NxTile.HeaderTitle>
      <NxTile.Content>
        <NxP>
          An example of <NxCode>NxDrawer</NxCode> with <NxCode>NxToast</NxCode>. If a toast is already open and
          then a drawer is opened the toast appears on top of the drawer. This is the same if the toast is opened
          from a button inside the drawer. Both the drawer and toast will close if a toast is closed.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxDrawerWithNxToastExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
      </NxTile.Content>
      <NxTile.Content className= "nx-tile-content--accordion-container">
        <NxStatefulAccordion>
          <NxAccordion.Header>
            <NxAccordion.Title>Example Code</NxAccordion.Title>
          </NxAccordion.Header>
          <CodeExample content={NxDrawerWithNxToastExampleCode} />
          <GalleryTileFooter clipboardContent={NxDrawerWithNxToastExampleCode}/>
        </NxStatefulAccordion>
      </NxTile.Content>
    </NxTile>
  </>;

export default NxToastPage;
