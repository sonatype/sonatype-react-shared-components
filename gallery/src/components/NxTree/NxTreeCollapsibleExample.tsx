/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFontAwesomeIcon, NxTree, useToggle } from '@sonatype/react-shared-components';
import { faFile, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

export default function NxTreeCollapsibleExample() {
  const [rootOpen, toggleRootOpen] = useToggle(true),
      [srvOpen, toggleSrvOpen] = useToggle(true),
      [httpOpen, toggleHttpOpen] = useToggle(true),
      [catsOpen, toggleCatsOpen] = useToggle(true),
      [imagesOpen, toggleImagesOpen] = useToggle(true),
      [videosOpen, toggleVideosOpen] = useToggle(true),
      [keyboardOpen, toggleKeyboardOpen] = useToggle(true);

  return (
    <NxTree>
      <NxTree.Item collapsible isOpen={rootOpen} onToggleCollapse={toggleRootOpen}>
        <NxTree.ItemLabel>
          <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
          <span>/</span>
        </NxTree.ItemLabel>
        <NxTree>
          <NxTree.Item collapsible isOpen={srvOpen} onToggleCollapse={toggleSrvOpen}>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              <span>srv</span>
            </NxTree.ItemLabel>
            <NxTree>
              <NxTree.Item>
                <NxTree.ItemLabel>
                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                  <span>ftp</span>
                </NxTree.ItemLabel>
              </NxTree.Item>
              <NxTree.Item collapsible isOpen={httpOpen} onToggleCollapse={toggleHttpOpen}>
                <NxTree.ItemLabel>
                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                  <span>http</span>
                </NxTree.ItemLabel>
                <NxTree>
                  <NxTree.Item collapsible isOpen={catsOpen} onToggleCollapse={toggleCatsOpen}>
                    <NxTree.ItemLabel>
                      <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                      <span>cats</span>
                    </NxTree.ItemLabel>
                    <NxTree>
                      <NxTree.Item>
                        <NxTree.ItemLabel>
                          <NxFontAwesomeIcon fixedWidth icon={faFile} />
                          <span>index.html</span>
                        </NxTree.ItemLabel>
                      </NxTree.Item>
                      <NxTree.Item collapsible isOpen={imagesOpen} onToggleCollapse={toggleImagesOpen}>
                        <NxTree.ItemLabel>
                          <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                          <span>images</span>
                        </NxTree.ItemLabel>
                        <NxTree>
                          <NxTree.Item>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              <span>cat1.jpg</span>
                            </NxTree.ItemLabel>
                          </NxTree.Item>
                          <NxTree.Item>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              <span>cat2.jpg</span>
                            </NxTree.ItemLabel>
                          </NxTree.Item>
                          <NxTree.Item>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              <span>cat3.jpg</span>
                            </NxTree.ItemLabel>
                          </NxTree.Item>
                          <NxTree.Item>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              <span>cat5000.jpg</span>
                            </NxTree.ItemLabel>
                          </NxTree.Item>
                        </NxTree>
                      </NxTree.Item>
                      <NxTree.Item collapsible isOpen={videosOpen} onToggleCollapse={toggleVideosOpen}>
                        <NxTree.ItemLabel>
                          <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                          <span>videos</span>
                        </NxTree.ItemLabel>
                        <NxTree>
                          <NxTree.Item>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              <span>boxes.webm</span>
                            </NxTree.ItemLabel>
                          </NxTree.Item>
                          <NxTree.Item>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              <span>cucumber.webm</span>
                            </NxTree.ItemLabel>
                          </NxTree.Item>
                          <NxTree.Item collapsible isOpen={keyboardOpen} onToggleCollapse={toggleKeyboardOpen}>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                              <span>keyboard</span>
                            </NxTree.ItemLabel>
                            <NxTree>
                              <NxTree.Item>
                                <NxTree.ItemLabel>
                                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                                  <span>keyboard1.webm</span>
                                </NxTree.ItemLabel>
                              </NxTree.Item>
                              <NxTree.Item>
                                <NxTree.ItemLabel>
                                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                                  <span>keyboard2.webm</span>
                                </NxTree.ItemLabel>
                              </NxTree.Item>
                            </NxTree>
                          </NxTree.Item>
                        </NxTree>
                      </NxTree.Item>
                    </NxTree>
                  </NxTree.Item>
                </NxTree>
              </NxTree.Item>
            </NxTree>
          </NxTree.Item>
        </NxTree>
      </NxTree.Item>
    </NxTree>
  );
}
