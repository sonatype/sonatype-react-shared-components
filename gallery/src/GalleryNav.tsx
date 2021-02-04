/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, ReactNode } from 'react';
import { addIndex, toPairs, keys, map, pipe } from 'ramda';
import { NxTreeView, NxTreeViewChild } from '@sonatype/react-shared-components';

import pageConfig from './pageConfig';
import {NavLink} from 'react-router-dom';
import { PageMapping, PageConfig } from './pageConfigTypes';

const renderLinks: ((categoryEntries: PageMapping) => ReactNode) = pipe(
    keys,
    map((pageName: string) =>
      <NxTreeViewChild key={pageName}>
        <NavLink to={`/pages/${pageName}`} activeClassName="selected">{pageName}</NavLink>
      </NxTreeViewChild>
    )
);

interface GalleryNavTreeViewProps {
  defaultOpen: boolean;
  categoryName: string;
  categoryEntries: PageMapping;
}

function GalleryNavTreeView({ categoryName, categoryEntries, defaultOpen }: GalleryNavTreeViewProps) {
  const [toggleCheck, setToggleCheck] = useState(defaultOpen),
      onToggleCollapse = () => setToggleCheck(!toggleCheck);

  return (
    <NxTreeView onToggleCollapse={onToggleCollapse}
                isOpen={toggleCheck}
                triggerContent={categoryName}>
      {renderLinks(categoryEntries)}
    </NxTreeView>
  );
}

// create a GalleryNavTreeView for each entry in the pageConfig. Only the first one is expanded by default
const categories = pipe<PageConfig, [string, PageMapping][], ReactNode[]>(
    toPairs,
    addIndex<[string, PageMapping], ReactNode>(map)(([categoryName, categoryEntries], idx) =>
      <GalleryNavTreeView key={categoryName} defaultOpen={!idx} { ...({ categoryName, categoryEntries }) }/>)
)(pageConfig);

function GalleryNav() {
  return <nav>{categories}</nav>;
}

export default GalleryNav;
