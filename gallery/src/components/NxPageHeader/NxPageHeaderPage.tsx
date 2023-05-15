/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxH3 } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import SimplePageHeaderExample from './SimplePageHeaderExample';
import CustomLogoPageHeaderExample from './CustomLogoPageHeaderExample';
import ProductNamePageHeaderExample from './ProductNamePageHeaderExample';
import ProductNameAndVersionPageHeaderExample from './ProductNameAndVersionPageHeaderExample';
import HomeLinkPageHeaderExample from './HomeLinkPageHeaderExample';
import LinksPageHeaderExample from './LinksPageHeaderExample';
import ExtraContentPageHeaderExample from './ExtraContentPageHeaderExample';
import ComplexPageHeaderExample from './ComplexPageHeaderExample';

const simplePageHeaderExampleCode = require('./SimplePageHeaderExample?raw'),
    customLogoPageHeaderExampleCode = require('./CustomLogoPageHeaderExample?raw'),
    productNamePageHeaderExampleCode = require('./ProductNamePageHeaderExample?raw'),
    productNameAndVersionPageHeaderExampleCode =
        require('./ProductNameAndVersionPageHeaderExample?raw'),
    homeLinkPageHeaderExampleCode = require('./HomeLinkPageHeaderExample?raw'),
    linksPageHeaderExampleCode = require('./LinksPageHeaderExample?raw'),
    extraContentPageHeaderExampleCode = require('./ExtraContentPageHeaderExample?raw'),
    complexPageHeaderExampleCode = require('./ComplexPageHeaderExample?raw');

const NxPageHeaderPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxPageHeader</NxCode> is a React component encapsulating the standard Sonatype
        page header structure and logo.
      </NxP>
      <NxH3>Props</NxH3>
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
            <NxTable.Cell>productInfo</NxTable.Cell>
            <NxTable.Cell>object</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              An optional object containing at least one field: <NxCode>name</NxCode>, the product
              name to display in the header. Additionally, this object may contain
              a <NxCode>version</NxCode> field holding the product's version number to display.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>homeLink</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              A URL (typically relative) that navigates to the home page of the application. If this prop is
              present, the <q>Sonatype</q> logo in the header will be a link to this home page.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>logo</NxTable.Cell>
            <NxTable.Cell>Object</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Optional data with which to construct an alternative logo image. If specified, it should be an object
              containing a <NxCode>path</NxCode> to be used as the light mode image’s <NxCode>src</NxCode> URL,
              an <NxCode>alt</NxCode> property to be used as the image’s alt text, and optionally a
              {' '}<NxCode>darkModePath</NxCode> to be used as the dark mode image’s <NxCode>src</NxCode> URL. Failing
              to provide the <NxCode>darkModePath</NxCode> will result in a default dark mode logo image. The image(s)
              should have a height of 21px and a width no greater than 160px. Additionally, the image(s) provided should
              have a transparent background and content that is easily visible over the designated light or dark
              background.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>links</NxTable.Cell>
            <NxTable.Cell>array</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              An optional array of objects describing navigation links to display in the middle section of the header.
              Each link object should contain a <NxCode>name</NxCode> to be displayed and
              a <NxCode>href</NxCode> for the link. Additionally, at most one link should include
              an <NxCode>current</NxCode> flag set to true indicating that it should be styled as
              the currently active link.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>children</NxTable.Cell>
            <NxTable.Cell>ReactNode</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Optional additional JSX content that will be displayed at the right end of the header.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
      <NxP>
        Note that in each of the following examples, the headers have been tweaked to display in the normal page
        flow for the sake of demonstration. Normally, they would automatically display at the top of the viewport
        using CSS fixed positioning.
      </NxP>
      <NxP>
        It is the responsibility of calling code to ensure the that content included in the header fits in a single
        row at all supported resolutions. Behavior of this component when content exceeds the space allowed is
        unspecified.
      </NxP>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Header"
                        id="nx-page-header-simple-example"
                        codeExamples={simplePageHeaderExampleCode}
                        liveExample={SimplePageHeaderExample}>
      A minimal instance of <NxCode>NxPageHeader</NxCode> which includes no
      product name, no version, no links, and no additional content.
    </GalleryExampleTile>

    <GalleryExampleTile title="Header with Custom Logo"
                        codeExamples={customLogoPageHeaderExampleCode}
                        liveExample={CustomLogoPageHeaderExample}>
      A minimal instance of <NxCode>NxPageHeader</NxCode> which sets a custom logo image
    </GalleryExampleTile>

    <GalleryExampleTile title="Header with Product Name"
                        codeExamples={productNamePageHeaderExampleCode}
                        liveExample={ProductNamePageHeaderExample}>
      An instance of <NxCode>NxPageHeader</NxCode> which includes a product name.
    </GalleryExampleTile>

    <GalleryExampleTile title="Header with Product Name and Version"
                        id="nx-page-header-product-name-and-version-example"
                        codeExamples={productNameAndVersionPageHeaderExampleCode}
                        liveExample={ProductNameAndVersionPageHeaderExample}>
      An instance of <NxCode>NxPageHeader</NxCode> which includes a product name
      and version.
    </GalleryExampleTile>

    <GalleryExampleTile title="Header with Home Link"
                        codeExamples={homeLinkPageHeaderExampleCode}
                        liveExample={HomeLinkPageHeaderExample}>
      An instance of <NxCode>NxPageHeader</NxCode> which includes a home link
      for the logo.
    </GalleryExampleTile>

    <GalleryExampleTile title="Header with Links"
                        codeExamples={linksPageHeaderExampleCode}
                        liveExample={LinksPageHeaderExample}>
      An instance of <NxCode>NxPageHeader</NxCode> which includes links.
    </GalleryExampleTile>

    <GalleryExampleTile title="Header with Extra Content"
                        codeExamples={extraContentPageHeaderExampleCode}
                        liveExample={ExtraContentPageHeaderExample}>
      An instance of <NxCode>NxPageHeader</NxCode> with extra content on the
      right-hand side.
    </GalleryExampleTile>

    <GalleryExampleTile title="Complex Page Header"
                        id="nx-page-header-complex-example"
                        codeExamples={complexPageHeaderExampleCode}
                        liveExample={ComplexPageHeaderExample}>
      An instance of <NxCode>NxPageHeader</NxCode> which includes all features
      at once. It features a custom logo without the <NxCode>darkModePath</NxCode> provided.
    </GalleryExampleTile>
  </>;

export default NxPageHeaderPage;
