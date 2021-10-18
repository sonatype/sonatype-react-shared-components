/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import withClass from '../withClass';
import { getShallowComponent } from '../../__testutils__/enzymeUtils';

describe('withClass', function() {
  const ExampleComponent = withClass('hgroup', 'foo-bar'),
      getShallow = getShallowComponent(ExampleComponent, {});

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
