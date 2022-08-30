/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React, { useState } from 'react';

import { render, fireEvent, within, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxDrawer, { Props } from '../NxDrawer';
import NxButton from '../../NxButton/NxButton';
import { act } from 'react-dom/test-utils';

describe('NxDrawer', function() {
  const minimalProps: Props = {
    onCancel: () => {},
    children: 'Drawer Content'
  };

  const quickRender = rtlRender(NxDrawer, minimalProps);
  const getDrawer = rtlRenderElement(NxDrawer, minimalProps);

  it('renders <dialog> with class nx-drawer containing nx-drawer__animation-wrapper > nx-drawer__panel', function () {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const dialog = getDrawer()!;
    expect(dialog.nodeName).toBe('DIALOG');
    expect(dialog).toHaveClass('nx-drawer');
    expect(dialog.children[0]).toHaveClass('nx-drawer__animation-wrapper');
    expect(dialog.children[0].children[0]).toHaveClass('nx-drawer__panel');
  });

  it('renders children nodes within nx-drawer__panel', function() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const drawer = getDrawer({ children: <div data-testid="foo"/> })!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const panel = drawer.querySelector<HTMLDivElement>('.nx-drawer__panel')!;
    expect(within(panel).getByTestId('foo')).toBe(panel.children[0]);
  });

  it('merges any passed in className to the nx-drawer dialog', function() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const drawer = quickRender({ className: 'foo' });
    const dialog = drawer.getByRole('dialog', { hidden: true });
    expect(dialog).toHaveClass('foo');
  });

  it('includes any passed in attributes to the dialog element', function() {
    const drawer = getDrawer({ id: 'drawer-id', lang: 'en_US' });

    expect(drawer).toHaveAttribute('id', 'drawer-id');
    expect(drawer).toHaveAttribute('lang', 'en_US');
  });

  it('adds the nx-drawer--narrow class when the narrow variant prop is specified', function() {
    const drawer = getDrawer({ variant: 'narrow' });
    expect(drawer).toHaveClass('nx-drawer--narrow');
  });

  describe('NxDrawer event listener support', () => {
    // const createEvent = (key = 'Escape') => ({
    //   key,
    //   stopPropagation: jest.fn(),
    //   nativeEvent: {
    //     stopImmediatePropagation: jest.fn()
    //   }
    // });

    it('executes onCancel callback when pressing ESC key', function() {
      const mockOnCancel = jest.fn();

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      getDrawer({ onCancel: mockOnCancel })!;

      const dialog = screen.getByRole('dialog', { hidden: true });

      expect(mockOnCancel).not.toHaveBeenCalled();

      fireEvent.keyDown(dialog, { key: 'Escape' });

      expect(dialog.querySelector('.nx-drawer__animation-wrapper')).toHaveClass('nx-drawer__animation-wrapper--close');

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const animationWrapper = dialog.querySelector('.nx-drawer__animation-wrapper')!;

      fireEvent.animationEnd(animationWrapper);

      expect(mockOnCancel).toHaveBeenCalled();
    });

    it('executes onCancel callback ONLY when pressing ESC key', async function () {
      const user = userEvent.setup();

      const mockCallBack = jest.fn();

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const drawer = getDrawer({ onCancel: mockCallBack })!;

      await user.keyboard('Tab');
      await user.keyboard('Enter');
      await user.keyboard('q');
      await user.keyboard('Q');

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const animationWrapper = drawer.querySelector('.nx-drawer__animation-wrapper')!;
      fireEvent.animationEnd(animationWrapper);

      expect(mockCallBack).not.toHaveBeenCalled();
    });

    it('executes onCancel when clicked outside of the drawer', function() {
      const mockOnCancel = jest.fn();

      const map: any = {};

      const addEventListenerRef = document.addEventListener;

      document.addEventListener = jest.fn((e: string, cb: () => void) => {
        map[e] = cb;
      }) as jest.Mock;

      render(
        <div>
          <NxButton>Outside</NxButton>

          <NxDrawer onCancel={mockOnCancel}>
            <NxButton>Inside</NxButton>
          </NxDrawer>
        </div>
      );

      const outsideButton = screen.getByRole('button', { name: 'Outside' });
      const insideButton = screen.getByRole('button', { name: 'Inside', hidden: true });
      const dialog = screen.getByRole('dialog', { hidden: true });

      expect(mockOnCancel).not.toHaveBeenCalled();

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const animationWrapper = dialog.querySelector('.nx-drawer__animation-wrapper')!;

      map.click({ target: insideButton });

      fireEvent.animationEnd(animationWrapper);

      expect(mockOnCancel).not.toHaveBeenCalled();

      map.click({ target: outsideButton });

      fireEvent.animationEnd(animationWrapper);

      expect(mockOnCancel).toHaveBeenCalled();

      document.addEventListener = addEventListenerRef;
    });
  });

  it('moves focus back to the previously focused element when closed', async function() {
    const user = userEvent.setup();

    const Fixture = () => {
      const [isOpen, setIsOpen] = useState(false);

      const handleClick = () => setIsOpen(true);

      return (
        <>
          <NxButton type="button" onClick={handleClick}>Open</NxButton>
          {
            isOpen && (
              <>
                <h2>Hello</h2>
                <NxDrawer onCancel={jest.fn()}>
                  <NxDrawer.Header>
                    <NxDrawer.Header.Title>Title</NxDrawer.Header.Title>
                  </NxDrawer.Header>
                </NxDrawer>
              </>
            )
          }
        </>
      );
    };

    render(<Fixture />);

    expect(screen.queryByRole('dialog', { hidden: true })).not.toBeInTheDocument();

    const openButton = screen.getByRole('button', { name: 'Open' });
    expect(openButton).toBeInTheDocument();

    openButton.focus();

    expect(document.activeElement).toBe(openButton);

    await user.click(openButton);

    const heading = screen.getByRole('heading', { name: 'Hello' });
    expect(heading).toBeInTheDocument();

    const dialog = screen.getByRole('dialog', { hidden: true });
    const cancelButton = screen.getByRole('button', { name: 'Close', hidden: true });

    await user.click(cancelButton);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const animationWrapper = dialog.querySelector('.nx-drawer__animation-wrapper')!;

    fireEvent.animationEnd(animationWrapper);

    expect(document.activeElement).toBe(cancelButton);
  });

  describe('NxDrawer Header', function() {
    it('renders cancel button', function() {
      quickRender({
        children: (
          <NxDrawer.Header>
            <NxDrawer.Header.Title>Title</NxDrawer.Header.Title>
          </NxDrawer.Header>
        )
      });

      const cancelButton = screen.getByRole('button', { hidden: true, name: /close/i });

      expect(cancelButton).toBeInTheDocument();
      expect(cancelButton).toHaveClass('nx-drawer-header__cancel-button');
    });

    it('renders title, subtitle, description with the correct tags', function() {
      quickRender({
        children: (
          <NxDrawer.Header>
            <NxDrawer.Header.Title>Title</NxDrawer.Header.Title>
            <NxDrawer.Header.Subtitle>Subtitle</NxDrawer.Header.Subtitle>
            <NxDrawer.Header.Description>Description</NxDrawer.Header.Description>
          </NxDrawer.Header>
        )
      });

      const headerTitle = screen.getByRole('heading', { name: 'Title', hidden: true });
      const headerSubtitle = screen.getByRole('heading', { name: 'Subtitle', hidden: true });
      const headerDescription = screen.getByText('Description');

      expect(headerTitle).toBeInTheDocument();
      expect(headerTitle.nodeName).toBe('H2');

      expect(headerSubtitle).toBeInTheDocument();
      expect(headerSubtitle.nodeName).toBe('H3');

      expect(headerDescription).toBeInTheDocument();
      expect(headerDescription.nodeName).toBe('P');
    });

    it('renders title, subtitle, description with the correct classnames', function() {
      quickRender({
        children: (
          <NxDrawer.Header>
            <NxDrawer.Header.Title>Title</NxDrawer.Header.Title>
            <NxDrawer.Header.Subtitle>Subtitle</NxDrawer.Header.Subtitle>
            <NxDrawer.Header.Description>Description</NxDrawer.Header.Description>
          </NxDrawer.Header>
        )
      });

      const headerTitle = screen.getByRole('heading', { name: 'Title', hidden: true });
      const headerSubtitle = screen.getByRole('heading', { name: 'Subtitle', hidden: true });
      const headerDescription = screen.getByText('Description');

      expect(headerTitle).toHaveClass('nx-drawer-header__title');
      expect(headerSubtitle).toHaveClass('nx-drawer-header__subtitle');
      expect(headerDescription).toHaveClass('nx-drawer-header__description');
    });

    it('executes onCancel when header cancel button is clicked', async function() {
      const user = userEvent.setup();

      const mockOnCancel = jest.fn();

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const drawer = getDrawer({
        onCancel: mockOnCancel,
        children: (
          <NxDrawer.Header>
            <NxDrawer.Header.Title>Hello</NxDrawer.Header.Title>
          </NxDrawer.Header>
        )
      })!;

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const cancelButton = screen.getByRole('button', { hidden: true, name: 'Close' })!;

      expect(cancelButton).toBeInTheDocument();

      expect(mockOnCancel).not.toHaveBeenCalled();

      await act(async () => {
        await user.click(cancelButton);

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const animationWrapperEl = drawer.querySelector('.nx-drawer__animation-wrapper')!;

        expect(animationWrapperEl).toHaveClass('nx-drawer__animation-wrapper--close');

        fireEvent.animationEnd(animationWrapperEl);
      });

      expect(mockOnCancel).toHaveBeenCalled();

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});
