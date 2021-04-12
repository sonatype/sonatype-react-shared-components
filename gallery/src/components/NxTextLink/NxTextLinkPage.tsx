/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import {
  NxTable,
  NxTableBody,
  NxTableCell,
  NxTableHead,
  NxTableRow,
  NxTextLink
} from '@sonatype/react-shared-components';

import NxTextLinkInternalExample from './NxTextLinkInternalExample';
import NxTextLinkExternalExample from './NxTextLinkExternalExample';

const NxTextLinkInternalExampleCode = require('./NxTextLinkInternalExample?raw'),
    NxTextLinkExternalExampleCode = require('./NxTextLinkExternalExample?raw');

export default function NxTabsPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          A text hyperlink with standard styles and behaviors for both internal and external links.
        </p>

        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Prop</NxTableCell>
              <NxTableCell>Type</NxTableCell>
              <NxTableCell>Required</NxTableCell>
              <NxTableCell>Default</NxTableCell>
              <NxTableCell>Details</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody>
            <NxTableRow>
              <NxTableCell>external</NxTableCell>
              <NxTableCell>boolean</NxTableCell>
              <NxTableCell>false</NxTableCell>
              <NxTableCell>false</NxTableCell>
              <NxTableCell>
                Whether or not this link is to an external page outside of the current web application. If true,
                the link text will be appended with an "external link" icon. This prop also affects the defaults of the
                <code className="nx-code">noReferrer</code> and <code className="nx-code">newTab</code> props.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>noReferrer</NxTableCell>
              <NxTableCell>boolean</NxTableCell>
              <NxTableCell>false</NxTableCell>
              <NxTableCell>false for internal links, true for external links</NxTableCell>
              <NxTableCell>
                When set to true, the <code className="nx-code">noreferrer</code> rel is added to the link which
                prevents certain properties from being passed through to the link target that can allow the target
                to discern what site was linked from, specificall, the <code className="nx-code">Referer</code> HTTP
                header and the <code className="nx-code">window.opener</code> JavaScript property.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>newTab</NxTableCell>
              <NxTableCell>boolean</NxTableCell>
              <NxTableCell>false</NxTableCell>
              <NxTableCell>false for internal links, true for external links</NxTableCell>
              <NxTableCell>
                Whether or not this link should open in a new tab/window. Note that this is accomplished via the
                link's <code className="nx-code">target</code> attribute, and any explictly
                set <code className="nx-code">target</code> will override this prop.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>HTML <code className="nx-code">&lt;a&gt;</code> Attributes</NxTableCell>
              <NxTableCell>
                <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/a">
                  HTML a Attributes
                </NxTextLink>
              </NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>N/A</NxTableCell>
              <NxTableCell>
                NxTextLink supports any HTML attribute that's normally supported
                by <code className="nx-code">&lt;a&gt;</code>.
              </NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="NxTextLink Internal Link Example"
                          id="nx-text-link-internal-example"
                          liveExample={NxTextLinkInternalExample}
                          codeExamples={NxTextLinkInternalExampleCode}>
        A simple <code className="nx-code">NxTextLink</code> to an internal page.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxTextLink External Link Example"
                          id="nx-text-link-external-example"
                          liveExample={NxTextLinkExternalExample}
                          codeExamples={NxTextLinkExternalExampleCode}>
        A simple <code className="nx-code">NxTextLink</code> to an external page. Note the icon and that it opens
        in a new tab.
      </GalleryExampleTile>
    </>
  );
}
