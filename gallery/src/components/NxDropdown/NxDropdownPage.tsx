/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryTile} from '../../gallery-components/GalleryTiles';

import NxDropdownNavigationExample from './NxDropdownNavigationExample';
import NxDropdownButtonVariantExample from './NxDropdownButtonVariantExample';
import NxDropdownDisabledExample from './NxDropdownDisabledExample';
import NxDropdownCustomLabelExample from './NxDropdownCustomLabelExample';
import NxDropdownLinksExample from './NxDropdownLinksExample';
import CodeExample from '../../CodeExample';

const nxDropdownNavigationExampleCode = require('!!raw-loader!./NxDropdownNavigationExample').default,
    nxDropdownButtonVariantExampleCode = require('!!raw-loader!./NxDropdownButtonVariantExample').default,
    nxDropdownDisabledExampleCode = require('!!raw-loader!./NxDropdownDisabledExample').default,
    nxDropdownCustomLabelExampleCode = require('!!raw-loader!./NxDropdownCustomLabelExample').default,
    nxDropdownLinksExampleCode = require('!!raw-loader!./NxDropdownLinksExample').default;

const NxDropdownPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>Dropdown component.</p>
      <p>Props:</p>
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
              <p>
                What type of button to render for the dropdown.
                Defaults to <code className="nx-code">"tertiary"</code>
              </p>
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
              <p>
                Controls if the component should be rendered as disabled.
                Defaults to <code className="nx-code">false</code>
              </p>
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">onToggleCollapse</td>
            <td className="nx-cell">function</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">A function to execute whenever the dropdown is toggled.</td>
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
            <td className="nx-cell">HTML div Attributes</td>
            <td className="nx-cell">
              <a target="_blank"
                 rel="noopener"
                 href="https://developer.mozilla.org/es/docs/Web/HTML/Elemento/div">
                HTML div Attributes
              </a>
            </td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              NxDropdown supports any html attribute that's normally supported by
              {' '}<code className="nx-code">div</code> elements.
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Auxiliary Components</h3>
      <p>
        An auxiliary component called <code className="nx-code">NxDropdownDivider</code> is available
        to be used as separator between child elements.
      </p>
      <h3>Modifier Classes</h3>
      <p>
        A modifier class called <code className="nx-code">nx-dropdown--navigation</code> is available.
        This class modifies the look of the dropdown so that all child elements are clickable
        and their borders expand to the full width of the menu.
        It also allows to specify a non-clickable title using the class{' '}
        <code className="nx-code">nx-dropdown-title</code>.
      </p>
      <p>For an example of these classes in action, see <i>Navigation Example</i>.</p>
    </GalleryDescriptionTile>

    <GalleryTile title="Navigation Example">
      <NxDropdownNavigationExample />
      <CodeExample content={nxDropdownNavigationExampleCode} />
    </GalleryTile>

    <GalleryTile title="Button Variant Example">
      <NxDropdownButtonVariantExample />
      <CodeExample content={nxDropdownButtonVariantExampleCode} />
    </GalleryTile>

    <GalleryTile title="Disabled Example">
      <NxDropdownDisabledExample />
      <CodeExample content={nxDropdownDisabledExampleCode} />
    </GalleryTile>

    <GalleryTile title="Links Example">
      <NxDropdownLinksExample />
      <CodeExample content={nxDropdownLinksExampleCode} />
    </GalleryTile>

    <GalleryTile title="Custom label example">
      <NxDropdownCustomLabelExample />
      <CodeExample content={nxDropdownCustomLabelExampleCode} />
    </GalleryTile>
  </>;

export default NxDropdownPage;
