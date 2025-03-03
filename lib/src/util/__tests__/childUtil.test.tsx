/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ReactNode } from 'react';

import { splitOutFirst, textContent } from '../childUtil';

function Component() {
  return <div />;
}

describe('childUtil', function() {
  let component: ReactNode = null,
      div: ReactNode = null,
      span: ReactNode = null;

  beforeEach(function() {
    component = <Component />;
    div = <div key="d" />;
    span = <span key="s" />;
  });

  describe('splitOutFirst', function() {
    describe('when given empty children', function() {
      it('return [null, []] ', function() {
        expect(splitOutFirst(Component, null)).toEqual([null, []]);
        expect(splitOutFirst(Component, [])).toEqual([null, []]);
      });
    });

    describe('when given a single matching child', function() {
      it('returns that child and an empty list', function() {
        expect(splitOutFirst(Component, component)).toEqual([component, []]);
        expect(splitOutFirst(Component, [component])).toEqual([component, []]);
      });
    });

    describe('when given a series of children with the match first', function() {
      it('returns that child and then the rest', function() {

        expect(splitOutFirst(Component, [component, div, span])).toEqual([component, [div, span]]);
      });
    });

    describe('when given a series of children with the match last', function() {
      it('returns the match and then the rest', function() {
        expect(splitOutFirst(Component, [div, span, component])).toEqual([component, [div, span]]);
      });
    });

    describe('when given a series of children with the match in the middle', function() {
      it('returns the match and then the rest', function() {
        expect(splitOutFirst(Component, [div, component, span])).toEqual([component, [div, span]]);
      });
    });

    describe('when given a series of children with multiple matches', function() {
      it('returns the first match and then the rest of the children', function() {
        const otherComponent = <Component key="c" />,
            results = splitOutFirst(Component, [div, component, span, otherComponent]);

        expect(results).toEqual([component, [div, span, otherComponent]]);
        expect(results[0]).toBe(component);
        expect((results[1] as ReactNode[])[2]).toBe(otherComponent);
      });
    });

    describe('when given children with no keys', function() {
      it('adds keys to the non-matching element children', function() {
        // eslint-disable-next-line react/jsx-key
        const results = splitOutFirst(Component, [component, div, <div />, span, <span />, 'foo']);

        expect(results).toEqual([component, [div, <div key={1} />, span, <span key={3} />, 'foo']]);
      });
    });
  });

  describe('textContent', function() {
    it('returns basic results', function() {
      expect(textContent(undefined)).toBe('');
      expect(textContent(null)).toBe('');
      expect(textContent(true)).toBe('');
      expect(textContent(false)).toBe('');
      expect(textContent('test')).toBe('test');
      expect(textContent(1)).toBe('1');
    });

    it('returns all text from complex jsx', function() {
      const jsx = (
        <>
          1
          <span>2</span>
          <div><span>3</span></div>
        </>
      );
      expect(textContent(jsx)).toBe('123');
    });
  });
});
