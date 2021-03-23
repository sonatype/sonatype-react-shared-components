/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';

import useToggle from '../useToggle';

describe('useToggle', function() {
  it('initially returns the specified initial value', function() {
    function FixtureTrue() {
      const [val] = useToggle(true);

      return <div>{val.toString()}</div>;
    }

    function FixtureFalse() {
      const [val] = useToggle(false);

      return <div>{val.toString()}</div>;
    }

    expect(shallow(<FixtureTrue />)).toHaveText('true');
    expect(shallow(<FixtureFalse />)).toHaveText('false');
  });

  it('returns a tuple who\'s second value is a function that toggles the state', function() {
    function Fixture() {
      const [val, toggle] = useToggle(false);

      return <button onClick={toggle}>{val.toString()}</button>;
    }

    const component = shallow(<Fixture />);

    expect(component).toHaveText('false');

    component.simulate('click');
    expect(component).toHaveText('true');

    component.simulate('click');
    expect(component).toHaveText('false');
  });

  it('returns a tuple who\'s second value is a function that returns the new state value after toggling', function() {
    function Fixture({ onToggle }: { onToggle: (newVal: boolean) => void }) {
      const [val, toggle] = useToggle(false);

      function onClick() {
        const newVal = toggle();
        onToggle(newVal);
      }

      return <button onClick={onClick}>{val.toString()}</button>;
    }

    const onToggle = jest.fn(),
        component = shallow(<Fixture onToggle={onToggle} />);

    component.simulate('click');
    expect(onToggle).toHaveBeenCalledWith(true);
    expect(onToggle).not.toHaveBeenCalledWith(false);

    component.simulate('click');
    expect(onToggle).toHaveBeenCalledWith(false);
  });

  it('returns a tuple who\'s third value is a function that sets the state to the specified value', function() {
    function Fixture() {
      const [val, , set] = useToggle(false);

      return (
        <>
          <p>{val.toString()}</p>
          <button id="set-true" onClick={() => set(true)} />
          <button id="set-false" onClick={() => set(false)} />
        </>
      );
    }

    const component = shallow(<Fixture />);

    expect(component.find('p')).toHaveText('false');

    component.find('#set-false').simulate('click');
    expect(component.find('p')).toHaveText('false');

    component.find('#set-true').simulate('click');
    expect(component.find('p')).toHaveText('true');

    component.find('#set-true').simulate('click');
    expect(component.find('p')).toHaveText('true');

    component.find('#set-false').simulate('click');
    expect(component.find('p')).toHaveText('false');
  });
});
