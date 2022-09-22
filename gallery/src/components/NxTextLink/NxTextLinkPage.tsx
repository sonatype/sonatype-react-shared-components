/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxTextLink, NxP, NxCode, NxTile, NxH3, NxWarningAlert } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTextLinkInternalExample from './NxTextLinkInternalExample';
import NxTextLinkExternalExample from './NxTextLinkExternalExample';
import NxTextLinkTruncationExample from './NxTextLinkTruncationExample';
import NxTextLinkButtonExample from './NxTextLinkButtonExample';

const NxTextLinkInternalExampleCode = require('./NxTextLinkInternalExample?raw'),
    NxTextLinkExternalExampleCode = require('./NxTextLinkExternalExample?raw'),
    NxTextLinkTruncationExampleCode = require('./NxTextLinkTruncationExample?raw'),
    NxTextLinkButtonExampleCode = require('./NxTextLinkButtonExample?raw');

export default function NxTabsPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          A text hyperlink with standard styles and behaviors for both internal and external links.
        </NxP>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>Props</NxH3>
          </NxTile.SubsectionHeader>
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
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>false</NxTable.Cell>
                <NxTable.Cell>
                  Whether or not this link is to an external page outside of the current web application. If true,
                  the link text will be appended with an "external link" icon. This prop also affects the defaults of
                  the <NxCode>noReferrer</NxCode> and <NxCode>newTab</NxCode> props.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>noReferrer</NxTable.Cell>
                <NxTable.Cell>boolean</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>false for internal links, true for external links</NxTable.Cell>
                <NxTable.Cell>
                  When set to true, the <NxCode>noreferrer</NxCode> rel is added to the link which
                  prevents certain properties from being passed through to the link target that can allow the target
                  to discern what site was linked from, specifically, the <NxCode>Referer</NxCode> HTTP
                  header and the <NxCode>window.opener</NxCode> JavaScript property.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>newTab</NxTable.Cell>
                <NxTable.Cell>boolean</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>false for internal links, true for external links</NxTable.Cell>
                <NxTable.Cell>
                  Whether or not this link should open in a new tab/window. Note that this is accomplished via the
                  link's <NxCode>target</NxCode> attribute, and any explicitly
                  set <NxCode>target</NxCode> will override this prop.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>truncate</NxTable.Cell>
                <NxTable.Cell>boolean</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>false</NxTable.Cell>
                <NxTable.Cell>
                  When set, the link becomes a block element that constrains its text content to one line, and truncates
                  the text with an ellipsis when necessary. If used in conjunction with <NxCode>external</NxCode>, the
                  external link icon will always be visible, with the text ellipsis truncation occurring before the
                  icon.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>disabled</NxTable.Cell>
                <NxTable.Cell>boolean</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>false</NxTable.Cell>
                <NxTable.Cell>
                  When set, the text link is rendered as disabled and has <NxCode>aria-disabled="true"</NxCode>.
                  <NxWarningAlert>
                    Note: For accessibility purpose, the <NxCode>href</NxCode> attribute should be removed
                    which will disable its hyperlink functionality and make it not focusable,
                    without <NxCode>href</NxCode> attribute speicified, the <NxCode>role="link"</NxCode> needs to
                    be applied to <NxCode>NxTextLink</NxCode> in order to expose it to screenreader as a link.
                  </NxWarningAlert>
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
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>Classes</NxH3>
          </NxTile.SubsectionHeader>
          <NxTable>
            <NxTable.Head>
              <NxTable.Row>
                <NxTable.Cell>Class Name</NxTable.Cell>
                <NxTable.Cell>Location</NxTable.Cell>
                <NxTable.Cell>Description</NxTable.Cell>
              </NxTable.Row>
            </NxTable.Head>
            <NxTable.Body>
              <NxTable.Row>
                <NxTable.Cell><NxCode>disabled</NxCode></NxTable.Cell>
                <NxTable.Cell>Modifier on <NxCode>.nx-text-link</NxCode></NxTable.Cell>
                <NxTable.Cell>
                  This is for <em>Buttons Styled as Links</em> which may be disabled either via attribute or via this
                  class. The attribute should be preferred, but the class may be used when mouse events are still
                  desired on the button – buttons disabled via the attribute do not fire mouse events. When using this
                  class, also use the <NxCode>aria-disabled</NxCode> attribute for accessibility.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>Buttons Styled as Links</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            In some cases a visual design may call for a clickable element which appears to be a link, but which
            triggers some JavaScript code rather than navigating the page URL. This should be used sparingly, as there
            is a general desire to keep appearances consistent with functionality in order to avoid surprising or
            confusing the user. Nonetheless, deviations come up often enough that they need to be supported. For this
            scenario, a button element may be used with the <NxCode>nx-text-link</NxCode> class. Note
            that <NxCode>&lt;button&gt;</NxCode>s can never behave as proper inline elements which wrap amongst
            surrounding text. Therefore, buttons styled as links are only supported in a block layout context.
          </NxP>
        </NxTile.Subsection>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="NxTextLink Internal Link Example"
                          id="nx-text-link-internal-example"
                          liveExample={NxTextLinkInternalExample}
                          codeExamples={NxTextLinkInternalExampleCode}>
        A simple <NxCode>NxTextLink</NxCode> to an internal page.

        In the case of link and code that fully overlaps, we recommend that <NxCode>NxTextLink</NxCode>{' '}
        is nested inside <NxCode>NxCode</NxCode> instead of the the other way around.

        A few examples of <NxCode>NxTextLink</NxCode> with and without <NxCode>NxCode</NxCode>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxTextLink External Link Example"
                          id="nx-text-link-external-example"
                          liveExample={NxTextLinkExternalExample}
                          codeExamples={NxTextLinkExternalExampleCode}>
        A simple <NxCode>NxTextLink</NxCode> to an external page. Note the icon and that it opens in a new tab.

        In the case of link and code that fully overlaps, we recommend that <NxCode>NxTextLink</NxCode>{' '}
        is nested inside <NxCode>NxCode</NxCode> instead of the other way around so that
        the external icon is included in the <NxCode>NxCode</NxCode> boundary.

        A few examples of <NxCode>NxTextLink</NxCode> to an external page with and without <NxCode>NxCode</NxCode>.
      </GalleryExampleTile>

      <GalleryExampleTile title="Button-Styled-as-Link Example"
                          id="nx-text-link-button-example"
                          liveExample={NxTextLinkButtonExample}
                          codeExamples={NxTextLinkButtonExampleCode}>
        An example of a <NxCode>&lt;button&gt;</NxCode> styled to look like a link using
        the <NxCode>nx-text-link</NxCode> class and examples of disabled state.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxTextLink Wrapping and Truncation Example"
                          id="nx-text-link-wrapping-and-truncation-example"
                          liveExample={NxTextLinkTruncationExample}
                          codeExamples={NxTextLinkTruncationExampleCode}>
        This example shows how <NxCode>NxTextLink</NxCode> wraps by default and truncates when
        the <NxCode>truncate</NxCode> prop is used. All links in this example are within a 475px-wide container,
        as shown via the red border.
      </GalleryExampleTile>
    </>
  );
}
