/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxBackButton, { Props } from '../NxBackButton';

describe('NxBackButton', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxBackButton, { href: '/foo' });

  it('renders a <div> with nx-back-button and tm-back-button classes containing an <a>', function() {
    expect(getShallowComponent()).toMatchSelector('div.nx-back-button.tm-back-button');
    expect(getShallowComponent().find('a')).toExist();
  });

  it('renders the link with the nx-text-link class', function() {
    expect(getShallowComponent().find('a')).toHaveProp('href', '/foo');
    expect(getShallowComponent().find('a')).toHaveClassName('nx-text-link');
  });

  it('renders the specified text within the link', function() {
    expect(getShallowComponent({ text: 'Link Text' }).find('a').render().text()).toBe('Link Text');
  });

  it('ignores the targetPageTitle when the text prop is set', function() {
    expect(getShallowComponent({ text: 'Link Text', targetPageTitle: 'BarBaz' }).find('a').render().text())
        .toBe('Link Text');
  });

  it('renders text based on the targetPageTitle if no text was specified', function() {
    expect(getShallowComponent({ targetPageTitle: 'BarBaz' }).find('a').render().text()).toBe('Back to BarBaz');
  });

  it('renders just the word "Back" if no text was specified and the state does not have a title', function() {
    expect(getShallowComponent().find('a').render().text()).toBe('Back');
  });
});
