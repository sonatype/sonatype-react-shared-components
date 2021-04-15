/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, ReactNode, useEffect } from 'react';
import { addIndex, toPairs, keys, map, pipe, includes, pickBy, isEmpty, toLower, reduce, head, tail, append } from 'ramda';
import { NxTreeView, NxTreeViewChild, NxFilterInput } from '@sonatype/react-shared-components';

import pageConfig from './pageConfig';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { PageMapping, PageConfig } from './pageConfigTypes';

function markByFilter(filter: string | undefined, text: string) {
  if (filter) {
    const [marked] = reduce<string, [ReactNode[], string[]]>(
      ([processed, remainingFilter], textChar) => {
          const isMatch = head(remainingFilter) === toLower(textChar),
              processedChar = isMatch ?
                  <mark key={remainingFilter.length} className="gallery-filter-match">{textChar}</mark> :
                  textChar,
              newRemainingFilter = isMatch ? tail(remainingFilter) : remainingFilter;

          return [append(processedChar, processed), newRemainingFilter];
      },
      [[], Array.from(toLower(filter))],
      Array.from(text)
    );

    return marked;
  }
  else {
    return text;
  }
}

const renderLinks = (filter?: string) => pipe(
    keys,
    map((pageName: string) =>
      <NxTreeViewChild key={pageName}>
        <NavLink to={`/pages/${pageName}`} activeClassName="selected">
          {markByFilter(filter, pageName)}
        </NavLink>
      </NxTreeViewChild>
    )
);

interface GalleryNavTreeViewProps {
  defaultOpen: boolean;
  categoryName: string;
  filter?: string;
  categoryEntries: PageMapping;
}

function GalleryNavTreeView({ categoryName, categoryEntries, filter, defaultOpen }: GalleryNavTreeViewProps) {
  const { pathname } = useLocation(),
      pageName = (pathname.match(/\/pages\/(.*)$/) || [])[1],

      // Have the tree for the current page expanded. if we are on a page that doesn't appear in the nav (e.g. the
      // home page) then follow defaultOpen which, per the code farther down, will just expand the first tree
      isInitiallyOpen = pageName ? includes(pageName, keys(categoryEntries)) : defaultOpen,
      [toggleCheck, setToggleCheck] = useState(isInitiallyOpen),
      onToggleCollapse = () => setToggleCheck(!toggleCheck),
      renderLinksWithFilter = renderLinks(filter);

  useEffect(() => {
    // When filtering, this tree view will only be rendered at all if its a filter match, so ensure it is
    // open.  When filtering is cancelled, fall back to isInitiallyOpen logic
    setToggleCheck(!!filter || isInitiallyOpen);
  }, [filter]);

  return (
    <NxTreeView onToggleCollapse={onToggleCollapse}
                isOpen={toggleCheck}
                triggerContent={categoryName}>
      {renderLinksWithFilter(categoryEntries)}
    </NxTreeView>
  );
}

// returns true if the pageName contains every character present in the filter in the same order, case insensitive
function matchesFilter(filter: string, pageName: string) {
  const unmatchedFilterChars = reduce(
    (remainingFilter, pageNameChar) =>
        head(remainingFilter) === pageNameChar ? tail(remainingFilter) : remainingFilter,
    Array.from(toLower(filter)),
    Array.from(toLower(pageName))
  );

  return isEmpty(unmatchedFilterChars);
}

function GalleryNav() {
  const [filter, setFilter] = useState(''),
      isFiltering = !!filter,

      // create a GalleryNavTreeView for each entry in the pageConfig that matches the filter.
      // Expand the tree views with matching contents, or expand the first one if no filtering is being done
      categories = pipe<PageConfig, [string, PageMapping][], ReactNode[]>(
          toPairs,
          addIndex<[string, PageMapping], ReactNode>(map)(([categoryName, categoryEntries], idx) => {
            const filteredEntries: PageMapping = isFiltering ?
                pickBy((_, pageName) => matchesFilter(filter, pageName), categoryEntries) :
                categoryEntries,
                hasFilteredEntries = keys(filteredEntries).length,
                defaultOpen = isFiltering || !idx;

            return hasFilteredEntries ?
              <GalleryNavTreeView key={categoryName}
                                  categoryEntries={filteredEntries}
                                  filter={filter || undefined}
                                  { ...({ categoryName, defaultOpen }) }/> :
              null;
          })
      )(pageConfig);

  return (
    <nav>
      <NxFilterInput value={filter} onChange={setFilter} autoFocus />
      {categories}
    </nav>
  );
}

export default GalleryNav;
