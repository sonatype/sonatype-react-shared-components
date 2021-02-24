/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  faAtom,
  faBiohazard,
  faBolt,
  faCrow,
  faPlaceOfWorship
} from '@fortawesome/free-solid-svg-icons';
import { NxStatefulNavigationSidebar } from '@sonatype/react-shared-components';

function Application() {
  const navLinks = [
    {
      name: 'Link Name Alpha',
      href: '/alpha',
      icon: faAtom,
      current: true
    }, {
      name: 'Link Name Beta',
      href: '/beta',
      icon: faBiohazard
    }, {
      name: 'Link Name Gamma',
      href: '/gamma',
      icon: faBolt
    }, {
      name: 'Link Name Delta',
      href: '/delta',
      icon: faCrow
    }, {
      name: 'Link Name Epsilon',
      href: '/epsilon',
      icon: faPlaceOfWorship
    }, {
      name: 'Link Name Zeta',
      href: '/zeta',
      icon: faAtom
    }, {
      name: 'Link Name Etha',
      href: '/etha',
      icon: faPlaceOfWorship
    }, {
      name: 'Link Name Theta',
      href: '/theta',
      icon: faBiohazard
    }
  ];
  const attributions = [
    'Powered by Nexux IQ Server',
    'Created by Sonatype'
  ];
  const logoImg = require('./resources/logos/SON_hexagon_cropped.svg');

  return (
    <div className="nx-page-content nx-page-content--full-width">
      <NxStatefulNavigationSidebar isDefaultOpen={true}
                                   logoImg={logoImg}
                                   logoText="nexus lifecycle"
                                   logoLink="/home"
                                   links={navLinks}
                                   helpLink="http://google.com"
                                   helpText="google help"
                                   collapsedReleaseText="release 105"
                                   expandedReleaseText="lifecycle release 105"
                                   attributions={attributions} />
      <div className="nx-page-main">
        <p>
          Cupidatat pariatur mollit sit pariatur mollit qui.{' '}
          Est sint sunt ea laborum minim officia excepteur nostrud deserunt proident officia.{' '}
          Ipsum nostrud do ipsum nisi occaecat reprehenderit aliquip in occaecat culpa consequat pariatur et.{' '}
          Non adipisicing qui officia nisi do aliquip.
        </p>
      </div>
    </div>
  );
}

export default Application;
