/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React, { ComponentType } from 'react';
import { includes } from 'ramda';
import { within, render } from '@testing-library/react';
import { rtlRender, rtlRenderElement, userEvent, runTimers } from '../../../../__testutils__/rtlUtils';
import NxStatefulSearchTransferList, { Props } from '../NxStatefulSearchTransferList';

describe('NxSearchTransferList', function() {
  const minimalProps: Props = {
        onSearch: () => {},
        loading: false,
        searchMatches: [],
        onSearchMatchSelect: () => {},
        addedItems: [],
        onRemove: () => {}
      },
      quickRender = rtlRender(NxStatefulSearchTransferList as ComponentType<Props<string>>, minimalProps),
      renderEl = rtlRenderElement(NxStatefulSearchTransferList as ComponentType<Props<string>>, minimalProps);

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

    it('sets the aria-controls on the input to the dropdown id', function() {
      const view = quickRender(),
          searchInput = view.getByRole('searchbox'),
          dropdownId = view.getByRole('alert', { hidden: true }).getAttribute('id');

      expect(searchInput).toHaveAttribute('aria-controls', dropdownId);
    });

    it('clears the search input when the ESC is pressed', async function() {
      const user = userEvent.setup(),
          searchInput = quickRender().getByRole('searchbox');

      await user.type(searchInput, 'b');
      expect(searchInput).toHaveValue('b');

      await user.type(searchInput, '[Escape]');

      expect(searchInput).toHaveValue('');
    });

    it('clears the search input when the Clear Search button is clicked', async function() {
      const user = userEvent.setup(),
          view = quickRender(),
          searchInput = view.getByRole('searchbox');

      await user.type(searchInput, 'b');
      await runTimers();
      expect(searchInput).toHaveValue('b');

      const clearBtn = view.getByRole('button', { name: 'Clear search' });
      await user.click(clearBtn);

      expect(searchInput).toHaveValue('');
    });

    describe('search dropdown menu', function() {
      it('sets aria-live on the dropdown menu to "polite"', function() {
        expect(quickRender({}).getByRole('alert', { hidden: true })).toHaveAttribute('aria-live', 'polite');
      });

      describe('when there are matches', function() {
        const searchMatches = [
          { id: '1', displayName: 'Item 1'},
          { id: '2', displayName: 'Item 2'}
        ];

        // in order for the dropdown to not be aria-hidden, need to have text within the searchbox
        async function viewWithMatches(props?: Partial<Props>) {
          const user = userEvent.setup(),
              view = quickRender({ searchMatches, ...props }),
              searchInput = view.getByRole('searchbox');

          await user.type(searchInput, 'b');

          return view;
        }

        it('renders a dropdown with role=menu with matches as role=menuitem', async function() {
          const view = await viewWithMatches(),
              dropdownEl = view.getByRole('menu'),
              matches = within(dropdownEl).getAllByRole('menuitem');

          expect(dropdownEl).toBeInTheDocument();
          expect(matches[0]).toBeInTheDocument();
          expect(matches[1]).toBeInTheDocument();
          expect(matches).toHaveLength(2);
        });

        it('renders matches as type="button" and an accessible name', async function() {
          const view = await viewWithMatches(),
              matches = view.getAllByRole('menuitem');

          expect(matches[0]).toHaveAttribute('type', 'button');
          expect(matches[0]).toHaveAccessibleName('Item 1');

          expect(matches[1]).toHaveAttribute('type', 'button');
          expect(matches[1]).toHaveAccessibleName('Item 2');
        });

        it('calls onSearchMatchSelect when user selects a match', async function() {
          const user = userEvent.setup(),
              onSearchMatchSelect = jest.fn(),
              view = await viewWithMatches({ onSearchMatchSelect }),
              matches = view.getAllByRole('menuitem');

          expect(onSearchMatchSelect).not.toHaveBeenCalled();

          await user.click(matches[0]);

          expect(onSearchMatchSelect).toHaveBeenCalledWith({ id: '1', displayName: 'Item 1' });
        });
      });

      describe('when there are no matches', function() {
        // in order for the dropdown to not be aria-hidden, need to have text within the searchbox
        async function viewNoMatches(props?: Partial<Props>) {
          const user = userEvent.setup(),
              view = quickRender(props),
              searchInput = view.getByRole('searchbox');

          await user.type(searchInput, 'b');

          return view;
        }

        it('renders a dropdown with role=alert when in empty, or loading states', async function() {
          const emptyView = await viewNoMatches(),
              loadingView = await viewNoMatches({ loading: true });

          expect(emptyView.getByRole('alert')).toBeInTheDocument();
          expect(loadingView.getByRole('alert')).toBeInTheDocument();
        });

        it('renders a dropdown with no role when in an error state', function() {
          const dropdown = renderEl({ loadError: 'oops' })!.querySelector('.nx-search-dropdown__menu--error');
          expect(dropdown).not.toHaveAttribute('role');
        });

        it('sets aria-busy on the dropdown menu if loading is true', async function() {
          const dropdown = (await viewNoMatches()).getByRole('alert'),
              loadingDropdown = (await viewNoMatches({ loading: true })).getByRole('alert');

          expect(dropdown).toHaveAttribute('aria-busy', 'false');
          expect(loadingDropdown).toHaveAttribute('aria-busy', 'true');
        });

        it('renders an element with role=status within the dropdown when loading', async function() {
          const dropdown = (await viewNoMatches({ loading: true })).getByRole('alert');
          expect(within(dropdown).getByRole('status')).toBeInTheDocument();
        });

        it('renders "Loading" text in the dropdown when loading is true', async function() {
          const loadingDropdown = (await viewNoMatches({ loading: true })).getByRole('status');
          expect(loadingDropdown).toHaveTextContent('Loading');
        });

        it('renders a dropdown with the loadError prop text when in an error state', async function() {
          const alertEl = (await viewNoMatches({ loadError: 'oops' })).getByRole('alert');
          expect(alertEl).toHaveTextContent('oops');
        });

        it('renders a retry button and error text when the error prop is provided', async function() {
          const alertEl = (await viewNoMatches({ loadError: 'oops' })).getByRole('alert');

          expect(alertEl).toHaveTextContent('oops');
          expect(within(alertEl).getByRole('button', { name: 'Retry' })).toBeInTheDocument();
        });

        it('renders a dropdown with "No Results Found" text there are no matching elements and not in error' + 
        'or loading state', async function() {
          const emptyDropdown = (await viewNoMatches()).getByRole('alert');
          expect(emptyDropdown).toHaveTextContent('No Results Found');
        });
      });

      describe('onSearch', function() {
        it('calls onSearch whenever the searchbox text changes with a value that differs after trimming' +
        'and passes the trimmed value', async function() {
          const user = userEvent.setup(),
              onSearch = jest.fn(),
              searchInput = quickRender({ onSearch }).getByRole('searchbox');

          await user.type(searchInput, ' foo ');
          expect(onSearch).toHaveBeenCalledTimes(3);

          await user.type(searchInput, '[Backspace]', { initialSelectionStart: 5, initialSelectionEnd: 5 });
          await user.type(searchInput, '[Backspace]', { initialSelectionStart: 1, initialSelectionEnd: 1 });
          await user.type(searchInput, '[Space]', { initialSelectionStart: 0, initialSelectionEnd: 0 });
          await user.type(searchInput, '[Space]', { initialSelectionStart: 1, initialSelectionEnd: 1 });
          await user.type(searchInput, '[Space]', { initialSelectionStart: 5, initialSelectionEnd: 5 });

          expect(onSearch).toHaveBeenCalledTimes(3);

          await user.type(searchInput, '[Backspace]', { initialSelectionStart: 1, initialSelectionEnd: 3 });
          expect(onSearch).toHaveBeenNthCalledWith(4, 'oo');

          await user.type(searchInput, 'o', { initialSelectionStart: 5, initialSelectionEnd: 5 });
          expect(onSearch).toHaveBeenNthCalledWith(5, 'oo o');
        });


        it('calls onSearch with the searchText when the retry button is clicked', async function() {
          const user = userEvent.setup(),
              onSearch = jest.fn(),
              view = quickRender({ loadError: 'oops', onSearch }),
              searchInput = view.getByRole('searchbox');

          await user.type(searchInput, 'b');
          expect(onSearch).toHaveBeenCalledTimes(1);

          await runTimers();
          const retryBtn = view.getByRole('button', { name: 'Retry' });

          await user.click(retryBtn);
          expect(onSearch).toHaveBeenNthCalledWith(2, 'b');
        });

        it('calls onSearch with the searchText when the dropdown or searchbox regain focus from elsewhere on the page' +
        'while in an error state', async function() {
          const user = userEvent.setup(),
              onSearch = jest.fn(),
              outsideView = render(
                <>
                  <NxStatefulSearchTransferList {...minimalProps} onSearch= {onSearch} loadError="oops" />
                  <button>Click Me</button>
                </>
              ),
              searchInput = outsideView.getByRole('searchbox'),
              outsideBtn = outsideView.getByRole('button', { name: 'Click Me' });

          await user.type(searchInput, 'b');
          expect(onSearch).toHaveBeenCalledTimes(1);

          outsideBtn.focus();
          expect(onSearch).toHaveBeenCalledTimes(1);

          await runTimers();
          const retryBtn = outsideView.getByRole('button', { name: 'Retry' });

          retryBtn.focus();
          expect(onSearch).toHaveBeenNthCalledWith(2, 'b');

          outsideBtn.focus();

          searchInput.focus();
          expect(onSearch).toHaveBeenNthCalledWith(3, 'b');
        });

        it('does not call onSearch if the focus moves inside the component while in an error state', async function() {
          const user = userEvent.setup(),
              onSearch = jest.fn(),
              view = quickRender({ onSearch, loadError: 'oops' }),
              searchInput = view.getByRole('searchbox');

          await user.type(searchInput, 'b');
          expect(onSearch).toHaveBeenCalledTimes(1);

          searchInput.focus();
          expect(onSearch).toHaveBeenCalledTimes(1);

          const retryBtn = view.getByRole('button', { name: 'Retry' });
          retryBtn.focus();
          expect(onSearch).toHaveBeenCalledTimes(1);
        });
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

    it('renders a default label of "Items Added" unless addedItemsLabel specified', function() {
      const defaultTransferListEl = quickRender().getByRole('group', { name: 'Items Added' }),
          customTransferListEl = quickRender({ addedItemsLabel: 'New Label' }).getByRole('group', { name: 'New Label'});

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
      // At this time, there arRIA roles assigned to either .nx-transfer-list__item-list or .nx-transfer-list__item.
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
            item2 = quickRender({ addedItems, onRemove }).getByRole('checkbox', { name: 'item 2'});

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

        it('calls onRemove with only addedItems filtered out', async function() {
          const user = userEvent.setup(),
              onRemove = jest.fn(),
              view = quickRender({ addedItems, onRemove, showRemoveAll: true }),
              filterInput = view.getByRole('textbox'),
              removeBtn = view.getByRole('button', { name: 'Remove All' });

          let items = view.getAllByRole('checkbox');
          expect(items.length).toBe(3);

          await user.type(filterInput, 'i');

          // confirm filtering
          items = view.getAllByRole('checkbox');
          expect(items.length).toBe(2);

          expect(onRemove).not.toHaveBeenCalled();

          await user.click(removeBtn);

          expect(onRemove).toHaveBeenCalledWith([{ id: '3', displayName: 'Match 3' }]);
        });
      });
    });

    describe('filtering', function() {
      it('filter items according to filter input value by case-insensitive substrintg match', async function() {
        const user = userEvent.setup(),
            view = quickRender({ addedItems }),
            filterInput = view.getByRole('textbox');
        let items = view.getAllByRole('checkbox');

        expect(items.length).toBe(3);

        await user.type(filterInput, 'item');

        items = view.getAllByRole('checkbox');
        expect(items.length).toBe(2);
        expect(items[0]).toHaveAccessibleName('Item 1');
        expect(items[1]).toHaveAccessibleName('item 2');
      });

      it('filters items according to the filter input value and filterFn when specified', async function() {
        const user = userEvent.setup(),
            view = quickRender({
              addedItems,
              filterFn: includes // case sensitive inclusion
            }),
            filterInput = view.getByRole('textbox');
        let items = view.getAllByRole('checkbox');

        expect(items.length).toBe(3);

        await user.type(filterInput, 'item');

        items = view.getAllByRole('checkbox');
        expect(items.length).toBe(1);
        expect(items[0]).toHaveAccessibleName('item 2');
      });

      it('clears the filter input when the ESC is pressed', async function() {
        const user = userEvent.setup(),
            filterInput = quickRender().getByRole('textbox');

        await user.type(filterInput, 'b');
        expect(filterInput).toHaveValue('b');

        await user.type(filterInput, '[Escape]');

        expect(filterInput).toHaveValue('');
      });

      it('clears the filter input when the Clear Filter button is clicked', async function() {
        const user = userEvent.setup(),
            view = quickRender(),
            filterInput = view.getByRole('textbox');

        await user.type(filterInput, 'b');
        expect(filterInput).toHaveValue('b');

        await runTimers();
        const clearBtn = view.getByRole('button', { name: 'Clear filter' });
        await user.click(clearBtn);

        expect(filterInput).toHaveValue('');
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
          viewWithThreeItems = quickRender({ addedItems, addedItemsCountFormatter});

      expect(viewNoItems.getByRole('group', { name: 'Items Added' })).toHaveTextContent('foo 0');
      expect(viewWithOneItem.getByRole('group', { name: 'Items Added' })).toHaveTextContent('foo 1');
      expect(viewWithThreeItems.getByRole('group', { name: 'Items Added' })).toHaveTextContent('foo 3');
    });
  });
});
