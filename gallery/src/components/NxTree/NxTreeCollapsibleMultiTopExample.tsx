/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFontAwesomeIcon, NxTree, useToggle } from '@sonatype/react-shared-components';
import { faGlobeAmericas, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

export default function NxTreeCollapsibleExample() {
  const [provincesOpen, toggleProvincesOpen] = useToggle(true),
      [territoriesOpen, toggleTerritoriesOpen] = useToggle(true);

  return (
    <NxTree>
      <NxTree.Item collapsible isOpen={provincesOpen} onToggleCollapse={toggleProvincesOpen}>
        <NxTree.ItemLabel>
          <NxFontAwesomeIcon fixedWidth icon={faGlobeAmericas} />
          <span>Provinces</span>
        </NxTree.ItemLabel>
        <NxTree>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              <span>Ontario</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              <span>Quebec</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              <span>Nova Scotia</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              <span>New Brunswick</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              <span>Manitoba</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              <span>British Columbia</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              <span>Prince Edward Island</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              <span>Saskatchewan</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              <span>Alberta</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              <span>Newfoundland and Labrador</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
        </NxTree>
      </NxTree.Item>
      <NxTree.Item collapsible isOpen={territoriesOpen} onToggleCollapse={toggleTerritoriesOpen}>
        <NxTree.ItemLabel>
          <NxFontAwesomeIcon fixedWidth icon={faGlobeAmericas} />
          <span>Territories</span>
        </NxTree.ItemLabel>
        <NxTree>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              <span>Northwest Territories</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              <span>Yukon</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              <span>Nunavut</span>
            </NxTree.ItemLabel>
          </NxTree.Item>
        </NxTree>
      </NxTree.Item>
    </NxTree>
  );
}
