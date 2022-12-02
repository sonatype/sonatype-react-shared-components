/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ComponentType } from 'react';
import { faBiohazard } from '@fortawesome/free-solid-svg-icons';

import userEvent from '@testing-library/user-event';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import NxAlert, { Props, NxErrorAlert, NxWarningAlert, NxInfoAlert, NxSuccessAlert } from '../NxAlert';

describe('NxAlert', function() {
  function baseTests<P extends Props>(
    AlertComponent: ComponentType<P>,
    minimalProps: P
  ) {

    // unfortunate type hacks, otherwise it wouldn't accept things like the custom className below
    // because P could conceivably only allow a restricted set of classNames
    const quickRender = rtlRender(AlertComponent as ComponentType<Props>, minimalProps as Props),
        renderEl = rtlRenderElement(AlertComponent as ComponentType<Props>, minimalProps as Props);

    it('renders the classNames given to it', function() {
      const el = renderEl({ className: 'foo' }),
          defaultEl = renderEl()!;

      expect(el).toHaveClass('foo');

      for (const cls of Array.from(defaultEl.classList)) {
        expect(el).toHaveClass(cls);
      }
    });

    it('renders the children within the top-level element', function() {
      const children = <div data-testid="test-container"/>;

      expect(quickRender({ children }).getByTestId('test-container')).toBeInTheDocument();
    });

    it('sets aria-atomic on the top-level element', function() {
      expect(renderEl()).toHaveAttribute('aria-atomic', 'true');
    });

    it('passes any other props to the top-level element', function() {
      const el = renderEl({ id: 'foo', title: 'bar' });
      expect(el).toHaveAttribute('id', 'foo');
      expect(el).toHaveAttribute('title', 'bar');
    });

    it('renders a Close button if given an onClose prop', async function() {
      const user = userEvent.setup(),
          onClose = jest.fn(),
          view = quickRender({ onClose }),
          closeBtn = view.getByRole('button', { name: 'Close' });

      expect(closeBtn).toBeInTheDocument();
      expect(onClose).not.toHaveBeenCalled();

      await user.click(closeBtn);
      expect(onClose).toHaveBeenCalled();
    });

    it('does not render a Close button if not given an onClose prop', function() {
      const view = quickRender(),
          closeBtn = view.queryByRole('button', { name: 'Close' });

      expect(closeBtn).not.toBeInTheDocument();
    });
  }


  const minimalProps = {
        children: 'A message to show in an alert',
        icon: faBiohazard
      },
      quickRender = rtlRender(NxAlert, minimalProps);

  baseTests(NxAlert, minimalProps);

  it('renders an img with the specified iconLabel if specified', function() {
    expect(quickRender({ iconLabel: 'foo' }).getByRole('img')).toHaveAccessibleName('foo');
  });

  it('renders an aria-hidden img if iconLabel is not specified', function() {
    expect(quickRender().queryByRole('img')).not.toBeInTheDocument();
    expect(quickRender().queryByRole('img', { hidden: true })).toBeInTheDocument();
  });

  describe('NxAlert variations', function() {
    const minimalProps = { children: <p>Hello</p> };

    describe('NxErrorAlert', function() {
      baseTests(NxErrorAlert, minimalProps);

      const quickRender = rtlRender(NxErrorAlert, minimalProps);

      it('sets the top-level element\'s role to "alert"', function() {
        const view = quickRender();

        expect(view.container.firstElementChild).toBe(view.getByRole('alert'));
      });

      it('renders an img with an accessible nameof "Error"', function() {
        expect(quickRender().getByRole('img')).toHaveAccessibleName('Error');
      });
    });

    describe('NxInfoAlert', function() {
      baseTests(NxInfoAlert, minimalProps);

      const quickRender = rtlRender(NxInfoAlert, minimalProps);

      it('sets the top-level element\'s role from the props', function() {
        const view = quickRender(),
            viewWithRole = quickRender({ role: 'foo' });

        expect(view.container.firstElementChild).not.toHaveAttribute('role');
        expect(viewWithRole.container.firstElementChild).toHaveAttribute('role', 'foo');
      });

      it('renders an img with an accessible nameof "Info"', function() {
        expect(quickRender().getByRole('img')).toHaveAccessibleName('Info');
      });
    });

    describe('NxWarningAlert', function() {
      baseTests(NxWarningAlert, minimalProps);

      const quickRender = rtlRender(NxWarningAlert, minimalProps);

      it('sets the top-level element\'s role from the props', function() {
        const view = quickRender(),
            viewWithRole = quickRender({ role: 'foo' });

        expect(view.container.firstElementChild).not.toHaveAttribute('role');
        expect(viewWithRole.container.firstElementChild).toHaveAttribute('role', 'foo');
      });

      it('renders an img with an accessible nameof "Warning"', function() {
        expect(quickRender().getByRole('img')).toHaveAccessibleName('Warning');
      });
    });

    describe('NxSuccessAlert', function() {
      baseTests(NxSuccessAlert, minimalProps);

      const quickRender = rtlRender(NxSuccessAlert, minimalProps);

      it('sets the top-level element\'s role to "status"', function() {
        const view = quickRender();

        expect(view.container.firstElementChild).toBe(view.getByRole('status'));
      });

      it('renders an img with an accessible nameof "Success"', function() {
        expect(quickRender().getByRole('img')).toHaveAccessibleName('Success');
      });
    });
  });
});
