/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useRef } from 'react';
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

  it('returns an object with a scrollTo function', function() {
    const Fixture = () => {
      const { scrollTo } = useScrollSpy({ foo: useRef(null) });

      return <div onClick={scrollTo as any}></div>;
    };

    const component = mount(<Fixture />).find('div');

    expect(component.prop('onClick')).toBeInstanceOf(Function);
  });

  it('throws an error if passed an empty object', function() {
    const Fixture = () => {
      useScrollSpy({});

      return <div />;
    };

    expect(() => mount(<Fixture />)).toThrowError();
  });

  describe('withScrollSpy', function() {
    it('can wrap an element without errors', function() {
      const Fixture = () => {
        const { withScrollSpy } = useScrollSpy({ foo: useRef(null) });

        return withScrollSpy(<div id="foo" />);
      };

      expect(mount(<Fixture />)).toContainMatchingElement('#foo');
    });

    it('does not override the ref on the wrapped element', function() {
      const Fixture = forwardRef<HTMLDivElement>((_, ref) => {
        const { withScrollSpy } = useScrollSpy({ foo: useRef(null) });

        return withScrollSpy(<div ref={ref} id="foo" />);
      });

      const ref = React.createRef<HTMLDivElement>(),
          component = mount(<Fixture ref={ref} />);

      expect(ref.current).toBe(component.getDOMNode());
    });

    it('does not override the onScroll on the wrapped element', function() {
      const Fixture = (({ onScroll }: { onScroll: any }) => {
        const { withScrollSpy } = useScrollSpy({ foo: useRef(null) });

        return withScrollSpy(<div onScroll={onScroll} id="foo" />);
      });

      const onScroll = jest.fn(),
          component = mount(<Fixture onScroll={onScroll} />);

      expect(onScroll).not.toHaveBeenCalled();

      component.find('#foo').simulate('scroll', { currentTarget: component.getDOMNode() });

      expect(onScroll).toHaveBeenCalled();
    });
  });

  // jsdom does not really implement getBoundingClientRect - it just sets all of the fields to zero.
  // It is therefore unsuitable for testing most of the behavior of this hook
});
