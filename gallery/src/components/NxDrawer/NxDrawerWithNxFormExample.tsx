/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef } from 'react';

import {
  NxDrawer,
  NxButton,
  NxP,
  NxBackButton,
  NxPageMain,
  NxPageTitle,
  NxH1,
  NxForm,
  NxFormGroup,
  NxFieldset,
  NxCheckbox,
  useToggle,
  NxStatefulTextInput,
  DrawerRef
} from '@sonatype/react-shared-components';

export default function NxDrawerWithNxFormExample() {
  const drawerRef = useRef<DrawerRef>(null);
  const drawerOverflowingRef = useRef<DrawerRef>(null);

  const [showDrawer, toggleDrawer] = useToggle(false),
      [showDrawerOverflowing, toggleDrawerOverflowing] = useToggle(false),
      [isRed, toggleRed] = useToggle(false),
      [isBlue, toggleBlue] = useToggle(false),
      [isGreen, toggleGreen] = useToggle(false);

  const closeDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.closeDrawer();
    }
  };

  const closeOverflowingDrawer = () => {
    if (drawerOverflowingRef.current) {
      drawerOverflowingRef.current.closeDrawer();
    }
  };

  return (
    <>
      <header className="nx-global-header">
        <NxBackButton href="#/pages/Drawer" targetPageTitle="Documentation" />
      </header>

      {showDrawer && (
        <NxDrawer id="nx-drawer-with-nx-form"
                  aria-labelledby="drawer-with-form-title"
                  onCancel={toggleDrawer}
                  ref={drawerRef}>
          <NxDrawer.Header>
            <NxDrawer.HeaderTitle id="drawer-with-form-title">An Example of A Drawer with Form</NxDrawer.HeaderTitle>
            <NxDrawer.HeaderSubtitle>Header Subtitle</NxDrawer.HeaderSubtitle>
            <NxDrawer.HeaderDescription>Header Description</NxDrawer.HeaderDescription>
          </NxDrawer.Header>

          <NxForm onSubmit={closeDrawer}
                  onCancel={closeDrawer}>
            <NxDrawer.Content>
              <NxFormGroup label="A Field to Fill in" isRequired>
                <NxStatefulTextInput />
              </NxFormGroup>
              <NxFormGroup label="Country" sublabel="Pick your favorite from the list">
                <select className="nx-form-select">
                  <option value="">Pick a Country</option>
                  <option value="USA">USA</option>
                  <option value="GER">Canada</option>
                  <option value="CAN">Germany</option>
                  <option value="COL">Colombia</option>
                </select>
              </NxFormGroup>
              <NxFormGroup label="Hostname">
                <NxStatefulTextInput/>
              </NxFormGroup>
            </NxDrawer.Content>
          </NxForm>
        </NxDrawer>
      )}

      {showDrawerOverflowing && (
      <NxDrawer id="nx-drawer-with-nx-form-overflowing"
                aria-labelledby="drawer-with-overflowing-form-title"
                onCancel={toggleDrawerOverflowing}
                ref={drawerOverflowingRef}>
        <NxDrawer.Header>
          <NxDrawer.HeaderTitle id="drawer-with-overflowing-form-title">Drawer With A Long Form</NxDrawer.HeaderTitle>
          <NxDrawer.HeaderSubtitle>Header Subtitle</NxDrawer.HeaderSubtitle>
          <NxDrawer.HeaderDescription>Header Description</NxDrawer.HeaderDescription>
        </NxDrawer.Header>

        <NxForm className="nx-form"
                onSubmit={closeOverflowingDrawer}
                onCancel={closeOverflowingDrawer}>
          <NxDrawer.Content>
            <NxFormGroup label="Username" isRequired>
              <NxStatefulTextInput/>
            </NxFormGroup>
            <NxFormGroup label="Email" isRequired>
              <NxStatefulTextInput/>
            </NxFormGroup>
            <NxFormGroup label="A Field to Fill in" isRequired>
              <NxStatefulTextInput/>
            </NxFormGroup>
            <NxFieldset label="Colors" isRequired>
              <NxCheckbox onChange={toggleRed} isChecked={isRed}>Red</NxCheckbox>
              <NxCheckbox onChange={toggleBlue} isChecked={isBlue}>Blue</NxCheckbox>
              <NxCheckbox onChange={toggleGreen} isChecked={isGreen}>Green</NxCheckbox>
            </NxFieldset>
            <NxFormGroup label="Comments" isRequired>
              <NxStatefulTextInput type="textarea" placeholder="placeholder" aria-required={true}/>
            </NxFormGroup>
          </NxDrawer.Content>
        </NxForm>
      </NxDrawer>
      )}

      <NxPageMain>
        <NxPageTitle>
          <NxH1>Drawers with Forms Inside</NxH1>
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
          <NxButton id="nx-drawer-with-nx-form-open-button" onClick={toggleDrawer}>
            Open Drawer with Form
          </NxButton>
        </NxP>
        <NxP>
          <NxButton id="nx-drawer-with-nx-form-overflowing-open-button" onClick={toggleDrawerOverflowing}>
            Open Drawer with Overflowing Form
          </NxButton>
        </NxP>
        <NxP>
          Brownie dessert candy wafer macaroon. Marzipan dragée liquorice biscuit icing I love.
          Wafer pastry sweet candy canes pie pie icing <strong>brownie</strong>. Wafer jelly cake bear claw I
          love caramels. Pie jelly-o candy jelly beans icing. Sweet gingerbread pastry jelly bonbon danish icing.
        </NxP>
      </NxPageMain>
    </>
  );
}
