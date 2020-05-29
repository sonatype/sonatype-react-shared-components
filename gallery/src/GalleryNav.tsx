/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, ReactNode } from 'react';
import { toPairs, keys, map, pipe } from 'ramda';
import { NxTreeView, NxTreeViewChild } from '@sonatype/react-shared-components';

import pageConfig from './pageConfig';
import {NavLink} from 'react-router-dom';
import { PageMapping, PageConfig } from './pageConfigTypes';

const renderLinks: ((categoryEntries: PageMapping) => ReactNode) = pipe(
    keys,
    map((pageName: string) =>
      <NxTreeViewChild key={pageName} className="gallery-nav-link">
        <NavLink to={`/pages/${pageName}`} className="gallery-link">{pageName}</NavLink>
      </NxTreeViewChild>
    )
);

interface GalleryNavTreeViewProps {
  categoryName: string;
  categoryEntries: PageMapping;
};

function GalleryNavTreeView({ categoryName, categoryEntries }: GalleryNavTreeViewProps) {
  const [toggleCheck, setToggleCheck] = useState(false),
      onToggleCollapse = () => setToggleCheck(!toggleCheck);

  return (
    <NxTreeView onToggleCollapse={onToggleCollapse}
                isOpen={toggleCheck}
                triggerContent={categoryName}>
      {renderLinks(categoryEntries)}
    </NxTreeView>
  );
}

const categories = pipe<PageConfig, [string, PageMapping][], ReactNode[]>(
    toPairs,
    map(([categoryName, categoryEntries]) =>
      <GalleryNavTreeView key={categoryName} { ...({ categoryName, categoryEntries }) }/>)
)(pageConfig);

function GalleryNav() {
  return (
    <nav className="gallery-nav">
      {categories}
    </nav>
  );
}

export default GalleryNav;
