/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { getShallowComponent } from '../../../__testutils__/enzymeUtils';

import NxTextLink from '../NxTextLink';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

describe('NxTextLink', function() {
  const getShallow = getShallowComponent(NxTextLink, {});

  it('renders an <a> with the nx-text-link class', function() {
    expect(getShallow()).toMatchSelector('a.nx-text-link');
  });

  it('adds additional specified classes', function() {
    const component = getShallow({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-text-link');
  });

  it('adds additional specified props', function() {
    const component = getShallow({ id: 'foo', lang: 'en_US' });

    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('lang', 'en_US');
  });

  it('adds the nx-text-link--external class if external is true', function() {
    expect(getShallow()).not.toHaveClassName('nx-text-link--external');
    expect(getShallow({ external: true })).toHaveClassName('nx-text-link--external');
  });

  it('adds the noreferrer rel if the noReferrer prop is true', function() {
    expect(getShallow()).toHaveProp('rel', '');
    expect(getShallow({ rel: 'foo' })).toHaveProp('rel', 'foo');

    expect(getShallow({ noReferrer: true })).toHaveProp('rel', 'noreferrer');

    expect(getShallow({ noReferrer: true, rel: 'foo' }).prop('rel')).toContain('noreferrer');
    expect(getShallow({ noReferrer: true, rel: 'foo' }).prop('rel')).toContain('foo');
  });

  it('adds the noreferrer rel if the external prop is true and noReferrer is not false', function() {
    expect(getShallow({ external: true })).toHaveProp('rel', 'noreferrer');

    expect(getShallow({ external: true, rel: 'foo' }).prop('rel')).toContain('foo');
    expect(getShallow({ external: true, rel: 'foo' }).prop('rel')).toContain('noreferrer');

    expect(getShallow({ external: true, noReferrer: true })).toHaveProp('rel', 'noreferrer');
    expect(getShallow({ external: true, noReferrer: false })).toHaveProp('rel', '');

    expect(getShallow({ external: true, noReferrer: true, rel: 'foo' }).prop('rel')).toContain('noreferrer');
    expect(getShallow({ external: true, noReferrer: true, rel: 'foo' }).prop('rel')).toContain('foo');
  });

  it('sets the target to _blank if newTab is true, unless a different target is specified', function() {
    expect(getShallow()).toHaveProp('target', '');
    expect(getShallow({ newTab: true })).toHaveProp('target', '_blank');

    expect(getShallow({ target: 'asdf' })).toHaveProp('target', 'asdf');
    expect(getShallow({ target: 'asdf', newTab: true })).toHaveProp('target', 'asdf');
  });

  it('sets the target to _blank if the external prop is true and newTab is not false, unless a different target is ' +
      'specified', function() {
    expect(getShallow({ external: true })).toHaveProp('target', '_blank');

    expect(getShallow({ external: true, target: 'asdf' })).toHaveProp('target', 'asdf');

    expect(getShallow({ external: true, newTab: true })).toHaveProp('target', '_blank');
    expect(getShallow({ external: true, newTab: false })).toHaveProp('target', '');

    expect(getShallow({ external: true, noReferrer: true, target: 'asdf' })).toHaveProp('target', 'asdf');
  });

  it('adds an icon after the children if external is true', function() {
    expect(getShallow({ children: <span/> })).not.toContainMatchingElement(NxFontAwesomeIcon);
    expect(getShallow({ children: <span/>, external: true })).toContainMatchingElement(NxFontAwesomeIcon);
  });

  it('wraps non-element children in an element sibling to the icon', function() {
    expect(getShallow({ children: 'foo', external: true })).toMatchElement(
      <a>
        <span>foo</span>
        <NxFontAwesomeIcon icon={{} as IconProp} />
      </a>
    );

    expect(getShallow({ children: <div>foo</div>, external: true })).toMatchElement(
      <a>
        <div>foo</div>
        <NxFontAwesomeIcon icon={{} as IconProp} />
      </a>
    );
  });
});
