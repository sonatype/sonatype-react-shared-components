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
  NxFontAwesomeIcon
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
        <NxModal onClose={modalCloseHandler}>
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
                <ul className="nx-list nx-list--bulleted">
                  <li className="nx-list__item">
                    <span className="nx-list__text">Item 1</span>
                  </li>
                  <li className="nx-list__item">
                    <span className="nx-list__text">Item 2</span>
                    <ul className="nx-list nx-list--bulleted">
                      <li className="nx-list__item">
                        <span className="nx-list__text">Item 1</span>
                      </li>
                      <li className="nx-list__item">
                        <span className="nx-list__text">Item 2</span>
                      </li>
                      <li className="nx-list__item">
                        <span className="nx-list__text">Item 3</span>
                        <ul className="nx-list nx-list--bulleted">
                          <li className="nx-list__item">
                            <span className="nx-list__text">
                              Item 1 this list items is also long enough that it wraps, or at least it should if I have
                              typed enough text, how much wood would a woodchuck chuck
                            </span>
                          </li>
                          <li className="nx-list__item">
                            <span className="nx-list__text">Item 2</span>
                          </li>
                          <li className="nx-list__item">
                            <span className="nx-list__text">Item 3</span>
                          </li>
                        </ul>
                      </li>
                      <li className="nx-list__item">
                        <span className="nx-list__text">Item 4</span>
                      </li>
                    </ul>
                  </li>
                  <li className="nx-list__item">
                    <span className="nx-list__text">Item 3</span>
                  </li>
                </ul>
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
