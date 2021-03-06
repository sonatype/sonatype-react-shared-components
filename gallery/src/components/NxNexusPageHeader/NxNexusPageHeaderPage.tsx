/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxNexusPageHeaderExample from './NxNexusPageHeaderExample';
import NxNexusPageHeaderCustomLogoExample from './NxNexusPageHeaderCustomLogoExample';
import NxNexusPageHeaderMetaExample from './NxNexusPageHeaderMetaExample';
import NxNexusPageHeaderVersionExample from './NxNexusPageHeaderVersionExample';
import NxNexusPageHeaderMinimalExample from './NxNexusPageHeaderMinimalExample';
import { NxCode } from '@sonatype/react-shared-components';

const nxNexusPageHeaderExampleCode = require('./NxNexusPageHeaderExample?raw');
const nxNexusPageHeaderCustomLogoExampleCode = require('./NxNexusPageHeaderCustomLogoExample?raw');
const nxNexusPageHeaderMetaExampleCode = require('./NxNexusPageHeaderMetaExample?raw');
const nxNexusPageHeaderVersionExampleCode = require('./NxNexusPageHeaderVersionExample?raw');
const nxNexusPageHeaderMinimalExampleCode = require('./NxNexusPageHeaderMinimalExample?raw');

const NxNexusPageHeaderPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <code className="nx-code">NxNexusPageHeader</code> is a React component encapsulating the Sonatype Nexus
        branded page header logo and structure. This header should only be used for products in the Sonatype Nexus
        family.
      </p>
      <h3 className="nx-h3 nx-tile__subsection-header">Props</h3>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row">
            <th className="nx-cell nx-cell--header">Prop</th>
            <th className="nx-cell nx-cell--header">Type</th>
            <th className="nx-cell nx-cell--header">Required</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell">productInfo</td>
            <td className="nx-cell">object</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">
              An object containing at least one field: <code className="nx-code">name</code>, the product
              name to display in the header. Additionally, this object may contain
              a <code className="nx-code">meta</code> field which might contain information about the license
              (as it does in IQ), or other information about the product (e.g. beta, pre-release)
              and a <code className="nx-code">version</code> field holding the product's version number to display.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">homeLink</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              A URL (typically relative) that navigates to the home page of the application. If this prop is
              present, the logo in the header will be a link to this home page.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">logoPath</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              The path to the image file that will display as the logo. If no URL is provided the default white hexagon
              on grey background will appear.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">links</td>
            <td className="nx-cell">array</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              An optional array of objects describing navigation links to display in the middle section of the header.
              Each link object should contain a <code className="nx-code">name</code> to be displayed and
              a <code className="nx-code">href</code> for the link. Additionally, at most one link should include
              a <code className="nx-code">current</code> flag set to true indicating that it should be styled as
              the currently active link.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">children</td>
            <td className="nx-cell">ReactNode</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Optional additional JSX content that will be displayed at the right end of the header.
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Nexus Page Header Style Classes</h3>
      <p className="nx-p">
        Note that <code className="nx-code">NxNexusPageHeader</code> shares much of its styling with
        {' '}<code className="nx-code">NxPageHeader</code>. If you don't see the class you're looking for described
        below check out <a className="nx-text-link" href="#Pages/NxPageHeader/">NxPageHeader</a>.
      </p>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row nx-table-row--header">
            <th className="nx-cell nx-cell--header">Class</th>
            <th className="nx-cell nx-cell--header">Location</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell">.nx-page-header__extra-content-divider</td>
            <td className="nx-cell">Child Element</td>
            <td className="nx-cell">
              Applied to a <code className="nx-code">&lt;div&gt;</code> to create a vertical rule between children
              rendered in the extra content area at the right end of the header.
            </td>
          </tr>
        </tbody>
      </table>
      <p className="nx-p">
        Note that the headers in the examples below have been tweaked to display in the normal page flow for the sake
        of demonstration.  Normally they would automatically display at the top of the viewport using CSS fixed
        positioning.
      </p>
      <p className="nx-p">
        It is the responsibility of calling code to ensure the that content included in the header fits in a single
        row at all supported resolutions. Behavior of this component when content exceeds the space allowed is
        unspecified.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Nexus Page Header with custom logo"
                        id="nx-page-header-custom-logo-example"
                        codeExamples={nxNexusPageHeaderCustomLogoExampleCode}
                        liveExample={NxNexusPageHeaderCustomLogoExample}
                        defaultCheckeredBackground={true}>
      An instance of <code className="nx-code">NxNexusPageHeader</code> that demonstrates how to load a custom logo.
    </GalleryExampleTile>

    <GalleryExampleTile title="Nexus Page Header"
                        id="nx-page-header-default-example"
                        codeExamples={nxNexusPageHeaderExampleCode}
                        liveExample={NxNexusPageHeaderExample}
                        defaultCheckeredBackground={true}>
      An instance of <code className="nx-code">NxNexusPageHeader</code> with default branding, navigation and
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
      An instance of <code className="nx-code">NxNexusPageHeader</code> with default branding, meta info, and
      navigation.
    </GalleryExampleTile>

    <GalleryExampleTile title="Nexus Page Header with Version"
                        id="nx-page-header-version-example"
                        codeExamples={nxNexusPageHeaderVersionExampleCode}
                        liveExample={NxNexusPageHeaderVersionExample}
                        defaultCheckeredBackground={true}>
      <code className="nx-code">NxNexusPageHeader</code> with default branding, version, and navigation.
    </GalleryExampleTile>

    <GalleryExampleTile title="Nexus Page Header Minimal"
                        id="nx-page-header-minimal-example"
                        codeExamples={nxNexusPageHeaderMinimalExampleCode}
                        liveExample={NxNexusPageHeaderMinimalExample}
                        defaultCheckeredBackground={true}>
      A minimal instance of <code className="nx-code">NxNexusPageHeader</code> with default branding.
    </GalleryExampleTile>
  </>;

export default NxNexusPageHeaderPage;
