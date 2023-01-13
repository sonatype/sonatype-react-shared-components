/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { RefAttributes } from 'react';
import { render, within } from '@testing-library/react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import { userEvent } from '../../../__testutils__/rtlUtils';

import NxTextInput, { PublicProps } from '../NxTextInput';
import NxForm from '../../NxForm/NxForm';

describe('NxTextInput', function() {
  const minimalProps: PublicProps & RefAttributes<HTMLDivElement> = {
        value: '',
        isPristine: false
      },
      quickRender = rtlRender(NxTextInput, minimalProps),
      renderEl = rtlRenderElement(NxTextInput, minimalProps);

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

  it('passes additional attrs to the input', function() {
    const input = quickRender({ id: 'foo', lang: 'en-US' }).getByRole('textbox');

    expect(input).toHaveAttribute('id', 'foo');
    expect(input).toHaveAttribute('lang', 'en-US');
  });

  it('sets the value as specified', function() {
    expect(quickRender({ value: 'boo' }).getByRole('textbox')).toHaveValue('boo');
  });

  it('sets disabled on the input when the disabled prop is true', function() {
    expect(quickRender().getByRole('textbox')).not.toBeDisabled();
    expect(quickRender({ disabled: undefined }).getByRole('textbox')).not.toBeDisabled();
    expect(quickRender({ disabled: false }).getByRole('textbox')).not.toBeDisabled();
    expect(quickRender({ disabled: true }).getByRole('textbox')).toBeDisabled();
  });

  it('calls onChange with the value whenever the input\'s onChange event fires', async function() {
    const user = userEvent.setup(),
        onChange = jest.fn().mockImplementation((_, evt) => { evt.persist(); }),
        input = quickRender({ onChange }).getByRole('textbox');

    expect(onChange).not.toHaveBeenCalled();

    await user.type(input, 'a');

    expect(onChange).toHaveBeenCalledWith('a', expect.objectContaining({ target: input }));
  });

  it('calls onKeyPress with the key value whenever the input\'s onKeyPress event fires', async function() {
    const user = userEvent.setup(),
        onKeyPress = jest.fn(),
        input = quickRender({ onKeyPress }).getByRole('textbox');

    expect(onKeyPress).not.toHaveBeenCalled();

    await user.type(input, 'a');

    expect(onKeyPress).toHaveBeenCalledWith('a');
  });

  describe('when not validatable', function() {
    const nonValidatableMinimalProps = { ...minimalProps, validatable: false };

    describe('when pristine', function() {
      const pristineMinimalProps = { ...nonValidatableMinimalProps, isPristine: true };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps = pristineMinimalProps,
            quickRender = rtlRender(NxTextInput, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.getByRole('textbox')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the input', function() {
          expect(quickRender().getByRole('textbox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<PublicProps>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxTextInput { ...nonValidatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('textbox')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the input', function() {
            expect(quickRender().getByRole('textbox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });

      describe('when there are validation errors', function() {
        const singleValidationErrorsMinimalProps =
            { ...pristineMinimalProps, validationErrors: 'foo' },
            multiValidationErrorsMinimalProps =
            { ...pristineMinimalProps, validationErrors: ['bar', 'foo'] },
            singleRender = rtlRender(NxTextInput, singleValidationErrorsMinimalProps),
            multiRender = rtlRender(NxTextInput, multiValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const singleError = singleRender(),
              multiError = multiRender();

          expect(singleError.queryByRole('alert')).not.toBeInTheDocument();
          expect(singleError.getByRole('textbox')).not.toHaveErrorMessage();

          expect(multiError.queryByRole('alert')).not.toBeInTheDocument();
          expect(multiError.getByRole('textbox')).not.toHaveErrorMessage();
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
                <NxTextInput { ...nonValidatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('textbox')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the input', function() {
            expect(quickRender().getByRole('textbox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });
    });

    describe('when not pristine', function() {
      const nonPristineMinimalProps = { ...nonValidatableMinimalProps, isPristine: false };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps = nonPristineMinimalProps,
            quickRender = rtlRender(NxTextInput, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.getByRole('textbox')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the input', function() {
          expect(quickRender().getByRole('textbox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<PublicProps>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxTextInput { ...nonValidatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('textbox')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the input', function() {
            expect(quickRender().getByRole('textbox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });

      describe('when there are validation errors', function() {
        const singleValidationErrorsMinimalProps =
            { ...nonPristineMinimalProps, validationErrors: 'foo' },
            multiValidationErrorsMinimalProps =
            { ...nonPristineMinimalProps, validationErrors: ['bar', 'foo'] },
            singleRender = rtlRender(NxTextInput, singleValidationErrorsMinimalProps),
            multiRender = rtlRender(NxTextInput, multiValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const singleError = singleRender(),
              multiError = multiRender();

          expect(singleError.queryByRole('alert')).not.toBeInTheDocument();
          expect(singleError.getByRole('textbox')).not.toHaveErrorMessage();

          expect(multiError.queryByRole('alert')).not.toBeInTheDocument();
          expect(multiError.getByRole('textbox')).not.toHaveErrorMessage();
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
                <NxTextInput { ...nonValidatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('textbox')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the input', function() {
            expect(quickRender().getByRole('textbox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });
    });
  });

  describe('when validatable', function() {
    const validatableMinimalProps = { ...minimalProps, validatable: true };

    describe('when pristine', function() {
      const pristineMinimalProps = { ...validatableMinimalProps, isPristine: true };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps = pristineMinimalProps,
            quickRender = rtlRender(NxTextInput, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.getByRole('textbox')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the input', function() {
          expect(quickRender().getByRole('textbox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<PublicProps>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxTextInput { ...validatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('textbox')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the input', function() {
            expect(quickRender().getByRole('textbox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });

      describe('when there are validation errors', function() {
        const singleValidationErrorsMinimalProps =
            { ...pristineMinimalProps, validationErrors: 'foo' },
            multiValidationErrorsMinimalProps =
            { ...pristineMinimalProps, validationErrors: ['bar', 'foo'] },
            singleRender = rtlRender(NxTextInput, singleValidationErrorsMinimalProps),
            multiRender = rtlRender(NxTextInput, multiValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const singleError = singleRender(),
              multiError = multiRender();

          expect(singleError.queryByRole('alert')).not.toBeInTheDocument();
          expect(singleError.getByRole('textbox')).not.toHaveErrorMessage();

          expect(multiError.queryByRole('alert')).not.toBeInTheDocument();
          expect(multiError.getByRole('textbox')).not.toHaveErrorMessage();
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
                <NxTextInput { ...validatableMinimalProps } { ...extraProps } />
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
            expect(singleError.getByRole('textbox')).toHaveErrorMessage('foo');

            expect(multiError.getByRole('alert')).toHaveTextContent('bar');
            expect(multiError.getByRole('textbox')).toHaveErrorMessage('bar');
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
      const nonPristineMinimalProps = { ...validatableMinimalProps, isPristine: false };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps = nonPristineMinimalProps,
            quickRender = rtlRender(NxTextInput, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.getByRole('textbox')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the input', function() {
          expect(quickRender().getByRole('textbox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<PublicProps>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxTextInput { ...validatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('textbox')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the input', function() {
            expect(quickRender().getByRole('textbox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });

      describe('when there are validation errors', function() {
        const singleValidationErrorsMinimalProps =
            { ...nonPristineMinimalProps, validationErrors: 'foo' },
            multiValidationErrorsMinimalProps =
            { ...nonPristineMinimalProps, validationErrors: ['bar', 'foo'] },
            singleRender = rtlRender(NxTextInput, singleValidationErrorsMinimalProps),
            multiRender = rtlRender(NxTextInput, multiValidationErrorsMinimalProps);

        it('has non-empty validation alert and a11y error message based on the first error', function() {
          const singleError = singleRender(),
              multiError = multiRender();

          expect(singleError.getByRole('alert')).toHaveTextContent('foo');
          expect(singleError.getByRole('textbox')).toHaveErrorMessage('foo');

          expect(multiError.getByRole('alert')).toHaveTextContent('bar');
          expect(multiError.getByRole('textbox')).toHaveErrorMessage('bar');
        });

        it('sets aria-invalid on the input', function() {
          const singleError = singleRender(),
              multiError = multiRender();

          expect(singleError.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
          expect(multiError.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<PublicProps>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxTextInput { ...validatableMinimalProps } { ...extraProps } />
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
            expect(singleError.getByRole('textbox')).toHaveErrorMessage('foo');

            expect(multiError.getByRole('alert')).toHaveTextContent('bar');
            expect(multiError.getByRole('textbox')).toHaveErrorMessage('bar');
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
  });
});
