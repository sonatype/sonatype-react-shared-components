/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import {faAngry} from '@fortawesome/free-solid-svg-icons';

import {
  NxDrawer,
  NxButton,
  NxP,
  NxBackButton,
  NxPageMain,
  NxPageTitle,
  NxH1,
  NxFontAwesomeIcon,
  NxForm,
  NxFormGroup,
  NxFieldset,
  NxCheckbox,
  NxTextInput,
  nxTextInputStateHelpers,
  useToggle
} from '@sonatype/react-shared-components';

import { faEdit } from '@fortawesome/free-solid-svg-icons';

export default function NxDrawerWithNxFormExample() {
  const [showDrawer, setShowDrawer] = useState(false),
      [usernameState, setUsernameState] = useState(nxTextInputStateHelpers.initialState('')),
      [passwordState, setPasswordState] = useState(nxTextInputStateHelpers.initialState('')),
      [isRed, toggleRed] = useToggle(false),
      [isBlue, toggleBlue] = useToggle(false),
      [isGreen, toggleGreen] = useToggle(false);

  function onUsernameChange(val: string) {
    setUsernameState(nxTextInputStateHelpers.userInput(null, val));
  }

  function onPasswordChange(val: string) {
    setPasswordState(nxTextInputStateHelpers.userInput(null, val));
  }

  return (
    <>
      <header className="nx-global-header">
        <NxBackButton href="#/pages/Drawer" targetPageTitle="Documentation" />
        <div className="nx-global-header__actions">
          <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
        </div>
      </header>

      {showDrawer && (
        <NxDrawer id="nx-drawer-with-nx-form"
                  onCancel={() => setShowDrawer(false)}
                  aria-labelledby="nx-drawer-with-nx-form">
          <NxDrawer.Header>
            <NxDrawer.Header.Title>An Example of NxDrawer with NxForm Nested Inside.</NxDrawer.Header.Title>
            <NxDrawer.Header.Subtitle>Hello</NxDrawer.Header.Subtitle>
            <NxDrawer.Header.Description>Hello</NxDrawer.Header.Description>
          </NxDrawer.Header>
          <NxDrawer.Content>
            <NxForm className="nx-form"
                    onSubmit={() => setShowDrawer(false)}
                    onCancel={() => setShowDrawer(false)}>
              <header className="nx-drawer-header">
                <h2 className="nx-h2" id="drawer-form-header">
                  <NxFontAwesomeIcon icon={faAngry} />
                  <span>NxDrawer header with form content</span>
                </h2>
              </header>
              <div className="nx-drawer-content">
                <NxFormGroup label="Username" isRequired>
                  <NxTextInput aria-required={true}
                               placeholder="Username"
                               onChange={onUsernameChange}
                               { ...usernameState } />
                </NxFormGroup>
                <NxFormGroup label="Password" isRequired>
                  <NxTextInput type="password"
                               aria-required={true}
                               placeholder="Password"
                               onChange={onPasswordChange}
                               { ...passwordState } />
                </NxFormGroup>
                <NxFieldset label="Colors" isRequired>
                  <NxCheckbox onChange={toggleRed} isChecked={isRed}>Red</NxCheckbox>
                  <NxCheckbox onChange={toggleBlue} isChecked={isBlue}>Blue</NxCheckbox>
                  <NxCheckbox onChange={toggleGreen} isChecked={isGreen}>Green</NxCheckbox>
                </NxFieldset>
              </div>
            </NxForm>
          </NxDrawer.Content>
        </NxDrawer>
      )}

      <NxPageMain>
        <NxPageTitle>
          <NxH1>NxDrawers with NxForm</NxH1>
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
          <NxButton id="nx-drawer-with-nx-form-open-button" onClick={() => setShowDrawer(true)}>
            Open Drawer with NxForm
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
