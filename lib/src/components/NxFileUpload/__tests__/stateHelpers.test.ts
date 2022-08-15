/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { initialState, userInput } from '../stateHelpers';

describe('NxFileUpload state helpers', function() {
  describe('initialState', function() {
    it('produces a StateProps with isPristine set to true', function() {
      expect(initialState(null).isPristine).toBe(true);
    });

    it('produces a StateProps with the specified files', function() {
      const fakeFileList = {} as FileList;

      expect(initialState(fakeFileList).files).toBe(fakeFileList);
      expect(initialState(null).files).toBe(null);
    });
  });

  describe('userInput', function() {
    it('produces a StateProps with isPristine set to false', function() {
      expect(userInput(null).isPristine).toBe(false);
    });

    it('produces a StateProps with the specified value', function() {
      const fakeFileList = {} as FileList;

      expect(userInput(fakeFileList).files).toBe(fakeFileList);
      expect(userInput(null).files).toBe(null);
    });
  });
});
