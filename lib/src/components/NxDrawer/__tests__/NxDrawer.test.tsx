/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';

import { render, fireEvent, within } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import { mount, shallow } from 'enzyme';

import NxDrawer, { Props } from '../NxDrawer';
import NxButton from '../../NxButton/NxButton';
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

    const createEvent = (key = 'Escape') => ({
      key,
      stopPropagation: jest.fn(),
      nativeEvent: {
        stopImmediatePropagation: jest.fn()
      }
    });

    it('executes onCancel callback when pressing ESC key', async function () {
      const mockOnCancel = jest.fn();
      const drawer = getDrawer({ onCancel: mockOnCancel })!;

      expect(mockOnCancel).not.toHaveBeenCalled();
      await fireEvent.keyDown(drawer, createEvent());
      expect(drawer.querySelector('.nx-drawer__animation-wrapper')).toHaveClass('nx-drawer__animation-wrapper--close');
      await fireEvent.animationEnd(drawer);
      expect(mockOnCancel).toHaveBeenCalled();
    });

    it('executes onCancel callback ONLY when pressing ESC key', async function () {
      const user = userEvent.setup();
      const mockCallBack = jest.fn();
      const component = getDrawer({ onCancel: mockCallBack })!;

      await user.keyboard('Tab');
      await user.keyboard('Enter');
      await user.keyboard('q');
      await user.keyboard('Q');
      await fireEvent.keyDown(component, createEvent('animationEnd'));

      //await fireEvent.keyDown(component, 'transitionEnd');

      // component.simulate('keyDown', createEvent('Tab'));
      // component.simulate('keyDown', createEvent('Enter'));
      // component.simulate('keyDown', createEvent('q'));
      // component.simulate('keyDown', createEvent('Q'));
      //component.simulate('transitionEnd');
      expect(mockCallBack).not.toHaveBeenCalled();
    });

    it('executes onCancel when clicked outside of the drawer', function() {
      const mockOnCancel = jest.fn();
      const map: any = {};
      document.addEventListener = jest.fn((e: string, cb: () => void) => {
        map[e] = cb;
      }) as jest.Mock;
      const container = mount(
        <div className="container">
          <NxButton className="outside-button">Outside</NxButton>
          <NxDrawer onCancel={mockOnCancel}>
            <NxButton className="inside-button">Inside</NxButton>
          </NxDrawer>
        </div>
      );
      const outsideButton = container.find('.outside-button').at(0);
      const insideButton = container.find('.inside-button').at(0);
      const dialog = container.find('dialog.nx-drawer').at(0);

      expect(mockOnCancel).toHaveBeenCalledTimes(0);
      map.click({ target: insideButton.getDOMNode() });
      //await fireEvent(dialog, new Event('transitionEnd'));
      dialog.simulate('transitionEnd');
      expect(mockOnCancel).toHaveBeenCalledTimes(0);
      map.click({ target: outsideButton.getDOMNode() });
      dialog.simulate('transitionEnd');
      expect(mockOnCancel).toHaveBeenCalledTimes(1);
    });

    it('executes onCancel when clicked on the shadow of the drawer', async function() {
      const user = userEvent.setup();
      const mockOnCancel = jest.fn();
      const map: any = {};
      document.addEventListener = jest.fn((e: string, cb: () => void) => {
        map[e] = cb;
      }) as jest.Mock;
      // render(<NxDrawer><NxDrawer.Header></NxDrawer.Header></NxDrawer>);
      render(
        <div className="container">
          <NxDrawer onCancel={mockOnCancel}>
            <NxDrawer.Header>
              Header
            </NxDrawer.Header>
            <NxButton className="inside-button">Inside</NxButton>
          </NxDrawer>
        </div>
      );

      const dialog = screen.getByRole('dialog', { hidden: true});
      const insideButton = screen.getByRole('button', { hidden: true});
      // const container = mount(
      //   <div className="container">
      //     <NxDrawer headerTitle="hello" onCancel={mockOnCancel}>
      //       <NxButton className="inside-button">Inside</NxButton>
      //     </NxDrawer>
      //   </div>
      // );
      //const dialog = container.find('dialog.nx-drawer').at(0);
      //const insideButton = container.find('.inside-button').at(0);

      expect(mockOnCancel).toHaveBeenCalledTimes(0);
      await user.click(insideButton);
      //map.click({ target: insideButton.getDOMNode() });

      //dialog.simulate('transitionEnd');
      await fireEvent(dialog, new Event('transitionEnd'));
      expect(mockOnCancel).toHaveBeenCalledTimes(0);
      await user.click(dialog);
      //map.click({ target: dialog.getDOMNode() });
      //dialog.simulate('transitionEnd');
      await fireEvent(dialog, new Event('transitionEnd'));
      expect(mockOnCancel).toHaveBeenCalledTimes(1);
    });
  });

  it('calls onCancel when prefers-reduced-motion is false, nx-drawer--open is not applied,' +
    'and transitionEnd event is called  ', async function() {
    window.matchMedia = () => ({ matches: false }) as MediaQueryList;

    const mockCallback = jest.fn();

    const escapeEvent = {
      key: 'Escape',
      stopPropagation: jest.fn(),
      nativeEvent: {
        stopImmediatePropagation: jest.fn()
      }
    };

    const component = render(
      <NxDrawer data-testid="nx-drawer" onCancel={mockCallback}>
        <NxDrawer.Header>
          <NxDrawer.Header.Title>
            Hello
          </NxDrawer.Header.Title>
        </NxDrawer.Header>
      </NxDrawer>);

    //const dialog = component.find('dialog.nx-drawer');
    const dialog = component.getByTestId('nx-drawer');

    // nx-drawer--open is added after it is mounted.
    //expect(dialog.getDOMNode().classList.contains('nx-drawer--open')).toBe(true);
    expect(dialog).toHaveClass('nx-drawer--open');

    //component.simulate('transitionEnd');
    await fireEvent(dialog, new Event('transitionEnd'));

    expect(mockCallback).not.toHaveBeenCalled();

    //component.simulate('keyDown', escapeEvent);
    await fireEvent.keyDown(dialog, escapeEvent);

    expect(mockCallback).not.toHaveBeenCalled();

    //expect(dialog.getDOMNode().classList.contains('nx-drawer--open')).toBe(false);
    expect(dialog).not.toHaveClass('nx-drawer--open');

    //component.simulate('transitionEnd');
    await fireEvent(dialog, new Event('transitionEnd'));

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('moves focus back to the previously focused element when closed', function(done) {
    function Fixture({ drawerOpen }: { drawerOpen: boolean }) {
      return (
        <>
          <button id="test-btn">Test</button>
          { drawerOpen &&
          <NxDrawer onCancel={jest.fn()}>
            <button id="cancel-btn">Close</button>
          </NxDrawer> }
        </>
      );
    }

    const container = document.createElement('div');
    document.body.append(container);

    const component = mount(<Fixture drawerOpen={false} />, { attachTo: container }),
        externalBtn = component.find('#test-btn').getDOMNode() as HTMLElement;

    externalBtn.focus();
    expect(component).not.toContainMatchingElement(NxDrawer);
    expect(document.activeElement === externalBtn).toBe(true);

    component.setProps({ drawerOpen: true });
    expect(component).toContainMatchingElement(NxDrawer);
    expect(document.activeElement === component.find(NxDrawer).getDOMNode()).toBe(true);

    component.setProps({ drawerOpen: false });
    expect(component).not.toContainMatchingElement(NxDrawer);

    // The focus is moved asynchronously
    setTimeout(() => {
      expect(document.activeElement === externalBtn).toBe(true);
      done();
    }, 100);
  });

  describe('NxDrawer Header', function() {
    it('has a <header> tag with the nx-drawer-header class and title', function() {
      // render(<NxDrawer><NxDrawer.Header></NxDrawer.Header></NxDrawer>);
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

      screen.getByRole('NxDrawer.Header');
      //expect(header).toMatchSelector('header.nx-drawer-header');
      //expect(title).toHaveText(titleText);
      drawer.container.querySelector('nx-drawer-header-title');
      expect(screen.getByRole('NxDrawer.Header.Title')).toHaveTextContent('Hello');
    });

    it('has NxCloseButton with class nx-drawer-header__cancel-button', function() {
      const header = getDrawer()!;
      //const cancelButton = header.find(NxCloseButton);
      const cancelButton = within(header).getByRole('button');

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

      const header = screen.getByRole('NxDrawer.Header');
      const subtitle = component.getByTestId('h3.nx-drawer-header__subtitle');
      const description = within(header).getByRole('Nx.Header.Description');

      expect(subtitle).toHaveText('Subtitle');
      expect(description).toHaveClass('p.nx-drawer-header__description');
      expect(description).toHaveText('Description');
      // expect(description).toHaveText(descriptionText);
    });

    it('executes onCancel when header cancel button is clicked', async function() {
      window.matchMedia = () => ({ matches: true }) as MediaQueryList;
      const user = userEvent.setup();
      const mockOnCancel = jest.fn();

      const component = getDrawer({
        onCancel: mockOnCancel
      })!;

      const header = within(component).getByRole('NxDrawer.Header');
      const cancelButton = within(header).getByRole('button');
      //const cancelButton = component.getBy(NxCloseButton).at(0);

      expect(mockOnCancel).toHaveBeenCalledTimes(0);

      //cancelButton.simulate('click');
      await user.click(cancelButton);

      //component.simulate('transitionEnd');
      await fireEvent(component, new Event('transitionEnd'));

      expect(mockOnCancel).toHaveBeenCalledTimes(1);
    });
  });

  describe('NxDrawer.Content', function() {
    it('makes a <div> tag with the nx-drawer-content class', function() {
      expect(shallow(<NxDrawer.Content/>)).toMatchSelector('div.nx-drawer-content');
    });
  });

  // describe('NxDrawer.Footer', function() {
  //   it('makes a <footer> tag with the nx-drawer-footer class', function() {
  //     expect(shallow(<NxDrawer.Footer/>)).toMatchSelector('footer.nx-drawer-footer');
  //   });
  // });
});
