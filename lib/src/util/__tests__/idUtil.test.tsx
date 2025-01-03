/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ReactElement, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { render, screen } from '@testing-library/react';
import { times } from 'ramda';

import { userEvent } from '../../__testutils__/rtlUtils';
import { getUniqueId, useUniqueId } from '../idUtil';
import NxStableUniqueIdContext from '../../components/NxStableUniqueIdContext/NxStableUniqueIdContext';

describe('idUtil', function() {
  function renderEl(node: ReactElement) {
    return render(node).container.firstElementChild!;
  }

  function renderAndGetId(node: ReactElement) {
    return renderEl(node).getAttribute('id')!;
  }

  describe('getUniqueId', function() {
    it('returns a string that starts with the argument passed in', function() {
      expect(getUniqueId('foo')).toMatch(/^foo/);
    });

    it('returns a different string each time it is called', function() {
      const thousandCallResults = new Set(times(() => getUniqueId('foo'), 1000));

      expect(thousandCallResults.size).toBe(1000);
    });
  });

  describe('useUniqueId', function() {
    it('is a react hook that returns a random id with the specified prefix', function() {
      function Fixture() {
        return <div id={useUniqueId('foo')} />;
      }

      const id = renderAndGetId(<Fixture />);

      expect(id).toMatch(/^foo/);
      expect(id.length).toBeGreaterThan(3);
    });

    it('returns a different value for each component instance', function() {
      function Fixture() {
        return <div id={useUniqueId('foo')} />;
      }

      const id1 = renderAndGetId(<Fixture />),
          id2 = renderAndGetId(<Fixture />);

      expect(id1).not.toEqual(id2);
    });

    it('returns the second argument if it exists', function() {
      function Fixture() {
        return <div id={useUniqueId('foo', 'bar')} />;
      }

      const id1 = renderAndGetId(<Fixture />),
          id2 = renderAndGetId(<Fixture />);

      expect(id1).toBe('bar');
      expect(id2).toBe('bar');
    });

    it('returns the second argument if it is the empty string', function() {
      function Fixture() {
        return <div id={useUniqueId('foo', '')} />;
      }

      const id1 = renderAndGetId(<Fixture />),
          id2 = renderAndGetId(<Fixture />);

      expect(id1).toBe('');
      expect(id2).toBe('');
    });

    it('returns the same id for multiple renders of the same component instance', async function() {
      const user = userEvent.setup();

      function Fixture() {
        const [val, setVal] = useState('');

        function onClick() {
          setVal('asdf');
        }

        return (
          <div id={useUniqueId('foo')}>
            {val}
            <button onClick={onClick}>Click Here</button>
          </div>
        );
      }

      const view = render(<Fixture/>),
          el = view.container.firstElementChild!,
          initialId = el.getAttribute('id');

      // update state to trigger re-render
      await user.click(screen.getByRole('button'));

      expect(el).toHaveAttribute('id', initialId);
    });

    it('returns the same id for multiple renders of the same component across prop changes', function () {
      function Fixture({ val }: { val: string }) {
        return (
          <div id={useUniqueId('foo')}>
            {val}
          </div>
        );
      }

      const view = render(<Fixture val="asdf"/>),
          el = view.container.firstElementChild!,
          initialId = el.getAttribute('id');

      view.rerender(<Fixture val="bar"/>);

      expect(el).toHaveAttribute('id', initialId);
    });

    it('returns the same id per time that it is called within a separate NxStableUniqueIdContext', function() {
      function Fixture() {
        return <>{useUniqueId('foo')}</>;
      }

      const firstRender = ReactDOMServer.renderToStaticMarkup(
          <NxStableUniqueIdContext>
            <Fixture /> <Fixture />
          </NxStableUniqueIdContext>
      );

      const secondRender = ReactDOMServer.renderToStaticMarkup(
          <NxStableUniqueIdContext>
            <Fixture /> <Fixture />
          </NxStableUniqueIdContext>
      );

      expect(firstRender).toEqual(secondRender);
      expect(new Set(firstRender.split(' ')).size).toBe(2);
    });
  });
});
