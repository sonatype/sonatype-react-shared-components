/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import userEvent from '@testing-library/user-event';

import NxStatefulAccordion from '../NxStatefulAccordion';
import NxAccordion from '../../NxAccordion';
import { rtlRender, rtlRenderElement } from '../../../../__testutils__/rtlUtils';

describe('NxStatefulAccordion', function() {

  const quickRender = rtlRender(NxStatefulAccordion, {});
  const renderEl = rtlRenderElement(NxStatefulAccordion, {});

  it('renders an NxAccordion with the specified props', function() {
    const onToggle = jest.fn(),
        component = renderEl({ onToggle, className: 'foo', id: 'bar' });

    expect(component!.tagName).toBe('DETAILS');
    expect(component).toHaveAttribute('id', 'bar');
  });

  it('sets the provided className', function() {
    const el = renderEl()!;
    const customEl = renderEl({ className: 'foo' })!;

    expect(customEl).toHaveClass('foo');

    for (const cls of Array.from(el.classList)) {
      expect(customEl).toHaveClass(cls);
    }
  });

  it('sets the NxAccordion open prop to the defaultOpen prop initially', function() {
    expect(renderEl()).not.toHaveAttribute('open');
    expect(renderEl({ defaultOpen: false })).not.toHaveAttribute('open');
    expect(renderEl({ defaultOpen: true })).toHaveAttribute('open');
  });

  it('toggles the NxAccordion open prop when the NxAccordion onToggle callback is called', async function() {
    const user = userEvent.setup(),
        onToggle = jest.fn(),
        el = quickRender({ onToggle,
          children: (
            <NxAccordion.Header>
              <NxAccordion.Title>Foo</NxAccordion.Title>
            </NxAccordion.Header>
          )});

    const header = el.getByRole('button')!;

    expect(onToggle).not.toHaveBeenCalled();
    expect(el.getByRole('group')).not.toHaveAttribute('open');

    await user.click(header);

    expect(onToggle).toHaveBeenCalled();
    expect(el.getByRole('group')).toHaveAttribute('open');
  });
});
