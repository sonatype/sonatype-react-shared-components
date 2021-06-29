/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxTableHead, NxTableRow, NxTableCell, NxTableBody, NxTextLink, NxCode, NxWarningAlert }
  from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxDropdownNavigationExample from './NxDropdownNavigationExample';
import NxDropdownScrollingExample from './NxDropdownScrollingExample';
import NxDropdownDisabledExample from './NxDropdownDisabledExample';
import NxDropdownRightButtonsExample from './NxDropdownRightButtonsExample';
import NxDropdownCustomLabelExample from './NxDropdownCustomLabelExample';
import NxDropdownLinksExample from './NxDropdownLinksExample';
import NxDropdownCloseHandlerExample from './NxDropdownCloseHandlerExample';

const nxDropdownNavigationExampleCode = require('./NxDropdownNavigationExample?raw'),
    nxDropdownScrollingExampleCode = require('./NxDropdownScrollingExample?raw'),
    nxDropdownDisabledExampleCode = require('./NxDropdownDisabledExample?raw'),
    nxDropdownCustomLabelExampleCode = require('./NxDropdownCustomLabelExample?raw'),
    nxDropdownRightButtonsExampleCode = require('./NxDropdownRightButtonsExample?raw'),
    nxDropdownLinksExampleCode = require('./NxDropdownLinksExample?raw'),
    nxDropdownCloseHandlerExampleCode = require('./NxDropdownCloseHandlerExample?raw');

const NxDropdownPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        A dropdown menu component. Note that this is for menus of nagivation links or
        action-triggering buttons.  It is <em>not</em> a form select field. By default the dropdown can display
        a maximum of 10 items before it scrolls the contents of the dropdown menu.
      </p>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <h3 className="nx-h3">Props:</h3>
        </header>
        <table className="nx-table nx-table--gallery-props">
          <thead>
            <tr className="nx-table-row">
              <th className="nx-cell nx-cell--header">Prop</th>
              <th className="nx-cell nx-cell--header">Type</th>
              <th className="nx-cell nx-cell--header">Required</th>
              <th className="nx-cell nx-cell--header">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="nx-table-row">
              <td className="nx-cell">label</td>
              <td className="nx-cell">string | VDOM</td>
              <td className="nx-cell">Yes</td>
              <td className="nx-cell">Content to render in the dropdown's button</td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">children</td>
              <td className="nx-cell">ReactElement | ReactElement[]</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">
                The items to render within the dropdown list, including all <NxCode>.nx-dropdown-button</NxCode>s and
                {' '}<NxCode>.nx-dropdown-link</NxCode>s.
                <NxWarningAlert>
                  Note: All <NxCode>.nx-dropdown-button</NxCode>s and {' '}<NxCode>.nx-dropdown-link</NxCode>s must
                  be present as direct, immediate children of the <NxCode>NxDropdown</NxCode>, in order for the tooltip
                  wrapping logic to work. These children may not be wrapped in other intermediate react components,
                  fragments, or even nested arrays.
                </NxWarningAlert>
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">isOpen</td>
              <td className="nx-cell">boolean</td>
              <td className="nx-cell">Yes</td>
              <td className="nx-cell">Value to control the toggling of the dropdown.</td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">variant</td>
              <td className="nx-cell">"primary" | "secondary" | "tertiary"</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">
                What type of button to render for the dropdown.
                Defaults to <code className="nx-code">"tertiary"</code>
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">className</td>
              <td className="nx-cell">string</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">Extra classes to apply to the component</td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">disabled</td>
              <td className="nx-cell">boolean</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">
                Controls if the component should be rendered as disabled.
                Defaults to <code className="nx-code">false</code>
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">onToggleCollapse</td>
              <td className="nx-cell">function</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">
                A function to execute whenever the dropdown is toggled. This toggling occurs when the dropdown button
                is clicked and also, if the dropdown is currently open, whenever a click occurs anywhere on the
                screen and any time the ESC key is pressed while focus is within the dropdown.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">toggleTooltip</td>
              <td className="nx-cell">string | NxTooltip Props</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">
                If present, describes a tooltip to be placed on the dropdowns' toggle element. There are two ways
                to specify the tooltip: the simpler way is to simply specify the tooltip text as a string. If control
                of more complex tooltip options is desired, an object can be passed which will serve as the props for
                NxTooltip
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">onCloseClick</td>
              <td className="nx-cell">Function (MouseEvent =&lt; void)</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">
                A callback function to execute when a click is detected anywhere on the document which would by
                default close this dropdown (i.e. any click while the dropdown is open). This callback is dispatched
                before the dropdown is closed and is provided with a proxy of the <em>native</em> MouseEvent object.
                Calling <code className="nx-code">preventDefault</code> on this MouseEvent will cause the dropdown
                not to close. Note however that the event is proxied in such a way that
                calling <code className="nx-code">preventDefault</code> <em>will not</em> have any other
                effects – that is, the true native MouseEvent's <code className="nx-code">defaultPrevented</code> flag
                will be untouched, and only the logic within the dropdown will be affected.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">onCloseKeyDown</td>
              <td className="nx-cell">Function (KeyboardEvent =&lt; void)</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">
                A callback function to execute when a key press is detected which would by
                default close this dropdown (i.e. an ESC keypress occurring within the dropdown while it is open).
                This callback is dispatched before the dropdown is closed and is provided with the React KeyboardEvent
                object.  Calling <code className="nx-code">preventDefault</code> on this event object will cause the
                dropdown not to close.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">HTML <code className="nx-code">&lt;div&gt;</code> Attributes</td>
              <td className="nx-cell">
                <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/element/div">
                  HTML div Attributes
                </NxTextLink>
              </td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">
                NxDropdown supports any html attribute that's normally supported by
                {' '}<code className="nx-code">&lt;div&gt;</code> elements.
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <h3 className="nx-h3">Auxiliary Components</h3>
        </header>
        <p className="nx-p">
          An auxiliary component called <code className="nx-code">NxDropdownDivider</code> is available
          to be used as separator between child elements.
        </p>
      </section>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <h3 className="nx-h3">Dropdown Menu Content Classes</h3>
        </header>
        <p className="nx-p">
          The following CSS classes are provided which must be used for the contents of the dropdown menu.
        </p>
        <NxTable className="nx-table--gallery-props">
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Class</NxTableCell>
              <NxTableCell>Location</NxTableCell>
              <NxTableCell>Details</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody>
            <NxTableRow>
              <NxTableCell><code className="nx-code">nx-dropdown-button</code></NxTableCell>
              <NxTableCell>
                <code className="nx-code">&lt;a&gt;</code> and <code className="nx-code">&lt;button&gt;</code> elements
                within the dropdown menu
              </NxTableCell>
              <NxTableCell>
                Styles the buttons and links as clickable rows within the menu
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell><code className="nx-code">nx-dropdown-link</code></NxTableCell>
              <NxTableCell>
                <code className="nx-code">&lt;a&gt;</code> elements within the dropdown menu
              </NxTableCell>
              <NxTableCell>
                Applies typical blue styling to links within the menu
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell><code className="nx-code">nx-dropdown-right-button</code></NxTableCell>
              <NxTableCell>
                An additional icon-only button which can appear on the right side of a menu row
              </NxTableCell>
              <NxTableCell>
                Sometimes it is desirable to add a icon-only button to a menu row which performs an action distinct
                from clicking on the row itself - for instance, a trashcan button which deletes the row. For this
                scenario, the icon button, a preceding sibling of the main row button, must include this class and{' '}
                <code className="nx-code">nx-dropdown-button-content</code> must be used in conjunction.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell><code className="nx-code">nx-dropdown-button-content</code></NxTableCell>
              <NxTableCell>
                Wrapper around text content of menu rows
                when <code className="nx-code">nx-dropdown-right-button</code> is in use.
              </NxTableCell>
              <NxTableCell>
                This wrapper is necessary around the text content of
                any <code className="nx-code">nx-dropdown-button</code> which is in a menu containing
                any <code className="nx-code">.nx-dropdown-right-button</code>s.
              </NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </section>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Navigation Example"
                        liveExample={NxDropdownNavigationExample}
                        codeExamples={nxDropdownNavigationExampleCode}>
      An example of an <code className="nx-code">NxDropdown</code> as it might be used to implement a navigation list.
      Note that the menu can contain either <code className="nx-code">&lt;a&gt;</code> or
      {' '}<code className="nx-code">&lt;button&gt;</code> elements; this example contains both.
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

    <GalleryExampleTile title="Example with right-floating buttons"
                        id="nx-dropdown-right-buttons-example"
                        liveExample={NxDropdownRightButtonsExample}
                        codeExamples={nxDropdownRightButtonsExampleCode}>
      This example demonstrates a dropdown where some of the dropdown menu rows have an additional icon-only button
      at their right end.  Clicking the row itself still behaves as normal, while clicking the icon button performs
      some other action related to the row, such as deleting the item the row represents. There are a few caveats to
      using these styles: note that this example uses <code className="nx-code">&lt;a&gt;</code> elements for all
      menu items – unfortunately <code className="nx-code">&lt;button&gt;</code> elements get some special behaviors
      from the browser that prevent them from working with the styling here. Additionally, note that
      the <code className="nx-code">nx-dropdown-button-content</code> is present on all menu items, even those that
      do not have icon buttons, in order to get consistent menu item heights.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with disabled close handlers"
                        liveExample={NxDropdownCloseHandlerExample}
                        codeExamples={nxDropdownCloseHandlerExampleCode}>
      This example demonstrates the usage of the <code className="nx-code">onCloseClick</code>{' '}
      and <code className="nx-code">onCloseKeyDown</code> props. These props can be used to disable the
      close-on-click and close-on-ESC behaviors that the dropdown has by default, by
      calling <code className="nx-code">preventDefault()</code> on the event. This example demonstrates both props
      simultaneously, but either can be used independently if desired.
    </GalleryExampleTile>
  </>;

export default NxDropdownPage;
