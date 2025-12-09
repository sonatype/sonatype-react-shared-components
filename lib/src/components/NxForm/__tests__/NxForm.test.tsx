/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext } from 'react';
import { within, fireEvent } from '@testing-library/dom';
import { userEvent } from '../../../__testutils__/rtlUtils';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import NxForm, { Props } from '../NxForm';
import NxButton from '../../NxButton/NxButton';
import { FormAriaContext } from '../context';

describe('NxForm', function() {
  const minimalProps: Props = {
        onSubmit: () => {},
        showValidationErrors: false,
        children: <div/>
      },
      quickRender = rtlRender(NxForm, minimalProps),
      renderEl = rtlRenderElement(NxForm, minimalProps);

  describe('when doLoad is not defined', function() {
    it('renders a form with .nx-form', function() {
      const el = renderEl()!;

      expect(el.tagName).toBe('FORM');
      expect(el).toHaveClass('nx-form');
    });

    it('adds extra specified classes', function() {
      const el = renderEl({ className: 'foo' });

      expect(el).toHaveClass('foo');
      expect(el).toHaveClass('nx-form');
    });

    it('sets extra attrs on the form', function() {
      const el = renderEl({ id: 'foo', lang: 'en_US' });

      expect(el).toHaveAttribute('id', 'foo');
      expect(el).toHaveAttribute('lang', 'en_US');
    });

    it('puts the ref on the form', function() {
      const ref = React.createRef<HTMLFormElement>(),
          el = renderEl({ ref });

      expect(ref.current).toBe(el);
    });

    describe('on form submit', function() {
      it('does not execute a native form submission', async function() {
        const form = renderEl()!;

        const defaultNotPrevented = fireEvent.submit(form);

        expect(defaultNotPrevented).toBe(false);
      });

      it('calls the onSubmit prop', async function() {
        const onSubmit = jest.fn(),
            form = renderEl({ onSubmit })!;

        expect(onSubmit).not.toHaveBeenCalled();

        fireEvent.submit(form);

        expect(onSubmit).toHaveBeenCalled();
      });
    });

    it('renders children', function() {
      expect(quickRender({ children: <div data-testid="foo" /> }).getByTestId('foo')).toBeInTheDocument();
    });

    it('renders children passed as a function', function() {
      expect(quickRender({ children: () => <div data-testid="foo" /> }).getByTestId('foo')).toBeInTheDocument();
    });

    it('provides the showValidationErrors value to the children via FormAriaContext', function() {
      function Fixture() {
        const { showValidationErrors } = useContext(FormAriaContext);

        return <span data-testid="foo">{showValidationErrors.toString()}</span>;
      }

      expect(within(renderEl({ children: <Fixture /> })!).getByTestId('foo')).toHaveTextContent('false');
      expect(within(renderEl({ children: <Fixture />, showValidationErrors: true })!).getByTestId('foo'))
          .toHaveTextContent('true');
    });

    describe('submit button', function() {
      it('renders a submit button', function() {
        expect(quickRender().getByRole('button', { name: 'Submit' })).toBeInTheDocument();
      });

      it('adds submitBtnClassesProp classes to the submit button', function() {
        const submitBtn = quickRender({ submitBtnClasses: 'foo bar' }).getByRole('button', { name: 'Submit' });

        expect(submitBtn).toHaveClass('foo');
        expect(submitBtn).toHaveClass('bar');
      });

      it('uses the submitBtnText in place of "Submit" if provided', function() {
        const submitBtn = quickRender({ submitBtnText: 'Save' }).getByRole('button', { name: 'Save' });

        expect(submitBtn).toBeInTheDocument();
      });
    });

    describe('submit error', function() {
      it('renders an alert with the submitError', function() {
        const noErrorComponent = renderEl()!,
            errorComponent = renderEl({ submitError: 'BAAAAD' })!,
            loadError = within(errorComponent).getByRole('alert'),
            emptyLoadError = within(noErrorComponent).queryByRole('alert');

        expect(emptyLoadError).not.toBeInTheDocument();
        expect(loadError).toBeInTheDocument();
        expect(loadError).toHaveTextContent(/BAAAAD/);
      });

      it('renders a load alert with an accessible name', function() {
        const errorComponent = renderEl({ submitError: 'BAAAAD' })!,
            loadError = within(errorComponent).getByRole('alert', { name: 'form saving errors' });
        expect(loadError).toBeInTheDocument();
      });

      it('calls the onSubmit function when the submit error\'s retry button is clicked', async function() {
        const user = userEvent.setup(),
            onSubmit = jest.fn(),
            errorComponent = quickRender({ submitError: 'BAAAAD', onSubmit }),
            retryBtn = errorComponent.getByRole('button', { name: 'Retry' });

        expect(onSubmit).not.toHaveBeenCalled();

        await user.click(retryBtn);

        expect(onSubmit).toHaveBeenCalled();
      });

      it('includes the submitErrorTitleMessage at the beginning of the submit alert', function() {
        const errorComponent = quickRender({
              submitError: 'BAAAAD',
              submitErrorTitleMessage: 'An error occurred launching the rocket.'
            }),
            loadError = errorComponent.getByRole('alert');

        expect(loadError).toHaveTextContent(/^An error occurred launching the rocket./);
      });

      it('sets default text for the alert that includes the word "saving" if submitErrorTitleMessage is not defined',
          function() {
            const errorComponent = quickRender({ submitError: 'BAAAAD' }),
                loadError = errorComponent.getByRole('alert');

            expect(loadError).toHaveTextContent(/saving/);
          }
      );
    });

    describe('other buttons', function() {
      it('renders a cancel button hooked to onCancel if present', async function() {
        const user = userEvent.setup(),
            onCancel = jest.fn(),
            component = quickRender({ onCancel }),
            cancelBtn = component.getByRole('button', { name: 'Cancel' });

        expect(cancelBtn).toHaveAttribute('type', 'button');
        expect(onCancel).not.toHaveBeenCalled();

        await user.click(cancelBtn);

        expect(onCancel).toHaveBeenCalled();
      });

      it('renders content specified in additionalFooterBtns', function() {
        const additionalFooterBtns = <NxButton>Foo</NxButton>,
            component = quickRender({ onCancel: jest.fn(), additionalFooterBtns }),
            additionalBtn = component.getByRole('button', { name: 'Foo' }),
            cancelBtn = component.getByRole('button', { name: 'Cancel' }),
            submitBtn = component.getByRole('button', { name: 'Submit' });

        expect(additionalBtn).toBeInTheDocument();

        // ensure Cancel and Submit are still there too
        expect(submitBtn).toBeInTheDocument();
        expect(cancelBtn).toBeInTheDocument();
      });
    });

    describe('submit mask', function() {
      it('renders no status element if submitMaskState is not defined', function() {
        expect(within(renderEl()!).queryByRole('status')).not.toBeInTheDocument();
        expect(within(renderEl({ submitMaskState: null })!).queryByRole('status')).not.toBeInTheDocument();
      });

      describe('when submitMaskState is false', function() {
        it('renders with an accessible name', function() {
          const status = quickRender({ submitMaskState: false }).queryByRole('status', { name: 'form submit status' });
          expect(status).toBeInTheDocument();
        });

        it('renders a status of "Submitting…" when submitMaskMessage is not defined', function() {
          const status = quickRender({ submitMaskState: false }).getByRole('status');
          expect(status).toBeInTheDocument();
          expect(status).toHaveTextContent('Submitting…');
        });

        it('renders the submitMaskMessage as the status text when it is defined', function() {
          const status = quickRender({
            submitMaskState: false,
            submitMaskMessage: 'foo',
            submitMaskSuccessMessage: 'bar'
          }).getByRole('status');

          expect(status).toBeInTheDocument();
          expect(status).toHaveTextContent('foo');
        });
      });

      describe('when submitMaskState is true', function() {
        it('renders with an accessible name', function() {
          const status = quickRender({ submitMaskState: true }).queryByRole('status', { name: 'form submit status' });
          expect(status).toBeInTheDocument();
        });

        it('renders a status of "Success!" when submitMaskSuccessMessage is not defined', function() {
          const status = quickRender({ submitMaskState: true }).getByRole('status');
          expect(status).toBeInTheDocument();
          expect(status).toHaveTextContent('Success!');
        });

        it('renders the submitMaskSuccessMessage as the status text when it is defined', function() {
          const status = quickRender({
            submitMaskState: true,
            submitMaskMessage: 'foo',
            submitMaskSuccessMessage: 'bar'
          }).getByRole('status');

          expect(status).toBeInTheDocument();
          expect(status).toHaveTextContent('bar');
        });
      });
    });

    describe('validation errors', function() {
      it('renders an alert when there are validation errors and no submitError', function() {
        expect(within(renderEl()!).queryByRole('alert')).not.toBeInTheDocument();
        expect(within(renderEl({ validationErrors: null })!).queryByRole('alert')).not.toBeInTheDocument();
        expect(within(renderEl({ validationErrors: [] })!).queryByRole('alert')).not.toBeInTheDocument();
        expect(within(renderEl({ validationErrors: 'foo' })!).getByRole('alert')).toBeInTheDocument();
        expect(within(renderEl({ validationErrors: ['foo'] })!).getByRole('alert')).toBeInTheDocument();
        expect(within(renderEl({ submitError: 'bar', validationErrors: 'foo' })!).getByRole('alert'))
            .toBeInTheDocument();
      });

      it('renders an alert with an accessible name', function() {
        const alert = quickRender({ validationErrors: 'foo'}).queryByRole('alert', { name: 'form validation errors' });
        expect(alert).toBeInTheDocument();
      });

      it('includes the first validation error within the alert content', function() {
        expect(within(renderEl({ validationErrors: 'foo' })!).getByRole('alert')).toHaveTextContent(/foo/);
        expect(within(renderEl({ validationErrors: ['foo', 'bar'] })!).getByRole('alert')).toHaveTextContent(/foo/);
        expect(within(renderEl({ validationErrors: ['foo', 'bar'] })!).getByRole('alert')).not.toHaveTextContent(/bar/);
      });

      it('does not render when there is a submitError', function() {
        expect(quickRender({ submitError: 'bar', validationErrors: 'foo' }).getByRole('alert'))
            .toHaveTextContent(/bar/);
      });

      it('renders with an accessible name', function() {
        const status = quickRender({ submitMaskState: true }).queryByRole('status', { name: 'form submit status' });
        expect(status).toBeInTheDocument();
      });
    });
  });

  describe('when doLoad is defined', function() {
    const quickRender = rtlRender(NxForm, { ...minimalProps, doLoad: () => {} }),
        renderEl = rtlRenderElement(NxForm, { ...minimalProps, doLoad: () => {} });

    it('does not call its children render function if loading is true', function() {
      function BadChild() {
        // would prevent el from rendering, if executed
        throw new Error('bad');

        return null;
      }

      const el = renderEl({ children: () => <BadChild />, loading: true });

      expect(el).toBeInTheDocument();
    });

    it('renders only a loading status if loading is true', function() {
      const component = quickRender({ children: <span>foo</span>, loading: true }),
          status = component.getByRole('status');

      expect(status).toHaveTextContent('Loading…');
      expect(component.container.children).toHaveLength(1);
      expect(component.container.firstElementChild).toBe(status);
    });

    it('renders only an alert containing the loadError, if loadError is set', function() {
      const component = quickRender({ children: <span>foo</span>, loadError: 'errrrrrrrr' }),
          alert = component.getByRole('alert');

      expect(alert).toHaveTextContent(/errrrrrrrr/);
      expect(component.container.children).toHaveLength(1);
      expect(component.container.firstElementChild).toBe(alert);
    });

    it('renders a Retry button that calls doLoad when clicked, if loadError is set', async function() {
      const user = userEvent.setup(),
          doLoad = jest.fn(),
          withoutError = within(renderEl({ doLoad })!).queryByRole('button', { name: 'Retry' }),
          withError = within(renderEl({ doLoad, loadError: 'err' })!).getByRole('button', { name: 'Retry' });

      expect(withoutError).not.toBeInTheDocument();
      expect(withError).toBeInTheDocument();
      expect(doLoad).not.toHaveBeenCalled();

      await user.click(withError);

      expect(doLoad).toHaveBeenCalled();
    });

    it('renders the children if neither loading nor loadError are set', function() {
      expect(quickRender({ children: <div data-testid="foo" /> }).getByTestId('foo')).toBeInTheDocument();
    });

    it('renders children passed as a function if neither loading nor loadError are set', function() {
      expect(quickRender({ children: () => <div data-testid="foo" /> }).getByTestId('foo')).toBeInTheDocument();
    });
  });
});
