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
  it('returns an object with a scrollTo function', function() {
    let scrollTo;

    const Fixture = () => {
      const retval = useScrollSpy({ foo: useRef(null) });

      scrollTo = retval.scrollTo;

      return <div />;
    };

    mount(<Fixture />).find('div');

    expect(scrollTo).toBeInstanceOf(Function);
  });

  it('returns scrollContainerProps containing a ref and an onScroll function', function() {
    let ref, onScroll;

    const Fixture = () => {
      const { scrollContainerProps } = useScrollSpy({ foo: useRef(null) });

      ref = scrollContainerProps.ref;
      onScroll = scrollContainerProps.onScroll;

      return <div />;
    };

    mount(<Fixture />).find('div');

    expect(onScroll).toBeInstanceOf(Function);
    expect(ref).toBeInstanceOf(Function);
  });

  it('returns an activeSection string', function() {
    let activeSection;

    const Fixture = () => {
      const retval = useScrollSpy({ foo: useRef(null) });

      activeSection = retval.activeSection;

      return <div />;
    };

    mount(<Fixture />).find('div');

    expect(typeof activeSection).toBe('string');
  });

  it('throws an error if passed an empty object', function() {
    const Fixture = () => {
      useScrollSpy({});

      return <div />;
    };

    expect(() => mount(<Fixture />)).toThrowError();
  });

  // jsdom does not really implement getBoundingClientRect - it just sets all of the fields to zero.
  // It is therefore unsuitable for testing most of the behavior of this hook
});
