/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxIndeterminatePagination', function() {
  const { simpleTest, a11yTest } = setupBrowser('#/pages/Indeterminate%20Pagination');

  const selector = '#nx-indeterminate-pagination-example .gallery-example-live';
  const firstPageSelector = '#nx-indeterminate-pagination-first-page-example .gallery-example-live';
  const lastPageSelector = '#nx-indeterminate-pagination-last-page-example .gallery-example-live';

  it('looks right', simpleTest(selector));

  it('looks right on first page', simpleTest(firstPageSelector));

  it('looks right on last page', simpleTest(lastPageSelector));

  it('passes a11y checks', a11yTest());
});
