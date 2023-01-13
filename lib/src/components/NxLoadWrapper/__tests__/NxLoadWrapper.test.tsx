/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { screen } from '@testing-library/react';
import { userEvent } from '../../../__testutils__/rtlUtils';
import React from 'react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxLoadWrapper from '../NxLoadWrapper';

describe('NxLoadError', function() {
  const children = <div className="children">Foo</div>;
  const minimalProps = {
    children,
    retryHandler: () => {}
  };
  const renderEl = rtlRenderElement(NxLoadWrapper, minimalProps);
  const quickRender = rtlRender(NxLoadWrapper, minimalProps);

  describe('when there is an error', ()=> {
    it('an alert is rendered', ()=> {
      const componentWithError = renderEl({error: 'Error!'});
      expect(componentWithError).toBeInTheDocument();
      expect(componentWithError).toHaveAttribute('role', 'alert');
      expect(componentWithError?.textContent).toContain('Error!');
    });

    it('Retry button is rendered within the alert', ()=> {
      expect(renderEl()?.textContent).not.toContain('Retry');
      expect(quickRender({ error: 'Error' }).getByRole('button', { name: 'Retry' }))
          .toBeInTheDocument();
    });

    it('retryHandler is called when that Retry button is clicked', async ()=> {
      const user = userEvent.setup();
      const retryHandler = jest.fn();
      expect(renderEl()?.textContent).not.toContain('Retry');
      expect(quickRender({ error: 'Error', retryHandler }).getByRole('button', { name: 'Retry' }))
          .toBeInTheDocument();
      const retryButton = screen.getByRole('button', { name: 'Retry' });
      expect(retryHandler).not.toHaveBeenCalled();
      await user.click(retryButton);
      expect(retryHandler).toHaveBeenCalled();
    });

    it('children content and loading spinner are not rendered when error is present', ()=> {
      const toCheck = ['Loading…', 'Foo'];
      toCheck.forEach(nameToCheck => {
        expect(renderEl({error: 'Error'})?.textContent).not.toContain(nameToCheck);
      });

    });

  });

  it('when it is loading', ()=> {
    expect(renderEl()?.textContent).not.toContain('Loading…');
    expect(quickRender({ loading: true }).container.textContent).toContain('Loading…');
    expect(quickRender({ loading: true }).container.textContent).not.toContain('Foo');
    expect(quickRender({ loading: true }).container).not.toHaveAttribute('role', 'alert');
  });

  describe('renders provided children', ()=> {
    it('renders provided children if loading is false and error is unset', ()=> {
      const { container: withChildren } = quickRender();
      expect(withChildren.textContent).toContain('Foo');
    });

    it('renders children provided by a function if loading is false and error is unset', ()=> {
      const childrenFn = () => children;
      const { container: withFuncChild } = quickRender({
        children: childrenFn,
        loading: false,
        error: ''
      });
      expect(withFuncChild.textContent).toContain('Foo');
      expect(withFuncChild.textContent).not.toContain('Loading…');
      expect(withFuncChild).not.toHaveAttribute('role', 'alert');
    });
  });
});
