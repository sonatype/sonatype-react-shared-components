/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { RefAttributes } from 'react';
import { fireEvent, render, within } from '@testing-library/react';
import { rtlRender, rtlRenderElement } from '../../../../__testutils__/rtlUtils';
import { userEvent } from '../../../../__testutils__/rtlUtils';

import NxStatefulTextInput, { PublicProps } from '../NxStatefulTextInput';
import NxForm from '../../../NxForm/NxForm';

describe('NxStatefulTextInput', function() {
  const minimalProps: PublicProps & RefAttributes<HTMLDivElement> = { defaultValue: '' },
      quickRender = rtlRender(NxStatefulTextInput, minimalProps),
      renderEl = rtlRenderElement(NxStatefulTextInput, minimalProps);

  it('renders an input with type="text" by default', function() {
    expect(quickRender().getByRole('textbox').tagName).toBe('INPUT');
    expect(quickRender().getByRole('textbox')).toHaveAttribute('type', 'text');
  });

  it('renders a password input if type is "password"', function() {
    // input type="password" don't have a role
    const inputEl = quickRender({ type: 'password' }).container.querySelector('input');

    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('type', 'password');
  });

  it('renders a textarea if type is "textarea"', function() {
    expect(quickRender({ type: 'textarea' }).getByRole('textbox').tagName).toBe('TEXTAREA');
  });

  it('sets ref on the input', function() {
    const ref = React.createRef<HTMLDivElement>(),
        el = renderEl({ ref });

    expect(ref.current).toBe(el);
  });

  it('adds specified classNames to the top-level element in addition to the defaults', function() {
    const el = renderEl({ className: 'foo' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('passes id, disabled, placeholder, aria-required, and aria-describedby to the input', function() {
    render(<p id="desc">Description</p>);

    const input = quickRender({
      id: 'foo',
      placeholder: 'place',
      disabled: true,
      'aria-required': true,
      'aria-describedby': 'desc'
    }).getByRole('textbox');

    expect(input).toHaveAttribute('id', 'foo');
    expect(input).toHaveAttribute('placeholder', 'place');
    expect(input).toHaveAttribute('disabled');
    expect(input).toHaveAttribute('aria-required', 'true');
    expect(input).toHaveAccessibleDescription('Description');
  });

  it('passes additional attrs to the top-level element', function() {
    const el = renderEl({ lang: 'en-US' });

    expect(el).toHaveAttribute('lang', 'en-US');
  });

  it('sets the value as specified', function() {
    expect(quickRender({ defaultValue: 'boo' }).getByRole('textbox')).toHaveValue('boo');
  });

  it('calls onChange with the value whenever the input\'s onChange event fires', async function() {
    const user = userEvent.setup(),
        onChange = jest.fn(),
        input = quickRender({ onChange }).getByRole('textbox');

    expect(onChange).not.toHaveBeenCalled();

    await user.type(input, 'a');

    expect(onChange).toHaveBeenCalledWith('a');
  });

  it('calls onKeyPress with the key value whenever the input\'s onKeyPress event fires', async function() {
    const user = userEvent.setup(),
        onKeyPress = jest.fn(),
        input = quickRender({ onKeyPress }).getByRole('textbox');

    expect(onKeyPress).not.toHaveBeenCalled();

    await user.type(input, 'a');

    expect(onKeyPress).toHaveBeenCalledWith('a');
  });

  it('updates the value and runs it through validator to update the validationErrors when value changes',
      async function() {
        const user = userEvent.setup(),
            validator = jest.fn()
                .mockImplementation(val => val === 'boo' ? null : 'expect boo'),
            component = quickRender({ validator }),
            input = component.getByRole('textbox');

        await user.type(input, 'b');

        expect(input).toHaveValue('b');
        expect(validator).toHaveBeenCalledWith('b');
        expect(component.getByRole('alert')).toHaveTextContent('expect boo');
        expect(input).toHaveAccessibleErrorMessage('expect boo');

        await user.type(input, 'oo');

        expect(input).toHaveValue('boo');
        expect(validator).toHaveBeenCalledWith('boo');
        expect(component.queryByRole('alert')).not.toBeInTheDocument();
        expect(input).not.toHaveAccessibleErrorMessage();
      }
  );

  describe('when not validatable', function() {
    const nonValidatableMinimalProps = { ...minimalProps };

    describe('when pristine', function() {
      const pristineMinimalProps = { ...nonValidatableMinimalProps };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps = pristineMinimalProps,
            quickRender = rtlRender(NxStatefulTextInput, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.getByRole('textbox')).not.toHaveAccessibleErrorMessage();
        });

        it('does not set aria-invalid on the input', function() {
          expect(quickRender().getByRole('textbox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<PublicProps>) {
            const renderResult = render(
                <NxForm showValidationErrors onSubmit={() => {}}>
                  <NxStatefulTextInput { ...nonValidatableMinimalProps } { ...extraProps } />
                </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('textbox')).not.toHaveAccessibleErrorMessage();
          });

          it('does not set aria-invalid on the input', function() {
            expect(quickRender().getByRole('textbox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });

    });

    describe('when not pristine', function() {
      const nonPristineMinimalProps = { ...nonValidatableMinimalProps };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps = nonPristineMinimalProps,
            quickRender = rtlRender(NxStatefulTextInput, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender(),
              input = component.getByRole('textbox');

          fireEvent.change(input, {target: {value: 'foo'}});

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.getByRole('textbox')).not.toHaveAccessibleErrorMessage();
        });

        it('does not set aria-invalid on the input', function() {
          const component = quickRender(),
              input = component.getByRole('textbox');

          fireEvent.change(input, {target: {value: 'foo'}});

          expect(input).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<PublicProps>) {
            const renderResult = render(
                <NxForm showValidationErrors onSubmit={() => {}}>
                  <NxStatefulTextInput { ...nonValidatableMinimalProps } { ...extraProps } />
                </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender(),
                input = component.getByRole('textbox');

            fireEvent.change(input, {target: {value: 'foo'}});

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('textbox')).not.toHaveAccessibleErrorMessage();
          });

          it('does not set aria-invalid on the input', function() {
            const component = quickRender(),
                input = component.getByRole('textbox');

            fireEvent.change(input, {target: {value: 'foo'}});

            expect(input).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });

    });
  });

  describe('when validatable', function() {
    const validatableMinimalProps = { ...minimalProps };

    describe('when pristine', function() {
      const pristineMinimalProps = { ...validatableMinimalProps };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps = pristineMinimalProps,
            quickRender = rtlRender(NxStatefulTextInput, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.getByRole('textbox')).not.toHaveAccessibleErrorMessage();
        });

        it('does not set aria-invalid on the input', function() {
          expect(quickRender().getByRole('textbox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<PublicProps>) {
            const renderResult = render(
                <NxForm showValidationErrors onSubmit={() => {}}>
                  <NxStatefulTextInput { ...validatableMinimalProps } { ...extraProps } />
                </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('textbox')).not.toHaveAccessibleErrorMessage();
          });

          it('does not set aria-invalid on the input', function() {
            expect(quickRender().getByRole('textbox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });

      describe('when there are validation errors', function() {
        const singleValidationErrorsMinimalProps =
            { ...pristineMinimalProps, validator: jest.fn().mockReturnValue('foo') },
            multiValidationErrorsMinimalProps =
            { ...pristineMinimalProps, validator: jest.fn().mockReturnValue(['bar', 'foo']) },
            singleRender = rtlRender(NxStatefulTextInput, singleValidationErrorsMinimalProps),
            multiRender = rtlRender(NxStatefulTextInput, multiValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const singleError = singleRender(),
              multiError = multiRender();

          expect(singleError.queryByRole('alert')).not.toBeInTheDocument();
          expect(singleError.getByRole('textbox')).not.toHaveAccessibleErrorMessage();

          expect(multiError.queryByRole('alert')).not.toBeInTheDocument();
          expect(multiError.getByRole('textbox')).not.toHaveAccessibleErrorMessage();
        });

        it('does not set aria-invalid on the input', function() {
          const singleError = singleRender(),
              multiError = multiRender();

          expect(singleError.getByRole('textbox')).not.toHaveAttribute('aria-invalid', 'true');
          expect(multiError.getByRole('textbox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<PublicProps>) {
            const renderResult = render(
                <NxForm showValidationErrors onSubmit={() => {}}>
                  <NxStatefulTextInput { ...validatableMinimalProps } { ...extraProps } />
                </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          const singleRender = () => quickRender(singleValidationErrorsMinimalProps),
              multiRender = () => quickRender(multiValidationErrorsMinimalProps);

          it('has non-empty validation alert and a11y error message based on the first error', function() {
            const singleError = singleRender(),
                multiError = multiRender();

            expect(singleError.getByRole('alert')).toHaveTextContent('foo');
            expect(singleError.getByRole('textbox')).toHaveAccessibleErrorMessage('foo');

            expect(multiError.getByRole('alert')).toHaveTextContent('bar');
            expect(multiError.getByRole('textbox')).toHaveAccessibleErrorMessage('bar');
          });

          it('sets aria-invalid on the input', function() {
            const singleError = singleRender(),
                multiError = multiRender();

            expect(singleError.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
            expect(multiError.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
          });
        });
      });
    });

    describe('when not pristine', function() {
      const nonPristineMinimalProps = { ...validatableMinimalProps };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps = nonPristineMinimalProps,
            quickRender = rtlRender(NxStatefulTextInput, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender(),
              input = component.getByRole('textbox');

          fireEvent.change(input, {target: {value: 'foo'}});

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.getByRole('textbox')).not.toHaveAccessibleErrorMessage();
        });

        it('does not set aria-invalid on the input', function() {
          const component = quickRender(),
              input = component.getByRole('textbox');

          fireEvent.change(input, {target: {value: 'foo'}});

          expect(input).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<PublicProps>) {
            const renderResult = render(
                <NxForm showValidationErrors onSubmit={() => {}}>
                  <NxStatefulTextInput { ...validatableMinimalProps } { ...extraProps } />
                </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender(),
                input = component.getByRole('textbox');

            fireEvent.change(input, {target: {value: 'foo'}});

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('textbox')).not.toHaveAccessibleErrorMessage();
          });

          it('does not set aria-invalid on the input', function() {
            const component = quickRender(),
                input = component.getByRole('textbox');

            fireEvent.change(input, {target: {value: 'foo'}});

            expect(quickRender().getByRole('textbox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });

      describe('when there are validation errors', function() {
        const singleValidationErrorsMinimalProps =
            { ...nonPristineMinimalProps, validator: jest.fn().mockReturnValue('foo') },
            multiValidationErrorsMinimalProps =
            { ...nonPristineMinimalProps, validator: jest.fn().mockReturnValue(['bar', 'foo']) },
            singleRender = rtlRender(NxStatefulTextInput, singleValidationErrorsMinimalProps),
            multiRender = rtlRender(NxStatefulTextInput, multiValidationErrorsMinimalProps);

        it('has non-empty validation alert and a11y error message based on the first error', function() {
          const singleError = singleRender(),
              multiError = multiRender(),
              singleErrorInput = singleError.getByRole('textbox'),
              multiErrorInput = multiError.getByRole('textbox');

          fireEvent.change(singleErrorInput, {target: {value: 'foo'}});
          fireEvent.change(multiErrorInput, {target: {value: 'foo'}});

          expect(singleError.getByRole('alert')).toHaveTextContent('foo');
          expect(singleError.getByRole('textbox')).toHaveAccessibleErrorMessage('foo');

          expect(multiError.getByRole('alert')).toHaveTextContent('bar');
          expect(multiError.getByRole('textbox')).toHaveAccessibleErrorMessage('bar');
        });

        it('sets aria-invalid on the input', function() {
          const singleError = singleRender(),
              multiError = multiRender(),
              singleErrorInput = singleError.getByRole('textbox'),
              multiErrorInput = multiError.getByRole('textbox');

          fireEvent.change(singleErrorInput, {target: {value: 'foo'}});
          fireEvent.change(multiErrorInput, {target: {value: 'foo'}});

          expect(singleErrorInput).toHaveAttribute('aria-invalid', 'true');
          expect(multiErrorInput).toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<PublicProps>) {
            const renderResult = render(
                <NxForm showValidationErrors onSubmit={() => {}}>
                  <NxStatefulTextInput { ...validatableMinimalProps } { ...extraProps } />
                </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          const singleRender = () => quickRender(singleValidationErrorsMinimalProps),
              multiRender = () => quickRender(multiValidationErrorsMinimalProps);

          it('has non-empty validation alert and a11y error message based on the first error', function() {
            const singleError = singleRender(),
                multiError = multiRender(),
                singleErrorInput = singleError.getByRole('textbox'),
                multiErrorInput = multiError.getByRole('textbox');

            fireEvent.change(singleErrorInput, {target: {value: 'foo'}});
            fireEvent.change(multiErrorInput, {target: {value: 'foo'}});

            expect(singleError.getByRole('alert')).toHaveTextContent('foo');
            expect(singleError.getByRole('textbox')).toHaveAccessibleErrorMessage('foo');

            expect(multiError.getByRole('alert')).toHaveTextContent('bar');
            expect(multiError.getByRole('textbox')).toHaveAccessibleErrorMessage('bar');
          });

          it('sets aria-invalid on the input', function() {
            const singleError = singleRender(),
                multiError = multiRender(),
                singleErrorInput = singleError.getByRole('textbox'),
                multiErrorInput = multiError.getByRole('textbox');

            fireEvent.change(singleErrorInput, {target: {value: 'foo'}});
            fireEvent.change(multiErrorInput, {target: {value: 'foo'}});

            expect(singleErrorInput).toHaveAttribute('aria-invalid', 'true');
            expect(multiErrorInput).toHaveAttribute('aria-invalid', 'true');
          });
        });
      });
    });
  });
});
