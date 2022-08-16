/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { useState} from 'react';
// import {remove} from 'ramda';
import {
  NxGlobalSidebarNavigation,
  NxGlobalSidebarNavigationLink,
  NxButton,
  NxButtonBar,
  NxFontAwesomeIcon,
  NxBackButton,
  NxStatefulGlobalSidebar,
  NxPageMain,
  NxPageTitle,
  NxH1,
  NxToastContainer,
  NxToast,
  NxSuccessAlert,
  NxWarningAlert,
  NxErrorAlert,
  NxInfoAlert,
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

// const alerts = {
//   success: NxSuccessAlert,
//   error: NxErrorAlert,
//   info: NxInfoAlert,
//   warning: NxWarningAlert
// };

// type alertType = keyof typeof alerts;

// type ToastModel = {
//   toastId: number,
//   alert: ReactElement;
// };


export default function NxToastFullPageVariationsExample() {

  const [toastTypes, setToastTypes] = useState<string[]>([]);

  // const addToast = (type:alertType) => {
  //   setId(id + 1);
  //   const FindAlert = alerts[type];
  //   const formatAlert = <FindAlert>This is a {type} toast.</FindAlert>;
  //   setToastTypes((toasts) => [
  //     { toastId: id, alert: formatAlert},
  //     ...toasts
  //   ]);
  // };

  const removeToast = () => {
    // const _toasts = remove(id, 1, toasts);
    // setToastTypes(_toasts);
    const alert = document.activeElement?.parentElement?.parentElement;
    alert?.remove();
  };

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
      <NxPageMain tabIndex={0}>
        <NxToastContainer>
          {
            toastTypes.map((toast, id) => (
              <NxToast key={id}
                       toastId={id}
                       onClose={()=> removeToast()}>
                {
                  toast === 'success' ?
                    <NxSuccessAlert>This is a Success Toast</NxSuccessAlert> :
                    toast === 'info' ?
                      <NxInfoAlert>This is an Info Toast</NxInfoAlert> :
                      toast === 'warning' ?
                        <NxWarningAlert>This is a Warning Toast</NxWarningAlert> :
                        <NxErrorAlert>This is an Error Toast</NxErrorAlert>
                }
                {/* <NxAlert className={`nx-alert--${toast}`} icon={faEye}> This is a {toast} Toast</NxAlert> */}
              </NxToast>
            ))
          }
        </NxToastContainer>
        <NxPageTitle>
          <NxH1>Lorem Ipsum</NxH1>
        </NxPageTitle>
        <NxTile>
          <NxTile.Header>Scroll Down to Find Toast Buttons</NxTile.Header>
          <NxTile.Content>
            <NxP>
              Loresssm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdu
              varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
              rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus qu
              pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id
              diam maecenas.
            </NxP>
            <NxP>
              Loresssm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdu
              varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
              rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus qu
              pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id
              diam maecenas.
            </NxP>
            <NxP>
              Loresssm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdu
              varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
              rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus qu
              pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id
              diam maecenas.
            </NxP>
            <NxP>
              Loresssm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdu
              varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
              rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus qu
              pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id
              diam maecenas.
            </NxP>
            <NxP>
              Loresssm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdu
              varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
              rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus qu
              pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id
              diam maecenas.
            </NxP>
            <NxP>
              Loresssm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdu
              varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
              rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus qu
              pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id
              diam maecenas.
            </NxP>
            <NxButtonBar>
              <NxButton type="button" onClick={() => setToastTypes(['info', ...toastTypes])}>Open Info Toast</NxButton>
              <NxButton type="button" onClick={() => setToastTypes(['success', ...toastTypes])}>Open Sucess Toast</NxButton>
              <NxButton type="button" onClick={() => setToastTypes(['error', ...toastTypes])}>Open Error Toast</NxButton>
              <NxButton type="button" onClick={() => setToastTypes(['warning', ...toastTypes])}>Open Warning Toast</NxButton>
            </NxButtonBar>
          </NxTile.Content>
        </NxTile>
      </NxPageMain>
    </>
  );
}
