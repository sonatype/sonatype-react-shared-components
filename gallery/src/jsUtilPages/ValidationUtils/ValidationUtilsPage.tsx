/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryExampleTile, GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

const validationErrorsExampleCode = require('./ValidationErrorsExample?raw'),
    hasValidationErrorsExampleCode = require('./HasValidationErrorsExample?raw'),
    getFirstValidationErrorExampleCode = require('./GetFirstValidationErrorExample?raw'),
    combineValidationErrorsExampleCode = require('./CombineValidationErrorsExample?raw');

const ValidationUtilsPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Some of the form-related components provided by RSC, such as <NxCode>NxTextInput</NxCode>,
        have support for validation logic. Typically, when building a form using these components, it is desired to
        have certain form-level logic based around the validation status of the form's fields. For instance, the
        form's "Submit" button might be disabled when a field is invalid. To assist with this sort of pattern,
        RSC provides a few helper functions and types around the validation related data types that the form fields
        rely on. See the <a href="#/pages/Form%20Validation%20Guidelines">Form Validation Example</a> as a
        demonstration of some of these types and functions in use.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="ValidationErrors"
                        codeExamples={validationErrorsExampleCode}>
      The <NxCode>ValidationErrors</NxCode> data type is essentially zero or more
      validation error message strings. More precisely, it is a union type which can be either
      a single string, an array of strings, or null. If it is null or an empty array, the
      intended semantics are that no error is represented and the validation was successful.
    </GalleryExampleTile>

    <GalleryExampleTile title="hasValidationErrors"
                        codeExamples={hasValidationErrorsExampleCode}>
      <NxCode>hasValidationErrors</NxCode> is a function which returns whether
      the specified <NxCode>ValidationErrors</NxCode> represents an error.
    </GalleryExampleTile>

    <GalleryExampleTile title="getFirstValidationError"
                        codeExamples={getFirstValidationErrorExampleCode}>
      <NxCode>getFirstValidationError</NxCode> returns the first message from
      the given <NxCode>ValidationErrors</NxCode> or null if none are present.
      This is the logic that <NxCode>NxTextInput</NxCode> follows internally to
      select which validation error message to display.
    </GalleryExampleTile>

    <GalleryExampleTile title="combineValidationErrors"
                        codeExamples={combineValidationErrorsExampleCode}>
      <NxCode>combineValidationErrors</NxCode> takes a series
      of <NxCode>ValidationErrors</NxCode> objects as arguments and returns a
      single <NxCode>ValidationErrors</NxCode> object containing all of the errors in those
      arguments, in the same order.
    </GalleryExampleTile>
  </>;

export default ValidationUtilsPage;
