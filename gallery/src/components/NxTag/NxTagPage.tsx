/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxTagExample from './NxTagExample';

const NxTagExampleCode = require('!!raw-loader!./NxTagExample').default;

const NxTagPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">Generic alert.</p>
      <p className="nx-p">Handy for DIY alert variations</p>
      <p className="nx-p">Accepts any prop that is valid on a div as well as the following:</p>
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
            <td className="nx-cell">icon</td>
            <td className="nx-cell">FontAwesome's Icons</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">
              A FontAwesome icon to use in the alert message
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">iconLabel</td>
            <td className="nx-cell">string</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              Brief descriptive text to apply to the icon using
              the <code className="nx-code">aria-label</code> attribute. Optional for backwards compatibility, but
              strongly recommended.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">onClose</td>
            <td className="nx-cell">Function</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              A handler that dismisses the alert when called. If this prop is present, a close button will be rendered
              at the right-hand side of the alert. When that button is clicked, this callback will be fired. Note that
              while this callback (and button) are optional, our UX patterns call for almost all alerts to be
              dismissable in some way. Therefore, an <code className="nx-code">onClose</code> callback should
              be provided, unless some other mechanism for closing the alert is provided within the alert children.
              A "Retry" button would be an example of such an alternative mechanism. Conversely, in the
              case where such an alternative mechanism is present, the <code className="nx-code">onClose</code>
              callback <em>should not</em> be provided.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="NxTag Example"
                        id="nx-tag-example"
                        liveExample={NxTagExample}
                        codeExamples={NxTagExampleCode}>
      An example of a simple tag.
    </GalleryExampleTile>

  </>;

export default NxTagPage;
