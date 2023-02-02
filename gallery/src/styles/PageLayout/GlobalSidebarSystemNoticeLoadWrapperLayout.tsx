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
  NxTile,
  NxH2,
  NxPageSidebar,
  NxP
} from '@sonatype/react-shared-components';

import CodeExample from '../../CodeExample';

import logoImg from '../../assets/images/logo-plaid-villain-text.png';
import exampleCode from './GlobalSidebarSystemNoticeLoadWrapperLayout?raw';

export default function GlobalSidebarSystemNoticeLoadWrapperLayout() {
  const [loading, setLoading] = useState(true),
      [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setError('This is an example error. Click Retry to clear the error and see the example source code.');
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
                                         text="Page Layout Examples"
                                         href="#/pages/Page%20Layout%20Examples"/>
        </NxGlobalSidebarNavigation>
      </NxStatefulGlobalSidebar>
      <NxSystemNotice>This is a System Notice</NxSystemNotice>
      <NxLoadWrapper loading={loading} retryHandler={() => { setError(null); }} error={error}>
        <NxPageSidebar>
          <NxP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum augue ut mi facilisis commodo. Sed
            quis faucibus metus. Duis volutpat nisl et risus pellentesque euismod. Praesent iaculis ipsum et iaculis
            sollicitudin. Fusce maximus, ex vehicula pellentesque congue, dolor leo auctor velit, at rutrum dui erat
            in lorem. Maecenas nec urna dapibus, porttitor orci nec, congue erat. In mollis, enim ac lobortis
            faucibus, lectus ligula aliquam velit, id imperdiet dui justo nec justo. Nunc porta sapien quis nisi
            ullamcorper auctor.
          </NxP>
        </NxPageSidebar>
        <NxPageMain>
          <NxTile>
            <NxTile.Header>
              <NxTile.HeaderTitle>
                <NxH2>This Example's Code</NxH2>
              </NxTile.HeaderTitle>
            </NxTile.Header>
            <NxTile.Content>
              <CodeExample content={exampleCode} />
            </NxTile.Content>
          </NxTile>
        </NxPageMain>
      </NxLoadWrapper>
    </>
  );
}
