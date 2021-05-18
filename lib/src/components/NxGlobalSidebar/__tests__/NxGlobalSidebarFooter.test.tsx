/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';

import NxGlobalSidebarFooter, { NxGlobalSidebarFooterProps as Props }
  from '../NxGlobalSidebarFooter';

import NxTextLink from '../../NxTextLink/NxTextLink';

describe('NxGlobalSidebarFooter', function() {
  const minimalProps: Props = {
        supportText: 'Support for RSC',
        supportLink: '#supporturl',
        releaseText: 'React Shared Components',
        releaseNumber: '3.1.4',
        productTagLine: 'Powered by PLAID VILLAIN',
        showCreatedBy: true
      },
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxGlobalSidebarFooter, minimalProps);

  it('renders an <footer> with nx-global-sidebar__footer class', function() {
    expect(getShallowComponent()).toMatchSelector('footer.nx-global-sidebar__footer');
  });

  it('renders the Support div with a link with the passed href and text', function() {
    const support = getShallowComponent().find('div.nx-global-sidebar__support'),
        supportLink = getShallowComponent().find('div.nx-global-sidebar__support').find(NxTextLink);

    expect(support).toContainMatchingElement('span.nx-global-sidebar__support-text');
    expect(support.find('span.nx-global-sidebar__support-text')).toHaveText('Support for RSC');
    expect(supportLink).toHaveProp('href', '#supporturl');
  });

  it('renders the Release div with a text and version number', function() {
    const support = getShallowComponent().find('div.nx-global-sidebar__release');

    expect(support.find('span.nx-global-sidebar__release-text')).toHaveText('React Shared Components');
    expect(support.find('span.nx-global-sidebar__release-number')).toHaveText('3.1.4');
  });

  it('renders the Powered By div with text', function() {
    const powered = getShallowComponent().find('div.nx-global-sidebar__product-name');

    expect(powered).toHaveText('Powered by PLAID VILLAIN');
  });

  it('renders the Created By div', function() {
    const created = getShallowComponent().find('div.nx-global-sidebar__created-by');

    expect(created).toHaveText('Created by Sonatype');
  });
});
