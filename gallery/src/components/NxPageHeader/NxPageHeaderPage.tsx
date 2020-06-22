/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import SimplePageHeaderExample from './SimplePageHeaderExample';
import ProductNamePageHeaderExample from './ProductNamePageHeaderExample';
import ProductNameAndVersionPageHeaderExample from './ProductNameAndVersionPageHeaderExample';
import HomeLinkPageHeaderExample from './HomeLinkPageHeaderExample';
import LinksPageHeaderExample from './LinksPageHeaderExample';
import ExtraContentPageHeaderExample from './ExtraContentPageHeaderExample';
import ComplexPageHeaderExample from './ComplexPageHeaderExample';

const simplePageHeaderExampleCode = require('!!raw-loader!./SimplePageHeaderExample').default,
    productNamePageHeaderExampleCode = require('!!raw-loader!./ProductNamePageHeaderExample').default,
    productNameAndVersionPageHeaderExampleCode =
        require('!!raw-loader!./ProductNameAndVersionPageHeaderExample').default,
    homeLinkPageHeaderExampleCode = require('!!raw-loader!./HomeLinkPageHeaderExample').default,
    linksPageHeaderExampleCode = require('!!raw-loader!./LinksPageHeaderExample').default,
    extraContentPageHeaderExampleCode = require('!!raw-loader!./ExtraContentPageHeaderExample').default,
    complexPageHeaderExampleCode = require('!!raw-loader!./ComplexPageHeaderExample').default;

const NxPageHeaderPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <code className="nx-code">NxPageHeader</code> is a React component encapsulating the standard Sonatype
        page header structure and logo.
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
              An optional object containing at least one field: <code className="nx-code">name</code>, the product
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
              present, the <q>Sonatype</q> logo in the header will be a link to this home page.
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
              an <code className="nx-code">current</code> flag set to true indicating that it should be styled as
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
      <p className="nx-p">
        Note that in each of the following examples, the headers have been tweaked to display in the normal page
        flow for the sake of demonstration. Normally, they would display at the top of the viewport using CSS
        fixed positioning.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Header"
                        codeExamples={simplePageHeaderExampleCode}
                        description="A minimal instance of NxPageHeader which includes no product name, no version, no
                            links, and no additional content.">
      <SimplePageHeaderExample/>
    </GalleryExampleTile>

    <GalleryExampleTile title="Header with Product Name"
                        codeExamples={productNamePageHeaderExampleCode}
                        description="An instance of NxPageHeader which includes a product name.">
      <ProductNamePageHeaderExample/>
    </GalleryExampleTile>

    <GalleryExampleTile title="Header with Product Name and Version"
                        codeExamples={productNameAndVersionPageHeaderExampleCode}
                        description="An instance of NxPageHeader which includes a product name and version.">
      <ProductNameAndVersionPageHeaderExample/>
    </GalleryExampleTile>

    <GalleryExampleTile title="Header with Home Link"
                        codeExamples={homeLinkPageHeaderExampleCode}
                        description="An instance of NxPageHeader which includes a home link for the logo.">
      <HomeLinkPageHeaderExample/>
    </GalleryExampleTile>

    <GalleryExampleTile title="Header with Links"
                        codeExamples={linksPageHeaderExampleCode}
                        description="An instance of NxPageHeader which includes links.">
      <LinksPageHeaderExample/>
    </GalleryExampleTile>

    <GalleryExampleTile title="Header with Extra Content"
                        codeExamples={extraContentPageHeaderExampleCode}
                        description="An instance of NxPageHeader which extra content on the right-hand side.">
      <ExtraContentPageHeaderExample/>
    </GalleryExampleTile>

    <GalleryExampleTile title="Complex Page Header"
                        codeExamples={complexPageHeaderExampleCode}
                        description="An instance of NxPageHeader which includes all features at once.">
      <ComplexPageHeaderExample/>
    </GalleryExampleTile>
  </>;

export default NxPageHeaderPage;
