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

const nxNexusPageHeaderExampleCode = require('!!raw-loader!./NxNexusPageHeaderExample').default;
const nxNexusPageHeaderCustomLogoExampleCode = require('!!raw-loader!./NxNexusPageHeaderCustomLogoExample').default;

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
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              An object containing at least one field: <code className="nx-code">name</code>, the product
              name to display in the header. Additionally, this object may contain
              a <code className="nx-code">version</code> field holding the product's version number to display.
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
          <tr className="nx-table-row">
            <td className="nx-cell">meta</td>
            <td className="nx-cell">field of the <a href="#Pages/NxPageHeader/">productInfo</a> object</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Optional additional text that will be displayed to the right of the version number. Typically used to
              display the applicable license name.
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Nexus Page Header Style Classes</h3>
      <p className="nx-p">
        Note that <code className="nx-code">NxNexusPageHeader</code> shares much of its styling with
        {' '}<code className="nx-code">NxPageHeader</code>. If you don't see the class you're looking for described
        below check out <a href="#Pages/NxPageHeader/">NxPageHeader</a>.
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
        of this.  Normally they would automatically display at the top of the viewport using CSS fixed positioning.
      </p>
      <p className="nx-p">
        It is expected that consuming projects will modify the SCSS to use the correct colours to match their product's
        branding requirements.
      </p>
      <p className="nx-p">
        It is the responsibility of calling code to ensure the that content included in the header fits in a single
        row at all supported resolutions. Behavior of this component when content exceeds the space allowed is
        unspecified.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Nexus Page Header"
                        id="nx-page-header-complex-example"
                        codeExamples={nxNexusPageHeaderExampleCode}
                        liveExample={NxNexusPageHeaderExample}
                        defaultCheckeredBackground={true}>
      An instance of <code className="nx-code">NxNexusPageHeader</code> with branding, navigation and examples of
      extra content.
    </GalleryExampleTile>

    <GalleryExampleTile title="Nexus Page Header with custom logo"
                        id="nx-page-header-complex-example"
                        codeExamples={nxNexusPageHeaderCustomLogoExampleCode}
                        liveExample={NxNexusPageHeaderCustomLogoExample}
                        defaultCheckeredBackground={true}>
      An instance of <code className="nx-code">NxNexusPageHeader</code> that demonstrates how to load a custom logo.
    </GalleryExampleTile>
  </>;

export default NxNexusPageHeaderPage;
