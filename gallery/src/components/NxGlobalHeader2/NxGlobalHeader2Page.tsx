/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxP, NxCode, NxTile, NxH2, NxTextLink, NxH3, NxList } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

import CodeExample from '../../CodeExample';

const nxGlobalHeader2ExampleCode = require('./NxGlobalHeader2Example?raw'),
    nxGlobalHeader2NoActionsExampleCode = require('./NxGlobalHeader2NoActionsExample?raw'),
    nxGlobalHeader2DefaultLogoExampleCode = require('./NxGlobalHeader2DefaultLogoExample?raw');

const NxGlobalHeader2Page = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A page header to be used along with the <NxCode>NxGlobalSidebar2</NxCode>. So named in order to distinguish
        it from the <NxCode>nx-page-header</NxCode> used within the legacy page layouts as well
        as <NxCode>NxGlobalHeader</NxCode> used alongside <NxCode>NxGlobalSidebar</NxCode>.
      </NxP>
      <NxP>
        Like all parts of the <NxCode>NxGlobalSidebar2</NxCode> layout, this component is only to be
        used in full-width, section-scrolling layouts. Although the contents of <NxCode>NxGlobalHeader2</NxCode> are
        flexible, there are strong design guidelines for the content that should be present. From left to right,
        the header <em>should</em> contain the following items:
      </NxP>
      <NxList bulleted>
        <NxList.Item><NxList.Text>The official product logo depicting its name</NxList.Text></NxList.Item>
        <NxList.Item>
          <NxList.Text>
            An actions area on the right containing the following
          </NxList.Text>
          <NxList bulleted>
            <NxList.Item>
              <NxList.Text>A search text input with product-specific behavior</NxList.Text>
            </NxList.Item>
            <NxList.Item>
              <NxList.Text>Any desired product-specific icon-only buttons and icon dropdowns</NxList.Text>
            </NxList.Item>
            <NxList.Item>
              <NxList.Text>In Sonatype products, the Sonatype Product Switcher</NxList.Text>
            </NxList.Item>
            <NxList.Item>
              <NxList.Text>
                An icon-dropdown containing a menu of user-focused options such as a link to the user's profile and a
                logout button
              </NxList.Text>
            </NxList.Item>
          </NxList>
        </NxList.Item>
      </NxList>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3><NxCode>NxGlobalHeader2</NxCode> Props</NxH3>
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
              <NxTable.Cell>logoProps</NxTable.Cell>
              <NxTable.Cell>object</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                <NxP>
                  An optional object specifying properties for the logo image and its alt text. If unspecified, a
                  general "Sonatype" logo will be used.
                </NxP>
                <NxList bulleted>
                  <NxList.Item>
                    <NxList.Text>
                      <NxCode>lightPath</NxCode> - the path to the light-mode variant of the logo image
                    </NxList.Text>
                  </NxList.Item>
                  <NxList.Item>
                    <NxList.Text>
                      <NxCode>darkPath</NxCode> - the path to the dark-mode variant of the logo image
                    </NxList.Text>
                  </NxList.Item>
                  <NxList.Item>
                    <NxList.Text>
                      <NxCode>altText</NxCode> - Alt text for the logo. Typically this would be set to the text visible
                      in the logo, for instance "Sonatype Product Name"
                    </NxList.Text>
                  </NxList.Item>
                </NxList>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>homeHref</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>
                When the logo is clicked it navigates to a "home" page specified here.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>children</NxTable.Cell>
              <NxTable.Cell>ReactNode</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                Children passed to <NxCode>NxGlobalHeader2</NxCode> should be search boxes, icon buttons, and/or icon
                dropdowns which will be rendered at the right end of the header.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML <NxCode>&lt;header&gt;</NxCode> Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/header">
                  HTML header Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                <NxCode>NxGlobalHeader2</NxCode> supports any HTML attribute that's normally
                supported by <NxCode>&lt;header&gt;</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Typical Example</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          An example demonstrating an NxGlobalHeader2 with typical (albeit non-functioning) contents consisting of a
          logo image and an actions area containing a search box and user dropdown. Notice that custom logo images
          are constrained to a max-height of 31px.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxGlobalHeader2Example">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
        <CodeExample content={nxGlobalHeader2ExampleCode} />
      </NxTile.Content>
    </NxTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>No Actions Example</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          The actions collection within the header is optional as seen here.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxGlobalHeader2NoActionsExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
        <CodeExample content={nxGlobalHeader2NoActionsExampleCode} />
      </NxTile.Content>
    </NxTile>

    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>Default Logo Example</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <NxP>
          An example which uses the default logo rather than specifying a custom one.
        </NxP>
        <NxP>
          <NxTextLink href="#/NxGlobalHeader2DefaultLogoExample">
            Click here to navigate to the live example.
          </NxTextLink>
        </NxP>
        <CodeExample content={nxGlobalHeader2DefaultLogoExampleCode} />
      </NxTile.Content>
    </NxTile>
  </>;

export default NxGlobalHeader2Page;
