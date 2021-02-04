/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, ReactNode } from 'react';
import { addIndex, toPairs, keys, map, pipe, includes } from 'ramda';
import { NxTreeView, NxTreeViewChild } from '@sonatype/react-shared-components';

import pageConfig from './pageConfig';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
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
  const { pathname } = useLocation(),
      pageName = (pathname.match(/\/pages\/(.*)$/) || [])[1],

      // Have the tree for the current page expanded. if we are on a page that doesn't appear in the nav (e.g. the
      // home page) then follow defaultOpen which, per the code farther down, will just expand the first tree
      isInitiallyOpen = pageName ? includes(pageName, keys(categoryEntries)) : defaultOpen,
      [toggleCheck, setToggleCheck] = useState(isInitiallyOpen),
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
