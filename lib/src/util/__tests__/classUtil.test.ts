/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { includesClass } from '../classUtil';

describe('classUtil', function() {
  describe('includesClass', function() {
    it('returns false if the class is not included', function() {
      expect(includesClass('foo', 'bar')).toBe(false);
      expect(includesClass('foo', 'foobar')).toBe(false);
      expect(includesClass('foo', '')).toBe(false);
      expect(includesClass('foo', 'fo')).toBe(false);
      expect(includesClass('foo', 'foo-bar')).toBe(false);
      expect(includesClass('foo', 'bar_foo')).toBe(false);
    });

    it('returns false if fullClassName is undefined', function() {
      expect(includesClass('foo', undefined)).toBe(false);
    });

    it('returns true if the class is included', function() {
      expect(includesClass('foo', 'foo')).toBe(true);
      expect(includesClass('foo', 'foo bar')).toBe(true);
      expect(includesClass('foo', 'bar foo')).toBe(true);
      expect(includesClass('foo', 'bar foo asdf')).toBe(true);
      expect(includesClass('foo', 'bar foo asdf foo')).toBe(true);
      expect(includesClass('foo', 'foofoo foo')).toBe(true);
    });

    it('can be partially applied', function() {
      expect(includesClass('foo')('bar')).toBe(false);
      expect(includesClass('foo')('foo')).toBe(true);
    });
  });

  describe('includesDisabledClass', function() {
    it('returns false if the "disabled" class is not included', function() {
      expect(includesClass('disabled', 'bar')).toBe(false);
      expect(includesClass('disabled', 'disabledbar')).toBe(false);
      expect(includesClass('disabled', '')).toBe(false);
      expect(includesClass('disabled', 'disable')).toBe(false);
      expect(includesClass('disabled', 'disabled-bar')).toBe(false);
      expect(includesClass('disabled', 'bar_disabled')).toBe(false);
    });

    it('returns false if fullClassName is undefined', function() {
      expect(includesClass('disabled', undefined)).toBe(false);
    });

    it('returns true if the class is included', function() {
      expect(includesClass('disabled', 'disabled')).toBe(true);
      expect(includesClass('disabled', 'disabled bar')).toBe(true);
      expect(includesClass('disabled', 'bar disabled')).toBe(true);
      expect(includesClass('disabled', 'bar disabled asdf')).toBe(true);
      expect(includesClass('disabled', 'bar disabled asdf disabled')).toBe(true);
      expect(includesClass('disabled', 'disableddisabled disabled')).toBe(true);
    });

    it('can be partially applied', function() {
      expect(includesClass('disabled')('bar')).toBe(false);
      expect(includesClass('disabled')('disabled')).toBe(true);
    });
  });
});
