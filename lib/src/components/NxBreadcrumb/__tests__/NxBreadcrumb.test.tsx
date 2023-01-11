/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { render, waitFor, within } from '@testing-library/react';
import { userEvent } from '../../../__testutils__/rtlUtils';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import NxBreadcrumb, { Props } from '../NxBreadcrumb';

describe('NxBreadcrumb', function() {
  const minimalProps: Props = {
        crumbs: [{ name: 'A', href: 'a' }, { name: 'B', href: 'b' }],
        isDropdownOpen: false,
        onToggleDropdown: () => {}
      },
      quickRender = rtlRender(NxBreadcrumb, minimalProps),
      renderEl = rtlRenderElement(NxBreadcrumb, minimalProps);

  it('renders an element with a navigation role and an accessible name of "breadcrumbs"', function() {
    const view = quickRender(),
        nav = view.getByRole('navigation');

    expect(nav).toBe(view.container.firstChild);
    expect(nav).toHaveAccessibleName('breadcrumbs');
  });

  it('allows the accessible name to be overridden by aria-label or aria-labelledby', function() {
    render(<div id="label">bar</div>);

    expect(renderEl({ 'aria-label': 'foo' })).toHaveAccessibleName('foo');
    expect(renderEl({ 'aria-labelledby': 'label' })).toHaveAccessibleName('bar');
  });

  it('adds specified classnames in addition to the defaults', function() {
    const defaultEl = renderEl()!,
        el = renderEl({ className: 'foo' })!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('adds additional attributes to the top-level element', function() {
    const el = renderEl({ id: 'foo', lang: 'en' });

    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('lang', 'en');
  });

  it('renders nothing if crumbs has zero or one elements', function() {
    expect(renderEl({ crumbs: [] })).not.toBeInTheDocument();
    expect(renderEl({ crumbs: [{ name: 'A', href: 'a' }] })).not.toBeInTheDocument();
  });

  it('renders two crumbs in a list with the first being a link', function() {
    const view = quickRender(),
        list = within(view.getByRole('navigation')).getByRole('list'),
        listItems = within(list).getAllByRole('listitem'),
        link = within(listItems[0]).getByRole('link'),
        finalItem = listItems[1];

    expect(listItems).toHaveLength(2);

    expect(link).toHaveAccessibleName('A');
    expect(link).toHaveTextContent('A');
    expect(link).toHaveAttribute('href', 'a');

    expect(within(finalItem).queryByRole('link')).not.toBeInTheDocument();
    expect(finalItem).toHaveTextContent('B');
  });

  it('renders three crumbs in a list with the first two being links', function() {
    const view = quickRender({
          crumbs: [{ name: 'A', href: 'a' }, { name: 'B', href: 'b' }, { name: 'C', href: 'c' }]
        }),
        list = within(view.getByRole('navigation')).getByRole('list'),
        listItems = within(list).getAllByRole('listitem'),
        link1 = within(listItems[0]).getByRole('link'),
        link2 = within(listItems[1]).getByRole('link'),
        finalItem = listItems[2];

    expect(listItems).toHaveLength(3);

    expect(link1).toHaveAccessibleName('A');
    expect(link1).toHaveTextContent('A');
    expect(link1).toHaveAttribute('href', 'a');

    expect(link2).toHaveAccessibleName('B');
    expect(link2).toHaveTextContent('B');
    expect(link2).toHaveAttribute('href', 'b');

    expect(within(finalItem).queryByRole('link')).not.toBeInTheDocument();
    expect(finalItem).toHaveTextContent('C');
  });

  it('renders four crumbs in a list with the first three being links', function() {
    const view = quickRender({
          crumbs: [
            { name: 'A', href: 'a' },
            { name: 'B', href: 'b' },
            { name: 'C', href: 'c' },
            { name: 'D', href: 'd' }
          ]
        }),
        list = within(view.getByRole('navigation')).getByRole('list'),
        listItems = within(list).getAllByRole('listitem'),
        link1 = within(listItems[0]).getByRole('link'),
        link2 = within(listItems[1]).getByRole('link'),
        link3 = within(listItems[2]).getByRole('link'),
        finalItem = listItems[3];

    expect(listItems).toHaveLength(4);

    expect(link1).toHaveAccessibleName('A');
    expect(link1).toHaveTextContent('A');
    expect(link1).toHaveAttribute('href', 'a');

    expect(link2).toHaveAccessibleName('B');
    expect(link2).toHaveTextContent('B');
    expect(link2).toHaveAttribute('href', 'b');

    expect(link3).toHaveAccessibleName('C');
    expect(link3).toHaveTextContent('C');
    expect(link3).toHaveAttribute('href', 'c');

    expect(within(finalItem).queryByRole('link')).not.toBeInTheDocument();
    expect(finalItem).toHaveTextContent('D');
  });

  describe('five or more crumbs', function() {
    it('renders the first and last two crumbs in the list and the rest in a dropdown placed after the first crumb',
        function() {
          const view = quickRender({
                crumbs: [
                  { name: 'A', href: 'a' },
                  { name: 'B', href: 'b' },
                  { name: 'C', href: 'c' },
                  { name: 'D', href: 'd' },
                  { name: 'E', href: 'e' }
                ],
                isDropdownOpen: true
              }),
              list = within(view.getByRole('navigation')).getByRole('list'),
              listItems = within(list).getAllByRole('listitem'),
              firstLink = within(listItems[0]).getByRole('link'),
              dropdownItem = listItems[1],
              lastLink = within(listItems[2]).getByRole('link'),
              finalItem = listItems[3];

          expect(listItems).toHaveLength(4);

          expect(firstLink).toHaveAccessibleName('A');
          expect(firstLink).toHaveTextContent('A');
          expect(firstLink).toHaveAttribute('href', 'a');

          expect(lastLink).toHaveAccessibleName('D');
          expect(lastLink).toHaveTextContent('D');
          expect(lastLink).toHaveAttribute('href', 'd');

          // NxDropdown does not currently have proper ARIA roles. Revisit and improve this test in RSC-989.
          expect(within(dropdownItem).getByRole('button')).toBeInTheDocument();

          const dropdownLinks = within(dropdownItem).getAllByRole('link');

          expect(dropdownLinks[0]).toHaveAccessibleName('B');
          expect(dropdownLinks[0]).toHaveTextContent('B');
          expect(dropdownLinks[0]).toHaveAttribute('href', 'b');
          expect(dropdownLinks[1]).toHaveAccessibleName('C');
          expect(dropdownLinks[1]).toHaveTextContent('C');
          expect(dropdownLinks[1]).toHaveAttribute('href', 'c');

          expect(within(finalItem).queryByRole('link')).not.toBeInTheDocument();
          expect(finalItem).toHaveTextContent('E');
        }
    );

    it('does not render the menu of the dropdown if isDropdownOpen is false', function() {
      const view = quickRender({
            crumbs: [
              { name: 'A', href: 'a' },
              { name: 'B', href: 'b' },
              { name: 'C', href: 'c' },
              { name: 'D', href: 'd' },
              { name: 'E', href: 'e' }
            ]
          }),
          list = within(view.getByRole('navigation')).getByRole('list'),
          listItems = within(list).getAllByRole('listitem'),
          firstLink = within(listItems[0]).getByRole('link'),
          dropdownItem = listItems[1],
          lastLink = within(listItems[2]).getByRole('link'),
          finalItem = listItems[3];

      expect(listItems).toHaveLength(4);

      expect(firstLink).toHaveAccessibleName('A');
      expect(firstLink).toHaveTextContent('A');
      expect(firstLink).toHaveAttribute('href', 'a');

      expect(lastLink).toHaveAccessibleName('D');
      expect(lastLink).toHaveTextContent('D');
      expect(lastLink).toHaveAttribute('href', 'd');

      // NxDropdown does not currently have proper ARIA roles. Revisit and improve this test in RSC-989.
      expect(within(dropdownItem).getByRole('button')).toBeInTheDocument();
      expect(within(dropdownItem).queryByRole('link')).not.toBeInTheDocument();

      expect(within(finalItem).queryByRole('link')).not.toBeInTheDocument();
      expect(finalItem).toHaveTextContent('E');
    });

    it('gives the dropdown button an accessible name of "more…"', async function() {
      const view = quickRender({
            crumbs: [
              { name: 'A', href: 'a' },
              { name: 'B', href: 'b' },
              { name: 'C', href: 'c' },
              { name: 'D', href: 'd' },
              { name: 'E', href: 'e' }
            ]
          }),
          list = within(view.getByRole('navigation')).getByRole('list'),
          listItems = within(list).getAllByRole('listitem'),
          dropdownButton = within(listItems[1]).getByRole('button');

      // tooltips initialize asynchronously
      await waitFor(() => expect(dropdownButton).toHaveAccessibleName('more…'));
    });

    it('calls onToggleDropdown when the dropdown button is clicked', async function() {
      const user = userEvent.setup(),
          onToggleDropdown = jest.fn(),
          view = quickRender({
            crumbs: [
              { name: 'A', href: 'a' },
              { name: 'B', href: 'b' },
              { name: 'C', href: 'c' },
              { name: 'D', href: 'd' },
              { name: 'E', href: 'e' }
            ],
            onToggleDropdown
          }),
          dropdownButton = await view.findByRole('button', { name: 'more…' });

      expect(onToggleDropdown).not.toHaveBeenCalled();

      await user.click(dropdownButton);

      expect(onToggleDropdown).toHaveBeenCalled();
    });
  });
});
