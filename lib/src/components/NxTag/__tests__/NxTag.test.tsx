/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { RefAttributes } from 'react';

import NxTag, { NxSelectableTag, PublicProps, SelectableProps } from '../NxTag';

import { rtlRender, rtlRenderElement, userEvent } from '../../../__testutils__/rtlUtils';

describe('NxTag', function() {
  type PropsWithRef = PublicProps & RefAttributes<HTMLLabelElement>;
  const renderEl = rtlRenderElement<PropsWithRef>(NxTag, { children: 'basic tag '});

  it('forwards a ref', function() {
    const ref = React.createRef<HTMLLabelElement>(),
        renderedEl = renderEl({ ref });

    expect(ref.current).toBe(renderedEl);
  });

  it('correctly assigns supplied class', function() {
    const el = renderEl()!;
    const customEl = renderEl({ className: 'foo' })!;

    expect(customEl).toHaveClass('foo');

    for (const cls of Array.from(el.classList)) {
      expect(customEl).toHaveClass(cls);
    }
  });

  it('correctly assigns supplied id', function() {
    const el = renderEl({ id: 'test-id' });
    expect(el).toHaveAttribute('id', 'test-id');
  });

  it('renders the supplied text', function() {
    const el = renderEl({ children: 'tag text' });
    expect(el).toHaveTextContent('tag text');
  });
});

describe('NxSelectableTag', function() {
  type PropsWithRef = SelectableProps & RefAttributes<HTMLLabelElement>;

  const minimalProps = { children: 'selectable tag', selected: false, onSelect: () => {} },
      quickRender = rtlRender<PropsWithRef>(NxSelectableTag, minimalProps),
      renderEl = rtlRenderElement<PropsWithRef>(NxSelectableTag, minimalProps);

  it('renders the supplied text', function() {
    const el = renderEl();
    expect(el).toHaveTextContent('selectable tag');
  });

  it('forwards a ref', function() {
    const ref = React.createRef<HTMLLabelElement>(),
        renderedEl = renderEl({ ref });
    expect(ref.current).toBe(renderedEl);
  });

  it('fires the components onSelect when clicked', async function() {
    const user = userEvent.setup(),
        onSelect = jest.fn(),
        tag = renderEl({ onSelect })!;

    expect(onSelect).not.toHaveBeenCalled();
    await user.click(tag);
    expect(onSelect).toHaveBeenCalled();
  });

  describe('includes a checkbox that', function () {
    it('is checked if selected prop is true', function() {
      const el = quickRender({ selected: true }),
          checkbox = el.getByRole('switch');
      expect(checkbox).toBeChecked();
    });

    it('is unchecked if selected prop is false', function() {
      const el = quickRender({ selected: false }),
          checkbox = el.getByRole('switch');
      expect(checkbox).not.toBeChecked();
    });

    it('has an accessible name equal to the tag text', function() {
      const el = quickRender(),
          checkbox = el.getByRole('switch');
      expect(checkbox).toHaveAccessibleName('selectable tag');
    });
  });
});
