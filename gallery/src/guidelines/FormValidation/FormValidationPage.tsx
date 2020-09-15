/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import FormValidationExample from './FormValidationExample';

const FormValidationCode = require('!!raw-loader!./FormValidationExample').default;

const FormValidationPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        This page demonstrates the typical overall approach to communicating form validation matters to the user.
        There are several things to note here:
      </p>
      <ul className="nx-list nx-list--bulleted">
        <li className="nx-list__item">
          Fields are not marked invalid while they are pristine. This is handled by
          the <code className="nx-code">NxTextInput</code> state helpers.
        </li>
        <li className="nx-list__item">
          Optional text fields are declared to the user using
          the <code className="nx-code">nx-label--optional</code> class which adds the <q>- optional</q> text.
          All fields not marked optional are required. This does not apply to checkbox groups where selecting
          nothing is generally just as valid as any other selection.
        </li>
        <li className="nx-list__item">
          Until all required fields have values, and all values pass validation, the Submit button is disabled
          and provides a tooltip on hover explaining why.
        </li>
        <li className="nx-list__item">
          Non-pristine fields which are invalid get a red border and a red tooltip displaying the validation error.
          This tooltip is visible until the field becomes valid, as opposed to being hover-triggered. This behavior
          is implemented by <code className="nx-code">NxTextInput</code>
        </li>
      </ul>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        codeExamples={FormValidationCode}
                        liveExample={FormValidationExample}>
      This example shows how typical form validation logic should be set up. It includes validation of individual
      elements and management of the submit button. The first input has validation that it is non-empty. The second
      input has no validation. The third input has validation that it is non-empty and also validation that it contains
      no dollar signs.
    </GalleryExampleTile>
  </>;

export default FormValidationPage;
