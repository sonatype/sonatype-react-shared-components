/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTreeViewMultiSelectExample from './NxTreeViewMultiSelectExample';
import NxTreeViewMultiSelectCustomTooltipExample from './NxTreeViewMultiSelectCustomTooltipExample';
import NxTreeViewMultiSelectDisabledExample from './NxTreeViewMultiSelectDisabledExample';

const nxTreeViewMultiSelectExampleCode = require('./NxTreeViewMultiSelectExample?raw'),
    nxTreeViewMultiSelectDisabledExampleCode = require('./NxTreeViewMultiSelectDisabledExample?raw'),
    nxTreeViewMultiSelectCustomTooltipExampleCode =
        require('./NxTreeViewMultiSelectCustomTooltipExample?raw');

const NxTreeViewMultiSelectPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Multi select component using tree view with checkboxes.
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
                These objects need to at least have an <NxCode>id: string</NxCode> property and a{' '}
                <NxCode>name: string</NxCode> property. If an empty array is passed in, the component
                will be disabled.
              </p>
              <p className="nx-p">
                <NxCode>id</NxCode> will be the value provided to the{' '}
                <NxCode>onChange</NxCode> callback, and{' '}
                <NxCode>name</NxCode> will be used to render the option.
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
              Called whenever selection change occurs; it will receive two arguments:{' '}
              <ul className="nx-list nx-list--bulleted">
                <li className="nx-list__item">
                  <NxCode>Set</NxCode> of ids of the currently selected options
                </li>
                <li className="nx-list__item">
                  <NxCode>id</NxCode> of the toggled option
                  or <NxCode>undefined</NxCode> if all/none option was toggled
                </li>
              </ul>
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">selectedIds</td>
            <td className="nx-cell">Set</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              The <NxCode>Set</NxCode> of ids of options to be selected.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">isOpen</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Controls whether the tree view is open or closed. Default is false.
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
            <td className="nx-cell">onToggleCollapse</td>
            <td className="nx-cell">Function</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Called whenever the NxTreeView is toggled.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">disabledTooltip</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Enables the tooltip that appears when the component is disabled.
              If no <NxCode>disabledTooltip</NxCode> is passed in and the component is disabled due
              to lack of <NxCode>options</NxCode>, a default tooltip will be provided. If the
              component is disabled explicitly and no <NxCode>disabledTooltip</NxCode> is provided,
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
            <td className="nx-cell">onFilterChange</td>
            <td className="nx-cell">Function</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Called whenever filter term is changed. It will receive the current value of the filter term.
              If not provided the filter text input will not be rendered and filtering will be disabled.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">filter</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Current value of filter term.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">filteredOptions</td>
            <td className="nx-cell">Array of {'{id:String, name:String}'}</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Options filtered using current filter term.
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

    <GalleryExampleTile title="NxTreeViewMultiSelect Example"
                        id="nx-tree-view-multi-select-example"
                        liveExample={NxTreeViewMultiSelectExample}
                        codeExamples={nxTreeViewMultiSelectExampleCode}>
      Basic example of a <NxCode>NxTreeViewMultiSelect</NxCode>. Note that the overflowing label gets
      a tooltip.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeViewMultiSelect Custom Tooltip Example"
                        id="nx-tree-view-multi-select-custom-tooltip-example"
                        liveExample={NxTreeViewMultiSelectCustomTooltipExample}
                        codeExamples={nxTreeViewMultiSelectCustomTooltipExampleCode}>
      Example of an <NxCode>NxTreeViewMultiSelect</NxCode> which generates a tooltip for each option
      based on a custom field.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeViewMultiSelect Disabled Example With Tooltip"
                        liveExample={NxTreeViewMultiSelectDisabledExample}
                        codeExamples={nxTreeViewMultiSelectDisabledExampleCode}>
      An example of an <NxCode>NxTreeViewMultiSelect</NxCode> which is disabled and which displays
      a tooltip to explain why.
    </GalleryExampleTile>
  </>;

export default NxTreeViewMultiSelectPage;
