/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ReactNode } from 'react';
import { useState, ComponentType } from 'react';
import { reject, propEq } from 'ramda';
import {
  NxPageHeader,
  NxP,
  NxPageSidebar,
  NxPageMain,
  NxPageTitle,
  NxTile,
  NxH1,
  NxButton,
  NxButtonBar,
  NxBackButton,
  NxSuccessAlert,
  NxWarningAlert,
  NxErrorAlert,
  NxInfoAlert,
  NxToastContainer,
  NxToast
} from '@sonatype/react-shared-components';

interface ToastModel {
  id: number;
  alertComponent: ComponentType<{children: ReactNode}>;
  message: string;
}

export default function NxToastLegacyLayoutExample() {
  const [toastIdInc, setToastIdInc] = useState<number>(0);
  const [toasts, setToasts] = useState<ToastModel[]>([]);

  const addToast = (alertComponent: ComponentType<{children: ReactNode}>, message: string) => {
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
      <NxPageHeader />
      <NxToastContainer>
        {
          toasts.map(({ id, alertComponent, message }) => {
            const ToastAlert = alertComponent;
            return (
              <NxToast key={id}
                       onClose={()=> removeToast(id)}>
                <ToastAlert>{message}</ToastAlert>
              </NxToast>
            );
          })
        }
      </NxToastContainer>
      <div className="nx-page-content">
        <NxPageSidebar tabIndex={0}>
          <NxP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum augue ut mi facilisis commodo. Sed
            quis faucibus metus. Duis volutpat nisl et risus pellentesque euismod. Praesent iaculis ipsum et iaculis
            sollicitudin. Fusce maximus, ex vehicula pellentesque congue, dolor leo auctor velit, at rutrum dui erat
            in lorem. Maecenas nec urna dapibus, porttitor orci nec, congue erat. In mollis, enim ac lobortis
            faucibus, lectus ligula aliquam velit, id imperdiet dui justo nec justo. Nunc porta sapien quis nisi
            ullamcorper auctor.
          </NxP>
          <NxP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum augue ut mi facilisis commodo. Sed
            quis faucibus metus. Duis volutpat nisl et risus pellentesque euismod. Praesent iaculis ipsum et iaculis
            sollicitudin. Fusce maximus, ex vehicula pellentesque congue, dolor leo auctor velit, at rutrum dui erat
            in lorem. Maecenas nec urna dapibus, porttitor orci nec, congue erat. In mollis, enim ac lobortis
            faucibus, lectus ligula aliquam velit, id imperdiet dui justo nec justo. Nunc porta sapien quis nisi
            ullamcorper auctor.
          </NxP>
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
          <NxPageTitle>
            <NxH1>Lorem Ipsum</NxH1>
          </NxPageTitle>
          <NxTile>
            <NxTile.Content>
              <NxP>Scroll Down to Find Toast Buttons</NxP>
              <NxBackButton href="#/pages/Toast" targetPageTitle="Documentation" />
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
      </div>
    </>
  );
}
