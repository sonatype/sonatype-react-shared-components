/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
// import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
// import { screen } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { rtlRenderElement } from '../../../__testutils__/rtlUtils';

// import userEvent from '@testing-library/user-event';
// import NxButton from '../../NxButton/NxButton';
// import { logDOM } from '@testing-library/react';
// import NxLoadError, { Props } from '../NxLoadError';
import NxLoadError from '../NxLoadError';
// import NxButton from '../././NxButton/NxButton';
// import { NxErrorAlert } from '../../NxAlert/NxAlert';
// import { screen } from '@testing-library/react';

describe('NxLoadError', function() {
  // const quickRender = rtlRender(NxLoadError, {});
  const renderEl = rtlRenderElement(NxLoadError, {});

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
    expect(el?.textContent).not.toBe('An error occurred loading data. ');
    expect(el?.textContent).toContain('This is bad! ');

  });

  it('Uses the error as children', function() {
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
    const elRetryButton = renderEl({ error: 'Error', retryHandler: () => {} });
    const retryButton = screen.getByRole('button', {name: 'Retry'});
    expect(elRetryButton?.textContent).toContain('An error occurred loading data. Error');
    expect(retryButton).toBeInTheDocument();
  });

  it('adds the appropriate class, variant, and type to the retry button', function() {
    renderEl({ error: 'Error', retryHandler: () => {} });
    const retryButton = screen.getByRole('button', {name: 'Retry'});
    expect(retryButton).toBeInTheDocument();
    expect(retryButton).toHaveClass('nx-load-error__retry');
    expect(retryButton).toHaveAttribute('type', 'button');
  });

  // it('sets the retry button type to "submit" when submitOnRetry is set to true', function() {
  //   const props = { error: 'Error!', submitOnRetry: true };
  //   const button = renderEl(props).find(NxButton);
  //   expect(button).toHaveProp('type', 'submit');

  // const text = screen.getByText('dfgdgdgd');
  // expect(text).toBeInTheDocument();
  // });

  // it('calls the retryHandler when the retry button is clicked', function() {
  //   const retryHandler = jest.fn(),
  //       props = { error: 'Error!', canRetry: true, retryHandler },
  //       component = renderEl(props);

  //   expect(retryHandler).not.toHaveBeenCalled();

  //   component.find(NxButton).simulate('click');

  //   expect(retryHandler).toHaveBeenCalled();
  // });

  // it('passes unknown props to the NxErrorAlert element', function() {
  //   const onClick = jest.fn(),
  //       component = renderEl({ error: 'err', id: 'foo', onClick });

  //   expect(component).toHaveProp('id', 'foo');
  //   expect(component).toHaveProp('onClick', onClick);
  // });
});
