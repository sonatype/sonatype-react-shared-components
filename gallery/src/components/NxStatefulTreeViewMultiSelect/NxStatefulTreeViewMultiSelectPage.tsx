/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxStatefulTreeViewMultiSelectExample from './NxStatefulTreeViewMultiSelectExample';
import NxStatefulTreeViewMultiSelectDisabledExample from './NxStatefulTreeViewMultiSelectDisabledExample';

const nxStatefulTreeViewMultiSelectExampleCode = require('!!raw-loader!./NxStatefulTreeViewMultiSelectExample').default,
    nxStatefulTreeViewMultiSelectDisabledExampleCode =
        require('!!raw-loader!./NxStatefulTreeViewMultiSelectDisabledExample').default;

const NxStatefulTreeViewMultiSelectPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Stateful Multi select component using tree view with checkboxes. It handles tree view toggling and filter state.
      </p>

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
            <td className="nx-cell">options</td>
            <td className="nx-cell">Array of {'{id:String, name:String}'}</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">
              <p className="nx-p">
                An array of objects that corresponds to the possible options of the component (the checkboxes).
                These objects need to at least have an <code className="nx-code">id: string</code> property and a{' '}
                <code className="nx-code">name: string</code> property. If an empty array is passed in, the component
                will be disabled.
              </p>
              <p className="nx-p">
                <code className="nx-code">id</code> will be the value provided to the{' '}
                <code className="nx-code">onChange</code> callback, and{' '}
                <code className="nx-code">name</code> will be used to render the option.
              </p>
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">name</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">
              Name used in the default disabled tooltip and in the generated checkbox id.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">children</td>
            <td className="nx-cell">VDOM</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">
              The content to be used as the tree view trigger.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">onChange</td>
            <td className="nx-cell">Function</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">
              Called whenever selection change occurs; it will receive two arguments:
              <ul className="nx-list nx-list--bulleted">
                <li className="nx-list__item">
                  <code className="nx-code">Set</code> of ids of the currently selected options
                </li>
                <li className="nx-list__item">
                  <code className="nx-code">id</code> of the toggled option
                  or <code className="nx-code">undefined</code> if all/none option was toggled
                </li>
              </ul>
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">selectedIds</td>
            <td className="nx-cell">Set</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              The <code className="nx-code" >Set</code> of ids of options to be selected.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">isOpen</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Whether the tree view is open or closed initially. Default is false.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">id</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Id to assign to the component
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">disabled</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Controls whether the tree view should be rendered as disabled or not. Default is false.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">disabledTooltip</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Enables the tooltip that appears when the component is disabled.
              If no <code className="nx-code">disabledTooltip</code> is passed in and the component is disabled due
              to lack of <code className="nx-code">options</code>, a default tooltip will be provided. If the
              component is disabled explicitly and no <code className="nx-code">disabledTooltip</code> is provided,
              no tooltip will be shown.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">optionTooltipGenerator</td>
            <td className="nx-cell">Function</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Callback to generate tooltip text for each option. Called with the option object. If not supplied, the
              default overflow tooltip behavior of the checkboxes will be active.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">tooltipModifierClass</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Custom class to be applied to all the tooltips rendered by this component.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">filterPlaceholder</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Placeholder to be used in filter text input.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">filterThreshold</td>
            <td className="nx-cell">Number</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              If number of options is greater than filter-threshold - allows filtering the options. Default is 10.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        codeExamples={nxStatefulTreeViewMultiSelectExampleCode}
                        liveExample={NxStatefulTreeViewMultiSelectExample}>
      This example demonstrates basic usage of <code className="nx-code">NxStatefulTreeViewMultiSelect</code>. Note that
      the component tracks the collapse/expand state and filter text internally, and the calling
      code only needs to track which items are selected.
    </GalleryExampleTile>

    <GalleryExampleTile title="Disabled Example With Tooltip"
                        liveExample={NxStatefulTreeViewMultiSelectDisabledExample}
                        codeExamples={nxStatefulTreeViewMultiSelectDisabledExampleCode}>
      This example shows a disabled <code className="nx-code">NxStatefulTreeViewMultiSelect</code> with a tooltip.
    </GalleryExampleTile>
  </>;

export default NxStatefulTreeViewMultiSelectPage;
