/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTreeViewRadioSelectExample from './NxTreeViewRadioSelectExample';
import NxTreeViewRadioSelectCustomTooltipExample from './NxTreeViewRadioSelectCustomTooltipExample';
import NxTreeViewRadioSelectDisabledExample from './NxTreeViewRadioSelectDisabledExample';

const nxTreeViewRadioSelectExampleCode = require('./NxTreeViewRadioSelectExample?raw'),
    nxTreeViewRadioSelectDisabledExampleCode = require('./NxTreeViewRadioSelectDisabledExample?raw'),
    nxTreeViewRadioSelectCustomTooltipExampleCode =
        require('./NxTreeViewRadioSelectCustomTooltipExample?raw');

const NxTreeViewRadioSelectPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        A tree view radio group component.
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
            <td className="nx-cell">Array of {'{id:string, name:string}'}</td>
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
              Name used in the default disabled tooltip and to identify the radio group.
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
              A function that will be called whenever a change occurs; it will receive the{' '}
              <code className="nx-code">id</code> of the selected radio.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">selectedId</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              The <code className="nx-code">id</code> of the <code className="nx-code">option</code> to be selected.
              If not provided no option will be selected.
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
            <td className="nx-cell">Array of {'{id:string, name:string}'}</td>
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

    <GalleryExampleTile title="NxTreeViewRadioSelect Basic Example"
                        id="nx-tree-view-radio-select-example"
                        liveExample={NxTreeViewRadioSelectExample}
                        codeExamples={nxTreeViewRadioSelectExampleCode}>
      A basic example of <code className="nx-code">NxTreeViewRadioSelect</code>, with working collapse/expand,
      filtering, and selection. Note that the overflowing label gets a tooltip.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeViewRadioSelect Custom Tooltip Example"
                        id="nx-tree-view-radio-select-example"
                        liveExample={NxTreeViewRadioSelectCustomTooltipExample}
                        codeExamples={nxTreeViewRadioSelectCustomTooltipExampleCode}>
      Example of an <code className="nx-code">NxTreeViewRadioSelect</code> which generates a tooltip for each option
      based on a custom field.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeViewRadioSelect Disabled Example"
                        liveExample={NxTreeViewRadioSelectDisabledExample}
                        codeExamples={nxTreeViewRadioSelectDisabledExampleCode}>
      A disabled <code className="nx-code">NxTreeViewRadioSelect</code>
    </GalleryExampleTile>
  </>;

export default NxTreeViewRadioSelectPage;
