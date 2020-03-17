/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ReactElement, ReactNode } from 'react';
import { shallow } from 'enzyme';

import { ensureElement } from '../reactUtil';

describe('reactUtil', function() {
  describe('ensureElement', function() {
    it('passes through unrendering values as-is', function() {
      expect(ensureElement(null)).toBe(null);
      expect(ensureElement(undefined)).toBe(undefined);
      expect(ensureElement(true)).toBe(true);
      expect(ensureElement(false)).toBe(false);
    });

    it('passes through elements as-is', function() {
      expect(shallow(ensureElement(<span>foo</span>) as ReactElement)).toMatchElement(<span>foo</span>);
      expect(shallow(ensureElement(<div>foo</div>) as ReactElement)).toMatchElement(<div>foo</div>);
    });

    it('wraps strings and numbers in a span', function() {
      expect(shallow(ensureElement('foo') as ReactElement)).toMatchElement(<span>foo</span>);
      expect(shallow(ensureElement(5) as ReactElement)).toMatchElement(<span>5</span>);
      expect(shallow(ensureElement(NaN) as ReactElement)).toMatchElement(<span>NaN</span>);
    });

    it('passes through arrays that start and end with elements', function() {
      const arr = [<span key="foo">foo</span>, 'bar', null, false, <span key="baz">baz</span>];

      expect(ensureElement(arr)).toBe(arr);
    });

    it('passes through the empty array', function() {
      const arr: ReactNode[] = [];

      expect(ensureElement(arr)).toBe(arr);
    });

    it('wraps arrays that start with a string', function() {
      const arr = ['bar', <span key="baz">baz</span>];

      expect(shallow(ensureElement(arr) as ReactElement)).toMatchElement(<span>bar<span key="baz">baz</span></span>);
    });

    it('wraps arrays that start with a number', function() {
      const arr = [5, <span key="baz">baz</span>];

      expect(shallow(ensureElement(arr) as ReactElement)).toMatchElement(<span>5<span key="baz">baz</span></span>);
    });

    it('wraps arrays that end with a string', function() {
      const arr = [<span key="foo">foo</span>, 'bar'];

      expect(shallow(ensureElement(arr) as ReactElement)).toMatchElement(<span><span key="foo">foo</span>bar</span>);
    });

    it('wraps arrays that end with a number', function() {
      const arr = [<span key="foo">foo</span>, 5];

      expect(shallow(ensureElement(arr) as ReactElement)).toMatchElement(<span><span key="foo">foo</span>5</span>);
    });

    it('wraps arrays whose first printable element is a string', function() {
      [null, undefined, false, true].forEach(function(nonPrintableVal) {
        const arr = [nonPrintableVal, 'bar', <span key="baz">baz</span>];

        expect(shallow(ensureElement(arr) as ReactElement))
            .toMatchElement(<span>{nonPrintableVal}bar<span key="baz">baz</span></span>);
      });
    });

    it('wraps arrays whose first printable element is a number', function() {
      [null, undefined, false, true].forEach(function(nonPrintableVal) {
        const arr = [nonPrintableVal, 5, <span key="baz">baz</span>];

        expect(shallow(ensureElement(arr) as ReactElement))
            .toMatchElement(<span>{nonPrintableVal}5<span key="baz">baz</span></span>);
      });
    });

    it('wraps arrays whose last printable element is a string', function() {
      [null, undefined, false, true].forEach(function(nonPrintableVal) {
        const arr = [<span key="foo">foo</span>, 'bar', nonPrintableVal];

        expect(shallow(ensureElement(arr) as ReactElement))
            .toMatchElement(<span><span key="bar">foo</span>bar{nonPrintableVal}</span>);
      });
    });

    it('wraps arrays whose last printable element is a number', function() {
      [null, undefined, false, true].forEach(function(nonPrintableVal) {
        const arr = [<span key="foo">foo</span>, 5, nonPrintableVal];

        expect(shallow(ensureElement(arr) as ReactElement))
            .toMatchElement(<span><span key="bar">foo</span>5{nonPrintableVal}</span>);
      });
    });

    // can't really test fragments since they are opaque
  });
});
