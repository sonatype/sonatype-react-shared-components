/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import { act } from 'react-dom/test-utils';

import { render, fireEvent, within } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxDrawer, { Props } from '../NxDrawer';
import NxButton from '../../NxButton/NxButton';
import { NxFooter } from '../../SimpleComponents';
//import NxCloseButton from '../../NxCloseButton/NxCloseButton';

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
    expect(dialog?.nodeName).toBe('DIALOG');
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
    const defaultMatchMedia = window.matchMedia;

    beforeEach(function() {
      window.matchMedia = () => ({ matches: true }) as MediaQueryList;
    });

    afterEach(function() {
      window.matchMedia = defaultMatchMedia;
    });

    // const createEvent = (key = 'Escape') => ({
    //   key,
    //   stopPropagation: jest.fn(),
    //   nativeEvent: {
    //     stopImmediatePropagation: jest.fn()
    //   }
    // });

    it('executes onCancel callback when pressing ESC key', function() {
      const mockOnCancel = jest.fn();

      act(() => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        getDrawer({ onCancel: mockOnCancel })!;
      });

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

      document.addEventListener = jest.fn((e: string, cb: () => void) => {
        map[e] = cb;
      }) as jest.Mock;

      act(() => {
        render(
          <div>
            <NxButton>Outside</NxButton>

            <NxDrawer onCancel={mockOnCancel}>
              <NxButton>Inside</NxButton>
            </NxDrawer>
          </div>
        );
      });

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
    });

    it('executes onCancel when clicked on the shadow of the drawer', async function() {
      const user = userEvent.setup();

      const mockOnCancel = jest.fn();

      const map: any = {};

      document.addEventListener = jest.fn((e: string, cb: () => void) => {
        map[e] = cb;
      }) as jest.Mock;

      act(() => {
        render(
          <div>
            <NxDrawer onCancel={mockOnCancel}>
              <NxDrawer.Header>
                Header
              </NxDrawer.Header>
              <NxButton>Inside</NxButton>
            </NxDrawer>
          </div>
        );
      });

      const dialog = screen.getByRole('dialog', { hidden: true });
      const insideButton = screen.getByRole('button', { name: 'Inside', hidden: true });

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const animationWrapper = dialog.querySelector('.nx-drawer__animation-wrapper')!;

      expect(mockOnCancel).not.toHaveBeenCalled();

      await user.click(insideButton);

      fireEvent.animationEnd(animationWrapper);

      expect(mockOnCancel).not.toHaveBeenCalled();

      await user.click(dialog);
      fireEvent.animationEnd(animationWrapper);

      expect(mockOnCancel).toHaveBeenCalled();
    });
  });

  // it('calls onCancel when prefers-reduced-motion is false, nx-drawer--open is not applied,' +
  //   'and transitionEnd event is called  ', async function() {
  //   window.matchMedia = () => ({ matches: false }) as MediaQueryList;

  //   const mockCallback = jest.fn();

  //   const escapeEvent = {
  //     key: 'Escape',
  //     stopPropagation: jest.fn(),
  //     nativeEvent: {
  //       stopImmediatePropagation: jest.fn()
  //     }
  //   };

  //   const component = render(
  //     <NxDrawer data-testid="nx-drawer" onCancel={mockCallback}>
  //       <NxDrawer.Header>
  //         <NxDrawer.Header.Title>
  //           Hello
  //         </NxDrawer.Header.Title>
  //       </NxDrawer.Header>
  //     </NxDrawer>);

  //   //const dialog = component.find('dialog.nx-drawer');
  //   const dialog = component.getByTestId('nx-drawer');

  //   // nx-drawer--open is added after it is mounted.
  //   //expect(dialog.getDOMNode().classList.contains('nx-drawer--open')).toBe(true);
  //   expect(dialog).toHaveClass('nx-drawer--open');

  //   //component.simulate('transitionEnd');
  //   await fireEvent(dialog, new Event('transitionEnd'));

  //   expect(mockCallback).not.toHaveBeenCalled();

  //   //component.simulate('keyDown', escapeEvent);
  //   await fireEvent.keyDown(dialog, escapeEvent);

  //   expect(mockCallback).not.toHaveBeenCalled();

  //   //expect(dialog.getDOMNode().classList.contains('nx-drawer--open')).toBe(false);
  //   expect(dialog).not.toHaveClass('nx-drawer--open');

  //   //component.simulate('transitionEnd');
  //   await fireEvent(dialog, new Event('transitionEnd'));

  //   expect(mockCallback).toHaveBeenCalledTimes(1);
  // });

  it('moves focus back to the previously focused element when closed', async function(done) {
    const user = userEvent.setup();

    function Fixture({ drawerOpen }: { drawerOpen: boolean }) {
      return (
        <>
          <NxButton>Outside</NxButton>
          { drawerOpen &&
          <NxDrawer onCancel={() => {}}>
            <NxDrawer.Header>
              Header
            </NxDrawer.Header>
            <NxButton>Cancel</NxButton>
          </NxDrawer> }
        </>
      );
    }
    const component = render(<Fixture drawerOpen={false} />);

    const outsideButton = screen.getByRole('button', { name: 'Outside' });

    outsideButton.focus();

    expect(screen.queryByRole('dialog', { hidden: true})).toBeNull();
    // expect(component).not.toContainMatchingElement(NxDrawer);

    expect(document.activeElement === outsideButton).toBe(true);

    //component.setProps({ drawerOpen: true });
    render(<Fixture drawerOpen={true}/>);

    const cancelButton = component.container.querySelector('button.nx-drawer-header__cancel-button')!;

    //const drawer = screen.getByRole('dialog', { hidden: true});
    //const drawer = component.container.querySelector('dialag.nx-drawer');

    expect(screen.queryByRole('dialog', { hidden: true})).toHaveClass('nx-drawer');
    //expect(component).toContainMatchingElement(NxDrawer);
    //expect(drawer?.nodeName.);

    //expect(document.activeElement === component.find(NxDrawer).getDOMNode()).toBe(true);

    // component.setProps({ drawerOpen: false });
    render(<Fixture drawerOpen={false}/>);

    screen.queryByRole('dialog', { hidden: true});
    const animationWrapper = component.container.querySelector('.nx-drawer__animation-wrapper')!;
    await user.click(cancelButton);
    fireEvent.animationEnd(animationWrapper);

    //eslint-disable-next-line
    console.log('here', document.activeElement);
    //expect(screen.queryByRole('dialog', { hidden: true})).toBeNull();
    //expect(component).not.toContainMatchingElement(NxDrawer);

    // The focus is moved asynchronously
    setTimeout(() => {
      //eslint-disable-next-line
      //console.log('here', document.activeElement);
      expect(document.activeElement === outsideButton).toBe(true);
      done();
    }, 100);
  });

  describe('NxDrawer Header', function() {
    it('has a <header> tag with the nx-drawer-header class and title', function() {
      const mockCallback = jest.fn();
      const drawer = render(
        <NxDrawer data-testid="nx-drawer" onCancel={mockCallback}>
          <NxDrawer.Header>
            <NxDrawer.Header.Title>
              Hello
            </NxDrawer.Header.Title>
          </NxDrawer.Header>
        </NxDrawer>);

      // const titleText = 'Header Title';

      // const header = getDrawer({ headerTitle: titleText }).find('.nx-drawer-header');
      // const title = header.find('h2.nx-drawer-header__title');

      const header = drawer.container.querySelector('header');
      //screen.getByRole('header', { hidden: true });
      //expect(header).toMatchSelector('header.nx-drawer-header');
      //expect(title).toHaveText(titleText);
      const title = drawer.container.querySelector('h2');
      expect(header).toHaveClass('nx-drawer-header');
      expect(title).toHaveClass('nx-drawer-header__title');
      expect(title).toHaveTextContent('Hello');
    });

    it('has NxCloseButton with class nx-drawer-header__cancel-button', function() {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      //const header = getDrawer()!;
      const mockCallback = jest.fn();

      render(
        <NxDrawer data-testid="nx-drawer" onCancel={mockCallback}>
          <NxDrawer.Header>
            <NxDrawer.Header.Title data-testid='h3.nx-drawer-header__subtitle'>Hello</NxDrawer.Header.Title>
            <NxDrawer.Header.Subtitle>Subtitle</NxDrawer.Header.Subtitle>
            <NxDrawer.Header.Description>Description</NxDrawer.Header.Description>
          </NxDrawer.Header>
        </NxDrawer>);

      //const cancelButton = header.find(NxCloseButton);
      //const cancelButton = within(header).getByRole('button');
      const cancelButton = screen.getByRole('button', { hidden: true });

      expect(cancelButton).toHaveClass('nx-drawer-header__cancel-button');
    });

    it('shows subtitle and description when specified', function() {
      const mockCallback = jest.fn();

      //const subtitleText = 'Subtitle in the Header';
      //const descriptionText = 'Description text in the Header';
      // const header = getShallow({
      //   headerSubtitle: subtitleText,
      //   headerDescription: descriptionText
      // });
      // const subtitle = header.find('h3.nx-drawer-header__subtitle');
      // const description = header.find('p.nx-drawer-header__description');

      const component = render(
        <NxDrawer data-testid="nx-drawer" onCancel={mockCallback}>
          <NxDrawer.Header>
            <NxDrawer.Header.Title data-testid='h3.nx-drawer-header__subtitle'>Hello</NxDrawer.Header.Title>
            <NxDrawer.Header.Subtitle>Subtitle</NxDrawer.Header.Subtitle>
            <NxDrawer.Header.Description>Description</NxDrawer.Header.Description>
          </NxDrawer.Header>
        </NxDrawer>);

      // const header = screen.getByRole('NxDrawer.Header');
      // const subtitle = component.getByTestId('h3.nx-drawer-header__subtitle');
      // const description = within(header).getByRole('Nx.Header.Description');

      //const header = component.container.querySelector('header');
      const subtitle = component.container.querySelector('h3');
      const description = component.container.querySelector('p');

      expect(subtitle).toHaveTextContent('Subtitle');
      expect(description).toHaveClass('nx-drawer-header__description');
      expect(description).toHaveTextContent('Description');
      // expect(description).toHaveText(descriptionText);
    });

    it('executes onCancel when header cancel button is clicked', async function() {
      window.matchMedia = () => ({ matches: true }) as MediaQueryList;
      const mockOnCancel = jest.fn();
      const user = userEvent.setup();

      const map: any = {};

      document.addEventListener = jest.fn((e: string, cb: () => void) => {
        map[e] = cb;
      }) as jest.Mock;

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component = render(
        <NxDrawer data-testid="nx-drawer" onCancel={mockOnCancel}>
          <NxDrawer.Header>
            <NxDrawer.Header.Title data-testid='h3.nx-drawer-header__subtitle'>Hello</NxDrawer.Header.Title>
          </NxDrawer.Header>
        </NxDrawer>);

      //const header = component.container.querySelector('header');
      const cancelButton = screen.getByRole('button', { hidden: true });
      const cb = component.container.querySelector('button.nx-drawer-header__cancel-button')!;

      expect(mockOnCancel).not.toHaveBeenCalled();

      await map.click({ target: cancelButton });
      await user.click(cb);

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      fireEvent.animationEnd(component.container.querySelector('.nx-drawer__animation-wrapper')!);

      expect(mockOnCancel).toHaveBeenCalled();
    });
  });

  describe('NxDrawer.Content', function() {
    it('makes a <div> tag with the nx-drawer-content class', function() {
      const mockOnCancel = jest.fn();

      const component = render(
        <NxDrawer data-testid="nx-drawer" onCancel={mockOnCancel}>
          <NxDrawer.Content>
            Content
          </NxDrawer.Content>
        </NxDrawer>);

      const content = component.container.querySelector('div.nx-drawer-content');

      expect(content).toHaveClass('nx-drawer-content');
    });
  });

  describe('NxDrawer.Footer', function() {
    it('makes a <footer> tag with the nx-drawer-footer class', function() {
      const mockOnCancel = jest.fn();

      const component = render(
        <NxDrawer data-testid="nx-drawer" onCancel={mockOnCancel}>
          <NxFooter>
            Footer
          </NxFooter>
        </NxDrawer>);

      const footer = component.container.querySelector('footer.nx-footer');

      expect(footer).toHaveClass('nx-footer');
    });
  });
});
