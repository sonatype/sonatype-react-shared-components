/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxH3, NxTextLink } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxNexusPageHeaderExample from './NxNexusPageHeaderExample';
import NxNexusPageHeaderCustomLogoExample from './NxNexusPageHeaderCustomLogoExample';
import NxNexusPageHeaderMetaExample from './NxNexusPageHeaderMetaExample';
import NxNexusPageHeaderVersionExample from './NxNexusPageHeaderVersionExample';
import NxNexusPageHeaderMinimalExample from './NxNexusPageHeaderMinimalExample';

const nxNexusPageHeaderExampleCode = require('./NxNexusPageHeaderExample?raw');
const nxNexusPageHeaderCustomLogoExampleCode = require('./NxNexusPageHeaderCustomLogoExample?raw');
const nxNexusPageHeaderMetaExampleCode = require('./NxNexusPageHeaderMetaExample?raw');
const nxNexusPageHeaderVersionExampleCode = require('./NxNexusPageHeaderVersionExample?raw');
const nxNexusPageHeaderMinimalExampleCode = require('./NxNexusPageHeaderMinimalExample?raw');

const NxNexusPageHeaderPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxNexusPageHeader</NxCode> is a React component encapsulating the Sonatype Nexus
        branded page header logo and structure. This header should only be used for products in the Sonatype Nexus
        family.
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
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              An object containing at least one field: <NxCode>name</NxCode>, the product
              name to display in the header. Additionally, this object may contain
              a <NxCode>meta</NxCode> field which might contain information about the license
              (as it does in IQ), or other information about the product (e.g. beta, pre-release)
              and a <NxCode>version</NxCode> field holding the product's version number to display.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>homeLink</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              A URL (typically relative) that navigates to the home page of the application. If this prop is
              present, the logo in the header will be a link to this home page.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>logoPath</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              The path to the image file that will display as the logo. If no URL is provided the default white hexagon
              on grey background will appear.
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
              a <NxCode>current</NxCode> flag set to true indicating that it should be styled as
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
      <NxH3>Nexus Page Header Style Classes</NxH3>
      <NxP>
        Note that <NxCode>NxNexusPageHeader</NxCode> shares much of its styling with
        {' '}<NxCode>NxPageHeader</NxCode>. If you don't see the class you're looking for described
        below check out <NxTextLink href="#Pages/NxPageHeader/">NxPageHeader</NxTextLink>.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Class</NxTable.Cell>
            <NxTable.Cell>Location</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell>.nx-page-header__extra-content-divider</NxTable.Cell>
            <NxTable.Cell>Child Element</NxTable.Cell>
            <NxTable.Cell>
              Applied to a <NxCode>&lt;div&gt;</NxCode> to create a vertical rule between children
              rendered in the extra content area at the right end of the header.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
      <NxP>
        Note that the headers in the examples below have been tweaked to display in the normal page flow for the sake
        of demonstration.  Normally they would automatically display at the top of the viewport using CSS fixed
        positioning.
      </NxP>
      <NxP>
        It is the responsibility of calling code to ensure the that content included in the header fits in a single
        row at all supported resolutions. Behavior of this component when content exceeds the space allowed is
        unspecified.
      </NxP>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Nexus Page Header with custom logo"
                        id="nx-page-header-custom-logo-example"
                        codeExamples={nxNexusPageHeaderCustomLogoExampleCode}
                        liveExample={NxNexusPageHeaderCustomLogoExample}
                        defaultCheckeredBackground={true}>
      An instance of <NxCode>NxNexusPageHeader</NxCode> that demonstrates how to load a custom logo.
    </GalleryExampleTile>

    <GalleryExampleTile title="Nexus Page Header"
                        id="nx-page-header-default-example"
                        codeExamples={nxNexusPageHeaderExampleCode}
                        liveExample={NxNexusPageHeaderExample}
                        defaultCheckeredBackground={true}>
      An instance of <NxCode>NxNexusPageHeader</NxCode> with default branding, navigation and
      examples of extra content. A note about the extra content: icon-only buttons added in this area will
      be of the smaller size that is also present in certain other areas (action buttons
      within <NxCode>nx-list</NxCode>, for example). Placing these buttons alongside other buttons which have actual
      text content is not supported due to the height difference.
    </GalleryExampleTile>

    <GalleryExampleTile title="Nexus Page Header with Meta"
                        id="nx-page-header-meta-example"
                        codeExamples={nxNexusPageHeaderMetaExampleCode}
                        liveExample={NxNexusPageHeaderMetaExample}
                        defaultCheckeredBackground={true}>
      An instance of <NxCode>NxNexusPageHeader</NxCode> with default branding, meta info, and
      navigation.
    </GalleryExampleTile>

    <GalleryExampleTile title="Nexus Page Header with Version"
                        id="nx-page-header-version-example"
                        codeExamples={nxNexusPageHeaderVersionExampleCode}
                        liveExample={NxNexusPageHeaderVersionExample}
                        defaultCheckeredBackground={true}>
      <NxCode>NxNexusPageHeader</NxCode> with default branding, version, and navigation.
    </GalleryExampleTile>

    <GalleryExampleTile title="Nexus Page Header Minimal"
                        id="nx-page-header-minimal-example"
                        codeExamples={nxNexusPageHeaderMinimalExampleCode}
                        liveExample={NxNexusPageHeaderMinimalExample}
                        defaultCheckeredBackground={true}>
      A minimal instance of <NxCode>NxNexusPageHeader</NxCode> with default branding.
    </GalleryExampleTile>
  </>;

export default NxNexusPageHeaderPage;
