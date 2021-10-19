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
          Provinces
        </NxTree.ItemLabel>
        <NxTree>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              Ontario
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              Quebec
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              Nova Scotia
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              New Brunswick
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              Manitoba
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              British Columbia
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              Prince Edward Island
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              Saskatchewan
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              Alberta
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              Newfoundland and Labrador
            </NxTree.ItemLabel>
          </NxTree.Item>
        </NxTree>
      </NxTree.Item>
      <NxTree.Item collapsible isOpen={territoriesOpen} onToggleCollapse={toggleTerritoriesOpen}>
        <NxTree.ItemLabel>
          <NxFontAwesomeIcon fixedWidth icon={faGlobeAmericas} />
          Territories
        </NxTree.ItemLabel>
        <NxTree>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              Northwest Territories
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              Yukon
            </NxTree.ItemLabel>
          </NxTree.Item>
          <NxTree.Item>
            <NxTree.ItemLabel>
              <NxFontAwesomeIcon fixedWidth icon={faLocationArrow} />
              Nunavut
            </NxTree.ItemLabel>
          </NxTree.Item>
        </NxTree>
      </NxTree.Item>
    </NxTree>
  );
}
