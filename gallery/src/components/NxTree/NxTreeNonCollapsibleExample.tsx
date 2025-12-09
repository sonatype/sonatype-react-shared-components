/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFontAwesomeIcon, NxTree } from '@sonatype/react-shared-components';
import { faFile, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

export default function NxTreeNonCollapsibleExample() {
  return (
    <NxTree aria-label="Non-collapsible tree example">
      <NxTree.Item>
        <NxTree.ItemLabel>
          <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
          <span>/</span>
        </NxTree.ItemLabel>
        <NxTree>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              <span>bin</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              <span>boot</span>
            </NxTree.ItemLabel>
            <NxTree>
              <NxTree.Item>
                <NxTree.ItemLabel>
                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                  <span>EFI</span>
                </NxTree.ItemLabel>
                <NxTree>
                  <NxTree.Item>
                    <NxTree.ItemLabel>
                      <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                      <span>systemd</span>
                    </NxTree.ItemLabel>
                    <NxTree>
                      <NxTree.Item>
                        <NxTree.ItemLabel>
                          <NxFontAwesomeIcon fixedWidth icon={faFile} />
                          <span>systemd-bootx64.efi</span>
                        </NxTree.ItemLabel>
                      </NxTree.Item>
                    </NxTree>
                  </NxTree.Item>
                </NxTree>
              </NxTree.Item>
              <NxTree.Item>
                <NxTree.ItemLabel>
                  <NxFontAwesomeIcon fixedWidth icon={faFile} />
                  <span>initramfs-linux.img</span>
                </NxTree.ItemLabel>
              </NxTree.Item>
              <NxTree.Item>
                <NxTree.ItemLabel>
                  <NxFontAwesomeIcon fixedWidth icon={faFile} />
                  <span>vmlinuz-linux</span>
                </NxTree.ItemLabel>
              </NxTree.Item>
            </NxTree>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              <span>dev</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              <span>etc</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              <span>home</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              <span>lib</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              <span>mnt</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              <span>opt</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              <span>proc</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              <span>run</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              <span>sbin</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
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
                <NxTree>
                </NxTree>
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
                              <NxTree.Item>
                                <NxTree.ItemLabel>
                                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                                  <span>
                                    {/* eslint-disable-next-line @stylistic/max-len */}
                                    longnamelongnamelongnamelongnamelongnamelongnamelongnamelongnamelongnamelongnamelongnamelongnamelongname.avi
                                  </span>
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
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              <span>sys</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              <span>tmp</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              <span>usr</span>
            </NxTree.ItemLabel>
            <NxTree>
            </NxTree>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              <span>var</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
        </NxTree>
      </NxTree.Item>
    </NxTree>
  );
}
