/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ParsedQuery } from 'query-string';

/*
 * Different page layout modes can be triggered via query params.  These page layout modes are
 * implemented via classes on the <html> element. This feature exists so that visual tests
 * of all page layout modes can be done
 */
export default function handleQueryParams(queryParams: ParsedQuery, forceDisablePageScrolling = false) {
  const { classList } = document.documentElement;

  if (queryParams.disablePageScrolling === 'true' || forceDisablePageScrolling) {
    classList.remove('nx-html--page-scrolling');
  }
  else {
    classList.add('nx-html--page-scrolling');
  }

  if (queryParams.hideSidebar === 'true') {
    classList.add('gallery-hide-sidebar');
  }
  else {
    classList.remove('gallery-hide-sidebar');
  }
}
