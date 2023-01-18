/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import 'jest-enzyme';

import NxGlobalSidebarFooter, { NxGlobalSidebarFooterProps as Props }
  from '../NxGlobalSidebarFooter';

import NxTextLink from '../../NxTextLink/NxTextLink';

describe('NxGlobalSidebarFooter', function() {
  const minimalProps: Props = {},
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxGlobalSidebarFooter, minimalProps);

  it('renders an <footer> with nx-global-sidebar__footer class and those passed as props', function() {
    expect(getShallowComponent({ className: 'test-class' }))
        .toMatchSelector('footer.nx-global-sidebar__footer.test-class');
  });

  it('passes additional attributes to <footer>', function() {
    expect(getShallowComponent({ id: 'test-id' })).toHaveProp('id', 'test-id');
    expect(getShallowComponent({ lang: 'en-ca' })).toHaveProp('lang', 'en-ca');
  });

  it('renders the Support div with a link with the passed href and text and does not render when empty', function() {
    const supportEmpty = getShallowComponent().find('div.nx-global-sidebar__support'),
        support = getShallowComponent({ supportText: 'Support for RSC', supportLink: '#supporturl' })
            .find('div.nx-global-sidebar__support'),
        supportLink = support.find(NxTextLink);

    expect(supportEmpty).not.toExist();
    expect(support).toContainMatchingElement('span.nx-global-sidebar__support-text');
    expect(support.find('span.nx-global-sidebar__support-text')).toHaveText('Support for RSC');
    expect(supportLink).toHaveProp('href', '#supporturl');
  });

  it('renders the Release div with a text and version number and does not render when empty', function() {
    const releaseEmpty = getShallowComponent().find('div.nx-global-sidebar__release'),
        release = getShallowComponent({ releaseText: 'React Shared Components: 3.1.4' })
            .find('div.nx-global-sidebar__release');

    expect(releaseEmpty).not.toExist();
    expect(release).toHaveText('React Shared Components: 3.1.4');
  });

  it('renders the Powered By div with text and does not render when empty', function() {
    const poweredEmpty = getShallowComponent().find('div.nx-global-sidebar__product-name'),
        powered = getShallowComponent({ productTagLine: 'Powered by PLAID VILLAIN' })
            .find('div.nx-global-sidebar__product-name');

    expect(poweredEmpty).not.toExist();
    expect(powered).toHaveText('Powered by PLAID VILLAIN');
  });

  it('renders the Created By text by default and does not render when set to false', function() {
    const createdByTrue = getShallowComponent().find('div.nx-global-sidebar__created-by'),
        createdByFalse = getShallowComponent({ showCreatedBy: false }).find('div.nx-global-sidebar__created-by');

    expect(createdByTrue).toHaveText('Created by Sonatype');
    expect(createdByFalse).not.toExist;
  });
});
