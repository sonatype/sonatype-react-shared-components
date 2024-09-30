/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { rtlRender, rtlRenderElement, userEvent, runTimers } from '../../../../../__testutils__/rtlUtils';
import { screen, createEvent, fireEvent, within, RenderResult, render } from '@testing-library/react';

import NxStatefulCollapsibleMultiSelect, { Props } from '../NxStatefulCollapsibleMultiSelect';
import { NxStatefulTreeViewMultiSelect } from '../../../../../index';
import NxForm from '../../../../NxForm/NxForm';

describe('NxStatefulCollapsibleMultiSelect', function() {
  const minimalProps: Props = {
        options: [
          {id: 'foo', name: 'Foo'},
          {id: 'boo', name: 'Boo'}
        ],
        children: 'Foobar',
        name: 'foobar',
        onChange: () => {}
      },
      quickRender = rtlRender(NxStatefulCollapsibleMultiSelect, minimalProps),
      renderEl = rtlRenderElement(NxStatefulCollapsibleMultiSelect, minimalProps);

  it('is aliased as NxStatefulTreeViewMultiSelect', function() {
    expect(NxStatefulCollapsibleMultiSelect).toBe(NxStatefulTreeViewMultiSelect);
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

    it('toggle the collapsible items open and closed when clicked if there are options', async function() {
      const user = userEvent.setup(),
          optionsTrigger = renderAndGetTrigger(),
          noOptionsTrigger = renderAndGetTrigger({ options: [] });

      expect(noOptionsTrigger).toHaveAttribute('aria-expanded', 'false');
      await user.click(noOptionsTrigger);
      expect(noOptionsTrigger).toHaveAttribute('aria-expanded', 'false');

      expect(optionsTrigger).toHaveAttribute('aria-expanded', 'false');
      await user.click(optionsTrigger);
      expect(optionsTrigger).toHaveAttribute('aria-expanded', 'true');
    });

    describe('tooltip', function() {
      describe('when component is disabled due to no options', function() {
        it('has a default text constructed with the name prop', async function() {
          const user = userEvent.setup(),
              trigger = renderAndGetTrigger({ options: [] }),
              triggerWrapper = trigger.parentElement!;

          await runTimers();
          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

          await user.hover(triggerWrapper);
          await runTimers();

          const tooltip = screen.getByRole('tooltip');

          expect(tooltip).toHaveTextContent('There are no foobar options');
        });

        it('has a customized text as specified by disabledTooltip prop', async function() {
          const user = userEvent.setup(),
              trigger = renderAndGetTrigger({
                options: [],
                disabledTooltip: 'No options'
              }),
              triggerWrapper = trigger.parentElement!;

          await runTimers();
          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

          await user.hover(triggerWrapper);
          await runTimers();

          const tooltip = screen.getByRole('tooltip');

          expect(tooltip).toHaveTextContent('No options');
        });

        it('has specified classname when tooltipModifierClass prop is provided', async function() {
          const user = userEvent.setup(),
              trigger = renderAndGetTrigger({
                options: [],
                tooltipModifierClass: 'tooltipClass'
              }),
              triggerWrapper = trigger.parentElement!;

          await runTimers();
          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

          await user.hover(triggerWrapper);
          await runTimers();

          const tooltip = screen.getByRole('tooltip');

          expect(tooltip).toHaveTextContent('There are no foobar options');
          expect(tooltip.querySelector('.tooltipClass')).toBeInTheDocument();
        });
      });

      describe('when component is disabled explicitly', function() {
        it('has a customized text as specified by disabledTooltip prop', async function() {
          const user = userEvent.setup(),
              trigger = renderAndGetTrigger({
                disabled: true,
                disabledTooltip: 'No options'
              }),
              triggerWrapper = trigger.parentElement!;

          await runTimers();
          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

          await user.hover(triggerWrapper);
          await runTimers();

          const tooltip = screen.getByRole('tooltip');

          expect(tooltip).toHaveTextContent('No options');
        });

        it('has specified classname when tooltipModifierClass prop is provided', async function() {
          const user = userEvent.setup(),
              trigger = renderAndGetTrigger({
                disabled: true,
                disabledTooltip: 'No options',
                tooltipModifierClass: 'tooltipClass'
              }),
              triggerWrapper = trigger.parentElement!;

          await runTimers();
          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

          await user.hover(triggerWrapper);
          await runTimers();

          const tooltip = screen.getByRole('tooltip');

          expect(tooltip).toHaveTextContent('No options');
          expect(tooltip.querySelector('.tooltipClass')).toBeInTheDocument();
        });

        it('does not show when disabledTooltip prop is not provided', async function() {
          const user = userEvent.setup(),
              trigger = renderAndGetTrigger({ disabled: true }),
              triggerWrapper = trigger.parentElement!;

          await runTimers();
          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

          await user.hover(triggerWrapper);
          await runTimers();

          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
        });
      });
    });
  });

  describe('filter', function() {
    const filterView = (props?: Partial<Props>) => quickRender({
      ...props,
      filterThreshold: 1,
      isOpen: true
    });

    it('renders an input with type="text" iff when the number of options ' +
      'is greater than filterThreshold', function() {
      expect(quickRender().queryByRole('textbox')).not.toBeInTheDocument();
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
          view = filterView(),
          inputEl = view.getByRole('textbox');

      await runTimers();

      const clearBtn = view.getByRole('button', { name: 'Clear filter' });

      await user.type(inputEl, 'f');
      expect(inputEl).toHaveValue('f');

      await user.click(clearBtn);
      expect(inputEl).toHaveValue('');
    });

    it('clears the input when Escape key is pressed', async function() {
      const user = userEvent.setup(),
          view = filterView(),
          inputEl = view.getByRole('textbox');

      await user.type(inputEl, 'f');

      expect(inputEl).toHaveValue('f');

      await user.keyboard('[Escape]');

      expect(inputEl).toHaveValue('');
    });

    it('calls preventDefault on the event when Escape key is pressed and the value is not empty', async function() {
      const user = userEvent.setup(),
          { getByRole } = filterView(),
          inputEl = getByRole('textbox'),
          keyEvent = createEvent.keyDown(inputEl, { key: 'Escape' });

      await user.type(inputEl, 'f');
      expect(inputEl).toHaveValue('f');

      fireEvent(inputEl, keyEvent);

      expect(keyEvent.defaultPrevented).toBe(true);
    });

    it('does not call preventDefault on the event when Escape key is pressed and the value is empty', () => {
      const { getByRole } = filterView(),
          inputEl = getByRole('textbox'),
          keyEvent = createEvent.keyDown(inputEl, { key: 'Escape' });

      expect(inputEl).toHaveValue('');

      inputEl.focus();
      fireEvent(inputEl, keyEvent);

      expect(keyEvent.defaultPrevented).toBe(false);
    });

    it('does not submit the form when the "Clear filter" button is clicked', async function() {
      const user = userEvent.setup(),
          onSubmit = jest.fn(),
          view = render(
            <NxForm onSubmit={onSubmit} showValidationErrors={false} >
              <NxStatefulCollapsibleMultiSelect { ...minimalProps } filterThreshold={1} />
            </NxForm>
          ),
          inputEl = view.getByRole('textbox');

      await runTimers();
      await user.type(inputEl, 'f');

      expect(onSubmit).not.toHaveBeenCalled();
      const clearBtn = view.getByRole('button', { name: 'Clear filter' });

      await user.click(clearBtn);

      expect(onSubmit).not.toHaveBeenCalled();
    });

    describe('filtering', function() {
      let view: RenderResult,
          inputEl: HTMLElement;

      // for test filtering
      const options = [
        {id: 'foo', name: 'Foo'},
        {id: 'bobcat', name: 'Bobcat'},
        {id: 'catlover', name: 'Cat Lover'}
      ];

      beforeEach(() => {
        view = filterView({ options }),
        inputEl = view.getByRole('textbox');
      });

      function getOptions(view: RenderResult) {
        return view.getAllByRole('menuitemcheckbox');
      }

      it('is not case-sensitive', async function() {
        const user = userEvent.setup();

        await user.type(inputEl, 'c');
        const options = getOptions(view);
        expect(options).toHaveLength(3);
        expect(options[0]).toHaveAccessibleName('all/none');
        expect(options[1]).toHaveAccessibleName('Bobcat');
        expect(options[2]).toHaveAccessibleName('Cat Lover');
      });

      it('filters options with trimmed value', async function() {
        const user = userEvent.setup();

        await user.type(inputEl, ' f');
        const options = getOptions(view);

        expect(options).toHaveLength(2);
        expect(options[0]).toHaveAccessibleName('all/none');
        expect(options[1]).toHaveAccessibleName('Foo');
      });

      it('does not filter options when typing only spaces', async function() {
        const user = userEvent.setup(),
            options = getOptions(view);

        expect(options).toHaveLength(4);
        expect(options[0]).toHaveAccessibleName('all/none');
        expect(options[1]).toHaveAccessibleName('Foo');
        expect(options[2]).toHaveAccessibleName('Bobcat');
        expect(options[3]).toHaveAccessibleName('Cat Lover');

        await user.type(inputEl, ' ');
        const optionsAfterTyping = getOptions(view);
        expect(optionsAfterTyping).toHaveLength(4);
        expect(optionsAfterTyping).toEqual(options);
      });

      it('filters options when value of text input changed', async function() {
        let options;
        const user = userEvent.setup();

        options = getOptions(view);
        expect(options).toHaveLength(4);

        // matching the begining of the string
        await user.type(inputEl, 'f');
        options = getOptions(view);
        expect(options).toHaveLength(2);
        expect(options[0]).toHaveAccessibleName('all/none');
        expect(options[1]).toHaveAccessibleName('Foo');

        // to clear input
        await user.keyboard('[Escape]');

        // matching the other parts of string
        await user.type(inputEl, 'c');
        options = getOptions(view);
        expect(options).toHaveLength(3);
        expect(options[0]).toHaveAccessibleName('all/none');
        expect(options[1]).toHaveAccessibleName('Bobcat');
        expect(options[2]).toHaveAccessibleName('Cat Lover');
      });
    });
  });

  describe('collapsible items', function() {
    it('renders an element with menu role containing the options with menuitemcheckbox role', function() {
      const view = quickRender({ isOpen: true }),
          childrenEl = view.getByRole('menu'),
          childEl = within(childrenEl).getAllByRole('menuitemcheckbox');

      expect(childrenEl).toBeInTheDocument();
      expect(childEl).toHaveLength(3); // includes the toggle all option
    });

    describe('options', function () {
      it('has labeled text as specified in name of the option', function () {
        const view = quickRender({ isOpen: true }),
            options = view.getAllByRole('menuitemcheckbox');

        expect(options).toHaveLength(3);
        expect(options[0]).toHaveAccessibleName('all/none');
        expect(options[1]).toHaveAccessibleName('Foo');
        expect(options[2]).toHaveAccessibleName('Boo');
      });

      it('renders checked option when selected', function () {
        const view = quickRender({
              selectedIds: new Set(['foo']),
              isOpen: true
            }),
            options = view.getAllByRole('menuitemcheckbox');

        expect(options[0]).not.toBeChecked();
        expect(options[1]).toBeChecked();
        expect(options[2]).not.toBeChecked();
      });

      it('renders all unchecked options if selectedIds is not provided', function () {
        const view = quickRender({ isOpen: true }),
            options = view.getAllByRole('menuitemcheckbox');

        expect(options[0]).not.toBeChecked();
        expect(options[1]).not.toBeChecked();
        expect(options[2]).not.toBeChecked();
      });

      it('fires onChange with the new set of selectedIds and the id of the clicked option ' +
        'when an option is clicked', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            view = quickRender({ onChange, isOpen: true }),
            options = view.getAllByRole('menuitemcheckbox');

        expect(onChange).not.toHaveBeenCalled();

        // initially no options are checked; check the first one
        await user.click(options[1]);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(new Set(['foo']), 'foo');

        view.rerender(<NxStatefulCollapsibleMultiSelect { ...minimalProps }
                                                        onChange={onChange}
                                                        selectedIds={new Set(['foo'])}/>);

        // now the first option is checked; also check the second one
        await user.click(options[2]);
        expect(onChange).toHaveBeenCalledTimes(2);
        expect(onChange).toHaveBeenCalledWith(new Set(['foo', 'boo']), 'boo');

        view.rerender(<NxStatefulCollapsibleMultiSelect { ...minimalProps }
                                                        onChange={onChange}
                                                        selectedIds={new Set(['foo', 'boo'])}/>);

        // now the first two optoins are checked; uncheck the first one
        await user.click(options[1]);
        expect(onChange).toHaveBeenCalledTimes(3);
        expect(onChange).toHaveBeenCalledWith(new Set(['boo']), 'foo');
      });

      describe('tooltip', function() {
        it('calles optionTooltipGenerator with each option when provided ' +
          'and sets the customized text', async function() {
          const user = userEvent.setup(),
              optionTooltipGenerator = jest.fn().mockReturnValue('customized-tooltip'),
              optionsProp = [
                {id: 'cat', name: 'Cat'},
                {id: 'dog', name: 'Dog'}
              ],
              view = quickRender({ options: optionsProp, optionTooltipGenerator, isOpen: true }),
              options = view.getAllByRole('menuitemcheckbox');

          await runTimers();
          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

          await user.hover(options[1]);
          await runTimers();

          const tooltip = screen.getByRole('tooltip');

          // pass each option to the optionTooltipGenerator
          expect(optionTooltipGenerator).toHaveBeenCalledWith(optionsProp[0]);
          expect(optionTooltipGenerator).toHaveBeenCalledWith(optionsProp[1]);
          expect(tooltip).toHaveTextContent('customized-tooltip');
        });

        it('has specified classname when tooltipModifierClass prop is provided', async function() {
          const user = userEvent.setup(),
              optionTooltipGenerator = jest.fn().mockReturnValue('customized-tooltip'),
              view = quickRender({
                optionTooltipGenerator,
                tooltipModifierClass: 'tooltipClass',
                isOpen: true
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
              selectedIds: new Set(['foo']),
              isOpen: true
            }),
            toggleAllOption = view.getByRole('menuitemcheckbox', { name: 'all/none' });

        expect(toggleAllOption).not.toBeChecked();
      });

      it('renders checked toggle all option if all options are selected', function () {
        const view = quickRender({
              selectedIds: new Set(['foo', 'boo']),
              isOpen: true
            }),
            toggleAllOption = view.getByRole('menuitemcheckbox', { name: 'all/none' });

        expect(toggleAllOption).toBeChecked();
      });

      it('selects all options when no options are selected', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            view = quickRender({ onChange, isOpen: true }),
            toggleAllOption = view.getByRole('menuitemcheckbox', { name: 'all/none' });

        expect(onChange).not.toHaveBeenCalled();

        await user.click(toggleAllOption);

        expect(onChange).toHaveBeenCalledWith(new Set(['foo', 'boo']));
      });

      it('selects all options when not all options are selected', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            view = quickRender({
              onChange,
              selectedIds: new Set(['foo']),
              isOpen: true
            }),
            toggleAllOption = view.getByRole('menuitemcheckbox', { name: 'all/none' });

        expect(onChange).not.toHaveBeenCalled();

        await user.click(toggleAllOption);

        expect(onChange).toHaveBeenCalledWith(new Set(['foo', 'boo']));
      });

      it('un-selects all options when all options are selected', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            view = quickRender({
              onChange,
              selectedIds: new Set(['foo', 'boo']),
              isOpen: true
            }),
            toggleAllOption = view.getByRole('menuitemcheckbox', { name: 'all/none' });

        expect(onChange).not.toHaveBeenCalled();

        await user.click(toggleAllOption);

        expect(onChange).toHaveBeenCalledWith(new Set([]));
      });

      describe('when options are filtered', function () {
        it('renders unchecked toggle all option if not all filtered options are selected', async function () {
          const user = userEvent.setup(),
              view = quickRender({ filterThreshold: 1, isOpen: true }),
              toggleAllOption = view.getByRole('menuitemcheckbox', { name: 'all/none' }),
              inputEl = view.getByRole('textbox');

          await user.type(inputEl, 'f');

          expect(toggleAllOption).not.toBeChecked();
        });

        it('renders checked toggle all option if all filtered options are selected', async function () {
          const user = userEvent.setup(),
              view = quickRender({
                filterThreshold: 1,
                selectedIds: new Set(['foo', 'boo']),
                isOpen: true
              }),
              toggleAllOption = view.getByRole('menuitemcheckbox', { name: 'all/none' }),
              inputEl = view.getByRole('textbox');

          await user.type(inputEl, 'o');

          expect(toggleAllOption).toBeChecked();
        });

        it('renders nothing if no options are displayed due to filter', async function () {
          const user = userEvent.setup(),
              view = quickRender({
                filterThreshold: 1,
                isOpen: true
              }),
              inputEl = view.getByRole('textbox');

          await user.type(inputEl, 'z');

          expect(view.queryAllByRole('menuitemcheckbox')).toHaveLength(0);
        });

        it('selects all filtered options in addition to already selected options', async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),
              view = quickRender({
                onChange,
                filterThreshold: 1,
                selectedIds: new Set(['foo']),
                isOpen: true
              }),
              inputEl = view.getByRole('textbox'),
              toggleAllOption = view.getByRole('menuitemcheckbox', { name: 'all/none' });

          expect(onChange).not.toHaveBeenCalled();

          await user.type(inputEl, 'b');
          await user.click(toggleAllOption);

          expect(onChange).toHaveBeenCalledWith(new Set(['foo', 'boo']));
        });

        it('unselected only filtered options', async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),
              view = quickRender({
                onChange,
                filterThreshold: 1,
                selectedIds: new Set(['foo', 'boo']),
                isOpen: true
              }),
              inputEl = view.getByRole('textbox'),
              toggleAllOption = view.getByRole('menuitemcheckbox', { name: 'all/none' });

          expect(onChange).not.toHaveBeenCalled();

          await user.type(inputEl, 'f');
          await user.click(toggleAllOption);

          expect(onChange).toHaveBeenCalledWith(new Set(['boo']));
        });
      });
    });
  });
});
