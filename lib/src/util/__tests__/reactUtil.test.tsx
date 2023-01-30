/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { render } from '@testing-library/react';
import React, { ReactElement, ReactNode } from 'react';

import { ensureElement, ensureStartEndElements } from '../reactUtil';

describe('reactUtil', function() {
  function renderEl(node: ReactElement) {
    return render(node).container.firstElementChild;
  }

  describe('ensureStartEndElements', function() {
    it('passes through unrendering values as-is', function() {
      expect(ensureStartEndElements(null)).toBe(null);
      expect(ensureStartEndElements(undefined)).toBe(undefined);
      expect(ensureStartEndElements(true)).toBe(true);
      expect(ensureStartEndElements(false)).toBe(false);
    });

    it('passes through elements as-is', function() {
      const span = <span>foo</span>,
          div = <div>foo</div>;

      expect(ensureStartEndElements(span)).toBe(span);
      expect(ensureStartEndElements(div)).toBe(div);
    });

    it('wraps strings and numbers in a span', function() {
      const wrappedString = renderEl(ensureStartEndElements('foo') as ReactElement)!,
          wrappedNumber = renderEl(ensureStartEndElements(5) as ReactElement)!;

      expect(wrappedString.tagName).toBe('SPAN');
      expect(wrappedString).toHaveTextContent('foo');

      expect(wrappedNumber.tagName).toBe('SPAN');
      expect(wrappedNumber).toHaveTextContent('5');
    });

    it('passes through arrays that start and end with elements', function() {
      const arr = [<span key="foo">foo</span>, 'bar', null, false, <span key="baz">baz</span>];

      expect(ensureStartEndElements(arr)).toBe(arr);
    });

    it('passes through the empty array', function() {
      const arr: ReactNode[] = [];

      expect(ensureStartEndElements(arr)).toBe(arr);
    });

    it('wraps arrays that start with a string', function() {
      const arr = ['bar', <span key="baz">baz</span>],
          result = ensureStartEndElements(arr) as ReactElement,
          renderResult = renderEl(result);

      expect(renderResult).toContainHTML('<span>bar<span>baz</span></span>');

      // ensure key is preserved
      expect(result.props.children[1].key).toBe('baz');
    });

    it('wraps arrays that start with a number', function() {
      const arr = [5, <span key="baz">baz</span>],
          result = ensureStartEndElements(arr) as ReactElement,
          renderResult = renderEl(result);

      expect(renderResult).toContainHTML('<span>5<span>baz</span></span>');

      // ensure key is preserved
      expect(result.props.children[1].key).toBe('baz');
    });

    it('wraps arrays that end with a string', function() {
      const arr = [<span key="foo">foo</span>, 'bar'],
          result = ensureStartEndElements(arr) as ReactElement,
          renderResult = renderEl(result);

      expect(renderResult).toContainHTML('<span><span>foo</span>bar</span>');

      // ensure key is preserved
      expect(result.props.children[0].key).toBe('foo');
    });

    it('wraps arrays that end with a number', function() {
      const arr = [<span key="foo">foo</span>, 5],
          result = ensureStartEndElements(arr) as ReactElement,
          renderResult = renderEl(result);

      expect(renderResult).toContainHTML('<span><span>foo</span>5</span>');

      // ensure key is preserved
      expect(result.props.children[0].key).toBe('foo');
    });

    it('wraps arrays whose first printable element is a string', function() {
      [null, undefined, false, true].forEach(function(nonPrintableVal) {
        const arr = [nonPrintableVal, 'bar', <span key="baz">baz</span>],
            result = ensureStartEndElements(arr) as ReactElement,
            renderResult = renderEl(result);

        expect(renderResult).toContainHTML('<span>bar<span>baz</span></span>');

        // ensure key is preserved
        expect(result.props.children[2].key).toBe('baz');
      });
    });

    it('wraps arrays whose first printable element is a number', function() {
      [null, undefined, false, true].forEach(function(nonPrintableVal) {
        const arr = [nonPrintableVal, 5, <span key="baz">baz</span>],
            result = ensureStartEndElements(arr) as ReactElement,
            renderResult = renderEl(result);

        expect(renderResult).toContainHTML('<span>5<span>baz</span></span>');

        // ensure key is preserved
        expect(result.props.children[2].key).toBe('baz');
      });
    });

    it('wraps arrays whose last printable element is a string', function() {
      [null, undefined, false, true].forEach(function(nonPrintableVal) {
        const arr = [<span key="foo">foo</span>, 'bar', nonPrintableVal],
            result = ensureStartEndElements(arr) as ReactElement,
            renderResult = renderEl(result);

        expect(renderResult).toContainHTML('<span><span>foo</span>bar</span>');

        // ensure key is preserved
        expect(result.props.children[0].key).toBe('foo');
      });
    });

    it('wraps arrays whose last printable element is a number', function() {
      [null, undefined, false, true].forEach(function(nonPrintableVal) {
        const arr = [<span key="foo">foo</span>, 5, nonPrintableVal],
            result = ensureStartEndElements(arr) as ReactElement,
            renderResult = renderEl(result);

        expect(renderResult).toContainHTML('<span><span>foo</span>5</span>');

        // ensure key is preserved
        expect(result.props.children[0].key).toBe('foo');
      });
    });

    // can't really test fragments since they are opaque
  });

  describe('ensureElement', function() {
    it('passes through unrendering values as-is', function() {
      expect(ensureElement(null)).toBe(null);
      expect(ensureElement(undefined)).toBe(undefined);
      expect(ensureElement(true)).toBe(true);
      expect(ensureElement(false)).toBe(false);
    });

    it('passes through elements as-is', function() {
      const span = <span>foo</span>,
          div = <div>foo</div>;

      expect(ensureElement(span)).toBe(span);
      expect(ensureElement(div)).toBe(div);
    });

    it('wraps strings and numbers in a span', function() {
      const wrappedString = renderEl(ensureElement('foo') as ReactElement)!,
          wrappedNumber = renderEl(ensureElement(5) as ReactElement)!;

      expect(wrappedString.tagName).toBe('SPAN');
      expect(wrappedString).toHaveTextContent('foo');

      expect(wrappedNumber.tagName).toBe('SPAN');
      expect(wrappedNumber).toHaveTextContent('5');
    });

    // The key difference from ensureStartEndElements
    it('wraps arrays that start and end with elements', function() {
      const arr = [<span key="foo">foo</span>, 'bar', null, false, <span key="baz">baz</span>],
          result = ensureElement(arr) as ReactElement,
          renderResult = renderEl(result);

      expect(renderResult)
          .toContainHTML('<span><span>foo</span>bar<span>baz</span></span>');

      expect(result.props.children[0].key).toBe('foo');
      expect(result.props.children[4].key).toBe('baz');
    });

    it('passes through the empty array', function() {
      const arr: ReactNode[] = [];

      expect(ensureElement(arr)).toBe(arr);
    });

    it('wraps arrays that start with a string', function() {
      const arr = ['bar', <span key="baz">baz</span>],
          result = ensureStartEndElements(arr) as ReactElement,
          renderResult = renderEl(result);

      expect(renderResult).toContainHTML('<span>bar<span>baz</span></span>');

      // ensure key is preserved
      expect(result.props.children[1].key).toBe('baz');
    });

    it('wraps arrays that start with a number', function() {
      const arr = [5, <span key="baz">baz</span>],
          result = ensureStartEndElements(arr) as ReactElement,
          renderResult = renderEl(result);

      expect(renderResult).toContainHTML('<span>5<span>baz</span></span>');

      // ensure key is preserved
      expect(result.props.children[1].key).toBe('baz');
    });

    it('wraps arrays that end with a string', function() {
      const arr = [<span key="foo">foo</span>, 'bar'],
          result = ensureStartEndElements(arr) as ReactElement,
          renderResult = renderEl(result);

      expect(renderResult).toContainHTML('<span><span>foo</span>bar</span>');

      // ensure key is preserved
      expect(result.props.children[0].key).toBe('foo');
    });

    it('wraps arrays that end with a number', function() {
      const arr = [<span key="foo">foo</span>, 5],
          result = ensureStartEndElements(arr) as ReactElement,
          renderResult = renderEl(result);

      expect(renderResult).toContainHTML('<span><span>foo</span>5</span>');

      // ensure key is preserved
      expect(result.props.children[0].key).toBe('foo');
    });

    it('wraps arrays whose first printable element is a string', function() {
      [null, undefined, false, true].forEach(function(nonPrintableVal) {
        const arr = [nonPrintableVal, 'bar', <span key="baz">baz</span>],
            result = ensureStartEndElements(arr) as ReactElement,
            renderResult = renderEl(result);

        expect(renderResult).toContainHTML('<span>bar<span>baz</span></span>');

        // ensure key is preserved
        expect(result.props.children[2].key).toBe('baz');
      });
    });

    it('wraps arrays whose first printable element is a number', function() {
      [null, undefined, false, true].forEach(function(nonPrintableVal) {
        const arr = [nonPrintableVal, 5, <span key="baz">baz</span>],
            result = ensureStartEndElements(arr) as ReactElement,
            renderResult = renderEl(result);

        expect(renderResult).toContainHTML('<span>5<span>baz</span></span>');

        // ensure key is preserved
        expect(result.props.children[2].key).toBe('baz');
      });
    });

    it('wraps arrays whose last printable element is a string', function() {
      [null, undefined, false, true].forEach(function(nonPrintableVal) {
        const arr = [<span key="foo">foo</span>, 'bar', nonPrintableVal],
            result = ensureStartEndElements(arr) as ReactElement,
            renderResult = renderEl(result);

        expect(renderResult).toContainHTML('<span><span>foo</span>bar</span>');

        // ensure key is preserved
        expect(result.props.children[0].key).toBe('foo');
      });
    });

    it('wraps arrays whose last printable element is a number', function() {
      [null, undefined, false, true].forEach(function(nonPrintableVal) {
        const arr = [<span key="foo">foo</span>, 5, nonPrintableVal],
            result = ensureStartEndElements(arr) as ReactElement,
            renderResult = renderEl(result);

        expect(renderResult).toContainHTML('<span><span>foo</span>5</span>');

        // ensure key is preserved
        expect(result.props.children[0].key).toBe('foo');
      });
    });

    // can't really test fragments since they are opaque
  });
});
