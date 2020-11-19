/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import NxPagination, { Props } from '../NxPagination';
import NxButton from '../../NxButton/NxButton';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';

/* eslint-disable @typescript-eslint/no-object-literal-type-assertion */
describe('NxPagination', function() {
  const minimalProps = {
        currentPage: 0,
        pageCount: 1,
        onChange: () => {}
      },
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxPagination, minimalProps);

  it('renders an nx-btn-bar', function() {
    expect(getShallowComponent()).toHaveClassName('nx-btn-bar');
  });

  it('adds custom class names to the btn bar', function() {
    const component = getShallowComponent({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-btn-bar');
  });

  it('adds native div attrs to the btn bar', function() {
    const component = getShallowComponent({ id: 'foo', spellCheck: true });

    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('spellCheck', true);
  });

  describe('when there are no pages', function() {
    it('displays no buttons', function() {
      expect(getShallowComponent({ currentPage: null, pageCount: 0 })).toMatchElement(<div/>);
      expect(getShallowComponent({ currentPage: undefined, pageCount: 0 })).toMatchElement(<div/>);
    });
  });

  describe('when there is only one page', function() {
    it('displays a single selected page button', function() {
      const component = getShallowComponent(),
          btn = component.children();

      expect(btn).toMatchSelector(NxButton);
      expect(btn).toHaveClassName('selected');
    });
  });

  describe('when pageCount is not valid', function() {
    it('throws a TypeError', function() {
      expect(() => getShallowComponent({ pageCount: -1, currentPage: 1 })).toThrow(TypeError);
      expect(() => getShallowComponent({ pageCount: Math.PI, currentPage: 1 })).toThrow(TypeError);
      expect(() => getShallowComponent({ pageCount: Infinity, currentPage: 1 })).toThrow(TypeError);
      expect(() => getShallowComponent({ pageCount: -Infinity, currentPage: 1 })).toThrow(TypeError);
      expect(() => getShallowComponent({ pageCount: NaN, currentPage: 1 })).toThrow(TypeError);
    });
  });

  describe('when currentPage is not valid', function() {
    it('throws a TypeError', function() {
      expect(() => getShallowComponent({ pageCount: 10, currentPage: -1 })).toThrow(TypeError);
      expect(() => getShallowComponent({ pageCount: 10, currentPage: Math.PI})).toThrow(TypeError);
      expect(() => getShallowComponent({ pageCount: 10, currentPage: 10 })).toThrow(TypeError);
      expect(() => getShallowComponent({ pageCount: 10, currentPage: 11 })).toThrow(TypeError);
      expect(() => getShallowComponent({ pageCount: 10, currentPage: Infinity })).toThrow(TypeError);
      expect(() => getShallowComponent({ pageCount: 10, currentPage: -Infinity })).toThrow(TypeError);
      expect(() => getShallowComponent({ pageCount: 10, currentPage: NaN })).toThrow(TypeError);
      expect(() => getShallowComponent({ pageCount: 0, currentPage: 0 })).toThrow(TypeError);
      expect(() => getShallowComponent({ pageCount: 0, currentPage: 1 })).toThrow(TypeError);
    });
  });

  describe('when there are five or fewer pages', function() {
    it('renders only arrows and buttons for the individual pages', function() {
      expect(getShallowComponent({ pageCount: 2, currentPage: 0 })).toMatchElement(
        <nav>
          <NxButton>1</NxButton>
          <NxButton>2</NxButton>
          <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
        </nav>
      );

      expect(getShallowComponent({ pageCount: 5, currentPage: 1 })).toMatchElement(
        <nav>
          <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
          <NxButton>1</NxButton>
          <NxButton>2</NxButton>
          <NxButton>3</NxButton>
          <NxButton>4</NxButton>
          <NxButton>5</NxButton>
          <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
        </nav>
      );

      expect(getShallowComponent({ pageCount: 3, currentPage: 2 })).toMatchElement(
        <nav>
          <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
          <NxButton>1</NxButton>
          <NxButton>2</NxButton>
          <NxButton>3</NxButton>
        </nav>
      );
    });
  });

  describe('when there are six pages', function() {
    it('renders only arrows and buttons for the individual pages', function() {
      expect(getShallowComponent({ pageCount: 6, currentPage: 2 })).toMatchElement(
        <nav>
          <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
          <NxButton>1</NxButton>
          <NxButton>2</NxButton>
          <NxButton>3</NxButton>
          <NxButton>4</NxButton>
          <NxButton>5</NxButton>
          <NxButton>6</NxButton>
          <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
        </nav>
      );
    });
  });

  describe('when there are seven or more pages', function() {
    it('renders an ellipsis button and the max page button', function() {
      expect(getShallowComponent({ pageCount: 7, currentPage: 2 })).toMatchElement(
        <nav>
          <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
          <NxButton>1</NxButton>
          <NxButton>2</NxButton>
          <NxButton>3</NxButton>
          <NxButton>4</NxButton>
          <NxButton>5</NxButton>
          <NxButton>…</NxButton>
          <NxButton>7</NxButton>
          <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
        </nav>
      );

      expect(getShallowComponent({ pageCount: 25, currentPage: 2 })).toMatchElement(
        <nav>
          <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
          <NxButton>1</NxButton>
          <NxButton>2</NxButton>
          <NxButton>3</NxButton>
          <NxButton>4</NxButton>
          <NxButton>5</NxButton>
          <NxButton>…</NxButton>
          <NxButton>25</NxButton>
          <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
        </nav>
      );
    });
  });

  describe('when the current page is greater than 5', function() {
    it('renders the first page button and a descending ellipsis button', function() {
      expect(getShallowComponent({ pageCount: 10, currentPage: 8 })).toMatchElement(
        <nav>
          <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
          <NxButton>1</NxButton>
          <NxButton>…</NxButton>
          <NxButton>6</NxButton>
          <NxButton>7</NxButton>
          <NxButton>8</NxButton>
          <NxButton>9</NxButton>
          <NxButton>10</NxButton>
          <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
        </nav>
      );

      expect(getShallowComponent({ pageCount: 25, currentPage: 8 })).toMatchElement(
        <nav>
          <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
          <NxButton>1</NxButton>
          <NxButton>…</NxButton>
          <NxButton>6</NxButton>
          <NxButton>7</NxButton>
          <NxButton>8</NxButton>
          <NxButton>9</NxButton>
          <NxButton>10</NxButton>
          <NxButton>…</NxButton>
          <NxButton>25</NxButton>
          <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
        </nav>
      );
    });
  });

  describe('when the pageCount is not divisible by 5 and the currentPage is less than 5 from the max', function() {
    it('renders the final group mod 5 of pages', function() {
      expect(getShallowComponent({ pageCount: 43, currentPage: 40 })).toMatchElement(
        <nav>
          <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
          <NxButton>1</NxButton>
          <NxButton>…</NxButton>
          <NxButton>41</NxButton>
          <NxButton>42</NxButton>
          <NxButton>43</NxButton>
          <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
        </nav>
      );
    });
  });

  describe('when there are 5n + 1 pages and currentPage is the last page', function() {
    it('renders the previous page group along with the final page button', function() {
      const component = getShallowComponent({ pageCount: 41, currentPage: 40 });

      expect(component).toMatchElement(
        <nav>
          <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
          <NxButton>1</NxButton>
          <NxButton>…</NxButton>
          <NxButton>36</NxButton>
          <NxButton>37</NxButton>
          <NxButton>38</NxButton>
          <NxButton>39</NxButton>
          <NxButton>40</NxButton>
          <NxButton>41</NxButton>
        </nav>
      );

      expect(component.children().last()).toHaveClassName('selected');
    });
  });

  describe('when the current page is the first page', function() {
    it('does not render the back arrow', function() {
      expect(getShallowComponent({ pageCount: 7, currentPage: 0 })).toMatchElement(
        <nav>
          <NxButton>1</NxButton>
          <NxButton>2</NxButton>
          <NxButton>3</NxButton>
          <NxButton>4</NxButton>
          <NxButton>5</NxButton>
          <NxButton>…</NxButton>
          <NxButton>7</NxButton>
          <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
        </nav>
      );
    });
  });

  describe('accessibility', function() {
    it('shows the correct aria labels for a small pagination range', function () {
      const buttons = getShallowComponent({ pageCount: 3, currentPage: 1 }).find(NxButton);
      expect(buttons.at(0)).toHaveProp('aria-label', 'goto previous page');
      expect(buttons.at(1)).toHaveProp('aria-label', 'goto first page');
      expect(buttons.at(2)).toHaveProp('aria-label', 'current page, goto page 2');
      expect(buttons.at(3)).toHaveProp('aria-label', 'goto last page');
      expect(buttons.at(4)).toHaveProp('aria-label', 'goto next page');
    });

    it('shows the correct aria labels in the middle of a pagination range', function() {
      const buttons = getShallowComponent({ pageCount: 25, currentPage: 8 }).find(NxButton);
      expect(buttons.at(0)).toHaveProp('aria-label', 'goto previous page');
      expect(buttons.at(1)).toHaveProp('aria-label', 'goto first page');
      expect(buttons.at(2)).toHaveProp('aria-label', 'show previous 5 pages');
      expect(buttons.at(3)).toHaveProp('aria-label', 'goto page 6');
      expect(buttons.at(4)).toHaveProp('aria-label', 'goto page 7');
      expect(buttons.at(5)).toHaveProp('aria-label', 'goto page 8');
      expect(buttons.at(6)).toHaveProp('aria-label', 'current page, goto page 9');
      expect(buttons.at(7)).toHaveProp('aria-label', 'goto page 10');
      expect(buttons.at(8)).toHaveProp('aria-label', 'show next 5 pages');
      expect(buttons.at(9)).toHaveProp('aria-label', 'goto last page');
      expect(buttons.at(10)).toHaveProp('aria-label', 'goto next page');
    });
  });

  describe('when the current page is not the first page', function() {
    it('renders a back arrow as the first button', function() {
      const icon = getShallowComponent({ pageCount: 7, currentPage: 1 }).children().first().children();

      expect(icon).toMatchSelector(NxFontAwesomeIcon);
      expect(icon).toHaveProp(icon, faCaretLeft);
    });
  });

  describe('when the current page is the last page', function() {
    it('does not render the forward arrow', function() {
      expect(getShallowComponent({ pageCount: 7, currentPage: 6 })).toMatchElement(
        <nav>
          <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
          <NxButton>1</NxButton>
          <NxButton>…</NxButton>
          <NxButton>6</NxButton>
          <NxButton>7</NxButton>
        </nav>
      );
    });
  });

  describe('when the current page is not the last page', function() {
    it('renders a forward arrow as the last button', function() {
      const icon = getShallowComponent({ pageCount: 7, currentPage: 5 }).children().last().children();

      expect(icon).toMatchSelector(NxFontAwesomeIcon);
      expect(icon).toHaveProp(icon, faCaretRight);
    });
  });

  it('adds the `selected` class to only the button for the current page', function() {
    function testWithProps(props: { currentPage: number; pageCount: number }) {
      const buttons = getShallowComponent(props).children(),
          pageIndexStr = (props.currentPage + 1).toString();

      expect(buttons.filter('.selected')).toHaveText(pageIndexStr);
    }

    testWithProps({ pageCount: 1, currentPage: 0 });
    testWithProps({ pageCount: 5, currentPage: 3 });
    testWithProps({ pageCount: 5, currentPage: 4 });
    testWithProps({ pageCount: 7, currentPage: 4 });
    testWithProps({ pageCount: 7, currentPage: 5 });
    testWithProps({ pageCount: 7, currentPage: 6 });
    testWithProps({ pageCount: 6, currentPage: 5 });
  });

  it('adds either tabIndex=0 or no tabIndex to all other buttons', function() {
    function testWithProps(props: { currentPage: number; pageCount: number }) {
      const buttons = getShallowComponent(props).children();

      expect(buttons.filter('.selected')).toHaveProp('tabIndex', 0);

      buttons.filter(':not(.selected)').forEach(function(btn) {
        expect(btn.prop('tabIndex')).toBe(0);
      });
    }

    testWithProps({ pageCount: 1, currentPage: 0 });
    testWithProps({ pageCount: 5, currentPage: 3 });
    testWithProps({ pageCount: 5, currentPage: 4 });
    testWithProps({ pageCount: 7, currentPage: 4 });
    testWithProps({ pageCount: 7, currentPage: 5 });
    testWithProps({ pageCount: 7, currentPage: 6 });
    testWithProps({ pageCount: 6, currentPage: 5 });
  });

  it('adds the `nx-btn--pagination` class to all buttons except the arrows', function() {
    const buttons = getShallowComponent({ pageCount: 50, currentPage: 24 }).children();

    expect(buttons.first()).not.toHaveClassName('nx-btn--pagination');
    expect(buttons.filterWhere(btn => btn.text() === '…').first()).toHaveClassName('nx-btn--pagination');
    expect(buttons.filterWhere(btn => btn.text() === '21')).toHaveClassName('nx-btn--pagination');
    expect(buttons.filterWhere(btn => btn.text() === '22')).toHaveClassName('nx-btn--pagination');
    expect(buttons.filterWhere(btn => btn.text() === '23')).toHaveClassName('nx-btn--pagination');
    expect(buttons.filterWhere(btn => btn.text() === '24')).toHaveClassName('nx-btn--pagination');
    expect(buttons.filterWhere(btn => btn.text() === '25')).toHaveClassName('nx-btn--pagination');
    expect(buttons.filterWhere(btn => btn.text() === '…').last()).toHaveClassName('nx-btn--pagination');
    expect(buttons.last()).not.toHaveClassName('nx-btn--pagination');
  });

  describe('click handling', function() {
    const evt = { foo: 'bar' };

    let buttons: ReturnType<typeof getShallowComponent>,
        onChangeSpy: jest.Mock;

    beforeEach(function() {
      onChangeSpy = jest.fn();
      buttons = getShallowComponent({ pageCount: 50, currentPage: 24, onChange: onChangeSpy }).children();
    });

    describe('when the back arrow is clicked', function() {
      it('fires onChange with the previous page number and the event', function() {
        buttons.first().simulate('click', evt);

        expect(onChangeSpy).toHaveBeenCalledWith(23, evt);
      });
    });

    describe('when the forward arrow is clicked', function() {
      it('fires onChange with the next page number and the event', function() {
        buttons.last().simulate('click', evt);

        expect(onChangeSpy).toHaveBeenCalledWith(25, evt);
      });
    });

    describe('when the min page is clicked', function() {
      it('fires onChange with 1 and the event', function() {
        buttons.filterWhere(btn => btn.text() === '1').simulate('click', evt);

        expect(onChangeSpy).toHaveBeenCalledWith(0, evt);
      });
    });

    describe('when the max page is clicked', function() {
      it('fires onChange with the max page number and the event', function() {
        buttons.filterWhere(btn => btn.text() === '50').simulate('click', evt);

        expect(onChangeSpy).toHaveBeenCalledWith(49, evt);
      });
    });

    describe('when the left ellipsis is clicked', function() {
      it('fires onChange with the page number one less than shown in the current group, and the event', function() {
        buttons.filterWhere(btn => btn.text() === '…').first().simulate('click', evt);

        expect(onChangeSpy).toHaveBeenCalledWith(19, evt);
      });
    });

    describe('when the right ellipsis is clicked', function() {
      it('fires onChange with the page number one more than shown in the current group, and the event', function() {
        buttons.filterWhere(btn => btn.text() === '…').last().simulate('click', evt);

        expect(onChangeSpy).toHaveBeenCalledWith(25, evt);
      });
    });

    describe('when the nearby page buttons are clicked', function() {
      it('fires onChange with the corresponding page number and the event', function() {
        buttons.filterWhere(btn => btn.text() === '21').simulate('click', evt);
        expect(onChangeSpy).toHaveBeenLastCalledWith(20, evt);

        buttons.filterWhere(btn => btn.text() === '22').simulate('click', evt);
        expect(onChangeSpy).toHaveBeenLastCalledWith(21, evt);

        buttons.filterWhere(btn => btn.text() === '23').simulate('click', evt);
        expect(onChangeSpy).toHaveBeenLastCalledWith(22, evt);

        buttons.filterWhere(btn => btn.text() === '24').simulate('click', evt);
        expect(onChangeSpy).toHaveBeenLastCalledWith(23, evt);
      });
    });

    describe('when the current page button is clicked', function() {
      it('does not fire onChange', function() {
        buttons.filterWhere(btn => btn.text() === '25').simulate('click', evt);
        expect(onChangeSpy).not.toHaveBeenCalled();
      });
    });
  });
});
