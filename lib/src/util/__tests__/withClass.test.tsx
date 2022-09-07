/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import withClass from '../withClass';
import { getShallowComponent } from '../../__testutils__/enzymeUtils';

describe('withClass', function() {
  const ExampleComponent = withClass('hgroup', 'foo-bar'),
      getShallow = getShallowComponent(ExampleComponent, {});

  it('forwards a ref to the element', function() {
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

  it('creates a component constructor that makes an element with the specified role', function() {
    const ExampleComponentWithRole = withClass('span', 'baz', 'status'),
        component = shallow(<ExampleComponentWithRole />);

    expect(component).toHaveProp('role', 'status');
  });

  it('creates a component which can take classNames to add to the return element', function() {
    const component = getShallow({ className: 'baz' });

    expect(component).toHaveClassName('baz');
    expect(component).toHaveClassName('foo-bar');
  });

  it('creates a component which can take a role which overrides the role specified in the withClass invocation',
      function() {
        const componentWithNoDefaultRole = getShallow({ className: 'baz', role: 'modal' });
        expect(componentWithNoDefaultRole).toHaveProp('role', 'modal');

        const ExampleComponentWithRole = withClass('span', 'baz', 'status'),
            componentWithDefaultRole = shallow(<ExampleComponentWithRole role="modal" />);

        expect(componentWithDefaultRole).toHaveProp('role', 'modal');
      }
  );

  it('creates a component which can take additional props for its native element', function() {
    const component = getShallow({ id: 'baz', lang: 'en_US' });

    expect(component).toHaveProp('id', 'baz');
    expect(component).toHaveProp('lang', 'en_US');
  });

  it('passes attributes to the created element', function() {
    const ExampleArticleElementWithTabIndex = withClass('article', 'foo', undefined, { tabIndex: 0 }),
        component = shallow(<ExampleArticleElementWithTabIndex />);

    expect(component).toHaveProp('tabIndex', 0);
  });
});
