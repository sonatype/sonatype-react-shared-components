/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { render } from '@testing-library/react';
import { pipe } from 'ramda';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import NxFileUpload from '../NxFileUpload';
import NxForm from '../../NxForm/NxForm';

describe('NxFileUpload', function() {
  const minimalProps = {
        files: null,
        onChange: () => {}
      },
      quickRender = rtlRender(NxFileUpload, minimalProps),
      renderEl = rtlRenderElement(NxFileUpload, minimalProps),
      renderInput = pipe(renderEl, el => el?.querySelector('input[type=file]'));

  it('renders a file input and a button', function() {
    const component = quickRender(),

        // file inputs have no aria role and the label text is outside of the scope of this component,
        // so we have to query like this
        input = component.container.querySelector('input[type=file]'),
        button = component.queryByRole('button', { name: 'Choose File' });

    expect(input).toBeDefined();
    expect(button).toBeDefined();

    // cannot effectively test that the button activates the input here, will do in functional test
  });

  it('renders a "No file selected" message if files is null', function() {
    expect(renderEl()).toHaveTextContent('No file selected');
  });

  it('shows an error when there is no file selected, if it isRequired is not isPristine', function() {
    expect(quickRender().queryByRole('alert')).not.toBeTruthy();
    expect(quickRender({ isPristine: true }).queryByRole('alert')).not.toBeTruthy();
    expect(quickRender({ isRequired: true, isPristine: true }).queryByRole('alert')).not.toBeTruthy();

    expect(quickRender({ isRequired: true, isPristine: false }).queryByRole('alert'))
        .toHaveTextContent('This field is Required!');
  });

  it('shows an error when in a form with showValidationErrors if it is isRequired and no file is selected', function() {
    const renderWithForm = render(
      <NxForm onSubmit={() => {}} showValidationErrors={true}>
        <NxFileUpload { ...minimalProps } isRequired={true} />
      </NxForm>
    );

    expect(renderWithForm.queryByRole('alert')).toBeTruthy();
    expect(renderWithForm.queryByRole('alert')).toHaveTextContent('This field is Required!');
  });

  it('sets aria-required on the input if isRequired is true', function() {
    expect(renderInput()?.getAttribute('aria-required')).not.toBe('true');
    expect(renderInput({ isRequired: false })?.getAttribute('aria-required')).not.toBe('true');
    expect(renderInput({ isRequired: true })?.getAttribute('aria-required')).toBe('true');
  });

  it('sets aria-invalid on the input when there is no file selected, if it isRequired is not isPristine', function() {
    expect(renderInput()?.getAttribute('aria-invalid')).not.toBe('true');
    expect(renderInput({ isPristine: true })?.getAttribute('aria-invalid')).not.toBe('true');
    expect(renderInput({ isRequired: true, isPristine: true })?.getAttribute('aria-invalid')).not.toBe('true');

    expect(renderInput({ isRequired: true, isPristine: false })?.getAttribute('aria-invalid')).toBe('true');
  });

  it('sets aria-errormessage on the input to the id of the validation error, when present', function() {
    expect(renderInput()).not.toHaveErrorMessage();
    expect(renderInput({ isPristine: true })).not.toHaveErrorMessage();
    expect(renderInput({ isRequired: true, isPristine: true })).not.toHaveErrorMessage();

    expect(renderInput({ isRequired: true, isPristine: false })).toHaveErrorMessage('This field is Required!');
  });

  it('attaches a ref to the top-level element', function() {
    const ref = React.createRef<HTMLDivElement>(),
        renderedEl = renderEl({ ref });

    expect(ref.current).toBe(renderedEl);
  });

  // Everything that involves actually selecting a file cannot be cleanly tested in RTL, will be done in
  // functional tests
});
