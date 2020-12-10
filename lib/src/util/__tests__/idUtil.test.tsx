/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { getRandomId, useRandomId } from '../idUtil';
import { times } from 'ramda';
import { shallow } from 'enzyme';

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

  describe('useRandomId', function() {
    it('is a react hook that returns a random id with the specified prefix', function() {
      function Fixture() {
        return <div id={useRandomId('foo')} />;
      }

      const id = shallow(<Fixture />).prop('id');

      expect(id).toMatch(/^foo/);
      expect(id.length).toBeGreaterThan(3);
    });

    it('returns a different value for each component instance', function() {
      function Fixture() {
        return <div id={useRandomId('foo')} />;
      }

      const id1 = shallow(<Fixture />).prop('id'),
          id2 = shallow(<Fixture />).prop('id');

      expect(id1).not.toEqual(id2);
    });

    it('returns the second argument if it exists', function() {
      function Fixture() {
        return <div id={useRandomId('foo', 'bar')} />;
      }

      const id1 = shallow(<Fixture />).prop('id'),
          id2 = shallow(<Fixture />).prop('id');

      expect(id1).toBe('bar');
      expect(id2).toBe('bar');
    });

    it('returns the second argument if it is the empty string', function() {
      function Fixture() {
        return <div id={useRandomId('foo', '')} />;
      }

      const id1 = shallow(<Fixture />).prop('id'),
          id2 = shallow(<Fixture />).prop('id');

      expect(id1).toBe('');
      expect(id2).toBe('');
    });

    it('returns the same id for multiple renders of the same component instance', function() {
      function Fixture() {
        const [val, setVal] = useState('');

        function onClick() {
          setVal('asdf');
        }

        return (
          <div id={useRandomId('foo')}>
            {val}
            <button onClick={onClick}>Click Here</button>
          </div>
        );
      }

      const component = shallow(<Fixture/>),
          initialId = component.prop('id');

      // update state to trigger re-render
      component.find('button').simulate('click');

      expect(component).toHaveProp('id', initialId);
    });

    it('returns the same id for multiple renders of the same component across prop changes', function () {
      function Fixture({ val }: { val: string }) {
        return (
          <div id={useRandomId('foo')}>
            {val}
          </div>
        );
      }

      const component = shallow(<Fixture val="asdf"/>),
          initialId = component.prop('id');

      // update props
      component.setProps({ val: 'bar' });

      expect(component).toHaveProp('id', initialId);
    });
  });
});
