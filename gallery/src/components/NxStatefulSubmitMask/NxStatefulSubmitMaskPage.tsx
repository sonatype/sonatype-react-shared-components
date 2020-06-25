/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import { GalleryTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';
import NxStatefulSubmitMaskExample from './NxStatefulSubmitMaskExample';
import NxStatefulSubmitMaskCustomMessageExample from './NxStatefulSubmitMaskCustomMessageExample';
import NxStatefulSubmitMaskFullscreenExample from './NxStatefulSubmitMaskFullscreenExample';

const NxStatefulSubmitMaskCode = require('!!raw-loader!./NxStatefulSubmitMaskExample').default,
    NxStatefulSubmitMaskCustomMessageCode = require('!!raw-loader!./NxStatefulSubmitMaskCustomMessageExample').default,
    NxStatefulSubmitMaskFullscreenCode = require('!!raw-loader!./NxStatefulSubmitMaskFullscreenExample').default;

const NxStatefulSubmitMaskPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        This is a wrapper around <code className="nx-code">NxSubmitMask</code> which manages the display and then
        hiding of the success phase of the mask.
      </p>
      <p className="nx-p">
        The externally visible "success" state, specified by setting the <code className="nx-code">success</code> prop
        to true, encompasses two interally-managed states: the actual, visible success state, and then the automatic
        removal of the mask after the success state has been visible for a brief time.  Since this component manages
        these states internally, from an external perspective "success" is the end state
      </p>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row nx-table-row--header">
            <th className="nx-cell nx-cell--header">Prop</th>
            <th className="nx-cell nx-cell--header">Type</th>
            <th className="nx-cell nx-cell--header">Required</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row nx-table-row--header">
            <td className="nx-cell">fullscreen</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Whether to display the mask fullscreen. When it is displayed fullscreen, it is still bound to the same
              place in the DOM and uses CSS to achieve the fullscreen effect. Defaults to false.
            </td>
          </tr>
          <tr className="nx-table-row nx-table-row--header">
            <td className="nx-cell">success</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Whether the mask should display as a success. When true, the loading spinner will not be present,
              the mask will have green styling, and the <code className="nx-code">successMessage</code> will be used
              instead of the <code className="nx-code">message</code> as described below. In this stateful component,
              the success state will only be visible briefly and then will automatically hide. Defaults to false
            </td>
          </tr>
          <tr className="nx-table-row nx-table-row--header">
            <td className="nx-cell">message</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              The text to display inside of the mask when <code className="nx-code">success</code> is false.  Defaults
              to "Loading…"
            </td>
          </tr>
          <tr className="nx-table-row nx-table-row--header">
            <td className="nx-cell">successMessage</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              The text to display inside of the mask when <code className="nx-code">success</code> is true. Defaults
              to "Success!"
            </td>
          </tr>
        </tbody>
      </table>
      <p className="nx-p">
        The examples on this page each start in a non-success state for five seconds before being updated to the
        success state
      </p>
    </GalleryDescriptionTile>

    <GalleryTile title="Simple Example">
      <NxStatefulSubmitMaskExample />
      <CodeExample content={NxStatefulSubmitMaskCode}/>
    </GalleryTile>
    <GalleryTile title="Custom Message Example">
      <NxStatefulSubmitMaskCustomMessageExample />
      <CodeExample content={NxStatefulSubmitMaskCustomMessageCode}/>
    </GalleryTile>
    <GalleryTile title="Fullscreen Example">
      <NxStatefulSubmitMaskFullscreenExample />
      <CodeExample content={NxStatefulSubmitMaskFullscreenCode}/>
    </GalleryTile>
  </>;

export default NxStatefulSubmitMaskPage;
