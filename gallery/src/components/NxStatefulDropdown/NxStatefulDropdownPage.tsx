/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxStatefulDropdownExample from './NxStatefulDropdownExample';

const nxStatefulDropdownExampleCode = require('!!raw-loader!./NxStatefulDropdownExample').default;

const NxStatefulDropdownPage = () =>
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
            <td className="nx-cell">toggleTooltip</td>
            <td className="nx-cell">string | NxTooltip Props</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              If present, describes a tooltip to be placed on the dropdown's toggle element. There are two ways
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
              NxStatefulDropdown supports any html attribute that's normally supported by
              {' '}<code className="nx-code">div</code> elements.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        codeExamples={nxStatefulDropdownExampleCode}
                        liveExample={NxStatefulDropdownExample}>
      This example demonstrates a simple NxStatefulDropdown, showing that it tracks
      its own open/closed state with no need for support from the surrounding code.
    </GalleryExampleTile>
  </>;

export default NxStatefulDropdownPage;
