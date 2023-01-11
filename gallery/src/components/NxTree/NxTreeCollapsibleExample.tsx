/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFontAwesomeIcon, NxTextLink, NxTree, useToggle } from '@sonatype/react-shared-components';
import { faFile, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const catImagePath = require('../../assets/images/cat1.jpg');

export default function NxTreeCollapsibleExample() {
  const [rootOpen, toggleRootOpen] = useToggle(true),
      [srvOpen, toggleSrvOpen] = useToggle(true),
      [httpOpen, toggleHttpOpen] = useToggle(true),
      [catsOpen, toggleCatsOpen] = useToggle(true),
      [imagesOpen, toggleImagesOpen] = useToggle(true),
      [videosOpen, toggleVideosOpen] = useToggle(true),
      [keyboardOpen, toggleKeyboardOpen] = useToggle(true);

  return (
    <NxTree aria-label="Non-collapsible tree example">
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
                      <NxTree.Item collapsible
                                   isOpen={imagesOpen}
                                   onToggleCollapse={toggleImagesOpen}
                                   onActivate={() => document.getElementById('images-link')?.click()}>
                        <NxTree.ItemLabel>
                          <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                          <NxTextLink href={catImagePath} id="images-link" tabIndex={-1}>
                            images
                          </NxTextLink>
                        </NxTree.ItemLabel>
                        <NxTree>
                          <NxTree.Item onActivate={() => document.getElementById('cat1-link')?.click()}>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              <NxTextLink href={catImagePath} id="cat1-link" newTab tabIndex={-1}>
                                cat1.jpg
                              </NxTextLink>
                            </NxTree.ItemLabel>
                          </NxTree.Item>
                          <NxTree.Item onActivate={() => document.getElementById('cat2-link')?.click()}>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              <NxTextLink href={catImagePath} id="cat2-link" newTab tabIndex={-1}>
                                cat2.jpg
                              </NxTextLink>
                            </NxTree.ItemLabel>
                          </NxTree.Item>
                          <NxTree.Item onActivate={() => document.getElementById('cat3-link')?.click()}>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              <NxTextLink href={catImagePath} id="cat3-link" newTab tabIndex={-1}>
                                cat3.jpg
                              </NxTextLink>
                            </NxTree.ItemLabel>
                          </NxTree.Item>
                          <NxTree.Item onActivate={() => document.getElementById('cat5000-link')?.click()}>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              <NxTextLink href={catImagePath} id="cat5000-link" newTab tabIndex={-1}>
                                cat5000.jpg
                              </NxTextLink>
                            </NxTree.ItemLabel>
                          </NxTree.Item>
                        </NxTree>
                      </NxTree.Item>
                      <NxTree.Item collapsible
                                   isOpen={videosOpen}
                                   onToggleCollapse={toggleVideosOpen}
                                   onActivate={() => document.getElementById('videos-link')?.click()}>
                        <NxTree.ItemLabel>
                          <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                          <NxTextLink id="videos-link" onClick={() => { alert('videos'); }}>
                            videos
                          </NxTextLink>
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
