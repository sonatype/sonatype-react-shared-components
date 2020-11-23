/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { getRandomId } from '../idUtil';
import { times } from 'ramda';

describe('idUtil', function() {
  describe('getRandomId', function() {
    it('returns a string that starts with the argument passed in', function() {
      expect(getRandomId('foo')).toMatch(/^foo/);
    });

    it('returns a different string each time it is called', function() {
      const thousandCallResults = new Set(times(() => getRandomId('foo'), 1000));

      expect(thousandCallResults.size).toBe(1000);
    });
  });
});
