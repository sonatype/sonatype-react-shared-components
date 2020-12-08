/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { useEffect, ReactElement } from 'react';

// helper component that disables page-scrolling for examples that require section scrolling
export default function SectionScrollingWrapper({ children }: { children: ReactElement }) {
  useEffect(function() {
    document.documentElement.classList.remove('nx-html--page-scrolling');

    return function() {
      document.documentElement.classList.add('nx-html--page-scrolling');
    };
  });

  return children;
}
