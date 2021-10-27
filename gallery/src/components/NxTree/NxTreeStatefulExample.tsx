/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFontAwesomeIcon, NxTree } from '@sonatype/react-shared-components';
import { faFile, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

export default function NxTreeCollapsibleExample() {
  return (
    <NxTree>
      <NxTree.StatefulItem collapsible>
        <NxTree.ItemLabel>
          <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
          <span>/</span>
        </NxTree.ItemLabel>
        <NxTree>
          <NxTree.StatefulItem collapsible>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              <span>srv</span>
            </NxTree.ItemLabel>
            <NxTree>
              <NxTree.StatefulItem>
                <NxTree.ItemLabel>
                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                  <span>ftp</span>
                </NxTree.ItemLabel>
                <NxTree>
                </NxTree>
              </NxTree.StatefulItem>
              <NxTree.StatefulItem collapsible>
                <NxTree.ItemLabel>
                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                  <span>http</span>
                </NxTree.ItemLabel>
                <NxTree>
                  <NxTree.StatefulItem collapsible>
                    <NxTree.ItemLabel>
                      <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                      <span>cats</span>
                    </NxTree.ItemLabel>
                    <NxTree>
                      <NxTree.StatefulItem>
                        <NxTree.ItemLabel>
                          <NxFontAwesomeIcon fixedWidth icon={faFile} />
                          <span>index.html</span>
                        </NxTree.ItemLabel>
                      </NxTree.StatefulItem>
                      <NxTree.StatefulItem collapsible>
                        <NxTree.ItemLabel>
                          <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                          <span>images</span>
                        </NxTree.ItemLabel>
                        <NxTree>
                          <NxTree.StatefulItem>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              <span>cat1.jpg</span>
                            </NxTree.ItemLabel>
                          </NxTree.StatefulItem>
                          <NxTree.StatefulItem>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              <span>cat2.jpg</span>
                            </NxTree.ItemLabel>
                          </NxTree.StatefulItem>
                          <NxTree.StatefulItem>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              <span>cat3.jpg</span>
                            </NxTree.ItemLabel>
                          </NxTree.StatefulItem>
                          <NxTree.StatefulItem>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              <span>cat5000.jpg</span>
                            </NxTree.ItemLabel>
                          </NxTree.StatefulItem>
                        </NxTree>
                      </NxTree.StatefulItem>
                      <NxTree.StatefulItem collapsible>
                        <NxTree.ItemLabel>
                          <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                          <span>videos</span>
                        </NxTree.ItemLabel>
                        <NxTree>
                          <NxTree.StatefulItem>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              <span>boxes.webm</span>
                            </NxTree.ItemLabel>
                          </NxTree.StatefulItem>
                          <NxTree.StatefulItem>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              <span>cucumber.webm</span>
                            </NxTree.ItemLabel>
                          </NxTree.StatefulItem>
                          <NxTree.StatefulItem collapsible>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                              <span>keyboard</span>
                            </NxTree.ItemLabel>
                            <NxTree>
                              <NxTree.StatefulItem>
                                <NxTree.ItemLabel>
                                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                                  <span>keyboard1.webm</span>
                                </NxTree.ItemLabel>
                              </NxTree.StatefulItem>
                              <NxTree.StatefulItem>
                                <NxTree.ItemLabel>
                                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                                  <span>keyboard2.webm</span>
                                </NxTree.ItemLabel>
                              </NxTree.StatefulItem>
                            </NxTree>
                          </NxTree.StatefulItem>
                        </NxTree>
                      </NxTree.StatefulItem>
                    </NxTree>
                  </NxTree.StatefulItem>
                </NxTree>
              </NxTree.StatefulItem>
            </NxTree>
          </NxTree.StatefulItem>
        </NxTree>
      </NxTree.StatefulItem>
    </NxTree>
  );
}
