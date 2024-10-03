/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { useState, ComponentType } from 'react';
import { reject, propEq } from 'ramda';

import {
  NxGlobalSidebarNavigation,
  NxGlobalSidebarNavigationLink,
  NxButton,
  NxButtonBar,
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
  NxP,
  NxStatefulTextInput,
  NxFormGroup
} from '@sonatype/react-shared-components';
import {
  faArrowLeft,
  faArrowRight,
  faLink
} from '@fortawesome/free-solid-svg-icons';

const sidebarLogoPath = require('../../assets/images/logo-plaid-villain-text.png');

interface ToastModel {
  id: number;
  alertComponent: ComponentType<AlertComponentProps>;
  message: string;
}

type AlertComponentProps = {
  role?: string;
};

export default function NxToastComplexLayoutExample() {
  const [toastIdInc, setToastIdInc] = useState<number>(0);
  const [toasts, setToasts] = useState<ToastModel[]>([]);

  const addToast = (alertComponent: ComponentType<AlertComponentProps>, message: string) => {
    const toastId = toastIdInc + 1;
    setToastIdInc(toastId);
    setToasts([
      { id: toastId, alertComponent, message },
      ...toasts
    ]);
  };

  const removeToast = (id: number) => setToasts(reject(propEq(id, 'id'), toasts));

  return (
    <>
      <header className="nx-global-header">
        <NxBackButton href="#/pages/Toast" targetPageTitle="Documentation" />
      </header>
      <NxToastContainer>
        {
          toasts.map(({ id, alertComponent, message }) => {
            const ToastAlert = alertComponent;
            return (
              <NxToast key={id}
                       onClose={()=> removeToast(id)}>
                {
                  ToastAlert === NxInfoAlert ?
                    <ToastAlert role="status">{message}</ToastAlert> :
                    <ToastAlert>{message}</ToastAlert>
                }
              </NxToast>
            );
          })
        }
      </NxToastContainer>
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
            <NxFormGroup label ="Here's a Text Input">
              <NxStatefulTextInput />
            </NxFormGroup>
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
              <NxButton type="button" onClick={() => addToast(NxInfoAlert, 'Informational Stuff')}>
                Open Info Toast
              </NxButton>
              <NxButton type="button" onClick={() => addToast(NxSuccessAlert, 'Success!')}>
                Open Success Toast
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
      </NxPageMain>
    </>
  );
}
