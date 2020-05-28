/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

const NxListWithBullets = () =>
  <div className="nx-list nx-list--bulleted">
    <h4 className="nx-list__title">
      List title
    </h4>
    <ul>
      <li className="nx-list__item">
        item 1
      </li>
      <li className="nx-list__item">
        <span>Item 2</span>
        <ul className="nx-list nx-list--bulleted">
          <li className="nx-list__item">
            item 1
          </li>
          <li className="nx-list__item">
            Item 2
          </li>
          <li className="nx-list__item">
            <span>item 3</span>
            <ul className="nx-list nx-list--bulleted">
              <li className="nx-list__item">
                item 1
              </li>
              <li className="nx-list__item">
                Item 2
              </li>
              <li className="nx-list__item">
                item 3
              </li>
            </ul>
          </li>
          <li className="nx-list__item">
            Item 4
          </li>
        </ul>
      </li>
      <li className="nx-list__item">
        Item 3
      </li>
    </ul>
  </div>;

export default NxListWithBullets;
