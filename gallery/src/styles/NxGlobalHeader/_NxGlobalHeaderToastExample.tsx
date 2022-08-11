/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { useState, useCallback } from 'react';
import {
  NxGlobalSidebarNavigation,
  NxGlobalSidebarNavigationLink,
  NxPageSidebar,
  NxButton,
  NxFontAwesomeIcon,
  NxBackButton,
  NxStatefulGlobalSidebar,
  NxPageMain,
  NxPageTitle,
  NxH1,
  // useToast,
  NxToastContainer,
  NxToast,
  NxSuccessAlert,
  NxTile,
  NxP
} from '@sonatype/react-shared-components';
import {
  faArrowLeft,
  faArrowRight,
  faLink,
  faQuestionCircle,
  faBell,
  faCog,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';

const sidebarLogoPath = require('../../assets/images/logo-plaid-villain-text.png');

const allToastTypes = ['info', 'success', 'error', 'warning'] as const;
type ToastType = (typeof allToastTypes)[number];

type ToastAddModel = {
  type: ToastType,
  message: string
};
type ToastModel = {
  toastId: number,
  type: ToastType,
  message: string
};

const SomeConsumerComponent = (props: any) => {
  // const { showSuccessToast } = useToast();
  console.log(props);
  return (
    <NxButton onClick={() => props}>Show success toast</NxButton>
  );
};

export default function NxGlobalHeaderToastExample() {

  // const [toasts, setToasts] = useState<ToastModel[]>([]);

  // let id = 1;
  // const addToast = useCallback((content: ToastAddModel) => {
  //   id++;
  //   setToasts((toasts) => [
  //     { toastId: id, type: content.type, message: content.message },
  //     ...toasts
  //   ]);
  // }, [setToasts]);

  const [showToast, setShowToast] = useState<boolean>(false)

  return (
    <>
      <header className="nx-global-header">
        <NxBackButton href="#/pages/Toast" targetPageTitle="Documentation" />
        <div className="nx-global-header__actions">
          <NxButton title="Help" variant="icon-only"><NxFontAwesomeIcon icon={faQuestionCircle} /></NxButton>
          <NxButton title="Notifications" variant="icon-only"><NxFontAwesomeIcon icon={faBell} /></NxButton>
          <NxButton title="Settings" variant="icon-only"><NxFontAwesomeIcon icon={faCog} /></NxButton>
          <NxButton title="User" variant="icon-only"><NxFontAwesomeIcon icon={faUserCircle} /></NxButton>
        </div>
      </header>
      <NxStatefulGlobalSidebar isDefaultOpen={false}
                               toggleOpenIcon={faArrowLeft}
                               toggleCloseIcon={faArrowRight}
                               logoImg={sidebarLogoPath}
                               logoAltText="RSC Plaid Villain"
                               logoLink="#">
        <NxGlobalSidebarNavigation>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxGlobalSidebar" href="#/pages/NxGlobalSidebar"/>
        </NxGlobalSidebarNavigation>
      </NxStatefulGlobalSidebar>
      <NxPageSidebar tabIndex={0}>
        Loresssm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
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
      </NxPageSidebar>
      <NxPageMain tabIndex={0}>
        <NxPageTitle>
          <NxH1>Lorem Ipsum</NxH1>
        </NxPageTitle>
        <NxTile>
          <NxTile.Header>Lorem Ipsum</NxTile.Header>
          <NxTile.Content>
            <NxP>
              Loresssm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdu
              varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
              rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus qu
              pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id
              diam maecenas.
            </NxP>
            <NxToastContainer>
              <NxToast>
                <NxSuccessAlert>
                  hello
                </NxSuccessAlert>
                </NxToast>
            </NxToastContainer>
          </NxTile.Content>
        </NxTile>
      </NxPageMain>
    </>
  );
}
