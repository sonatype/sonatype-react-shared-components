/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxListV2 } from '@sonatype/react-shared-components';

function NxListSimple() {
  return (
    <NxListV2>
      <NxListV2.Title>List heading</NxListV2.Title>
      <dl className="nx-list nx-list--description-list">
        <div className="nx-list__item">
          <dt className="nx-list__term">Item 1</dt>
          <dd className="nx-list__description">
            A very interesting item. The first item. You might say it's the original. The item to begin
            all items. But not to end them; definitely not. Rest assured there will be more items after this one
            and they will definitely also have descriptions.
          </dd>
        </div>
        <div className="nx-list__item">
          <dt className="nx-list__term">Item 2</dt>
          <dd className="nx-list__description">
            The second item.
          </dd>
        </div>
        <div className="nx-list__item">
          <dt className="nx-list__term">Item 3</dt>
          <dd className="nx-list__description">
            The third item. Not interesting at all, unlike the first item.
          </dd>
        </div>
        <div className="nx-list__item">
          <dt className="nx-list__term">Item 9000000000000000000000000000000001</dt>
          <dd className="nx-list__description">It's over 9000!</dd>
        </div>
      </dl>
    </NxListV2>
  );
}

export default NxListSimple;
