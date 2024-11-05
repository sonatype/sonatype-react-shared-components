/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import { fireEvent, screen, createEvent, within, render } from '@testing-library/react';
import { rtlRender, rtlRenderElement, runTimers, userEvent } from '../../../../__testutils__/rtlUtils';
import NxCollapsibleRadioSelect, { Props } from '../NxCollapsibleRadioSelect';
import { NxTreeViewRadioSelect } from '../../../../index';
import NxForm from '../../../NxForm/NxForm';

describe('NxCollapsibleRadioSelect', function() {
  const minimalProps: Props = {
        options: [
          {id: 'foo', name: 'Foo'},
          {id: 'bar', name: 'Bar'},
          {id: null, name: 'Null'}
        ],
        children: <span data-testid ="trigger-content">Trigger Content</span>,
        name: 'foobar',
        onChange: () => {}
      },
      quickRender = rtlRender(NxCollapsibleRadioSelect, minimalProps),
      renderEl = rtlRenderElement(NxCollapsibleRadioSelect, minimalProps);

  it('is aliased as NxTreeViewRadioSelect', function() {
    expect(NxCollapsibleRadioSelect).toBe(NxTreeViewRadioSelect);
  });

  it('renders a top-level element with a group role', function() {
    const view = quickRender();

    expect(view.getByRole('group')).toBe(view.container.firstChild);
  });

  it('sets the specified id', function() {
    expect(renderEl({ id: 'foo' })).toHaveAttribute('id', 'foo');
  });

  describe('trigger', function() {
    const renderAndGetTrigger = (props?: Partial<Props>) => quickRender(props).getByRole('button');

    it('is a button', function() {
      expect(renderAndGetTrigger()).toBeInTheDocument();
    });

    it('has type="button"', function() {
      expect(renderAndGetTrigger()).toHaveAttribute('type', 'button');
    });

    it('references the children items using aria-controls', function() {
      const view = quickRender(),
          trigger = view.getByRole('button'),
          childrenElId = trigger.getAttribute('aria-controls')!;

      expect(childrenElId).toBeDefined();

      const childrenEl = document.getElementById(childrenElId)!;

      expect(view.container).toContainElement(childrenEl);
    });

    it('sets aria-expanded iff both the isOpen prop is true and options is populated', function() {
      expect(renderAndGetTrigger({ options: [] })).toHaveAttribute('aria-expanded', 'false');
      expect(renderAndGetTrigger({ options: [], isOpen: true })).toHaveAttribute('aria-expanded', 'false');
      expect(renderAndGetTrigger({ options: [], isOpen: false })).toHaveAttribute('aria-expanded', 'false');
      expect(renderAndGetTrigger()).toHaveAttribute('aria-expanded', 'false');
      expect(renderAndGetTrigger({ isOpen: false })).toHaveAttribute('aria-expanded', 'false');
      expect(renderAndGetTrigger({ isOpen: true })).toHaveAttribute('aria-expanded', 'true');
    });

    it('sets disabled if the disabled prop is set to true or options is an empty array', function() {
      expect(renderAndGetTrigger()).toBeEnabled();
      expect(renderAndGetTrigger({ disabled: false })).toBeEnabled();
      expect(renderAndGetTrigger({ disabled: null })).toBeEnabled();
      expect(renderAndGetTrigger({ disabled: true })).toBeDisabled();

      expect(renderAndGetTrigger({ options: [] })).toBeDisabled();
      expect(renderAndGetTrigger({ options: [], disabled: true })).toBeDisabled();
      expect(renderAndGetTrigger({ options: [], disabled: false })).toBeDisabled();
      expect(renderAndGetTrigger({ options: [], disabled: null })).toBeDisabled();
    });

    it('fires the component\'s onToggleCollapse when clicked if there are options', async function() {
      const user = userEvent.setup(),
          onToggleCollapse = jest.fn(),
          noOptionsTrigger = renderAndGetTrigger({ onToggleCollapse, options: [] }),
          optionsTrigger = renderAndGetTrigger({ onToggleCollapse });

      expect(onToggleCollapse).not.toHaveBeenCalled();

      await user.click(noOptionsTrigger);
      expect(onToggleCollapse).not.toHaveBeenCalled();

      await user.click(optionsTrigger);
      expect(onToggleCollapse).toHaveBeenCalled();
    });

    it('does not fire the component\'s onToggleCollapse when clicked and the element is disabled', async function() {
      const user = userEvent.setup(),
          onToggleCollapse = jest.fn(),
          trigger = renderAndGetTrigger({ onToggleCollapse, disabled: true });

      expect(onToggleCollapse).not.toHaveBeenCalled();

      await user.click(trigger);
      expect(onToggleCollapse).not.toHaveBeenCalled();
    });

    it('renders children prop into trigger', function() {
      const trigger = renderAndGetTrigger(),
          triggerContent = screen.getByTestId('trigger-content');

      expect(trigger).toContainElement(triggerContent);
    });

    describe('disabledTooltip', function() {
      // the user API does not trigger mouseenter / mouseover events on disabled elements, so need to hover on
      // the wrapper div to trigger the tooltip
      const renderAndGetTriggerWrapper = (props?: Partial<Props>) =>
        renderEl(props)!.querySelector('.nx-collapsible-items__tooltip-wrapper');

      it('render a default tooltip when disabledTooltip is not provided and there are no options',
          async function() {
            const user = userEvent.setup(),
                triggerWrapper = renderAndGetTriggerWrapper({ options: [], name: 'Example Name'})!;

            await user.hover(triggerWrapper);
            await runTimers();
            expect(screen.getByRole('tooltip')).toBeInTheDocument();
            expect(screen.getByRole('tooltip')).toHaveTextContent('There are no Example Name options');
          });

      it('renders a custom tooltip as specified by the disabledTooltip prop when there are no options',
          async function() {
            const user = userEvent.setup(),
                trigger = renderAndGetTriggerWrapper({ options: [], disabledTooltip: 'tip'})!;

            await user.hover(trigger);
            await runTimers();
            expect(screen.getByRole('tooltip')).toBeInTheDocument();
            expect(screen.getByRole('tooltip')).toHaveTextContent('tip');
          });

      it('renders a custom tooltip as specified by the disabledTooltip prop when the element is disabled',
          async function() {
            const user = userEvent.setup(),
                trigger = renderAndGetTriggerWrapper({ disabled: true, disabledTooltip: 'tip' })!;

            await user.hover(trigger);
            await runTimers();
            expect(screen.getByRole('tooltip')).toBeInTheDocument();
            expect(screen.getByRole('tooltip')).toHaveTextContent('tip');
          });

      it('doesn\'t render a tooltip when the component is disabled and no disabledTooltip prop is provided',
          async function() {
            const user = userEvent.setup(),
                trigger = renderAndGetTriggerWrapper({ disabled: true })!;

            await user.hover(trigger);
            await runTimers();
            expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
          });

      it('doesn\'t render a tooltip when disabledTooltip prop is provided but the element is not disabled',
          async function() {
            const user = userEvent.setup(),
                trigger = renderAndGetTriggerWrapper({ disabledTooltip: 'tip' })!;

            await user.hover(trigger);
            await runTimers();
            expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
          });

      it('has a specified classname when the tooltipModifierClass prop is provided', async function() {
        const user = userEvent.setup(),
            trigger = renderAndGetTriggerWrapper({
              disabled: true,
              disabledTooltip: 'tip',
              tooltipModifierClass: 'customClass'
            })!;

        await runTimers();
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

        await user.hover(trigger);
        await runTimers();

        const tooltip = screen.getByRole('tooltip');
        expect(tooltip.querySelector('.customClass')).toBeInTheDocument();
      });
    });
  });

  it('calls onChange with options\'s id when an option is toggled', async function() {
    const user = userEvent.setup(),
        onChange = jest.fn(),
        view = quickRender({ onChange, isOpen: true }),
        radios = view.getAllByRole('menuitemradio');

    expect(onChange).not.toHaveBeenCalled();

    await user.click(radios[0]);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('foo');

    await user.click(radios[1]);
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith('bar');

    await user.click(radios[2]);
    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange).toHaveBeenCalledWith(null);
  });

  it('doesn\'t call onChange when options are disabled', async function() {
    const user = userEvent.setup(),
        onChange = jest.fn(),
        view = quickRender({ onChange, disabled: true, isOpen: true }),
        radios = view.getAllByRole('menuitemradio');

    expect(onChange).not.toHaveBeenCalled();
    expect(radios[0]).toBeDisabled();

    await user.click(radios[0]);
    expect(onChange).not.toHaveBeenCalled();
  });

  describe('collapsible items', function() {
    it('renders options with role=menuitemradio in an element with role=menu', function() {
      const view = quickRender({ isOpen: true }),
          menu = view.getByRole('menu'),
          options = within(menu).getAllByRole('menuitemradio');

      expect(menu).toBeInTheDocument();
      expect(options.length).toBe(3);
    });

    it('renders react element as option\'s name prop if supplied', function() {
      const view = quickRender({ options: [{id: 'foo', name: <span data-testid="foo">Foo</span> }]});
      const option = view.getByRole('menu');
      expect(within(option).getByTestId('foo')).toBeInTheDocument();
      expect(within(option).getByTestId('foo')).toHaveTextContent('Foo');
    });

    it('renders accessible name according to option\'s name prop', function() {
      const options = quickRender({ isOpen: true }).getAllByRole('menuitemradio');

      expect(options[0]).toHaveAccessibleName('Foo');
      expect(options[1]).toHaveAccessibleName('Bar');
      expect(options[2]).toHaveAccessibleName('Null');
    });

    it('renders an unchecked radio if option is not selected', function() {
      expect(quickRender({ selectedId: 'bar', isOpen: true }).getByRole('menuitemradio', { name: 'Foo' }))
          .not.toBeChecked();
    });

    it('renders a checked radio if option is selected', function() {
      expect(quickRender({ selectedId: 'bar', isOpen: true }).getByRole('menuitemradio', { name: 'Bar' }))
          .toBeChecked();
    });

    it('renders all unchecked radios if no selectedId is provided', function() {
      const options = quickRender({ isOpen: true }).getAllByRole('menuitemradio');

      expect(options[0]).not.toBeChecked();
      expect(options[1]).not.toBeChecked();
      expect(options[2]).not.toBeChecked();
    });

    it('render all radios as disabled if disabled prop is true', function() {
      const view = quickRender({ disabled: true, isOpen: true }),
          options = view.getAllByRole('menuitemradio');

      expect(options[0]).toBeDisabled();
      expect(options[1]).toBeDisabled();
      expect(options[2]).toBeDisabled();
    });

    describe('tooltip', function() {
      it('adds a tooltip for each option when optionTooltipGenerator prop is provided', async function() {
        const user = userEvent.setup(),
            view = quickRender({
              optionTooltipGenerator: option => option.name as string }),
            options = view.getAllByRole('menuitemradio');

        await runTimers();
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

        await user.hover(options[0]);
        await runTimers();
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
        expect(screen.getByRole('tooltip')).toHaveTextContent('Foo');

        await user.hover(options[1]);
        await runTimers();
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
        expect(screen.getByRole('tooltip')).toHaveTextContent('Bar');

        await user.hover(options[2]);
        await runTimers();
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
        expect(screen.getByRole('tooltip')).toHaveTextContent('Null');
      });

      it('passes the option to optionTooltipGenerator each time it is called', async function() {
        const optionTooltipGenerator = jest.fn();
        quickRender({ optionTooltipGenerator });

        expect(optionTooltipGenerator).toHaveBeenCalledTimes(3);
        expect(optionTooltipGenerator).toHaveBeenNthCalledWith(1, minimalProps.options[0]);
        expect(optionTooltipGenerator).toHaveBeenNthCalledWith(2, minimalProps.options[1]);
        expect(optionTooltipGenerator).toHaveBeenNthCalledWith(3, minimalProps.options[2]);
      });

      it('has a specified classname when the tooltipModifierClass prop is provided', async function() {
        const user = userEvent.setup(),
            optionTooltipGenerator = jest.fn().mockReturnValue('tip'),
            view = quickRender({ optionTooltipGenerator, tooltipModifierClass: 'customClass', isOpen: true }),
            options = view.getAllByRole('menuitemradio');

        await runTimers();
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

        await user.hover(options[0]);
        await runTimers();

        const tooltip = screen.getByRole('tooltip');
        expect(tooltip.querySelector('.customClass')).toBeInTheDocument();
      });
    });
  });

  describe('filtering', function() {
    const filterProps: Props = {
          ...minimalProps,
          options: [
            {id: 'foo', name: 'Foo'},
            {id: 'bar', name: 'Bar'},
            {id: 'baz', name: 'Baz'},
            {id: 'boo', name: 'Boo'}
          ],
          onFilterChange: () => {},
          filterThreshold: 2
        },
        quickFilterRender = rtlRender(NxCollapsibleRadioSelect, filterProps);

    it('renders an input child with the textbox role', function() {
      const view = quickFilterRender(),
          inputEl = view.getByRole('textbox');

      expect(inputEl.tagName).toBe('INPUT');
      expect(inputEl).toBeInTheDocument();
    });

    it('does not render an input when onFilterChange is not provided or filterThreshold is greater than options',
        function() {
          const onFilterChange = jest.fn(),
              noOnFilterChange = quickRender({ filterThreshold: 2 }),
              highFilterThreshold = quickRender({ onFilterChange, filterThreshold: 5 });

          expect(noOnFilterChange.queryByRole('textbox')).not.toBeInTheDocument();
          expect(highFilterThreshold.queryByRole('textbox')).not.toBeInTheDocument();
        });

    it('renders a button with an accessible name of "Clear filter"', async function() {
      const view = quickFilterRender();

      await runTimers();
      const clearBtn = view.getByRole('button', { name: 'Clear filter' });

      expect(clearBtn).toBeInTheDocument();
      expect(clearBtn).toHaveAccessibleName('Clear filter');
    });

    it('sets the aria-controls on the input to the menu id', function() {
      const view = quickFilterRender(),
          id = view.getByRole('menu').getAttribute('id'),
          inputEl = view.getByRole('textbox');

      expect(inputEl).toHaveAttribute('aria-controls', id);
    });

    it('defaults filter prop to an empty string', function() {
      expect(quickFilterRender().getByRole('textbox')).toHaveValue('');
    });

    it('sets the specified filter prop to input\'s value', function() {
      expect(quickFilterRender({ filter: 'foo' }).getByRole('textbox')).toHaveValue('foo');
    });

    it('renders a default placeholder "Filter" unless filterPlaceholder prop is provided', function() {
      const inputEl = quickFilterRender().getByRole('textbox'),
          inputElWithPlaceholder = quickFilterRender({ filterPlaceholder: 'placeholder text' }).getByRole('textbox');

      expect(inputEl).toHaveAttribute('placeholder', 'filter');
      expect(inputElWithPlaceholder).toHaveAttribute('placeholder', 'placeholder text');
    });

    describe('onFilterChange prop', function() {
      it('calls onFilterChange when filter value changes', async function() {
        const user = userEvent.setup(),
            onFilterChange = jest.fn().mockImplementation((_, evt) => { evt.persist(); }),
            inputEl = quickFilterRender({ onFilterChange, filter: ''}).getByRole('textbox');

        expect(onFilterChange).not.toHaveBeenCalled();

        inputEl.focus();
        await user.keyboard('a');

        expect(onFilterChange).toHaveBeenCalledWith('a', expect.objectContaining({ target: inputEl }));
      });

      it('fires onFilterChange with the empty string when the Escape key is pressed', async function() {
        const user = userEvent.setup(),
            onFilterChange = jest.fn(),
            el = quickFilterRender({ filter: 'b', onFilterChange }),
            inputEl = el.getByRole('textbox');

        expect(onFilterChange).not.toHaveBeenCalled();

        inputEl.focus();
        await user.keyboard('[Escape]');

        expect(onFilterChange).toHaveBeenCalledWith('');
      });

      it('fires onFilterChange with empty string when clear filter button is clicked', async function() {
        const user = userEvent.setup(),
            onFilterChange = jest.fn(),
            view = quickFilterRender({ filter: 'b', onFilterChange });

        await runTimers();
        const clearBtn = view.getByRole('button', { name: 'Clear filter' });

        expect(onFilterChange).not.toHaveBeenCalled();

        await user.click(clearBtn);

        expect(onFilterChange).toHaveBeenCalledWith('');
      });
    });

    it('calls preventDefault when the ESC is pressed and filter value is not empty', async function() {
      const inputEl = quickFilterRender({ filter: 'b' }).getByRole('textbox'),
          keyEvent = createEvent.keyDown(inputEl, { key: 'Escape' });

      inputEl.focus();
      fireEvent(inputEl, keyEvent);

      expect(keyEvent.defaultPrevented).toBe(true);
    });

    it('doesn\'t call preventDefault when the ESC is pressed and filter value is empty', async function() {
      const inputEl = quickFilterRender().getByRole('textbox'),
          keyEvent = createEvent.keyDown(inputEl, { key: 'Escape' });

      inputEl.focus();
      fireEvent(inputEl, keyEvent);

      expect(keyEvent.defaultPrevented).toBe(false);
    });

    it('does not submit the form when the clear filter button is clicked', async function() {
      const user = userEvent.setup(),
          onSubmit = jest.fn(),
          onFilterChange = jest.fn(),
          view = render(
            <NxForm onSubmit={onSubmit} showValidationErrors={false} >
              <NxCollapsibleRadioSelect { ...minimalProps }
                                        filter="f"
                                        onFilterChange={onFilterChange}
                                        filterThreshold={2} />
            </NxForm>
          );

      await runTimers();
      const clearBtn = view.getByRole('button', { name: 'Clear filter' });

      expect(onSubmit).not.toHaveBeenCalled();

      await user.click(clearBtn);

      expect(onSubmit).not.toHaveBeenCalled();
    });

    describe('when options are filtered', function() {
      it('renders all options if filteredOptions prop is not provided', function() {
        const view = quickFilterRender({ filteredOptions: null, isOpen: true }),
            options = view.getAllByRole('menuitemradio');

        expect(options.length).toBe(4);

        expect(options[0]).toHaveAccessibleName('Foo');
        expect(options[1]).toHaveAccessibleName('Bar');
        expect(options[2]).toHaveAccessibleName('Baz');
        expect(options[3]).toHaveAccessibleName('Boo');
      });

      it('renders no options if filteredOptions prop is an empty array', function() {
        const view = quickFilterRender({ filteredOptions: [], isOpen: true });
        expect(view.queryByRole('menuitemradio')).not.toBeInTheDocument();
      });

      it('renders only filtered options', function() {
        const view = quickFilterRender({
              filteredOptions: [{id: 'bar', name: 'Bar'}, {id: 'baz', name: 'Baz'}],
              isOpen: true
            }),
            options = view.getAllByRole('menuitemradio');

        expect(options.length).toBe(2);
        expect(options[0]).toHaveAccessibleName('Bar');
        expect(options[1]).toHaveAccessibleName('Baz');
      });
    });
  });
});
