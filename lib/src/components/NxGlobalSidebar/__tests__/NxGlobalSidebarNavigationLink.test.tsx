/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import { faCrow, faBiohazard } from '@fortawesome/free-solid-svg-icons';

import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import 'jest-enzyme';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxOverflowTooltip from '../../NxTooltip/NxOverflowTooltip';
import NxGlobalSidebarNavigationLink, { NxGlobalSidebarNavigationLinkProps as Props }
  from '../NxGlobalSidebarNavigationLink';

describe('NxGlobalSidebarNavigationLink', function() {
  const minimalProps: Props = {
        icon: faCrow,
        text: 'textLink',
        href: '#someurl'
      },
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxGlobalSidebarNavigationLink, minimalProps);

  it('renders an NxOverflowTooltip as container', function () {
    expect(getShallowComponent()).toMatchSelector(NxOverflowTooltip);
  });

  it('renders an <a> with the passed href and classes', function() {
    const link = getShallowComponent({ className: 'extra-class' }).find('a');
    expect(link).toMatchSelector('a.nx-global-sidebar__navigation-link.nx-text-link');
    expect(link).toMatchSelector('.extra-class');
    expect(link).toHaveProp('href', '#someurl');
  });

  it('passes additional specified attrs to the <a>', function() {
    const link = getShallowComponent({ id: 'foo', lang: 'en_US' }).find('a');

    expect(link).toHaveProp('id', 'foo');
    expect(link).toHaveProp('lang', 'en_US');
  });

  it('renders the specified text inside the link', function () {
    expect(getShallowComponent().find('.nx-global-sidebar__navigation-text')).toHaveText('textLink');
  });

  it('renders the specified icon inside the link', function() {
    expect(getShallowComponent().find(NxFontAwesomeIcon)).toHaveProp('icon', faCrow);
    expect(getShallowComponent({ icon: faBiohazard }).find(NxFontAwesomeIcon))
        .toHaveProp('icon', faBiohazard);
  });
});
