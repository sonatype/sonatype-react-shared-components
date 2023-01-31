/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { within } from '@testing-library/react';
import { rtlRender, rtlRenderElement, runTimers, userEvent } from '../../../__testutils__/rtlUtils';

import NxList from '../NxList';

describe('NxList', function() {
  const quickRender = rtlRender(NxList, {}),
      renderEl = rtlRenderElement(NxList, {});

  // silence no emptyMessage prop warnings
  beforeAll(function() {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  it('renders a list', async function() {
    const view = quickRender();

    // Make sure the component is updated as the isEmpty state
    // was updated during initially rendering which triggered act() error
    await runTimers();

    expect(view.getByRole('list')).toBeInTheDocument();
  });

  it('sets the specified classnames in addition to the defaults', async function() {
    const el = renderEl({ className: 'foo' }),
        defaultEl = renderEl()!;

    await runTimers();

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('sets the specified attrs', async function() {
    const el = renderEl({ id: 'foo', lang: 'en' });

    await runTimers();

    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('lang', 'en');
  });

  it('sets a ref to the element', async function() {
    const ref = React.createRef<HTMLUListElement>(),
        el = renderEl({ ref });

    await runTimers();

    expect(ref.current).toBe(el);
  });

  it('renders children correctly', function() {
    const children =
        [
          <NxList.Item key="1">Cat</NxList.Item>,
          <NxList.Item key="2">Dog</NxList.Item>
        ],
        view = quickRender({ children }),
        list = view.getByRole('list'),
        listItems = within(list).getAllByRole('listitem');

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(2);
    expect(listItems[0]).toHaveTextContent('Cat');
    expect(listItems[1]).toHaveTextContent('Dog');
  });

  describe('emptyMessage', function() {
    describe('when not provided', function() {
      it('shows the default empty message when there are no children, ' +
        'no error, and not loading', function() {
        // truly empty component
        const { getByRole, rerender } = quickRender();

        expect(getByRole('list')).toHaveTextContent('This list is empty.');
        expect(getByRole('listitem')).toHaveTextContent('This list is empty.');

        // empty list component
        rerender(<NxList>{[]}</NxList>);

        expect(getByRole('list')).toHaveTextContent('This list is empty.');
        expect(getByRole('listitem')).toHaveTextContent('This list is empty.');
      });

      it('does not show the default empty message when there are children', function() {
        const children = <NxList.Item>Cat</NxList.Item>,
            { getByRole } = quickRender({ children });

        expect(getByRole('list')).not.toHaveTextContent('This list is empty.');
      });

      it('does not show the default empty message when loading', function() {
        const { getByRole } = quickRender({ isLoading: true });

        expect(getByRole('list')).not.toHaveTextContent('This list is empty.');
      });

      it('does not show the default empty message when error', function() {
        const retryHandler = jest.fn(),
            { getByRole } = quickRender({ error: 'Error message', retryHandler });

        expect(getByRole('list')).not.toHaveTextContent('This list is empty.');
        expect(getByRole('listitem')).not.toHaveTextContent('This list is empty.');
      });
    });

    describe('when provided', function() {
      it('shows the empty message when there are no children, ' +
        'no error, and not loading', function() {
        // truly empty component
        const { getByRole, rerender } = quickRender({ emptyMessage: 'Empty message' });

        expect(getByRole('list')).toHaveTextContent('Empty message');
        expect(getByRole('listitem')).toHaveTextContent('Empty message');

        // empty list component
        rerender(<NxList emptyMessage={'Empty message'}>{[]}</NxList>);

        expect(getByRole('list')).toHaveTextContent('Empty message');
        expect(getByRole('listitem')).toHaveTextContent('Empty message');
      });

      it('does not show the empty message when there are children', function() {
        const children = <NxList.Item>Cat</NxList.Item>,
            { getByRole } = quickRender({ children, emptyMessage: 'Empty message' });

        expect(getByRole('list')).not.toHaveTextContent('Empty message');
        expect(getByRole('listitem')).not.toHaveTextContent('Empty message');
      });

      it('does not show the empty message when loading', function() {
        const { getByRole } = quickRender({
          emptyMessage: 'Empty message',
          isLoading: true
        });

        expect(getByRole('list')).not.toHaveTextContent('Empty message');
        expect(getByRole('listitem')).not.toHaveTextContent('Empty message');
      });

      it('does not show the empty message when error', function() {
        const retryHandler = jest.fn(),
            { getByRole } = quickRender({
              emptyMessage: 'Empty message',
              error: 'Error message',
              retryHandler
            });

        expect(getByRole('list')).not.toHaveTextContent('Empty message');
        expect(getByRole('listitem')).not.toHaveTextContent('Empty message');
      });
    });
  });

  it('renders the loading spinner when isLoading is set', function() {
    const view = quickRender({ isLoading: true }),
        list = view.getByRole('list'),
        listItem = within(list).getByRole('listitem'),
        spinner = within(listItem).getByRole('status');

    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveTextContent('Loading…');
  });

  describe('error', function() {
    it('renders an error with role="alert" along with default text content', function() {
      const retryHandler = jest.fn(),
          view = quickRender({
            emptyMessage: 'Empty message',
            error: 'Error message',
            retryHandler
          }),
          list = view.getByRole('list'),
          listItem = within(list).getByRole('listitem'),
          error = within(listItem).getByRole('alert');

      expect(error).toBeInTheDocument();
      expect(error).toHaveTextContent('An error occurred loading data. Error message');
    });

    it('renders a retry button if there is an error and retryHandler is set', function() {
      const retryHandler = jest.fn(),
          withoutRetryView = quickRender({ error: 'Error' }),
          withRetryView = quickRender({
            error: 'Error message',
            retryHandler
          });

      expect(withoutRetryView.queryByRole('button', { name: /retry/i })).not.toBeInTheDocument();
      expect(withRetryView.getByRole('button', { name: /retry/i })).toBeInTheDocument();
    });

    it('calls the retryHandler when the retry button is clicked', async function() {
      const user = userEvent.setup(),
          retryHandler = jest.fn(),
          view = quickRender({
            error: 'Error message',
            retryHandler
          }),
          retryButton = view.getByRole('button', { name: /retry/i });

      expect(retryButton).toBeInTheDocument();
      expect(retryHandler).not.toHaveBeenCalled();

      await user.click(retryButton);

      expect(retryHandler).toHaveBeenCalled();
    });
  });
});
