/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {ReactNode} from 'react';
import { useState } from 'react';
import {reject, propEq} from 'ramda';
import {
  NxGlobalSidebarNavigation,
  NxGlobalSidebarNavigationLink,
  NxButton,
  NxBackButton,
  NxButtonBar,
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
  faLink
} from '@fortawesome/free-solid-svg-icons';

const sidebarLogoPath = require('../../assets/images/logo-plaid-villain-text.png');

// type ToastAlertTypes = 'success' | 'error' | 'info' | 'warning';

interface ToastModel {
  id: number;
  alert: ReactNode;
  message: string;
}

export default function NxToastFullPageSimpleExample() {
  const [toastIdInc, setToastIdInc] = useState<number>(0);
  const [toasts, setToasts] = useState<ToastModel[]>([]);

  const addToast = (alert:ReactNode, message: string) => {
    const toastId = toastIdInc + 1;
    setToastIdInc(toastId);
    setToasts([
      { id: toastId, alert, message },
      ...toasts
    ]);
  };

  const removeToast = (id: number) => setToasts(reject(propEq('id', id), toasts));

  // const toastAlertMap = {
  //   'success': NxSuccessAlert,
  //   'error': NxErrorAlert,
  //   'info': NxInfoAlert,
  //   'warning': NxWarningAlert
  // };

  return (
    <>
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
      <NxPageMain>
        <NxToastContainer>
          {
            toasts.map(({ id, alert, message }) => {
              const ToastAlert = alert;
              return (
                <NxToast key={id}
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
          <NxTile.Header>Here's just a bit of text.</NxTile.Header>
          <NxTile.Content>
            <NxP> Not too much, not too little, just right.</NxP>
            <NxButtonBar>
              <NxButton type="button" onClick={() => addToast(NxInfoAlert, 'Informational Stuff')}>
                Open Info Toast
              </NxButton>
              <NxButton type="button" onClick={() => addToast(NxSuccessAlert, 'Success!')}>
                Open Sucess Toast
              </NxButton>
              <NxButton type="button" onClick={() => addToast(NxErrorAlert, 'Something went wrong!')}>
                Open Error Toast
              </NxButton>
              <NxButton type="button" onClick={() => addToast(NxWarningAlert, 'Warning!')}>
                Open Warning Toast
              </NxButton>
            </NxButtonBar>
          </NxTile.Content>
        </NxTile>
        <NxBackButton href="#/pages/Toast" targetPageTitle="Documentation" />
      </NxPageMain>
    </>
  );
}
