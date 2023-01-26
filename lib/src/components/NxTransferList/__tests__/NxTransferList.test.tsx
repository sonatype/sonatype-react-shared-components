/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { render, within } from '@testing-library/react';

import { rtlRender, rtlRenderElement, userEvent } from '../../../__testutils__/rtlUtils';
import NxTransferList, { Props } from '../NxTransferList';

describe('NxTransferList', function() {
  const minimalProps = {
        allItems: [],
        selectedItems: new Set<number>(),
        availableItemsFilter: '',
        selectedItemsFilter: '',
        onAvailableItemsFilterChange: () => {},
        onSelectedItemsFilterChange: () => {},
        onChange: () => {}
      },
      // some items used in tests though not in minimalProps
      allItems = [
        { id: 1, displayName: 'One' },
        { id: 2, displayName: 'Two' },
        { id: 3, displayName: 'Three' }
      ],
      quickRender = rtlRender<Props<number>>(NxTransferList, minimalProps),
      renderEl = rtlRenderElement<Props<number>>(NxTransferList, minimalProps);

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
      expect(checkboxes[0]).toHaveLabel('One');
      expect(checkboxes[1]).toHaveAccessibleName('Two');
      expect(checkboxes[1]).toHaveLabel('Two');
      expect(checkboxes[2]).toHaveAccessibleName('Three');
      expect(checkboxes[2]).toHaveLabel('Three');
    });

    it('renders the checkboxes for items not present in selectedItems unchecked and in the "Available Items" group',
        function() {
          const view = quickRender({ allItems, selectedItems: new Set([2, 3]) }),
              availableGroup = view.getByRole('group', { name: 'Available Items' }),
              checkboxOne = view.getByRole('checkbox', { name: 'One' }),
              checkboxTwo = view.getByRole('checkbox', { name: 'Two' }),
              checkboxThree = view.getByRole('checkbox', { name: 'Three' });

          expect(availableGroup).not.toContainElement(checkboxOne);
          expect(availableGroup).toContainElement(checkboxTwo);
          expect(availableGroup).toContainElement(checkboxThree);

          expect(checkboxTwo).not.toBeChecked();
          expect(checkboxThree).not.toBeChecked();
        }
    );

    it('renders the checkboxes for items present in selectedItems checked and in the "Transferred Items" group',
        function() {
          const view = quickRender({ allItems, selectedItems: new Set([2, 3]) }),
              selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
              checkboxOne = view.getByRole('checkbox', { name: 'One' }),
              checkboxTwo = view.getByRole('checkbox', { name: 'Two' }),
              checkboxThree = view.getByRole('checkbox', { name: 'Three' });

          expect(selectedGroup).toContainElement(checkboxOne);
          expect(selectedGroup).not.toContainElement(checkboxTwo);
          expect(selectedGroup).not.toContainElement(checkboxThree);

          expect(checkboxOne).toBeChecked();
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

    it('fires onChange with the checkbox\'s corresponding id added to the end of the list when a selected ' +
        'checkbox is clicked', async function() {
      const user = userEvent.setup(),
          onChange = jest.fn(),
          view = quickRender({ allItems, selectedItems: new Set([3, 2]), showMoveAll: true, onChange }),
          checkbox1 = view.getByRole('checkbox', { name: 'One' });

      await user.click(checkbox1);

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(new Set([3, 2, 1]));
    });
  });

  describe('count texts', function() {
    it('renders text within the Available Items group indicating how many items are available', function() {
      expect(
          quickRender({ allItems }).getByRole('group', { name: 'Available Items' })
      ).toHaveTextContent('3 items available');
      expect(
          quickRender({ allItems, selectedItems: new Set([1]) }).getByRole('group', { name: 'Available Items' })
      ).toHaveTextContent('2 items available');
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
      ).toHaveTextContent('1 items transferred');
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
      const quickRender = rtlRender<Props<number>>(NxTransferList, { ...minimalProps, showMoveAll: true });

      describe('Transfer All button', function() {
        it('is rendered within the "Availble Items" group', function() {
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

        it('fires onChange with all item ids except those filtered out from the available options using ' +
            'availableItemsFilter and optionally filterFn', function() {
          // TODO
        });
      });

      describe('Remove All button', function() {
        it('is rendered within the "Availble Items" group', function() {
          const view = quickRender(),
              availableItems = view.getByRole('group', { name: 'Available Items' }),
              transferAllBtn = view.getByRole('button', { name: 'Remove All' });

          expect(transferAllBtn).toBeInTheDocument();
          expect(availableItems).toContainElement(transferAllBtn);
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

        it('fires onChange with only item ids filtered out from the available options using ' +
            'selectedItemsFilter and optionally filterFn', function() {
          // TODO
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

    describe('availableItemsFilter', function() {
      it('filters the visible list of checkboxes in the Available Items group by case-insensitive substring match',
          function() {
            const view = quickRender({ allItems, selectedItems: new Set([3]), availableItemsFilter: 'N'}),
                availableGroup = view.getByRole('group', { name: 'Available Items' }),
                selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
                availableCheckboxes = within(availableGroup).getAllByRole('checkbox'),
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
          function() {
            // TODO
          }
      );

      it('is the value of the Available Items filter textbox', function() {
        const view = quickRender({ allItems, availableItemsFilter: 'N'}),
            availableGroup = view.getByRole('group', { name: 'Available Items' }),
            selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
            availableFilter = within(availableGroup).getByRole('textbox', { name: 'Filter' }),
            selectedFilter = within(selectedGroup).getByRole('textbox', { name: 'Filter' });

        expect(availableFilter).toHaveValue('N');
        expect(selectedFilter).toHaveValue('');
      });
    });

    describe('selectedItemsFilter', function() {
      it('filters the visible list of checkboxes in the Transferred Items group by case-insensitive substring match',
          function() {
            const view = quickRender({ allItems, selectedItems: new Set([2, 3]), selectedItemsFilter: 'W' }),
                availableGroup = view.getByRole('group', { name: 'Available Items' }),
                selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
                availableCheckboxes = within(availableGroup).getAllByRole('checkbox'),
                selectedCheckboxes = within(selectedGroup).getAllByRole('checkbox');

            // One should not be filtered out because it's in the other column
            expect(availableCheckboxes).toHaveLength(1);
            expect(availableCheckboxes[0]).toHaveAccessibleName('One');

            // Three should be filtered out
            expect(selectedCheckboxes).toHaveLength(1);
            expect(selectedCheckboxes[0]).toHaveAccessibleName('Two');
          }
      );

      it('filters the visible list of checkboxes in the Transferred Items group by the filterFn if specified',
          function() {
            // TODO
          }
      );

      it('is the value of the Transferred Items filter textbox', function() {
        const view = quickRender({ allItems, availableItemsFilter: 'N' }),
            availableGroup = view.getByRole('group', { name: 'Available Items' }),
            selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
            availableFilter = within(availableGroup).getByRole('textbox', { name: 'Filter' }),
            selectedFilter = within(selectedGroup).getByRole('textbox', { name: 'Filter' });

        expect(availableFilter).toHaveValue('');
        expect(selectedFilter).toHaveValue('N');
      });
    });

    it('fires onAvailableItemsFilterChange with the new text value and event when the user types into the ' +
        'available items filter', async function() {
      const user = userEvent.setup(),
          onAvailableItemsFilterChange = jest.fn().mockImplementation(evt => evt.persist()),
          onSelectedItemsFilterChange = jest.fn(),
          view = quickRender({ onAvailableItemsFilterChange, onSelectedItemsFilterChange }),
          availableGroup = view.getByRole('group', { name: 'Available Items' }),
          availableFilter = within(availableGroup).getByRole('textbox', { name: 'Filter' });

      expect(onAvailableItemsFilterChange).not.toHaveBeenCalled();
      expect(onSelectedItemsFilterChange).not.toHaveBeenCalled();

      await user.type(availableFilter, 'asdf');

      expect(onAvailableItemsFilterChange)
          .toHaveBeenCalledWith('asdf', expect.objectContaining({ target: availableFilter }));

      expect(onSelectedItemsFilterChange).not.toHaveBeenCalled();
    });

    it('fires onSelectedItemsFilterChange with the new text value and event when the user types into the ' +
        'available items filter', async function() {
      const user = userEvent.setup(),
          onAvailableItemsFilterChange = jest.fn(),
          onSelectedItemsFilterChange = jest.fn().mockImplementation(evt => evt.persist()),
          view = quickRender({ onAvailableItemsFilterChange, onSelectedItemsFilterChange }),
          selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
          selectedFilter = within(selectedGroup).getByRole('textbox', { name: 'Filter' });

      expect(onAvailableItemsFilterChange).not.toHaveBeenCalled();
      expect(onSelectedItemsFilterChange).not.toHaveBeenCalled();

      await user.type(selectedFilter, 'asdf');

      expect(onSelectedItemsFilterChange)
          .toHaveBeenCalledWith('asdf', expect.objectContaining({ target: selectedFilter }));

      expect(onSelectedItemsFilterChange).not.toHaveBeenCalled();
    });
  });

  describe('allowReordering', function() {
    describe('when not true', function() {
      it('does not render "Move Up" or "Move Down" buttons', function() {
        const view = quickRender({ allItems, selectedItems: new Set([1]) }),
            moveButtons = view.getAllByRole('button', { name: /move/i });

        expect(moveButtons).toBeEmpty();
      });
    });

    describe('when true', function() {
      const quickRender = rtlRender<Props<number>>(NxTransferList, {
        ...minimalProps,
        selectedItems: [],
        allowReordering: true
      });

      it('requires selectedItems to be an array', function() {
        const view = quickRender({ allItems, selectedItems: [2, 3] }),
            selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
            checkboxOne = view.getByRole('checkbox', { name: 'One' }),
            checkboxTwo = view.getByRole('checkbox', { name: 'Two' }),
            checkboxThree = view.getByRole('checkbox', { name: 'Three' });

        expect(selectedGroup).toContainElement(checkboxOne);
        expect(selectedGroup).not.toContainElement(checkboxTwo);
        expect(selectedGroup).not.toContainElement(checkboxThree);

        expect(checkboxOne).toBeChecked();
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
          function() {
            const view = quickRender({ allItems, selectedItems: [1, 2, 3] }),
                selectedGroup = view.getByRole('group', { name: 'Transferred Items' }),
                itemGroups = within(selectedGroup).getAllByRole('group');

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

      it('does not render Move Up or Move Down buttons for available items', function() {
        const view = quickRender({ allItems, selectedItems: [] }),
            availableGroup = view.getByRole('group', { name: 'Available Items' }),
            moveBtns = within(availableGroup).getAllByRole('button', { name: /^Move/i });

        expect(moveBtns).toHaveLength(0);
      });

      it('disables the Move Up button on the first selected item and adds "(disabled)" to its name', function() {
        const view = quickRender({ allItems, selectedItems: [1, 2, 3] }),
            group1 = view.getByRole('group', { name: 'One' }),
            group2 = view.getByRole('group', { name: 'Two' }),
            group3 = view.getByRole('group', { name: 'Three' }),
            up1Btn = within(group1).getByRole('button', { name: /up/i }),
            up2Btn = within(group2).getByRole('button', { name: /up/i }),
            up3Btn = within(group3).getByRole('button', { name: /up/i });

        expect(up1Btn).toBeDisabled();
        expect(up1Btn).toHaveAccessibleName('Move Up (disabled)');

        expect(up2Btn).toBeEnabled();
        expect(up2Btn).not.toHaveAccessibleName(/disabled/i);

        expect(up3Btn).toBeEnabled();
        expect(up3Btn).not.toHaveAccessibleName(/disabled/i);
      });

      it('disables the Move Down button on the last selected item and adds "(disabled)" to its name', function() {
        const view = quickRender({ allItems, selectedItems: [1, 2, 3] }),
            group1 = view.getByRole('group', { name: 'One' }),
            group2 = view.getByRole('group', { name: 'Two' }),
            group3 = view.getByRole('group', { name: 'Three' }),
            down1Btn = within(group1).getByRole('button', { name: /down/i }),
            down2Btn = within(group2).getByRole('button', { name: /down/i }),
            down3Btn = within(group3).getByRole('button', { name: /down/i });

        expect(down1Btn).toBeEnabled();
        expect(down1Btn).toHaveAccessibleName(/disabled/i);

        expect(down2Btn).toBeEnabled();
        expect(down2Btn).not.toHaveAccessibleName(/disabled/i);

        expect(down3Btn).toBeDisabled();
        expect(down3Btn).not.toHaveAccessibleName('Move Down (disabled)');
      });

      it('fires onChange with the newly ordered array when Move Up is clicked', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            view = quickRender({ allItems, selectedItems: [1, 2, 3], onChange }),
            group1 = view.getByRole('group', { name: 'One' }),
            group2 = view.getByRole('group', { name: 'Two' }),
            group3 = view.getByRole('group', { name: 'Three' }),
            up1Btn = within(group1).getByRole('button', { name: /up/i }),
            up2Btn = within(group2).getByRole('button', { name: /up/i }),
            up3Btn = within(group3).getByRole('button', { name: /up/i });

        expect(onChange).not.toHaveBeenCalled();

        await user.click(up3Btn);
        expect(onChange).toHaveBeenCalledWith([1, 3, 2]);

        view.rerender(<NxTransferList { ...minimalProps }
                                      { ...{ allItems, onChange } }
                                      allowReordering={true}
                                      selectedItems={[1, 3, 2]} />);
        await user.click(up3Btn);
        expect(onChange).toHaveBeenCalledWith([3, 1, 2]);

        view.rerender(<NxTransferList { ...minimalProps }
                                      { ...{ allItems, onChange } }
                                      allowReordering={true}
                                      selectedItems={[3, 1, 2]} />);
        await user.click(up1Btn);
        expect(onChange).toHaveBeenCalledWith([1, 3, 2]);

        view.rerender(<NxTransferList { ...minimalProps }
                                      { ...{ allItems, onChange } }
                                      allowReordering={true}
                                      selectedItems={[1, 3, 2]} />);
        await user.click(up2Btn);
        expect(onChange).toHaveBeenCalledWith([1, 2, 3]);
      });

      it('fires onChange with the newly ordered array when Move Down is clicked', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            view = quickRender({ allItems, selectedItems: [1, 2, 3], onChange }),
            group1 = view.getByRole('group', { name: 'One' }),
            group2 = view.getByRole('group', { name: 'Two' }),
            group3 = view.getByRole('group', { name: 'Three' }),
            down1Btn = within(group1).getByRole('button', { name: /down/i }),
            down2Btn = within(group2).getByRole('button', { name: /down/i }),
            down3Btn = within(group3).getByRole('button', { name: /down/i });

        expect(onChange).not.toHaveBeenCalled();

        await user.click(down1Btn);
        expect(onChange).toHaveBeenCalledWith([2, 1, 3]);

        view.rerender(<NxTransferList { ...minimalProps }
                                      { ...{ allItems, onChange } }
                                      allowReordering={true}
                                      selectedItems={[2, 3, 1]} />);
        await user.click(down1Btn);
        expect(onChange).toHaveBeenCalledWith([2, 3, 1]);

        view.rerender(<NxTransferList { ...minimalProps }
                                      { ...{ allItems, onChange } }
                                      allowReordering={true}
                                      selectedItems={[3, 1, 2]} />);
        await user.click(down3Btn);
        expect(onChange).toHaveBeenCalledWith([2, 1, 3]);

        view.rerender(<NxTransferList { ...minimalProps }
                                      { ...{ allItems, onChange } }
                                      allowReordering={true}
                                      selectedItems={[1, 3, 2]} />);
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
            transferAllBtn = view.getByRole('button', { name: 'Remove All' });

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

      it('fires onChange with the checkbox\'s corresponding id added to the end of the list when a selected ' +
          'checkbox is clicked', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            view = quickRender({ allItems, selectedItems: [3, 2], showMoveAll: true, onChange }),
            checkbox1 = view.getByRole('checkbox', { name: 'One' });

        await user.click(checkbox1);

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith([3, 2, 1]);
      });

      it('disabled all reordering buttons if selectedItemsFilters is a non-empty string', function() {
          // TODO
      });
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
