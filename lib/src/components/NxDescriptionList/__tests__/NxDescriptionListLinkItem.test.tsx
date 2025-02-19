/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { zip } from 'ramda';
import { userEvent } from '../../../__testutils__/rtlUtils';
import { fireEvent, render, within } from '@testing-library/react';

import { rtlRenderElement, rtlRender } from '../../../__testutils__/rtlUtils';
import NxDescriptionList, { LinkItemProps } from '../NxDescriptionList';

describe('NxDescriptionList.LinkItem', function() {
  const minimalProps: LinkItemProps = {
        href: 'a', // note: an empty href would change the <a> element's role
        term: '',
        description: ''
      },
      renderEl = rtlRenderElement(NxDescriptionList.LinkItem, minimalProps),
      quickRender = rtlRender(NxDescriptionList.LinkItem, minimalProps);

  it('renders a div containing a dt and dd each containing a link', function() {
    const list = renderEl({ term: 'foo', description: 'bar' })!;

    expect(list.tagName).toBe('DIV');

    expect(list.childElementCount).toBe(2);
    expect(list.firstElementChild!.tagName).toBe('DT');
    expect(list.lastElementChild!.tagName).toBe('DD');

    const link1 = within(list.firstElementChild as HTMLElement).getByRole('link'),
        link2 = within(list.lastElementChild as HTMLElement).getByRole('link', { hidden: true });

    expect(link1).toBeTruthy();
    expect(link1).toHaveTextContent('foo');
    expect(link1).toHaveAccessibleName('foo');

    expect(link2).toBeTruthy();
    expect(link2).toHaveTextContent('bar');
    // can't query link2's accessible name because it's aria-hidden
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

  it('applies the anchorAttributes to both links', function() {
    const item = quickRender({ anchorAttributes: { rel: 'noreferrer', lang: 'en' } }),
        links = item.getAllByRole('link', { hidden: true });

    for (const link of links) {
      expect(link).toHaveAttribute('rel', 'noreferrer');
      expect(link).toHaveAttribute('lang', 'en');
    }
  });

  it('applies the anchorClassName to both links', function() {
    const item = quickRender({ anchorClassName: 'foo' }),
        links = item.getAllByRole('link', { hidden: true });

    for (const link of links) {
      expect(link).toHaveClass('foo');
    }

    const defaultItem = quickRender(),
        defaultLinks = defaultItem.getAllByRole('link', { hidden: true }),
        pairedLinks = zip(links, defaultLinks);

    for (const [link, defaultBtn] of pairedLinks) {
      // anchorClassName appends, not overrides
      for (const cls of Array.from(defaultBtn.classList)) {
        expect(link).toHaveClass(cls);
      }
    }
  });

  it('sets the selected class name on both links if selected', function() {
    const nonSelectedBtns = within(quickRender().container).getAllByRole('link', { hidden: true }),
        selectedBtns = within(quickRender({ selected: true }).container).getAllByRole('link', { hidden: true });

    for (const link of nonSelectedBtns) {
      expect(link).not.toHaveClass('selected');
    }

    for (const link of selectedBtns) {
      expect(link).toHaveClass('selected');
    }
  });

  it('sets the disabled class on the top-level element and the links if the disabled prop is set', function() {
    const nonDisabledComponent = quickRender(),
        nonDisabledContainer = nonDisabledComponent.container.firstElementChild,
        nonDisabledBtns = within(nonDisabledComponent.container).getAllByRole('link', { hidden: true });

    const disabledComponent = quickRender({ disabled: true }),
        disabledContainer = disabledComponent.container.firstElementChild,
        disabledBtns = within(disabledComponent.container).getAllByRole('link', { hidden: true });

    expect(nonDisabledContainer).not.toHaveClass('disabled');
    for (const link of nonDisabledBtns) {
      expect(link).not.toHaveClass('disabled');
    }

    expect(disabledContainer).toHaveClass('disabled');
    for (const link of disabledBtns) {
      expect(link).toHaveClass('disabled');
    }
  });

  it('sets the disabled class on the container if that class is set in anchorClassName', function() {
    const nonDisabledComponent = quickRender({ anchorClassName: 'asdfdisabled' }),
        nonDisabledContainer = nonDisabledComponent.container.firstElementChild;

    const disabledComponent = quickRender({ anchorClassName: 'asdf disabled' }),
        disabledContainer = disabledComponent.container.firstElementChild;

    expect(nonDisabledContainer).not.toHaveClass('disabled');
    expect(disabledContainer).toHaveClass('disabled');
  });

  it('sets aria-disabled on the first link if the component is disabled by prop or anchorClassName', function() {
    const nonDisabledComponent = quickRender(),
        nonDisabledFirstBtn = within(nonDisabledComponent.container).getByRole('link');

    const disabledByPropComponent = quickRender({ disabled: true }),
        disabledByPropFirstBtn = within(disabledByPropComponent.container).getByRole('link');

    const disabledByClassComponent = quickRender({ anchorClassName: 'disabled' }),
        disabledByClassFirstBtn = within(disabledByClassComponent.container).getByRole('link');

    expect(nonDisabledFirstBtn).not.toHaveAttribute('aria-disabled', 'true');
    expect(disabledByPropFirstBtn).toHaveAttribute('aria-disabled', 'true');
    expect(disabledByClassFirstBtn).toHaveAttribute('aria-disabled', 'true');
  });

  it('sets the description as the description of the first link', function() {
    const component = quickRender({ description: 'asdf' }),
        link = component.getByRole('link');

    expect(link).toHaveAccessibleDescription('asdf');
  });

  it('passes the href to both links', function() {
    const component = quickRender({ href: 'asdf' }),
        link = component.getByRole('link');

    expect(link).toHaveAttribute('href', 'asdf');
  });

  it('prevents the default action (href navigation) if clicked when disabled by prop', function() {
    const defaultComponent = quickRender(),
        disabledComponent = quickRender({ disabled: true }),
        link = within(defaultComponent.container).getByRole('link'),
        disabledLink = within(disabledComponent.container).getByRole('link');

    const defaultNotPrevented = fireEvent.click(link);
    const defaultNotPreventedOnDisabledLink = fireEvent.click(disabledLink);

    expect(defaultNotPrevented).toBe(true);
    expect(defaultNotPreventedOnDisabledLink).toBe(false);
  });

  it('does not prevent the default action (href navigation) if clicked when disabled by anchorClassName', function() {
    const disabledComponent = quickRender({ anchorClassName: 'disabled' }),
        disabledLink = within(disabledComponent.container).getByRole('link');

    const defaultNotPreventedOnDisabledLink = fireEvent.click(disabledLink);

    expect(defaultNotPreventedOnDisabledLink).toBe(true);
  });

  it('hides the second link from ARIA', function() {
    expect(quickRender().getAllByRole('link', { hidden: true })[1]).toHaveAttribute('aria-hidden', 'true');
  });

  it('has the first link as its only tabstop', async function() {
    const component = render(
        <>
          <button data-testid="before">Before</button>
          <NxDescriptionList.LinkItem { ...minimalProps } />
          <button data-testid="after">After</button>
        </>
    );

    const user = userEvent.setup(),
        elBefore = component.getByTestId('before'),
        elAfter = component.getByTestId('after'),
        firstBtn = within(component.container.children[1] as HTMLElement).getByRole('link');

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
