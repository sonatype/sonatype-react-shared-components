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
  NxFormGroup,
  NxToggle,
  // useToggle,
  NxFieldset,
  NxRadio,
  NxTooltip,
  NxFontAwesomeIcon,
  NxCode
} from '@sonatype/react-shared-components';

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

type Props = {
  modalCloseHandler: () => void;
};

type themeMode = 'enabled' | 'light' | 'dark'| 'disabled';

const DarkModeModal = (props:Props) => {
  const { modalCloseHandler} = props;

  const [mode, setMode] = useState<themeMode>('disabled');

  useEffect(()=> {
    const { classList } = document.documentElement;
    if (classList.contains('nx-html--enable-color-schemes')) {
      setMode('enabled');
      if (classList.contains('nx-html--dark-mode')) {
        setMode('dark');
      }
      else if (classList.contains('nx-html--light-mode')) {
        setMode('light');
      }
    }
    else {
      setMode('disabled');
    }

  }, []);

  useEffect(()=> {
    const { classList } = document.documentElement;

    classList.toggle('nx-html--enable-color-schemes', mode !== 'disabled');
    classList.toggle('nx-html--dark-mode', mode === 'dark');
    classList.toggle('nx-html--light-mode', mode === 'light');

  }, [mode]);

  const handleThemeChange = () => setMode(mode !== 'disabled' ? 'disabled' : 'enabled');

  return (
    <NxModal id="nx-modal-dark-mode-example"
             onCancel={modalCloseHandler}
             aria-labelledby="nx-modal-dark-mode-header">
      <header className="nx-modal-header">
        <h2 className="nx-h2" id="nx-modal-dark-mode-header">
          Setting Preferences for Light or Dark Mode
        </h2>
      </header>
      <div className="nx-modal-content">
        <NxFormGroup label="Enable Theme Changes">
          <NxToggle onChange={handleThemeChange} isChecked={mode !== 'disabled'}>
            Opt-in to Allow Theming
            <NxTooltip title={
              <>Opting in will allow you to make adjustments to the display theme. Failure
                to do so will always result in light mode. This operates by toggling the presence of
                the <NxCode>nx-html--enable-color-schemes</NxCode> class.
              </>}>
              <NxFontAwesomeIcon className="dark-mode-modal__info-icon" icon={faInfoCircle}/>
            </NxTooltip>
          </NxToggle>
        </NxFormGroup>
        <NxFieldset label="Choose Your Mode">
          <NxRadio name="mode"
                   value="browserChoice"
                   onChange={() => setMode('enabled')}
                   isChecked={mode === 'enabled'}
                   disabled = {mode === 'disabled'}>
            <span>Let Your Browser Color Preference Decide</span>
            <NxTooltip title={
              <>The default theme will be dictated by your browser or OS theme choice, which is
                communicated to the application via the <NxCode>prefers-color-scheme</NxCode> media query
              </>}>
              <NxFontAwesomeIcon className="dark-mode-modal__info-icon" icon={faInfoCircle}/>
            </NxTooltip>
          </NxRadio>
          <NxRadio name="mode"
                   value="dark"
                   onChange={() => setMode('dark')}
                   isChecked={mode === 'dark'}
                   disabled = {mode === 'disabled'}>
            <span>Dark Mode</span>
            <NxTooltip title= {
              <>Overrides the browser's default display theme to dark mode by adding the class
                {' '}<NxCode>nx-html--dark-mode</NxCode> to the HTML element.
              </>}>
              <NxFontAwesomeIcon className="dark-mode-modal__info-icon" icon={faInfoCircle}/>
            </NxTooltip>
          </NxRadio>
          <NxRadio name="mode"
                   value="light"
                   onChange={() => setMode('light')}
                   isChecked={mode === 'light'}
                   disabled = {mode === 'disabled'}>
            <span>Light Mode</span>
            <NxTooltip title={
              <>Overrides the browser's default display theme to dark mode by adding the class
                {' '}<NxCode>nx-html--light-mode</NxCode> to the HTML element.
              </>}>
              <NxFontAwesomeIcon className="dark-mode-modal__info-icon" icon={faInfoCircle}/>
            </NxTooltip>
          </NxRadio>
        </NxFieldset>
      </div>
      <footer className="nx-footer">
        <div className="nx-btn-bar">
          <NxButton onClick={modalCloseHandler}>Close</NxButton>
        </div>
      </footer>
    </NxModal>
  );
};

export default DarkModeModal;
