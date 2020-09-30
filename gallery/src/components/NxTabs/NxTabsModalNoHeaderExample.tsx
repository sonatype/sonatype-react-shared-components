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
  NxButton
} from '@sonatype/react-shared-components';

const NxTabsModalNoHeaderExample = () => {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);

  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <>
      <NxButton onClick={() => setShowModal(true)}>Open Modal</NxButton>
      { showModal &&
        <NxModal onClose={modalCloseHandler} className="nx-modal--wide">
          <div className="nx-modal-content nx-modal-content--tabs">
            <NxTabs activeTab={activeTabId} onTabSelect={setActiveTabId}>
              <NxTabList aria-label="Tabs in a modal with no header">
                <NxTab>Tab</NxTab>
                <NxTab>Tab with longer name</NxTab>
                <NxTab>Another Tab 3</NxTab>
                <NxTab>Fourth Tab</NxTab>
              </NxTabList>
              <NxTabPanel>Tab 1</NxTabPanel>
              <NxTabPanel>Tab 2</NxTabPanel>
              <NxTabPanel>Tab 3</NxTabPanel>
              <NxTabPanel>Tab 4</NxTabPanel>
            </NxTabs>
          </div>
          <footer className="nx-footer">
            <div className="nx-btn-bar">
            <NxButton type="button" onClick={modalCloseHandler}>Close</NxButton>
            </div>
          </footer>
        </NxModal>
      }
    </>
  );
};

export default NxTabsModalNoHeaderExample;
