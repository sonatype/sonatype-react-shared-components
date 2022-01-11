/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, ReactNode, useEffect } from 'react';
import {
  toPairs,
  keys,
  map,
  pipe,
  includes,
  pickBy,
  head,
  over,
  lensProp,
  not,
  mapObjIndexed,
  isEmpty,
  complement,
  values
} from 'ramda';
import { NxTreeView, NxTreeViewChild, NxFilterInput, NxTreeViewProps } from '@sonatype/react-shared-components';

import pageConfig from './pageConfig';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { PageMapping, PageConfig } from './pageConfigTypes';
import { markByFilter, matchesFilter } from './filterUtil';

const renderLinks = (filter?: string) => pipe(
    keys,
    map((pageName: string) =>
      <NxTreeViewChild key={pageName} role="menuitem">
        <NavLink to={`/pages/${pageName}`} activeClassName="selected">
          {markByFilter(filter, pageName)}
        </NavLink>
      </NxTreeViewChild>
    )
);

interface GalleryNavTreeViewProps {
  isOpen: boolean;
  categoryName: string;
  filter: string;
  categoryEntries: PageMapping;
  onToggleCollapse: NxTreeViewProps['onToggleCollapse'];
}

function GalleryNavTreeView(props: GalleryNavTreeViewProps) {
  const { categoryName, categoryEntries, filter, onToggleCollapse, isOpen } = props,
      renderLinksWithFilter = renderLinks(filter);

  return (
    <NxTreeView role="menu"
                onToggleCollapse={onToggleCollapse}
                isOpen={isOpen}
                triggerContent={categoryName}>
      {renderLinksWithFilter(categoryEntries)}
    </NxTreeView>
  );
}

function GalleryNav() {
  const { pathname } = useLocation(),
      currentPageName = (pathname.match(/\/pages\/(.*)$/) || [])[1],
      firstTree = head(keys(pageConfig)),

      // Have the tree for the current page expanded. if we are on a page that doesn't appear in the nav (e.g. the
      // home page) then expand the first tree
      initialOpenTreeViews: Record<string, boolean> = mapObjIndexed(
          (categoryEntries, treeName) => currentPageName ?
            includes(currentPageName, keys(categoryEntries)) :
            treeName === firstTree,
          pageConfig
      ),

      [filter, setFilter] = useState(''),

      // state of which tree views should be open when we aren't filtering - when we _are_ filtering, all tree
      // views should be open (though some may not be rendered at all in that case)
      [openTreeViews, setOpenTreeViews] = useState(initialOpenTreeViews),
      isFiltering = !!filter,
      filteredConfig: PageConfig = isFiltering ? pipe<PageConfig, PageConfig, PageConfig>(
          map<PageConfig, PageConfig>(pickBy<PageMapping>((_, pageName) => matchesFilter(filter, pageName))),
          pickBy(complement(isEmpty))
      )(pageConfig) : pageConfig,
      filteredCategories = pipe<PageConfig, [string, PageMapping][], ReactNode[]>(
          toPairs,
          map(([categoryName, categoryEntries]) =>
            <GalleryNavTreeView key={categoryName}
                                filter={filter}
                                isOpen={isFiltering || openTreeViews[categoryName]}
                                onToggleCollapse={() => setOpenTreeViews(over(lensProp(categoryName), not))}
                                categoryEntries={categoryEntries}
                                categoryName={categoryName} />
          )
      )(filteredConfig);

  // keep the filter in session storage so it persists across refreshes
  useEffect(() => {
    const savedFilter = sessionStorage.getItem('nav-filter');
    if (savedFilter) {
      setFilter(savedFilter);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('nav-filter', filter);
  }, [filter]);

  function onFilterKeyPress(keyCode: string) {
    if (isFiltering && keyCode === 'Enter') {
      const firstMatchingCategoryEntries = head(values(filteredConfig)),
          firstMatchingPage = firstMatchingCategoryEntries && head(keys(firstMatchingCategoryEntries));

      if (firstMatchingPage) {
        location.assign(`#/pages/${firstMatchingPage}`);
      }
    }
  }

  return (
    <nav>
      <NxFilterInput placeholder="Search RSC…"
                     value={filter}
                     onChange={setFilter}
                     onKeyPress={onFilterKeyPress} />
      {filteredCategories}
    </nav>
  );
}

export default GalleryNav;
