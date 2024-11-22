/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { RefAttributes } from 'react';
import NxStatefulSearchDropdown from '../NxStatefulSearchDropdown';
import NxForm from '../../../NxForm/NxForm';
import { StatefulProps } from '../../types';
import { rtlRender, rtlRenderElement, runTimers, userEvent } from '../../../../__testutils__/rtlUtils';
import { within, render } from '@testing-library/react';

describe('NxStatefulSearchDropdown', function() {
  type PropsWithRef = StatefulProps<string | number> & RefAttributes<HTMLDivElement>;
  const minimalProps: StatefulProps<string | number> = {
        defaultSearchText: '',
        onSearch: () => {},
        matches: [],
        onSelect: () => {}
      },
      renderEl = rtlRenderElement<PropsWithRef>(NxStatefulSearchDropdown, minimalProps),
      quickRender = rtlRender<PropsWithRef>(NxStatefulSearchDropdown, minimalProps),
      matches = [
        { id: '1', displayName: 'One' },
        { id: '2', displayName: 'Two' }
      ];

  it('renders a top-level element with role="group"', function () {
    expect(renderEl()).toHaveAttribute('role', 'group');
  });

  it('adds additional specified classnames', function() {
    const el = renderEl()!;
    const customEl = renderEl({ className: 'foo' });

    expect(customEl).toHaveClass('foo');

    for (const cls of Array.from(el.classList)) {
      expect(customEl).toHaveClass(cls);
    }
  });

  it('adds additional specified attributes', function() {
    const el = renderEl({ id: 'foo', title: 'bar' });

    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('title', 'bar');
  });

  it('adds a specified ref', function() {
    const ref = React.createRef<HTMLDivElement>(),
        renderedEl = renderEl({ ref });

    expect(ref.current).toBe(renderedEl);
  });

  it('has an input field with role="searchbox"', function() {
    const el = quickRender(),
        input = el.getByRole('searchbox');

    expect(input).toBeInTheDocument();
  });

  it('initially passes the searchbox text value as the searchText', function() {
    const el = quickRender({ defaultSearchText: 'foo' });
    expect(el.getByRole('searchbox')).toHaveValue('foo');
  });

  it('passes the empty string as the searchText if searchbox text value is not specified', function() {
    const el = quickRender();
    expect(el.getByRole('searchbox')).toHaveValue('');
  });

  it('sets the searchText as the value of the searchbox', async function() {
    const component = quickRender(),
        input = component.getByRole('searchbox'),
        user = userEvent.setup();

    await user.type(input, 'a');

    expect(input).toHaveValue('a');

    await user.clear(input);
    await user.type(input, 'b');

    expect(input).toHaveValue('b');
  });

  it('clears the searchText and fires its own onSelect when the dropdown\'s onSelect is fired', async function() {
    const onSelect = jest.fn(),
        el = quickRender({ onSelect, matches: [{ id: 1, displayName: 'item 1' }] }),
        input = el.getByRole('searchbox'),
        user = userEvent.setup();

    await user.type(input, '1');
    expect(input).toHaveValue('1');
    expect(onSelect).not.toHaveBeenCalled();

    const menuItem = el.getByRole('menuitem', { name: 'item 1' });
    await user.click(menuItem);

    expect(onSelect).toHaveBeenCalledWith(
        { id: 1, displayName: 'item 1' },
        expect.objectContaining({ target: menuItem })
    );
    expect(input).toHaveValue('');
  });

  it('calls onSearch whenever the input\'s onChange event fires with a value that differs after trimming, ' +
  'passing the trimmed value', async function() {
    const user = userEvent.setup(),
        onSearch = jest.fn(),
        el = quickRender({ defaultSearchText: ' foo ', onSearch }),
        input = el.getByRole('searchbox') as HTMLInputElement;

    expect(onSearch).not.toHaveBeenCalled();

    await user.type(input, '[Backspace]', { initialSelectionStart: 5, initialSelectionEnd: 5 });
    await user.type(input, '[Backspace]', { initialSelectionStart: 1, initialSelectionEnd: 1 });
    await user.type(input, '[Space]', { initialSelectionStart: 0, initialSelectionEnd: 0 });
    await user.type(input, '[Space]', { initialSelectionStart: 1, initialSelectionEnd: 1 });
    await user.type(input, '[Space]', { initialSelectionStart: 5, initialSelectionEnd: 5 });

    expect(onSearch).not.toHaveBeenCalled();

    await user.type(input, '[Backspace]', { initialSelectionStart: 1, initialSelectionEnd: 3 });
    expect(onSearch).toHaveBeenCalledWith('oo');

    await user.type(input, 'o', { initialSelectionStart: 5, initialSelectionEnd: 5 });
    expect(onSearch).toHaveBeenCalledWith('oo o');
  });

  it('passes the disabled prop to the searchbox and buttons', async function() {
    expect(quickRender().getByRole('searchbox')).not.toBeDisabled();
    expect(quickRender({ disabled: undefined }).getByRole('searchbox')).not.toBeDisabled();
    expect(quickRender({ disabled: null }).getByRole('searchbox')).not.toBeDisabled();
    expect(quickRender({ disabled: false }).getByRole('searchbox')).not.toBeDisabled();

    expect(quickRender({ disabled: true }).getByRole('searchbox')).toBeDisabled();

    expect(quickRender({ disabled: true, matches: [{ id: '1', displayName: '1' }]}).getByRole('searchbox'))
        .toBeDisabled();

    let el = quickRender({ disabled: true, matches: [{ id: '1', displayName: '1' }]});
    expect(el.getByRole('menuitem', { name: /1/i, hidden: true })).toBeDisabled();

    el = quickRender({ disabled: false, matches: [{ id: '1', displayName: '1' }]});
    expect(el.getByRole('menuitem', { name: /1/i, hidden: true })).not.toBeDisabled();
  });

  it('renders dropdown with role="alert" and empty text if there are no matching elements', function() {
    const el = quickRender({ defaultSearchText: 'foo', matches: []});

    expect(el.getByRole('alert')).toBeInTheDocument();
    expect(el.getByRole('alert')).toHaveTextContent('No Results Found');
  });

  it('sets the empty message from the emptyMessage prop', function() {
    const el = quickRender({ defaultSearchText: 'foo', emptyMessage: 'asdfasdf' });

    expect(el.getByRole('alert')).toHaveTextContent('asdfasdf');
  });

  it('renders dropdown with role="menu" if there are matching elements', function() {
    const el = quickRender({ defaultSearchText: 'foo', matches: [{ id: '1', displayName: '1' }]});

    expect(el.getByRole('menu')).toBeInTheDocument();
  });

  it('does not render a menu if search text is empty or disabled is true', function() {
    expect(quickRender().queryByRole('menu')).not.toBeInTheDocument();
    expect(quickRender({ defaultSearchText: 'foo', disabled: true }).queryByRole('menu')).not.toBeInTheDocument();
  });

  it('sets aria-live on the dropdown menu to "polite"', function() {
    expect(quickRender().getByRole('alert', { hidden: true })).toHaveAttribute('aria-live', 'polite');
  });

  it('sets aria-busy on the dropdown menu if loading is true', function() {
    expect(quickRender({ defaultSearchText: 'test', matches }).getByRole('menu'))
        .toHaveAttribute('aria-busy', 'false');
    expect(quickRender({ defaultSearchText: 'test', matches, loading: true }).getByRole('alert'))
        .toHaveAttribute('aria-busy', 'true');
  });

  it('sets the alert role on the dropdown menu when it is in loading or empty states', function() {
    expect(quickRender({ defaultSearchText: 'asdf', matches: [] }).getByRole('alert')).toBeInTheDocument();
    expect(quickRender({ defaultSearchText: 'asdf', loading: true }).getByRole('alert')).toBeInTheDocument();
  });

  it('sets an id on the dropdown and references it in the searchbox\'s aria-controls', function() {
    const el = quickRender({ defaultSearchText: 'foo' }),
        filterInput = el.getByRole('searchbox'),
        dropdown = el.getByRole('alert');

    expect(dropdown).toHaveAttribute('id');
    expect(filterInput).toHaveAttribute('aria-controls', dropdown.getAttribute('id'));
  });

  it('sets aria-haspopup on the searchbox', function() {
    const el = quickRender({ defaultSearchText: 'foo' }),
        filterInput = el.getByRole('searchbox');

    expect(filterInput).toHaveAttribute('aria-haspopup', 'menu');
  });

  it('shows loading text on the dropdown when loading prop is true', function() {
    const el = quickRender({ defaultSearchText: 'foo', loading: true }),
        alert = el.getByRole('alert');

    expect(within(alert).getByRole('status')).toHaveTextContent('Loading…');
  });

  it('does not set a role on dropdown menu when error prop is provided', function() {
    const el = quickRender({ defaultSearchText: 'foo', error: 'bar' });

    expect(el.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('shows error text when the error prop is provided', function() {
    const el = quickRender({ defaultSearchText: 'foo', error: 'bar' });

    expect(el.getByRole('alert')).toHaveTextContent('bar');
  });

  it('fires onSearch with the trimmed searchbox text value', async function() {
    const onSearch = jest.fn(),
        user = userEvent.setup(),
        el = quickRender({ defaultSearchText: 'foo', error: 'bar', onSearch }),
        input = el.getByRole('searchbox'),
        retryButton = el.getByRole('button', { name: 'Retry' });

    expect(onSearch).not.toHaveBeenCalled();

    await user.click(retryButton);

    expect(onSearch).toHaveBeenCalledWith('foo');

    await user.clear(input);
    await user.type(input, ' a ');
    await user.click(retryButton);

    expect(onSearch).toHaveBeenCalledWith('a');
  });

  it('renders buttons with type "button" for each match', function() {
    const el = quickRender({ matches, defaultSearchText: 'foo' }),
        dropdown = el.getByRole('menu');

    expect(dropdown.children.length).toBe(2);
    expect(within(dropdown).getByRole('menuitem', { name: 'One' })).toHaveAttribute('type', 'button');
    expect(within(dropdown).getByRole('menuitem', { name: 'Two' })).toHaveAttribute('type', 'button');
  });

  it('sets an onClick handler on the menu button that fires onSelect with the match object', async function() {
    const onSelect = jest.fn(),
        user = userEvent.setup(),
        el = quickRender({ matches, onSelect, defaultSearchText: 'foo' });

    expect(onSelect).not.toHaveBeenCalled();

    const menuItem = el.getByRole('menuitem', { name: 'Two' });

    await user.click(menuItem);

    expect(onSelect).toHaveBeenCalledWith(
        { id: '2', displayName: 'Two' },
        expect.objectContaining({ target: menuItem })
    );
  });

  it('calls onSearch with the current trimmed searchbox text if focus enters the  ' +
      'component from elsewhere on the page while there is an error', function() {
    const onSearch = jest.fn(),
        el = quickRender({ defaultSearchText: 'foo ', error: 'bar', onSearch }),
        input = el.getByRole('searchbox');

    const anotherElement = document.createElement('button');
    document.body.append(anotherElement);
    anotherElement.focus();

    expect(onSearch).not.toHaveBeenCalled();

    input.focus();

    expect(onSearch).toHaveBeenCalledWith('foo');

    anotherElement.remove();
  });

  it('does not call onSearch if focus moves within the component while there is an error', function() {
    const onSearch = jest.fn(),
        props = { defaultSearchText: 'foo', onSearch },
        el = quickRender(props),
        filterInput = el.getByRole('searchbox');

    expect(onSearch).not.toHaveBeenCalled();

    // get focus into the component before we set the error
    filterInput.focus();
    expect(onSearch).not.toHaveBeenCalled();

    el.rerender(<NxStatefulSearchDropdown { ...minimalProps } { ...props} error={'err'} />);
    expect(onSearch).not.toHaveBeenCalled();

    const retryButton = el.getByRole('button', { name: /retry/i });
    retryButton.focus();
    expect(onSearch).not.toHaveBeenCalled();

    filterInput.focus();
    expect(onSearch).not.toHaveBeenCalled();
  });

  it('does not call onSearch if focus moves into the component from an outside window while there is an error',
      function() {
        const onSearch = jest.fn(),
            el = quickRender({ defaultSearchText: 'foo', onSearch }),
            filterInput = el.getByRole('searchbox');

        expect(onSearch).not.toHaveBeenCalled();

        // get focus into the component before we set the error
        filterInput.focus();
        expect(onSearch).not.toHaveBeenCalled();

        el.rerender(<NxStatefulSearchDropdown { ...minimalProps } error={'err'} />);
        expect(onSearch).not.toHaveBeenCalled();

        (document.activeElement! as HTMLElement).blur();
        expect(onSearch).not.toHaveBeenCalled();

        filterInput.focus();
        expect(onSearch).not.toHaveBeenCalled();
      }
  );

  it('should clear search when Escape key is pressed on searchbox or dropdownMenu', async function() {
    const props = { defaultSearchText: 'One', matches },
        el = quickRender(props),
        filterInput = el.getByRole('searchbox'),
        dropdownMenu = el.getByRole('menu'),
        user = userEvent.setup();

    filterInput.focus();
    await user.keyboard('{Escape}');

    expect(filterInput).toHaveValue('');

    el.rerender(<NxStatefulSearchDropdown { ...minimalProps } { ...props } />);

    dropdownMenu.focus();
    await user.keyboard('{Escape}');

    expect(filterInput).toHaveValue('');
  });

  it('should clear search when close button on searchbox is clicked', async function() {
    const onSearch = jest.fn(),
        el = quickRender({ defaultSearchText: 'One', matches, onSearch });

    await runTimers();

    const closeButton = el.getByRole('button', { name: /clear search/i }),
        user = userEvent.setup();

    expect(onSearch).not.toHaveBeenCalled();
    await user.click(closeButton);

    expect(onSearch).toHaveBeenCalledWith('');
  });

  it('does not submit form when close button on searchbox is clicked', async function() {
    const onSubmit = jest.fn(),
        view = render(
          <NxForm onSubmit={onSubmit} showValidationErrors={false} >
            <NxStatefulSearchDropdown { ...minimalProps } defaultSearchText="One" />
          </NxForm>
        );

    await runTimers();

    const clearBtn = view.getByRole('button', { name: 'Clear search' }),
        user = userEvent.setup();

    expect(onSubmit).not.toHaveBeenCalled();

    await user.click(clearBtn);
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
