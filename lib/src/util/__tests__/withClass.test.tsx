/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';
import withClass from '../withClass';
import { getShallowComponent } from '../../__testutils__/enzymeUtils';

describe('withClass', function() {
  const ExampleComponent = withClass('hgroup', 'foo-bar'),
      getShallow = getShallowComponent(ExampleComponent, {});

  it('forwards a ref to the specified label element', function() {
    const ExampleLabelComponent = withClass('label', 'foo-bar');
    const ref = React.createRef<HTMLLabelElement>();

    // note: the fragment is necessary to get around an enzyme issue:
    // https://github.com/enzymejs/enzyme/issues/1852#issuecomment-433145879
    const label = mount(<><ExampleLabelComponent ref={ref}>foo</ExampleLabelComponent></>);

    expect(ref.current).toBe(label.getDOMNode());
  });

  it('creates a component constructor that makes an element with the specified tag and class', function() {
    expect(getShallow()).toMatchSelector('hgroup.foo-bar');
  });

  it('creates a component which can take classNames to add to the return element', function() {
    const component = getShallow({ className: 'baz' });

    expect(component).toHaveClassName('baz');
    expect(component).toHaveClassName('foo-bar');
  });

  it('creates a component which can take additional props for its native element', function() {
    const component = getShallow({ id: 'baz', lang: 'en_US' });

    expect(component).toHaveProp('id', 'baz');
    expect(component).toHaveProp('lang', 'en_US');
  });
});
