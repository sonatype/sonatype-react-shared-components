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
    <NxTree>
      <NxTree.Item>
        <NxTree.ItemLabel>
          <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
          /
        </NxTree.ItemLabel>
        <NxTree>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              bin
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              boot
            </NxTree.ItemLabel>
            <NxTree>
              <NxTree.Item>
                <NxTree.ItemLabel>
                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                  EFI
                </NxTree.ItemLabel>
                <NxTree>
                  <NxTree.Item>
                    <NxTree.ItemLabel>
                      <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                      systemd
                    </NxTree.ItemLabel>
                    <NxTree>
                      <NxTree.Item>
                        <NxTree.ItemLabel>
                          <NxFontAwesomeIcon fixedWidth icon={faFile} />
                          systemd-bootx64.efi
                        </NxTree.ItemLabel>
                      </NxTree.Item>
                    </NxTree>
                  </NxTree.Item>
                </NxTree>
              </NxTree.Item>
              <NxTree.Item>
                <NxTree.ItemLabel>
                  <NxFontAwesomeIcon fixedWidth icon={faFile} />
                  initramfs-linux.img
                </NxTree.ItemLabel>
              </NxTree.Item>
              <NxTree.Item>
                <NxTree.ItemLabel>
                  <NxFontAwesomeIcon fixedWidth icon={faFile} />
                  vmlinuz-linux
                </NxTree.ItemLabel>
              </NxTree.Item>
            </NxTree>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              dev
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              etc
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              home
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              lib
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              mnt
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              opt
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              proc
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              run
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              sbin
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              srv
            </NxTree.ItemLabel>
            <NxTree>
              <NxTree.Item>
                <NxTree.ItemLabel>
                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                  ftp
                </NxTree.ItemLabel>
                <NxTree>
                </NxTree>
              </NxTree.Item>
              <NxTree.Item>
                <NxTree.ItemLabel>
                  <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
                  http
                </NxTree.ItemLabel>
                <NxTree>
                  <NxTree.Item>
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
                        <NxTree>
                          <NxTree.Item>
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
                          <NxTree.Item>
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
                              <NxTree.Item>
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
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              sys
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              tmp
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              usr
            </NxTree.ItemLabel>
            <NxTree>
            </NxTree>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faFolderOpen} />
              var
            </NxTree.ItemLabel>
          </NxTree.Item>
        </NxTree>
      </NxTree.Item>
    </NxTree>
  );
}
