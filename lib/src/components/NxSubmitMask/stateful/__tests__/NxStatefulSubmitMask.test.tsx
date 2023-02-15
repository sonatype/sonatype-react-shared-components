/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import { rtlRender, rtlRenderElement, runTimers } from '../../../../__testutils__/rtlUtils';
import { within } from '@testing-library/react';

import NxStatefulSubmitMask from '../NxStatefulSubmitMask';

describe('NxStatefulSubmitMask', function() {
  const quickRender = rtlRender(NxStatefulSubmitMask, {}),
      renderEl = rtlRenderElement(NxStatefulSubmitMask, {});

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

  it('briefly renders the NxSubmitMask when its success prop is true and then renders nothing',
      async function() {
        const component = quickRender({ success: true });

        expect(component.getByRole('status')).toBeInTheDocument();

        await runTimers();
        expect(component.queryByRole('status')).not.toBeInTheDocument();
      }
  );

  it('does not disappear if set back to pending from success', async function() {
    const { container, rerender } = quickRender({ success: true });

    expect(within(container).getByRole('status')).toHaveTextContent('Success!');

    rerender(<NxStatefulSubmitMask success={false} message={null} successMessage={null}/>);

    const el = within(container).getByRole('status');

    expect(el).not.toHaveTextContent('Success!');
    expect(el).toHaveTextContent('Submitting…');

    await runTimers();

    expect(el).not.toHaveTextContent('Success!');
    expect(el).toHaveTextContent('Submitting…');
  });

  it('reappears if set back to pending from success after it disappears', async function() {
    const { container, rerender } = quickRender({ success: true });

    expect(within(container).getByRole('status')).toHaveTextContent('Success!');

    await runTimers();

    expect(within(container).queryByRole('status')).not.toBeInTheDocument();

    rerender(<NxStatefulSubmitMask success={false} message={null} successMessage={null}/>);

    expect(within(container).getByRole('status')).not.toHaveTextContent('Success!');
    expect(within(container).getByRole('status')).toHaveTextContent('Submitting…');
  });

  it('disappears after a time when passed success=true multiple times', async function() {
    const { container, rerender } = quickRender({ success: true });

    expect(within(container).getByRole('status')).toHaveTextContent('Success!');

    rerender(<NxStatefulSubmitMask success={true} message={null} successMessage={null}/>);

    expect(within(container).getByRole('status')).toHaveTextContent('Success!');

    await runTimers();

    expect(within(container).queryByRole('status')).not.toBeInTheDocument();
  });
});
