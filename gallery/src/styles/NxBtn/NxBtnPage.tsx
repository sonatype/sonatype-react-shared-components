/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxTable, NxTile, NxH3, NxP, NxTextLink } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

const nxBtnPrimaryCode = require('./NxBtnPrimaryExample.html'),
    nxBtnDefaultCode = require('./NxBtnDefaultExample.html'),
    nxBtnTertiaryCode = require('./NxBtnTertiaryExample.html'),
    nxBtnErrorCode = require('./NxBtnErrorExample.html'),
    nxBtnIconCode = require('./NxBtnIconExample.html'),
    nxBtnLinkCode = require('./NxBtnLinkExample.html');

const NxBtnPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP><NxCode>.nx-btn</NxCode> is the standard class for all buttons.</NxP>
      <NxP>
        Buttons are typically encapsulated within "button bars" implemented using the <NxCode>nx-btn-bar</NxCode> class.
        This class mediates the layout of groups of buttons within various containers such as footers, table cells, etc.
      </NxP>
      <NxP>
        When working in React, it is recommended to use the <NxCode>NxButton</NxCode> component which provides a more
        convenient way to use these styles. For the button bar, there is an <NxCode>NxButtonBar</NxCode> convenience
        component.
      </NxP>
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
              <NxTable.Cell><NxCode>nx-btn</NxCode></NxTable.Cell>
              <NxTable.Cell>Button elements</NxTable.Cell>
              <NxTable.Cell>Base class for RSC-styled buttons, which use "secondary" styling by default</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-btn-bar</NxCode></NxTable.Cell>
              <NxTable.Cell>Container of buttons</NxTable.Cell>
              <NxTable.Cell>Wrapper for one or more buttons within used within other RSC elements</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-btn--primary</NxCode></NxTable.Cell>
              <NxTable.Cell>Modifier on <NxCode>.nx-btn</NxCode></NxTable.Cell>
              <NxTable.Cell>Makes the button a "primary" button</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-btn--tertiary</NxCode></NxTable.Cell>
              <NxTable.Cell>Modifier on <NxCode>.nx-btn</NxCode></NxTable.Cell>
              <NxTable.Cell>Makes the button a "tertiary" button</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-btn--error</NxCode></NxTable.Cell>
              <NxTable.Cell>Modifier on <NxCode>.nx-btn</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Buttons that indicate or which are used in conjunction with errors and which are styled accordingly
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-btn--icon-only</NxCode></NxTable.Cell>
              <NxTable.Cell>Modifier on <NxCode>.nx-btn</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Should be used on buttons which only contain a icon and no text content
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>disabled</NxCode></NxTable.Cell>
              <NxTable.Cell>Modifier on <NxCode>.nx-btn</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Buttons may be disabled either via attribute or via this class. The attribute should be preferred, but
                the class may be used when mouse events are still desired on the button – buttons disabled via the
                attribute do not fire mouse events. When using this class, also use the <NxCode>aria-disabled</NxCode>
                attribute for accessibility.
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
          triggers some JavaScript code rather than navigating the page URL. In this case
          a <NxCode>&lt;button&gt;</NxCode> should be used, but rather than using the <NxCode>nx-btn</NxCode> classes,
          the <NxCode>nx-text-link</NxCode> class should be used. See
          the <NxTextLink href="#/pages/Text Link">NxTextLink documentation</NxTextLink> for details.
        </NxP>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Links Styled as Buttons</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          There are sometimes cases where a design calls for a control which visually appears to be a button but which
          has functionality consisting of page navigation. In this scenario an <NxCode>&lt;a&gt;</NxCode> element
          should be used with the applicable <NxCode>nx-btn</NxCode> classes. This should be done sparingly, as
          it is a general design desire to match visual appearance to functionality, that is, to have buttons look
          like buttons and links look like links.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Default"
                        htmlExample={nxBtnDefaultCode}
                        codeExamples={nxBtnDefaultCode}>
      A series of <NxCode>nx-btn</NxCode>s within a <NxCode>nx-btn-bar</NxCode>
      alongside other block content and inline content. Some of the buttons demonstrate disabled styling, applied
      both by the <NxCode>disabled</NxCode> HTML attribute and by
      the <NxCode>.disabled</NxCode> class.
    </GalleryExampleTile>

    <GalleryExampleTile title="Primary"
                        htmlExample={nxBtnPrimaryCode}
                        codeExamples={nxBtnPrimaryCode}>
      A demonstration of an <NxCode>nx-btn</NxCode> using "primary" styles, along with disabled
      primary buttons. Note that the standard disabled styles override the primary styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Tertiary"
                        htmlExample={nxBtnTertiaryCode}
                        codeExamples={nxBtnTertiaryCode}>
      A demonstration of an <NxCode>nx-btn</NxCode> using "tertiary" styles, along with disabled
      tertiary buttons. Note that the standard disabled styles override the tertiary styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Error"
                        htmlExample={nxBtnErrorCode}
                        codeExamples={nxBtnErrorCode}>
      A demonstration of an <NxCode>nx-btn</NxCode> using "error" styles, along with a disabled
      error buttons. Note that the standard disabled styles override the error styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Buttons with Icons"
                        htmlExample={nxBtnIconCode}
                        codeExamples={nxBtnIconCode}>
      A demonstration of <NxCode>nx-btn</NxCode>s containing icons. One contains only an icon while
      the other contains both an icon and text.
    </GalleryExampleTile>

    <GalleryExampleTile title="Links Styled like Buttons"
                        id="nx-btn-links-example"
                        htmlExample={nxBtnLinkCode}
                        codeExamples={nxBtnLinkCode}>
      A demonstration of <NxCode>&lt;a&gt;</NxCode> elements styled using the <NxCode>nx-btn</NxCode> classes such
      that they resemble buttons.
    </GalleryExampleTile>
  </>;

export default NxBtnPage;
