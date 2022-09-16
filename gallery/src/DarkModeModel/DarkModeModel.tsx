/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, useState } from 'react';

import {
  NxButton,
  NxModal,
  NxForm,
  NxFormGroup,
  NxToggle,
  useToggle,
  NxFieldset,
  NxRadio
} from '@sonatype/react-shared-components';
import classnames from 'classnames';

const DarkModeModel = () => {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);

  const [enableModeChange, toggleEnableModeChange] = useToggle(false);
  const [mode, setMode] = useState<string | null>(null);
  const [radioDisabled, setRadioDisabled] = useState(true);

  const htmlElement = document.documentElement;
  const htmlClasses = classnames('nx-html', 'nx-html--page-scrolling',
      {'nx-html--enable-color-schemes': enableModeChange,
        'nx-html--light-mode': mode === 'light' && enableModeChange,
        'nx-html--dark-mode': mode === 'dark' && enableModeChange
      });

  useEffect(()=> {
    htmlElement.className = htmlClasses;
  }, [enableModeChange, mode]);

  useEffect(()=> {
    enableModeChange ? setRadioDisabled(false) : setRadioDisabled(true);
  }, [enableModeChange]);

  // const { classList } = document.documentElement;

  // useEffect(()=>{
  //   if (mode === 'light') {
  //     classList.remove('nx-html--dark-mode');
  //     classList.add('nx-html--light-mode');
  //   }
  //   else if (mode === 'dark') {
  //     classList.remove('nx-html--light-mode');
  //     classList.add('nx-html--dark-mode');
  //   }
  //   else {
  //     classList.remove('nx-html--dark-mode', 'nx-html--light-mode');
  //   }
  // }, [enableModeChange, mode]);

  // useEffect(()=> {
  //   if (enableModeChange) {
  //     classList.add('nx-html--enable-color-schemes');
  //     setRadioDisabled(false);
  //   }
  //   else if (!enableModeChange) {
  //     classList.remove('nx-html--enable-color-schemes', 'nx-html--dark-mode', 'nx-html--light-mode');
  //     setRadioDisabled(true);
  //   }
  // }, [enableModeChange]);

  return (
    <>
      <NxButton onClick={() => setShowModal(true)}>Light / Dark Mode</NxButton>
      { showModal &&
        <NxModal id="nx-modal-dark-mode-example"
                 role="alertdialog"
                 onCancel={modalCloseHandler}
                 aria-label="NxModal to set light or dark mode">
          <NxForm onSubmit={modalCloseHandler}
                  submitBtnText= "Save and Close">
            <NxFormGroup label="Enable Changes to RSC Display Mode">
              <NxToggle onChange={toggleEnableModeChange} isChecked={enableModeChange}>
                Opt-in to Allow Changes
              </NxToggle>
            </NxFormGroup>
            <NxFieldset label="Choose Your Mode">
              <NxRadio name="mode"
                       value="browser"
                       onChange={setMode}
                       isChecked={mode === 'browserChoice'}
                       disabled = {radioDisabled}>
                Let Your Browser Preference Decide
              </NxRadio>
              <NxRadio name="mode"
                       value="dark"
                       onChange={setMode}
                       isChecked={mode === 'dark'}
                       disabled = {radioDisabled}>
                Dark Mode
              </NxRadio>
              <NxRadio name="mode"
                       value="light"
                       onChange={setMode}
                       isChecked={mode === 'light'}
                       disabled = {radioDisabled}>
                Light Mode
              </NxRadio>
            </NxFieldset>
          </NxForm>
        </NxModal>
      }
    </>
  );
};

export default DarkModeModel;
