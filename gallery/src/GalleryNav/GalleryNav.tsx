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
import {
  NxCollapsibleItems,
  NxFilterInput,
  NxCollapsibleItemsProps,
  NxFontAwesomeIcon
} from '@sonatype/react-shared-components';
import classnames from 'classnames';

import pageConfig from '../pageConfig';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { PageMapping, PageConfig, PageContentDescription } from '../pageConfigTypes';
import { markByFilter, matchesFilter } from '../filterUtil';

import { faFile, faCode, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { faReact, faSass, faJs } from '@fortawesome/free-brands-svg-icons';
import { GalleryNavIconCSS3 } from './GalleryNavIcons';

import './GalleryNav.scss';

const PAGE_TYPE_TO_ICON_MAP = {
  'documentation': <NxFontAwesomeIcon icon={faFile} fixedWidth />,
  'react': <NxFontAwesomeIcon icon={faReact} fixedWidth />,
  'html': <NxFontAwesomeIcon icon={faCode} fixedWidth />,
  'layout': <NxFontAwesomeIcon icon={faRulerCombined} fixedWidth />,
  'sass': <NxFontAwesomeIcon icon={faSass} fixedWidth />,
  'js': <NxFontAwesomeIcon icon={faJs} fixedWidth />,
  'css': <GalleryNavIconCSS3 />
};

interface GalleryNavLinkProps {
  className?: string;
  pageName: string;
  filter?: string;
  entry: PageContentDescription;
}

/**
 * This component smooths over an incompatibility between the className API of NavLink and what
 * NxCollapsibleItems.Child does to its child's className
 */
function GalleryNavLink({ className, pageName, filter, entry }: GalleryNavLinkProps) {
  return (
    <NavLink className={({ isActive }) => classnames(className, 'gallery-nav-link', isActive ? 'selected' : '')}
             to={`/pages/${pageName}`}>
      <span className="gallery-nav-link__icon">
        {PAGE_TYPE_TO_ICON_MAP[entry.type]}
      </span>
      <span className="gallery-nav-link__label">
        {markByFilter(filter, pageName)}
      </span>
    </NavLink>
  );
}

const renderLinks = (filter?: string) =>
  (entries: PageMapping) => Object
      .entries(entries)
      .map(([pageName, entry]) =>
        <NxCollapsibleItems.Child key={pageName} role="menuitem">
          <GalleryNavLink { ...{ pageName, filter, entry } } />
        </NxCollapsibleItems.Child>
      );

interface GalleryNavTreeViewProps {
  isOpen: boolean;
  categoryName: string;
  filter: string;
  categoryEntries: PageMapping;
  onToggleCollapse: NxCollapsibleItemsProps['onToggleCollapse'];
}

function GalleryNavTreeView(props: GalleryNavTreeViewProps) {
  const { categoryName, categoryEntries, filter, onToggleCollapse, isOpen } = props,
      renderLinksWithFilter = renderLinks(filter);

  return (
    <NxCollapsibleItems onToggleCollapse={onToggleCollapse}
                        isOpen={isOpen}
                        triggerContent={categoryName}
                        role="menu">
      {renderLinksWithFilter(categoryEntries)}
    </NxCollapsibleItems>
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
      filteredConfig: PageConfig = isFiltering ? pipe<[PageConfig], PageConfig, PageConfig>(
          map<PageConfig, PageConfig>(pickBy<PageMapping>((_, pageName) => matchesFilter(filter, pageName))),
          pickBy(complement(isEmpty))
      )(pageConfig) : pageConfig,
      filteredCategories = pipe<[PageConfig], [string, PageMapping][], ReactNode[]>(
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
      <NxFilterInput placeholder="Filter components"
                     value={filter}
                     onChange={setFilter}
                     onKeyPress={onFilterKeyPress} />
      {filteredCategories}
    </nav>
  );
}

export default GalleryNav;
