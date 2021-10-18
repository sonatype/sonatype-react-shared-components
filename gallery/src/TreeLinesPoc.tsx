/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxH2, NxTile } from '@sonatype/react-shared-components';

import './TreeLinesPoc.scss';

function Lines() {
  // note that x1, x2, y1, and y2 have default values of 0
  return (
    <>
      <svg className="poc-tree__line-intersection">
        <line className="poc-tree__top-line" x1="50%" x2="50%" y2="50%" />
        <line className="poc-tree__right-line" x1="50%" x2="100%" y1="50%" y2="50%" />
        <line className="poc-tree__bottom-line" x1="50%" x2="50%" y1="50%" y2="100%" />
      </svg>
      <svg className="poc-tree__line-drop">
        <line x1="50%" x2="50%" y2="100%" />
      </svg>
    </>
  );
}

export default function TreeLinesPoc() {
  return (
    <NxTile>
      <NxTile.Header>
        <NxTile.HeaderTitle>
          <NxH2>ASDF</NxH2>
        </NxTile.HeaderTitle>
      </NxTile.Header>
      <NxTile.Content>
        <div className="poc-tree poc-tree--top">
          <div className="poc-tree__item">
            <Lines />
            <span className="poc-tree__item-label">Top Level 1</span>
            <div className="poc-tree">
              <div className="poc-tree__item">
                <Lines />
                <span className="poc-tree__item-label">Child Level 1</span>
                <div className="poc-tree">
                  <div className="poc-tree__item">
                    <Lines />
                    <span className="poc-tree__item-label">Grandchild Level 1</span>
                  </div>
                </div>
              </div>
              <div className="poc-tree__item">
                <Lines />
                <span className="poc-tree__item-label">Child Level 2</span>
              </div>
              <div className="poc-tree__item">
                <Lines />
                <span className="poc-tree__item-label">Child Level 3</span>
              </div>
            </div>
          </div>
          <div className="poc-tree__item">
            <Lines />
            <span className="poc-tree__item-label">Top Level 2</span>
          </div>
        </div>
      </NxTile.Content>
    </NxTile>
  );
}
