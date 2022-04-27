/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef } from 'react';
import { mount } from 'enzyme';

import useScrollSpy from '../useScrollSpy';

describe('useScrollSpy', function() {
  jest.useFakeTimers();

  let container: HTMLElement;

  beforeEach(function() {
    container = document.createElement('div');
    document.body.append(container);
  });

  afterEach(function() {
    container.remove();
  });

  it('returns an object with an onScroll function, and a scrollTo function', function() {
    const Fixture = () => {
      const { onScroll, scrollTo, activeSection } = useScrollSpy({ foo: useRef(null) });

      return <div onScroll={onScroll} onClick={scrollTo as any}>{activeSection}</div>;
    };

    const component = mount(<Fixture />).find('div');

    expect(component.prop('onScroll')).toBeInstanceOf(Function);
    expect(component.prop('onClick')).toBeInstanceOf(Function);
  });

  it('initially returns the first object key in its param as the activeSection', function() {
    const Fixture = () => {
      const { activeSection } = useScrollSpy({ foo: useRef(null), bar: useRef(null) });

      return <div>{activeSection}</div>;
    };

    const component = mount(<Fixture />);
    expect(component.text()).toBe('foo');
  });

  it('throws an error if passed an empty object', function() {
    const Fixture = () => {
      useScrollSpy({});

      return <div />;
    };

    expect(() => mount(<Fixture />)).toThrowError();
  });

  // jsdom does not really implement getBoundingClientRect - it just sets all of the fields to zero.
  // It is therefore unsuitable for testing most of he behavior of this hook
});
