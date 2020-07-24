/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile, GalleryTile} from '../../gallery-components/GalleryTiles';

import NxStatefulAlertExample from './NxStatefulAlertExample';
import NxStatefulErrorAlertExample from './NxStatefulErrorAlertExample';
import NxStatefulWarningAlertExample from './NxStatefulWarningAlertExample';
import NxStatefulInfoAlertExample from './NxStatefulInfoAlertExample';
import NxStatefulSuccessAlertExample from './NxStatefulSuccessAlertExample';

const nxStatefulErrorAlertExampleCode = require('!!raw-loader!./NxStatefulErrorAlertExample').default,
    nxStatefulInfoAlertExampleCode = require('!!raw-loader!./NxStatefulInfoAlertExample').default,
    nxStatefulSuccessAlertExampleCode = require('!!raw-loader!./NxStatefulSuccessAlertExample').default,
    nxStatefulWarningAlertExampleCode = require('!!raw-loader!./NxStatefulWarningAlertExample').default,
    nxStatefulAlertExampleCode = require('!!raw-loader!./NxStatefulAlertExample').default;

const NxStatefulAlertPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        A Stateful version of generic alert that tracks its own dismissal state. It contains preconfigured variations
        for the info, warning, error, and success styles.
      </p>
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
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Alert Example"
                        id="nx-alert-custom-example"
                        liveExample={NxStatefulAlertExample}
                        codeExamples={nxStatefulAlertExampleCode}>
      An example of a simple alert which adds a custom modifier class.
    </GalleryExampleTile>

    <GalleryTile title="NxStatefulErrorAlert, etc.">
      <p className="nx-p">Standard sonatype alerts.</p>
      <p className="nx-p">They come in four variations: Error, Info, Warning, and Success.</p>
      <p className="nx-p">
        Accepts any prop that is valid on a div.
      </p>
    </GalleryTile>

    <GalleryExampleTile title="Success Alert Example"
                        id="nx-alert-success-example"
                        liveExample={NxStatefulSuccessAlertExample}
                        codeExamples={nxStatefulSuccessAlertExampleCode}>
      An example of an alert demonstrating success styling.
    </GalleryExampleTile>

    <GalleryExampleTile title="Error Alert Example"
                        id="nx-alert-error-example"
                        liveExample={NxStatefulErrorAlertExample}
                        codeExamples={nxStatefulErrorAlertExampleCode}>
      An example of an alert demonstrating error styling.
    </GalleryExampleTile>

    <GalleryExampleTile title="Info Alert Example"
                        id="nx-alert-info-example"
                        liveExample={NxStatefulInfoAlertExample}
                        codeExamples={nxStatefulInfoAlertExampleCode}>
      An example of an alert demonstrating information styling.
    </GalleryExampleTile>

    <GalleryExampleTile title="Warning Alert Example"
                        id="nx-alert-warning-example"
                        liveExample={NxStatefulWarningAlertExample}
                        codeExamples={nxStatefulWarningAlertExampleCode}>
      An example of an alert demonstrating warning styling.
    </GalleryExampleTile>
  </>;

export default NxStatefulAlertPage;
