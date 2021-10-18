/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxTextLink, NxP, NxCode } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTextLinkInternalExample from './NxTextLinkInternalExample';
import NxTextLinkExternalExample from './NxTextLinkExternalExample';

const NxTextLinkInternalExampleCode = require('./NxTextLinkInternalExample?raw'),
    NxTextLinkExternalExampleCode = require('./NxTextLinkExternalExample?raw');

export default function NxTabsPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          A text hyperlink with standard styles and behaviors for both internal and external links.
        </NxP>

        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Prop</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Default</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>external</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>
                Whether or not this link is to an external page outside of the current web application. If true,
                the link text will be appended with an "external link" icon. This prop also affects the defaults of the
                <NxCode>noReferrer</NxCode> and <NxCode>newTab</NxCode> props.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>noReferrer</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>false for internal links, true for external links</NxTable.Cell>
              <NxTable.Cell>
                When set to true, the <NxCode>noreferrer</NxCode> rel is added to the link which
                prevents certain properties from being passed through to the link target that can allow the target
                to discern what site was linked from, specificall, the <NxCode>Referer</NxCode> HTTP
                header and the <NxCode>window.opener</NxCode> JavaScript property.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>newTab</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>false for internal links, true for external links</NxTable.Cell>
              <NxTable.Cell>
                Whether or not this link should open in a new tab/window. Note that this is accomplished via the
                link's <NxCode>target</NxCode> attribute, and any explictly
                set <NxCode>target</NxCode> will override this prop.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML <NxCode>&lt;a&gt;</NxCode> Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/a">
                  HTML a Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>N/A</NxTable.Cell>
              <NxTable.Cell>
                NxTextLink supports any HTML attribute that's normally supported
                by <NxCode>&lt;a&gt;</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="NxTextLink Internal Link Example"
                          id="nx-text-link-internal-example"
                          liveExample={NxTextLinkInternalExample}
                          codeExamples={NxTextLinkInternalExampleCode}>
        A simple <NxCode>NxTextLink</NxCode> to an internal page.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxTextLink External Link Example"
                          id="nx-text-link-external-example"
                          liveExample={NxTextLinkExternalExample}
                          codeExamples={NxTextLinkExternalExampleCode}>
        A simple <NxCode>NxTextLink</NxCode> to an external page. Note the icon and that it opens
        in a new tab.
      </GalleryExampleTile>
    </>
  );
}
