/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFontAwesomeIcon, NxP, NxTextLink, NxThreatIndicator, NxTree } from '@sonatype/react-shared-components';
import { faFile, faFolderOpen, faKey } from '@fortawesome/free-solid-svg-icons';

export default function NxTreeCollapsibleExample() {
  return (
    <>
      <NxP>
        A paragraph above the tree. The tree should be left-aligned with this paragraph. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </NxP>
      <NxTree aria-label="No-gutter tree example" className="nx-tree--no-gutter">
        <NxTree.Item>
          <NxTree.ItemLabel>
            <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
            <span>/</span>
          </NxTree.ItemLabel>
          <NxTree>
            <NxTree.Item>
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
                <NxTree.Item>
                  <NxTree.ItemLabel>
                    <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                    <span>http</span>
                  </NxTree.ItemLabel>
                  <NxTree>
                    <NxTree.Item>
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
                        <NxTree.Item>
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
                        <NxTree.Item>
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
                            <NxTree.Item>
                              <NxTree.ItemLabel>
                                <NxTextLink external
                                            className="nx-dropdown-link"
                                            href="https://www.sonatype.com">
                                  Website Link
                                </NxTextLink>
                              </NxTree.ItemLabel>
                            </NxTree.Item>
                            <NxTree.Item>
                              <NxTree.ItemLabel>
                                <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                                <span>keyboard</span>
                              </NxTree.ItemLabel>
                              <NxTree>
                                <NxTree.Item>
                                  <NxTree.ItemLabel>
                                    <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                                    <NxThreatIndicator threatLevelCategory="severe" />
                                    <span>keyboard1.webm</span>
                                  </NxTree.ItemLabel>
                                </NxTree.Item>
                                <NxTree.Item>
                                  <NxTree.ItemLabel>
                                    <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                                    <NxFontAwesomeIcon fixedWidth
                                                       className="gallery-example-custom-key-icon  nx-icon--colorful"
                                                       icon={faKey} />
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
    </>
  );
}
