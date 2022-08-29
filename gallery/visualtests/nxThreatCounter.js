/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxThreatCounter', function() {
  const { simpleTest, a11yTest } = setupBrowser('#/pages/Threat Counter');

  const rowExampleSelector = '#nx-threat-counter-row .gallery-example-live',
      rowWrappingExampleSelector = '#nx-threat-counter-row-wrapping .gallery-example-live',
      smallRowExampleSelector = '#nx-threat-counter-small-row .gallery-example-live',
      columnExampleSelector = '#nx-threat-counter-column .gallery-example-live',
      smallColumnExampleSelector = '#nx-threat-counter-small-column .gallery-example-live',
      gridExampleSelector = '#nx-threat-counter-grid .gallery-example-live',
      smallGridExampleSelector = '#nx-threat-counter-small-grid .gallery-example-live';

  it('row layout looks correct', simpleTest(rowExampleSelector));
  it('row wrapping layout looks correct', simpleTest(rowWrappingExampleSelector));
  it('small row layout looks correct', simpleTest(smallRowExampleSelector));
  it('column layout looks correct', simpleTest(columnExampleSelector));
  it('small column layout looks correct', simpleTest(smallColumnExampleSelector));
  it('grid layout looks correct', simpleTest(gridExampleSelector));
  it('small grid layout looks correct', simpleTest(smallGridExampleSelector));

  it('passes a11y checks', a11yTest());
});
