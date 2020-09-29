/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {
  NxTabs,
  NxTabList,
  NxTab,
  NxTabPanel,
  NxModal,
  NxFontAwesomeIcon
} from '@sonatype/react-shared-components';

import {faAngry} from '@fortawesome/free-solid-svg-icons';


const NxTabsModalExample = () => {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);

  const [activeTabId, setActiveTabId] = useState<number>(0);

  function handleTabSelect(index: number) {
    setActiveTabId(index);
  }

  return (
    <>
      <button onClick={() => setShowModal(true)} className="nx-btn">Open Modal</button>
      { showModal &&
        <NxModal id="nx-modal-simple-example" onClose={modalCloseHandler} className="nx-modal--wide">
          <header className="nx-modal-header">
            <h2 className="nx-h2">
              <NxFontAwesomeIcon icon={faAngry} />
              <span>Modal header</span>
            </h2>
          </header>
          <div className="nx-modal-content">
            <NxTabs activeTab={activeTabId} onTabSelect={handleTabSelect}>
              <NxTabList aria-label="Simple Tabs">
                <NxTab data-text="Tab">Tab</NxTab>
                <NxTab data-text="Tab with longer name">Tab with longer name</NxTab>
                <NxTab data-text="Another Tab 3">Another Tab 3</NxTab>
                <NxTab data-text="Forth Tab">Forth Tab</NxTab>
              </NxTabList>
              <NxTabPanel>Tab 1</NxTabPanel>
              <NxTabPanel>Tab 2</NxTabPanel>
              <NxTabPanel>Tab 3</NxTabPanel>
              <NxTabPanel>Tab 4</NxTabPanel>
            </NxTabs>
          </div>
          <footer className="nx-modal-footer">
            <div className="nx-btn-bar">
              <button type="button" onClick={modalCloseHandler} className="nx-btn">Close</button>
            </div>
          </footer>
        </NxModal>
      }
    </>
  );
};

export default NxTabsModalExample;
