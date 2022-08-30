/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import userEvent from '@testing-library/user-event';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxFormSelect, { Props } from '../NxFormSelect';
import { render, within } from '@testing-library/react';
import NxForm from '../../NxForm/NxForm';

describe('NxFormSelect', function() {
  const minimalProps = { value: '', onChange: () => {} },
      quickRender = rtlRender(NxFormSelect, minimalProps),
      renderEl = rtlRenderElement(NxFormSelect, minimalProps);

  it('renders a <select> ', function() {
    expect(quickRender().getByRole('combobox').tagName).toBe('SELECT');
  });

  it('adds additional specified classNames to the top-level element', function() {
    const el = renderEl({ className: 'foo' })!,
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('passes additional props to the select', function() {
    const select = quickRender({ id: 'foo', lang: 'en-US' }).getByRole('combobox');

    expect(select).toHaveAttribute('lang', 'en-US');
    expect(select).toHaveAttribute('id', 'foo');
  });

  it('passes children to the select', function() {
    const select = quickRender({
          children: (
            <>
              <option>Foo</option>
              <option>Bar</option>
            </>
          )
        }).getByRole('combobox') as HTMLSelectElement,
        { options } = select;

    expect(options).toHaveLength(2);
    expect(options[0]).toHaveTextContent('Foo');
    expect(options[1]).toHaveTextContent('Bar');
  });

  it('forwards a ref to the top-level element', function() {
    const ref = React.createRef<HTMLDivElement>(),
        el = renderEl({ ref });

    expect(ref.current).toBe(el);
  });

  it('calls onChange when the select value is changed', async function() {
    let capturedValue: HTMLSelectElement;

    const user = userEvent.setup(),
        onChange = jest.fn().mockImplementation(evt => { capturedValue = evt.target.value; }),
        component = quickRender({
          onChange,
          children: (
            <>
              <option>Foo</option>
              <option>Bar</option>
            </>
          )
        }),
        select = component.getByRole('combobox');

    expect(onChange).not.toHaveBeenCalled();

    await user.selectOptions(select, 'Bar');

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(capturedValue!).toBe('Bar');
  });

  describe('when not validatable', function() {
    const nonValidatableMinimalProps = { ...minimalProps, validatable: false };

    describe('when pristine', function() {
      const pristineMinimalProps = { ...nonValidatableMinimalProps, isPristine: true };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps = pristineMinimalProps,
            quickRender = rtlRender(NxFormSelect, noValidationErrorsMinimalProps);

        it('has no validation alert and no select a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.getByRole('combobox')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the select', function() {
          expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxFormSelect data-testid="select" { ...nonValidatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no select a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('combobox')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the select', function() {
            expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });

      describe('when there are validation errors', function() {
        const singleValidationErrorsMinimalProps = { ...pristineMinimalProps, validationErrors: 'foo' },
            multiValidationErrorsMinimalProps = { ...pristineMinimalProps, validationErrors: ['bar', 'foo'] },
            singleRender = rtlRender(NxFormSelect, singleValidationErrorsMinimalProps),
            multiRender = rtlRender(NxFormSelect, multiValidationErrorsMinimalProps);

        it('has no validation alert and no select a11y error message', function() {
          const singleError = singleRender(),
              multiError = multiRender();

          expect(singleError.queryByRole('alert')).not.toBeInTheDocument();
          expect(singleError.getByRole('combobox')).not.toHaveErrorMessage();

          expect(multiError.queryByRole('alert')).not.toBeInTheDocument();
          expect(multiError.getByRole('combobox')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the select', function() {
          expect(singleRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
          expect(multiRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxFormSelect data-testid="select" { ...nonValidatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no select a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('combobox')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the select', function() {
            expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });
    });

    describe('when not pristine', function() {
      const nonPristineMinimalProps = { ...nonValidatableMinimalProps, isPristine: false };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps = nonPristineMinimalProps,
            quickRender = rtlRender(NxFormSelect, noValidationErrorsMinimalProps);

        it('has no validation alert and no select a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.getByRole('combobox')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the select', function() {
          expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxFormSelect data-testid="select" { ...nonValidatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no select a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('combobox')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the select', function() {
            expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });

      describe('when there are validation errors', function() {
        const singleValidationErrorsMinimalProps = { ...nonPristineMinimalProps, validationErrors: 'foo' },
            multiValidationErrorsMinimalProps = { ...nonPristineMinimalProps, validationErrors: ['bar', 'foo'] },
            singleRender = rtlRender(NxFormSelect, singleValidationErrorsMinimalProps),
            multiRender = rtlRender(NxFormSelect, multiValidationErrorsMinimalProps);

        it('has no validation alert and no select a11y error message', function() {
          const singleError = singleRender(),
              multiError = multiRender();

          expect(singleError.queryByRole('alert')).not.toBeInTheDocument();
          expect(singleError.getByRole('combobox')).not.toHaveErrorMessage();

          expect(multiError.queryByRole('alert')).not.toBeInTheDocument();
          expect(multiError.getByRole('combobox')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the select', function() {
          expect(singleRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
          expect(multiRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxFormSelect data-testid="select" { ...nonValidatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no select a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('combobox')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the select', function() {
            expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
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
            quickRender = rtlRender(NxFormSelect, noValidationErrorsMinimalProps);

        it('has no validation alert and no select a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.getByRole('combobox')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the select', function() {
          expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxFormSelect data-testid="select" { ...validatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no select a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('combobox')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the select', function() {
            expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });

      describe('when there are validation errors', function() {
        const singleValidationErrorsMinimalProps = { ...pristineMinimalProps, validationErrors: 'foo' },
            multiValidationErrorsMinimalProps = { ...pristineMinimalProps, validationErrors: ['bar', 'foo'] },
            singleRender = rtlRender(NxFormSelect, singleValidationErrorsMinimalProps),
            multiRender = rtlRender(NxFormSelect, multiValidationErrorsMinimalProps);

        it('has no validation alert and no select a11y error message', function() {
          const singleError = singleRender(),
              multiError = multiRender();

          expect(singleError.queryByRole('alert')).not.toBeInTheDocument();
          expect(singleError.getByRole('combobox')).not.toHaveErrorMessage();

          expect(multiError.queryByRole('alert')).not.toBeInTheDocument();
          expect(multiError.getByRole('combobox')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the select', function() {
          expect(singleRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
          expect(multiRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxFormSelect data-testid="select" { ...validatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          const singleRender = () => quickRender(singleValidationErrorsMinimalProps),
              multiRender = () => quickRender(multiValidationErrorsMinimalProps);

          it('has a validation alert and select a11y error message based on the first error', function() {
            const singleError = singleRender(),
                multiError = multiRender();

            expect(singleError.getByRole('alert')).toHaveTextContent('foo');
            expect(singleError.getByRole('combobox')).toHaveErrorMessage('foo');

            expect(multiError.getByRole('alert')).toHaveTextContent('bar');
            expect(multiError.getByRole('combobox')).toHaveErrorMessage('bar');
          });

          it('sets aria-invalid on the select', function() {
            const singleError = singleRender(),
                multiError = multiRender();

            expect(singleError.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
            expect(multiError.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
          });
        });
      });
    });

    describe('when not pristine', function() {
      const nonPristineMinimalProps = { ...validatableMinimalProps, isPristine: false };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps = nonPristineMinimalProps,
            quickRender = rtlRender(NxFormSelect, noValidationErrorsMinimalProps);

        it('has no validation alert and no select a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.getByRole('combobox')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the select', function() {
          expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxFormSelect data-testid="select" { ...validatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no select a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('combobox')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the select', function() {
            expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });

      describe('when there are validation errors', function() {
        const singleValidationErrorsMinimalProps = { ...nonPristineMinimalProps, validationErrors: 'foo' },
            multiValidationErrorsMinimalProps = { ...nonPristineMinimalProps, validationErrors: ['bar', 'foo'] },
            singleRender = rtlRender(NxFormSelect, singleValidationErrorsMinimalProps),
            multiRender = rtlRender(NxFormSelect, multiValidationErrorsMinimalProps);

        it('has a validation alert and select a11y error message based on the first error', function() {
          const singleError = singleRender(),
              multiError = multiRender();

          expect(singleError.getByRole('alert')).toHaveTextContent('foo');
          expect(singleError.getByRole('combobox')).toHaveErrorMessage('foo');

          expect(multiError.getByRole('alert')).toHaveTextContent('bar');
          expect(multiError.getByRole('combobox')).toHaveErrorMessage('bar');
        });

        it('sets aria-invalid on the select', function() {
          const singleError = singleRender(),
              multiError = multiRender();

          expect(singleError.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
          expect(multiError.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxFormSelect data-testid="select" { ...validatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          const singleRender = () => quickRender(singleValidationErrorsMinimalProps),
              multiRender = () => quickRender(multiValidationErrorsMinimalProps);

          it('has a validation alert and select a11y error message based on the first error', function() {
            const singleError = singleRender(),
                multiError = multiRender();

            expect(singleError.getByRole('alert')).toHaveTextContent('foo');
            expect(singleError.getByRole('combobox')).toHaveErrorMessage('foo');

            expect(multiError.getByRole('alert')).toHaveTextContent('bar');
            expect(multiError.getByRole('combobox')).toHaveErrorMessage('bar');
          });

          it('sets aria-invalid on the select', function() {
            const singleError = singleRender(),
                multiError = multiRender();

            expect(singleError.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
            expect(multiError.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
          });
        });
      });
    });
  });
});
