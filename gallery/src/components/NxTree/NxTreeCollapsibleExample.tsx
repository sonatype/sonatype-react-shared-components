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
      [ftpOpen, toggleFtpOpen] = useToggle(true),
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
          /
        </NxTree.ItemLabel>
        <NxTree>
          <NxTree.Item collapsible isOpen={srvOpen} onToggleCollapse={toggleSrvOpen}>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              srv
            </NxTree.ItemLabel>
            <NxTree>
              <NxTree.Item collapsible isOpen={ftpOpen} onToggleCollapse={toggleFtpOpen}>
                <NxTree.ItemLabel>
                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                  ftp
                </NxTree.ItemLabel>
                <NxTree>
                </NxTree>
              </NxTree.Item>
              <NxTree.Item collapsible isOpen={httpOpen} onToggleCollapse={toggleHttpOpen}>
                <NxTree.ItemLabel>
                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                  http
                </NxTree.ItemLabel>
                <NxTree>
                  <NxTree.Item collapsible isOpen={catsOpen} onToggleCollapse={toggleCatsOpen}>
                    <NxTree.ItemLabel>
                      <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                      cats
                    </NxTree.ItemLabel>
                    <NxTree>
                      <NxTree.Item>
                        <NxTree.ItemLabel>
                          <NxFontAwesomeIcon fixedWidth icon={faFile} />
                          index.html
                        </NxTree.ItemLabel>
                      </NxTree.Item>
                      <NxTree.Item collapsible isOpen={imagesOpen} onToggleCollapse={toggleImagesOpen}>
                        <NxTree.ItemLabel>
                          <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                          images
                        </NxTree.ItemLabel>
                        <NxTree>
                          <NxTree.Item>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              cat1.jpg
                            </NxTree.ItemLabel>
                          </NxTree.Item>
                          <NxTree.Item>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              cat2.jpg
                            </NxTree.ItemLabel>
                          </NxTree.Item>
                          <NxTree.Item>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              cat3.jpg
                            </NxTree.ItemLabel>
                          </NxTree.Item>
                          <NxTree.Item>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              cat5000.jpg
                            </NxTree.ItemLabel>
                          </NxTree.Item>
                        </NxTree>
                      </NxTree.Item>
                      <NxTree.Item collapsible isOpen={videosOpen} onToggleCollapse={toggleVideosOpen}>
                        <NxTree.ItemLabel>
                          <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                          videos
                        </NxTree.ItemLabel>
                        <NxTree>
                          <NxTree.Item>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              boxes.webm
                            </NxTree.ItemLabel>
                          </NxTree.Item>
                          <NxTree.Item>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              cucumber.webm
                            </NxTree.ItemLabel>
                          </NxTree.Item>
                          <NxTree.Item collapsible isOpen={keyboardOpen} onToggleCollapse={toggleKeyboardOpen}>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                              keyboard
                            </NxTree.ItemLabel>
                            <NxTree>
                              <NxTree.Item>
                                <NxTree.ItemLabel>
                                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                                  keyboard1.webm
                                </NxTree.ItemLabel>
                              </NxTree.Item>
                              <NxTree.Item>
                                <NxTree.ItemLabel>
                                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                                  keyboard2.webm
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
