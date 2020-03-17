/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import Fuse from 'fuse.js';

import fuzzyFilter from '../fuzzyFilter';

interface Entry {
  id: string;
  name: string;
}

describe('fuzzyFilter', function () {

  const input = [
    {
      id: 'bike',
      name: 'Bicycle'
    }, {
      id: 'motorcycle',
      name: 'Motorcycle'
    }, {
      id: 'skate',
      name: 'Skateboard'
    }, {
      id: 'moped',
      name: 'Moped'
    }
  ];

  const options: Fuse.FuseOptions<Entry> = {
    keys: ['name'],
    threshold: 0.1
  };

  it('returns unchanged input if filter was set to empty string', function () {
    expect(fuzzyFilter(input, '', options)).toBe(input);
  });

  it('returns unchanged input if filter contains only spaces', function () {
    expect(fuzzyFilter(input, '  ', options)).toBe(input);
  });

  it('filters input', function () {
    expect(fuzzyFilter(input, 'Mo', options)).toEqual([
      {
        id: 'motorcycle',
        name: 'Motorcycle'
      }, {
        id: 'moped',
        name: 'Moped'
      }
    ]);
  });

  it('does not sort filtered entries', function () {
    const output = fuzzyFilter(input, 'e', options);
    expect(output).not.toBe(input);
    expect(output).toEqual(input);
  });

  it('uses trimmed filter for search', function () {
    expect(fuzzyFilter(input, ' cycle ', options)).toEqual([
      {
        id: 'bike',
        name: 'Bicycle'
      }, {
        id: 'motorcycle',
        name: 'Motorcycle'
      }
    ]);
  });
});
