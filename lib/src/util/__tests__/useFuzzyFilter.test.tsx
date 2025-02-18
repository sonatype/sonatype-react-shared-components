/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React, { ChangeEvent } from 'react';
import * as Fuse from 'fuse.js';

import { render } from '@testing-library/react';
import { rtlRender, userEvent} from '../../__testutils__/rtlUtils';
import useFuzzyFilter from '../useFuzzyFilter';

interface Entry {
  id: string;
  name: string;
}

interface Props {
  input: Entry[];
  options: Fuse.IFuseOptions<Entry>;
}

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
      name: 'Moped or Scooter'
    }
  ];

  const options: Fuse.IFuseOptions<Entry> = {
    keys: ['name'],
    threshold: 0.1
  };

  // since hooks can only be used inside a function component we wrap it inside one
  function FixtureWithFilter({ input, options }: Props) {
    const [output, filterTerm, setFilterTerm] = useFuzzyFilter(input, options);

    function onChange(e: ChangeEvent<HTMLInputElement>) {
      setFilterTerm(e.target.value);
    }

    return (
      <>
        <input onChange={onChange} value={filterTerm.toString()}/>
        { output.map((result) => <span data-testid="result" key={result.id}>{result.name}</span>) }
      </>
    );
  }

  const renderWithFilter = rtlRender<Props>(FixtureWithFilter, { input, options });

  it('returns unchanged input if filter was not set', function () {
    function FixtureNoFilter() {
      const [output] = useFuzzyFilter(input, options);
      return (
        <>
          { output.map((result) => <span key={result.id} data-testid="result">{result.name} </span>) }
        </>
      );
    }

    const view = render(<FixtureNoFilter />),
        outputItems = view.getAllByTestId('result');

    expect(outputItems.length).toBe(4);
    expect(outputItems[0]).toHaveTextContent('Bicycle');
    expect(outputItems[1]).toHaveTextContent('Motorcycle');
    expect(outputItems[2]).toHaveTextContent('Skateboard');
    expect(outputItems[3]).toHaveTextContent('Moped');
  });

  it('returns unchanged input if filter contains only spaces', async function() {
    const user = userEvent.setup(),
        view = renderWithFilter(),
        inputEl = view.getByRole('textbox');
    let outputItems = view.getAllByTestId('result');

    expect(outputItems.length).toBe(4);
    await user.type(inputEl, '[Space]');

    outputItems = view.getAllByTestId('result');
    expect(outputItems.length).toBe(4);
  });

  it('filters input and returns new filter term', async function() {
    const user = userEvent.setup(),
        view = renderWithFilter(),
        inputEl = view.getByRole('textbox');
    let outputItems = view.getAllByTestId('result');

    expect(outputItems.length).toBe(4);
    await user.type(inputEl, 'cy');

    outputItems = view.getAllByTestId('result');
    expect(outputItems.length).toBe(2);
    expect(outputItems[0]).toHaveTextContent('Bicycle');
    expect(outputItems[1]).toHaveTextContent('Motorcycle');
    expect(inputEl).toHaveValue('cy');
  });

  it('uses trimmed filter for search', async function() {
    const user = userEvent.setup(),
        view = renderWithFilter(),
        inputEl = view.getByRole('textbox');
    let outputItems = view.getAllByTestId('result');

    expect(outputItems.length).toBe(4);
    await user.type(inputEl, ' cycle');

    outputItems = view.getAllByTestId('result');
    expect(outputItems.length).toBe(2);
    expect(outputItems[0]).toHaveTextContent('Bicycle');
    expect(outputItems[1]).toHaveTextContent('Motorcycle');
    expect(inputEl).toHaveValue(' cycle');
  });

  it('matches even when the term is located at the tail of the string', async function() {
    const user = userEvent.setup(),
        view = renderWithFilter(),
        inputEl = view.getByRole('textbox');
    let outputItems = view.getAllByTestId('result');

    expect(outputItems.length).toBe(4);
    await user.type(inputEl, 'scooter');

    outputItems = view.getAllByTestId('result');
    expect(outputItems.length).toBe(1);
    expect(outputItems[0]).toHaveTextContent('Moped or Scooter');
    expect(inputEl).toHaveValue('scooter');
  });

  it('does not sort filtered entries', async function() {
    const user = userEvent.setup(),
        view = renderWithFilter(),
        inputEl = view.getByRole('textbox');

    await user.type(inputEl, 'e');

    const outputItems = view.getAllByTestId('result');

    for (let i = 0; i < outputItems.length; i++) {
      expect(outputItems[i].textContent).toEqual(input[i].name);
    }
  });
});
