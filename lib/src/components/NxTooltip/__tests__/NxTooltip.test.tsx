/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { within, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { rtlRender } from '../../../__testutils__/rtlUtils';

import NxTooltip from '../NxTooltip';

describe('NxTooltip', function() {
  const minimalProps = {
        children: <div data-testid="foo" />,
        title: 'tip'
      },
      quickRender = rtlRender(NxTooltip, minimalProps);

  beforeEach(function() {
    jest.useFakeTimers();
  });

  // an element containing a11y description text to be added to the child in some tests
  let descriptionEl: HTMLElement;

  beforeEach(function() {
    descriptionEl = document.createElement('div');
    descriptionEl.id = 'descriptionId';
    descriptionEl.textContent = 'Description Text';

    document.body.append(descriptionEl);
  });

  afterEach(function() {
    descriptionEl.remove();
  });

  it('adds specified classes to an element within the tooltip and not to the child', async function() {
    const user = userEvent.setup(),
        view = quickRender({ className: 'foo' }),
        defaultView = quickRender(),
        child = view.getByTestId('foo'),
        defaultChild = defaultView.getByTestId('foo');

    await user.hover(child);
    const tooltip = await screen.findByRole('tooltip'),
        elWithClassName = tooltip.querySelector('.foo')!,
        otherClasses = Array.from(elWithClassName.classList).filter(c => c !== 'foo');

    expect(elWithClassName).toBeInTheDocument();

    await user.hover(defaultChild);
    const defaultTooltip = await screen.findByRole('tooltip');

    for (const cls of otherClasses) {
      expect(defaultTooltip.querySelector(`.${cls}`)).toBeInTheDocument();
    }

    expect(child.querySelector('.foo')).not.toBeInTheDocument();
  });

  it('renders the tooltip open automatically if open is true', async function() {
    quickRender({ open: true });

    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent('tip');
  });

  it('calls onOpen when the tooltip renders by hover but not due to the open prop', async function() {
    const user = userEvent.setup(),
        onOpen = jest.fn(),
        view = quickRender({ onOpen }),
        child = view.getByTestId('foo');

    expect(onOpen).not.toHaveBeenCalled();

    await user.hover(child);
    await waitFor(() => expect(onOpen).toHaveBeenCalledTimes(1));

    quickRender({ open: true, onOpen });

    expect(onOpen).toHaveBeenCalledTimes(1);

    await expect(waitFor(() => expect(onOpen).toHaveBeenCalledTimes(2))).rejects.toThrow('Expected number of calls');
  });

  it('calls onClose when the tooltip stops rendering by hover', async function() {
    const user = userEvent.setup(),
        onClose = jest.fn(),
        view = quickRender({ onClose }),
        child = view.getByTestId('foo');

    expect(onClose).not.toHaveBeenCalled();

    await user.hover(child);

    expect(onClose).not.toHaveBeenCalled();

    await user.unhover(child);

    await waitFor(() => expect(onClose).toHaveBeenCalled());
  });

  describe('when title is an empty string', function() {

    it('renders no tooltip', async function() {
      const user = userEvent.setup(),
          view = quickRender({ title: '' }),
          child = view.getByTestId('foo');

      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

      await user.hover(child);

      await expect(screen.findByRole('tooltip')).rejects.toBeTruthy();
    });

    it('does not affect the accessible name or description of the child', async function() {
      const children = <button aria-describedby="descriptionId">Foo</button>,
          view = quickRender({ title: '', children }),
          button = view.getByRole('button');

      expect(button).toHaveAccessibleName('Foo');
      expect(button).toHaveAccessibleDescription('Description Text');

      // Ensure that nothing changes after waiting for tooltip to initialize
      await expect(waitFor(() => expect(button).not.toHaveAccessibleName('Foo')))
          .rejects.toThrow('accessible name');
      await expect(waitFor(() => expect(button).not.toHaveAccessibleDescription('Description Text')))
          .rejects.toThrow('accessible description');
    });
  });

  describe('when title is a non-empty string', function() {
    it('renders the title as the text content of a tooltip that appears on hover of the child element',
        async function() {
          const user = userEvent.setup(),
              view = quickRender(),
              child = view.getByTestId('foo');

          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

          await user.hover(child);
          const tooltip = await screen.findByRole('tooltip');

          expect(tooltip).toBeInTheDocument();
          expect(tooltip).toHaveTextContent('tip');
        }
    );

    it('does not affect the accessible name of the child', async function() {
      const user = userEvent.setup(),
          children = <button>Foo</button>,
          view = quickRender({ children }),
          button = view.getByRole('button');

      expect(button).toHaveAccessibleName('Foo');

      await user.hover(button);

      expect(button).toHaveAccessibleName('Foo');

      // Ensure that nothing changes after waiting for tooltip to initialize
      await expect(waitFor(() => expect(button).not.toHaveAccessibleName('Foo')))
          .rejects.toThrow('accessible name');
    });

    it('sets the title of the child when the tooltip is not active', async function() {
      const children = <button>Foo</button>,
          childrenWithOwnDescription = <button aria-describedby="descriptionId">Foo</button>,
          view = quickRender({ children }),
          viewWithOwnDescription = quickRender({ children: childrenWithOwnDescription }),
          button = view.getByRole('button'),
          buttonWithOwnDescription = viewWithOwnDescription.getByRole('button');

      // When an element has no aria-describedby but does have a title (and that title isn't being used
      // as the a11y name) the title is used as the a11y description.
      // The waitFor is so the tooltips have time to asynchronously initialize
      await waitFor(() => expect(button).toHaveAccessibleDescription('tip'));
      expect(view.getByTitle('tip')).toBe(button);

      expect(buttonWithOwnDescription).toHaveAccessibleDescription('Description Text');
      expect(viewWithOwnDescription.getByTitle('tip')).toBe(buttonWithOwnDescription);
    });

    it('sets the accessible description but not the title of the child when the tooltip is active',
        async function() {
          const user = userEvent.setup(),
              children = <button>Foo</button>,
              view = quickRender({ children }),
              button = view.getByRole('button');

          await user.hover(button);
          await waitFor(() => expect(button).toHaveAccessibleDescription('tip'));
          expect(button).not.toHaveAttribute('title');
        }
    );

    it('does not override the accessible description if it is already set',
        async function() {
          const user = userEvent.setup(),
              childrenWithOwnDescription = <button aria-describedby="descriptionId">Foo</button>,
              viewWithOwnDescription = quickRender({ children: childrenWithOwnDescription }),
              buttonWithOwnDescription = viewWithOwnDescription.getByRole('button');

          await user.hover(buttonWithOwnDescription);
          expect(buttonWithOwnDescription).toHaveAccessibleDescription('Description Text');
          expect(buttonWithOwnDescription).not.toHaveAttribute('title');

          // Ensure that nothing changes after waiting for tooltip to initialize
          await expect(
              waitFor(() => expect(buttonWithOwnDescription).not.toHaveAccessibleDescription('Description Text'))
          ).rejects.toThrow('accessible description');
          await expect(waitFor(() => expect(buttonWithOwnDescription).toHaveAttribute('title')))
              .rejects.toThrow('title');
        }
    );
  });

  describe('when title is JSX', function() {
    it('renders the title as the content of a tooltip that appears on hover of the child element',
        async function() {
          const user = userEvent.setup(),
              title = <span data-testid="tooltip-content">tiptip</span>,
              view = quickRender({ title }),
              child = view.getByTestId('foo');

          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

          await user.hover(child);
          const tooltip = await screen.findByRole('tooltip');

          expect(tooltip).toBeInTheDocument();
          expect(tooltip).toHaveTextContent('tiptip');
          expect(within(tooltip).getByTestId('tooltip-content')).toHaveTextContent('tiptip');
        }
    );

    it('does not affect the accessible name of the child', async function() {
      const user = userEvent.setup(),
          children = <button>Foo</button>,
          title = <span data-testid="tooltip-content">tiptip</span>,
          view = quickRender({ children, title }),
          button = view.getByRole('button');

      expect(button).toHaveAccessibleName('Foo');

      await user.hover(button);

      expect(button).toHaveAccessibleName('Foo');

      // Ensure that nothing changes after waiting for tooltip to initialize
      await expect(waitFor(() => expect(button).not.toHaveAccessibleName('Foo')))
          .rejects.toThrow('accessible name');
    });

    it('does not set the title or accessible description of the child when not active', async function() {
      const children = <button>Foo</button>,
          title = <span data-testid="tooltip-content">tiptip</span>,
          childrenWithOwnDescription = <button aria-describedby="descriptionId">Foo</button>,
          view = quickRender({ children, title }),
          viewWithOwnDescription = quickRender({ children: childrenWithOwnDescription, title }),
          button = view.getByRole('button'),
          buttonWithOwnDescription = viewWithOwnDescription.getByRole('button');

      expect(button).not.toHaveAccessibleDescription('tiptip');
      expect(view.queryByTitle('tiptip')).not.toBeInTheDocument();

      expect(buttonWithOwnDescription).toHaveAccessibleDescription('Description Text');
      expect(viewWithOwnDescription.queryByTitle('tiptip')).not.toBeInTheDocument();

      // Ensure that nothing changes after waiting for tooltip to initialize
      await expect(waitFor(() => expect(button).toHaveAccessibleDescription('tiptip')))
          .rejects.toThrow('accessible description');
      await expect(waitFor(() => expect(view.queryByTitle('tiptip')).toBeInTheDocument()))
          .rejects.toThrow('null');

      await expect(waitFor(() => expect(buttonWithOwnDescription).not.toHaveAccessibleDescription('Description Text')))
          .rejects.toThrow('accessible description');
      await expect(waitFor(() => expect(viewWithOwnDescription.queryByTitle('tiptip')).toBeInTheDocument()))
          .rejects.toThrow('null');
    });

    it('sets the accessible description but not the title of the child when the tooltip is active',
        async function() {
          const user = userEvent.setup(),
              title = <span data-testid="tooltip-content">tiptip</span>,
              children = <button>Foo</button>,
              view = quickRender({ children, title }),
              button = view.getByRole('button');

          await user.hover(button);
          await waitFor(() => expect(button).toHaveAccessibleDescription('tiptip'));
          expect(button).not.toHaveAttribute('title');
        }
    );

    it('does not override the accessible description if it is already set',
        async function() {
          const user = userEvent.setup(),
              title = <span data-testid="tooltip-content">tiptip</span>,
              childrenWithOwnDescription = <button aria-describedby="descriptionId">Foo</button>,
              viewWithOwnDescription = quickRender({ title, children: childrenWithOwnDescription }),
              buttonWithOwnDescription = viewWithOwnDescription.getByRole('button');

          await user.hover(buttonWithOwnDescription);
          expect(buttonWithOwnDescription).toHaveAccessibleDescription('Description Text');
          expect(buttonWithOwnDescription).not.toHaveAttribute('title');

          await expect(
              waitFor(() => expect(buttonWithOwnDescription).not.toHaveAccessibleDescription('Description Text'))
          ).rejects.toThrow('accessible description');
          await expect(waitFor(() => expect(buttonWithOwnDescription).toHaveAttribute('title')))
              .rejects.toThrow('title');
        }
    );
  });
});
