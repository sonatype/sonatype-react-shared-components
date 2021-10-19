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
          /
        </NxTree.ItemLabel>
        <NxTree>
          <NxTree.StatefulItem collapsible>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              srv
            </NxTree.ItemLabel>
            <NxTree>
              <NxTree.StatefulItem>
                <NxTree.ItemLabel>
                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                  ftp
                </NxTree.ItemLabel>
                <NxTree>
                </NxTree>
              </NxTree.StatefulItem>
              <NxTree.StatefulItem collapsible>
                <NxTree.ItemLabel>
                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                  http
                </NxTree.ItemLabel>
                <NxTree>
                  <NxTree.StatefulItem collapsible>
                    <NxTree.ItemLabel>
                      <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                      cats
                    </NxTree.ItemLabel>
                    <NxTree>
                      <NxTree.StatefulItem>
                        <NxTree.ItemLabel>
                          <NxFontAwesomeIcon fixedWidth icon={faFile} />
                          index.html
                        </NxTree.ItemLabel>
                      </NxTree.StatefulItem>
                      <NxTree.StatefulItem collapsible>
                        <NxTree.ItemLabel>
                          <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                          images
                        </NxTree.ItemLabel>
                        <NxTree>
                          <NxTree.StatefulItem>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              cat1.jpg
                            </NxTree.ItemLabel>
                          </NxTree.StatefulItem>
                          <NxTree.StatefulItem>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              cat2.jpg
                            </NxTree.ItemLabel>
                          </NxTree.StatefulItem>
                          <NxTree.StatefulItem>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              cat3.jpg
                            </NxTree.ItemLabel>
                          </NxTree.StatefulItem>
                          <NxTree.StatefulItem>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              cat5000.jpg
                            </NxTree.ItemLabel>
                          </NxTree.StatefulItem>
                        </NxTree>
                      </NxTree.StatefulItem>
                      <NxTree.StatefulItem collapsible>
                        <NxTree.ItemLabel>
                          <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                          videos
                        </NxTree.ItemLabel>
                        <NxTree>
                          <NxTree.StatefulItem>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              boxes.webm
                            </NxTree.ItemLabel>
                          </NxTree.StatefulItem>
                          <NxTree.StatefulItem>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFile} />
                              cucumber.webm
                            </NxTree.ItemLabel>
                          </NxTree.StatefulItem>
                          <NxTree.StatefulItem collapsible>
                            <NxTree.ItemLabel>
                              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                              keyboard
                            </NxTree.ItemLabel>
                            <NxTree>
                              <NxTree.StatefulItem>
                                <NxTree.ItemLabel>
                                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                                  keyboard1.webm
                                </NxTree.ItemLabel>
                              </NxTree.StatefulItem>
                              <NxTree.StatefulItem>
                                <NxTree.ItemLabel>
                                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                                  keyboard2.webm
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
