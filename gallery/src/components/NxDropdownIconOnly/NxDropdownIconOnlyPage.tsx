/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxTextLink, NxCode, NxH3, NxP, NxTile } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxDropdownIconOnlyNavigationExample from './NxDropdownIconOnlyNavigationExample';
import NxDropdownIconOnlyLinksExample from './NxDropdownIconOnlyLinksExample';
import NxDropdownIconOnlyDisabledExample from './NxDropdownIconOnlyDisabledExample';

const nxDropdownIconOnlyNavigationExampleCode = require('./NxDropdownIconOnlyNavigationExample?raw'),
    nxDropdownIconOnlyLinksExampleCode = require('./NxDropdownIconOnlyLinksExample?raw'),
    nxDropdownIconOnlyDisabledExampleCode = require('./NxDropdownIconOnlyLinksExample?raw');

const NxDropdownPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A variation of the dropdown menu component which uses a single icon as its toggle.
        <NxCode>NxDropdownIconOnly</NxCode> shares all of the same props as{' '}
        <NxTextLink href="#/pages/NxDropdown" className="nx-dropdown-button">
          NxDropdown
        </NxTextLink>{' '}
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
              <NxTable.Cell>string | VDOM</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>The name of the FontAwesome icon to use in the button.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>toggleTooltip</NxTable.Cell>
              <NxTable.Cell>string | NxTooltip Props</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>
                Describes a tooltip to be placed on the dropdowns' toggle element. For accessibility reasons this prop
                is required on <NxCode>NxDropdownIconOnly</NxCode>. There are two ways to specify the tooltip: the
                simpler way is to simply specify the tooltip text as a string. If control of more complex tooltip
                options is desired, an object can be passed which will serve as the props for
                {' '}<NxCode>NxTooltip</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Auxiliary Components</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          An auxiliary component called <NxCode>NxDropdownDivider</NxCode> is available
          to be used as separator between child elements.
        </NxP>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Dropdown Menu Content Classes</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          The following CSS classes are provided which must be used for the contents of the dropdown menu.
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Class</NxTable.Cell>
              <NxTable.Cell>Location</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-dropdown-button</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxCode>&lt;a&gt;</NxCode> and <NxCode>&lt;button&gt;</NxCode> elements
                within the dropdown menu
              </NxTable.Cell>
              <NxTable.Cell>
                Styles the buttons and links as clickable rows within the menu
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-dropdown-link</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxCode>&lt;a&gt;</NxCode> elements within the dropdown menu
              </NxTable.Cell>
              <NxTable.Cell>
                Applies typical blue styling to links within the menu
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-dropdown-right-button</NxCode></NxTable.Cell>
              <NxTable.Cell>
                An additional icon-only button which can appear on the right side of a menu row
              </NxTable.Cell>
              <NxTable.Cell>
                Sometimes it is desirable to add a icon-only button to a menu row which performs an action distinct
                from clicking on the row itself - for instance, a trashcan button which deletes the row. For this
                scenario, the icon button, a preceding sibling of the main row button, must include this class and{' '}
                <NxCode>nx-dropdown-button-content</NxCode> must be used in conjunction.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-dropdown-button-content</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Wrapper around text content of menu rows
                when <NxCode>nx-dropdown-right-button</NxCode> is in use.
              </NxTable.Cell>
              <NxTable.Cell>
                This wrapper is necessary around the text content of
                any <NxCode>nx-dropdown-button</NxCode> which is in a menu containing
                any <NxCode>.nx-dropdown-right-button</NxCode>s.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Navigation Example"
                        liveExample={NxDropdownIconOnlyNavigationExample}
                        codeExamples={nxDropdownIconOnlyNavigationExampleCode}>
      An example of an <NxCode>NxDropdown</NxCode> as it might be used to implement a navigation list.
      Note that the menu can contain either <NxCode>&lt;a&gt;</NxCode> or
      {' '}<NxCode>&lt;button&gt;</NxCode> elements; this example contains both.
    </GalleryExampleTile>

    <GalleryExampleTile title="Links Example"
                        id="nx-dropdownicononly-links-example"
                        liveExample={NxDropdownIconOnlyLinksExample}
                        codeExamples={nxDropdownIconOnlyLinksExampleCode}>
      An example of a dropdown with a menu of links – typically, links to external sites.
    </GalleryExampleTile>

    <GalleryExampleTile title="Disabled Example"
                        id="nx-dropdown-disabled-example"
                        liveExample={NxDropdownIconOnlyDisabledExample}
                        codeExamples={nxDropdownIconOnlyDisabledExampleCode}>
      An example of a dropdown that is disabled.
    </GalleryExampleTile>
  </>;

export default NxDropdownPage;
