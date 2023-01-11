/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('renders a component and checked if there was an error', function() {
    const componentWithError = renderEl({error: 'Error!'});
    expect(componentWithError).toBeInTheDocument();
    expect(componentWithError).toHaveAttribute('role', 'alert');
    expect(componentWithError?.textContent).toContain('Error!');
  });

  it('passes the retryHandler to component', function () {
    const elWithoutRetryButton = renderEl();
    expect(elWithoutRetryButton?.textContent).not.toContain('Retry');
    expect(quickRender({ error: 'Error' }).getByRole('button', { name: 'Retry' }))
        .toBeInTheDocument();
  });

  it('renders a loading spinner if error is not set and loading is true', function() {
    const elWithoutRetryButton = renderEl();
    expect(elWithoutRetryButton?.textContent).not.toContain('Loading…');
    expect(quickRender({ loading: true }).container.textContent).toContain('Loading…');
  });

  it('renders provided children if loading is false and error is unset', function() {
    const { container: withChildren } = quickRender();
    const { container: withLoading } = quickRender({
      loading: true,
      error: ''
    });
    const { container: withError } = quickRender({
      loading: false,
      error: 'Error'
    });
    expect(withChildren.textContent).toContain('Foo');
    expect(withLoading.textContent).toContain('Loading…');
    expect(withError.textContent).toContain('Error');

  });

  it('renders children provided by a function if loading is false and error is unset', function() {
    const childrenFn = () => children;
    const { container: withFuncChild } = quickRender({
      children: childrenFn,
      loading: false,
      error: ''
    });
    expect(withFuncChild.textContent).toContain('Foo');
  });

  it('passes the retryHandler to component and check that Retry button was clicked', async function () {
    const user = userEvent.setup();
    const retryHandler = jest.fn();
    const elWithoutRetryButton = renderEl();
    expect(elWithoutRetryButton?.textContent).not.toContain('Retry');
    expect(quickRender({ error: 'Error', retryHandler }).getByRole('button', { name: 'Retry' }))
        .toBeInTheDocument();
    const retryButton = screen.getByRole('button', { name: 'Retry' });
    expect(retryHandler).not.toHaveBeenCalled();
    await user.click(retryButton);
    expect(retryHandler).toHaveBeenCalled();
  });
});
