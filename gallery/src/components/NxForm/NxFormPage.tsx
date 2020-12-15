/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxTableHead, NxTableRow, NxTableCell, NxTable, NxTableBody, NxWarningAlert } from '@sonatype/react-shared-components';

import NxFormExample from './NxFormExample';
import NxFormCustomizedExample from './NxFormCustomizedExample';

const NxFormExampleCode = require('!raw-loader!!./NxFormExample').default,
    NxFormCustomizedExampleCode = require('!raw-loader!!./NxFormCustomizedExample').default;

const NxFormPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <code className="nx-code">NxForm</code> is an encapsulation of styles and typical behavior for
        a form within a Sonatype application. It helps manage the UI around the following behaviors.
      </p>
      <ul className="nx-list nx-list--bulleted">
        <li className="nx-list__item">
          <span className="nx-list__text">Standard form footer with submit and cancel buttons</span>
        </li>
        <li className="nx-list__item">
          <span className="nx-list__text">Initial loading including error and retry handling</span>
        </li>
        <li className="nx-list__item">
          <span className="nx-list__text">Form submission including the submit mask</span>
        </li>
        <li className="nx-list__item">
          <span className="nx-list__text">Form cancellation</span>
        </li>
        <li className="nx-list__item">
          <span className="nx-list__text">
            Form validation including disabling of submit button for invalid forms
          </span>
        </li>
      </ul>
      <NxTable>
        <NxTableHead>
          <NxTableRow>
            <NxTableCell>Prop</NxTableCell>
            <NxTableCell>Type</NxTableCell>
            <NxTableCell>Required</NxTableCell>
            <NxTableCell>Default</NxTableCell>
            <NxTableCell>Details</NxTableCell>
          </NxTableRow>
        </NxTableHead>
        <NxTableBody>
          <NxTableRow>
            <NxTableCell>loading</NxTableCell>
            <NxTableCell>boolean</NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell>false</NxTableCell>
            <NxTableCell>
              Set to true to display a loading spinner in place of the form. Only has an effect when used in
              conjunction with <code className="nx-code">doLoad</code>
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>doLoad</NxTableCell>
            <NxTableCell>Function</NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell>noop</NxTableCell>
            <NxTableCell>
              When this prop is defined, it indicates that some asynchronous, retryable data load must happen
              before the form can be displayed. The form is wrapped in an{' '}
              <a className="nx-text-link" href="#/pages/NxLoadWrapper">
                <code className="nx-code">NxLoadWrapper</code>
              </a>
              {' '}and this function is wired up to the retry button on the load error alert. Note that the
              initial load of the form data is expected to be triggered externally{' '}
              – <code className="nx-code">NxForm</code> only calls this function in response to the Retry button.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>onSubmit</NxTableCell>
            <NxTableCell>Function</NxTableCell>
            <NxTableCell>Yes</NxTableCell>
            <NxTableCell>N/A</NxTableCell>
            <NxTableCell>
              The function to invoke in response to the form submission. Note that to prevent browser-native
              form submission semantics (e.g. page reload) the form
              event's <code className="nx-code">preventDefault</code> method is called before this method is
              dispatched. This function does not receive the form submit event as an argument, because it may
              also be called in response to a click on the Retry button in the form submission error alert.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>onCancel</NxTableCell>
            <NxTableCell>Function</NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell>noop</NxTableCell>
            <NxTableCell>
              If this prop is defined, a Cancel button will be added to the form footer which triggers this function
              when clicked.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>loadError</NxTableCell>
            <NxTableCell>string</NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell>undefined</NxTableCell>
            <NxTableCell>
              If defined, the load wrapper's error alert will be displayed in place of the form, with this string
              as its error message. Only has an effect if <code className="nx-code">doLoad</code> is also defined.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>submitError</NxTableCell>
            <NxTableCell>string</NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell>undefined</NxTableCell>
            <NxTableCell>
              If defined, an error alert will be rendered in the form footer showing the corresponding message,
              along with a Retry button wired to the <code className="nx-code">onSubmit</code> handler.
              Additionally, the Submit button is hidden when this prop is defined.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>validationError</NxTableCell>
            <NxTableCell>string</NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell>undefined</NxTableCell>
            <NxTableCell>
              A form-wide validation error message which, when defined, is displayed as a tooltip on the Submit
              button. Additionally the submit button is disabled when present.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>submitBtnClasses</NxTableCell>
            <NxTableCell>string</NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell>empty</NxTableCell>
            <NxTableCell>Extra CSS classes to apply to the submit button</NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>submitBtnText</NxTableCell>
            <NxTableCell>string</NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell>Submit</NxTableCell>
            <NxTableCell>The text content of the submit button</NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>submitMaskState</NxTableCell>
            <NxTableCell>boolean</NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell>null</NxTableCell>
            <NxTableCell>
              If null, the submit mask is not shown. If true, the mask is shown in its "submitting" state. If
              false, the mask is shown in its "success" state.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>submitMaskMessage</NxTableCell>
            <NxTableCell>string</NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell>Submitting…</NxTableCell>
            <NxTableCell>
              The message to display in the submit mask while the form submission is pending
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>submitMaskSuccessMessage</NxTableCell>
            <NxTableCell>string</NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell>Success!</NxTableCell>
            <NxTableCell>
              The message to briefly display in the submit mask while the form submission has succeeded
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>submitMaskFullscreen</NxTableCell>
            <NxTableCell>boolean</NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell>true</NxTableCell>
            <NxTableCell>Whether to display the success mask fullscreen vs just covering the form</NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>additionalFooterBtns</NxTableCell>
            <NxTableCell>JSX</NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell>empty</NxTableCell>
            <NxTableCell>
              <p className="nx-p">
                Extra buttons to render in the form footer to the left of the Submit and Cancel buttons. These buttons
                would typically use tertiary button styling.
              </p>
              <NxWarningAlert>
                Do not forget that <code className="nx-code">&lt;button&gt;</code> elements, including those
                rendered by <code className="nx-code">NxButton</code>,
                have <code className="nx-code">type="submit"</code> by default. Therefore, in order to avoid these
                additional buttons submitting the form, care must be taken to
                add <code className="nx-code">type="button"</code> to each of them.
              </NxWarningAlert>
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>children</NxTableCell>
            <NxTableCell>JSX or (() => JSX)</NxTableCell>
            <NxTableCell>Yes</NxTableCell>
            <NxTableCell>N/A</NxTableCell>
            <NxTableCell>
              The form contents, excluding the footer which is provided by this component. Can be specified as a
              function in order to avoid rendering children before loading completes
            </NxTableCell>
          </NxTableRow>
        </NxTableBody>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Asynchronous Example"
                        id="nx-form-example"
                        codeExamples={NxFormExampleCode}
                        liveExample={NxFormExample}>
      This example shows an asynchronously loading NxForm. The example is contrived such that the
      form fails to load the first time, but does load (after a brief wait) upon a second attempt.
      Additionally, the first attempt to submit the form fails, while the retry succeeds.
    </GalleryExampleTile>

    <GalleryExampleTile title="Customized Example"
                        id="nx-form-customized-example"
                        codeExamples={NxFormCustomizedExampleCode}
                        liveExample={NxFormCustomizedExample}>
      This example demonstrates the various form props that can further customize the presentation of the form.
    </GalleryExampleTile>
  </>;

export default NxFormPage;
