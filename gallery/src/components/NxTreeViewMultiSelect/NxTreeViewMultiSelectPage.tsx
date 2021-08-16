/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxTable, NxP, NxCode } from '@sonatype/react-shared-components';
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
      <NxP>
        Multi select component using tree view with checkboxes.
      </NxP>

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
            <NxTable.Cell>options</NxTable.Cell>
            <NxTable.Cell>Array of {'{id:String, name:String}'}</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              <NxP>
                An array of objects that corresponds to the possible options of the component (the checkboxes).
                These objects need to at least have an <NxCode>id: string</NxCode> property and a{' '}
                <NxCode>name: string</NxCode> property. If an empty array is passed in, the component
                will be disabled.
              </NxP>
              <NxP>
                <NxCode>id</NxCode> will be the value provided to the{' '}
                <NxCode>onChange</NxCode> callback, and{' '}
                <NxCode>name</NxCode> will be used to render the option.
              </NxP>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>name</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              Name used in the default disabled tooltip and in the generated checkbox id.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>children</NxTable.Cell>
            <NxTable.Cell>VDOM</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              The content to be used as the tree view trigger.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onChange</NxTable.Cell>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              Called whenever selection change occurs; it will receive two arguments:{' '}
              <ul className="nx-list nx-list--bulleted">
                <li className="nx-list__item">
                  <NxCode >Set</NxCode> of ids of the currently selected options
                </li>
                <li className="nx-list__item">
                  <NxCode>id</NxCode> of the toggled option
                  or <NxCode>undefined</NxCode> if all/none option was toggled
                </li>
              </ul>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>selectedIds</NxTable.Cell>
            <NxTable.Cell>Set</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              The <NxCode >Set</NxCode> of ids of options to be selected.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>isOpen</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Controls whether the tree view is open or closed. Default is false.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>id</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Id to assign to the component
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>disabled</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Controls whether the tree view should be rendered as disabled or not. Default is false.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onToggleCollapse</NxTable.Cell>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Called whenever the NxTreeView is toggled.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>disabledTooltip</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Enables the tooltip that appears when the component is disabled.
              If no <NxCode>disabledTooltip</NxCode> is passed in and the component is disabled due
              to lack of <NxCode>options</NxCode>, a default tooltip will be provided. If the
              component is disabled explicitly and no <NxCode>disabledTooltip</NxCode> is provided,
              no tooltip will be shown.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>optionTooltipGenerator</NxTable.Cell>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Callback to generate tooltip text for each option. Called with the option object. If not supplied, the
              default overflow tooltip behavior of the checkboxes will be active.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>tooltipModifierClass</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Custom class to be applied to all the tooltips rendered by this component.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onFilterChange</NxTable.Cell>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Called whenever filter term is changed. It will receive the current value of the filter term.
              If not provided the filter text input will not be rendered and filtering will be disabled.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>filter</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Current value of filter term.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>filteredOptions</NxTable.Cell>
            <NxTable.Cell>Array of {'{id:String, name:String}'}</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Options filtered using current filter term.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>filterPlaceholder</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Placeholder to be used in filter text input. Defaults to "filter" but recommended to
              be something clearer for screenreading purposes.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>filterThreshold</NxTable.Cell>
            <NxTable.Cell>Number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              If number of options is greater than filter-threshold - allows filtering the options. Default is 10.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
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
