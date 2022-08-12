/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxForm,
  NxDrawer,
  NxButton,
  NxFontAwesomeIcon,
  NxFormGroup,
  NxTextInput,
  NxFieldset,
  NxCheckbox,
  useToggle,
  nxTextInputStateHelpers,
  NxP,
  NxButtonBar
} from '@sonatype/react-shared-components';

import {faAngry} from '@fortawesome/free-solid-svg-icons';

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
      <NxButton id="nx-drawer-nx-form-open-button" onClick={() => setShowDrawer(true)}>Open Drawer</NxButton>
      {showDrawer && (
        <NxDrawer id="nx-drawer-with-nx-form"
                  onCancel={() => setShowDrawer(false)}
                  headerTitle="An Example of NxDrawer with NxDropdown Nested Inside."
                  aria-labelledby="nx-drawer-with-nx-form">
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
    </>
  );
}
