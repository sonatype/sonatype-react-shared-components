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

import NxStatefulDateInput, { Props } from '../NxStatefulDateInput';
import NxForm from '../../../NxForm/NxForm';

describe('NxStatefulDateInput', function() {
  const minimalProps: Props & RefAttributes<HTMLDivElement> = {
        defaultValue: '1990-11-11'
      },
      quickRender = rtlRender(NxStatefulDateInput, minimalProps),
      renderEl = rtlRenderElement(NxStatefulDateInput, minimalProps);

  it('renders an input with type="date" by default', function() {
    expect(quickRender().container.querySelector('input')).toHaveAttribute('type', 'date');
  });

  it('renders input and ignores the type attribute', function() {
    const { container } = quickRender({ type: 'text' } as Partial<Props>);
    const input = container.querySelector('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'date');
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
    const input = quickRender({ id: 'foo', lang: 'en-US' }).container.querySelector('input');

    expect(input).toHaveAttribute('id', 'foo');
    expect(input).toHaveAttribute('lang', 'en-US');
  });

  it('sets the value as specified', function() {
    expect(quickRender({ defaultValue: '2023-11-11' }).container.querySelector('input')).toHaveValue('2023-11-11');
  });

  it('calls onChange with the value whenever the input\'s onChange event fires', async function() {
    const user = userEvent.setup(),
        onChange = jest.fn(),
        input = quickRender({ onChange }).container.querySelector('input')!;

    expect(onChange).not.toHaveBeenCalled();

    input.focus();
    await user.keyboard('{Delete}'.repeat(4) + '2222');

    expect(onChange).toHaveBeenCalledWith('2222-11-11');
  });

  it('calls onKeyPress with the key value whenever the input\'s onKeyPress event fires', async function() {
    const user = userEvent.setup(),
        onKeyPress = jest.fn(),
        input = quickRender({ onKeyPress }).container.querySelector('input')!;

    expect(onKeyPress).not.toHaveBeenCalled();

    input.focus();
    await user.keyboard('1');

    expect(onKeyPress).toHaveBeenCalledWith('1');
  });

  it('updates the value and runs it through validator to update the validationErrors when value changes',
      async function() {
        const user = userEvent.setup(),
            validator = jest.fn()
                .mockImplementation(val => val === '2222-11-11' ? null : 'expect 2222'),
            component = quickRender({ validator }),
            input = component.container.querySelector('input')!;

        input.focus();
        await user.keyboard('{Delete}'.repeat(4) + '1111');

        expect(input).toHaveValue('1111-11-11');
        expect(validator).toHaveBeenCalledWith('1111-11-11');
        expect(component.getByRole('alert')).toHaveTextContent('expect 2222');
        expect(input).toHaveErrorMessage('expect 2222');

        await user.keyboard('{Backspace}'.repeat(4) + '2222');
        expect(input).toHaveValue('2222-11-11');
        expect(validator).toHaveBeenCalledWith('2222-11-11');
        expect(component.queryByRole('alert')).not.toBeInTheDocument();
        expect(input).not.toHaveErrorMessage();
      }
  );

  describe('when not validatable', function() {
    const nonValidatableMinimalProps = { ...minimalProps };

    describe('when pristine', function() {
      const pristineMinimalProps = { ...nonValidatableMinimalProps };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps = pristineMinimalProps,
            quickRender = rtlRender(NxStatefulDateInput, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.container.querySelector('input')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the input', function() {
          expect(quickRender().container.querySelector('input')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxStatefulDateInput { ...nonValidatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.container.querySelector('input')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the input', function() {
            expect(quickRender().container.querySelector('input')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });

    });

    describe('when not pristine', function() {
      const nonPristineMinimalProps = { ...nonValidatableMinimalProps };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps = nonPristineMinimalProps,
            quickRender = rtlRender(NxStatefulDateInput, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender(),
              input = component.container.querySelector('input')!;

          fireEvent.change(input, {target: {value: '2222-11-11'}});

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.container.querySelector('input')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the input', function() {
          const component = quickRender(),
              input = component.container.querySelector('input')!;

          fireEvent.change(input, {target: {value: '2222-11-11'}});

          expect(input).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxStatefulDateInput { ...nonValidatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender(),
                input = component.container.querySelector('input')!;

            fireEvent.change(input, {target: {value: '2222-11-11'}});

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.container.querySelector('input')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the input', function() {
            const component = quickRender(),
                input = component.container.querySelector('input')!;

            fireEvent.change(input, {target: {value: '2222-11-11'}});

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
            quickRender = rtlRender(NxStatefulDateInput, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.container.querySelector('input')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the input', function() {
          expect(quickRender().container.querySelector('input')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxStatefulDateInput { ...validatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.container.querySelector('input')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the input', function() {
            expect(quickRender().container.querySelector('input')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });

      describe('when there are validation errors', function() {
        const singleValidationErrorsMinimalProps =
            { ...pristineMinimalProps, validator: jest.fn().mockReturnValue('foo') },
            multiValidationErrorsMinimalProps =
            { ...pristineMinimalProps, validator: jest.fn().mockReturnValue(['bar', 'foo']) },
            singleRender = rtlRender(NxStatefulDateInput, singleValidationErrorsMinimalProps),
            multiRender = rtlRender(NxStatefulDateInput, multiValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const singleError = singleRender(),
              multiError = multiRender();

          expect(singleError.queryByRole('alert')).not.toBeInTheDocument();
          expect(singleError.container.querySelector('input')).not.toHaveErrorMessage();

          expect(multiError.queryByRole('alert')).not.toBeInTheDocument();
          expect(multiError.container.querySelector('input')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the input', function() {
          const singleError = singleRender(),
              multiError = multiRender();

          expect(singleError.container.querySelector('input')).not.toHaveAttribute('aria-invalid', 'true');
          expect(multiError.container.querySelector('input')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxStatefulDateInput { ...validatableMinimalProps } { ...extraProps } />
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
            expect(singleError.container.querySelector('input')).toHaveErrorMessage('foo');

            expect(multiError.getByRole('alert')).toHaveTextContent('bar');
            expect(multiError.container.querySelector('input')).toHaveErrorMessage('bar');
          });

          it('sets aria-invalid on the input', function() {
            const singleError = singleRender(),
                multiError = multiRender();

            expect(singleError.container.querySelector('input')).toHaveAttribute('aria-invalid', 'true');
            expect(multiError.container.querySelector('input')).toHaveAttribute('aria-invalid', 'true');
          });
        });
      });
    });

    describe('when not pristine', function() {
      const nonPristineMinimalProps = { ...validatableMinimalProps };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps = nonPristineMinimalProps,
            quickRender = rtlRender(NxStatefulDateInput, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender(),
              input = component.container.querySelector('input')!;

          fireEvent.change(input, {target: {value: '2222-11-11'}});

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.container.querySelector('input')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the input', function() {
          const component = quickRender(),
              input = component.container.querySelector('input')!;

          fireEvent.change(input, {target: {value: '2222-11-11'}});

          expect(input).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxStatefulDateInput { ...validatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender(),
                input = component.container.querySelector('input')!;

            fireEvent.change(input, {target: {value: '2222-11-11'}});

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.container.querySelector('input')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the input', function() {
            const component = quickRender(),
                input = component.container.querySelector('input')!;

            fireEvent.change(input, {target: {value: '2222-11-11'}});

            expect(quickRender().container.querySelector('input')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });

      describe('when there are validation errors', function() {
        const singleValidationErrorsMinimalProps =
            { ...nonPristineMinimalProps, validator: jest.fn().mockReturnValue('foo') },
            multiValidationErrorsMinimalProps =
            { ...nonPristineMinimalProps, validator: jest.fn().mockReturnValue(['bar', 'foo']) },
            singleRender = rtlRender(NxStatefulDateInput, singleValidationErrorsMinimalProps),
            multiRender = rtlRender(NxStatefulDateInput, multiValidationErrorsMinimalProps);

        it('has non-empty validation alert and a11y error message based on the first error', function() {
          const singleError = singleRender(),
              multiError = multiRender(),
              singleErrorInput = singleError.container.querySelector('input')!,
              multiErrorInput = multiError.container.querySelector('input')!;

          fireEvent.change(singleErrorInput, {target: {value: '2222-11-11'}});
          fireEvent.change(multiErrorInput, {target: {value: '2222-11-11'}});

          expect(singleError.getByRole('alert')).toHaveTextContent('foo');
          expect(singleError.container.querySelector('input')).toHaveErrorMessage('foo');

          expect(multiError.getByRole('alert')).toHaveTextContent('bar');
          expect(multiError.container.querySelector('input')).toHaveErrorMessage('bar');
        });

        it('sets aria-invalid on the input', function() {
          const singleError = singleRender(),
              multiError = multiRender(),
              singleErrorInput = singleError.container.querySelector('input')!,
              multiErrorInput = multiError.container.querySelector('input')!;

          fireEvent.change(singleErrorInput, {target: {value: '2222-11-11'}});
          fireEvent.change(multiErrorInput, {target: {value: '2222-11-11'}});

          expect(singleErrorInput).toHaveAttribute('aria-invalid', 'true');
          expect(multiErrorInput).toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxStatefulDateInput { ...validatableMinimalProps } { ...extraProps } />
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
                singleErrorInput = singleError.container.querySelector('input')!,
                multiErrorInput = multiError.container.querySelector('input')!;

            fireEvent.change(singleErrorInput, {target: {value: '2222-11-11'}});
            fireEvent.change(multiErrorInput, {target: {value: '2222-11-11'}});

            expect(singleError.getByRole('alert')).toHaveTextContent('foo');
            expect(singleError.container.querySelector('input')).toHaveErrorMessage('foo');

            expect(multiError.getByRole('alert')).toHaveTextContent('bar');
            expect(multiError.container.querySelector('input')).toHaveErrorMessage('bar');
          });

          it('sets aria-invalid on the input', function() {
            const singleError = singleRender(),
                multiError = multiRender(),
                singleErrorInput = singleError.container.querySelector('input')!,
                multiErrorInput = multiError.container.querySelector('input')!;

            fireEvent.change(singleErrorInput, {target: {value: '2222-11-11'}});
            fireEvent.change(multiErrorInput, {target: {value: '2222-11-11'}});

            expect(singleErrorInput).toHaveAttribute('aria-invalid', 'true');
            expect(multiErrorInput).toHaveAttribute('aria-invalid', 'true');
          });
        });
      });
    });
  });
});
