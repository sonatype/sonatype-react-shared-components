/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import { mount, shallow } from 'enzyme';

import { getMountedComponent, getShallowComponent } from '../../../__testutils__/enzymeUtils';
import NxDrawer, { Props } from '../NxDrawer';
import AbstractDialog from '../../AbstractDialog/AbstractDialog';
import NxButton from '../../NxButton/NxButton';
import NxCloseButton from '../../NxCloseButton/NxCloseButton';

describe('NxDrawer', function() {
  const dummyCancelHandler = jest.fn();

  const minimalProps: Props = {
    headerTitle: 'Title',
    onCancel: dummyCancelHandler,
    children: 'A message to show in a drawer'
  };

  const getMounted = getMountedComponent<Props>(NxDrawer, minimalProps),
      getShallow = getShallowComponent<Props>(NxDrawer, minimalProps);

  it('renders AbstractDialog with nx-drawer class applied to the dialog element and containing' +
  '<div> with class nx-drawer__inner', function () {
    const component = getMounted();
    const dialog = component.find(AbstractDialog).children();

    expect(dialog).toMatchSelector('dialog.nx-drawer');
    expect(dialog.children()).toMatchSelector('div.nx-drawer__inner');
  });

  it('sets nx-drawer--open to dialog only once it is mounted', function() {
    const component = getMounted();
    const dialog = component.find('dialog.nx-drawer');
    expect(dialog).not.toHaveClassName('nx-drawer--open');
    // nx-drawer--open is added after it is fully mounted.
    expect(dialog.getDOMNode().classList.contains('nx-drawer--open')).toBe(true);
  });

  it('renders children nodes within the drawer', function() {
    const component = getShallow({ children: <div className="bar"/> });
    expect(component.find('.nx-drawer')).toContainMatchingElement('div.bar');
  });

  it('merges any passed in className to the nx-drawer dialog', function() {
    const component = getMounted({ className: 'test' });
    const dialog = component.find('dialog.nx-drawer');
    expect(dialog).toHaveClassName('test');
  });

  it('includes any passed in attributes to the nx-drawer dialog', function() {
    const component = getMounted({ id: 'drawer-id', lang: 'en_US' });
    const dialog = component.find('dialog.nx-drawer');

    expect(dialog.prop('id')).toEqual('drawer-id');
    expect(dialog.prop('lang')).toEqual('en_US');
  });

  it('adds the nx-drawer--narrow class when the narrow variant is specified', function() {
    const component = getShallow({ variant: 'narrow' });
    expect(component.find('.nx-drawer')).toHaveClassName('nx-drawer--narrow');
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

    it('executes onCancel callback when pressing ESC key', function () {
      const mockCallBack = jest.fn();
      const component = getMounted({ onCancel: mockCallBack });

      expect(mockCallBack).not.toHaveBeenCalled();
      component.simulate('keyDown', createEvent());
      expect(mockCallBack).toHaveBeenCalledTimes(1);
    });

    it('executes onCancel callback ONLY when pressing ESC key', function () {
      const mockCallBack = jest.fn();
      const component = getMounted({ onCancel: mockCallBack });

      component.simulate('keyDown', createEvent('Tab'));
      component.simulate('keyDown', createEvent('Enter'));
      component.simulate('keyDown', createEvent('q'));
      component.simulate('keyDown', createEvent('Q'));
      expect(mockCallBack).not.toHaveBeenCalled();
    });

    it('executes onCancel when clicked outside of drawer', function() {
      const mockOnCancel = jest.fn();
      const map: any = {};
      document.addEventListener = jest.fn((e: string, cb: () => void) => {
        map[e] = cb;
      }) as jest.Mock;
      const container = mount(
        <div className="container">
          <NxButton className="outside-button">Outside</NxButton>
          <NxDrawer headerTitle="hello" onCancel={mockOnCancel}>
            <NxButton className="inside-button">Inside</NxButton>
          </NxDrawer>
        </div>
      );
      const outsideButton = container.find('.outside-button').at(0);
      const insideButton = container.find('.inside-button').at(0);

      expect(mockOnCancel).toHaveBeenCalledTimes(0);
      map.click({ target: insideButton.getDOMNode() });
      expect(mockOnCancel).toHaveBeenCalledTimes(0);
      map.click({ target: outsideButton.getDOMNode() });
      expect(mockOnCancel).toHaveBeenCalledTimes(1);
    });

    it('executes onCancel when clicked on the shadow of drawer', function() {
      const mockOnCancel = jest.fn();
      const map: any = {};
      document.addEventListener = jest.fn((e: string, cb: () => void) => {
        map[e] = cb;
      }) as jest.Mock;
      const container = mount(
        <div className="container">
          <NxDrawer headerTitle="hello" onCancel={mockOnCancel}>
            <NxButton className="inside-button">Inside</NxButton>
          </NxDrawer>
        </div>
      );
      const dialog = container.find('dialog.nx-drawer').at(0);
      const insideButton = container.find('.inside-button').at(0);

      expect(mockOnCancel).toHaveBeenCalledTimes(0);
      map.click({ target: insideButton.getDOMNode() });
      expect(mockOnCancel).toHaveBeenCalledTimes(0);
      map.click({ target: dialog.getDOMNode() });
      expect(mockOnCancel).toHaveBeenCalledTimes(1);
    });
  });

  it('calls onCancel when prefers reduced motion is false and nx-drawer--open is not applied' +
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

    const component = mount(<NxDrawer headerTitle="hello" onCancel={mockCallback}></NxDrawer>);

    const dialog = component.find('dialog.nx-drawer');

    // nx-drawer--open is added after it is mounted.
    expect(dialog.getDOMNode().classList.contains('nx-drawer--open')).toBe(true);

    component.simulate('transitionEnd');

    expect(mockCallback).not.toHaveBeenCalled();

    component.simulate('keyDown', escapeEvent);

    expect(mockCallback).not.toHaveBeenCalled();

    expect(dialog.getDOMNode().classList.contains('nx-drawer--open')).toBe(false);

    component.simulate('transitionEnd');

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('moves focus back to the previously focused element when closed', function(done) {
    function Fixture({ drawerOpen }: { drawerOpen: boolean }) {
      return (
        <>
          <button id="test-btn">Test</button>
          { drawerOpen &&
          <NxDrawer headerTitle="hello" onCancel={jest.fn()}>
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

  describe('NxDrawer Header Portion', function() {
    it('has a <header> tag with the nx-drawer-header class and title', function() {
      const titleText = 'Header Title';

      const header = getShallow({ headerTitle: titleText }).find('.nx-drawer-header');
      const title = header.find('h2.nx-drawer-header__title');

      expect(header).toMatchSelector('header.nx-drawer-header');
      expect(title).toHaveText(titleText);
    });

    it('has NxCloseButton with class nx-drawer-header__cancel-button', function() {
      const header = getShallow();
      const cancelButton = header.find(NxCloseButton);

      expect(cancelButton).toHaveClassName('nx-drawer-header__cancel-button');
    });

    it('shows subtitle and paragraph when specified', function() {
      const subtitleText = 'Subtitle in the Header';
      const paragraphText = 'Paragraph text in the Header';
      const header = getShallow({
        headerSubtitle: subtitleText,
        headerParagraph: paragraphText
      });
      const subtitle = header.find('h3.nx-drawer-header__subtitle');
      const paragraph = header.find('p.nx-drawer-header__paragraph');

      expect(subtitle).toHaveText(subtitleText);
      expect(paragraph).toHaveText(paragraphText);
    });

    it('executes onCancel when header cancel button is pressed', function() {
      window.matchMedia = () => ({ matches: true }) as MediaQueryList;

      const mockOnCancel = jest.fn();

      const container = getShallow({
        onCancel: mockOnCancel
      });

      const cancelButton = container.find(NxCloseButton).at(0);

      expect(mockOnCancel).toHaveBeenCalledTimes(0);

      cancelButton.simulate('click');

      expect(mockOnCancel).toHaveBeenCalledTimes(1);
    });
  });

  describe('NxDrawer.Content', function() {
    it('makes a <div> tag with the nx-drawer-content class', function() {
      expect(shallow(<NxDrawer.Content/>)).toMatchSelector('div.nx-drawer-content');
    });
  });

  describe('NxDrawer.Footer', function() {
    it('makes a <footer> tag with the nx-drawer-footer class', function() {
      expect(shallow(<NxDrawer.Footer/>)).toMatchSelector('footer.nx-drawer-footer');
    });
  });
});
