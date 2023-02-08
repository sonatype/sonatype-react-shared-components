/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxTextLink, NxCode, NxWarningAlert, NxH3, NxP, NxTile } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxDropdownNavigationExample from './NxDropdownNavigationExample';
import NxDropdownShortExample from './NxDropdownShortExample';
import NxDropdownScrollingExample from './NxDropdownScrollingExample';
import NxDropdownDisabledExample from './NxDropdownDisabledExample';
import NxDropdownRightButtonsExample from './NxDropdownRightButtonsExample';
import NxDropdownCustomLabelExample from './NxDropdownCustomLabelExample';
import NxDropdownLinksExample from './NxDropdownLinksExample';
import NxDropdownCloseHandlerExample from './NxDropdownCloseHandlerExample';
import NxDropdownWithNxThreatIndicatorExample from './NxDropdownWithNxThreatIndicatorExample';

const nxDropdownNavigationExampleCode = require('./NxDropdownNavigationExample?raw'),
    nxDropdownShortExampleCode = require('./NxDropdownShortExample?raw'),
    nxDropdownScrollingExampleCode = require('./NxDropdownScrollingExample?raw'),
    nxDropdownDisabledExampleCode = require('./NxDropdownDisabledExample?raw'),
    nxDropdownCustomLabelExampleCode = require('./NxDropdownCustomLabelExample?raw'),
    nxDropdownRightButtonsExampleCode = require('./NxDropdownRightButtonsExample?raw'),
    nxDropdownLinksExampleCode = require('./NxDropdownLinksExample?raw'),
    nxDropdownCloseHandlerExampleCode = require('./NxDropdownCloseHandlerExample?raw'),
    nxDropdownWithNxThreatIndicatorExampleCode = require('./NxDropdownWithNxThreatIndicatorExample?raw');

const NxDropdownPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A dropdown menu component. Note that this is for menus of nagivation links or
        action-triggering buttons.  It is <em>not</em> a form select field. By default the dropdown can display
        a maximum of 10 items before it scrolls the contents of the dropdown menu.
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
              <NxTable.Cell>label</NxTable.Cell>
              <NxTable.Cell>string | VDOM</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>Content to render in the dropdown's button</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>children</NxTable.Cell>
              <NxTable.Cell>ReactElement | ReactElement[]</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                The items to render within the dropdown list, including all <NxCode>.nx-dropdown-button</NxCode>s and
                {' '}<NxCode>.nx-dropdown-link</NxCode>s.
                <NxWarningAlert>
                  Note: All <NxCode>.nx-dropdown-button</NxCode>s and {' '}<NxCode>.nx-dropdown-link</NxCode>s must
                  be present as direct, immediate children of the <NxCode>NxDropdown</NxCode>, in order for the tooltip
                  wrapping logic to work. These children may not be wrapped in other intermediate react components,
                  fragments, or even nested arrays.
                </NxWarningAlert>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>isOpen</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>Value to control the toggling of the dropdown.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>variant</NxTable.Cell>
              <NxTable.Cell>"primary" | "secondary" | "tertiary"</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                What type of button to render for the dropdown.
                Defaults to <NxCode>"tertiary"</NxCode>

                <NxWarningAlert>
                  Deprecated: This prop should not be used.
                  It produces button styling that does not look good.
                </NxWarningAlert>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>className</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>Extra classes to apply to the component</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>disabled</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                Controls if the component should be rendered as disabled.
                Defaults to <NxCode>false</NxCode>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onToggleCollapse</NxTable.Cell>
              <NxTable.Cell>function</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                A function to execute whenever the dropdown is toggled. This toggling occurs when the dropdown button
                is clicked and also, if the dropdown is currently open, whenever a click occurs anywhere on the
                screen and any time the ESC key is pressed while focus is within the dropdown.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>toggleTooltip</NxTable.Cell>
              <NxTable.Cell>string | NxTooltip Props</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                If present, describes a tooltip to be placed on the dropdowns' toggle element. There are two ways
                to specify the tooltip: the simpler way is to simply specify the tooltip text as a string. If control
                of more complex tooltip options is desired, an object can be passed which will serve as the props for
                NxTooltip
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onCloseClick</NxTable.Cell>
              <NxTable.Cell>Function (MouseEvent =&lt; void)</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                A callback function to execute when a click is detected anywhere on the document which would by
                default close this dropdown (i.e. any click while the dropdown is open). This callback is dispatched
                before the dropdown is closed and is provided with a proxy of the <em>native</em> MouseEvent object.
                Calling <NxCode>preventDefault</NxCode> on this MouseEvent will cause the dropdown
                not to close. Note however that the event is proxied in such a way that
                calling <NxCode>preventDefault</NxCode> <em>will not</em> have any other
                effects – that is, the true native MouseEvent's <NxCode>defaultPrevented</NxCode> flag
                will be untouched, and only the logic within the dropdown will be affected.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onCloseKeyDown</NxTable.Cell>
              <NxTable.Cell>Function (KeyboardEvent =&lt; void)</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                A callback function to execute when a key press is detected which would by
                default close this dropdown (i.e. an ESC keypress occurring within the dropdown while it is open).
                This callback is dispatched before the dropdown is closed and is provided with the React KeyboardEvent
                object.  Calling <NxCode>preventDefault</NxCode> on this event object will cause the
                dropdown not to close.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML <NxCode>&lt;div&gt;</NxCode> Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/element/div">
                  HTML div Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                NxDropdown supports any html attribute that's normally supported by
                {' '}<NxCode>&lt;div&gt;</NxCode> elements.
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
          An auxiliary component called <NxCode>NxDropdown.Divider</NxCode> is available
          to be used as separator between child elements.
        </NxP>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Dropdown Helper Classes</NxH3>
        </NxTile.SubsectionHeader>
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
              <NxTable.Cell><NxCode>nx-dropdown--short</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Directly on the <NxCode>NxDropdown</NxCode>
              </NxTable.Cell>
              <NxTable.Cell>Renders the dropdown toggle and menu at a smaller width than the default</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
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

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Custom Icons</NxH3>
        </NxTile.SubsectionHeader>
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
              <NxTable.Cell>
                <NxCode><NxTextLink href="#/pages/Icon">nx-icon--colorful</NxTextLink></NxCode>
              </NxTable.Cell>
              <NxTable.Cell>
                <NxCode>NxFontAwesomeIcon</NxCode> inside <NxCode>NxDropdown</NxCode>
              </NxTable.Cell>
              <NxTable.Cell>This modifier should be applied to icons that should retain their colors.</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Navigation Example"
                        id="nx-dropdown-example"
                        liveExample={NxDropdownNavigationExample}
                        codeExamples={nxDropdownNavigationExampleCode}>
      An example of an <NxCode>NxDropdown</NxCode> as it might be used to implement a navigation list.
      Note that the menu can contain either <NxCode>&lt;a&gt;</NxCode> or
      {' '}<NxCode>&lt;button&gt;</NxCode> elements; this example contains both. This example also includes a usage
      of <NxCode>NxDropdown.Divider</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Short Example"
                        id="nx-dropdown-short-example"
                        liveExample={NxDropdownShortExample}
                        codeExamples={nxDropdownShortExampleCode}>
      An example of an <NxCode>NxDropdown</NxCode> with the <NxCode>nx-dropdown--short</NxCode> modifier class.
    </GalleryExampleTile>

    <GalleryExampleTile title="Scrolling Example"
                        id="nx-dropdown-scrolling-example"
                        liveExample={NxDropdownScrollingExample}
                        codeExamples={nxDropdownScrollingExampleCode}>
      An example with enough elements in the menu to induce scrolling.
    </GalleryExampleTile>

    <GalleryExampleTile title="Disabled Example"
                        id="nx-dropdown-disabled-example"
                        liveExample={NxDropdownDisabledExample}
                        codeExamples={nxDropdownDisabledExampleCode}>
      An example of a dropdown that is disabled.
    </GalleryExampleTile>

    <GalleryExampleTile title="Links Example"
                        id="nx-dropdown-links-example"
                        liveExample={NxDropdownLinksExample}
                        codeExamples={nxDropdownLinksExampleCode}>
      An example of a dropdown with a menu of links – typically, links to external sites.
    </GalleryExampleTile>

    <GalleryExampleTile title="Custom label example"
                        id="nx-dropdown-custom-label-example"
                        liveExample={NxDropdownCustomLabelExample}
                        codeExamples={nxDropdownCustomLabelExampleCode}>
      This dropdown contains more complex JSX in its label.
    </GalleryExampleTile>

    <GalleryExampleTile title="Custom label with NxThreatIndicator example"
                        id="nx-dropdown-with-nx-threat-indicator-example"
                        liveExample={NxDropdownWithNxThreatIndicatorExample}
                        codeExamples={nxDropdownWithNxThreatIndicatorExampleCode}>
      An example of a dropdown with <NxCode>NxThreatIndicator</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with right-floating buttons"
                        id="nx-dropdown-right-buttons-example"
                        liveExample={NxDropdownRightButtonsExample}
                        codeExamples={nxDropdownRightButtonsExampleCode}>
      This example demonstrates a dropdown where some of the dropdown menu rows have an additional icon-only button
      at their right end.  Clicking the row itself still behaves as normal, while clicking the icon button performs
      some other action related to the row, such as deleting the item the row represents. There are a few caveats to
      using these styles: note that this example uses <NxCode>&lt;a&gt;</NxCode> elements for all
      menu items – unfortunately <NxCode>&lt;button&gt;</NxCode> elements get some special behaviors
      from the browser that prevent them from working with the styling here. Additionally, note that
      the <NxCode>nx-dropdown-button-content</NxCode> is present on all menu items, even those that
      do not have icon buttons, in order to get consistent menu item heights.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with disabled close handlers"
                        liveExample={NxDropdownCloseHandlerExample}
                        codeExamples={nxDropdownCloseHandlerExampleCode}>
      This example demonstrates the usage of the <NxCode>onCloseClick</NxCode>{' '}
      and <NxCode>onCloseKeyDown</NxCode> props. These props can be used to disable the
      close-on-click and close-on-ESC behaviors that the dropdown has by default, by
      calling <NxCode>preventDefault()</NxCode> on the event. This example demonstrates both props
      simultaneously, but either can be used independently if desired.
    </GalleryExampleTile>
  </>;

export default NxDropdownPage;
