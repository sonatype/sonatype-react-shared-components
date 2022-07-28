/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import { mount, shallow } from 'enzyme';

import { getMountedComponent, getShallowComponent } from '../../../__testutils__/enzymeUtils';
import NxPopOver, {Props} from '../NxPopOver';
import AbstractDialog from '../../AbstractDialog/AbstractDialog';
import NxButton from '../../NxButton/NxButton';
import NxCloseButton from '../../NxCloseButton/NxCloseButton';

describe('NxPopOver', function() {
  const dummyCancelHandler = jest.fn();

  const minimalProps: Props = {
    headerTitle: 'Title',
    onCancel: dummyCancelHandler,
    children: 'A message to show in a popover'
  };

  const getMounted = getMountedComponent<Props>(NxPopOver, minimalProps),
      getShallow = getShallowComponent<Props>(NxPopOver, minimalProps);

  it('renders AbstractDialog with nx-pop-over class applied to the dialog element and containing' +
  '<div> with class nx-pop-over__inner', function () {
    const component = getMounted();
    const dialog = component.find(AbstractDialog).children();

    expect(dialog).toMatchSelector('dialog.nx-pop-over');
    expect(dialog.children()).toMatchSelector('div.nx-pop-over__inner');
  });

  it('sets nx-pop-over--open to dialog only once it is mounted', function() {
    const component = getMounted();
    const dialog = component.find('dialog.nx-pop-over');
    expect(dialog).not.toHaveClassName('nx-pop-over--open');
    // nx-pop-over--open is added after it is fully mounted.
    expect(dialog.getDOMNode().classList.contains('nx-pop-over--open')).toBe(true);
  });

  it('renders children nodes within the popover', function() {
    const component = getShallow({ children: <div className="bar"/> });
    expect(component.find('.nx-pop-over')).toContainMatchingElement('div.bar');
  });

  it('merges any passed in className to the nx-pop-over dialog', function() {
    const component = getMounted({ className: 'test' });
    const dialog = component.find('dialog.nx-pop-over');
    expect(dialog).toHaveClassName('test');
  });

  it('includes any passed in attributes to the nx-pop-over dialog', function() {
    const component = getMounted({ id: 'pop-over-id', lang: 'en_US' });
    const dialog = component.find('dialog.nx-pop-over');

    expect(dialog.prop('id')).toEqual('pop-over-id');
    expect(dialog.prop('lang')).toEqual('en_US');
  });

  it('adds the nx-pop-over--narrow class when the narrow variant is specified', function() {
    const component = getShallow({ variant: 'narrow' });
    expect(component.find('.nx-pop-over')).toHaveClassName('nx-pop-over--narrow');
  });

  describe('NxPopOver event listener support', () => {
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

    it('executes onCancel when clicked outside of popOver', function() {
      const mockOnCancel = jest.fn();
      const map: any = {};
      document.addEventListener = jest.fn((e: string, cb: () => void) => {
        map[e] = cb;
      }) as jest.Mock;
      const container = mount(
        <div className="container">
          <NxButton className="outside-button">Outside</NxButton>
          <NxPopOver headerTitle="hello" onCancel={mockOnCancel}>
            <NxButton className="inside-button">Inside</NxButton>
          </NxPopOver>
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

    it('executes onCancel when clicked on the shadow of popOver', function() {
      const mockOnCancel = jest.fn();
      const map: any = {};
      document.addEventListener = jest.fn((e: string, cb: () => void) => {
        map[e] = cb;
      }) as jest.Mock;
      const container = mount(
        <div className="container">
          <NxPopOver headerTitle="hello" onCancel={mockOnCancel}>
            <NxButton className="inside-button">Inside</NxButton>
          </NxPopOver>
        </div>
      );
      const dialog = container.find('dialog.nx-pop-over').at(0);
      const insideButton = container.find('.inside-button').at(0);

      expect(mockOnCancel).toHaveBeenCalledTimes(0);
      map.click({ target: insideButton.getDOMNode() });
      expect(mockOnCancel).toHaveBeenCalledTimes(0);
      map.click({ target: dialog.getDOMNode() });
      expect(mockOnCancel).toHaveBeenCalledTimes(1);
    });
  });

  it('calls onCancel when prefers reduced motion is false and nx-pop-over--open is not applied' +
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

    const component = mount(<NxPopOver headerTitle="hello" onCancel={mockCallback}></NxPopOver>);

    const dialog = component.find('dialog.nx-pop-over');

    // nx-pop-over--open is added after it is mounted.
    expect(dialog.getDOMNode().classList.contains('nx-pop-over--open')).toBe(true);

    component.simulate('transitionEnd');

    expect(mockCallback).not.toHaveBeenCalled();

    component.simulate('keyDown', escapeEvent);

    expect(mockCallback).not.toHaveBeenCalled();

    expect(dialog.getDOMNode().classList.contains('nx-pop-over--open')).toBe(false);

    component.simulate('transitionEnd');

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('moves focus back to the previously focused element when closed', function(done) {
    function Fixture({ popOverOpen }: { popOverOpen: boolean }) {
      return (
        <>
          <button id="test-btn">Test</button>
          { popOverOpen &&
          <NxPopOver headerTitle="hello" onCancel={jest.fn()}>
            <button id="cancel-btn">Close</button>
          </NxPopOver> }
        </>
      );
    }

    const container = document.createElement('div');
    document.body.append(container);

    const component = mount(<Fixture popOverOpen={false} />, { attachTo: container }),
        externalBtn = component.find('#test-btn').getDOMNode() as HTMLElement;

    externalBtn.focus();
    expect(component).not.toContainMatchingElement(NxPopOver);
    expect(document.activeElement === externalBtn).toBe(true);

    component.setProps({ popOverOpen: true });
    expect(component).toContainMatchingElement(NxPopOver);
    expect(document.activeElement === component.find(NxPopOver).getDOMNode()).toBe(true);

    component.setProps({ popOverOpen: false });
    expect(component).not.toContainMatchingElement(NxPopOver);

    // The focus is moved asynchronously
    setTimeout(() => {
      expect(document.activeElement === externalBtn).toBe(true);
      done();
    }, 100);
  });

  describe('NxPopOver Header Portion', function() {
    it('has a <header> tag with the nx-pop-over-header class and title', function() {
      const titleText = 'Header Title';

      const header = getShallow({ headerTitle: titleText }).find('.nx-pop-over-header');
      const title = header.find('h2.nx-pop-over-header__title');

      expect(header).toMatchSelector('header.nx-pop-over-header');
      expect(title).toHaveText(titleText);
    });

    it('has NxCloseButton with class nx-pop-over-header__close', function() {
      const header = getShallow();
      const closeButton = header.find(NxCloseButton);

      expect(closeButton).toHaveClassName('nx-pop-over-header__close');
    });

    it('shows subtitle and paragraph when specified', function() {
      const subtitleText = 'Subtitle in the Header';
      const paragraphText = 'Paragraph text in the Header';
      const header = getShallow({
        headerSubtitle: subtitleText,
        headerParagraph: paragraphText
      });
      const subtitle = header.find('h3.nx-pop-over-header__subtitle');
      const paragraph = header.find('p.nx-pop-over-header__paragraph');

      expect(subtitle).toHaveText(subtitleText);
      expect(paragraph).toHaveText(paragraphText);
    });

    it('executes onCancel when header close button is pressed', function() {
      window.matchMedia = () => ({ matches: true }) as MediaQueryList;

      const mockOnCancel = jest.fn();

      const container = getShallow({
        onCancel: mockOnCancel
      });

      const closeButton = container.find(NxCloseButton).at(0);

      expect(mockOnCancel).toHaveBeenCalledTimes(0);

      closeButton.simulate('click');

      expect(mockOnCancel).toHaveBeenCalledTimes(1);
    });
  });

  describe('NxPopOver.Content', function() {
    it('makes a <div> tag with the nx-pop-over-content class', function() {
      expect(shallow(<NxPopOver.Content/>)).toMatchSelector('div.nx-pop-over-content');
    });
  });

  describe('NxPopOver.Footer', function() {
    it('makes a <footer> tag with the nx-pop-over-footer class', function() {
      expect(shallow(<NxPopOver.Footer/>)).toMatchSelector('footer.nx-pop-over-footer');
    });
  });
});
