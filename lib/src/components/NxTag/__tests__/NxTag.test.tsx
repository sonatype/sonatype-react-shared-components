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

  it('renders NxTag with the `nx-tag` class', function() {
    const el = renderEl()!;
    expect(el.tagName).toBe('LABEL');
    expect(el).toHaveClass('nx-tag');
  });

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

  it('renders the supplied text inside .nx-tag__text', function() {
    const el = renderEl({ children: 'tag text' });
    expect(el).toHaveTextContent('tag text');
  });

  it('sets the nx-selectable-color--indigo class if no color prop is passed', function() {
    const el = renderEl();
    expect(el).toHaveClass('nx-selectable-color--indigo');
  });

  it('sets the color class using the color if it is provided', function() {
    const el = renderEl({ color: 'orange' });
    expect(el).toHaveClass('nx-selectable-color--orange');
  });
});

describe('NxSelectableTag', function() {
  type PropsWithRef = SelectableProps & RefAttributes<HTMLLabelElement>;

  const minimalProps = { children: 'selectable tag', selected: false, onSelect: jest.fn() },
      quickRender = rtlRender<PropsWithRef>(NxSelectableTag, minimalProps),
      renderEl = rtlRenderElement<PropsWithRef>(NxSelectableTag, minimalProps);

  it('renders an NxTag', function() {
    const el = renderEl()!;
    expect(el.tagName).toBe('LABEL');
    expect(el).toHaveClass('nx-tag');
  });

  it('forwards a ref', function() {
    const ref = React.createRef<HTMLLabelElement>(),
        renderedEl = renderEl({ ref });
    expect(ref.current).toBe(renderedEl);
  });

  it('renders NxSelectableTag with the `nx-tag--selectable` class', function() {
    const el = renderEl();
    expect(el).toHaveClass('nx-tag--selectable');
  });

  it('renders the `nx-tag--unselected` class when not selected', function() {
    const el = renderEl();
    expect(el).toHaveClass('nx-tag--unselected');
  });

  it('renders the `nx-tag--selected` class when selected and appears before the icon', function() {
    const el = renderEl({ selected: true, children: 'foo bar' });
    expect(el).toHaveClass('nx-tag--selected');
  });

  it('renders the plus icon and action class when not selected', function() {
    const el = quickRender(),
        icon = el.getByRole('img', { hidden: true });
    expect(icon).toHaveClass('fa-plus-circle nx-tag__action');
  });

  it('renders the times icon when selected', function() {
    const el = quickRender({ selected: true }),
        icon = el.getByRole('img', { hidden: true });
    expect(icon).toHaveClass('fa-times-circle nx-tag__action');
  });

  it('checks the children appear in the correct order, text then the icon', function() {
    const el = quickRender(),
        tagEl = el.container.querySelector('.nx-tag'),
        textEl = el.container.querySelector('span'),
        iconEl = el.getByRole('img', { hidden: true });

    expect(tagEl?.firstChild).toContainElement(textEl);
    expect(tagEl?.lastChild).toContainElement(iconEl);
  });

  it('fires the components onSelect when clicked', async function() {
    const user = userEvent.setup(),
        onSelect = jest.fn(),
        { container } = quickRender({ onSelect });

    const tag = container.querySelector<HTMLElement>('label')!;
    expect(onSelect).not.toHaveBeenCalled();
    await user.click(tag);
    expect(onSelect).toHaveBeenCalled();
  });
});
