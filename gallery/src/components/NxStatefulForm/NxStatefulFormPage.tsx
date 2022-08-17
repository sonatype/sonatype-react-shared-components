/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxCode, NxH3, NxTile, NxInfoAlert, NxTextLink } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxStatefulFormExample from './NxStatefulFormExample';

const NxStatefulFormExampleCode = require('./NxStatefulFormExample?raw');

const NxStatefulFormPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxStatefulForm</NxCode> is a stateful wrapper of{' '}
        <NxCode><NxTextLink href="#/pages/Form">NxForm</NxTextLink></NxCode> which implements the logic around when
        to show the form-wide validation errors.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Props</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          <NxCode>NxStatefulForm</NxCode> takes the same props as <NxCode>NxForm</NxCode>, except that it
          does not take <NxCode>showValidationErrors</NxCode>. It therefore can function as a drop-in replacement
          for pre-RSC-11.0.0 <NxCode>NxForm</NxCode> in cases where showing the validation error does not need to
          tie into other application logic.
        </NxP>
        <NxInfoAlert>
          Unlike <NxCode>NxForm</NxCode>, <NxCode>NxStatefulForm</NxCode> will only call its <NxCode>onSubmit</NxCode>
          {' '}callback if there are no validation errors when the submission is attempted.
        </NxInfoAlert>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Validation Behaviors</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          RSC forms have a number of validation behaviors. Validation errors can be present on individual
          form fields and/or on the form as a whole. On individual fields, validation error messages are displayed
          in small red text underneath of the field whenever the field is not pristine or a submission of the form
          has been attempted. For instance, when the user first arrives at a form, no validation errors are shown, even
          if the initial values of some fields are not valid. If the user then attempts to immediately submit the form
          however, all current individual field validation errors would become visible. Alternatively, if they edit a
          field but leave it with an invalid value, that field's validation error would become visible.
        </NxP>
        <NxP>
          In addition to each field's validation errors, the form overall may have validation errors. These errors
          display within the form footer. Like the individual field validation errors, this overall error is not
          displayed upon the form's initial load and is only displayed once the user attempts to submit the form.
          Once the user takes whatever action is necessary to fix the form-level validation error, any new form-level
          validation errors also do not display until the user again attempts to submit the form.
        </NxP>
        <NxP>
          <NxCode>NxStatefulForm</NxCode> automatically manages the logic of when to show the validation errors
          described above. This is the primary benefit of using <NxCode>NxStatefulForm</NxCode> over
          plain <NxCode>NxForm</NxCode>.
        </NxP>
        <NxP>
          As an additional important aspect of form validation, note that the form-level validation error must function
          as a "roll-up" of the individual field validation errors.  That is, if any fields have an active validation
          error, then the form overall should also have a validation error, though it does not need to be worded
          identically. The overall effect being that when the user attempts to submit the form, they see the form
          validation error in the footer (near the Submit button that they just clicked) <em>and</em> see a field
          validation error on the field(s) that are the cause of the problem. There may also be some cases where
          form-level validation errors are appropriate even in the absence of any field validation errors.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Asynchronous Example"
                        id="nx-form-stateful-example"
                        codeExamples={NxStatefulFormExampleCode}
                        liveExample={NxStatefulFormExample}>
      This example shows an asynchronously loading NxStatefulForm. The example is contrived such that the
      form fails to load the first time, but does load (after a brief wait) upon a second attempt.
      Additionally, the first attempt to submit the form fails, while the retry succeeds. This example is highly
      similar to the analogous <NxCode>NxForm</NxCode> example. The two may be compared in order to gain an
      understanding of the additional logic necessary to implement validation with <NxCode>NxForm</NxCode> which
      {' '}<NxCode>NxStatefulForm</NxCode> handles automatically.
    </GalleryExampleTile>
  </>;

export default NxStatefulFormPage;
