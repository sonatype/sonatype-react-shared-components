/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ensureArray } from '../jsUtil';

describe('jsUtil', function() {
  describe('ensureArray', function() {
    describe('when passed an array', function() {
      it('returns an equivalent array', function() {
        expect(ensureArray([])).toEqual([]);
        expect(ensureArray(['foo'])).toEqual(['foo']);
        expect(ensureArray([null, undefined])).toEqual([null, undefined]);

        const obj = {};
        expect(ensureArray([obj])).toEqual([obj]);
        expect(ensureArray([obj])[0]).toBe(obj);
      });
    });

    describe('when passed a non-array', function() {
      it('returns an array containing only that item', function() {
        const obj = {};

        expect(ensureArray(obj)).toEqual([obj]);
        expect(ensureArray(obj)[0]).toBe(obj);
        expect(ensureArray(undefined)).toEqual([undefined]);
        expect(ensureArray(null)).toEqual([null]);
        expect(ensureArray('a')).toEqual(['a']);
        expect(ensureArray(1)).toEqual([1]);
      });
    });
  });
});
