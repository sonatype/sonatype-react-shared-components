/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';

import NxStatefulTreeViewRadioSelectExample from './NxStatefulTreeViewRadioSelectExample';
import NxStatefulTreeViewRadioSelectDisabledExample from './NxStatefulTreeViewRadioSelectDisabledExample';

const nxStatefulTreeViewRadioSelectExampleCode = require('!!raw-loader!./NxStatefulTreeViewRadioSelectExample').default,
    nxStatefulTreeViewRadioSelectDisabledExampleCode =
        require('!!raw-loader!./NxStatefulTreeViewRadioSelectDisabledExample').default;

const NxStatefulTreeViewRadioSelectPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>
        Stateful Radio select component using tree view with radios. It handles tree view toggling and filter state.
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
              <p>
                An array of objects that corresponds to the possible options of the component (the radios).
                These objects need to at least have an <code className="nx-code">id: string | null</code> property{' '}
                and a <code className="nx-code">name: string</code> property. If an empty array is passed in,{' '}
                the component will be disabled.
              </p>
              <p>
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
              Called whenever selection change occurs; it will receive one argument:
              <ul className="nx-list nx-list--bulleted">
                <li className="nx-list__item">
                  <code className="nx-code">id</code> of the toggled option
                </li>
              </ul>
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">selectedId</td>
            <td className="nx-cell">string | null</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              The <code className="nx-code" >id</code> of the option to be selected.
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
              Callback to generate tooltip text for each option. Called with the option object.
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

    <GalleryExampleTile title="Basic Example" codeExamples={nxStatefulTreeViewRadioSelectExampleCode}>
      <NxStatefulTreeViewRadioSelectExample />
    </GalleryExampleTile>

    <GalleryTile title="Disabled Example With Tooltip">
      <NxStatefulTreeViewRadioSelectDisabledExample />
      <CodeExample content={nxStatefulTreeViewRadioSelectDisabledExampleCode}/>
    </GalleryTile>
  </>;

export default NxStatefulTreeViewRadioSelectPage;
