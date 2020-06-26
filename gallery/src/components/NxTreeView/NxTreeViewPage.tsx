/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTreeViewExample from './NxTreeViewExample';
import NxTreeViewTooltipExample from './NxTreeViewTooltipExample';
import NxTreeViewExtras from './NxTreeViewExtrasExample';
import NxTreeViewEmpty from './NxTreeViewEmptyExample';
import NxTreeViewDisabled from './NxTreeViewDisabledExample';

const nxTreeViewCode = require('!!raw-loader!./NxTreeViewExample').default,
    nxTreeViewTooltipCode = require('!!raw-loader!./NxTreeViewTooltipExample').default,
    nxTreeViewExtrasCode = require('!!raw-loader!./NxTreeViewExtrasExample').default,
    nxTreeViewEmptyCode = require('!!raw-loader!./NxTreeViewEmptyExample').default,
    nxTreeViewDisabledCode = require('!!raw-loader!./NxTreeViewDisabledExample').default;

const NxTreeViewPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        A set of default styles and basic React for an expanding tree view.
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
            <td className="nx-cell">id</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Id to assign to the tree view element
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
            <td className="nx-cell">disabled</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Controls whether the tree view should be rendered as disabled or not. Default is false.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">triggerContent</td>
            <td className="nx-cell">VirtualDOM</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              The content of the tree view trigger. While not strictly speaking required if there is no content then
              nothing but the caret icon will appear.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">triggerTooltip</td>
            <td className="nx-cell">string | NxTooltip Props</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              If present, describes a tooltip to be places on the tree view's trigger element. There are two ways
              to specify the tooltip: the simpler way is to simply specify the tooltip text as a string. If control
              of more complex tooltip options is desired, an object can be passed which will serve as the props for
              NxTooltip
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">className</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">Classes to apply to the root element</td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="NxTreeView Basic Example"
                        liveExample={NxTreeViewExample}
                        codeExamples={nxTreeViewCode}>
      A basic example of a <code className="nx-code">NxTreeView</code> with the corresponding logic necessary to
      track its collapse/expand state.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeView Example with trigger tooltip"
                        liveExample={NxTreeViewTooltipExample}
                        codeExamples={nxTreeViewTooltipCode}>
      Examples of <code className="nx-code">NxTreeView</code>s with tooltips configured on their triggers. The first
      example uses a simple string for the tooltip while the second example demonstrates a more custom tooltip
      configuration.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeView Example with Extras"
                        liveExample={NxTreeViewExtras}
                        codeExamples={nxTreeViewExtrasCode}>
      These examples demonstrate <code className="nx-code">NxTreeView</code>s with extra content such as icons and
      <code className="nx-code">nx-counter</code>s in their triggers. Note that the last example also demonstrates
      text overflow behavior
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeView Empty Example"
                        liveExample={NxTreeViewEmpty}
                        codeExamples={nxTreeViewEmptyCode}>
      Example of a <code className="nx-code">NxTreeView</code> that cannot be opened because it has no children.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTreeView Disabled Example"
                        liveExample={NxTreeViewDisabled}
                        codeExamples={nxTreeViewDisabledCode}>
      Example of a disabled <code className="nx-code">NxTreeView</code>.
    </GalleryExampleTile>
  </>;

export default NxTreeViewPage;
