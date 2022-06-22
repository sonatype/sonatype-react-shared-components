/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxTextLink, NxCode, NxH3, NxP, NxTile } from '@sonatype/react-shared-components';
import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxIconDropdownExample from './NxIconDropdownExample';
import NxIconDropdownButtonsExample from './NxIconDropdownButtonsExample';
import NxIconDropdownDisabledExample from './NxIconDropdownDisabledExample';

const nxIconDropdownExampleCode = require('./NxIconDropdownExample?raw'),
    nxIconDropdownButtonsExampleCode = require('./NxIconDropdownButtonsExample?raw'),
    nxIconDropdownDisabledExampleCode = require('./NxIconDropdownDisabledExample?raw');

const NxIconDropdownPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A variation of the dropdown menu component which uses a single icon as its toggle.
        <NxCode>NxIconDropdown</NxCode> shares all of the same props as{' '}
        <NxTextLink href="#/pages/Dropdown">NxDropdown</NxTextLink>{' '}
        as well as the ones listed below. Like <NxCode>NxDropdown</NxCode> this is for menus of nagivation links or
        action-triggering buttons.  It is <em>not</em> a form select field. By default the dropdown can display a
        maximum of 10 items before it scrolls the contents of the dropdown menu.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Props:</NxH3>
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
              <NxTable.Cell>icon</NxTable.Cell>
              <NxTable.Cell>FontAwesome Icon</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>
                The FontAwesome icon to use in the button. The default is <NxCode>faEllipsisV</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>title</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>
                Describes the text for a tooltip to be placed on the dropdowns' toggle element. For accessibility
                reasons this prop is required on <NxCode>NxIconDropdown</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Other parameters</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          <NxCode>NxIconDropdown</NxCode> also supports the same classes and auxilary styles as{' '}
          <NxTextLink href="#/pages/Dropdown">NxDropdown</NxTextLink>.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        id="nx-icon-dropdown-simple-example"
                        liveExample={NxIconDropdownExample}
                        codeExamples={nxIconDropdownExampleCode}>
      An example of an <NxCode>NxIconDropdown</NxCode> with links and <NxCode>&lt;button&gt;</NxCode>s.
    </GalleryExampleTile>

    <GalleryExampleTile title="Button Bar Example"
                        id="nx-icon-dropdown-btn-bar-example"
                        liveExample={NxIconDropdownButtonsExample}
                        codeExamples={nxIconDropdownButtonsExampleCode}>
      An example of an <NxCode>NxIconDropdown</NxCode> in a button bar with <NxCode>&lt;button&gt;</NxCode>s.
    </GalleryExampleTile>

    <GalleryExampleTile title="Disabled Example"
                        id="nx-icon-dropdown-disabled-example"
                        liveExample={NxIconDropdownDisabledExample}
                        codeExamples={nxIconDropdownDisabledExampleCode}>
      An example of a dropdown that is disabled.
    </GalleryExampleTile>
  </>;

export default NxIconDropdownPage;
