/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { zip } from 'ramda';
import userEvent from '@testing-library/user-event';
import { render, within } from '@testing-library/react';

import { rtlRenderElement, rtlRender } from '../../../__testutils__/rtlUtils';
import NxDescriptionList from '../NxDescriptionList';

describe('NxDescriptionList.ButtonItem', function() {
  const minimalProps = {
        onClick: () => {},
        term: '',
        description: ''
      },
      renderEl = rtlRenderElement(NxDescriptionList.ButtonItem, minimalProps),
      quickRender = rtlRender(NxDescriptionList.ButtonItem, minimalProps);

  it('renders a div containing a dt and dd each containing a button', function() {
    const list = renderEl({ term: 'foo', description: 'bar' })!;

    expect(list.tagName).toBe('DIV');

    expect(list.childElementCount).toBe(2);
    expect(list.firstElementChild!.tagName).toBe('DT');
    expect(list.lastElementChild!.tagName).toBe('DD');

    const button1 = within(list.firstElementChild as HTMLElement).getByRole('button'),
        button2 = within(list.lastElementChild as HTMLElement).getByRole('button', { hidden: true });

    expect(button1).toBeTruthy();
    expect(button1).toHaveTextContent('foo');
    expect(button1).toHaveAccessibleName('foo');

    expect(button2).toBeTruthy();
    expect(button2).toHaveTextContent('bar');
    // can't query button2's accessible name because it's aria-hidden
  });

  it('sets specified classNames and attributes on the top-level element', function() {
    const defaultItem = renderEl()!,
        customizedItem = renderEl({ className: 'foo', id: 'bar', lang: 'en' });

    expect(customizedItem).toHaveClass('foo');
    expect(customizedItem).toHaveClass('foo');
    expect(customizedItem).toHaveAttribute('id', 'bar');
    expect(customizedItem).toHaveAttribute('lang', 'en');

    // adding a custom classname shoul not override the other classnames
    for (const cls of Array.from(defaultItem.classList)) {
      expect(customizedItem).toHaveClass(cls);
    }
  });

  it('attaches a ref to the top-level element', function() {
    const ref = React.createRef<HTMLDivElement>(),
        item = renderEl({ ref });

    expect(ref.current).toBe(item);
  });

  it('sets aria-selected and aria-current if selected', function() {
    const nonSelected = renderEl(),
        selected = renderEl({ selected: true });

    expect(nonSelected).not.toHaveAttribute('aria-selected', 'true');
    expect(nonSelected).not.toHaveAttribute('aria-current', 'true');

    expect(selected).toHaveAttribute('aria-selected', 'true');
    expect(selected).toHaveAttribute('aria-current', 'true');
  });

  it('applies the buttonAttributes to both buttons', function() {
    const item = quickRender({ buttonAttributes: { name: 'foo', lang: 'en' } }),
        buttons = item.getAllByRole('button', { hidden: true });

    for (const btn of buttons) {
      expect(btn).toHaveAttribute('name', 'foo');
      expect(btn).toHaveAttribute('lang', 'en');
    }
  });

  it('applies the buttonClassName to both buttons', function() {
    const item = quickRender({ buttonClassName: 'foo' }),
        buttons = item.getAllByRole('button', { hidden: true });

    for (const btn of buttons) {
      expect(btn).toHaveClass('foo');
    }

    const defaultItem = quickRender(),
        defaultButtons = defaultItem.getAllByRole('button', { hidden: true }),
        pairedButtons = zip(buttons, defaultButtons);

    for (const [btn, defaultBtn] of pairedButtons) {
      // buttonClassName appends, not overrides
      for (const cls of Array.from(defaultBtn.classList)) {
        expect(btn).toHaveClass(cls);
      }
    }
  });

  it('sets the selected class name on both buttons if selected', function() {
    const nonSelectedBtns = within(quickRender().container).getAllByRole('button', { hidden: true }),
        selectedBtns = within(quickRender({ selected: true }).container).getAllByRole('button', { hidden: true });

    for (const btn of nonSelectedBtns) {
      expect(btn).not.toHaveClass('selected');
    }

    for (const btn of selectedBtns) {
      expect(btn).toHaveClass('selected');
    }
  });

  it('sets the disabled class on the top-level element and the buttons if the disabled prop is set', function() {
    const nonDisabledComponent = quickRender(),
        nonDisabledContainer = nonDisabledComponent.container.firstElementChild,
        nonDisabledBtns = within(nonDisabledComponent.container).getAllByRole('button', { hidden: true });

    const disabledComponent = quickRender({ disabled: true }),
        disabledContainer = disabledComponent.container.firstElementChild,
        disabledBtns = within(disabledComponent.container).getAllByRole('button', { hidden: true });

    expect(nonDisabledContainer).not.toHaveClass('disabled');
    for (const btn of nonDisabledBtns) {
      expect(btn).not.toHaveClass('disabled');
    }

    expect(disabledContainer).toHaveClass('disabled');
    for (const btn of disabledBtns) {
      expect(btn).toHaveClass('disabled');
    }
  });

  it('sets the disabled class on the container if that class is set in buttonClassName', function() {
    const nonDisabledComponent = quickRender({ buttonClassName: 'asdfdisabled' }),
        nonDisabledContainer = nonDisabledComponent.container.firstElementChild;

    const disabledComponent = quickRender({ buttonClassName: 'asdf disabled' }),
        disabledContainer = disabledComponent.container.firstElementChild;

    expect(nonDisabledContainer).not.toHaveClass('disabled');
    expect(disabledContainer).toHaveClass('disabled');
  });

  it('sets aria-disabled on the first button if the component is disabled by prop or buttonClassName', function() {
    const nonDisabledComponent = quickRender(),
        nonDisabledFirstBtn = within(nonDisabledComponent.container).getByRole('button');

    const disabledByPropComponent = quickRender({ disabled: true }),
        disabledByPropFirstBtn = within(disabledByPropComponent.container).getByRole('button');

    const disabledByClassComponent = quickRender({ buttonClassName: 'disabled' }),
        disabledByClassFirstBtn = within(disabledByClassComponent.container).getByRole('button');

    expect(nonDisabledFirstBtn).not.toHaveAttribute('aria-disabled', 'true');
    expect(disabledByPropFirstBtn).toHaveAttribute('aria-disabled', 'true');
    expect(disabledByClassFirstBtn).toHaveAttribute('aria-disabled', 'true');
  });

  it('sets the description as the description of the first button', function() {
    const component = quickRender({ description: 'asdf' }),
        btn = component.getByRole('button');

    expect(btn).toHaveAccessibleDescription('asdf');
  });

  it('fires the onClick handler when the first button is clicked', async function() {
    const user = userEvent.setup(),
        onClick = jest.fn(),
        component = quickRender({ onClick }),
        btn = component.getByRole('button');

    expect(onClick).not.toHaveBeenCalled();

    await user.click(btn);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('fires the onClick handler when the second button is clicked', async function() {
    const user = userEvent.setup(),
        onClick = jest.fn(),
        component = quickRender({ onClick }),
        btn = component.getAllByRole('button', { hidden: true })[1];

    expect(onClick).not.toHaveBeenCalled();

    await user.click(btn);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not fire onClick when either button is clicked if disabled by prop', async function() {
    const user = userEvent.setup(),
        onClick = jest.fn(),
        component = quickRender({ onClick, disabled: true }),
        buttons = component.getAllByRole('button', { hidden: true });

    for (const btn of buttons) {
      await user.click(btn);
    }

    expect(onClick).not.toHaveBeenCalled();
  });

  it('does fire onClick when either button is clicked if disabled by buttonClassName', async function() {
    const user = userEvent.setup(),
        onClick = jest.fn(),
        component = quickRender({ onClick, buttonClassName: 'disabled' }),
        buttons = component.getAllByRole('button', { hidden: true });

    for (const btn of buttons) {
      await user.click(btn);
    }

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('hides the second button from ARIA', function() {
    expect(quickRender().getAllByRole('button', { hidden: true })[1]).toHaveAttribute('aria-hidden', 'true');
  });

  it('has the first button as its only tabstop', async function() {
    // We apparently have two different eslint indentation rules, which happen to contradict
    // one another about this statement for some reason. Disabling the one I disagree with.
    /* eslint-disable @typescript-eslint/indent */
    const component = render(
      <>
        <button data-testid="before">Before</button>
        <NxDescriptionList.ButtonItem { ...minimalProps } />
        <button data-testid="after">After</button>
      </>
    );

    const user = userEvent.setup(),
        elBefore = component.getByTestId('before'),
        elAfter = component.getByTestId('after'),
        firstBtn = within(component.container.children[1] as HTMLElement).getByRole('button');

    elBefore.focus();

    await user.tab();

    expect(firstBtn).toHaveFocus();

    await user.tab();

    expect(elAfter).toHaveFocus();

    await user.tab({ shift: true });

    expect(firstBtn).toHaveFocus();

    await user.tab({ shift: true });

    expect(elBefore).toHaveFocus();
  });
});
