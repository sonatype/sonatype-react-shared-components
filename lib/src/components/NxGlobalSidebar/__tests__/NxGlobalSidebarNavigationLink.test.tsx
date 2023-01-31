/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import { faCrow } from '@fortawesome/free-solid-svg-icons';
import { rtlRender } from '../../../__testutils__/rtlUtils';

import NxGlobalSidebarNavigationLink, { NxGlobalSidebarNavigationLinkProps as Props }
  from '../NxGlobalSidebarNavigationLink';

describe('NxGlobalSidebarNavigationLink', function() {
  const minimalProps: Props = {
        icon: faCrow,
        text: 'textLink',
        href: '#someurl'
      },
      quickRender = rtlRender<Props>(NxGlobalSidebarNavigationLink, minimalProps);

  // it('renders an NxOverflowTooltip as container', function () {
  //   expect(quickRender()).toMatchSelector(NxOverflowTooltip);
  // });

  it('renders an <a> with the passed href and classes', function() {
    const link = quickRender({ className: 'extra-class' }).getByRole('link');
    expect(link).toHaveClass('extra-class');
    expect(link).toHaveAttribute('href', '#someurl');
  });

  it('passes additional specified attrs to the <a>', function() {
    const link = quickRender({ id: 'foo', lang: 'en_US' }).getByRole('link');

    expect(link).toHaveAttribute('id', 'foo');
    expect(link).toHaveAttribute('lang', 'en_US');
  });

  it('renders the specified text inside the link', function () {
    expect(quickRender().getByRole('link')).toHaveTextContent('textLink');
  });

  // it('renders the specified icon inside the link', function() {
  //   expect(quickRender().find(NxFontAwesomeIcon)).toHaveProp('icon', faCrow);
  //   expect(quickRender({ icon: faBiohazard }).find(NxFontAwesomeIcon))
  //       .toHaveProp('icon', faBiohazard);
  // });
});
