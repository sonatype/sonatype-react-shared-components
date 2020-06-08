/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxInfoAlert } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxTooltipExample from './NxTooltipExample';

const tooltipsExampleCode = require('!!raw-loader!./NxTooltipExample').default,
    tooltipsExampleStyles = require('!!raw-loader!./NxTooltipExample.scss').default;

export default function NxTooltipPage() {
  const codeExamples = [tooltipsExampleCode, { content: tooltipsExampleStyles, language: 'scss' }];

  return (
    <>
      <GalleryDescriptionTile>
        <p>
          A tooltip component that can wrap other components in order to apply a tooltip to them. The wrapped component
          must be able to receive a ref which it must forward to its top-most native DOM element.
        </p>
        <NxInfoAlert>
          Tooltips that are open at page load appear to exhibit a race condition in regards to their positioning.
          Use the <code className="nx-code">open</code> prop with caution
        </NxInfoAlert>
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
              <td className="nx-cell">title</td>
              <td className="nx-cell">React Node (e.g. VDOM or string)</td>
              <td className="nx-cell">Yes</td>
              <td className="nx-cell">The tooltip content. If empty, the tooltip is not shown.</td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">placement</td>
              <td className="nx-cell">"top" | "bottom" | "left" | "right" | "top-end" | "bottom-end"</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">
                Which side of the element the tooltip should render on. Defaults to top. "top" and "bottom" position
                the tooltip flush to the left edge of the element, while "top-end" and "bottom-end" position it flush
                to the right edge.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">className</td>
              <td className="nx-cell">string</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">
                A CSS class to apply to the tooltip element, to be used for customized styling
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">open</td>
              <td className="nx-cell">boolean</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">Whether the tooltip should be open initially. Defaults to false</td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">onOpen</td>
              <td className="nx-cell">Function</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">A callback function executed when the tooltip opens</td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">onClose</td>
              <td className="nx-cell">Function</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">A callback function executed when the tooltip closes</td>
            </tr>
          </tbody>
        </table>
      </GalleryDescriptionTile>
      <GalleryExampleTile title="Example" codeExamples={codeExamples}>
        <NxTooltipExample/>
      </GalleryExampleTile>
    </>
  );
}
