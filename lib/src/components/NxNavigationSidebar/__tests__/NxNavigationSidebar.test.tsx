/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { ShallowWrapper } from 'enzyme';
import { faCrow, faBiohazard } from '@fortawesome/free-solid-svg-icons';

import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxNavigationSidebar, { Props } from '../NxNavigationSidebar';
import NxButton from '../../NxButton/NxButton';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';

describe('NxNavigationSidebar', function() {
  let minimalProps: Props,
      toggleOpenSpy: () => void,
      getShallowComponent: (optionalProps?: Partial<Props>) => ShallowWrapper;

  beforeEach(function() {
    toggleOpenSpy = jest.fn();
    minimalProps = {
      isOpen: false,
      toggleOpenIcon: faCrow,
      toggleCloseIcon: faBiohazard,
      onToggleClick: toggleOpenSpy,
      logoImg: 'logoImg',
      logoAltText: 'alt text',
      logoLink: '/ref'
    };
    getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxNavigationSidebar, minimalProps);
  });

  it('renders an aside with nx-page-sidebar-operable class', function() {
    expect(getShallowComponent()).toMatchSelector('aside.nx-page-sidebar-operable');
  });

  it('adds classes based on isOpen state', function() {
    expect(getShallowComponent({ isOpen: true })).toMatchSelector('.nx-page-sidebar-operable.open');
    expect(getShallowComponent({ isOpen: false })).toMatchSelector('.nx-page-sidebar-operable.closed');
  });

  it('renders a link to `logoLink` with the `logoImg` and the `altLogoText`', function() {
    const component = getShallowComponent(),
        link = component.find('.nx-page-sidebar-operable__product-info'),
        logo = link.find('.nx-page-sidebar-operable__logo');

    expect(link).toHaveProp('href', '/ref');
    expect(logo).toHaveProp('src', 'logoImg');
    expect(logo).toHaveProp('alt', 'alt text');
  });

  it('renders a button with toggleOpenIcon if isOpen is true', function() {
    const component = getShallowComponent({ isOpen: true }),
        toggleBtn = component.find(NxButton);

    expect(toggleBtn).toMatchSelector('.nx-page-sidebar-operable__toggle');
    expect(toggleBtn).toHaveProp('variant', 'icon-only');
    expect(toggleBtn).toHaveProp('aria-label', 'toggle');
    expect(toggleBtn.find(NxFontAwesomeIcon)).toHaveProp('icon', faCrow);
  });

  it('renders a button with toggleCloseIcon if isOpen is false', function() {
    const component = getShallowComponent({ isOpen: false }),
        toggleBtn = component.find(NxButton);

    expect(toggleBtn).toMatchSelector('.nx-page-sidebar-operable__toggle');
    expect(toggleBtn).toHaveProp('variant', 'icon-only');
    expect(toggleBtn).toHaveProp('aria-label', 'toggle');
    expect(toggleBtn.find(NxFontAwesomeIcon)).toHaveProp('icon', faBiohazard);
  });

  it('renders passed in children', function() {
    const children = (
      <>
        <div className="child-1">
          <p>I am children</p>
        </div>
        <div className="child-2"></div>
      </>
    );
    const component = getShallowComponent({ children });
    expect(component.find('.child-1')).toExist();
    expect(component.find('.child-2')).toExist();
  });

  it('calls onToggleClick when toggle button is pressed', function() {
    const component = getShallowComponent(),
        btn = component.find(NxButton);

    btn.simulate('click');
    expect(toggleOpenSpy).toHaveBeenCalled();
  });
});
