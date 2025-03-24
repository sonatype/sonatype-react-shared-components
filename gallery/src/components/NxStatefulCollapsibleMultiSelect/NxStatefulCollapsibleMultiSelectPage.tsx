/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxList } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxStatefulCollapsibleMultiSelectExample from './NxStatefulCollapsibleMultiSelectExample';
import NxStatefulCollapsibleMultiSelectDisabledExample
  from './NxStatefulCollapsibleMultiSelectDisabledExample';

const nxStatefulCollapsibleItemsMultiSelectExampleCode = require('./NxStatefulCollapsibleMultiSelectExample?raw'),
    nxStatefulCollapsibleItemsMultiSelectDisabledExampleCode =
        require('./NxStatefulCollapsibleMultiSelectDisabledExample?raw');

const NxStatefulCollapsibleMultiSelectPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Stateful Multi select component using collapsible items with checkboxes.
        It handles collapsible items toggling and filter state.
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
            <NxTable.Cell>Array of {'{id:String, name:String | ReactNode}'}</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              <NxP>
                An array of objects that corresponds to the possible options of the component (the checkboxes).
                These objects need to at least have an <NxCode>id: string</NxCode> property and a{' '}
                <NxCode>name: string | ReactNode</NxCode> property. If an empty array is passed in, the component
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
              The content to be used as the collapsible items trigger.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onChange</NxTable.Cell>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              Called whenever selection change occurs; it will receive two arguments:
              <NxList className="nx-list--bulleted">
                <NxList.Item>
                  <NxList.Text>
                    <NxCode>Set</NxCode> of ids of the currently selected options
                  </NxList.Text>
                </NxList.Item>
                <NxList.Item>
                  <NxList.Text>
                    <NxCode>id</NxCode> of the toggled option
                    or <NxCode>undefined</NxCode> if all/none option was toggled
                  </NxList.Text>
                </NxList.Item>
              </NxList>
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
              Whether the collapsible items is open or closed initially. Default is false.
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
              Controls whether the collapsible items should be rendered as disabled or not. Default is false.
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
            <NxTable.Cell>filterPlaceholder</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Placeholder to be used in filter text input.
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

    <GalleryExampleTile title="General Example"
                        codeExamples={nxStatefulCollapsibleItemsMultiSelectExampleCode}
                        liveExample={NxStatefulCollapsibleMultiSelectExample}>
      This example demonstrates basic usage of <NxCode>NxStatefulCollapsibleMultiSelect</NxCode>. Note that
      the component tracks the collapse/expand state and filter text internally, and the calling
      code only needs to track which items are selected.
    </GalleryExampleTile>

    <GalleryExampleTile title="Disabled Example With Tooltip"
                        liveExample={NxStatefulCollapsibleMultiSelectDisabledExample}
                        codeExamples={nxStatefulCollapsibleItemsMultiSelectDisabledExampleCode}>
      This example shows a disabled <NxCode>NxStatefulCollapsibleMultiSelect</NxCode> with a tooltip.
    </GalleryExampleTile>
  </>;

export default NxStatefulCollapsibleMultiSelectPage;
