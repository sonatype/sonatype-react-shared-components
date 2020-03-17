/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { Fragment, ReactNode } from 'react';
import { toPairs, keys, map, pipe } from 'ramda';

import pageConfig from './pageConfig';
import {NavLink} from 'react-router-dom';
import { PageMapping } from './pageConfigTypes';

const renderLinks: ((categoryEntries: PageMapping) => ReactNode) = pipe(
    keys,
    map((pageName: string) =>
      <dd key={pageName} className="gallery-nav-link">
        <NavLink to={`/pages/${pageName}`} className="gallery-link">{pageName}</NavLink>
      </dd>
    )
);

const categories = map(
    ([categoryName, categoryEntries]: [string, PageMapping]) =>
      <Fragment key={categoryName}>
        <dt className="gallery-nav-category">{categoryName}</dt>
        {renderLinks(categoryEntries)}
      </Fragment>,
    toPairs(pageConfig)
);

function GalleryNav() {
  return (
    <nav className="gallery-nav">
      <dl className="gallery-nav-links">
        {categories}
      </dl>
    </nav>
  );
}

export default GalleryNav;
