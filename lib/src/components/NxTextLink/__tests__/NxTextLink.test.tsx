/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxTextLink from '../NxTextLink';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

describe('NxTextLink', function() {
  const quickRender = rtlRender(NxTextLink, {});
  const renderEl = rtlRenderElement(NxTextLink, {});

  it('renders an <a> with the nx-text-link class', function() {
    const el = renderEl()!;

    expect(el.tagName).toBe('A');
    expect(el).toHaveClass('nx-text-link');
  });

  it('adds additional specified classes', function() {
    const el = renderEl({ className: 'foo' });

    expect(el).toHaveClass('foo');
    expect(el).toHaveClass('nx-text-link');
  });

  it('adds additional specified props', function() {
    const el = renderEl({ id: 'foo', lang: 'en_US' });

    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('lang', 'en_US');
  });

  it('adds the nx-text-link--external class if external is true', function() {
    expect(renderEl()).not.toHaveClass('nx-text-link--external');
    expect(renderEl({ external: true })).toHaveClass('nx-text-link--external');
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
    expect(renderEl()).not.toHaveAttribute('role', 'link');
    expect(renderEl({ disabled: true })).toHaveAttribute('role', 'link');
  });

  it('does not pass href value on the text link when the disabled prop is set', function() {
    expect(renderEl({ href: '#/pages/Text%20Link' })?.getAttribute('href')).toContain('#/pages/Text%20Link');
    expect(renderEl({ href: '#/pages/Text%20Link', disabled: true })?.getAttribute('href')).toBe(null);
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

  it('adds an icon after the children if external is true', function() {
    expect(getShallow({ children: <span/> })).not.toContainMatchingElement(NxFontAwesomeIcon);

    const el = quickRender();
    const s = screen.
    expect(screen.querySelector('.nx-icon...`)).not.toBeInTheDocument();
    expect(quickRender({ children: <span/>, external: true })).toContain(NxFontAwesomeIcon);
  });

  it('wraps non-element children in an element sibling to the icon', function() {
    expect(quickRender({ children: 'foo', external: true })).toMatchElement(
      <a>
        <span>foo</span>
        <NxFontAwesomeIcon icon={{} as IconProp} />
      </a>
    );

    expect(quickRender({ children: <div>foo</div>, external: true })).toMatchElement(
      <a>
        <div>foo</div>
        <NxFontAwesomeIcon icon={{} as IconProp} />
      </a>
    );
  });
});
