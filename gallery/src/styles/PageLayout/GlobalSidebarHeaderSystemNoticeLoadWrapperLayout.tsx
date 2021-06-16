/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, useState } from 'react';
import { faArrowLeft, faArrowRight, faLink } from '@fortawesome/free-solid-svg-icons';
import {
  NxSystemNotice,
  NxPageMain,
  NxStatefulGlobalSidebar,
  NxGlobalSidebarNavigation,
  NxGlobalSidebarNavigationLink,
  NxLoadWrapper,
  NxGlobalHeader,
  NxBackButton
} from '@sonatype/react-shared-components';

const logoImg = require('../../assets/images/logo-plaid-villain-text.png');

export default function GlobalSidebarHeaderSystemNoticeLoadWrapperLayout() {
  const [loading, setLoading] = useState(true),
      [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setError('This is an example error');
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <NxStatefulGlobalSidebar isDefaultOpen={true}
                               toggleOpenIcon={faArrowLeft}
                               toggleCloseIcon={faArrowRight}
                               logoImg={logoImg}
                               logoAltText="RSC Plaid Villain"
                               logoLink="#">
        <NxGlobalSidebarNavigation>
          <NxGlobalSidebarNavigationLink icon={faLink}
                                         text="Page Layout"
                                         href="#/pages/Page%20Layout"/>
        </NxGlobalSidebarNavigation>
      </NxStatefulGlobalSidebar>
      <NxSystemNotice>This is a System Notice</NxSystemNotice>
      <NxGlobalHeader>
        <NxBackButton href="#/pages/Page%20Layout" />
      </NxGlobalHeader>
      <NxLoadWrapper loading={loading} retryHandler={() => {}} error={error}>
        <NxPageMain/>
      </NxLoadWrapper>
    </>
  );
}
