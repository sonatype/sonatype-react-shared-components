/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { screen } from '@testing-library/react';
import { userEvent, rtlRenderElement, rtlRender } from '../../../__testutils__/rtlUtils';
import NxLoadError from '../NxLoadError';

describe('NxLoadError', function() {
  const renderEl = rtlRenderElement(NxLoadError, {});
  const quickRender = rtlRender(NxLoadError, {});

  it('does not render anything if error is unset', function() {
    expect(renderEl()).not.toBeInTheDocument();
  });

  it('renders an error alert when error is set', function() {
    const el = renderEl({ error: 'Error!' });
    expect(el).toHaveAttribute('role', 'alert');
  });

  it('passes a default title message if there is an error', function() {
    const el = renderEl({ error: '' });
    expect(el?.textContent).toContain('An error occurred loading data. ');
  });

  it('uses the specified title message instead of the default', function() {
    const el = renderEl({ error: '', titleMessage: 'This is bad!' });
    expect(el?.textContent).not.toContain('An error occurred loading data. ');
    expect(el?.textContent).toContain('This is bad! ');

  });

  it('renders the error as part of the text content', function() {
    const el = renderEl({ error: 'Server Error', titleMessage: 'This is bad Error!' });
    expect(el?.textContent).toContain('Server Error');
  });

  it('renders the full error message', function() {
    const el = renderEl({ error: 'Server Error', titleMessage: 'This is bad!' });
    expect(el?.textContent).toEqual('This is bad! Server Error');
  });

  it('renders a retry button if there is an error and retryHandler is set', function() {
    const elWithoutRetryButton = renderEl({ error: 'Error' });
    expect(elWithoutRetryButton?.textContent).not.toContain('Retry');
    expect(quickRender({ error: 'Error', retryHandler: () => {} }).getByRole('button', { name: 'Retry' }))
        .toBeInTheDocument();
  });

  it('adds the appropriate type to the retry button', function() {
    renderEl({ error: 'Error', retryHandler: () => {} });
    const retryButton = screen.getByRole('button', { name: 'Retry' });
    expect(retryButton).toBeInTheDocument();
    expect(retryButton).toHaveAttribute('type', 'button');
  });

  it('sets the retry button type to "submit" when submitOnRetry is set to true', function() {
    renderEl({ error: 'Error', submitOnRetry: true });
    const retryButton = screen.getByRole('button', { name: 'Retry' });
    expect(retryButton).toBeInTheDocument();
    expect(retryButton).toHaveAttribute('type', 'submit');
  });

  it('calls the retryHandler when the retry button is clicked', async function() {
    const user = userEvent.setup();
    const retryHandler = jest.fn();
    renderEl({ error: 'Error!', retryHandler });
    expect(retryHandler).not.toHaveBeenCalled();
    const retryButton = screen.getByRole('button', { name: 'Retry' });
    expect(retryButton).toBeInTheDocument();
    await user.click(retryButton);
    expect(retryHandler).toHaveBeenCalled();
  });

  describe('when onClose is defined', ()=> {
    it('the "X" button appears', function() {
      const onClose = jest.fn();
      renderEl({ error: 'Error!' });
      const closeButton = screen.queryByRole('button', { name: 'Close' });
      expect(closeButton).not.toBeInTheDocument();
      renderEl({ error: 'Error!', onClose });
      expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
    });

    it('calls the onClose function when the "X" button is clicked (to dismiss alert)', async function() {
      const user = userEvent.setup();
      const onClose = jest.fn();
      renderEl({ error: 'Error!', onClose });
      expect(onClose).not.toHaveBeenCalled();
      const closeButton = screen.getByRole('button', { name: 'Close' });
      expect(closeButton).toBeInTheDocument();
      await user.click(closeButton);
      expect(onClose).toHaveBeenCalled();
    });
  });

  it('passes unknown props to the alert element', async function() {
    const onClick = jest.fn();
    const component = renderEl({error: 'Error!'})!;
    const customizedComponent = renderEl({ error: 'err', id: 'foo', className: 'bar', onClick });
    expect(onClick).not.toHaveBeenCalled();
    expect(customizedComponent).toHaveClass('bar');
    expect(customizedComponent).toHaveAttribute('id', 'foo');
    for (const cls of Array.from(component.classList)) {
      expect(customizedComponent).toHaveClass(cls);
    }
  });
});
