/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, ComponentType, ReactNode } from 'react';

import { reject, propEq } from 'ramda';

import {
  NxDrawer,
  NxButton,
  useToggle,
  NxBackButton,
  NxPageTitle,
  NxH1,
  NxPageMain,
  NxP,
  NxToastContainer,
  NxToast,
  NxErrorAlert,
  NxSuccessAlert
} from '@sonatype/react-shared-components';

interface ToastModel {
  id: number;
  alertComponent: ComponentType<{children: ReactNode}>;
  message: string;
}

export default function NxDrawerWithNxToastExample() {
  const [showDrawer, toggleDrawer] = useToggle(false);
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
      <header className="nx-global-header">
        <NxBackButton href="#/pages/Drawer" targetPageTitle="Documentation" />
      </header>
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
      <NxDrawer id="nx-drawer-with-nx-toast"
                open={showDrawer}
                onClose={toggleDrawer}
                aria-labelledby="nx-drawer-with-nx-toast-example-title">
        <NxDrawer.Header>
          <NxDrawer.HeaderTitle id="nx-drawer-with-nx-toast-example-title">Header Title</NxDrawer.HeaderTitle>
          <NxDrawer.HeaderSubtitle>Header Subtitle</NxDrawer.HeaderSubtitle>
          <NxDrawer.HeaderDescription>Header Description</NxDrawer.HeaderDescription>
        </NxDrawer.Header>
        <NxDrawer.Content>
          <NxP>
            Brownie dessert candy wafer macaroon. Marzipan dragée liquorice biscuit icing I love.
            Wafer pastry sweet candy canes pie pie icing <strong>brownie</strong>. Wafer jelly cake bear claw I
            love caramels. Pie jelly-o candy jelly beans icing. Sweet gingerbread pastry jelly bonbon danish icing.
          </NxP>
          <NxButton id="nx-toast-error-open-button"
                    type="button"
                    onClick={() => addToast(NxErrorAlert, 'Something went wrong!')}>
            Open Error Toast
          </NxButton>
          <NxP>
            Dragée pastry soufflé shortbread donut fruitcake. Ice cream tart bear claw I love
            cotton candy marzipan cotton candy cake danish. Pie gingerbread marshmallow bear claw
            halvah tiramisu cotton candy icing topping. Liquorice chupa chups dessert carrot cake
            macaroon wafer. Marshmallow apple pie danish muffin cupcake icing dessert I love lemon
            drops. Cupcake I <em>love</em> candy canes dragée croissant cookie chocolate muffin. Marshmallow
            powder lollipop cotton candy bonbon lollipop liquorice chupa chups jelly-o. Biscuit I
            love marzipan pastry pie ice cream chocolate bar dessert sweet. Cake topping cookie
            chocolate pie cupcake. I love pastry donut croissant macaroon chocolate cake icing macaroon marshmallow.
          </NxP>
        </NxDrawer.Content>
      </NxDrawer>

      <NxPageMain>
        <NxPageTitle>
          <NxH1>Drawer With Toast Example</NxH1>
        </NxPageTitle>

        <NxP>
          Dragée pastry soufflé shortbread donut fruitcake. Ice cream tart bear claw I love
          cotton candy marzipan cotton candy cake danish. Pie gingerbread marshmallow bear claw
          halvah tiramisu cotton candy icing topping. Liquorice chupa chups dessert carrot cake
          macaroon wafer. Marshmallow apple pie danish muffin cupcake icing dessert I love lemon
          drops. Cupcake I <em>love</em> candy canes dragée croissant cookie chocolate muffin. Marshmallow
          powder lollipop cotton candy bonbon lollipop liquorice chupa chups jelly-o. Biscuit I
          love marzipan pastry pie ice cream chocolate bar dessert sweet. Cake topping cookie
          chocolate pie cupcake. I love pastry donut croissant macaroon chocolate cake icing macaroon marshmallow.
        </NxP>
        <NxP>
          <NxButton id ="nx-toast-success-open-button"
                    type="button"
                    onClick={() => addToast(NxSuccessAlert, 'Success!')}>
            Open Success Toast
          </NxButton>
          <NxButton id="nx-drawer-with-nx-toast-open-button" onClick={toggleDrawer}>
            Open Drawer
          </NxButton>
        </NxP>
        <NxP>
          Brownie dessert candy wafer macaroon. Marzipan dragée liquorice biscuit icing I love.
          Wafer pastry sweet candy canes pie pie icing <strong>brownie</strong>. Wafer jelly cake bear claw I
          love caramels. Pie jelly-o candy jelly beans icing. Sweet gingerbread pastry jelly bonbon danish icing.
        </NxP>
        <NxP>
          Toffee tootsie roll danish chupa chups dessert cookie I love gummi bears wafer. Dragée
          chocolate cake cake brownie carrot cake caramels chocolate cake. Halvah jelly-o tart wafer
          jelly. Pastry <em>carrot</em> cake cake bear claw bear claw. Toffee jelly beans biscuit jelly cotton
          candy marzipan liquorice. Brownie candy pie sweet roll powder danish dragée. Cake cookie
          topping pastry carrot cake donut. Bear claw danish powder muffin bonbon cookie. I love I love
          tootsie roll croissant chupa chups oat cake. Icing gingerbread pastry marshmallow pudding
          brownie gingerbread marzipan.
        </NxP>
      </NxPageMain>
    </>
  );
}
