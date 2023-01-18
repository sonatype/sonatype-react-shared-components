/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext } from 'react';
import { mount } from 'enzyme';
import 'jest-enzyme';

import { getShallowComponent } from '../../../__testutils__/enzymeUtils';
import NxTableRow from '../NxTableRow';
import { RowContext, HeaderContext } from '../contexts';
import NxTableCell from '../NxTableCell';

describe('NxTableRow', function () {
  const getShallow = getShallowComponent(NxTableRow, {});

  it('renders a tr with the nx-table-row class', function() {
    expect(getShallow()).toMatchSelector('tr.nx-table-row');
  });

  it('adds specified classes to the table row', function () {
    expect(getShallow({ className: 'test' })).toHaveClassName('test');
    expect(getShallow({ className: 'test' })).toHaveClassName('nx-table-row');
  });

  it('adds nx-clickable if the isClickable prop is set', function () {
    expect(getShallow()).not.toHaveClassName('nx-clickable');
    expect(getShallow({ isClickable: true })).toHaveClassName('nx-clickable');
  });

  it('passes through arbitrary props to the tr', function() {
    const row = getShallow({ id: 'test', lang: 'en_US' });
    expect(row).toHaveProp('id', 'test');
    expect(row).toHaveProp('lang', 'en_US');
  });

  it('adds nx-table-row--filter-header if the isFilterHeader prop is set', function() {
    expect(getShallow({ isFilterHeader: true })).toHaveClassName('nx-table-row--filter-header');
  });

  it('adds the nx-table-row--header class if the HeaderContext contains true', function() {
    expect(getShallow()).not.toHaveClassName('nx-table-row--header');

    const component = mount(
      <HeaderContext.Provider value={true}>
        <NxTableRow />
      </HeaderContext.Provider>,
      { attachTo: document.createElement('tbody') }
    );

    expect(component.find('tr')).toHaveClassName('nx-table-row--header');
  });

  it('renders the children within a RowContext.Provider', function() {
    const component = getShallow({ children: <NxTableCell id="foo" /> });

    expect(component.children()).toMatchSelector(RowContext.Provider);
    expect(component.children().children()).toMatchSelector('NxTableCell#foo');
  });

  it('sets the rendered text content into RowContext provider label with cells separated by semi-colons', function() {
    function ContextDependentChild() {
      const { label } = useContext(RowContext);

      return <span className="context-dependent" aria-label={label} />;
    }

    const component = mount(
      <NxTableRow>
        <NxTableCell>Foo</NxTableCell>
        <NxTableCell>Bar</NxTableCell>
        <NxTableCell/>
        <NxTableCell>Baz</NxTableCell>
        <NxTableCell><ContextDependentChild/></NxTableCell>
      </NxTableRow>,
      { attachTo: document.createElement('tbody') }
    );

    expect(component.find('.context-dependent')).toHaveProp('aria-label', 'Foo; Bar; Baz');
  });

  it('sets the clickAccessbleLabel into the RowContext provider label if it is defined', function() {
    function ContextDependentChild() {
      const { label } = useContext(RowContext);

      return <span className="context-dependent" aria-label={label} />;
    }

    const component = mount(
      <NxTableRow clickAccessibleLabel="asdf">
        <NxTableCell>Foo</NxTableCell>
        <NxTableCell>Bar</NxTableCell>
        <NxTableCell/>
        <NxTableCell>Baz</NxTableCell>
        <NxTableCell><ContextDependentChild/></NxTableCell>
      </NxTableRow>,
      { attachTo: document.createElement('tbody') }
    );

    expect(component.find('.context-dependent')).toHaveProp('aria-label', 'asdf');
  });

  it('sets the isFilterHeader flag into the RowContext, normalized to a boolean', function() {
    function ContextDependentChild() {
      const { isFilterHeader } = useContext(RowContext);

      return <span className="context-dependent">{isFilterHeader.toString()}</span>;
    }

    const component1 = mount(
      <NxTableRow isFilterHeader={true}>
        <NxTableCell>Foo</NxTableCell>
        <NxTableCell>Bar</NxTableCell>
        <NxTableCell/>
        <NxTableCell>Baz</NxTableCell>
        <NxTableCell><ContextDependentChild/></NxTableCell>
      </NxTableRow>,
      { attachTo: document.createElement('tbody') }
    );

    const component2 = mount(
      <NxTableRow isFilterHeader={false}>
        <NxTableCell>Foo</NxTableCell>
        <NxTableCell>Bar</NxTableCell>
        <NxTableCell/>
        <NxTableCell>Baz</NxTableCell>
        <NxTableCell><ContextDependentChild/></NxTableCell>
      </NxTableRow>,
      { attachTo: document.createElement('tbody') }
    );

    const component3 = mount(
      <NxTableRow isFilterHeader={null}>
        <NxTableCell>Foo</NxTableCell>
        <NxTableCell>Bar</NxTableCell>
        <NxTableCell/>
        <NxTableCell>Baz</NxTableCell>
        <NxTableCell><ContextDependentChild/></NxTableCell>
      </NxTableRow>,
      { attachTo: document.createElement('tbody') }
    );

    const component4 = mount(
      <NxTableRow>
        <NxTableCell>Foo</NxTableCell>
        <NxTableCell>Bar</NxTableCell>
        <NxTableCell/>
        <NxTableCell>Baz</NxTableCell>
        <NxTableCell><ContextDependentChild/></NxTableCell>
      </NxTableRow>,
      { attachTo: document.createElement('tbody') }
    );

    expect(component1.find('.context-dependent')).toHaveText('true');
    expect(component2.find('.context-dependent')).toHaveText('false');
    expect(component3.find('.context-dependent')).toHaveText('false');
    expect(component4.find('.context-dependent')).toHaveText('false');
  });
});
