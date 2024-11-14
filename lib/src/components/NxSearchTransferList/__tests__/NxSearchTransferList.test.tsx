/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React, { ComponentType } from 'react';
import { includes } from 'ramda';
import { within, render } from '@testing-library/react';
import { rtlRender, rtlRenderElement, userEvent, runTimers } from '../../../__testutils__/rtlUtils';
import { mockTransferListLayout } from '../../../__testutils__/transferListUtils';
import NxSearchTransferList, { Props } from '../NxSearchTransferList';
import NxForm from '../../NxForm/NxForm';

describe('NxSearchTransferList', function() {
  const minimalProps: Props = {
        searchText: '',
        onSearchTextChange: () => {},
        onSearch: () => {},
        loading: false,
        searchMatches: [],
        onSearchMatchSelect: () => {},
        addedItemsFilter: '',
        onAddedItemsFilterChange: () => {},
        addedItems: [],
        onRemove: () => {}
      },
      quickRender = rtlRender(NxSearchTransferList as ComponentType<Props<string>>, minimalProps),
      renderEl = rtlRenderElement(NxSearchTransferList as ComponentType<Props<string>>, minimalProps);

  beforeEach(mockTransferListLayout);

  it('adds specified classnames in addition to the defaults', function() {
    const defaultEl = renderEl()!,
        el = renderEl({ className: 'foo' })!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('adds additional attributes to the top-level element', function() {
    const view = quickRender({ id: 'foo', lang: 'en' }),
        el = view.container.firstElementChild;

    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('lang', 'en');
  });

  it('allows the a11y name of the top-level element to be set via aria-label or aria-labelledby', function() {
    render(<div id="label">bar</div>);

    const elWithLabel = renderEl({ 'aria-label': 'foo' }),
        elWithLabelledBy = renderEl({ 'aria-labelledby': 'label' });

    expect(elWithLabel).toHaveAccessibleName('foo');
    expect(elWithLabelledBy).toHaveAccessibleName('bar');
  });

  describe('search', function() {
    it('renders a child input with role=searchbox and type="text"', function() {
      const el = renderEl()!;
      const searchInput = within(el).getByRole('searchbox');

      expect(searchInput).toBeInTheDocument();
      expect(searchInput.tagName).toBe('INPUT');
      expect(searchInput).toHaveAttribute('type', 'text');
    });

    it('sets value of the input according to the searchText prop', function() {
      expect(quickRender().getByRole('searchbox')).toHaveValue('');
      expect(quickRender({ searchText: 'b' }).getByRole('searchbox')).toHaveValue('b');
    });

    it('sets the aria-controls on the input to the dropdown id', function() {
      const view = quickRender({ searchText: 'b' }),
          searchInput = view.getByRole('searchbox'),
          dropdownId = view.getByRole('alert').getAttribute('id');

      expect(searchInput).toHaveAttribute('aria-controls', dropdownId);
    });

    it('calls onSearchTextChange when the value in the searchbox is changed', async function() {
      const user = userEvent.setup(),
          onSearchTextChange = jest.fn(),
          searchInput = quickRender({ onSearchTextChange }).getByRole('searchbox');

      expect(onSearchTextChange).not.toHaveBeenCalled();

      await user.type(searchInput, 'b');

      expect(onSearchTextChange).toHaveBeenLastCalledWith('b');
    });

    it('calls onSearchTextChange when the ESC key is pressed', async function() {
      const user = userEvent.setup(),
          onSearchTextChange = jest.fn(),
          searchInput = quickRender({ searchText: 'b', onSearchTextChange }).getByRole('searchbox');

      expect(onSearchTextChange).not.toHaveBeenCalled();

      await user.type(searchInput, '[Escape]');

      expect(onSearchTextChange).toHaveBeenLastCalledWith('');
    });

    it('calls onSearchTextChange when the Clear Search button is clicked', async function() {
      const user = userEvent.setup(),
          onSearchTextChange = jest.fn(),
          view = quickRender({ searchText: 'b', onSearchTextChange });

      await runTimers();
      const clearBtn = view.getByRole('button', { name: 'Clear search' });

      expect(onSearchTextChange).not.toHaveBeenCalled();

      await user.click(clearBtn);

      expect(onSearchTextChange).toHaveBeenLastCalledWith('');
    });

    it('does not submit form when Clear Search button is clicked', async function() {
      const user = userEvent.setup(),
          onSubmit = jest.fn(),
          view = render(
            <NxForm onSubmit={onSubmit} showValidationErrors={false} >
              <NxSearchTransferList { ...minimalProps } searchText="b" />
            </NxForm>
          );

      await runTimers();
      const clearBtn = view.getByRole('button', { name: 'Clear search' });

      expect(onSubmit).not.toHaveBeenCalled();

      await user.click(clearBtn);

      expect(onSubmit).not.toHaveBeenCalled();
    });

    describe('search dropdown menu', function() {
      it('sets aria-live on the dropdown menu to "polite"', function() {
        expect(quickRender().getByRole('alert', { hidden: true })).toHaveAttribute('aria-live', 'polite');
      });

      describe('when there are matches', function() {
        const propsWithMatches = {
              searchText: 'Item',
              searchMatches: [
                { id: '1', displayName: 'Item 1' },
                { id: '2', displayName: 'Item 2' }
              ]
            },
            viewWithMatches = (props?: Partial<Props>) => quickRender({ ...propsWithMatches, ...props });

        it('renders a dropdown with role=menu with matches as role=menuitem', function() {
          const dropdownEl = viewWithMatches().getByRole('menu'),
              matches = within(dropdownEl).getAllByRole('menuitem');

          expect(dropdownEl).toBeInTheDocument();
          expect(matches).toHaveLength(2);
          expect(matches[0]).toBeInTheDocument();
          expect(matches[1]).toBeInTheDocument();
        });

        it('renders matches as type="button" and an accessible name', function() {
          const matches = viewWithMatches().getAllByRole('menuitem');

          expect(matches[0]).toHaveAttribute('type', 'button');
          expect(matches[0]).toHaveAccessibleName('Item 1');

          expect(matches[1]).toHaveAttribute('type', 'button');
          expect(matches[1]).toHaveAccessibleName('Item 2');
        });

        it('calls onSearchMatchSelect when user selects a match', async function() {
          const user = userEvent.setup(),
              onSearchMatchSelect = jest.fn().mockImplementation((_, evt) => { evt.persist(); }),
              view = viewWithMatches({ onSearchMatchSelect }),
              firstMatch = view.getAllByRole('menuitem')[0];

          expect(onSearchMatchSelect).not.toHaveBeenCalled();

          await user.click(firstMatch);

          expect(onSearchMatchSelect)
              .toHaveBeenCalledWith({ id: '1', displayName: 'Item 1'}, expect.objectContaining({ target: firstMatch }));
        });
      });

      describe('when there are no matches', function() {
        const viewNoMatches = (props?: Partial<Props>) => quickRender({ searchText: 'i', ...props });

        it('renders a dropdown with role=alert when in empty, or loading states', function() {
          expect(viewNoMatches().getByRole('alert')).toBeInTheDocument();
          expect(viewNoMatches({ loading: true }).getByRole('alert')).toBeInTheDocument();
        });

        it('renders a dropdown with no role when in an error state', function() {
          expect(viewNoMatches({ loadError: 'oops' }).queryByRole('menu')).not.toBeInTheDocument();
        });

        it('sets aria-busy on the dropdown menu if loading is true', function() {
          expect(viewNoMatches().getByRole('alert')).toHaveAttribute('aria-busy', 'false');
          expect(viewNoMatches({ loading: true }).getByRole('alert')).toHaveAttribute('aria-busy', 'true');
        });

        it('renders an element with role=status within the dropdown when loading', function() {
          const dropdown = viewNoMatches({ loading: true }).getByRole('alert');
          expect(within(dropdown).getByRole('status')).toBeInTheDocument();
        });

        it('renders "Loading" text in the dropdown when loading is true', function() {
          expect(viewNoMatches({ loading: true }).getByRole('status')).toHaveTextContent('Loading…');
        });

        it('renders a dropdown with the loadError prop text when in an error state', function() {
          expect(viewNoMatches({ loadError: 'oops' }).getByRole('alert')).toHaveTextContent('oops');
        });

        it('renders a retry button and error text when the error prop is provided', function() {
          const alertEl = viewNoMatches({ loadError: 'oops' }).getByRole('alert');

          expect(alertEl).toHaveTextContent('oops');
          expect(within(alertEl).getByRole('button', { name: 'Retry' })).toBeInTheDocument();
        });

        it('renders a dropdown with "No Results Found" text if there are no matching elements and not in error' +
        'or loading state', function() {
          expect(viewNoMatches().getByRole('alert')).toHaveTextContent('No Results Found');
        });
      });

      it('calls onSearch whenever the searchbox text changes with a value that differs after trimming' +
      'and passes the trimmed value', async function() {
        const user = userEvent.setup(),
            onSearch = jest.fn(),
            searchInput = quickRender({ searchText: ' foo ', onSearch }).getByRole('searchbox');

        expect(onSearch).not.toHaveBeenCalled();

        await user.type(searchInput, '[Backspace]', { initialSelectionStart: 5, initialSelectionEnd: 5 });
        await user.type(searchInput, '[Backspace]', { initialSelectionStart: 1, initialSelectionEnd: 1 });
        await user.type(searchInput, '[Space]', { initialSelectionStart: 0, initialSelectionEnd: 0 });
        await user.type(searchInput, '[Space]', { initialSelectionStart: 1, initialSelectionEnd: 1 });
        await user.type(searchInput, '[Space]', { initialSelectionStart: 4, initialSelectionEnd: 4 });
        await user.type(searchInput, '[Space]', { initialSelectionStart: 5, initialSelectionEnd: 5 });

        expect(onSearch).not.toHaveBeenCalled();

        await user.type(searchInput, '[Backspace]', { initialSelectionStart: 1, initialSelectionEnd: 2 });
        expect(onSearch).toHaveBeenCalledWith('oo');

        await user.type(searchInput, 'o', { initialSelectionStart: 5, initialSelectionEnd: 5 });
        expect(onSearch).toHaveBeenCalledWith('foo o');
      });

      it('calls onSearch with the searchText when the retry button is clicked', async function() {
        const user = userEvent.setup(),
            onSearch = jest.fn(),
            retryBtn = quickRender({ loadError: 'oops', onSearch, searchText: 'item' })
                .getByRole('button', { name: 'Retry' });

        expect(onSearch).not.toHaveBeenCalled();

        await user.click(retryBtn);
        expect(onSearch).toHaveBeenCalledWith('item');
      });

      it('calls onSearch with the searchText when the dropdown or searchbox regain focus from elsewhere on the page ' +
      'while in an error state', function() {
        const onSearch = jest.fn(),
            outsideView = render(
              <>
                <NxSearchTransferList {...minimalProps} onSearch= {onSearch} searchText="i" loadError="oops" />
                <button>Click Me</button>
              </>
            ),
            searchbox = outsideView.getByRole('searchbox'),
            retryBtn = outsideView.getByRole('button', { name: 'Retry' }),
            outsideBtn = outsideView.getByRole('button', { name: 'Click Me' });

        outsideBtn.focus();
        expect(onSearch).not.toHaveBeenCalled();

        retryBtn.focus();
        expect(onSearch).toHaveBeenNthCalledWith(1, 'i');

        outsideBtn.focus();

        searchbox.focus();
        expect(onSearch).toHaveBeenNthCalledWith(2, 'i');
      });

      it('does not call onSearch if the focus moves inside the component while in an error state', function() {
        const onSearch = jest.fn(),
            view = quickRender({ searchText: 'foo', onSearch, loadError: 'oops' }),
            searchInput = view.getByRole('searchbox'),
            retryBtn = view.getByRole('button', { name: 'Retry' });

        expect(onSearch).not.toHaveBeenCalled();
        searchInput.focus();
        expect(onSearch).not.toHaveBeenCalled();
        retryBtn.focus();
        expect(onSearch).not.toHaveBeenCalled();
      });
    });
  });

  describe('transfer list', function() {
    const addedItems = [
      { id: '1', displayName: 'Item 1' },
      { id: '2', displayName: 'item 2' },
      { id: '3', displayName: 'Match 3' }
    ];

    it('renders a fieldset element with role=group named "Items Added"', function() {
      const transferListEl = quickRender().getByRole('group', { name: 'Items Added' });

      expect(transferListEl).toBeInTheDocument();
      expect(transferListEl.tagName).toBe('FIELDSET');
    });

    it('renders a default label of "Items Added" unless addedItemsLabel is specified', function() {
      const defaultTransferListEl = quickRender().getByRole('group', { name: 'Items Added' }),
          customTransferListEl = quickRender({ addedItemsLabel: 'New Label' })
              .getByRole('group', { name: 'New Label' });

      expect(defaultTransferListEl).toHaveAccessibleName('Items Added');
      expect(defaultTransferListEl).toHaveTextContent('Items Added');

      expect(customTransferListEl).toHaveAccessibleName('New Label');
      expect(customTransferListEl).toHaveTextContent('New Label');
      expect(customTransferListEl).not.toHaveTextContent('Items Added');
    });

    it('renders an input with type="text" within .nx-transfer-list__half', function() {
      const transferListEl = quickRender().getByRole('group', { name: 'Items Added' }),
          input = within(transferListEl).getByRole('textbox');

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('type', 'text');
    });

    it('renders addedItems into the .nx-transfer-list__item-list', function() {
      // At this time, there are ARIA roles assigned to either .nx-transfer-list__item-list or .nx-transfer-list__item.
      // Revisit and improve this test in RSC-998 (Improve Transfer List Keyboard Navigation)
      const { container } = quickRender({ addedItems }),
          itemList = container.querySelector('.nx-transfer-list__item-list') as HTMLElement,
          items = itemList.querySelectorAll('.nx-transfer-list__item');

      expect(items.length).toBe(3);
      expect(items[0]).toHaveTextContent('Item 1');
      expect(items[1]).toHaveTextContent('item 2');
      expect(items[2]).toHaveTextContent('Match 3');
    });

    it('renders a checked checkbox for each item in addedItems', function() {
      const view = quickRender({ addedItems }),
          checkboxes = view.getAllByRole('checkbox');

      expect(checkboxes[0]).toHaveAccessibleName('Item 1');
      expect(checkboxes[0]).toBeChecked();
      expect(checkboxes[1]).toHaveAccessibleName('item 2');
      expect(checkboxes[1]).toBeChecked();
      expect(checkboxes[2]).toHaveAccessibleName('Match 3');
      expect(checkboxes[2]).toBeChecked();
    });

    describe('removing items', function() {
      it('calls onRemove and passes the remaining addedItems when an addedItem is clicked', async function() {
        const user = userEvent.setup(),
            onRemove = jest.fn(),
            item2 = quickRender({ addedItems, onRemove }).getByRole('checkbox', { name: 'item 2' });

        expect(onRemove).not.toHaveBeenCalled();

        await user.click(item2);

        expect(onRemove).toHaveBeenCalledTimes(1);
        expect(onRemove).toHaveBeenCalledWith([addedItems[0], addedItems[2]]);
      });

      describe('Remove All button', function() {
        it('only renders a "Remove All" button when showRemoveAll is true', function() {
          expect(quickRender({ showRemoveAll: undefined }).queryByRole('button', { name: 'Remove All' }))
              .not.toBeInTheDocument();
          expect(quickRender({ showRemoveAll: null }).queryByRole('button', { name: 'Remove All' }))
              .not.toBeInTheDocument();
          expect(quickRender({ showRemoveAll: false }).queryByRole('button', { name: 'Remove All' }))
              .not.toBeInTheDocument();
          expect(quickRender({ showRemoveAll: true }).queryByRole('button', { name: 'Remove All' }))
              .toBeInTheDocument();
        });

        it('calls onRemove with no addedItems', async function() {
          const user = userEvent.setup(),
              onRemove = jest.fn(),
              view = quickRender({ addedItems, onRemove, showRemoveAll: true }),
              removeBtn = view.getByRole('button', { name: 'Remove All' });

          expect(onRemove).not.toHaveBeenCalled();

          await user.click(removeBtn);

          expect(onRemove).toHaveBeenCalledWith([]);
        });

        it('calls onRemove with only addedItems filtered out with the addedItemsFilter', async function() {
          const user = userEvent.setup(),
              onRemove = jest.fn(),
              view = quickRender({ addedItems, addedItemsFilter: 'Item', onRemove, showRemoveAll: true }),
              removeBtn = view.getByRole('button', { name: 'Remove All' });

          expect(onRemove).not.toHaveBeenCalled();

          await user.click(removeBtn);

          expect(onRemove).toHaveBeenCalledWith([{ id: '3', displayName: 'Match 3' }]);
        });
      });
    });

    describe('filtering', function() {
      it('sets value of the input according to the addedItemsFilter', function() {
        expect(quickRender().getByRole('textbox')).toHaveValue('');
        expect(quickRender({ addedItemsFilter: 'b' }).getByRole('textbox')).toHaveValue('b');
      });

      it('filter items which contain the addedItemsFiler value by case-insensitive substring match', function() {
        const view = quickRender({ addedItems, addedItemsFilter: 'item'}),
            items = view.getAllByRole('checkbox');

        expect(items.length).toBe(2);
        expect(items[0]).toHaveAccessibleName('Item 1');
        expect(items[1]).toHaveAccessibleName('item 2');
      });

      it('filters items that match the addedItemsFilter according to the filterFn when specified', function() {
        const view = quickRender({
              addedItems,
              addedItemsFilter: 'item',
              filterFn: includes // case sensitive inclusion
            }),
            items = view.getAllByRole('checkbox');

        expect(items.length).toBe(1);
        expect(items[0]).toHaveAccessibleName('item 2');
      });

      it('calls onAddedItemsFilterChange when the value in the filter input is changed', async function() {
        const user = userEvent.setup(),
            onAddedItemsFilterChange = jest.fn().mockImplementation((_, evt) => { evt.persist(); }),
            filterInput = quickRender({ onAddedItemsFilterChange }).getByRole('textbox');

        expect(onAddedItemsFilterChange).not.toHaveBeenCalled();

        await user.type(filterInput, 'b');

        expect(onAddedItemsFilterChange).toHaveBeenLastCalledWith('b', expect.objectContaining({ target: filterInput}));
      });

      it('calls onAddedItemsFilterChange with an empty string when the ESC key is pressed', async function() {
        const user = userEvent.setup(),
            onAddedItemsFilterChange = jest.fn(),
            filterInput = quickRender({ addedItemsFilter: 'b', onAddedItemsFilterChange }).getByRole('textbox');

        expect(onAddedItemsFilterChange).not.toHaveBeenCalled();

        filterInput.focus();
        await user.keyboard('[Escape]');

        expect(onAddedItemsFilterChange).toHaveBeenLastCalledWith('');
      });

      it('calls onAddedItemsFilterChange with an empty string when the "Clear filter" button is clicked',
          async function() {
            const user = userEvent.setup(),
                onAddedItemsFilterChange = jest.fn(),
                transferListEl = quickRender({ addedItemsFilter: 'b', onAddedItemsFilterChange })
                    .getByRole('group', { name: 'Items Added' });

            await runTimers();
            const clearBtn = within(transferListEl).getByRole('button', { name: 'Clear filter' });

            expect(onAddedItemsFilterChange).not.toHaveBeenCalled();

            await user.click(clearBtn);

            expect(onAddedItemsFilterChange).toHaveBeenLastCalledWith('');
          });

      it('does not submit the form when the "Clear filter" button is clicked', async function() {
        const user = userEvent.setup(),
            onSubmit = jest.fn(),
            view = render(
              <NxForm onSubmit={onSubmit} showValidationErrors={false} >
                <NxSearchTransferList {...minimalProps} addedItemsFilter="b" />
              </NxForm>
            );

        await runTimers();
        const clearBtn = view.getByRole('button', { name: 'Clear search' });

        expect(onSubmit).not.toHaveBeenCalled();

        await user.click(clearBtn);

        expect(onSubmit).not.toHaveBeenCalled();
      });
    });

    it('renders text indicating how many items are added', function() {
      expect(quickRender({ addedItems }).getByRole('group', { name: 'Items Added' }))
          .toHaveTextContent('3 items Added');
      expect(quickRender({ addedItems: [{ id: '1', displayName: 'one' }] }).getByRole('group', { name: 'Items Added' }))
          .toHaveTextContent('1 item Added');
      expect(quickRender({ addedItems: [] }).getByRole('group', { name: 'Items Added' }))
          .toHaveTextContent('0 items Added');
    });

    it('allows the "x items Added" text to be customized via the availbleItemsCountFormatter', function() {
      const addedItemsCountFormatter = jest.fn().mockImplementation(x => `foo ${x}`),
          viewNoItems = quickRender({ addedItems: [], addedItemsCountFormatter }),
          viewWithOneItem = quickRender({ addedItems: [{ id: '1', displayName: 'Item 1' }], addedItemsCountFormatter }),
          viewWithThreeItems = quickRender({ addedItems, addedItemsCountFormatter });

      expect(viewNoItems.getByRole('group', { name: 'Items Added' })).toHaveTextContent('foo 0');
      expect(viewWithOneItem.getByRole('group', { name: 'Items Added' })).toHaveTextContent('foo 1');
      expect(viewWithThreeItems.getByRole('group', { name: 'Items Added' })).toHaveTextContent('foo 3');
    });
  });
});
