/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import { render, fireEvent, within, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxDrawer, { Props } from '../NxDrawer';
import NxButton from '../../NxButton/NxButton';

describe('NxDrawer', function() {
  const minimalProps: Props = {
    open: true,
    onClose: () => {},
    children: 'Drawer Content'
  };

  const quickRender = rtlRender<Props>(NxDrawer, minimalProps);
  const getDrawer = rtlRenderElement(NxDrawer, minimalProps);

  it('renders a dialog element', function () {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const dialog = getDrawer()!;
    expect(dialog.nodeName).toBe('DIALOG');
  });

  it('has a dialog element with aria-modal set to false', function() {
    const dialog = getDrawer();
    expect(dialog).toHaveAttribute('aria-modal', 'false');
  });

  it('renders children nodes within dialog', function() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const drawer = getDrawer({ children: <div data-testid="foo"/> })!;
    expect(within(drawer).getByTestId('foo')).toBeInTheDocument();
  });

  it('merges any passed in className to the nx-drawer dialog', function() {
    const drawerWithAddedClassName = getDrawer({ className: 'foo' });
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const drawer = getDrawer()!;

    expect(drawerWithAddedClassName).toHaveClass('foo');

    for (const cls of Array.from(drawer.classList)) {
      expect(drawerWithAddedClassName).toHaveClass(cls);
    }
  });

  it('includes any passed in attributes to the dialog element', function() {
    const drawer = getDrawer({ id: 'drawer-id', lang: 'en_US' });
    expect(drawer).toHaveAttribute('id', 'drawer-id');
    expect(drawer).toHaveAttribute('lang', 'en_US');
  });

  it('should only set the dialog open attr after the opening animation is completed ' +
  'when the open prop is set to true initially', async function() {
    const { rerender } = quickRender();
    const dialog = screen.getByRole('dialog', { hidden: true });

    expect(dialog).not.toHaveAttribute('open');

    await fireEvent.animationEnd(dialog);

    expect(dialog).toHaveAttribute('open');

    rerender(<NxDrawer open={false} onClose={() => {}} />);

    expect(dialog).not.toHaveAttribute('open');
  });

  it('should only set the dialog open attr after the animation is completed ' +
  'when the drawer is transitioning from open to closed', async function() {
    const { rerender } = quickRender({ open: false });

    const dialog = screen.getByRole('dialog', { hidden: true });
    expect(dialog).not.toHaveAttribute('open');

    rerender(<NxDrawer open={true} onClose={() => {}} />);

    expect(dialog).not.toHaveAttribute('open');

    await fireEvent.animationEnd(dialog);

    expect(dialog).toHaveAttribute('open');
  });

  describe('NxDrawer event listener support', () => {
    it('executes onClose callback when ESC key is pressed', async function() {
      const user = userEvent.setup();
      const mockOnClose = jest.fn();

      quickRender({ onClose: mockOnClose });

      const dialog = screen.getByRole('dialog', { hidden: true });
      await fireEvent.animationEnd(dialog);

      expect(mockOnClose).not.toHaveBeenCalled();

      await user.keyboard('{Escape}');

      expect(mockOnClose).toHaveBeenCalled();
    });

    it('does not execute onClose if a key other than ESC is pressed', async function () {
      const user = userEvent.setup();

      const mockOnClose = jest.fn();

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const drawer = getDrawer({ onClose: mockOnClose })!;

      await fireEvent.animationEnd(drawer);

      await user.keyboard('Tab');
      await user.keyboard('Enter');
      await user.keyboard('q');
      await user.keyboard('Q');

      await fireEvent.animationEnd(drawer);

      expect(mockOnClose).not.toHaveBeenCalled();
    });

    it('executes onCancel when drawer is closed and animation is completed', async function() {
      const mockOnCancel = jest.fn();
      const props = {
        onCancel: mockOnCancel,
        children: (
          <NxDrawer.Header>
            <NxDrawer.HeaderTitle>Title</NxDrawer.HeaderTitle>
          </NxDrawer.Header>
        )
      };

      const { rerender } = quickRender(props);

      const dialog = screen.getByRole('dialog', { hidden: true });
      await fireEvent.animationEnd(dialog);

      expect(mockOnCancel).not.toHaveBeenCalled();

      rerender(<NxDrawer { ...minimalProps } { ...props } open={false} />);

      expect(mockOnCancel).not.toHaveBeenCalled();

      await fireEvent.animationEnd(dialog);

      expect(mockOnCancel).toHaveBeenCalled();
    });

    it('executes onClose when clicked outside of the drawer', async function() {
      const user = userEvent.setup();
      const mockOnClose = jest.fn();

      render(
        <div>
          <div>Outside</div>
          <NxDrawer open={true} onClose={mockOnClose}>
            <NxButton>Inside</NxButton>
          </NxDrawer>
        </div>
      );

      const dialog = screen.getByRole('dialog', { hidden: true });
      await fireEvent.animationEnd(dialog);

      const outsideDiv = screen.getByText('Outside');
      const insideButton = screen.getByRole('button', { name: 'Inside' });

      expect(mockOnClose).not.toHaveBeenCalled();

      await user.click(insideButton);

      expect(mockOnClose).not.toHaveBeenCalled();

      await user.click(outsideDiv);

      expect(mockOnClose).toHaveBeenCalled();
    });
  });

  describe('Header', function() {
    it('does not have a banner role', function() {
      quickRender({
        children: (
          <NxDrawer.Header>
            <NxDrawer.HeaderTitle>Title</NxDrawer.HeaderTitle>
          </NxDrawer.Header>
        )
      });

      expect(screen.queryByRole('banner')).not.toBeInTheDocument();
      expect(screen.getByText('Title')).toBeInTheDocument();
    });

    it('renders close button', async function() {
      quickRender({
        children: (
          <NxDrawer.Header>
            <NxDrawer.HeaderTitle>Title</NxDrawer.HeaderTitle>
          </NxDrawer.Header>
        )
      });

      const dialog = screen.getByRole('dialog', { hidden: true });
      await fireEvent.animationEnd(dialog);

      const closeButton = screen.getByRole('button', { name: /close/i });

      expect(closeButton).toBeInTheDocument();
    });

    it('renders title, subtitle, description with the correct tags', async function() {
      quickRender({
        children: (
          <NxDrawer.Header>
            <NxDrawer.HeaderTitle>Title</NxDrawer.HeaderTitle>
            <NxDrawer.HeaderSubtitle>Subtitle</NxDrawer.HeaderSubtitle>
            <NxDrawer.HeaderDescription>Description</NxDrawer.HeaderDescription>
          </NxDrawer.Header>
        )
      });

      const dialog = screen.getByRole('dialog', { hidden: true });
      await fireEvent.animationEnd(dialog);

      const headerTitle = screen.getByRole('heading', { name: 'Title' });
      const headerSubtitle = screen.getByRole('heading', { name: 'Subtitle' });
      const headerDescription = screen.getByText('Description');

      expect(headerTitle).toBeInTheDocument();
      expect(headerTitle.nodeName).toBe('H2');

      expect(headerSubtitle).toBeInTheDocument();
      expect(headerSubtitle.nodeName).toBe('H3');

      expect(headerDescription).toBeInTheDocument();
      expect(headerDescription.nodeName).toBe('P');
    });

    it('executes onClose when header close button is clicked', async function() {
      const user = userEvent.setup();
      const mockOnClose = jest.fn();

      quickRender({
        onClose: mockOnClose,
        children: (
          <NxDrawer.Header>
            <NxDrawer.HeaderTitle>Hello</NxDrawer.HeaderTitle>
          </NxDrawer.Header>
        )
      });

      const dialog = screen.getByRole('dialog', { hidden: true });
      await fireEvent.animationEnd(dialog);

      const closeButton = screen.getByRole('button', { name: 'Close' });

      expect(mockOnClose).not.toHaveBeenCalled();

      await user.click(closeButton);

      expect(mockOnClose).toHaveBeenCalled();
    });
  });
});
