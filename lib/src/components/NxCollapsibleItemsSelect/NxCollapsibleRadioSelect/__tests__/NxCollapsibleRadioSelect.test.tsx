/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import { fireEvent, screen, createEvent, within } from '@testing-library/react';
import { rtlRender, rtlRenderElement, runTimers, userEvent } from '../../../../__testutils__/rtlUtils';
import NxCollapsibleRadiosSelect, { Props } from '../NxCollapsibleRadioSelect';
import { NxTreeViewRadioSelect } from '../../../../index';

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
      quickRender = rtlRender(NxCollapsibleRadiosSelect, minimalProps),
      renderEl = rtlRenderElement(NxCollapsibleRadiosSelect, minimalProps);

  it('is aliased as NxTreeViewRadioSelect', function() {
    expect(NxCollapsibleRadiosSelect).toBe(NxTreeViewRadioSelect);
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

    it('references the treeview children items using aria-controls', function() {
      const view = quickRender(),
          trigger = view.getByRole('button'),
          childrenElId = trigger.getAttribute('aria-controls')!;

      expect(childrenElId).toBeDefined();

      const childrenEl = document.getElementById(childrenElId)!,
          childEl = screen.getByText('Foo');

      expect(view.container).toContainElement(childrenEl);
      expect(childrenEl).toContainElement(childEl);
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
      it('render a default tooltip when disabledTooltip is not provided and there are no options',
          async function() {
            const trigger = renderAndGetTrigger({ options: [], name: 'Example Name'});

            fireEvent.mouseOver(trigger);
            await runTimers();
            expect(screen.getByRole('tooltip')).toBeInTheDocument();
            expect(screen.getByRole('tooltip')).toHaveTextContent('There are no Example Name options');
          });

      it('renders a custom tooltip as specified by the disabledTooltip prop when there are no options',
          async function() {
            const trigger = renderAndGetTrigger({ options: [], disabledTooltip: 'tip'});

            fireEvent.mouseOver(trigger);
            await runTimers();
            expect(screen.getByRole('tooltip')).toBeInTheDocument();
            expect(screen.getByRole('tooltip')).toHaveTextContent('tip');
          });

      it('renders a custom tooltip as specified by the disabledTooltip prop when the element is disabled',
          async function() {
            const trigger = renderAndGetTrigger({ disabled: true, disabledTooltip: 'tip'});

            fireEvent.mouseOver(trigger);
            await runTimers();
            expect(screen.getByRole('tooltip')).toBeInTheDocument();
            expect(screen.getByRole('tooltip')).toHaveTextContent('tip');
          });

      it('doesn\'t render a tooltip when the component is disabled and no disabledTooltip prop is provided',
          async function() {
            const trigger = renderAndGetTrigger({ disabled: true });

            fireEvent.mouseOver(trigger);
            await runTimers();
            expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
          });

      it('doesn\'t render a tooltip when disabledTooltip prop is provided but the element is not disabled',
          async function() {
            const trigger = renderAndGetTrigger({ disabledTooltip: 'tip' });

            fireEvent.mouseOver(trigger);
            await runTimers();
            expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
          });
    });
  });

  it('calls onChange with options\'s id when an option is toggled', async function() {
    const user = userEvent.setup(),
        onChange = jest.fn(),
        view = quickRender({ onChange }),
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
        view = quickRender({ onChange, disabled: true }),
        radios = view.getAllByRole('menuitemradio');

    expect(onChange).not.toHaveBeenCalled();
    expect(radios[0]).toBeDisabled();

    await user.click(radios[0]);
    expect(onChange).not.toHaveBeenCalled();
  });

  describe('collapsible items', function() {
    it('renders options with role=menuitemradio in an element with role=menu', function() {
      const view = quickRender(),
          menu = view.getByRole('menu'),
          options = within(menu).getAllByRole('menuitemradio');

      expect(menu).toBeInTheDocument();
      expect(options.length).toBe(3);
    });

    it('renders text content and accessible name according to option\'s name prop', function() {
      const options = quickRender().getByRole('menu').children;

      expect(options[0]).toHaveTextContent('Foo');
      // expect(options[0]).toHaveAccessibleName('Foo');

      expect(options[1]).toHaveTextContent('Bar');
      // expect(options[1]).toHaveAccessibleName('Bar');

      expect(options[2]).toHaveTextContent('Null');
      // expect(options[2]).toHaveAccessibleName('Null');
    });

    it('renders an unchecked radio if option is not selected', function() {
      expect(quickRender({ selectedId: 'bar'}).getAllByRole('menuitemradio')[0]).not.toBeChecked();
    });

    it('renders a checked radio if option is selected', function() {
      expect(quickRender({ selectedId: 'bar'}).getAllByRole('menuitemradio')[1]).toBeChecked();
    });

    it('renders all unchecked radios if no selectedId is provided', function() {
      const radios = quickRender().getAllByRole('menuitemradio');

      expect(radios[0]).not.toBeChecked();
      expect(radios[1]).not.toBeChecked();
      expect(radios[2]).not.toBeChecked();
    });

    it('render all radios as disabled if disabled prop is true', function() {
      const view = quickRender({ disabled: true }),
          radios = view.getAllByRole('menuitemradio');

      expect(radios[0]).toBeDisabled();
      expect(radios[1]).toBeDisabled();
      expect(radios[2]).toBeDisabled();
    });

    describe('tooltip', function() {
      it('adds a tooltip for each option when optionTooltipGenerator prop is provided', async function() {
        const user = userEvent.setup(),
            view = quickRender({ optionTooltipGenerator: option => option.name}),
            options = view.getByRole('menu').children;

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
            view = quickRender({ optionTooltipGenerator, tooltipModifierClass: 'customClass'}),
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
        quickFilterRender = rtlRender(NxCollapsibleRadiosSelect, filterProps);

    it('renders an input child with the textbox role', function() {
      const view = quickFilterRender(),
          inputEl = view.getByRole('textbox');

      expect(inputEl.tagName).toBe('INPUT');
      expect(inputEl).toBeInTheDocument();
    });

    it('does not render an input when onFilterChange is not provided or filterThreshold is greater than options',
        function() {
          const onFilterChange = jest.fn(),
              noOnFilterChange = quickRender({ filterThreshold: 2}),
              highFilterThreshold = quickRender({ onFilterChange, filterThreshold: 5 });

          expect(noOnFilterChange.queryByRole('textbox')).not.toBeInTheDocument();
          expect(highFilterThreshold.queryByRole('textbox')).not.toBeInTheDocument();
        });

    it('renders a button with an accessible name of "Clear filter"', async function() {
      const view = quickFilterRender();

      await runTimers();
      const clearBtn = view.getByRole('button', { name: 'Clear filter'});

      expect(clearBtn).toBeInTheDocument();
      expect(clearBtn).toHaveAccessibleName('Clear filter');
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
            input = el.getByRole('textbox');

        expect(onFilterChange).not.toHaveBeenCalled();

        input.focus();
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

    describe('when options are filtered', function() {
      it('renders all options if filteredOptions prop is not provided', function() {
        const view = quickFilterRender({ filteredOptions: null}),
            options = view.getByRole('menu').children;

        expect(options.length).toBe(4);

        expect(options[0]).toHaveTextContent('Foo');
        expect(options[1]).toHaveTextContent('Bar');
        expect(options[2]).toHaveTextContent('Baz');
        expect(options[3]).toHaveTextContent('Boo');
      });

      it('renders no options if filteredOptions prop is an empty array', function() {
        const view = quickFilterRender({filteredOptions: []});
        expect(view.queryByRole('menuitemradio')).not.toBeInTheDocument();
      });

      it('renders only filtered options', function() {
        const view = quickFilterRender({
              filteredOptions: [{id: 'bar', name: 'Bar'}, {id: 'baz', name: 'Baz'}]
            }),
            options = view.getByRole('menu').children;

        expect(options.length).toBe(2);
        expect(options[0]).toHaveTextContent('Bar');
        expect(options[1]).toHaveTextContent('Baz');
      });
    });
  });
});

// import {getShallowComponent} from '../../../../__testutils__/enzymeUtils';
// import 'jest-enzyme';
// import NxCollapsibleRadioSelect, {Option, Props} from '../NxCollapsibleRadioSelect';
// import Counter from '../../../Counter/Counter';

// import { NxTreeViewRadioSelect } from '../../../../index';

// describe('NxCollapsibleRadioSelect', function() {
//   const requiredProps: Props = {
//     options: [
//       {id: 'foo', name: 'Foo'},
//       {id: 'bar', name: 'Bar'},
//       {id: null, name: 'Null'}
//     ],
//     children: 'Foobar',
//     name: 'foobar',
//     onChange: () => {}
//   };

//   const getShallow = getShallowComponent<Props>(NxCollapsibleRadioSelect, requiredProps);

//   it('is aliased as NxTreeViewRadioSelect', function() {
//     expect(NxCollapsibleRadioSelect).toBe(NxTreeViewRadioSelect);
//   });

//   it('properly renders component using only required props', function() {
//     const shallowRender = getShallow();

//     expect(shallowRender).toHaveDisplayName('AbstractCollapsibleItemsSelect');
//     expect(shallowRender).toHaveProp('name', 'foobar');
//     expect(shallowRender).toHaveProp('children', 'Foobar');
//     expect(shallowRender).toHaveProp('options', [
//       {id: 'foo', name: 'Foo'},
//       {id: 'bar', name: 'Bar'},
//       {id: null, name: 'Null'}
//     ]);
//   });

//   it('passes props to AbstractCollapsibleItemsSelect', function() {
//     const optionalProps = {
//       isOpen: true,
//       id: 'someid',
//       disabled: true,
//       onToggleCollapse: jest.fn(),
//       disabledTooltip: 'test disabled tooltip',
//       optionTooltipGenerator: (option: Option) => option.name,
//       tooltipModifierClass: 'tooltip-test-class',
//       onFilterChange: jest.fn(),
//       filter: 'filter term',
//       filteredOptions: [{id: 'bar', name: 'Bar'}],
//       filterPlaceholder: 'test filter placeholder',
//       filterThreshold: 1
//     };

//     const shallowRender = getShallow(optionalProps);
//     expect(shallowRender).toHaveDisplayName('AbstractCollapsibleItemsSelect');
//     expect(shallowRender).toHaveProp(optionalProps);
//   });

//   describe('renderOption prop', function () {
//     it('renders unchecked <NxRadio> if option is not selected', function () {
//       const shallowRender = getShallow({selectedId: 'foo'});
//       const optionWrapper = shallowRender.renderProp('renderOption')({id: 'bar', name: 'Bar'});

//       expect(optionWrapper).toHaveDisplayName('ForwardRef(NxRadio)');
//       expect(optionWrapper).toHaveProp('isChecked', false);
//     });

//     it('renders checked <NxRadio> if option is selected', function () {
//       const shallowRender = getShallow({selectedId: 'foo'});
//       const optionWrapper = shallowRender.renderProp('renderOption')({id: 'foo', name: 'Foo'});

//       expect(optionWrapper).toHaveDisplayName('ForwardRef(NxRadio)');
//       expect(optionWrapper).toHaveProp('isChecked', true);
//     });

//     it('renders unchecked <NxRadio> for all options if selectedId prop is not provided', function () {
//       const shallowRender = getShallow();
//       const renderOption = shallowRender.renderProp('renderOption');

//       expect(renderOption({id: 'foo', name: 'Foo'})).toHaveProp('isChecked', false);
//       expect(renderOption({id: 'bar', name: 'Bar'})).toHaveProp('isChecked', false);
//       expect(renderOption({id: null, name: 'Null'})).toHaveProp('isChecked', false);
//     });

//     it('renders enabled <NxRadio> for all options if component is not disabled', function () {
//       const renderOption = getShallow().renderProp('renderOption');

//       expect(renderOption({id: 'foo', name: 'Foo'})).toHaveProp('disabled', false);
//       expect(renderOption({id: 'bar', name: 'Bar'})).toHaveProp('disabled', false);
//       expect(renderOption({id: null, name: 'Null'})).toHaveProp('disabled', false);
//     });

//     it('renders disabled <NxRadio> for all options if component is disabled', function () {
//       const shallowRender = getShallow({disabled: true});
//       const renderOption = shallowRender.renderProp('renderOption');

//       expect(renderOption({id: 'foo', name: 'Foo'})).toHaveProp('disabled', true);
//       expect(renderOption({id: 'bar', name: 'Bar'})).toHaveProp('disabled', true);
//       expect(renderOption({id: null, name: 'Null'})).toHaveProp('disabled', true);
//     });

//     it('uses option name as radio label', function () {
//       const renderOption = getShallow().renderProp('renderOption');

//       expect(renderOption({id: 'foo', name: 'Foo'})).toHaveProp('children', 'Foo');
//       expect(renderOption({id: 'bar', name: 'Bar'})).toHaveProp('children', 'Bar');
//       expect(renderOption({id: null, name: 'Null'})).toHaveProp('children', 'Null');
//     });

//     it('generates radioId using name prop and option name', function () {
//       const shallowRender = getShallow();
//       const renderOption = shallowRender.renderProp('renderOption');

//       expect(renderOption({id: 'foo', name: 'Foo'})).toHaveProp('radioId', 'nx-collapsible-items-select-foobar-foo');
//       expect(renderOption({id: 'bar', name: 'Bar'})).toHaveProp('radioId', 'nx-collapsible-items-select-foobar-bar');
//       expect(renderOption({id: null,name: 'Null'})).toHaveProp('radioId', 'nx-collapsible-items-select-foobar-null');
//     });

//     describe('onChange callback', function () {
//       it('properly calls component\'s onChange callback when an option is toggled', function() {
//         const onChangeSpy = jest.fn();
//         const shallowRender = getShallow({
//           onChange: onChangeSpy,
//           selectedId: 'bar'
//         });
//         const renderOption = shallowRender.renderProp('renderOption');

//         expect(onChangeSpy).not.toHaveBeenCalled();
//         renderOption({id: 'foo', name: 'Foo'}).simulate('change', 'foo');
//         expect(onChangeSpy).toHaveBeenCalledWith('foo');

//         renderOption({id: 'bar', name: 'Bar'}).simulate('change', 'bar');
//         expect(onChangeSpy).toHaveBeenCalledWith('bar');

//         renderOption({id: null, name: 'Null'}).simulate('change', null);
//         expect(onChangeSpy).toHaveBeenCalledWith(null);
//       });
//     });

//     it('sets overflowTooltip to false if optionTooltipGenerator is defined', function() {
//       const shallowRenderNoTooltipGen = getShallow(),
//           shallowRenderTooltipGen = getShallow({ optionTooltipGenerator: opt => opt.name }),
//           renderOptionNoTooltipGen = shallowRenderNoTooltipGen.renderProp('renderOption'),
//           renderOptionTooltipGen = shallowRenderTooltipGen.renderProp('renderOption');

//       expect(renderOptionNoTooltipGen({ id: 'foo', name: 'Foo' })).toHaveProp('overflowTooltip', true);
//       expect(renderOptionTooltipGen({ id: 'foo', name: 'Foo' })).toHaveProp('overflowTooltip', false);
//     });
//   });

//   describe('renderCounter prop', function () {
//     it('renders nothing if selectedId prop is not provided', function () {
//       const renderPropWrapper = getShallow().renderProp('renderCounter')();
//       expect(renderPropWrapper).toBeEmptyRender();
//     });

//     it('renders <Counter> with selected option name if selectedId prop is provided', function () {
//       const renderPropWrapper = getShallow({selectedId: 'bar'}).renderProp('renderCounter')();
//       expect(renderPropWrapper).toContainReact(<Counter>Bar</Counter>);
//     });

//     it('renders <Counter> with selected option name even if the option id is null', function () {
//       const renderPropWrapper = getShallow({selectedId: null}).renderProp('renderCounter')();
//       expect(renderPropWrapper).toContainReact(<Counter>Null</Counter>);
//     });
//   });
// });
