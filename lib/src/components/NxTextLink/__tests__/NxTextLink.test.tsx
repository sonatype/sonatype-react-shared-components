/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import userEvent from '@testing-library/user-event';

import NxTextLink from '../NxTextLink';

describe('NxTextLink', function() {
  const quickRender = rtlRender(NxTextLink, {});
  const renderEl = rtlRenderElement(NxTextLink, {});

  it('renders an <a> with the nx-text-link', function() {
    expect(renderEl()!.tagName).toBe('A');
  });

  it('adds additional specified classes', function() {
    const el = renderEl()!;
    const customEl = renderEl({ className: 'foo' })!;

    expect(customEl).toHaveClass('foo');

    for (const cls of Array.from(el.classList)) {
      expect(customEl).toHaveClass(cls);
    }
  });

  it('adds additional specified props', function() {
    const el = renderEl({ id: 'foo', lang: 'en_US' });

    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('lang', 'en_US');
  });

  it('adds the noreferrer rel if the noReferrer prop is true', function() {
    expect(renderEl()).toHaveAttribute('rel', '');
    expect(renderEl({ rel: 'foo' })).toHaveAttribute('rel', 'foo');

    expect(renderEl({ noReferrer: true })).toHaveAttribute('rel', 'noreferrer');

    expect(renderEl({ noReferrer: true, rel: 'foo' })?.getAttribute('rel')).toContain('noreferrer');
    expect(renderEl({ noReferrer: true, rel: 'foo' })?.getAttribute('rel')).toContain('foo');
  });

  it('adds the noreferrer rel if the external prop is true and noReferrer is not false', function() {
    expect(renderEl({ external: true })).toHaveAttribute('rel', 'noreferrer');

    expect(renderEl({ external: true, rel: 'foo' })?.getAttribute('rel')).toContain('foo');
    expect(renderEl({ external: true, rel: 'foo' })?.getAttribute('rel')).toContain('noreferrer');

    expect(renderEl({ external: true, noReferrer: true })).toHaveAttribute('rel', 'noreferrer');
    expect(renderEl({ external: true, noReferrer: false })).toHaveAttribute('rel', '');

    expect(renderEl({ external: true, noReferrer: true, rel: 'foo' })?.getAttribute('rel')).toContain('noreferrer');
    expect(renderEl({ external: true, noReferrer: true, rel: 'foo' })?.getAttribute('rel')).toContain('foo');
  });

  it('sets aria-disabled on the text link when the disabled prop is set', function() {
    expect(renderEl()).toHaveAttribute('aria-disabled', 'false');
    expect(renderEl({ disabled: true })).toHaveAttribute('aria-disabled', 'true');
  });

  it('sets link role on the text link when the disabled prop is set', function() {
    expect(renderEl()).not.toHaveAttribute('role');
    expect(quickRender({ disabled: true }).getByRole('link')).toBe;
  });

  it('does not pass href value on the text link when the disabled prop is set', async function() {
    const user = userEvent.setup();
    const el = quickRender({ href: '#/pages/Text%20Link', disabled: true });
    await user.click(el.getByRole('link'));
    expect(el.getByRole('link').getAttribute('href')).toBe(null);
  });

  it('sets the target to _blank if newTab is true, unless a different target is specified', function() {
    expect(renderEl()).toHaveAttribute('target', '');
    expect(renderEl({ newTab: true })).toHaveAttribute('target', '_blank');

    expect(renderEl({ target: 'asdf' })).toHaveAttribute('target', 'asdf');
    expect(renderEl({ target: 'asdf', newTab: true })).toHaveAttribute('target', 'asdf');
  });

  it('sets the target to _blank if the external prop is true and newTab is not false, unless a different target is ' +
      'specified', function() {
    expect(renderEl({ external: true })).toHaveAttribute('target', '_blank');
    expect(renderEl({ external: true, target: 'asdf' })).toHaveAttribute('target', 'asdf');

    expect(renderEl({ external: true, newTab: true })).toHaveAttribute('target', '_blank');
    expect(renderEl({ external: true, newTab: false })).toHaveAttribute('target', '');

    expect(renderEl({ external: true, noReferrer: true, target: 'asdf' })).toHaveAttribute('target', 'asdf');
  });

  it('wraps non-element children in an element sibling to the icon', function() {
    const el = renderEl({children: 'foo', external: true});

    expect(el?.children[0].tagName).toBe('SPAN');
  });
});
