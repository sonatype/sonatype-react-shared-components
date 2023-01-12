/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ReactElement } from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import 'jest-enzyme';
import { act } from 'react-dom/test-utils';
import NxTableBody from '../NxTableBody';
import NxTableCell from '../NxTableCell';
import NxTableRow from '../NxTableRow';
import NxLoadingSpinner from '../../NxLoadingSpinner/NxLoadingSpinner';
import NxLoadError from '../../NxLoadError/NxLoadError';

describe('NxTableBody', function () {
  let mountContainers: HTMLElement[] = [];

  function getMountContainer() {
    const newContainer = document.createElement('table');
    mountContainers.push(newContainer);
    document.body.append(newContainer);

    return newContainer;
  }

  // create a mounted wrapper that is attached to the document, and deal with the timing complexities
  // triggered by NxTableBody's MutationObserver usage
  async function mountAttached(jsx: ReactElement) {
    let retval: ReactWrapper;
    await act(async () => {
      retval = mount(jsx, { attachTo: getMountContainer() });
    });
    retval!.update();

    return retval!;
  }

  afterEach(function() {
    mountContainers.forEach(container => document.body.removeChild(container));
    mountContainers = [];
  });

  it('passes additional props through', function () {
    expect(shallow(<NxTableBody className="test" id="bar" emptyMessage="empty"/>)).toMatchSelector('tbody#bar.test');
  });

  it('shows the loading spinner when isLoading is set', async function() {
    const component = await mountAttached(<NxTableBody isLoading>nothing</NxTableBody>);

    expect(component.children()).toMatchSelector('tbody');
    expect(component).toContainExactlyOneMatchingElement('tr.nx-table-row');
    expect(component).toContainExactlyOneMatchingElement('td.nx-cell');
    expect(component.find('td').children()).toMatchSelector(NxLoadingSpinner);
    expect(component.find(NxTableCell)).toHaveProp('metaInfo', true);
  });

  it('shows the error when error is set', async function() {
    const retryHandler = jest.fn(),
        component = await mountAttached(
          <NxTableBody error="Error message" retryHandler={retryHandler}></NxTableBody>
        );

    expect(component.children()).toMatchSelector('tbody');
    expect(component).toContainExactlyOneMatchingElement('tr.nx-table-row');
    expect(component).toContainExactlyOneMatchingElement('td.nx-cell');
    expect(component.find('td').children()).toMatchSelector(NxLoadError);
    expect(component.find(NxTableCell)).toHaveProp('metaInfo', true);
    expect(component.find(NxLoadError)).toHaveProp('error', 'Error message');
    expect(component.find(NxLoadError)).toHaveProp('retryHandler', retryHandler);
  });

  it('shows the emptyMessage when there are no children, no error, and not loading', async function() {
    const trulyEmptyComponent = await mountAttached(<NxTableBody emptyMessage="Empty message"></NxTableBody>),
        emptyListComponent = await mountAttached(<NxTableBody emptyMessage="Empty message">{[]}</NxTableBody>);

    // the enzyme wrapper contains the <NxTableBody> as its top element, the native el is one level down
    expect(trulyEmptyComponent.children()).toMatchSelector('tbody');
    expect(trulyEmptyComponent).toContainExactlyOneMatchingElement('tr.nx-table-row');
    expect(trulyEmptyComponent).toContainExactlyOneMatchingElement('td.nx-cell');
    expect(trulyEmptyComponent.find('td')).toHaveText('Empty message');
    expect(trulyEmptyComponent.find(NxTableCell)).toHaveProp('metaInfo', true);

    expect(emptyListComponent.children()).toMatchSelector('tbody');
    expect(emptyListComponent).toContainExactlyOneMatchingElement('tr.nx-table-row');
    expect(emptyListComponent).toContainExactlyOneMatchingElement('td.nx-cell');
    expect(emptyListComponent.find('td')).toHaveText('Empty message');
    expect(emptyListComponent.find(NxTableCell)).toHaveProp('metaInfo', true);
  });

  it('shows the emptyMessage when the children are removed after the existing', async function() {
    const component = await mountAttached(
      <NxTableBody emptyMessage="Empty message">
        <NxTableRow>
          <NxTableCell/>
        </NxTableRow>
        <NxTableRow>
          <NxTableCell/>
        </NxTableRow>
      </NxTableBody>
    );

    await act(async () => {
      component.setProps({ children: [] });
    });
    component.update();

    expect(component.find('td')).toHaveText('Empty message');
  });

  it('does not show the emptyMessage when there are children', async function() {
    const component = await mountAttached(
      <NxTableBody emptyMessage="Empty message">
        <NxTableRow>
          <NxTableCell>Foo</NxTableCell>
        </NxTableRow>
      </NxTableBody>
    );

    expect(component).not.toHaveText('Empty message');
  });

  it('does not show the emptyMessage when isLoading', async function() {
    const component = await mountAttached(<NxTableBody emptyMessage="Empty message" isLoading />);

    expect(component).not.toHaveText('Empty message');
  });

  it('does not show the emptyMessage when in error', async function() {
    const component = await mountAttached(
      <NxTableBody emptyMessage="Empty message" error="Errr" retryHandler={() => {}}>
      </NxTableBody>
    );

    expect(component).not.toHaveText('Empty message');
  });

  it('shows the body', async function() {
    const component = await mountAttached(
      <NxTableBody>
        <NxTableRow>
          <NxTableCell>test</NxTableCell>
        </NxTableRow>
      </NxTableBody>
    );

    expect(component.children()).toMatchSelector('tbody');
    expect(component).toContainExactlyOneMatchingElement('tr.nx-table-row');
    expect(component).toContainExactlyOneMatchingElement('td.nx-cell');
    expect(component.find('td').children()).toHaveText('test');
  });

  it('removes the emptyMessage when children are added', async function() {
    const component = await mountAttached(
      <NxTableBody emptyMessage="Empty message"></NxTableBody>
    );

    await act(async () => {
      component.setProps({
        children: (
          <>
            <NxTableRow>
              <NxTableCell/>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell/>
            </NxTableRow>
          </>
        )
      });
    });
    component.update();

    expect(component.find('tr').length).toBe(2);
    expect(component).not.toIncludeText('Empty message');
  });

});
