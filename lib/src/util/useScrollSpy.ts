/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { RefObject } from 'react';
import _useScrollSpy from 'react-use-scrollspy';

type RefsParentType = Record<string, RefObject<HTMLElement>>;

interface useScrollSpyParams<T extends RefsParentType> {
  offsetPx?: number;
  refs: T;
}

/**
 * Sets up scroll spy logic. The actual tracking of the current scroll position is handled by the
 * third-party react-use-scrollspy library, but we add the ability to initiate a programmatic scroll
 * to a given spied element, and the ability to refer to scrollable section by a name rather than by array index.
 */
export default function useScrollSpy<T extends RefsParentType>({ offsetPx, refs }: useScrollSpyParams<T>) {
  const refsList = Object.values(refs),
      activeIdx = _useScrollSpy({ offsetPx, sectionElementRefs: refsList }),
      activeRefName = Object.keys(refs)[activeIdx],
      activeRef = refs[activeRefName];

  function scrollTo(refName: keyof T) {
    refs[refName].current?.scrollIntoView();
  }

  return { scrollTo, activeRefName, activeRef };
}
