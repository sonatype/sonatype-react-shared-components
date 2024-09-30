/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  NxGlobalSidebarNavigationLink,
  NxButton,
  NxFontAwesomeIcon,
  NxBackButton,
  NxStatefulGlobalSidebar,
  NxPageMain,
  NxTile,
  NxH2,
  NxH1,
  NxPageTitle
} from '@sonatype/react-shared-components';
import { faArrowLeft, faArrowRight, faLink, faEdit } from '@fortawesome/free-solid-svg-icons';

export default function NxSystemNoticeGlobalSidebarExample() {
  return (
    <>
      <div className="nx-system-notice-container">
        <div className="nx-system-notice" role="complementary">
          This is a test; this is only a test; only a test; a test; a test; a test; a test; a test; a test;
          a test; a test; a test; a test; a test; a test; a test; a test; a test; a test;
          a test; a test; a test; a test; a test; a test; a test; a test; a test; a test;
          a test; a test; a test; a test; a test; a test; a test; a test; a test; a test;
          a test; a test; a test; a test; a test; a test; a test; a test; a test; a test;
        </div>
        <div className="nx-system-notice nx-system-notice--alert" role="complementary" aria-label="alert system notice">
          You should really change your password
        </div>
      </div>
      <header className="nx-global-header">
        <NxBackButton href="#/pages/System%20Notice" targetPageTitle="Documentation" />
        <div className="nx-global-header__actions">
          <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
        </div>
      </header>
      <NxStatefulGlobalSidebar isDefaultOpen={false}
                               toggleOpenIcon={faArrowLeft}
                               toggleCloseIcon={faArrowRight}>
        <NxGlobalSidebarNavigationLink icon={faLink} text="NxGlobalSidebar" href="#/pages/Global%20Sidebar"/>
      </NxStatefulGlobalSidebar>
      <NxPageMain>
        <NxPageTitle>
          <NxH1>Lorem Ipsum</NxH1>
        </NxPageTitle>
        <NxTile>
          <NxTile.Header>
            <NxTile.HeaderTitle>
              <NxH2>Lorem Ipsum</NxH2>
            </NxTile.HeaderTitle>
          </NxTile.Header>
          <NxTile.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
            varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
            rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
            pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
            maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
            gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
            praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
            dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
            pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
            Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
          </NxTile.Content>
        </NxTile>
      </NxPageMain>
    </>
  );
}
