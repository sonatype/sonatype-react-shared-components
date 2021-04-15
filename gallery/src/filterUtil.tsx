/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { reduce, head, tail, toLower, isEmpty, splitAt, drop, join } from 'ramda';
import React, { ReactNode } from 'react';

/**
 * @return a ReactNode containing the input text string with parts which match the filter marked
 */
export function markByFilter(filter: string | undefined, text: string): ReactNode {
  if (filter) {
    let filterArr = Array.from(toLower(filter)),
        textArr = Array.from(text);

    const marked = [];

    while (!isEmpty(filterArr) && !isEmpty(textArr)) {
      const markKey = filterArr.length;

      let i = 0;

      // Count how many immediate chars in the text match the filter
      while (i < Math.min(filterArr.length, textArr.length) && filterArr[i] === toLower(textArr[i])) {
        i++;
      }

      // if there are matching characters, gather them and wrap them in a <mark>
      if (i) {
        let matched: string[];
        [matched, textArr] = splitAt(i, textArr);
        filterArr = drop(i, filterArr);

        const markEl = (
          <mark key={markKey} className="gallery-filter-match">
            {join('', matched)}
          </mark>
        );

        marked.push(markEl);
      }

      // Count how many immediate chars in the text DO NOT match the filter
      i = 0;
      while (i < textArr.length && (!filterArr.length || filterArr[0] !== toLower(textArr[i]))) {
        i++;
      }

      // if there are non-matching characters, gather them into a single text node
      if (i) {
        let unmatched: string[];
        [unmatched, textArr] = splitAt(i, textArr);

        marked.push(join('', unmatched));
      }
    }

    return marked;
  }
  else {
    return text;
  }
}

/**
 * @return true if the pageName contains every character present in the filter in the same order, case insensitive
 */
export function matchesFilter(filter: string, pageName: string) {
  const unmatchedFilterChars = reduce(
      (remainingFilter, pageNameChar) =>
        head(remainingFilter) === pageNameChar ? tail(remainingFilter) : remainingFilter,
      Array.from(toLower(filter)),
      Array.from(toLower(pageName))
  );

  return isEmpty(unmatchedFilterChars);
}

