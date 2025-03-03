/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { userEvent } from '../../../__testutils__/rtlUtils';
import { render, within } from '@testing-library/react';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import NxColorPicker, { Props } from '../NxColorPicker';
import { selectableColors } from '../../../util/selectableColors';
import NxForm from '../../NxForm/NxForm';

describe('NxColorPicker', function() {
  const minimalProps = { label: 'My Color Picker' },
      quickRender = rtlRender<Props>(NxColorPicker, minimalProps),
      renderEl = rtlRenderElement<Props>(NxColorPicker, minimalProps);

  it('renders a fieldset with the specified attributes', function() {
    const el = renderEl({ id: 'foo', lang: 'en' })!;

    expect(el.tagName).toBe('FIELDSET');
    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('lang', 'en');
  });

  it('adds any custom classes to the fieldset', function() {
    const el = renderEl({ className: 'foo' })!,
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('names the fieldset according to the label prop', function() {
    const fieldset = renderEl()!;

    expect(fieldset).toHaveAccessibleName('My Color Picker');
  });

  it('renders a radio for each color, named after the color and the color picker label', function() {
    const view = quickRender();

    expect(view.getAllByRole('radio')).toHaveLength(selectableColors.length);

    for (const selectableColor of selectableColors) {
      expect(view.getByRole('radio', { name: new RegExp(`My Color Picker ${selectableColor}`, 'i') }))
          .toBeInTheDocument();
    }
  });

  it('sets the checked attr to true on the radio matching the value prop', function() {
    const noneSelectedView = quickRender(),
        turquoiseSelectedView = quickRender({ value: 'turquoise' });

    expect(noneSelectedView.queryByRole('radio', { checked: true })).not.toBeInTheDocument();

    expect(turquoiseSelectedView.queryByRole('radio', { checked: true })).toHaveAccessibleName(/turquoise/i);
  });

  it('fires its onChange handler with the color of the clicked radio', async function() {
    const user = userEvent.setup(),
        onChange = jest.fn(),
        view = quickRender({ onChange }),
        radio = view.getByRole('radio', { name: /turquoise/i });

    expect(onChange).not.toHaveBeenCalled();

    await user.click(radio);

    expect(onChange).toHaveBeenCalledWith('turquoise');
  });

  it('does nothing when an input is clicked with no onChange prop', async function() {
    const user = userEvent.setup(),
        view = quickRender(),
        radio = view.getByRole('radio', { name: /turquoise/i });

    await user.click(radio);
  });

  describe('validation', function() {
    it('adds an alert with the first specified validation message when isPristine is false', function() {
      expect(quickRender().queryByRole('alert')).not.toBeInTheDocument();
      expect(quickRender({ isPristine: true, validationErrors: 'asdf' }).queryByRole('alert')).not.toBeInTheDocument();
      expect(quickRender({ isPristine: true }).queryByRole('alert')).not.toBeInTheDocument();

      const withValidationErrors = quickRender({ isPristine: false, validationErrors: ['asdf', 'zxcv'] }),
          validationErrorEl = withValidationErrors.getByRole('alert');

      expect(validationErrorEl).toHaveTextContent('asdf');
    });

    it('adds an alert with the first specified validation message when within an NxForm with showValidationErrors',
        function() {
          function renderWithForm(showValidationErrors: boolean, props?: Partial<Props>) {
            return render(
                <NxForm onSubmit={() => {}} showValidationErrors={showValidationErrors}>
                  <NxColorPicker { ...minimalProps } { ...props } />
                </NxForm>
            );
          }

          expect(renderWithForm(true).queryByRole('alert')).not.toBeInTheDocument();

          const withValidationErrors = renderWithForm(true, { validationErrors: ['asdf', 'zxcv'] }),
              validationErrorEl = withValidationErrors.getByRole('alert');

          expect(validationErrorEl).toHaveTextContent('asdf');
        }
    );

    it('sets the validation error as the accessible description of the fieldset', function() {
      expect(renderEl()).not.toHaveAccessibleDescription();
      expect(renderEl({ isPristine: true, validationErrors: 'asdf' })).not.toHaveAccessibleDescription();
      expect(renderEl({ isPristine: true })).not.toHaveAccessibleDescription();
      expect(renderEl({ isPristine: false, validationErrors: ['asdf', 'zxcv'] })).toHaveAccessibleDescription('asdf');

      const formView = render(
          <NxForm onSubmit={() => {}} showValidationErrors={true}>
            <NxColorPicker { ...minimalProps } validationErrors="asdf" />
          </NxForm>
      );

      expect(within(formView.container).getByRole('group')).toHaveAccessibleDescription('asdf');
    });
  });
});
