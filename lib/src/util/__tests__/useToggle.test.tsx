/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { render, screen } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { userEvent } from '../../__testutils__/rtlUtils';

import useToggle from '../useToggle';

describe('useToggle', function() {
  function renderEl(node: ReactElement) {
    return render(node).container.firstElementChild;
  }

  it('initially returns the specified initial value', function() {
    function FixtureTrue() {
      const [val] = useToggle(true);

      return <div>{val.toString()}</div>;
    }

    function FixtureFalse() {
      const [val] = useToggle(false);

      return <div>{val.toString()}</div>;
    }

    expect(renderEl(<FixtureTrue />)).toHaveTextContent('true');
    expect(renderEl(<FixtureFalse />)).toHaveTextContent('false');
  });

  it('returns a tuple who\'s second value is a function that toggles the state', async function() {
    function Fixture() {
      const [val, toggle] = useToggle(false);

      return <button onClick={toggle}>{val.toString()}</button>;
    }

    const user = userEvent.setup(),
        el = renderEl(<Fixture />),
        button = screen.getByRole('button');

    expect(el).toHaveTextContent('false');

    await user.click(button);
    expect(el).toHaveTextContent('true');

    await user.click(button);
    expect(el).toHaveTextContent('false');
  });

  it('returns a tuple who\'s second value is a function that returns the new state value after toggling',
      async function() {
        function Fixture({ onToggle }: { onToggle: (newVal: boolean) => void }) {
          const [val, toggle] = useToggle(false);

          function onClick() {
            const newVal = toggle();
            onToggle(newVal);
          }

          return <button onClick={onClick}>{val.toString()}</button>;
        }

        const user = userEvent.setup(),
            onToggle = jest.fn();

        render(<Fixture onToggle={onToggle} />);

        const button = screen.getByRole('button');

        await user.click(button);
        expect(onToggle).toHaveBeenCalledWith(true);
        expect(onToggle).not.toHaveBeenCalledWith(false);

        await user.click(button);
        expect(onToggle).toHaveBeenCalledWith(false);
      }
  );

  it('returns a tuple who\'s third value is a function that sets the state to the specified value', async function() {
    function Fixture() {
      const [val, , set] = useToggle(false);

      return (
        <>
          <p data-testid="output">{val.toString()}</p>
          <button data-testid="set-true" onClick={() => set(true)} />
          <button data-testid="set-false" onClick={() => set(false)} />
        </>
      );
    }

    const user = userEvent.setup();

    render(<Fixture />);

    const p = screen.getByTestId('output'),
        setFalse = screen.getByTestId('set-false'),
        setTrue = screen.getByTestId('set-true');

    expect(p).toHaveTextContent('false');

    await user.click(setFalse);
    expect(p).toHaveTextContent('false');

    await user.click(setTrue);
    expect(p).toHaveTextContent('true');

    await user.click(setTrue);
    expect(p).toHaveTextContent('true');

    await user.click(setFalse);
    expect(p).toHaveTextContent('false');
  });
});
