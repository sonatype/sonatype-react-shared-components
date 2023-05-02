/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxCode, NxTile, NxH3, NxTable } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryIframeExampleTile } from '../../gallery-components/GalleryTiles';

const noOptInExampleCode = require('./DarkModeNoOptInExample.html');
const optInExampleCode = require('./DarkModeOptInExample.html');
const darkModeOverrideExampleCode = require('./DarkModeDarkOverrideExample.html');
const lightModeOverrideExampleCode = require('./DarkModeLightOverrideExample.html');
const darkModeOverrideNoOptInExampleCode = require('./DarkModeDarkOverrideNoOptInExample.html');
const lightModeOverrideNoOptInExampleCode = require('./DarkModeLightOverrideNoOptInExample.html');

const NxDarkModeClassPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        RSC supports a "dark mode" theme in addition to its default light theme. Whether or not the dark theme is
        currently enabled and active is controlled by a series of CSS classes that should be set on
        the <NxCode>&lt;html&gt;</NxCode> element as well as the user's preference communicated by the browser.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Classes</NxH3>
        </NxTile.SubsectionHeader>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Name</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-html--enable-color-schemes</NxCode></NxTable.Cell>
              <NxTable.Cell>
                This class must be set on the <NxCode>&lt;html&gt;</NxCode> element in order to opt in to
                any non-default theming. If this class is not set, the light theme will always be used.
                If this class is set, the user's theme preference determined by
                the <NxCode>prefers-color-scheme</NxCode> media query will be used in conjunction with
                the <NxCode>nx-html--dark-mode</NxCode> and <NxCode>nx-html--dark-mode</NxCode> classes to determine
                whether to show the light theme or the dark theme.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-html--dark-mode</NxCode></NxTable.Cell>
              <NxTable.Cell>
                When this class is set on the <NxCode>&lt;html&gt;</NxCode> element, the user's preference from
                the <NxCode>prefers-color-scheme</NxCode> media query is overridden and dark mode is used. Note
                that this class only has any effect if <NxCode>nx-html--enable-color-schemes</NxCode> is also set.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-html--light-mode</NxCode></NxTable.Cell>
              <NxTable.Cell>
                When this class is set on the <NxCode>&lt;html&gt;</NxCode> element, the user's preference from
                the <NxCode>prefers-color-scheme</NxCode> media query is overridden and light mode is used. Note
                that this class only has any effect if <NxCode>nx-html--enable-color-schemes</NxCode> is also set.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryIframeExampleTile title="Example without Theming Opt-In"
                              id="dark-mode-no-opt-in-example"
                              html={noOptInExampleCode}>
      This example does not have the <NxCode>nx-html--enable-color-schemes</NxCode> class set and so is
      always in light mode regardless of browser preference.
    </GalleryIframeExampleTile>

    <GalleryIframeExampleTile title="Example with Theming Opt-In"
                              id="dark-mode-opt-in-example"
                              html={optInExampleCode}>
      This example has the <NxCode>nx-html--enable-color-schemes</NxCode> class set and so responds to the user's
      theme preference as determined by the <NxCode>prefers-color-scheme</NxCode> media query.
    </GalleryIframeExampleTile>

    <GalleryIframeExampleTile title="Example with Dark Mode Override"
                              id="dark-mode-dark-override-example"
                              html={darkModeOverrideExampleCode}>
      This example has the <NxCode>nx-html--enable-color-schemes</NxCode> class set as well as
      the <NxCode>nx-html--dark-mode</NxCode> class. This activates dark mode regardless of
      the <NxCode>prefers-color-scheme</NxCode> media query.
    </GalleryIframeExampleTile>

    <GalleryIframeExampleTile title="Example with Light Mode Override"
                              id="dark-mode-light-override-example"
                              html={lightModeOverrideExampleCode}>
      This example has the <NxCode>nx-html--enable-color-schemes</NxCode> class set as well as
      the <NxCode>nx-html--light-mode</NxCode> class. This activates light mode regardless of
      the <NxCode>prefers-color-scheme</NxCode> media query.
    </GalleryIframeExampleTile>

    <GalleryIframeExampleTile title="Example with Dark Mode Override Without Opt-In"
                              id="dark-mode-dark-override-no-opt-in-example"
                              html={darkModeOverrideNoOptInExampleCode}>
      This example has the <NxCode>nx-html--dark-mode</NxCode> class set but does <em>not</em> have
      the <NxCode>nx-html--enable-color-schemes</NxCode> class set. As such, theming in general is not enabled
      and light mode is selected.
    </GalleryIframeExampleTile>

    <GalleryIframeExampleTile title="Example with Light Mode Override Without Opt-In"
                              id="dark-mode-light-override-no-opt-in-example"
                              html={lightModeOverrideNoOptInExampleCode}>
      This example has the <NxCode>nx-html--light-mode</NxCode> class set but does <em>not</em> have
      the <NxCode>nx-html--enable-color-schemes</NxCode> class set. As such, theming in general is not enabled
      and light mode is selected.
    </GalleryIframeExampleTile>
  </>;

export default NxDarkModeClassPage;
