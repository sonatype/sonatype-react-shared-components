/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { useState, ComponentType } from 'react';
import { reject, propEq } from 'ramda';

import { NxPageHeader,
  NxP,
  NxPageSidebar,
  NxPageMain,
  NxTile,
  NxH2,
  NxButton,
  NxButtonBar,
  NxBackButton,
  NxToast,
  NxToastContainer,
  NxSuccessAlert,
  NxErrorAlert,
  NxWarningAlert,
  NxInfoAlert
} from '@sonatype/react-shared-components';

interface ToastModel {
  id: number;
  alertComponent: ComponentType;
  message: string;
}

export default function NxToastLegacyPageScrollingEaxmple() {

  const [toastIdInc, setToastIdInc] = useState<number>(0);
  const [toasts, setToasts] = useState<ToastModel[]>([]);

  const addToast = (alertComponent: ComponentType, message: string) => {
    const toastId = toastIdInc + 1;
    setToastIdInc(toastId);
    setToasts([
      { id: toastId, alertComponent, message },
      ...toasts
    ]);
  };

  const removeToast = (id: number) => setToasts(reject(propEq('id', id), toasts));

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
        </NxPageSidebar>
        <NxPageMain>
          <NxTile>
            <NxTile.Header>
              <NxTile.HeaderTitle>
                <NxH2>Lorem Ipsum</NxH2>
              </NxTile.HeaderTitle>
            </NxTile.Header>
            <NxTile.Content>
              <NxBackButton href="#/pages/Toast" targetPageTitle="Documentation" />
              <NxP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum augue ut mi facilisis commodo. S
                quis faucibus metus. Duis volutpat nisl et risus pellentesque euismod. Praesent iaculis ipsum et iaculis
                sollicitudin. Fusce maximus, ex vehicula pellentesque congue, dolor leo auctor velit, at rutrum dui erat
                in lorem. Maecenas nec urna dapibus, porttitor orci nec, congue erat. In mollis, enim ac lobortis
                faucibus, lectus ligula aliquam velit, id imperdiet dui justo nec justo. Nunc porta sapien quis nisi
                ullamcorper auctor.
              </NxP>
              <NxP>
                Sed fringilla dolor in ornare rhoncus. Vestibulum vestibulum ligula et velit porttitor egestas. Cras nec
                congue mi. Integer vel venenatis nisl. Mauris commodo lacus eu eros malesuada mollis. Etiam bibendum
                scelerisque nisi, eu placerat arcu tempus id. Etiam vitae nulla leo. Fusce pretium convallis est ac
                commodo. Morbi scelerisque pharetra dui sed vulputate. Phasellus a neque vitae nibh vulputate congue.
                Nullam mi nunc, vehicula at nisi sit amet, sodales lacinia sem. Quisque egestas efficitur volutpat. Nam
                porttitor varius faucibus. Duis eget ipsum consectetur, ultrices tortor nec, malesuada eros. Sed ut ex
                turpis posuere aliquet ac id lectus.
              </NxP>
              <NxP>
                Aenean nec feugiat massa. Phasellus aliquet leo quis mauris auctor dictum. Duis quis justo molestie magn
                dapibus interdum. Aliquam semper nibh turpis, bibendum lobortis felis sagittis nec. Cras mollis auctor
                felis eget elementum. Nullam pulvinar aliquam eros id convallis. Donec ultrices sit amet leo sit amet
                eleifend. Fusce eget arcu libero. Morbi eget ornare massa. Ut at ex ut felis ultrices facilisis.
                Suspendisse consequat ante vitae fermentum posuere. Maecenas non mauris ut felis pellentesque
                ullamcorper. Nullam porttitor nec libero at facilisis.
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
              <NxP>
                Sed fringilla dolor in ornare rhoncus. Vestibulum vestibulum ligula et velit porttitor egestas. Cras nec
                congue mi. Integer vel venenatis nisl. Mauris commodo lacus eu eros malesuada mollis. Etiam bibendum
                scelerisque nisi, eu placerat arcu tempus id. Etiam vitae nulla leo. Fusce pretium convallis est ac
                commodo. Morbi scelerisque pharetra dui sed vulputate. Phasellus a neque vitae nibh vulputate congue.
                Nullam mi nunc, vehicula at nisi sit amet, sodales lacinia sem. Quisque egestas efficitur volutpat. Nam
                porttitor varius faucibus. Duis eget ipsum consectetur, ultrices tortor nec, malesuada eros. Sed ut ex
                turpis posuere aliquet ac id lectus.
              </NxP>
              <NxP>
                Aenean nec feugiat massa. Phasellus aliquet leo quis mauris auctor dictum. Duis quis justo molestie
                dapibus interdum. Aliquam semper nibh turpis, bibendum lobortis felis sagittis nec. Cras mollis auctor
                felis eget elementum. Nullam pulvinar aliquam eros id convallis. Donec ultrices sit amet leo sit amet
                eleifend. Fusce eget arcu libero. Morbi eget ornare massa. Ut at ex ut felis ultrices facilisis.
                Suspendisse consequat ante vitae fermentum posuere. Maecenas non mauris ut felis pellentesque
                ullamcorper. Nullam porttitor nec libero at facilisis.
              </NxP>
            </NxTile.Content>
          </NxTile>
        </NxPageMain>
      </div>
    </>
  );
}
