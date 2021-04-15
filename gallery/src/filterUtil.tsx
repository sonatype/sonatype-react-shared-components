/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { reduce, head, tail, toLower, isEmpty, append } from "ramda";
import React, { ReactNode } from "react";

/**
 * @return a ReactNode containing the input text string with parts which match the filter marked
 */
export function markByFilter(filter: string | undefined, text: string): ReactNode {
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

