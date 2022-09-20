/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import {
  NxButton,
  NxModal,
  NxForm,
  NxFormGroup,
  NxToggle,
  useToggle,
  NxFieldset,
  NxRadio,
  NxP,
  NxCode
} from '@sonatype/react-shared-components';

const DarkModeModal = () => {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);

  const [enableModeChange, toggleEnableModeChange] = useToggle(false);
  const [mode, setMode] = useState<string | null>(null);

  const { classList } = document.documentElement;

  classList.toggle('nx-html--enable-color-schemes', enableModeChange);

  classList.toggle('nx-html--dark-mode', mode === 'dark' && enableModeChange);
  classList.toggle('nx-html--light-mode', mode === 'light' && enableModeChange);

  return (
    <>
      <NxButton variant="tertiary" onClick={() => setShowModal(true)}>Theme Settings</NxButton>
      { showModal &&
        <NxModal id="nx-modal-dark-mode-example"
                 role="dialog"
                 onCancel={modalCloseHandler}
                 aria-labelledby="modal-form-header">
          <NxForm onSubmit={modalCloseHandler}
                  submitBtnText= "Save and Close">
            <header className="nx-modal-header">
              <h2 className="nx-h2" id="modal-form-header">
                <span>Setting Preferences for Light or Dark Mode</span>
              </h2>
            </header>
            <div className="nx-modal-content">
              <NxP>
                In order to enable dark mode, the class <NxCode>nx-html--enable-color-schemes</NxCode> must first
                be added to the <NxCode>html</NxCode> element, as demonstrated by the toggle below. Additional
                classes <NxCode>nx-html--dark-mode</NxCode> or <NxCode>nx-html--light-mode</NxCode> may also be added
                to force either light or dark mode, as demonstrated by the radio buttons. However, using these
                simultaneously will result in dark mode and is not recommended. If neither class is added,
                prefers-color-scheme in the user’s settings will dictate the mode.
              </NxP>
              <NxFormGroup label="Enable Theming">
                <NxToggle onChange={toggleEnableModeChange} isChecked={enableModeChange}>
                  Opt-in to Allow Changes
                </NxToggle>
              </NxFormGroup>
              <NxFieldset label="Choose Your Mode">
                <NxRadio name="mode"
                         value="browserChoice"
                         onChange={setMode}
                         isChecked={mode === 'browserChoice'}
                         disabled = {!enableModeChange}>
                  Let Your Browser Color Preference Decide
                </NxRadio>
                <NxRadio name="mode"
                         value="dark"
                         onChange={setMode}
                         isChecked={mode === 'dark'}
                         disabled = {!enableModeChange}>
                  Dark Mode
                </NxRadio>
                <NxRadio name="mode"
                         value="light"
                         onChange={setMode}
                         isChecked={mode === 'light'}
                         disabled = {!enableModeChange}>
                  Light Mode
                </NxRadio>
              </NxFieldset>
            </div>
          </NxForm>
        </NxModal>
      }
    </>
  );
};

export default DarkModeModal;
