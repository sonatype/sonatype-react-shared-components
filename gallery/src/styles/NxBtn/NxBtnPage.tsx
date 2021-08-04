/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';
import { NxCode, NxTable, NxTile, NxH3 } from '@sonatype/react-shared-components';

const nxBtnPrimaryCode = require('./NxBtnPrimaryExample.html'),
    nxBtnDefaultCode = require('./NxBtnDefaultExample.html'),
    nxBtnTertiaryCode = require('./NxBtnTertiaryExample.html'),
    nxBtnErrorCode = require('./NxBtnErrorExample.html'),
    nxBtnIconCode = require('./NxBtnIconExample.html');

const NxBtnPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p"><code className="nx-code">.nx-btn</code> is the standard class for all buttons.</p>
      <p className="nx-p">
        Buttons are typically encapsulated within "button bars" implemented using the <NxCode>nx-btn-bar</NxCode> class.
        This class mediates the layout of groups of buttons within various containers such as footers, table cells, etc.
      </p>
      <p className="nx-p">
        When working in React, it is recommended to use the <NxCode>NxButton</NxCode> component which provides a more
        convenient way to use these styles. For the button bar, there is an <NxCode>NxButtonBar</NxCode> convenience
        component.
      </p>
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
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Default"
                        htmlExample={nxBtnDefaultCode}
                        codeExamples={nxBtnDefaultCode}>
      A series of <code className="nx-code">nx-btn</code>s within a <code className="nx-code">nx-btn-bar</code>
      alongside other block content and inline content. Some of the buttons demonstrate disabled styling, applied
      both by the <code className="nx-code">disabled</code> HTML attribute and by
      the <code className="nx-code">.disabled</code> class.
    </GalleryExampleTile>

    <GalleryExampleTile title="Primary"
                        htmlExample={nxBtnPrimaryCode}
                        codeExamples={nxBtnPrimaryCode}>
      A demonstration of an <code className="nx-code">nx-btn</code> using "primary" styles, along with disabled
      primary buttons. Note that the standard disabled styles override the primary styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Tertiary"
                        htmlExample={nxBtnTertiaryCode}
                        codeExamples={nxBtnTertiaryCode}>
      A demonstration of an <code className="nx-code">nx-btn</code> using "tertiary" styles, along with disabled
      tertiary buttons. Note that the standard disabled styles override the tertiary styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Error"
                        htmlExample={nxBtnErrorCode}
                        codeExamples={nxBtnErrorCode}>
      A demonstration of an <code className="nx-code">nx-btn</code> using "error" styles, along with a disabled
      error buttons. Note that the standard disabled styles override the error styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Buttons with Icons"
                        htmlExample={nxBtnIconCode}
                        codeExamples={nxBtnIconCode}>
      A demonstration of <code className="nx-code">nx-btn</code>s containing icons. One contains only an icon while
      the other contains both an icon and text.
    </GalleryExampleTile>
  </>;

export default NxBtnPage;
