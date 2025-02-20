/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { RefAttributes } from 'react';
import { render, within } from '@testing-library/react';
import { userEvent } from '../../../__testutils__/rtlUtils';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxDateInput, { Props } from '../NxDateInput';
import { PublicProps } from '../../NxTextInput/NxTextInput';
import NxForm from '../../NxForm/NxForm';

describe('NxDateInput', function() {
  const minimalProps = {
        value: '2021-10-04',
        isPristine: false
      },
      quickRender = rtlRender<Props & RefAttributes<HTMLDivElement>>(NxDateInput, minimalProps),
      renderEl = rtlRenderElement<Props & RefAttributes<HTMLDivElement>>(NxDateInput, minimalProps);

  it('renders an input with type="date" by default', function() {
    const { container } = quickRender();
    const input = container.querySelector('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'date');
  });

  it('renders input and ignores the type attribute', function() {
    const { container } = quickRender({ type: 'text' } as Partial<Props>);
    const input = container.querySelector('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'date');
  });

  it('merges any passed in className', function() {
    const componentWithAddedClassName = renderEl({ className: 'foo' });
    const component = renderEl()!;

    expect(componentWithAddedClassName).toHaveClass('foo');

    for (const cls of Array.from(component.classList)) {
      expect(componentWithAddedClassName).toHaveClass(cls);
    }
  });

  it('sets ref on the containing element', function() {
    const ref = React.createRef<HTMLDivElement>(),
        el = renderEl({ ref });

    expect(ref.current).toBe(el);
  });

  it('passes id, disabled, aria-required, and aria-describedby to the input', function() {
    render(<p id="desc">Description</p>);

    const input = renderEl({
      id: 'foo',
      disabled: true,
      'aria-required': true,
      'aria-describedby': 'desc'
    })!.querySelector('input');

    expect(input).toHaveAttribute('id', 'foo');
    expect(input).toHaveAttribute('disabled');
    expect(input).toHaveAttribute('aria-required', 'true');
    expect(input).toHaveAccessibleDescription('Description');
  });

  it('passes additional attrs to the top-level element', function() {
    const el = renderEl({ lang: 'en-US' });

    expect(el).toHaveAttribute('lang', 'en-US');
  });

  it('sets the value as specified', function() {
    const { container } = quickRender({ value: '2021-10-05' });
    const input = container.querySelector('input');
    expect(input).toHaveValue('2021-10-05');
  });

  it('sets disabled on the date input when the disabled prop is true', function() {
    expect(quickRender().container.querySelector('input')).not.toBeDisabled();
    expect(quickRender({ disabled: undefined }).container.querySelector('input')).not.toBeDisabled();
    expect(quickRender({ disabled: false }).container.querySelector('input')).not.toBeDisabled();
    expect(quickRender({ disabled: true }).container.querySelector('input')).toBeDisabled();
  });

  it('calls onChange with the value whenever the input\'s onChange event fires', async function() {
    const user = userEvent.setup(),
        onChange = jest.fn().mockImplementation((_, evt) => { evt.persist(); }),
        input = quickRender({ onChange }).container.querySelector('input')!;

    expect(onChange).not.toHaveBeenCalled();

    input.focus();
    await user.keyboard('1');

    expect(onChange).toHaveBeenCalledWith('12021-10-04', expect.objectContaining({ target: input }));
  });

  it('calls onKeyPress with the key value whenever the input\'s onKeyPress event fires', async function() {
    const user = userEvent.setup(),
        onKeyPress = jest.fn(),
        input = quickRender({ onKeyPress }).container.querySelector('input')!;

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
            quickRender = rtlRender(NxDateInput, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.container.querySelector('input')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the input', function() {
          expect(quickRender().container.querySelector('input')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<PublicProps>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxDateInput { ...nonValidatableMinimalProps } { ...extraProps } />
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
            { ...pristineMinimalProps, validationErrors: 'foo' },
            multiValidationErrorsMinimalProps =
            { ...pristineMinimalProps, validationErrors: ['bar', 'foo'] },
            singleRender = rtlRender(NxDateInput, singleValidationErrorsMinimalProps),
            multiRender = rtlRender(NxDateInput, multiValidationErrorsMinimalProps);

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
          function quickRender(extraProps?: Partial<PublicProps>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxDateInput { ...nonValidatableMinimalProps } { ...extraProps } />
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
      const nonPristineMinimalProps = { ...nonValidatableMinimalProps, isPristine: false };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps = nonPristineMinimalProps,
            quickRender = rtlRender(NxDateInput, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.container.querySelector('input')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the input', function() {
          expect(quickRender().container.querySelector('input')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<PublicProps>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxDateInput { ...nonValidatableMinimalProps } { ...extraProps } />
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
            { ...nonPristineMinimalProps, validationErrors: 'foo' },
            multiValidationErrorsMinimalProps =
            { ...nonPristineMinimalProps, validationErrors: ['bar', 'foo'] },
            singleRender = rtlRender(NxDateInput, singleValidationErrorsMinimalProps),
            multiRender = rtlRender(NxDateInput, multiValidationErrorsMinimalProps);

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
          function quickRender(extraProps?: Partial<PublicProps>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxDateInput { ...nonValidatableMinimalProps } { ...extraProps } />
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
  });

  describe('when validatable', function() {
    const validatableMinimalProps = { ...minimalProps, validatable: true };

    describe('when pristine', function() {
      const pristineMinimalProps = { ...validatableMinimalProps, isPristine: true };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps = pristineMinimalProps,
            quickRender = rtlRender(NxDateInput, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.container.querySelector('input')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the input', function() {
          expect(quickRender().container.querySelector('input')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<PublicProps>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxDateInput { ...validatableMinimalProps } { ...extraProps } />
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
            { ...pristineMinimalProps, validationErrors: 'foo' },
            multiValidationErrorsMinimalProps =
            { ...pristineMinimalProps, validationErrors: ['bar', 'foo'] },
            singleRender = rtlRender(NxDateInput, singleValidationErrorsMinimalProps),
            multiRender = rtlRender(NxDateInput, multiValidationErrorsMinimalProps);

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
          function quickRender(extraProps?: Partial<PublicProps>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxDateInput { ...validatableMinimalProps } { ...extraProps } />
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
      const nonPristineMinimalProps = { ...validatableMinimalProps, isPristine: false };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps = nonPristineMinimalProps,
            quickRender = rtlRender(NxDateInput, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.container.querySelector('input')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the input', function() {
          expect(quickRender().container.querySelector('input')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<PublicProps>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxDateInput { ...validatableMinimalProps } { ...extraProps } />
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
            { ...nonPristineMinimalProps, validationErrors: 'foo' },
            multiValidationErrorsMinimalProps =
            { ...nonPristineMinimalProps, validationErrors: ['bar', 'foo'] },
            singleRender = rtlRender(NxDateInput, singleValidationErrorsMinimalProps),
            multiRender = rtlRender(NxDateInput, multiValidationErrorsMinimalProps);

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

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<PublicProps>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxDateInput { ...validatableMinimalProps } { ...extraProps } />
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
  });
});
