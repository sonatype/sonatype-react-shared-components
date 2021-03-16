/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxNavigationSidebarLinks, { NxNavigationSidebarLinksProps as Props } from '../NxNavigationSidebarLinks';

describe('NxNavigationSidebarLinks', function() {
  const minimalProps: Props = {},
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxNavigationSidebarLinks, minimalProps);

  it('renders a <nav> with nx-global-sidebar__navigation class and those passed as props', function() {
    expect(getShallowComponent({ className: 'class-A' })).toMatchSelector('nav.nx-global-sidebar__navigation.class-A');
  });

  it('passes any prop that <nav> handles', function() {
    expect(getShallowComponent({ title: 'a-title' })).toHaveProp('title', 'a-title');
    expect(getShallowComponent({ id: 'some-id' })).toHaveProp('id', 'some-id');
  });
});
