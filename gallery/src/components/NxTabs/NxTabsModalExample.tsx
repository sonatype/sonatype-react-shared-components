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
  NxButton,
  NxFontAwesomeIcon,
  NxList
} from '@sonatype/react-shared-components';

import {faAngry} from '@fortawesome/free-solid-svg-icons';

const NxTabsModalExample = () => {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);

  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <>
      <NxButton onClick={() => setShowModal(true)}>Open Modal</NxButton>
      { showModal &&
        <NxModal onCancel={modalCloseHandler}>
          <header className="nx-modal-header">
            <h2 className="nx-h2">
              <NxFontAwesomeIcon icon={faAngry} />
              <span>Modal header</span>
            </h2>
          </header>
          <div className="nx-modal-content nx-modal-content--tabs">
            <NxTabs activeTab={activeTabId} onTabSelect={setActiveTabId}>
              <NxTabList aria-label="Tabs in a Modal">
                <NxTab>Tab</NxTab>
                <NxTab>Tab with longer name</NxTab>
                <NxTab>Another Tab 3</NxTab>
                <NxTab>Fourth Tab</NxTab>
              </NxTabList>
              <NxTabPanel>
                <NxList bulleted>
                  <NxList.Item>
                    <NxList.Text>Item 1</NxList.Text>
                  </NxList.Item>
                  <NxList.Item>
                    <NxList.Text>Item 2</NxList.Text>
                    <NxList bulleted>
                      <NxList.Item>
                        <NxList.Text>Item 1</NxList.Text>
                      </NxList.Item>
                      <NxList.Item>
                        <NxList.Text>Item 2</NxList.Text>
                      </NxList.Item>
                      <NxList.Item>
                        <NxList.Text>Item 3</NxList.Text>
                        <NxList bulleted>
                          <NxList.Item>
                            <NxList.Text>
                              Item 1 this list items is also long enough that it wraps, or at least it should if I have
                              typed enough text, how much wood would a woodchuck chuck
                            </NxList.Text>
                          </NxList.Item>
                          <NxList.Item>
                            <NxList.Text>Item 2</NxList.Text>
                          </NxList.Item>
                          <NxList.Item>
                            <NxList.Text>Item 3</NxList.Text>
                          </NxList.Item>
                        </NxList>
                      </NxList.Item>
                      <NxList.Item>
                        <NxList.Text>Item 4</NxList.Text>
                      </NxList.Item>
                    </NxList>
                  </NxList.Item>
                  <NxList.Item>
                    <NxList.Text>Item 3</NxList.Text>
                  </NxList.Item>
                </NxList>
              </NxTabPanel>
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

export default NxTabsModalExample;
