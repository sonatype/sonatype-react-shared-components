/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { rtlRender, rtlRenderElement, runTimers, userEvent } from '../../../../__testutils__/rtlUtils';
import { createEvent, fireEvent, screen, within } from '@testing-library/react';

import NxCollapsibleMultiSelect, { Props } from '../NxCollapsibleMultiSelect';
import { NxTreeViewMultiSelect } from '../../../../index';

describe('NxCollapsibleMultiSelect', function() {
  const minimalProps: Props = {
        options: [
          {id: 'foo', name: 'Foo'},
          {id: 'bar', name: 'Bar'},
          {id: null, name: 'Null'} // Ensure that `null` ids are valid
        ],
        children: 'Foobar',
        name: 'foobar',
        onChange: () => {}
      },
      quickRender = rtlRender(NxCollapsibleMultiSelect, minimalProps),
      renderEl = rtlRenderElement(NxCollapsibleMultiSelect, minimalProps);

  it('is aliased as NxTreeViewMultiSelect', function() {
    expect(NxCollapsibleMultiSelect).toBe(NxTreeViewMultiSelect);
  });

  it('renders a top-level element with a group role', function() {
    const view = quickRender();

    expect(view.getByRole('group')).toBe(view.container.firstChild);
  });

  it('sets the specified id', function() {
    expect(renderEl({ id: 'foo' })).toHaveAttribute('id', 'foo');
  });

  describe('exceptions', function() {
    beforeEach(function() {
      // prevent RTL logging thrown exceptions
      jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    it('throws an error if a selectedId is supplied that is not part of the options', function() {
      const expectedErr = 'You are attempting to select "ufo", but it is not part of the available options';

      expect(() => quickRender({ selectedIds: new Set() })).not.toThrow();
      expect(() => {
        quickRender({ selectedIds: new Set(['ufo']) });
      }).toThrow(expectedErr);
    });
  });

  describe('trigger', function() {
    const renderAndGetTrigger = (props?: Partial<Props>) => quickRender(props).getByRole('button');

    it('is a button', function() {
      expect(renderAndGetTrigger()).toBeInTheDocument();
    });

    it('has type="button"', function() {
      expect(renderAndGetTrigger()).toHaveAttribute('type', 'button');
    });

    it('references the children items with menu role using aria-controls', function() {
      const view = quickRender(),
          trigger = view.getByRole('button'),
          childrenElId = trigger.getAttribute('aria-controls')!;

      expect(childrenElId).toBeDefined();

      const childrenEl = document.getElementById(childrenElId);

      expect(childrenEl).toBeInTheDocument;
      expect(childrenEl).toHaveAttribute('role', 'menu');
      expect(trigger).toHaveAttribute('aria-controls', childrenElId);
    });

    it('sets aria-expanded iff isOpen prop is true and there are options', function() {
      expect(renderAndGetTrigger()).toHaveAttribute('aria-expanded', 'false');
      expect(renderAndGetTrigger({ options: [] })).toHaveAttribute('aria-expanded', 'false');
      expect(renderAndGetTrigger({ isOpen: true })).toHaveAttribute('aria-expanded', 'true');
    });

    it('sets disabled if the disabled prop is true or there are no options', function() {
      expect(renderAndGetTrigger()).toBeEnabled();
      expect(renderAndGetTrigger({ disabled: true })).toBeDisabled();
      expect(renderAndGetTrigger({ disabled: null })).toBeEnabled();
      expect(renderAndGetTrigger({ disabled: undefined })).toBeEnabled();

      expect(renderAndGetTrigger({ options: [] })).toBeDisabled();
      expect(renderAndGetTrigger({ options: [], disabled: true })).toBeDisabled();
      expect(renderAndGetTrigger({ options: [], disabled: null })).toBeDisabled();
      expect(renderAndGetTrigger({ options: [], disabled: undefined })).toBeDisabled();
    });

    it('fires the component\'s onToggleCollapse when clicked if there are options', async function() {
      const user = userEvent.setup(),
          onToggleCollapse = jest.fn(),
          optionsTrigger = renderAndGetTrigger({
            onToggleCollapse
          }),
          noOptionsTrigger = renderAndGetTrigger({
            onToggleCollapse,
            options: []
          });

      expect(onToggleCollapse).not.toHaveBeenCalled();

      await user.click(noOptionsTrigger);
      expect(onToggleCollapse).not.toHaveBeenCalled();

      await user.click(optionsTrigger);
      expect(onToggleCollapse).toHaveBeenCalled();
    });

    describe('tooltip', function() {
      describe('when component is disabled due to no options', function() {
        it('has a default text constructed with the name prop', async function() {
          const trigger = renderAndGetTrigger({ options: [] });

          await runTimers();
          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

          fireEvent.mouseOver(trigger);
          await runTimers();

          const tooltip = screen.getByRole('tooltip');

          expect(tooltip).toHaveTextContent('There are no foobar options');
        });

        it('has a customized text as specified by disabledTooltip prop', async function() {
          const trigger = renderAndGetTrigger({
            options: [],
            disabledTooltip: 'No options'
          });

          await runTimers();
          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

          fireEvent.mouseOver(trigger);
          await runTimers();

          const tooltip = screen.getByRole('tooltip');

          expect(tooltip).toHaveTextContent('No options');
        });

        it('has specified classname when tooltipModifierClass prop is provided', async function() {
          const trigger = renderAndGetTrigger({
            options: [],
            tooltipModifierClass: 'tooltipClass'
          });

          await runTimers();
          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

          fireEvent.mouseOver(trigger);
          await runTimers();

          const tooltip = screen.getByRole('tooltip');

          expect(tooltip).toHaveTextContent('There are no foobar options');
          expect(tooltip.querySelector('.tooltipClass')).toBeInTheDocument();
        });
      });

      describe('when component is disabled explicitly', function() {
        it('has a customized text as specified by disabledTooltip prop', async function() {
          const trigger = renderAndGetTrigger({
            disabled: true,
            disabledTooltip: 'No options'
          });

          await runTimers();
          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

          fireEvent.mouseOver(trigger);
          await runTimers();

          const tooltip = screen.getByRole('tooltip');

          expect(tooltip).toHaveTextContent('No options');
        });

        it('has specified classname when tooltipModifierClass prop is provided', async function() {
          const trigger = renderAndGetTrigger({
            disabled: true,
            disabledTooltip: 'No options',
            tooltipModifierClass: 'tooltipClass'
          });

          await runTimers();
          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

          fireEvent.mouseOver(trigger);
          await runTimers();

          const tooltip = screen.getByRole('tooltip');

          expect(tooltip).toHaveTextContent('No options');
          expect(tooltip.querySelector('.tooltipClass')).toBeInTheDocument();
        });

        it('does not show when disabledTooltip prop is not provided', async function() {
          const trigger = renderAndGetTrigger({ disabled: true });

          await runTimers();
          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

          fireEvent.mouseOver(trigger);
          await runTimers();

          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
        });
      });
    });
  });

  describe('filter', function() {
    let onFilterChange: jest.Mock,
        filterView: Function;

    beforeEach(() => {
      onFilterChange = jest.fn();
      filterView = (props?: Partial<Props>) => quickRender({
        ...props,
        filterThreshold: 2,
        onFilterChange
      });
    });

    it('renders an input with type="text" iff when the number of options ' +
    'is greater than filterThreshold and onFilterChange is supplied', function() {
      const noFilterView = quickRender({ onFilterChange: jest.fn() });

      expect(quickRender().queryByRole('textbox')).not.toBeInTheDocument();
      expect(noFilterView.queryByRole('textbox')).not.toBeInTheDocument();
      expect(filterView().getByRole('textbox')).toHaveAttribute('type', 'text');
    });

    it('sets the filter input placeholder as specified by filterPlaceholder, ' +
      'default is "filter"', function() {
      const viewWithPlaceholder = filterView({ filterPlaceholder: 'filter cats' });

      expect(filterView().getByRole('textbox')).toHaveAttribute('placeholder', 'filter');
      expect(viewWithPlaceholder.getByRole('textbox')).toHaveAttribute('placeholder', 'filter cats');
    });

    it('renders a button with an accessible name of "Clear filter"', async function() {
      const view = filterView();

      await runTimers();
      const clearBtn = view.getByRole('button', { name: 'Clear filter' });

      expect(clearBtn).toBeInTheDocument();
      expect(clearBtn).toHaveAccessibleName('Clear filter');
    });

    it('clears the input when the clear button is clicked', async function() {
      const user = userEvent.setup(),
          view = filterView();

      await runTimers();

      const clearBtn = view.getByRole('button', { name: 'Clear filter' });

      await user.click(clearBtn);
      expect(onFilterChange).toBeCalledWith('');
      expect(onFilterChange).toBeCalledTimes(1);
    });

    it('clears the input when Escape key is pressed', async function() {
      const user = userEvent.setup(),
          view = filterView(),
          inputEl = view.getByRole('textbox');

      inputEl.focus();
      await user.keyboard('[Escape]');

      expect(onFilterChange).toBeCalledWith('');
      expect(onFilterChange).toBeCalledTimes(1);
    });

    it('calls preventDefault on the event when Escape key is pressed and the value is not empty', function() {
      const inputEl = filterView({ filter: 'f' }).getByRole('textbox'),
          keyEvent = createEvent.keyDown(inputEl, { key: 'Escape' });

      inputEl.focus();
      fireEvent(inputEl, keyEvent);

      expect(keyEvent.defaultPrevented).toBe(true);
    });

    it('does not call preventDefault on the event when Escape key is pressed and the value is empty', () => {
      const inputEl = filterView().getByRole('textbox'),
          keyEvent = createEvent.keyDown(inputEl, { key: 'Escape' });

      inputEl.focus();
      fireEvent(inputEl, keyEvent);

      expect(keyEvent.defaultPrevented).toBe(false);
    });
  });

  describe('collapsible items', function () {
    it('renders an element with menu role containing the options with menuitemcheckbox role', function() {
      const view = quickRender(),
          childrenEl = view.getByRole('menu'),
          childEl = within(childrenEl).getAllByRole('menuitemcheckbox');

      expect(childrenEl).toBeInTheDocument();
      expect(childEl).toHaveLength(4); // includes the toggle all option
    });

    describe('options', function() {
      it('has labeled text as specified in name of the option', function () {
        const view = quickRender(),
            options = view.getAllByRole('menuitemcheckbox');

        expect(options).toHaveLength(4);
        expect(options[0]).toHaveAccessibleName('all/none');
        expect(options[1]).toHaveAccessibleName('Foo');
        expect(options[2]).toHaveAccessibleName('Bar');
        expect(options[3]).toHaveAccessibleName('Null');
      });

      it('renders checked option when selected', function () {
        const view = quickRender({
              selectedIds: new Set(['foo'])
            }),
            options = view.getAllByRole('menuitemcheckbox');

        expect(options[0]).not.toBeChecked();
        expect(options[1]).toBeChecked();
        expect(options[2]).not.toBeChecked();
        expect(options[3]).not.toBeChecked();
      });

      it('renders all unchecked options if selectedIds is not provided', function () {
        const view = quickRender(),
            options = view.getAllByRole('menuitemcheckbox');

        expect(options[0]).not.toBeChecked();
        expect(options[1]).not.toBeChecked();
        expect(options[2]).not.toBeChecked();
        expect(options[3]).not.toBeChecked();
      });

      it('calls component\'s onChange callback when an option is toggled', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            view = quickRender({ onChange }),
            options = view.getAllByRole('menuitemcheckbox');

        expect(onChange).not.toHaveBeenCalled();

        await user.click(options[1]);

        expect(onChange).toHaveBeenCalledWith(new Set(['foo']), 'foo');

        await user.click(options[2]);

        expect(onChange).toHaveBeenCalledWith(new Set(['bar']), 'bar');

        await user.click(options[1]);

        expect(onChange).toHaveBeenCalledWith(new Set(['foo']), 'foo');
      });

      describe('tooltip', function() {
        it('sets customized text if optionTooltipGenerator is defined', async function() {
          const user = userEvent.setup(),
              optionTooltipGenerator = jest.fn().mockReturnValue('customized-tooltip'),
              view = quickRender({ optionTooltipGenerator }),
              options = view.getAllByRole('menuitemcheckbox');

          await runTimers();
          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

          await user.hover(options[1]);
          await runTimers();

          const tooltip = screen.getByRole('tooltip');

          expect(tooltip).toHaveTextContent('customized-tooltip');
        });

        it('has specified classname when tooltipModifierClass prop is provided', async function() {
          const user = userEvent.setup(),
              optionTooltipGenerator = jest.fn().mockReturnValue('customized-tooltip'),
              view = quickRender({
                optionTooltipGenerator,
                tooltipModifierClass: 'tooltipClass'
              }),
              options = view.getAllByRole('menuitemcheckbox');

          await runTimers();
          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

          await user.hover(options[1]);
          await runTimers();

          const tooltip = screen.getByRole('tooltip');

          expect(tooltip).toHaveTextContent('customized-tooltip');
          expect(tooltip.querySelector('.tooltipClass')).toBeInTheDocument();
        });
      });
    });

    describe('toggle all option', function () {
      it('renders unchecked toggle all option if not all options are selected', function () {
        const view = quickRender({
              selectedIds: new Set(['foo', null])
            }),
            toggleAllOption = view.getByRole('menuitemcheckbox', { name: 'all/none' });

        expect(toggleAllOption).not.toBeChecked();
      });

      it('renders checked toggle all option if all options are selected', function () {
        const view = quickRender({
              selectedIds: new Set(['foo', 'bar', null])
            }),
            toggleAllOption = view.getByRole('menuitemcheckbox', { name: 'all/none' });

        expect(toggleAllOption).toBeChecked();
      });

      it('selects all options when no options are selected', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            view = quickRender({
              onChange
            }),
            toggleAllOption = view.getByRole('menuitemcheckbox', { name: 'all/none' });

        expect(onChange).not.toHaveBeenCalled();

        await user.click(toggleAllOption);

        expect(onChange).toHaveBeenCalledWith(new Set(['foo', 'bar', null]));
      });

      it('selects all options when not all options are selected', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            view = quickRender({
              onChange,
              selectedIds: new Set(['foo'])
            }),
            toggleAllOption = view.getByRole('menuitemcheckbox', { name: 'all/none' });

        expect(onChange).not.toHaveBeenCalled();

        await user.click(toggleAllOption);

        expect(onChange).toHaveBeenCalledWith(new Set(['foo', 'bar', null]));
      });

      it('un-selects all options when all options are selected', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            view = quickRender({
              onChange,
              selectedIds: new Set(['foo', 'bar', null])
            }),
            toggleAllOption = view.getByRole('menuitemcheckbox', { name: 'all/none' });

        expect(onChange).not.toHaveBeenCalled();

        await user.click(toggleAllOption);

        expect(onChange).toHaveBeenCalledWith(new Set([]));
      });

      describe('when options are filtered', function () {
        it('renders unchecked toggle all option if not all filtered options are selected', function () {
          const view = quickRender({
                filteredOptions: [
                  {id: 'foo', name: 'Foo'},
                  {id: 'bar', name: 'Bar'}
                ]
              }),
              toggleAllOption = view.getByRole('menuitemcheckbox', { name: 'all/none' });

          expect(toggleAllOption).not.toBeChecked();
        });

        it('renders checked toggle all option if all filtered options are selected', function () {
          const view = quickRender({
                filteredOptions: [
                  {id: 'foo', name: 'Foo'},
                  {id: 'bar', name: 'Bar'},
                  {id: null, name: 'Null'}
                ],
                selectedIds: new Set(['foo', 'bar', null])
              }),
              toggleAllOption = view.getByRole('menuitemcheckbox', { name: 'all/none' });

          expect(toggleAllOption).toBeChecked();
        });

        it('renders nothing if no options are displayed due to filter', function () {
          const view = quickRender({
            filteredOptions: []
          });

          expect(view.queryAllByRole('menuitemcheckbox')).toHaveLength(0);
        });

        it('selects all filtered options in addition to already selected options', async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),
              view = quickRender({
                onChange,
                selectedIds: new Set(['foo']),
                filteredOptions: [
                  {id: 'bar', name: 'Bar'}
                ]
              }),
              toggleAllOption = view.getByRole('menuitemcheckbox', { name: 'all/none' });

          expect(onChange).not.toHaveBeenCalled();

          await user.click(toggleAllOption);

          expect(onChange).toHaveBeenCalledWith(new Set(['foo', 'bar']));
        });

        it('unselected only filtered options', async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),
              view = quickRender({
                onChange,
                selectedIds: new Set(['foo', 'bar', null]),
                filteredOptions: [
                  {id: 'bar', name: 'Bar'}
                ]
              }),
              toggleAllOption = view.getByRole('menuitemcheckbox', { name: 'all/none' });

          expect(onChange).not.toHaveBeenCalled();

          await user.click(toggleAllOption);

          expect(onChange).toHaveBeenCalledWith(new Set(['foo', null]));
        });
      });
    });
  });
});
