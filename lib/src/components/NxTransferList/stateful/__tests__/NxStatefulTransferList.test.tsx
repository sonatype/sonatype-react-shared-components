/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { render, screen, within } from '@testing-library/react';

import { rtlRender, rtlRenderElement, runTimers, userEvent } from '../../../../__testutils__/rtlUtils';
import { mockTransferListLayout } from '../../../../__testutils__/transferListUtils';
import NxStatefulTransferList, { Props } from '../NxStatefulTransferList';
import NxForm from '../../../NxForm/NxForm';

describe('NxStatefulTransferList', function() {
  const minimalProps = {
        allItems: [],
        selectedItems: new Set<number>(),
        onChange: () => {}
      },
      // some items used in tests though not in minimalProps
      allItems = [
        { id: 1, displayName: 'One' },
        { id: 2, displayName: 'Two' },
        { id: 3, displayName: 'Three' }
      ],
      quickRender = rtlRender<Props<number>>(NxStatefulTransferList, minimalProps),
      renderEl = rtlRenderElement<Props<number>>(NxStatefulTransferList, minimalProps);

  beforeEach(function() {
    // silence overflow tooltip warnings
    jest.spyOn(console, 'warn').mockImplementation(() => {});

    mockTransferListLayout();
  });

  it('renders a top-level element with a role of group and no default a11y name', function() {
    expect(renderEl()).toHaveAttribute('role', 'group');
    expect(renderEl()).not.toHaveAccessibleName();
  });

  it('allows the a11y name of the top-level element to be set via aria-label or aria-labelledby', function() {
    render(<div id="label">bar</div>);

    const elWithLabel = renderEl({ 'aria-label': 'foo' }),
        elWithLabelledBy = renderEl({ 'aria-labelledby': 'label' });

    expect(elWithLabel).toHaveAccessibleName('foo');
    expect(elWithLabelledBy).toHaveAccessibleName('bar');
  });

  it('adds additional specified div attrs', function() {
    const el = renderEl({ id: 'foo', lang: 'en-US' });

    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('lang', 'en-US');
  });

  it('adds additional specified class names', function() {
    const el = renderEl({ className: 'foo' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  describe('group labels', function() {
    it('contains two more groups named "Available Items" and "Transferred Items" by default', function() {
      const view = quickRender(),
          available = view.getByRole('group', { name: 'Available Items' }),
          selected = view.getByRole('group', { name: 'Transferred Items' });

      expect(available).toBeInTheDocument();
      expect(selected).toBeInTheDocument();

      expect(available).toHaveTextContent('Available Items');
      expect(selected).toHaveTextContent('Transferred Items');
    });

    it('overrides the "Available Items" name with the availableItemsLabel', function() {
      const view = quickRender({ availableItemsLabel: 'foo' }),
          group = view.getByRole('group', { name: 'foo' });

      expect(group).toBeInTheDocument();
      expect(view.queryByRole('group', { name: 'Available Items' })).not.toBeInTheDocument();
      expect(view.getByRole('group', { name: 'Transferred Items' })).toBeInTheDocument();

      expect(group).toHaveTextContent('foo');
      expect(group).not.toHaveTextContent('Available Items');
    });

    it('overrides the "Transferred Items" name with the selectedItemsLabel', function() {
      const view = quickRender({ selectedItemsLabel: 'foo' }),
          group = view.getByRole('group', { name: 'foo' });

      expect(group).toBeInTheDocument();
      expect(view.queryByRole('group', { name: 'Transferred Items' })).not.toBeInTheDocument();
      expect(view.getByRole('group', { name: 'Available Items' })).toBeInTheDocument();

      expect(group).toHaveTextContent('foo');
      expect(group).not.toHaveTextContent('Transferred Items');
    });
  });

  describe('checkbox state and placement', function() {
    it('renders a checkbox for each item in allItems', function() {
      const view = quickRender({ allItems }),
          checkboxes = view.getAllByRole('checkbox');

      expect(checkboxes[0]).toHaveAccessibleName('One');
      expect(checkboxes[1]).toHaveAccessibleName('Two');
      expect(checkboxes[2]).toHaveAccessibleName('Three');

      expect((checkboxes[0] as HTMLInputElement).labels?.[0]).toHaveTextContent('One');
      expect((checkboxes[1] as HTMLInputElement).labels?.[0]).toHaveTextContent('Two');
      expect((checkboxes[2] as HTMLInputElement).labels?.[0]).toHaveTextContent('Three');
    });

    it('renders the checkboxes for items not present in selectedItems unchecked and in the "Available Items" group',
        function() {
          const view = quickRender({ allItems, selectedItems: new Set([2, 3]) }),
              availableGroup = view.getByRole('group', { name: 'Available Items' }),
              checkboxOne = view.getByRole('checkbox', { name: 'One' }),
              checkboxTwo = view.getByRole('checkbox', { name: 'Two' }),
              checkboxThree = view.getByRole('checkbox', { name: 'Three' });

          expect(availableGroup).toContainElement(checkboxOne);
          expect(availableGroup).not.toContainElement(checkboxTwo);
          expect(availableGroup).not.toContainElement(checkboxThree);

          expect(checkboxOne).not.toBeChecked();
        }
    );

    it('renders the checkboxes for items present in selectedItems checked and in the "Transferred Items" group',
        function() {
          const view = quickRender({ allItems, selectedItems: new Set([2, 3]) }),
              selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
              checkboxOne = view.getByRole('checkbox', { name: 'One' }),
              checkboxTwo = view.getByRole('checkbox', { name: 'Two' }),
              checkboxThree = view.getByRole('checkbox', { name: 'Three' });

          expect(selectedGroup).not.toContainElement(checkboxOne);
          expect(selectedGroup).toContainElement(checkboxTwo);
          expect(selectedGroup).toContainElement(checkboxThree);

          expect(checkboxTwo).toBeChecked();
          expect(checkboxThree).toBeChecked();
        }
    );
  });

  describe('checkbox interaction', function() {
    it('fires onChange without the checkbox\'s corresponding id when a selected checkbox is clicked',
        async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),
              view = quickRender({ allItems, selectedItems: new Set([1, 3, 2]), showMoveAll: true, onChange }),
              checkbox3 = view.getByRole('checkbox', { name: 'Three' });

          await user.click(checkbox3);

          expect(onChange).toHaveBeenCalledTimes(1);
          expect(onChange).toHaveBeenCalledWith(new Set([1, 2]));
        }
    );

    it('fires onChange with the checkbox\'s corresponding id added to the set when an unselected checkbox is clicked',
        async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),
              view = quickRender({ allItems, selectedItems: new Set([3, 2]), showMoveAll: true, onChange }),
              checkbox1 = view.getByRole('checkbox', { name: 'One' });

          await user.click(checkbox1);

          expect(onChange).toHaveBeenCalledTimes(1);
          expect(onChange).toHaveBeenCalledWith(new Set([3, 2, 1]));
        }
    );
  });

  describe('count texts', function() {
    it('renders text within the Available Items group indicating how many items are available', function() {
      expect(
          quickRender({ allItems }).getByRole('group', { name: 'Available Items' })
      ).toHaveTextContent('3 items available');

      expect(
          quickRender({ allItems, selectedItems: new Set([1, 2]) }).getByRole('group', { name: 'Available Items' })
      ).toHaveTextContent('1 item available');

      expect(
          quickRender({ allItems, selectedItems: new Set([1, 2, 3]) })
              .getByRole('group', { name: 'Available Items' })
      ).toHaveTextContent('0 items available');
    });

    it('renders text within the Transferred Items group indicating how many items are selected', function() {
      expect(
          quickRender({ allItems }).getByRole('group', { name: 'Transferred Items' })
      ).toHaveTextContent('0 items transferred');

      expect(
          quickRender({ allItems, selectedItems: new Set([1]) })
              .getByRole('group', { name: 'Transferred Items' })
      ).toHaveTextContent('1 item transferred');

      expect(
          quickRender({ allItems, selectedItems: new Set([1, 2, 3]) })
              .getByRole('group', { name: 'Transferred Items' })
      ).toHaveTextContent('3 items transferred');
    });

    it('allows the "x items available" text to be customized via the availbleItemsCountFormatter', function() {
      const availableItemsCountFormatter = jest.fn().mockImplementation(x => `foo ${x}`),
          props = { allItems, availableItemsCountFormatter };

      expect(
          quickRender(props).getByRole('group', { name: 'Available Items' })
      ).toHaveTextContent('foo 3');

      expect(
          quickRender({ ...props, selectedItems: new Set([1]) }).getByRole('group', { name: 'Available Items' })
      ).toHaveTextContent('foo 2');

      expect(
          quickRender({ ...props, selectedItems: new Set([1, 2, 3]) }).getByRole('group', { name: 'Available Items' })
      ).toHaveTextContent('foo 0');
    });

    it('allows the "x items transferred" text to be customized via the selectedItemsCountFormatter', function() {
      const selectedItemsCountFormatter = jest.fn().mockImplementation(x => `foo ${x}`),
          props = { allItems, selectedItemsCountFormatter };

      expect(
          quickRender(props).getByRole('group', { name: 'Transferred Items' })
      ).toHaveTextContent('foo 0');

      expect(
          quickRender({ ...props, selectedItems: new Set([1]) }).getByRole('group', { name: 'Transferred Items' })
      ).toHaveTextContent('foo 1');

      expect(
          quickRender({ ...props, selectedItems: new Set([1, 2, 3]) }).getByRole('group', { name: 'Transferred Items' })
      ).toHaveTextContent('foo 3');
    });
  });

  describe('move all buttons', function() {
    describe('when showMoveAll is not true', function() {
      it('does not render "Transfer All" or "Remove All" buttons', function() {
        expect(quickRender().queryByRole('button', { name: 'Transfer All' })).not.toBeInTheDocument();
        expect(quickRender().queryByRole('button', { name: 'Remove All' })).not.toBeInTheDocument();

        expect(quickRender({ showMoveAll: undefined }).queryByRole('button', { name: 'Transfer All' }))
            .not.toBeInTheDocument();
        expect(quickRender({ showMoveAll: undefined }).queryByRole('button', { name: 'Remove All' }))
            .not.toBeInTheDocument();

        expect(quickRender({ showMoveAll: null }).queryByRole('button', { name: 'Transfer All' }))
            .not.toBeInTheDocument();
        expect(quickRender({ showMoveAll: null }).queryByRole('button', { name: 'Remove All' }))
            .not.toBeInTheDocument();

        expect(quickRender({ showMoveAll: false }).queryByRole('button', { name: 'Transfer All' }))
            .not.toBeInTheDocument();
        expect(quickRender({ showMoveAll: false }).queryByRole('button', { name: 'Remove All' }))
            .not.toBeInTheDocument();
      });
    });

    describe('when showMoveAll is true', function() {
      const quickRender = rtlRender<Props<number>>(NxStatefulTransferList, { ...minimalProps, showMoveAll: true });

      describe('Transfer All button', function() {
        it('is rendered within the "Available Items" group', function() {
          const view = quickRender(),
              availableItems = view.getByRole('group', { name: 'Available Items' }),
              transferAllBtn = view.getByRole('button', { name: 'Transfer All' });

          expect(transferAllBtn).toBeInTheDocument();
          expect(availableItems).toContainElement(transferAllBtn);
        });

        it('fires onChange with all items ids', async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),
              view = quickRender({ allItems, onChange, selectedItems: new Set([2]) }),
              transferAll = view.getByRole('button', { name: 'Transfer All' });

          expect(onChange).not.toHaveBeenCalled();

          await user.click(transferAll);
          expect(onChange).toHaveBeenCalledWith(new Set([1, 2, 3]));
        });

        it('fires onChange with all item ids except those filtered out from the available options by user input ' +
            'in the available filter and optionally filterFn', async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),

              // a silly filter function that filters by the character _before_ (alphabetically) the character
              // that the user entered
              filterFn = (filterChar: string, displayName: string) => {
                const charToFilterOn = String.fromCharCode(filterChar.charCodeAt(0) - 1).toLowerCase();
                return displayName.toLowerCase().includes(charToFilterOn);
              },
              defaultFilterView = quickRender({ allItems, onChange }),
              defaultAvailableGroup = defaultFilterView.getByRole('group', { name: 'Available Items' }),
              defaultFilterInput = within(defaultAvailableGroup).getByRole('textbox', { name: 'Filter' }),
              defaultFilterTransferBtn = defaultFilterView.getByRole('button', { name: 'Transfer All' }),
              customFilterView = quickRender({ allItems, onChange, filterFn }),
              customAvailableGroup = customFilterView.getByRole('group', { name: 'Available Items' }),
              customFilterInput = within(customAvailableGroup).getByRole('textbox', { name: 'Filter' }),
              customFilterTransferBtn = customFilterView.getByRole('button', { name: 'Transfer All' });

          await user.type(defaultFilterInput, 'o');
          await user.type(customFilterInput, 'o');

          expect(onChange).not.toHaveBeenCalled();

          await user.click(defaultFilterTransferBtn);
          expect(onChange).toHaveBeenCalledTimes(1);
          expect(onChange).toHaveBeenCalledWith(new Set([1, 2]));

          await user.click(customFilterTransferBtn);
          expect(onChange).toHaveBeenCalledTimes(2);
          expect(onChange).toHaveBeenCalledWith(new Set([1]));
        });
      });

      describe('Remove All button', function() {
        it('is rendered within the "Transferred Items" group', function() {
          const view = quickRender(),
              availableItems = view.getByRole('group', { name: 'Transferred Items' }),
              removeAllBtn = view.getByRole('button', { name: 'Remove All' });

          expect(removeAllBtn).toBeInTheDocument();
          expect(availableItems).toContainElement(removeAllBtn);
        });

        it('fires onChange with no item ids', async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),
              view = quickRender({ allItems, onChange, selectedItems: new Set([2]) }),
              removeAll = view.getByRole('button', { name: 'Remove All' });

          expect(onChange).not.toHaveBeenCalled();

          await user.click(removeAll);
          expect(onChange).toHaveBeenCalledWith(new Set());
        });

        it('fires onChange with only item ids filtered out from the available options by user input  in the ' +
            'selected filter and optionally filterFn', async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),

              // a silly filter function that filters by the character _before_ (alphabetically) the character
              // that the user entered
              filterFn = (filterChar: string, displayName: string) => {
                const charToFilterOn = String.fromCharCode(filterChar.charCodeAt(0) - 1).toLowerCase();
                return displayName.toLowerCase().includes(charToFilterOn);
              },
              defaultFilterView = quickRender({
                allItems,
                selectedItems: new Set([1, 2, 3]),
                onChange
              }),
              defaultSelectedGroup = defaultFilterView.getByRole('group', { name: 'Transferred Items' }),
              defaultFilterInput = within(defaultSelectedGroup).getByRole('textbox', { name: 'Filter' }),
              defaultFilterRemoveBtn = defaultFilterView.getByRole('button', { name: 'Remove All' }),
              customFilterView = quickRender({
                allItems,
                selectedItems: new Set([1, 2, 3]),
                onChange,
                filterFn
              }),
              customSelectedGroup = customFilterView.getByRole('group', { name: 'Transferred Items' }),
              customFilterInput = within(customSelectedGroup).getByRole('textbox', { name: 'Filter' }),
              customFilterRemoveBtn = customFilterView.getByRole('button', { name: 'Remove All' });

          await user.type(defaultFilterInput, 'o');
          await user.type(customFilterInput, 'o');

          expect(onChange).not.toHaveBeenCalled();

          await user.click(defaultFilterRemoveBtn);
          expect(onChange).toHaveBeenCalledTimes(1);
          expect(onChange).toHaveBeenCalledWith(new Set([3]));

          await user.click(customFilterRemoveBtn);
          expect(onChange).toHaveBeenCalledTimes(2);
          expect(onChange).toHaveBeenCalledWith(new Set([2, 3]));
        });
      });
    });
  });

  describe('filtering', function() {
    it('renders a "Filter" text input in each of the Available and Transferred Items groups', function() {
      const view = quickRender(),
          filterInputs = view.getAllByRole('textbox', { name: 'Filter' }),
          availableGroup = view.getByRole('group', { name: 'Available Items' }),
          selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
          availableFilter = within(availableGroup).getByRole('textbox', { name: 'Filter' }),
          selectedFilter = within(selectedGroup).getByRole('textbox', { name: 'Filter' });

      expect(availableFilter).toBeInTheDocument();
      expect(selectedFilter).toBeInTheDocument();
      expect(filterInputs).toHaveLength(2);
    });

    describe('available items filtering', function() {
      it('filters the visible list of checkboxes in the Available Items group by case-insensitive substring match',
          async function() {
            const user = userEvent.setup(),
                view = quickRender({ allItems, selectedItems: new Set([3]) }),
                availableGroup = view.getByRole('group', { name: 'Available Items' }),
                selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
                availableFilterInput = within(availableGroup).getByRole('textbox', { name: 'Filter' });

            await user.type(availableFilterInput, 'N');

            const availableCheckboxes = within(availableGroup).getAllByRole('checkbox'),
                selectedCheckboxes = within(selectedGroup).getAllByRole('checkbox');

            // Two should be filtered out
            expect(availableCheckboxes).toHaveLength(1);
            expect(availableCheckboxes[0]).toHaveAccessibleName('One');

            // Three should not be filtered out because it's in the other column
            expect(selectedCheckboxes).toHaveLength(1);
            expect(selectedCheckboxes[0]).toHaveAccessibleName('Three');
          }
      );

      it('filters the visible list of checkboxes in the Available Items group by the filterFn if specified',
          async function() {
            // a silly filter function that filters by the character _before_ (alphabetically) the character
            // that the user entered
            const user = userEvent.setup(),
                filterFn = (filterChar: string, displayName: string) => {
                  const charToFilterOn = String.fromCharCode(filterChar.charCodeAt(0) - 1).toLowerCase();
                  return displayName.toLowerCase().includes(charToFilterOn);
                },
                view = quickRender({ allItems, filterFn }),
                availableGroup = view.getByRole('group', { name: 'Available Items' }),
                availableFilterInput = within(availableGroup).getByRole('textbox', { name: 'Filter' });

            await user.type(availableFilterInput, 'o');

            const availableCheckboxes = within(availableGroup).getAllByRole('checkbox');

            expect(availableCheckboxes).toHaveLength(1);
            expect(availableCheckboxes[0]).toHaveAccessibleName('One');
          }
      );
    });

    describe('selected items filtering', function() {
      it('filters the visible list of checkboxes in the Transferred Items group by case-insensitive substring match',
          async function() {
            const user = userEvent.setup(),
                view = quickRender({ allItems, selectedItems: new Set([1, 2]) }),
                availableGroup = view.getByRole('group', { name: 'Available Items' }),
                selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
                selectedFilterInput = within(selectedGroup).getByRole('textbox', { name: 'Filter' });

            await user.type(selectedFilterInput, 'N');

            const availableCheckboxes = within(availableGroup).getAllByRole('checkbox'),
                selectedCheckboxes = within(selectedGroup).getAllByRole('checkbox');

            // Two should be filtered out
            expect(selectedCheckboxes).toHaveLength(1);
            expect(selectedCheckboxes[0]).toHaveAccessibleName('One');

            // Three should not be filtered out because it's in the other column
            expect(availableCheckboxes).toHaveLength(1);
            expect(availableCheckboxes[0]).toHaveAccessibleName('Three');
          }
      );

      it('filters the visible list of checkboxes in the Transferred Items group by the filterFn if specified',
          async function() {
            // a silly filter function that filters by the character _before_ (alphabetically) the character
            // that the user entered
            const user = userEvent.setup(),
                filterFn = (filterChar: string, displayName: string) => {
                  const charToFilterOn = String.fromCharCode(filterChar.charCodeAt(0) - 1).toLowerCase();
                  return displayName.toLowerCase().includes(charToFilterOn);
                },
                view = quickRender({ allItems, filterFn, selectedItems: new Set([1, 2, 3]) }),
                selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
                selectedFilterInput = within(selectedGroup).getByRole('textbox', { name: 'Filter' });

            await user.type(selectedFilterInput, 'o');

            const selectedCheckboxes = within(selectedGroup).getAllByRole('checkbox');

            expect(selectedCheckboxes).toHaveLength(1);
            expect(selectedCheckboxes[0]).toHaveAccessibleName('One');
          }
      );
    });

    it('unfilters the available items when the available items "Clear filter" button is pressed', async function() {
      const user = userEvent.setup(),
          view = quickRender({ allItems }),
          availableGroup = view.getByRole('group', { name: 'Available Items' }),
          availableFilterInput = within(availableGroup).getByRole('textbox', { name: 'Filter' });

      await runTimers();
      const clearFilterBtn = within(availableGroup).getByRole('button', { name: 'Clear filter' });

      await user.type(availableFilterInput, 'asdf');
      expect(within(availableGroup).queryAllByRole('checkbox')).toHaveLength(0);

      await user.click(clearFilterBtn);

      expect(within(availableGroup).queryAllByRole('checkbox')).toHaveLength(3);
    });

    it('unfilters the available items when ESC is pressed within the available items filter', async function() {
      const user = userEvent.setup(),
          view = quickRender({ allItems }),
          availableGroup = view.getByRole('group', { name: 'Available Items' }),
          availableFilterInput = within(availableGroup).getByRole('textbox', { name: 'Filter' });

      await runTimers();

      await user.type(availableFilterInput, 'asdf');
      expect(within(availableGroup).queryAllByRole('checkbox')).toHaveLength(0);

      availableFilterInput.focus();
      await user.keyboard('[Escape]');

      expect(within(availableGroup).queryAllByRole('checkbox')).toHaveLength(3);
    });

    it('unfilters the selected items when the selected items "Clear filter" button is pressed', async function() {
      const user = userEvent.setup(),
          view = quickRender({ allItems, selectedItems: new Set([1, 2, 3]) }),
          selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
          selectedFilterInput = within(selectedGroup).getByRole('textbox', { name: 'Filter' });

      await runTimers();
      const clearFilterBtn = within(selectedGroup).getByRole('button', { name: 'Clear filter' });

      await user.type(selectedFilterInput, 'asdf');
      expect(within(selectedGroup).queryAllByRole('checkbox')).toHaveLength(0);

      await user.click(clearFilterBtn);

      expect(within(selectedGroup).queryAllByRole('checkbox')).toHaveLength(3);
    });

    it('unfilters the selected items when ESC is pressed within the selected items filter', async function() {
      const user = userEvent.setup(),
          view = quickRender({ allItems, selectedItems: new Set([1, 2, 3]) }),
          selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
          selectedFilterInput = within(selectedGroup).getByRole('textbox', { name: 'Filter' });

      await runTimers();

      await user.type(selectedFilterInput, 'asdf');
      expect(within(selectedGroup).queryAllByRole('checkbox')).toHaveLength(0);

      selectedFilterInput.focus();
      await user.keyboard('[Escape]');

      expect(within(selectedGroup).queryAllByRole('checkbox')).toHaveLength(3);
    });

    it('does not submit the form when the available items "Clear filter" button is pressed', async function() {
      const user = userEvent.setup(),
          onSubmit = jest.fn(),
          view = render(
            <NxForm onSubmit={onSubmit} showValidationErrors={false} >
              <NxStatefulTransferList { ...minimalProps } />
            </NxForm>
          ),
          availableGroup = view.getByRole('group', { name: 'Available Items' }),
          availableFilterInput = within(availableGroup).getByRole('textbox', { name: 'Filter' });

      await runTimers();

      await user.type(availableFilterInput, 'asdf');
      expect(onSubmit).not.toHaveBeenCalled();

      const clearFilterBtn = within(availableGroup).getByRole('button', { name: 'Clear filter' });
      await user.click(clearFilterBtn);

      expect(onSubmit).not.toHaveBeenCalled();
    });

    it('does not submit the form when the transferred items "Clear filter" button is pressed', async function() {
      const user = userEvent.setup(),
          onSubmit = jest.fn(),
          view = render(
            <NxForm onSubmit={onSubmit} showValidationErrors={false} >
              <NxStatefulTransferList { ...minimalProps } />
            </NxForm>
          ),
          selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
          selectedFilterInput = within(selectedGroup).getByRole('textbox', { name: 'Filter' });

      await runTimers();

      await user.type(selectedFilterInput, 'asdf');
      expect(onSubmit).not.toHaveBeenCalled();

      const clearFilterBtn = within(selectedGroup).getByRole('button', { name: 'Clear filter' });
      await user.click(clearFilterBtn);

      expect(onSubmit).not.toHaveBeenCalled();
    });
  });

  describe('allowReordering', function() {
    describe('when not true', function() {
      it('does not render "Move Up" or "Move Down" buttons', async function() {
        const view = quickRender({ allItems, selectedItems: new Set([1]) });

        await runTimers();
        const moveButtons = view.queryAllByRole('button', { name: /move/i });

        expect(moveButtons).toHaveLength(0);
      });
    });

    describe('when true', function() {
      const quickRender = rtlRender<Props<number>>(NxStatefulTransferList, {
        ...minimalProps,
        selectedItems: [],
        allowReordering: true
      });

      it('requires selectedItems to be an array', function() {
        const view = quickRender({ allItems, selectedItems: [2, 3] }),
            availableGroup = view.getByRole('group', { name: 'Available Items' }),
            selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
            checkboxOne = view.getByRole('checkbox', { name: 'One' }),
            checkboxTwo = view.getByRole('checkbox', { name: 'Two' }),
            checkboxThree = view.getByRole('checkbox', { name: 'Three' });

        expect(availableGroup).toContainElement(checkboxOne);
        expect(selectedGroup).toContainElement(checkboxTwo);
        expect(selectedGroup).toContainElement(checkboxThree);

        expect(checkboxOne).not.toBeChecked();
        expect(checkboxTwo).toBeChecked();
        expect(checkboxThree).toBeChecked();
      });

      it('orders the selected checkboxes to match the selectedItems array', function() {
        const view = quickRender({ allItems, selectedItems: [3, 2] }),
            selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
            selectedCheckboxes = within(selectedGroup).getAllByRole('checkbox');

        expect(selectedCheckboxes).toHaveLength(2);
        expect(selectedCheckboxes[0]).toHaveAccessibleName('Three');
        expect(selectedCheckboxes[1]).toHaveAccessibleName('Two');
      });

      it('orders each checkbox according to its first mention in selectedItems and ignores successive duplicates',
          function() {
            const view = quickRender({ allItems, selectedItems: [3, 1, 1, 2, 3, 1, 2] }),
                selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
                selectedCheckboxes = within(selectedGroup).getAllByRole('checkbox');

            expect(selectedCheckboxes).toHaveLength(3);
            expect(selectedCheckboxes[0]).toHaveAccessibleName('Three');
            expect(selectedCheckboxes[1]).toHaveAccessibleName('One');
            expect(selectedCheckboxes[2]).toHaveAccessibleName('Two');
          }
      );

      it('renders a group for each selected item containing its checkbox and Move Up and Move Down buttons',
          async function() {
            const view = quickRender({ allItems, selectedItems: [1, 2, 3] }),
                selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
                itemGroups = within(selectedGroup).getAllByRole('group');

            await runTimers();

            expect(itemGroups).toHaveLength(3);

            expect(itemGroups[0]).toHaveAccessibleName('One');
            expect(within(itemGroups[0]).getByRole('checkbox')).toHaveAccessibleName('One');
            expect(within(itemGroups[0]).getAllByRole('button')).toHaveLength(2);
            expect(within(itemGroups[0]).getByRole('button', { name: /^Move Up/ })).toBeInTheDocument();
            expect(within(itemGroups[0]).getByRole('button', { name: /^Move Down/ })).toBeInTheDocument();

            expect(itemGroups[1]).toHaveAccessibleName('Two');
            expect(within(itemGroups[1]).getByRole('checkbox')).toHaveAccessibleName('Two');
            expect(within(itemGroups[1]).getAllByRole('button')).toHaveLength(2);
            expect(within(itemGroups[1]).getByRole('button', { name: /^Move Up/ })).toBeInTheDocument();
            expect(within(itemGroups[1]).getByRole('button', { name: /^Move Down/ })).toBeInTheDocument();

            expect(itemGroups[2]).toHaveAccessibleName('Three');
            expect(within(itemGroups[2]).getByRole('checkbox')).toHaveAccessibleName('Three');
            expect(within(itemGroups[2]).getAllByRole('button')).toHaveLength(2);
            expect(within(itemGroups[2]).getByRole('button', { name: /^Move Up/ })).toBeInTheDocument();
            expect(within(itemGroups[2]).getByRole('button', { name: /^Move Down/ })).toBeInTheDocument();
          }
      );

      it('does not render Move Up or Move Down buttons for available items', async function() {
        const view = quickRender({ allItems, selectedItems: [] }),
            availableGroup = view.getByRole('group', { name: 'Available Items' });

        await runTimers();
        const moveBtns = within(availableGroup).queryAllByRole('button', { name: /^Move/i });

        expect(moveBtns).toHaveLength(0);
      });

      it('disables the Move Up button on the first selected item and adds "(disabled)" to its name', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            view = quickRender({ onChange, allItems, selectedItems: [1, 2, 3] }),
            group1 = view.getByRole('group', { name: 'One' }),
            group2 = view.getByRole('group', { name: 'Two' }),
            group3 = view.getByRole('group', { name: 'Three' });

        await runTimers();
        const up1Btn = within(group1).getByRole('button', { name: /up/i }),
            up2Btn = within(group2).getByRole('button', { name: /up/i }),
            up3Btn = within(group3).getByRole('button', { name: /up/i });

        expect(up1Btn).toHaveAttribute('aria-disabled', 'true');
        expect(up1Btn).toHaveAccessibleName('Move Up (disabled)');

        expect(up2Btn).toBeEnabled();
        expect(up2Btn).not.toHaveAccessibleName(/disabled/i);

        expect(up3Btn).toBeEnabled();
        expect(up3Btn).not.toHaveAccessibleName(/disabled/i);

        await user.click(up1Btn);
        expect(onChange).not.toHaveBeenCalled();
      });

      it('disables the Move Down button on the last selected item and adds "(disabled)" to its name', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            view = quickRender({ onChange, allItems, selectedItems: [1, 2, 3] }),
            group1 = view.getByRole('group', { name: 'One' }),
            group2 = view.getByRole('group', { name: 'Two' }),
            group3 = view.getByRole('group', { name: 'Three' });

        await runTimers();
        const down1Btn = within(group1).getByRole('button', { name: /down/i }),
            down2Btn = within(group2).getByRole('button', { name: /down/i }),
            down3Btn = within(group3).getByRole('button', { name: /down/i });

        expect(down1Btn).toBeEnabled();
        expect(down1Btn).not.toHaveAccessibleName(/disabled/i);

        expect(down2Btn).toBeEnabled();
        expect(down2Btn).not.toHaveAccessibleName(/disabled/i);

        expect(down3Btn).toHaveAttribute('aria-disabled', 'true');
        expect(down3Btn).toHaveAccessibleName('Move Down (disabled)');

        await user.click(down3Btn);
        expect(onChange).not.toHaveBeenCalled();
      });

      it('adds tooltips to each reordering button matching its name', async function() {
        const user = userEvent.setup(),
            allItems = [
              { id: 1, displayName: 'One' },
              { id: 2, displayName: 'Two' },
              { id: 3, displayName: 'Theo' }
            ],
            view = quickRender({ allItems, selectedItems: [1, 2, 3] }),
            group1 = view.getByRole('group', { name: 'One' }),
            group2 = view.getByRole('group', { name: 'Two' }),
            group3 = view.getByRole('group', { name: 'Theo' });

        await runTimers();
        const [up1Btn, down1Btn] = within(group1).getAllByRole('button'),
            [up2Btn, down2Btn] = within(group2).getAllByRole('button'),
            [up3Btn, down3Btn] = within(group3).getAllByRole('button');

        await runTimers();

        await user.hover(up1Btn);
        await runTimers();
        expect(screen.getByRole('tooltip')).toHaveTextContent('Move Up (disabled)');

        await user.unhover(up1Btn);
        await runTimers();
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

        await user.hover(up2Btn);
        await runTimers();
        expect(screen.getByRole('tooltip')).toHaveTextContent('Move Up');

        await user.unhover(up2Btn);
        await runTimers();
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

        await user.hover(up3Btn);
        await runTimers();
        expect(screen.getByRole('tooltip')).toHaveTextContent('Move Up');

        await user.unhover(up3Btn);
        await runTimers();
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

        await user.hover(down1Btn);
        await runTimers();
        expect(screen.getByRole('tooltip')).toHaveTextContent('Move Down');

        await user.unhover(down1Btn);
        await runTimers();
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

        await user.hover(down2Btn);
        await runTimers();
        expect(screen.getByRole('tooltip')).toHaveTextContent('Move Down');

        await user.unhover(down2Btn);
        await runTimers();
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

        await user.hover(down3Btn);
        await runTimers();
        expect(screen.getByRole('tooltip')).toHaveTextContent('Move Down (disabled)');

        await user.unhover(down3Btn);
        await runTimers();
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
      }, 10000);

      it('fires onChange with the newly ordered array when Move Up is clicked', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            view = quickRender({ allItems, selectedItems: [1, 2, 3], onChange });
        await runTimers();
        expect(onChange).not.toHaveBeenCalled();

        let group3 = view.getByRole('group', { name: 'Three' });
        let up3Btn = within(group3).getByRole('button', { name: /up/i });
        await user.click(up3Btn);
        expect(onChange).toHaveBeenCalledWith([1, 3, 2]);

        view.rerender(<NxStatefulTransferList { ...minimalProps }
                                              { ...{ allItems, onChange } }
                                              allowReordering={true}
                                              selectedItems={[1, 3, 2]} />);
        await runTimers();
        await user.unhover(up3Btn);
        group3 = view.getByRole('group', { name: 'Three' });
        up3Btn = within(group3).getByRole('button', { name: /up/i });
        await user.click(up3Btn);
        expect(onChange).toHaveBeenCalledWith([3, 1, 2]);

        view.rerender(<NxStatefulTransferList { ...minimalProps }
                                              { ...{ allItems, onChange } }
                                              allowReordering={true}
                                              selectedItems={[3, 1, 2]} />);
        await runTimers();
        await user.unhover(up3Btn);
        const group1 = view.getByRole('group', { name: 'One' });
        const up1Btn = within(group1).getByRole('button', { name: /up/i });
        await user.click(up1Btn);
        expect(onChange).toHaveBeenCalledWith([1, 3, 2]);

        view.rerender(<NxStatefulTransferList { ...minimalProps }
                                              { ...{ allItems, onChange } }
                                              allowReordering={true}
                                              selectedItems={[1, 3, 2]} />);
        await runTimers();
        await user.unhover(up1Btn);
        const group2 = view.getByRole('group', { name: 'Two' });
        const up2Btn = within(group2).getByRole('button', { name: /up/i });
        await user.click(up2Btn);
        expect(onChange).toHaveBeenCalledWith([1, 2, 3]);
      });

      it('fires onChange with the newly ordered array when Move Down is clicked', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            view = quickRender({ allItems, selectedItems: [1, 2, 3], onChange });
        await runTimers();
        expect(onChange).not.toHaveBeenCalled();

        let group1 = view.getByRole('group', { name: 'One' });
        let down1Btn = within(group1).getByRole('button', { name: /down/i });
        await user.click(down1Btn);
        expect(onChange).toHaveBeenCalledWith([2, 1, 3]);

        view.rerender(<NxStatefulTransferList { ...minimalProps }
                                              { ...{ allItems, onChange } }
                                              allowReordering={true}
                                              selectedItems={[2, 1, 3]} />);
        await runTimers();
        await user.unhover(down1Btn);
        group1 = view.getByRole('group', { name: 'One' });
        down1Btn = within(group1).getByRole('button', { name: /down/i });
        await user.click(down1Btn);
        expect(onChange).toHaveBeenCalledWith([2, 3, 1]);

        view.rerender(<NxStatefulTransferList { ...minimalProps }
                                              { ...{ allItems, onChange } }
                                              allowReordering={true}
                                              selectedItems={[2, 3, 1]} />);
        await runTimers();
        await user.unhover(down1Btn);
        const group3 = view.getByRole('group', { name: 'Three' });
        const down3Btn = within(group3).getByRole('button', { name: /down/i });
        await user.click(down3Btn);
        expect(onChange).toHaveBeenCalledWith([2, 1, 3]);

        view.rerender(<NxStatefulTransferList { ...minimalProps }
                                              { ...{ allItems, onChange } }
                                              allowReordering={true}
                                              selectedItems={[2, 1, 3]} />);
        await runTimers();
        await user.unhover(down3Btn);
        const group2 = view.getByRole('group', { name: 'Two' });
        const down2Btn = within(group2).getByRole('button', { name: /down/i });
        await user.click(down2Btn);
        expect(onChange).toHaveBeenCalledWith([1, 2, 3]);
      });

      it('fires onChange with an empty array when Remove All is clicked', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            view = quickRender({ allItems, selectedItems: [1, 2], showMoveAll: true, onChange }),
            removeAllBtn = view.getByRole('button', { name: 'Remove All' });

        await user.click(removeAllBtn);

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith([]);
      });

      it('fires onChange with an array of all ids when Transfer All is clicked, with newly selected ids ' +
          'added to the end of the array', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            view = quickRender({ allItems, selectedItems: [2], showMoveAll: true, onChange }),
            transferAllBtn = view.getByRole('button', { name: 'Transfer All' });

        await user.click(transferAllBtn);

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith([2, 1, 3]);
      });

      it('fires onChange without the checkbox\'s corresponding id when a selected checkbox is clicked',
          async function() {
            const user = userEvent.setup(),
                onChange = jest.fn(),
                view = quickRender({ allItems, selectedItems: [1, 3, 2], showMoveAll: true, onChange }),
                checkbox3 = view.getByRole('checkbox', { name: 'Three' });

            await user.click(checkbox3);

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith([1, 2]);
          }
      );

      it('fires onChange with the checkbox\'s corresponding id added to the end of the list when an unselected ' +
          'checkbox is clicked', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            view = quickRender({ allItems, selectedItems: [3, 2], showMoveAll: true, onChange }),
            checkbox1 = view.getByRole('checkbox', { name: 'One' });

        await user.click(checkbox1);

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith([3, 2, 1]);
      });

      it('disables all reordering buttons when the selected items filter is non-empty', async function() {
        const user = userEvent.setup(),
            allItems = [
              { id: 1, displayName: 'One' },
              { id: 2, displayName: 'Two' },
              { id: 3, displayName: 'Theo' }
            ],
            onChange = jest.fn(),
            view = quickRender({ onChange, allItems, selectedItems: [1, 2, 3] }),
            selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
            selectedFilter = within(selectedGroup).getByRole('textbox', { name: 'Filter' });

        await user.type(selectedFilter, 'o');

        await runTimers();

        // these button don't have an a11y name when they are disabled this way
        const orderingBtns = within(selectedGroup).getAllByRole('button', { name: '' }),
            clearFilterBtn = within(selectedGroup).getByRole('button', { name: 'Clear filter' });

        expect(orderingBtns).toHaveLength(6);
        for (const btn of orderingBtns) {
          expect(btn).toHaveAttribute('aria-disabled', 'true');
          await user.click(btn);
        }

        await user.click(clearFilterBtn);
        expect(onChange).not.toHaveBeenCalled();

        // first and last buttons should still be disabled as always but others should now be enabled
        expect(orderingBtns[0]).toHaveAttribute('aria-disabled', 'true');
        expect(orderingBtns[1]).not.toHaveAttribute('aria-disabled', 'true');
        expect(orderingBtns[2]).not.toHaveAttribute('aria-disabled', 'true');
        expect(orderingBtns[3]).not.toHaveAttribute('aria-disabled', 'true');
        expect(orderingBtns[4]).not.toHaveAttribute('aria-disabled', 'true');
        expect(orderingBtns[5]).toHaveAttribute('aria-disabled', 'true');

        await user.click(orderingBtns[1]);

        expect(onChange).toHaveBeenCalled();
      });

      it('adds a "Reordering is disabled with filtered" tooltip on the buttons when selectedItemsFilters is ' +
          'a non-empty string', async function() {
        const user = userEvent.setup(),
            allItems = [
              { id: 1, displayName: 'One' },
              { id: 2, displayName: 'Two' },
              { id: 3, displayName: 'Theo' }
            ],
            view = quickRender({ allItems, selectedItems: [1, 2, 3] }),
            selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
            selectedFilterInput = within(selectedGroup).getByRole('textbox', { name: 'Filter' }),
            group1 = view.getByRole('group', { name: 'One' }),
            group2 = view.getByRole('group', { name: 'Two' }),
            group3 = view.getByRole('group', { name: 'Theo' });

        await user.type(selectedFilterInput, 'o');

        await runTimers();
        const [up1Btn, down1Btn] = within(group1).getAllByRole('button'),
            [up2Btn, down2Btn] = within(group2).getAllByRole('button'),
            [up3Btn, down3Btn] = within(group3).getAllByRole('button');

        await runTimers();

        await user.hover(up1Btn);
        await runTimers();
        expect(screen.getByRole('tooltip')).toHaveTextContent('Reordering is disabled when filtered');

        await user.unhover(up1Btn);
        await runTimers();
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

        await user.hover(up2Btn);
        await runTimers();
        expect(screen.getByRole('tooltip')).toHaveTextContent('Reordering is disabled when filtered');

        await user.unhover(up2Btn);
        await runTimers();
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

        await user.hover(up3Btn);
        await runTimers();
        expect(screen.getByRole('tooltip')).toHaveTextContent('Reordering is disabled when filtered');

        await user.unhover(up3Btn);
        await runTimers();
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

        await user.hover(down1Btn);
        await runTimers();
        expect(screen.getByRole('tooltip')).toHaveTextContent('Reordering is disabled when filtered');

        await user.unhover(down1Btn);
        await runTimers();
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

        await user.hover(down2Btn);
        await runTimers();
        expect(screen.getByRole('tooltip')).toHaveTextContent('Reordering is disabled when filtered');

        await user.unhover(down2Btn);
        await runTimers();
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

        await user.hover(down3Btn);
        await runTimers();
        expect(screen.getByRole('tooltip')).toHaveTextContent('Reordering is disabled when filtered');

        await user.unhover(down3Btn);
        await runTimers();
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
      }, 10000);
    });
  });

  describe('exceptions', function() {
    beforeEach(function() {
      jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    it('throws a TypeError if selectedItems is a Set when allowReordering is true', function() {
      expect(() => quickRender({ allowReordering: true, selectedItems: new Set() } as any)).toThrow(TypeError);
    });
  });
});
