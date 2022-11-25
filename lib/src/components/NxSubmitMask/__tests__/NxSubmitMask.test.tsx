/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { within } from '@testing-library/dom';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxSubmitMask from '../NxSubmitMask';

describe('NxSubmitMask', function() {
  const quickRender = rtlRender(NxSubmitMask, {}),
      renderEl = rtlRenderElement(NxSubmitMask, {});

  it('renders a Submitting… status by default', function() {
    const component = quickRender();

    expect(component.getByRole('status')).toHaveTextContent('Submitting…');
  });

  it('renders a Success! status when success is true', function() {
    const component = quickRender({ success: true });

    expect(component.getByRole('status')).toHaveTextContent('Success!');
  });

  it('renders the message as the status text if it is specified and success is not true', function() {
    expect(within(renderEl({ message: 'foo', successMessage: 'bar' })!).getByRole('status')).toHaveTextContent('foo');
    expect(within(renderEl({ message: 'foo', successMessage: 'bar', success: false })!).getByRole('status'))
        .toHaveTextContent('foo');
    expect(within(renderEl({ message: 'foo', successMessage: 'bar', success: null })!).getByRole('status'))
        .toHaveTextContent('foo');
    expect(within(renderEl({ message: 'foo', success: true })!).getByRole('status')).not.toHaveTextContent(/foo/);
  });

  it('renders the successMessage as the status text if it is specified and success is true', function() {
    expect(within(renderEl({ message: 'foo', successMessage: 'bar' })!).getByRole('status'))
        .not.toHaveTextContent(/bar/);
    expect(within(renderEl({ message: 'foo', successMessage: 'bar', success: false })!).getByRole('status'))
        .not.toHaveTextContent(/bar/);
    expect(within(renderEl({ message: 'foo', successMessage: 'bar', success: null })!).getByRole('status'))
        .not.toHaveTextContent(/bar/);
    expect(within(renderEl({ message: 'foo', successMessage: 'bar', success: true })!).getByRole('status'))
        .toHaveTextContent('bar');
  });
});
