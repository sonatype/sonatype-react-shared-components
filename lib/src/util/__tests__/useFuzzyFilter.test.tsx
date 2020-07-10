/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
/* eslint react/prop-types: 0 */
import React, {FunctionComponent} from 'react';
import Fuse from 'fuse.js';

import {getShallowComponent} from '../../__testutils__/enzymeUtils';
import useFuzzyFilter from '../useFuzzyFilter';

interface Entry {
  id: string;
  name: string;
}

interface Props {
  input: Entry[];
  options: Fuse.IFuseOptions<Entry>;
}

// since hooks can only be used inside a function component we wrap it inside one
const HookWrapper: FunctionComponent<Props> = ({input, options}) => {
  const hookResult = useFuzzyFilter(input, options);
  return <div data-result={hookResult} />;
};

describe('useFuzzyFilter', function () {

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

  const options: Fuse.IFuseOptions<Entry> = {
    keys: ['name'],
    threshold: 0.1
  };

  const getShallow = getShallowComponent<Props>(HookWrapper, {input, options});

  it('returns unchanged input if filter was not set', function () {
    const shallowRender = getShallow();
    const [output, filter] = shallowRender.prop('data-result');
    expect(output).toBe(input);
    expect(filter).toBe('');
  });

  it('returns unchanged input if filter was set to empty string', function () {
    const shallowRender = getShallow();
    const [,, setFilter] = shallowRender.prop('data-result');
    setFilter('');

    const [output, filter] = shallowRender.prop('data-result');
    expect(output).toBe(input);
    expect(filter).toBe('');
  });

  it('returns unchanged input if filter was set to null', function () {
    const shallowRender = getShallow();
    const [,, setFilter] = shallowRender.prop('data-result');
    setFilter(null);

    const [output, filter] = shallowRender.prop('data-result');
    expect(output).toBe(input);
    expect(filter).toBe(null);
  });

  it('filters input and returns new filter term', function () {
    const shallowRender = getShallow();
    const [,, setFilter] = shallowRender.prop('data-result');
    setFilter('Mo');

    const [output, filter] = shallowRender.prop('data-result');
    expect(output).toEqual([
      {
        id: 'motorcycle',
        name: 'Motorcycle'
      }, {
        id: 'moped',
        name: 'Moped'
      }
    ]);
    expect(filter).toBe('Mo');
  });
});
