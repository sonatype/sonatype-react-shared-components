/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, Fragment, ReactNode } from 'react';
import { toPairs, keys, map, pipe } from 'ramda';
import { NxTreeView, NxTreeViewChild } from '@sonatype/react-shared-components';

import pageConfig from './pageConfig';
import {NavLink} from 'react-router-dom';
import { PageMapping } from './pageConfigTypes';

const renderLinks: ((categoryEntries: PageMapping) => ReactNode) = pipe(
    keys,
    map((pageName: string) =>
      <NxTreeViewChild key={pageName} className="gallery-nav-link">
        <NavLink to={`/pages/${pageName}`} className="gallery-link">{pageName}</NavLink>
      </NxTreeViewChild>
    )
);
const [toggleCheck, setToggleCheck] = useState(false),
      onToggleCollapse = () => setToggleCheck(!toggleCheck);
const categories = map(
    ([categoryName, categoryEntries]: [string, PageMapping]) =>
      <Fragment key={categoryName}>
        <NxTreeView onToggleCollapse={onToggleCollapse}
                isOpen={toggleCheck}
                triggerContent={categoryName}>
          {renderLinks(categoryEntries)}
        </NxTreeView>
      </Fragment>,
    toPairs(pageConfig)
);

function GalleryNav() {
  return (
    <nav className="gallery-nav">
      {categories}
    </nav>
  );
}

export default GalleryNav;
