/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ComponentType } from 'react';
import { faBiohazard } from '@fortawesome/free-solid-svg-icons';

import { rtlRender, rtlRenderElement, userEvent } from '../../../../__testutils__/rtlUtils';
import NxStatefulAlert,
{ NxStatefulErrorAlert,
  NxStatefulWarningAlert,
  NxStatefulInfoAlert,
  NxStatefulSuccessAlert
} from '../NxStatefulAlert';

import { NxAlertProps, Props } from '../../NxAlert';

describe('NxStatefulAlert', function() {
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

    it('renders a Close button that removes the alert from the DOM when clicked', async function() {
      const user = userEvent.setup(),
          view = quickRender(),
          closeBtn = view.getByRole('button', { name: 'Close' });

      expect(view.container.children.length).toBe(1);
      expect(closeBtn).toBeInTheDocument();

      await user.click(closeBtn);
      expect(view.container.children.length).toBe(0);
      expect(closeBtn).not.toBeInTheDocument();
    });

    it('sets the specified role on its top-level element', function() {
      expect(renderEl({ role: 'foo' })).toHaveAttribute('role', 'foo');
    });
  }

  const minimalProps: NxAlertProps = {
        children: 'A message to show in an alert',
        icon: faBiohazard
      },
      quickRender = rtlRender(NxStatefulAlert, minimalProps),
      renderEl = rtlRenderElement(NxStatefulAlert, minimalProps);

  baseTests(NxStatefulAlert, minimalProps);

  it('sets no default role on its top-level element', function() {
    expect(renderEl()).not.toHaveAttribute('role');
  });

  it('renders an img with the specified iconLabel if specified', function() {
    expect(quickRender({ iconLabel: 'foo' }).getByRole('img')).toHaveAccessibleName('foo');
  });

  it('renders an aria-hidden img if iconLabel is not specified', function() {
    expect(quickRender().queryByRole('img')).not.toBeInTheDocument();
    expect(quickRender().queryByRole('img', { hidden: true })).toBeInTheDocument();
  });

  describe('NxStatefulAlert variations', function() {
    const minimalProps = { children: <p>Hello</p> };

    describe('NxStatefulErrorAlert', function() {
      baseTests(NxStatefulErrorAlert, minimalProps);

      const quickRender = rtlRender(NxStatefulErrorAlert, minimalProps);

      it('sets the top-level element\'s role to "alert"', function() {
        const view = quickRender();

        expect(view.container.firstElementChild).toBe(view.getByRole('alert'));
      });

      it('renders an img with an accessible name of "Error"', function() {
        expect(quickRender().getByRole('img')).toHaveAccessibleName('Error');
      });
    });

    describe('NxStatefulInfoAlert', function() {
      baseTests(NxStatefulInfoAlert, minimalProps);

      const quickRender = rtlRender(NxStatefulInfoAlert, minimalProps);

      it('sets no default role on its top-level element', function() {
        expect(renderEl()).not.toHaveAttribute('role');
      });

      it('renders an img with an accessible name of "Info"', function() {
        expect(quickRender().getByRole('img')).toHaveAccessibleName('Info');
      });
    });

    describe('NxStatefulWarningAlert', function() {
      baseTests(NxStatefulWarningAlert, minimalProps);

      const quickRender = rtlRender(NxStatefulWarningAlert, minimalProps);

      it('sets no default role on its top-level element', function() {
        expect(renderEl()).not.toHaveAttribute('role');
      });

      it('renders an img with an accessible name of "Warning"', function() {
        expect(quickRender().getByRole('img')).toHaveAccessibleName('Warning');
      });
    });

    describe('NxStatefulSuccessAlert', function() {
      baseTests(NxStatefulSuccessAlert, minimalProps);

      const quickRender = rtlRender(NxStatefulSuccessAlert, minimalProps);

      it('sets the top-level element\'s role to "status"', function() {
        const view = quickRender();

        expect(view.container.firstElementChild).toBe(view.getByRole('status'));
      });

      it('renders an img with an accessible name of "Success"', function() {
        expect(quickRender().getByRole('img')).toHaveAccessibleName('Success');
      });
    });
  });
});
