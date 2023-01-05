/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
// import { faArrowDown, faArrowUp, faEdit, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { includes } from 'ramda';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { rtlRenderElement, rtlRender } from '../../../__testutils__/rtlUtils';
import { within, render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxTransferListHalf, { Props } from '../NxTransferListHalf';

describe('NxTransferListHalf', function() {
  const minimalProps: Props = {
        label: 'Foo',
        filterValue: '',
        onFilterChange: () => {},
        items: [],
        footerContent: <div/>
      },
      quickRender = rtlRender(NxTransferListHalf, minimalProps),
      renderEl = rtlRenderElement(NxTransferListHalf, minimalProps);

  beforeEach(function() {
    // JSDOM is missing this function. https://github.com/jsdom/jsdom/issues/3002
    Range.prototype.getBoundingClientRect = jest.fn().mockReturnValue({
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0
    } as DOMRect);
  });

  it('renders a fieldset as top-level element', function() {
    const el = renderEl()!;
    expect(el.tagName).toBe('FIELDSET');
  });

  it('passes the label to the NxFieldset', function() {
    const el = renderEl()!;
    expect(el).toHaveAccessibleName('Foo');
    expect(el).toHaveTextContent('Foo');
  });

  it('renders an input with type="text" within NxTransferListHalf', function() {
    const el = renderEl()!,
        input = within(el).getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('sets the filter inputs placeholder to "Filter"', function() {
    expect(quickRender().getByRole('textbox')).toHaveAttribute('placeholder', 'Filter');
  });

  it('sets the filterValue as the value of the NxFilterInput', function() {
    expect(quickRender({ filterValue: 'foo' }).getByRole('textbox')).toHaveValue('foo');
  });

  it('calls onFilterChange when the filterValue is updated', async function() {
    const user = userEvent.setup(),
        onFilterChange = jest.fn().mockImplementation((_, evt) => { evt.persist(); }),
        input = quickRender({ onFilterChange }).getByRole('textbox');

    expect(onFilterChange).not.toHaveBeenCalled();

    await user.type(input, 'a');

    expect(onFilterChange).toHaveBeenCalledWith('a', expect.objectContaining({ target: input }));
  });

  it('only renders a "Remove All"/ "Transfer All" button when showMoveAll is true', function() {
    expect(quickRender({ showMoveAll: undefined }).queryByRole('button', { name: /all/i })).not.toBeInTheDocument();
    expect(quickRender({ showMoveAll: null }).queryByRole('button', { name: /all/i })).not.toBeInTheDocument();
    expect(quickRender({ showMoveAll: false }).queryByRole('button', { name: /all/i })).not.toBeInTheDocument();
    expect(quickRender({ showMoveAll: true }).queryByRole('button', { name: /all/i })).toBeInTheDocument();
  });

  it('sets the button text to "Transfer All" when isSelected is false, otherwise "Remove All"',
      function() {
        expect(quickRender({ showMoveAll: true, isSelected: true })
            .queryAllByRole('button')[1]).toHaveTextContent('Remove All');
        expect(quickRender({ showMoveAll: true, isSelected: undefined })
            .queryAllByRole('button')[1]).toHaveTextContent('Remove All');
        expect(quickRender({ showMoveAll: true, isSelected: null })
            .queryAllByRole('button')[1]).toHaveTextContent('Remove All');
        expect(quickRender({ showMoveAll: true, isSelected: false })
            .queryAllByRole('button')[1]).toHaveTextContent('Transfer All');
      });

  it('fires onMoveAll when the "Remove All"/ "Transfer All" button is clicked', async function() {
    const user = userEvent.setup(),
        onMoveAll = jest.fn(),
        moveBtn = quickRender({ onMoveAll, showMoveAll: true }).getByRole('button', { name: /remove all/i });

    expect(onMoveAll).not.toHaveBeenCalled();
    await user.click(moveBtn);
    expect(onMoveAll).toHaveBeenCalled();
  });

  it('passes onMoveAll an array containing every id if no filterValue is set', async function() {
    const dataItems = [{
      id: '1',
      displayName: 'foo'
    }, {
      id: '2',
      displayName: 'Foo'
    }, {
      id: '3',
      displayName: 'bar'
    }, {
      id: '4',
      displayName: 'foo'
    }, {
      id: '5',
      displayName: 'Foo'
    }, {
      id: '6',
      displayName: 'bar'
    }];

    const user = userEvent.setup(),
        onMoveAll = jest.fn(),
        moveBtn = quickRender({ items: dataItems, onMoveAll, showMoveAll: true })
            .getByRole('button', { name: /remove all/i });

    expect(onMoveAll).not.toHaveBeenCalled();
    await user.click(moveBtn);

    expect(onMoveAll).toHaveBeenCalledWith(['1', '2', '3', '4', '5', '6']);
  });

  it('renders items into the .nx-transfer-list__item-list', function() {
    const dataItems = [{
      id: '1',
      displayName: 'foo'
    }, {
      id: '2',
      displayName: 'baz'
    }];

    const { container } = quickRender({ items: dataItems }),
        itemList = container.querySelector('.nx-transfer-list__item-list') as HTMLElement,
        items = itemList.querySelectorAll('.nx-transfer-list__item');

    expect(items.length).toBe(2);
    expect(items[0]).toHaveTextContent('foo');
    expect(items[1]).toHaveTextContent('baz');
  });

  it('renders a move icon and checkbox input only when onItemChange is provided', function() {
    const onItemChange = jest.fn(),
        { container, rerender } = quickRender({ items: [{id: '1', displayName: 'foo'}], onItemChange }),
        item = container.querySelector('.nx-transfer-list__item') as HTMLElement,
        icon = within(item).getByRole('img', { hidden: true }),
        checkbox = within(item).getByRole('checkbox');

    expect(item).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();

    rerender(
      <NxTransferListHalf {...minimalProps} items={[{id: '1', displayName: 'foo'}]}/>
    );
    expect(icon).not.toBeInTheDocument();
    expect(checkbox).not.toBeInTheDocument();
  });

  it('sets the input to checked if isSelected is not false', function() {
    const onItemChange = jest.fn(),
        withSelected = quickRender({ items: [{ id: '1', displayName: 'foo' }], isSelected: true, onItemChange }),
        withSelectedNull = quickRender({ items: [{ id: '1', displayName: 'foo' }], isSelected: null, onItemChange }),
        withSelectedUndefined = quickRender({
          items: [{ id: '1', displayName: 'foo' }],
          isSelected: undefined,
          onItemChange
        }),
        withSelectedFalse = quickRender({ items: [{ id: '1', displayName: 'foo' }], isSelected: false, onItemChange });

    expect(withSelected.getByRole('checkbox')).toBeChecked();
    expect(withSelectedNull.getByRole('checkbox')).toBeChecked();
    expect(withSelectedUndefined.getByRole('checkbox')).toBeChecked();
    expect(withSelectedFalse.getByRole('checkbox')).not.toBeChecked();
  });

  it('calls onItemChange when an item checkbox is toggled, passing the new boolean state and the item id',
      async function() {
        const dataItems = [{
          id: '1',
          displayName: 'foo'
        }, {
          id: '2',
          displayName: 'baz'
        }];

        const user = userEvent.setup(),
            onItemChange = jest.fn(),
            { rerender, getAllByRole } = render(
              <div>
                <NxTransferListHalf {...minimalProps} items={dataItems} onItemChange={onItemChange}/>
              </div>
            ),
            selectedItem = getAllByRole('checkbox');

        expect(onItemChange).not.toHaveBeenCalled();

        await user.click(selectedItem[0]);
        expect(onItemChange).toHaveBeenCalledWith(false, '1');

        rerender(
          <div>
            <NxTransferListHalf {...minimalProps} items={dataItems} onItemChange={onItemChange} isSelected={false}/>
          </div>
        );

        await user.click(selectedItem[1]);
        expect(onItemChange).toHaveBeenCalledWith(true, '2');
      });

  it('contains a footer with the specified footerContent', function() {
    const component = quickRender({ footerContent: <div data-testid="foo">content</div> }),
        footerContent = component.queryByTestId('foo');

    expect(footerContent).toBeInTheDocument();
    expect(footerContent).toHaveTextContent('content');
  });

  describe('filtering', function() {
    const items = [{
      id: '1',
      displayName: 'foo'
    }, {
      id: '2',
      displayName: 'Foo'
    }, {
      id: '3',
      displayName: 'bar'
    }, {
      id: '4',
      displayName: <><NxFontAwesomeIcon icon={faEdit} />foo</>
    }, {
      id: '5',
      displayName: <><NxFontAwesomeIcon icon={faEdit} />Foo</>
    }, {
      id: '6',
      displayName: <><NxFontAwesomeIcon icon={faEdit} />bar</>
    }];

    const getComponent = (moreProps: Partial<Props<string>>) => renderEl({items, ...moreProps})!;

    it('renders only items which contain the filterValue case-insensitively', function() {
      const component = getComponent({ filterValue: 'fo' }),
          items = component.querySelectorAll('.nx-transfer-list__item');

      expect(items.length).toBe(4);
      expect(items[0]).toHaveTextContent('foo');
      expect(items[1]).toHaveTextContent('Foo');
      expect(items[2]).toHaveTextContent('foo');
      expect(items[3]).toHaveTextContent('Foo');
    });

    it('renders only items that match the filterValue according to the filterFn when specified', function() {
      const component = getComponent({
            filterValue: 'fo',
            filterFn: includes // case sensitive inclusion
          }),
          items = component.querySelectorAll('.nx-transfer-list__item');

      expect(items.length).toBe(2);
      expect(items[0]).toHaveTextContent('foo');
      expect(items[1]).toHaveTextContent('foo');
    });

    it('passes onMoveAll a set containing ids of visible items if filterValue is set', async function() {
      const user = userEvent.setup(),
          onMoveAll = jest.fn(),
          { getByRole } = quickRender({ items: items, filterValue: 'fo', onMoveAll, showMoveAll: true });

      expect(onMoveAll).not.toHaveBeenCalled();

      const button = getByRole('button', { name: /remove all/i });
      await user.click(button);

      expect(onMoveAll).toHaveBeenCalledWith(['1', '2', '4', '5']);
    });
  });

  describe('reordering', function() {
    beforeEach(function() {
      // fixes "An update to ForwardRef(Tooltip) inside a test was not wrapped in act" errors
      jest.useFakeTimers();
    });

    afterEach(runTimers);

    async function runTimers() {
      await act(async () => { await jest.runAllTimers(); });
    }

    async function advanceTimers(time: number) {
      await act(async () => { await jest.advanceTimersByTime(time); });
    }

    it('renders move up and down buttons inside .nx-transfer-list__item when allowReordering is true', function() {
      const { container, rerender } = quickRender({ allowReordering: true, items: [{id: '1', displayName: 'foo'}]}),
          item = container.querySelector('.nx-transfer-list__item') as HTMLElement,
          buttons = within(item).getAllByRole('button', { hidden: true });

      expect(buttons.length).toBe(2);

      rerender(<NxTransferListHalf {...minimalProps} allowReordering={false} items={[{id: '1', displayName: 'foo'}]}/>);
      expect(buttons[0]).not.toBeInTheDocument();
      expect(buttons[1]).not.toBeInTheDocument();

      rerender(<NxTransferListHalf {...minimalProps} allowReordering={null} items={[{id: '1', displayName: 'foo'}]}/>);
      expect(buttons[0]).not.toBeInTheDocument();
      expect(buttons[1]).not.toBeInTheDocument();

      rerender(
        <NxTransferListHalf {...minimalProps} allowReordering={undefined} items={[{id: '1', displayName: 'foo'}]}/>
      );
      expect(buttons[0]).not.toBeInTheDocument();
      expect(buttons[1]).not.toBeInTheDocument();
    });

    it('sets aria-disabled to true on the top item\'s move up button, and the bottom item\'s move down button',
        function() {
          const dataItems = [{
            id: '1',
            displayName: 'top'
          }, {
            id: '2',
            displayName: 'bottom'
          }];

          const component = renderEl({ allowReordering: true, items: dataItems })!;

          const topItem = component.querySelectorAll<HTMLElement>('.nx-transfer-list__item')[0],
              topButtons = within(topItem).getAllByRole('button', { hidden: true }),
              bottomItem = component.querySelectorAll<HTMLElement>('.nx-transfer-list__item')[1],
              bottomButtons = within(bottomItem).getAllByRole('button', { hidden: true });

          // assert there are two buttons present in each item
          expect(topButtons.length).toBe(2);
          expect(bottomButtons.length).toBe(2);

          // assert the topmost item's moveUp button and bottommost item's moveDown button are disabled
          expect(topButtons[0]).toHaveAttribute('aria-disabled', 'true');
          expect(topButtons[1]).not.toHaveAttribute('aria-disabled', 'true');
          expect(bottomButtons[0]).not.toHaveAttribute('aria-disabled', 'true');
          expect(bottomButtons[1]).toHaveAttribute('aria-disabled', 'true');
        });

    it('passes onReorderItem the item id and direction when move up or down button is clicked', async function() {
      const dataItems = [{
        id: '1',
        displayName: 'a'
      }, {
        id: '2',
        displayName: 'b'
      }, {
        id: '3',
        displayName: 'c'
      }];

      const user = userEvent.setup({advanceTimers}),
          onReorderItem = jest.fn(),
          component = renderEl({ allowReordering: true, items: dataItems, onReorderItem })!;

      await runTimers();

      const topItem = component.querySelectorAll('.nx-transfer-list__item')[0] as HTMLElement,
          bottomItem = component.querySelectorAll('.nx-transfer-list__item')[2] as HTMLElement,
          moveDownButton = within(topItem).getAllByRole('button', { hidden: true })[1],
          moveUpButton = within(bottomItem).getAllByRole('button', { hidden: true })[0];

      expect(onReorderItem).not.toHaveBeenCalled();

      await user.click(moveDownButton);
      expect(onReorderItem).toHaveBeenCalledWith('1', 1);

      await user.click(moveUpButton);
      expect(onReorderItem).toHaveBeenCalledWith('3', -1);
    });

    it('disables move up and down buttons when items are filtered', async function() {
      const dataItems = [{
        id: '1',
        displayName: 'foo'
      }, {
        id: '2',
        displayName: 'bar'
      }, {
        id: '3',
        displayName: 'foobar'
      }];

      const user = userEvent.setup({advanceTimers}),
          onReorderItem = jest.fn(),
          component = renderEl({ items: dataItems, filterValue: 'fo', allowReordering: true, onReorderItem })!;

      await runTimers();

      // confirm filtering
      const items = component.querySelectorAll<HTMLElement>('.nx-transfer-list__item');
      expect(items.length).toBe(2);
      expect(items[0]).toHaveTextContent('foo');
      expect(items[1]).toHaveTextContent('foobar');

      const topItem = items[0],
          bottomItem = items[1],
          topItemButtons = within(topItem).getAllByRole('button', { hidden: true }),
          bottomItemButtons = within(bottomItem).getAllByRole('button', { hidden: true });

      expect(onReorderItem).not.toHaveBeenCalled();
      expect(topItemButtons[0]).toHaveAttribute('aria-disabled', 'true');
      expect(topItemButtons[1]).toHaveAttribute('aria-disabled', 'true');
      expect(bottomItemButtons[0]).toHaveAttribute('aria-disabled', 'true');
      expect(bottomItemButtons[1]).toHaveAttribute('aria-disabled', 'true');

      await user.click(topItemButtons[1]);
      expect(onReorderItem).not.toHaveBeenCalled();

      await user.click(topItemButtons[0]);
      expect(onReorderItem).not.toHaveBeenCalled();
    });

    // it('sets the correct button title based on location, direction, and when filtered', async function() {
    //   const dataItems = [{
    //     id: '1',
    //     displayName: 'a1'
    //   }, {
    //     id: '2',
    //     displayName: 'b1'
    //   }, {
    //     id: '3',
    //     displayName: 'c1'
    //   }, {
    //     id: '4',
    //     displayName: 'c'
    //   }];

    //   const user = userEvent.setup(),
    //       onReorderItem = jest.fn(),
    //       component = renderEl({items: dataItems, filterValue: '1', allowReordering: true, onReorderItem})!,
    //       // filteredComponent = renderEl({items: dataItems, allowReordering: true, onReorderItem})!,
    //       items = component.querySelectorAll('.nx-transfer-list__item'),
    //       // filteredItems = filteredComponent.querySelectorAll('.nx-transfer-list__item'),
    //       secondItemBtns = within(items[0] as HTMLElement).getAllByRole('button', {hidden: true});

      
    //   //     const moveUpButtonTooltip = secondItem.find('.nx-transfer-list__button-bar').find(NxTooltip).at(0);
    //   //     const moveDownButtonTooltip = secondItem.find('.nx-transfer-list__button-bar').find(NxTooltip).at(1);
      
    //   //     const filteredMoveUpButtonTooltip = filteredSecondItem.find(
    //   //        '.nx-transfer-list__button-bar').find(NxTooltip).at(0);
    //   //     const filteredMoveDownButtonTooltip =
    //   //         filteredSecondItem.find('.nx-transfer-list__button-bar').find(NxTooltip).at(1);
      
    //   //     const itemTooltip = secondItem.find(NxTooltip).at(1);
    //   //     const filteredItemTooltip = filteredSecondItem.find(NxTooltip).at(1);
    //       await user.hover(secondItemBtns[0]);
    //       const tooltip = component.querySelector('.MuiTooltip-popper');
    //       expect(tooltip).toBeInTheDocument();
    //       expect(tooltip).toHaveTextContent('Move Up');
    //       // expect(moveDownBtnTooltip).toHaveTextContent('Move Down');
      
    //   //     expect(filteredMoveUpButtonTooltip).toHaveProp('title', '');
    //   //     expect(filteredMoveDownButtonTooltip).toHaveProp('title', '');
      
    //   //     expect(filteredItemTooltip).toHaveProp('title', 'Reordering is disabled when filtered');
    //   //     expect(itemTooltip).toHaveProp('title', '');
    // });
  });
});
