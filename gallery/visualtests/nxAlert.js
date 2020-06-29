/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { simpleTest } = require('./testUtils');

describe('NxAlert', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxAlert');
  });

  describe('Custom NxAlert', function() {
    it('looks right', simpleTest('#nx-alert-custom-example .nx-alert'));
  });

  describe('NxSuccessAlert', function() {
    it('looks right', simpleTest('#nx-alert-success-example .nx-alert'));
  });

  describe('NxErrorAlert', function() {
    it('looks right', simpleTest('#nx-alert-error-example .nx-alert'));
  });

  describe('NxInfoAlert', function() {
    it('looks right', simpleTest('#nx-alert-info-example .nx-alert'));
  });

  describe('NxWarningAlert', function() {
    it('looks right', simpleTest('#nx-alert-warning-example .nx-alert'));
  });
});
