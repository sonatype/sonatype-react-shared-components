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
  useToggle,
  NxFieldset,
  NxRadio,
  NxTooltip,
  NxFontAwesomeIcon
} from '@sonatype/react-shared-components';

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const DarkModeModal = () => {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);

  const [enableModeChange, toggleEnableModeChange] = useToggle(false);
  const [mode, setMode] = useState<string | null>(null);

  useEffect(() => {
    const { classList } = document.documentElement;

    classList.toggle('nx-html--enable-color-schemes', enableModeChange);
    classList.toggle('nx-html--dark-mode', mode === 'dark' && enableModeChange);
    classList.toggle('nx-html--light-mode', mode === 'light' && enableModeChange);
  }, [enableModeChange, mode]);

  return (
    <>
      <NxButton className="nx-btn--open-theme-settings"
                variant="tertiary"
                onClick={() => setShowModal(true)}>
        Theme Settings
      </NxButton>
      { showModal &&
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
              <NxToggle onChange={toggleEnableModeChange} isChecked={enableModeChange}>
                Opt-in to Allow Theming
                <NxTooltip title="Opting in will allow you to make adjustments to the display theme. Failure
                            to do so will always result in light mode. This operates by toggling the presence of
                            the nx-html--enable-color-schemes class.">
                  <NxFontAwesomeIcon className="dark-mode-modal__info-icon" icon={faInfoCircle}/>
                </NxTooltip>
              </NxToggle>
            </NxFormGroup>
            <NxFieldset label="Choose Your Mode">
              <NxRadio name="mode"
                       value="browserChoice"
                       onChange={setMode}
                       isChecked={mode === 'browserChoice'}
                       disabled = {!enableModeChange}>
                <span>Let Your Browser Color Preference Decide</span>
                <NxTooltip title="The default theme will be dictated by your browser or OS theme choice, which is
                            communicated to the application via the 'prefers-color-scheme' media query.">
                  <NxFontAwesomeIcon className="dark-mode-modal__info-icon" icon={faInfoCircle}/>
                </NxTooltip>
              </NxRadio>
              <NxRadio name="mode"
                       value="dark"
                       onChange={setMode}
                       isChecked={mode === 'dark'}
                       disabled = {!enableModeChange}>
                <span>Dark Mode</span>
                <NxTooltip title="Overrides the browser's default display theme to dark mode by adding the class
                            'nx-html--dark-mode' to the HTML element.">
                  <NxFontAwesomeIcon className="dark-mode-modal__info-icon" icon={faInfoCircle}/>
                </NxTooltip>
              </NxRadio>
              <NxRadio name="mode"
                       value="light"
                       onChange={setMode}
                       isChecked={mode === 'light'}
                       disabled = {!enableModeChange}>
                <span>Light Mode</span>
                <NxTooltip title="Overrides the browser's default display theme to light mode by adding the class
                            'nx-html--light-mode' to the HTML element.">
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
      }
    </>
  );
};

export default DarkModeModal;
