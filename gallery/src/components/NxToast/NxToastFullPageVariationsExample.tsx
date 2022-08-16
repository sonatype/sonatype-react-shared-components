/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { useState} from 'react';
import { reject, propEq } from 'ramda';

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

type ToastTypes = 'success' | 'error' | 'info' | 'warning';

interface ToastModel {
  id: number;
  type: ToastTypes;
  message: string;
}

export default function NxToastFullPageVariationsExample() {
  const [toastIdInc, setToastIdInc] = useState<number>(0);
  const [toasts, setToasts] = useState<ToastModel[]>([]);

  const addToast = (type: ToastTypes, message: string) => {
    const toastId = toastIdInc + 1;
    setToastIdInc(toastId);
    setToasts([
      ...toasts,
      { id: toastId, type, message }
    ]);
  };

  const removeToast = (id: number) => setToasts(reject(propEq('id', id), toasts));

  const toastAlertMap = {
    'success': NxSuccessAlert,
    'error': NxErrorAlert,
    'info': NxInfoAlert,
    'warning': NxWarningAlert
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
            toasts.map(({ id, type, message }) => {
              const ToastAlert = toastAlertMap[type];
              return (
                <NxToast key={id}
                         toastId={id}
                         onClose={()=> removeToast(id)}>
                  <ToastAlert>{message}</ToastAlert>
                </NxToast>
              );
            })
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
              <NxButton type="button" onClick={() => addToast('info', 'Informational Stuff')}>
                Open Info Toast
              </NxButton>
              <NxButton type="button" onClick={() => addToast('success', 'Success!')}>
                Open Sucess Toast
              </NxButton>
              <NxButton type="button" onClick={() => addToast('error', 'Something went wrong!')}>
                Open Error Toast
              </NxButton>
              <NxButton type="button" onClick={() => addToast('warning', 'Warning!')}>
                Open Warning Toast
              </NxButton>
            </NxButtonBar>
          </NxTile.Content>
        </NxTile>
      </NxPageMain>
    </>
  );
}
