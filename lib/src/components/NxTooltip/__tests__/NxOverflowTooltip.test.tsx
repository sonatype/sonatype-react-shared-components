/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { screen, within } from '@testing-library/react';

import { rtlRender, userEvent, runTimers } from '../../../__testutils__/rtlUtils';
import NxOverflowTooltip, { OverflowTooltipProps as Props } from '../NxOverflowTooltip';

describe('NxOverflowTooltip', function() {
  const minimalProps = {
        children: <div data-testid="child">Bar</div>
      },
      quickRender = rtlRender<Props>(NxOverflowTooltip, minimalProps);

  // Mock layout methods that NxOverflowTooltip relies on in order to make it think overflow is occurring,
  // so we can test details of the tooltip. Proper tests of the overflow logic itself must be (and are)
  // done in functional tests
  beforeEach(function() {
    jest.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      x: 0,
      y: 0,
      width: 1,
      height: 1,
      top: 0,
      right: 1,
      bottom: 1,
      left: 0
    } as DOMRect);

    // mock that text extends 1px farther than container
    jest.spyOn(Range.prototype, 'getBoundingClientRect').mockReturnValue({
      x: 0,
      y: 0,
      width: 2,
      height: 1,
      top: 0,
      right: 2,
      bottom: 1,
      left: 0
    } as DOMRect);
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

  it('renders the children', function() {
    expect(quickRender().getByTestId('child')).toBeInTheDocument();
  });

  it('adds specified classes to an element within the tooltip and not to the child', async function() {
    const user = userEvent.setup(),
        view = quickRender({ className: 'foo' }),
        defaultView = quickRender(),
        child = view.getByTestId('child'),
        defaultChild = defaultView.getByTestId('child');

    await user.hover(child);
    await runTimers();

    const tooltip = screen.getByRole('tooltip'),
        elWithClassName = tooltip.querySelector('.foo')!,
        otherClasses = Array.from(elWithClassName.classList).filter(c => c !== 'foo');

    expect(elWithClassName).toBeInTheDocument();

    await user.hover(defaultChild);
    await runTimers();

    const defaultTooltip = screen.getByRole('tooltip');

    for (const cls of otherClasses) {
      expect(defaultTooltip.querySelector(`.${cls}`)).toBeInTheDocument();
    }

    expect(child.querySelector('.foo')).not.toBeInTheDocument();
  });

  it('calls onOpen when the tooltip renders by hover', async function() {
    const user = userEvent.setup(),
        onOpen = jest.fn(),
        view = quickRender({ onOpen }),
        child = view.getByTestId('child');

    expect(onOpen).not.toHaveBeenCalled();

    await user.hover(child);
    await runTimers();

    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when the tooltip stops rendering by hover', async function() {
    const user = userEvent.setup(),
        onClose = jest.fn(),
        view = quickRender({ onClose }),
        child = view.getByTestId('child');

    expect(onClose).not.toHaveBeenCalled();

    await user.hover(child);
    await runTimers();

    expect(onClose).not.toHaveBeenCalled();

    await user.unhover(child);
    await runTimers();

    expect(onClose).toHaveBeenCalled();
  });

  describe('when the title is not specified', function() {
    it('renders the element\'s JSX text content as the tooltip text', async function() {
      const user = userEvent.setup(),
          view = quickRender(),
          child = view.getByTestId('child');

      await user.hover(child);
      await runTimers();

      expect(screen.getByRole('tooltip')).toHaveTextContent(/^Bar$/);
    });

    it('does not affect the accessible name of the child', async function() {
      const user = userEvent.setup(),
          children = <button>Foo</button>,
          view = quickRender({ children }),
          button = view.getByRole('button');

      expect(button).toHaveAccessibleName('Foo');

      await user.hover(button);
      await runTimers();

      expect(button).toHaveAccessibleName('Foo');
    });

    it('sets the accessible description but not the title of the child when the tooltip is active',
        async function() {
          const user = userEvent.setup(),
              children = <button>Foo</button>,
              view = quickRender({ children }),
              button = view.getByRole('button');

          await user.hover(button);
          await runTimers();

          expect(button).toHaveAccessibleDescription('Foo');
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
          await runTimers();

          expect(buttonWithOwnDescription).toHaveAccessibleDescription('Description Text');
          expect(buttonWithOwnDescription).not.toHaveAttribute('title');
        }
    );
  });

  describe('when title is a non-empty string', function() {
    const quickRender = rtlRender<Props>(NxOverflowTooltip, { ...minimalProps, title: 'tip' });

    it('renders the title as the text content of a tooltip that appears on hover of the child element',
        async function() {
          const user = userEvent.setup(),
              view = quickRender(),
              child = view.getByTestId('child');

          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

          await user.hover(child);
          await runTimers();

          const tooltip = screen.getByRole('tooltip');

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
      await runTimers();

      expect(button).toHaveAccessibleName('Foo');
    });

    it('sets the title of the child when the tooltip is not active', async function() {
      const children = <button>Foo</button>,
          childrenWithOwnDescription = <button aria-describedby="descriptionId">Foo</button>,
          view = quickRender({ children }),
          viewWithOwnDescription = quickRender({ children: childrenWithOwnDescription }),
          button = view.getByRole('button'),
          buttonWithOwnDescription = viewWithOwnDescription.getByRole('button');

      await runTimers();

      // When an element has no aria-describedby but does have a title (and that title isn't being used
      // as the a11y name) the title is used as the a11y description.
      expect(button).toHaveAccessibleDescription('tip');
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
          await runTimers();

          expect(button).toHaveAccessibleDescription('tip');
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
          await runTimers();

          expect(buttonWithOwnDescription).toHaveAccessibleDescription('Description Text');
          expect(buttonWithOwnDescription).not.toHaveAttribute('title');
        }
    );
  });

  describe('when title is JSX', function() {
    const quickRender = rtlRender<Props>(NxOverflowTooltip, {
      ...minimalProps,
      title: <span data-testid="tooltip-content">tiptip</span>
    });

    it('renders the title as the content of a tooltip that appears on hover of the child element',
        async function() {
          const user = userEvent.setup(),
              view = quickRender(),
              child = view.getByTestId('child');

          await runTimers();

          expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

          await user.hover(child);
          await runTimers();

          const tooltip = await screen.findByRole('tooltip');

          expect(tooltip).toBeInTheDocument();
          expect(tooltip).toHaveTextContent('tiptip');
          expect(within(tooltip).getByTestId('tooltip-content')).toHaveTextContent('tiptip');
        }
    );

    it('does not affect the accessible name of the child', async function() {
      const user = userEvent.setup(),
          children = <button>Foo</button>,
          view = quickRender({ children }),
          button = view.getByRole('button');

      await runTimers();

      expect(button).toHaveAccessibleName('Foo');

      await user.hover(button);
      await runTimers();

      expect(button).toHaveAccessibleName('Foo');
    });

    it('does not set the title or accessible description of the child when not active', async function() {
      const children = <button>Foo</button>,
          childrenWithOwnDescription = <button aria-describedby="descriptionId">Foo</button>,
          view = quickRender({ children }),
          viewWithOwnDescription = quickRender({ children: childrenWithOwnDescription }),
          button = view.getByRole('button'),
          buttonWithOwnDescription = viewWithOwnDescription.getByRole('button');

      await runTimers();

      expect(button).not.toHaveAccessibleDescription('tiptip');
      expect(view.queryByTitle('tiptip')).not.toBeInTheDocument();

      expect(buttonWithOwnDescription).toHaveAccessibleDescription('Description Text');
      expect(viewWithOwnDescription.queryByTitle('tiptip')).not.toBeInTheDocument();
    });

    it('sets the accessible description but not the title of the child when the tooltip is active',
        async function() {
          const user = userEvent.setup(),
              children = <button>Foo</button>,
              view = quickRender({ children }),
              button = view.getByRole('button');

          await user.hover(button);
          await runTimers();

          expect(button).toHaveAccessibleDescription('tiptip');
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
          await runTimers();

          expect(buttonWithOwnDescription).toHaveAccessibleDescription('Description Text');
          expect(buttonWithOwnDescription).not.toHaveAttribute('title');
        }
    );
  });
});
