/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { createEvent, fireEvent, render } from '@testing-library/react';

import NxPagination, { Props } from '../NxPagination';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

describe('NxPagination', function() {
  const minimalProps = {
        currentPage: 0,
        pageCount: 1,
        onChange: () => {}
      },
      quickRender = rtlRender<Props>(NxPagination, minimalProps),
      renderEl = rtlRenderElement<Props>(NxPagination, minimalProps);

  it('adds custom classes and attrs to the element', function() {
    const el = renderEl({ className: 'foo', id: 'bar', spellCheck: true }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');
    expect(el).toHaveAttribute('id', 'bar');
    expect(el).toHaveAttribute('spellCheck', 'true');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('renders a top-level navigation element with an accessible name of "pagination"', function() {
    const view = quickRender(),
        nav = view.getByRole('navigation');

    expect(nav).toBe(view.container.firstElementChild);
    expect(nav).toHaveAccessibleName('pagination');
  });

  it('allows the navigation accessible name to be overridden via aria-label or aria-labelledby', function() {
    render(<div id="label-el">Labelled By</div>);

    const labelView = quickRender({ 'aria-label': 'Label' }),
        labelledByView = quickRender({ 'aria-labelledby': 'label-el' });

    expect(labelView.getByRole('navigation')).toHaveAccessibleName('Label');
    expect(labelledByView.getByRole('navigation')).toHaveAccessibleName('Labelled By');
  });

  describe('when there are no pages', function() {
    it('displays no buttons', function() {
      expect(quickRender({ currentPage: null, pageCount: 0 }).queryByRole('button')).not.toBeInTheDocument();
      expect(quickRender({ currentPage: undefined, pageCount: 0 }).queryByRole('button')).not.toBeInTheDocument();
    });
  });

  describe('when there is only one page', function() {
    it('displays a single page button with aria-current', function() {
      const view = quickRender(),
          btn = view.getByRole('button');

      expect(btn).toBeInTheDocument();
      expect(btn).toHaveAttribute('aria-current', 'page');
    });
  });

  describe('error conditions', function() {
    // RTL render is hard-coded to print any exceptions in the console, regardless of whether
    // we're trying to actually test for these exceptions
    beforeAll(function() {
      jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    describe('when pageCount is not valid', function() {
      it('throws a TypeError', function() {
        expect(() => quickRender({ pageCount: -1, currentPage: 1 })).toThrow(TypeError);
        expect(() => quickRender({ pageCount: Math.PI, currentPage: 1 })).toThrow(TypeError);
        expect(() => quickRender({ pageCount: Infinity, currentPage: 1 })).toThrow(TypeError);
        expect(() => quickRender({ pageCount: -Infinity, currentPage: 1 })).toThrow(TypeError);
        expect(() => quickRender({ pageCount: NaN, currentPage: 1 })).toThrow(TypeError);
      });
    });

    describe('when currentPage is not valid', function() {
      it('throws a TypeError', function() {
        expect(() => quickRender({ pageCount: 10, currentPage: -1 })).toThrow(TypeError);
        expect(() => quickRender({ pageCount: 10, currentPage: Math.PI})).toThrow(TypeError);
        expect(() => quickRender({ pageCount: 10, currentPage: 10 })).toThrow(TypeError);
        expect(() => quickRender({ pageCount: 10, currentPage: 11 })).toThrow(TypeError);
        expect(() => quickRender({ pageCount: 10, currentPage: Infinity })).toThrow(TypeError);
        expect(() => quickRender({ pageCount: 10, currentPage: -Infinity })).toThrow(TypeError);
        expect(() => quickRender({ pageCount: 10, currentPage: NaN })).toThrow(TypeError);
        expect(() => quickRender({ pageCount: 0, currentPage: 0 })).toThrow(TypeError);
        expect(() => quickRender({ pageCount: 0, currentPage: 1 })).toThrow(TypeError);
      });
    });
  });

  describe('when there are five or fewer pages', function() {
    it('renders only arrows and buttons for the individual pages', function() {
      const buttons2Page0 = quickRender({ pageCount: 2, currentPage: 0 }).getAllByRole('button');
      expect(buttons2Page0[0]).toHaveAccessibleName('goto first page');
      expect(buttons2Page0[1]).toHaveAccessibleName('goto last page');
      expect(buttons2Page0[2]).toHaveAccessibleName('goto next page');
      expect(buttons2Page0[0]).toHaveTextContent('1');
      expect(buttons2Page0[1]).toHaveTextContent('2');
      expect(buttons2Page0[0]).toHaveAttribute('aria-current', 'page');
      expect(buttons2Page0[1]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons2Page0[2]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons2Page0[0]).toHaveAttribute('aria-disabled', 'true');

      const buttons5Page1 = quickRender({ pageCount: 5, currentPage: 1 }).getAllByRole('button');
      expect(buttons5Page1[0]).toHaveAccessibleName('goto previous page');
      expect(buttons5Page1[1]).toHaveAccessibleName('goto first page');
      expect(buttons5Page1[2]).toHaveAccessibleName('goto page 2');
      expect(buttons5Page1[3]).toHaveAccessibleName('goto page 3');
      expect(buttons5Page1[4]).toHaveAccessibleName('goto page 4');
      expect(buttons5Page1[5]).toHaveAccessibleName('goto last page');
      expect(buttons5Page1[6]).toHaveAccessibleName('goto next page');
      expect(buttons5Page1[1]).toHaveTextContent('1');
      expect(buttons5Page1[2]).toHaveTextContent('2');
      expect(buttons5Page1[3]).toHaveTextContent('3');
      expect(buttons5Page1[4]).toHaveTextContent('4');
      expect(buttons5Page1[5]).toHaveTextContent('5');
      expect(buttons5Page1[0]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons5Page1[1]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons5Page1[2]).toHaveAttribute('aria-current', 'page');
      expect(buttons5Page1[3]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons5Page1[4]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons5Page1[5]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons5Page1[6]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons5Page1[2]).toHaveAttribute('aria-disabled', 'true');


      const buttons3Page2 = quickRender({ pageCount: 3, currentPage: 2 }).getAllByRole('button');
      expect(buttons3Page2[0]).toHaveAccessibleName('goto previous page');
      expect(buttons3Page2[1]).toHaveAccessibleName('goto first page');
      expect(buttons3Page2[2]).toHaveAccessibleName('goto page 2');
      expect(buttons3Page2[3]).toHaveAccessibleName('goto last page');
      expect(buttons3Page2[1]).toHaveTextContent('1');
      expect(buttons3Page2[2]).toHaveTextContent('2');
      expect(buttons3Page2[3]).toHaveTextContent('3');
      expect(buttons3Page2[0]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons3Page2[1]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons3Page2[2]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons3Page2[3]).toHaveAttribute('aria-current', 'page');
      expect(buttons3Page2[3]).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('when there are six pages', function() {
    it('renders only arrows and buttons for the individual pages', function() {
      const buttons6Page2 = quickRender({ pageCount: 6, currentPage: 2 }).getAllByRole('button');
      expect(buttons6Page2[0]).toHaveAccessibleName('goto previous page');
      expect(buttons6Page2[1]).toHaveAccessibleName('goto first page');
      expect(buttons6Page2[2]).toHaveAccessibleName('goto page 2');
      expect(buttons6Page2[3]).toHaveAccessibleName('goto page 3');
      expect(buttons6Page2[4]).toHaveAccessibleName('goto page 4');
      expect(buttons6Page2[5]).toHaveAccessibleName('goto page 5');
      expect(buttons6Page2[6]).toHaveAccessibleName('goto last page');
      expect(buttons6Page2[7]).toHaveAccessibleName('goto next page');
      expect(buttons6Page2[1]).toHaveTextContent('1');
      expect(buttons6Page2[2]).toHaveTextContent('2');
      expect(buttons6Page2[3]).toHaveTextContent('3');
      expect(buttons6Page2[4]).toHaveTextContent('4');
      expect(buttons6Page2[5]).toHaveTextContent('5');
      expect(buttons6Page2[6]).toHaveTextContent('6');
      expect(buttons6Page2[0]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons6Page2[1]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons6Page2[2]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons6Page2[3]).toHaveAttribute('aria-current', 'page');
      expect(buttons6Page2[4]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons6Page2[5]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons6Page2[6]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons6Page2[7]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons6Page2[3]).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('when there are seven or more pages', function() {
    it('renders an ellipsis button and the max page button', function() {
      const buttons7Page2 = quickRender({ pageCount: 7, currentPage: 2 }).getAllByRole('button');
      expect(buttons7Page2[0]).toHaveAccessibleName('goto previous page');
      expect(buttons7Page2[1]).toHaveAccessibleName('goto first page');
      expect(buttons7Page2[2]).toHaveAccessibleName('goto page 2');
      expect(buttons7Page2[3]).toHaveAccessibleName('goto page 3');
      expect(buttons7Page2[4]).toHaveAccessibleName('goto page 4');
      expect(buttons7Page2[5]).toHaveAccessibleName('goto page 5');
      expect(buttons7Page2[6]).toHaveAccessibleName('goto page 6');
      expect(buttons7Page2[7]).toHaveAccessibleName('goto last page');
      expect(buttons7Page2[8]).toHaveAccessibleName('goto next page');
      expect(buttons7Page2[1]).toHaveTextContent('1');
      expect(buttons7Page2[2]).toHaveTextContent('2');
      expect(buttons7Page2[3]).toHaveTextContent('3');
      expect(buttons7Page2[4]).toHaveTextContent('4');
      expect(buttons7Page2[5]).toHaveTextContent('5');
      expect(buttons7Page2[6]).toHaveTextContent('…');
      expect(buttons7Page2[7]).toHaveTextContent('7');
      expect(buttons7Page2[0]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons7Page2[1]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons7Page2[2]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons7Page2[3]).toHaveAttribute('aria-current', 'page');
      expect(buttons7Page2[4]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons7Page2[5]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons7Page2[6]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons7Page2[7]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons7Page2[8]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons7Page2[3]).toHaveAttribute('aria-disabled', 'true');

      const buttons25Page2 = quickRender({ pageCount: 25, currentPage: 2 }).getAllByRole('button');
      expect(buttons25Page2[0]).toHaveAccessibleName('goto previous page');
      expect(buttons25Page2[1]).toHaveAccessibleName('goto first page');
      expect(buttons25Page2[2]).toHaveAccessibleName('goto page 2');
      expect(buttons25Page2[3]).toHaveAccessibleName('goto page 3');
      expect(buttons25Page2[4]).toHaveAccessibleName('goto page 4');
      expect(buttons25Page2[5]).toHaveAccessibleName('goto page 5');
      expect(buttons25Page2[6]).toHaveAccessibleName('goto page 6');
      expect(buttons25Page2[7]).toHaveAccessibleName('goto last page');
      expect(buttons25Page2[8]).toHaveAccessibleName('goto next page');
      expect(buttons25Page2[1]).toHaveTextContent('1');
      expect(buttons25Page2[2]).toHaveTextContent('2');
      expect(buttons25Page2[3]).toHaveTextContent('3');
      expect(buttons25Page2[4]).toHaveTextContent('4');
      expect(buttons25Page2[5]).toHaveTextContent('5');
      expect(buttons25Page2[6]).toHaveTextContent('…');
      expect(buttons25Page2[7]).toHaveTextContent('25');
      expect(buttons25Page2[0]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons25Page2[1]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons25Page2[2]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons25Page2[3]).toHaveAttribute('aria-current', 'page');
      expect(buttons25Page2[4]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons25Page2[5]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons25Page2[6]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons25Page2[7]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons25Page2[8]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons25Page2[3]).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('when the current page is greater than 5', function() {
    it('renders the first page button and a descending ellipsis button', function() {
      const buttons10Page8 = quickRender({ pageCount: 10, currentPage: 8 }).getAllByRole('button');
      expect(buttons10Page8[0]).toHaveAccessibleName('goto previous page');
      expect(buttons10Page8[1]).toHaveAccessibleName('goto first page');
      expect(buttons10Page8[2]).toHaveAccessibleName('goto page 5');
      expect(buttons10Page8[3]).toHaveAccessibleName('goto page 6');
      expect(buttons10Page8[4]).toHaveAccessibleName('goto page 7');
      expect(buttons10Page8[5]).toHaveAccessibleName('goto page 8');
      expect(buttons10Page8[6]).toHaveAccessibleName('goto page 9');
      expect(buttons10Page8[7]).toHaveAccessibleName('goto last page');
      expect(buttons10Page8[8]).toHaveAccessibleName('goto next page');
      expect(buttons10Page8[1]).toHaveTextContent('1');
      expect(buttons10Page8[2]).toHaveTextContent('…');
      expect(buttons10Page8[3]).toHaveTextContent('6');
      expect(buttons10Page8[4]).toHaveTextContent('7');
      expect(buttons10Page8[5]).toHaveTextContent('8');
      expect(buttons10Page8[6]).toHaveTextContent('9');
      expect(buttons10Page8[7]).toHaveTextContent('10');
      expect(buttons10Page8[0]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons10Page8[1]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons10Page8[2]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons10Page8[3]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons10Page8[4]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons10Page8[5]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons10Page8[6]).toHaveAttribute('aria-current', 'page');
      expect(buttons10Page8[7]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons10Page8[8]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons10Page8[6]).toHaveAttribute('aria-disabled', 'true');

      const buttons25Page8 = quickRender({ pageCount: 25, currentPage: 8 }).getAllByRole('button');
      expect(buttons25Page8[0]).toHaveAccessibleName('goto previous page');
      expect(buttons25Page8[1]).toHaveAccessibleName('goto first page');
      expect(buttons25Page8[2]).toHaveAccessibleName('goto page 5');
      expect(buttons25Page8[3]).toHaveAccessibleName('goto page 6');
      expect(buttons25Page8[4]).toHaveAccessibleName('goto page 7');
      expect(buttons25Page8[5]).toHaveAccessibleName('goto page 8');
      expect(buttons25Page8[6]).toHaveAccessibleName('goto page 9');
      expect(buttons25Page8[7]).toHaveAccessibleName('goto page 10');
      expect(buttons25Page8[8]).toHaveAccessibleName('goto page 11');
      expect(buttons25Page8[9]).toHaveAccessibleName('goto last page');
      expect(buttons25Page8[10]).toHaveAccessibleName('goto next page');
      expect(buttons25Page8[1]).toHaveTextContent('1');
      expect(buttons25Page8[2]).toHaveTextContent('…');
      expect(buttons25Page8[3]).toHaveTextContent('6');
      expect(buttons25Page8[4]).toHaveTextContent('7');
      expect(buttons25Page8[5]).toHaveTextContent('8');
      expect(buttons25Page8[6]).toHaveTextContent('9');
      expect(buttons25Page8[7]).toHaveTextContent('10');
      expect(buttons25Page8[8]).toHaveTextContent('…');
      expect(buttons25Page8[9]).toHaveTextContent('25');
      expect(buttons25Page8[0]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons25Page8[1]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons25Page8[2]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons25Page8[3]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons25Page8[4]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons25Page8[5]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons25Page8[6]).toHaveAttribute('aria-current', 'page');
      expect(buttons25Page8[7]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons25Page8[8]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons25Page8[9]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons25Page8[10]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons25Page8[6]).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('when the pageCount is not divisible by 5 and the currentPage is less than 5 from the max', function() {
    it('renders the final group mod 5 of pages', function() {
      const buttons43Page40 = quickRender({ pageCount: 43, currentPage: 40 }).getAllByRole('button');
      expect(buttons43Page40[0]).toHaveAccessibleName('goto previous page');
      expect(buttons43Page40[1]).toHaveAccessibleName('goto first page');
      expect(buttons43Page40[2]).toHaveAccessibleName('goto page 40');
      expect(buttons43Page40[3]).toHaveAccessibleName('goto page 41');
      expect(buttons43Page40[4]).toHaveAccessibleName('goto page 42');
      expect(buttons43Page40[5]).toHaveAccessibleName('goto last page');
      expect(buttons43Page40[6]).toHaveAccessibleName('goto next page');
      expect(buttons43Page40[1]).toHaveTextContent('1');
      expect(buttons43Page40[2]).toHaveTextContent('…');
      expect(buttons43Page40[3]).toHaveTextContent('41');
      expect(buttons43Page40[4]).toHaveTextContent('42');
      expect(buttons43Page40[5]).toHaveTextContent('43');
      expect(buttons43Page40[0]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons43Page40[1]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons43Page40[2]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons43Page40[3]).toHaveAttribute('aria-current', 'page');
      expect(buttons43Page40[4]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons43Page40[5]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons43Page40[3]).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('when there are 5n + 1 pages and currentPage is the last page', function() {
    it('renders the previous page group along with the final page button', function() {
      const buttons41Page40 = quickRender({ pageCount: 41, currentPage: 40 }).getAllByRole('button');
      expect(buttons41Page40[0]).toHaveAccessibleName('goto previous page');
      expect(buttons41Page40[1]).toHaveAccessibleName('goto first page');
      expect(buttons41Page40[2]).toHaveAccessibleName('goto page 35');
      expect(buttons41Page40[3]).toHaveAccessibleName('goto page 36');
      expect(buttons41Page40[4]).toHaveAccessibleName('goto page 37');
      expect(buttons41Page40[5]).toHaveAccessibleName('goto page 38');
      expect(buttons41Page40[6]).toHaveAccessibleName('goto page 39');
      expect(buttons41Page40[7]).toHaveAccessibleName('goto page 40');
      expect(buttons41Page40[8]).toHaveAccessibleName('goto last page');
      expect(buttons41Page40[1]).toHaveTextContent('1');
      expect(buttons41Page40[2]).toHaveTextContent('…');
      expect(buttons41Page40[3]).toHaveTextContent('36');
      expect(buttons41Page40[4]).toHaveTextContent('37');
      expect(buttons41Page40[5]).toHaveTextContent('38');
      expect(buttons41Page40[6]).toHaveTextContent('39');
      expect(buttons41Page40[7]).toHaveTextContent('40');
      expect(buttons41Page40[8]).toHaveTextContent('41');
      expect(buttons41Page40[0]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons41Page40[1]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons41Page40[2]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons41Page40[3]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons41Page40[4]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons41Page40[5]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons41Page40[6]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons41Page40[7]).not.toHaveAttribute('aria-current', 'page');
      expect(buttons41Page40[8]).toHaveAttribute('aria-current', 'page');
      expect(buttons41Page40[8]).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('click handling', function() {
    describe('when the back arrow is clicked', function() {
      it('fires onChange with the previous page number and the event', function() {
        let capturedEvt;

        const onChangeSpy = jest.fn().mockImplementation((_, e) => capturedEvt = e.nativeEvent),
            btn = quickRender({ pageCount: 50, currentPage: 24, onChange: onChangeSpy })
                .getByRole('button', { name: 'goto previous page' }),
            evt = createEvent.click(btn);

        fireEvent(btn, evt);

        expect(onChangeSpy).toHaveBeenCalledWith(23, expect.anything());
        expect(capturedEvt).toBe(evt);
      });
    });

    describe('when the forward arrow is clicked', function() {
      it('fires onChange with the next page number and the event', function() {
        let capturedEvt;

        const onChangeSpy = jest.fn().mockImplementation((_, e) => capturedEvt = e.nativeEvent),
            btn = quickRender({ pageCount: 50, currentPage: 24, onChange: onChangeSpy })
                .getByRole('button', { name: 'goto next page' }),
            evt = createEvent.click(btn);

        fireEvent(btn, evt);

        expect(onChangeSpy).toHaveBeenCalledWith(25, expect.anything());
        expect(capturedEvt).toBe(evt);
      });
    });

    describe('when the min page is clicked', function() {
      it('fires onChange with 1 and the event', function() {
        let capturedEvt;

        const onChangeSpy = jest.fn().mockImplementation((_, e) => capturedEvt = e.nativeEvent),
            btn = quickRender({ pageCount: 50, currentPage: 24, onChange: onChangeSpy })
                .getByRole('button', { name: 'goto first page' }),
            evt = createEvent.click(btn);

        fireEvent(btn, evt);

        expect(onChangeSpy).toHaveBeenCalledWith(0, expect.anything());
        expect(capturedEvt).toBe(evt);
      });
    });

    describe('when the max page is clicked', function() {
      it('fires onChange with the max page number and the event', function() {
        let capturedEvt;

        const onChangeSpy = jest.fn().mockImplementation((_, e) => capturedEvt = e.nativeEvent),
            btn = quickRender({ pageCount: 50, currentPage: 24, onChange: onChangeSpy })
                .getByRole('button', { name: 'goto last page' }),
            evt = createEvent.click(btn);

        fireEvent(btn, evt);

        expect(onChangeSpy).toHaveBeenCalledWith(49, expect.anything());
        expect(capturedEvt).toBe(evt);
      });
    });

    describe('when the left ellipsis is clicked', function() {
      it('fires onChange with the page number one less than shown in the current group, and the event', function() {
        let capturedEvt;

        const onChangeSpy = jest.fn().mockImplementation((_, e) => capturedEvt = e.nativeEvent),
            btn = quickRender({ pageCount: 50, currentPage: 24, onChange: onChangeSpy })
                .getByRole('button', { name: 'goto page 20' }),
            evt = createEvent.click(btn);

        fireEvent(btn, evt);

        expect(btn).toHaveTextContent('…');
        expect(onChangeSpy).toHaveBeenCalledWith(19, expect.anything());
        expect(capturedEvt).toBe(evt);
      });
    });

    describe('when the right ellipsis is clicked', function() {
      it('fires onChange with the page number one more than shown in the current group, and the event', function() {
        let capturedEvt;

        const onChangeSpy = jest.fn().mockImplementation((_, e) => capturedEvt = e.nativeEvent),
            btn = quickRender({ pageCount: 50, currentPage: 24, onChange: onChangeSpy })
                .getByRole('button', { name: 'goto page 26' }),
            evt = createEvent.click(btn);

        fireEvent(btn, evt);

        expect(btn).toHaveTextContent('…');
        expect(onChangeSpy).toHaveBeenCalledWith(25, expect.anything());
        expect(capturedEvt).toBe(evt);
      });
    });

    describe('when the nearby page buttons are clicked', function() {
      it('fires onChange with the corresponding page number and the event', function() {
        let capturedEvt;

        const onChangeSpy = jest.fn().mockImplementation((_, e) => capturedEvt = e.nativeEvent),
            view = quickRender({ pageCount: 50, currentPage: 24, onChange: onChangeSpy }),
            page21Btn = view.getByRole('button', { name: 'goto page 21' }),
            page22Btn = view.getByRole('button', { name: 'goto page 22' }),
            page23Btn = view.getByRole('button', { name: 'goto page 23' }),
            page24Btn = view.getByRole('button', { name: 'goto page 24' }),
            evt21 = createEvent.click(page21Btn),
            evt22 = createEvent.click(page22Btn),
            evt23 = createEvent.click(page23Btn),
            evt24 = createEvent.click(page24Btn);

        // sanity check
        expect(page21Btn).toHaveTextContent('21');
        expect(page22Btn).toHaveTextContent('22');
        expect(page23Btn).toHaveTextContent('23');
        expect(page24Btn).toHaveTextContent('24');

        fireEvent(page21Btn, evt21);
        expect(onChangeSpy).toHaveBeenLastCalledWith(20, expect.anything());
        expect(capturedEvt).toBe(evt21);

        fireEvent(page22Btn, evt22);
        expect(onChangeSpy).toHaveBeenLastCalledWith(21, expect.anything());
        expect(capturedEvt).toBe(evt22);

        fireEvent(page23Btn, evt23);
        expect(onChangeSpy).toHaveBeenLastCalledWith(22, expect.anything());
        expect(capturedEvt).toBe(evt23);

        fireEvent(page24Btn, evt24);
        expect(onChangeSpy).toHaveBeenLastCalledWith(23, expect.anything());
        expect(capturedEvt).toBe(evt24);
      });
    });

    describe('when the current page button is clicked', function() {
      it('does not fire onChange', function() {
        const onChangeSpy = jest.fn(),
            btn = quickRender({ pageCount: 50, currentPage: 24, onChange: onChangeSpy })
                .getByRole('button', { name: 'goto page 25' }),
            evt = createEvent.click(btn);

        fireEvent(btn, evt);

        expect(onChangeSpy).not.toHaveBeenCalled();
      });
    });
  });

  it('puts type="button" on all buttons', function() {
    const buttons = quickRender({ pageCount: 50, currentPage: 24 }).getAllByRole('button');

    buttons.forEach(btn => {
      expect(btn).toHaveAttribute('type', 'button');
    });
  });
});
