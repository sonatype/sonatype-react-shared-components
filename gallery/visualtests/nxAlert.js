/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { hoverTest, simpleTest, a11yTest } = require('./testUtils');

describe('NxAlert', function() {
  beforeEach(async function() {
    await browser.url('#/pages/Alert');
  });

  const simpleSelector = '#nx-alert-custom-example .nx-alert',
      successSelector = '#nx-alert-success-example .nx-alert',
      errorSelector = '#nx-alert-error-example .nx-alert',
      infoSelector = '#nx-alert-info-example .nx-alert',
      warningSelector = '#nx-alert-warning-example .nx-alert';

  describe('Custom NxAlert', function() {
    it('looks right', simpleTest(simpleSelector));
  });

  describe('NxSuccessAlert', function() {
    it('looks right', simpleTest(successSelector));
  });

  describe('NxErrorAlert', function() {
    it('looks right', simpleTest(errorSelector));
    it('looks right with the close button hovered', hoverTest(errorSelector, `${errorSelector} .nx-btn--close`));
  });

  describe('NxInfoAlert', function() {
    it('looks right', simpleTest(infoSelector));
  });

  describe('NxWarningAlert', function() {
    it('looks right', simpleTest(warningSelector));
  });

  it('passes a11y checks', a11yTest());
});
