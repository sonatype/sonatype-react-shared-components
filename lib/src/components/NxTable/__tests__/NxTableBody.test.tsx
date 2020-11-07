/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import NxTableBody from '../NxTableBody';
import NxTableCell from '../NxTableCell';
import NxTableRow from '../NxTableRow';
import NxLoadingSpinner from '../../NxLoadingSpinner/NxLoadingSpinner';
import NxLoadError from '../../NxLoadError/NxLoadError';

describe('NxTableBody', function () {
  it('passes additional props through', function () {
    expect(shallow(<NxTableBody className="test" id="bar" emptyMessage="empty"/>)).toMatchSelector('tbody#bar.test');
  });

  it('shows the loading spinner when isLoading is set', function () {
    const component = shallow(<NxTableBody isLoading>nothing</NxTableBody>);

    expect(component).toMatchElement(
      <tbody>
        <NxTableRow>
          <NxTableCell>
            <NxLoadingSpinner />
          </NxTableCell>
        </NxTableRow>
      </tbody>
    );

    expect(component.find(NxTableCell)).toHaveProp('metaInfo', true);
  });

  it('shows the error when error is set', function () {
    const retryHandler = jest.fn(),
        component = shallow(
          <NxTableBody error="Error message" retryHandler={retryHandler}>
            nothing
          </NxTableBody>
        );

    expect(component).toMatchElement(
      <tbody>
        <NxTableRow>
          <NxTableCell>
            <NxLoadError />
          </NxTableCell>
        </NxTableRow>
      </tbody>
    );

    expect(component.find(NxTableCell)).toHaveProp('metaInfo', true);
    expect(component.find(NxLoadError)).toHaveProp('error', 'Error message');
    expect(component.find(NxLoadError)).toHaveProp('retryHandler', retryHandler);
  });

  it('shows the emptyMessage when there are no children, no error, and not loading', function () {
    const trulyEmptyComponent = shallow(<NxTableBody emptyMessage="Empty message"></NxTableBody>),
        emptyListComponent = shallow(<NxTableBody emptyMessage="Empty message">{[]}</NxTableBody>),
        emptyMessageRow = (
          <tbody>
            <NxTableRow>
              <NxTableCell>
                Empty message
              </NxTableCell>
            </NxTableRow>
          </tbody>
        );

    expect(trulyEmptyComponent).toMatchElement(emptyMessageRow);
    expect(trulyEmptyComponent.find(NxTableCell)).toHaveProp('metaInfo', true);
    expect(emptyListComponent).toMatchElement(emptyMessageRow);
    expect(emptyListComponent.find(NxTableCell)).toHaveProp('metaInfo', true);
  });

  it('does not show the emptyMessage when there are children', function () {
    const component = shallow(
      <NxTableBody emptyMessage="Empty message">
        <NxTableRow>
          <NxTableCell>Foo</NxTableCell>
        </NxTableRow>
      </NxTableBody>
    );

    expect(component).not.toHaveText('Empty message');
  });

  it('does not show the emptyMessage when isLoading', function () {
    const component = shallow(
      <NxTableBody emptyMessage="Empty message" isLoading>
      </NxTableBody>
    );

    expect(component).not.toHaveText('Empty message');
  });

  it('does not show the emptyMessage when in error', function () {
    const component = shallow(
      <NxTableBody emptyMessage="Empty message" error="Errr" retryHandler={() => {}}>
      </NxTableBody>
    );

    expect(component).not.toHaveText('Empty message');
  });

  it('shows the body', function () {
    expect(shallow(
      <NxTableBody>
        <NxTableRow>
          <NxTableCell>test</NxTableCell>
        </NxTableRow>
      </NxTableBody>
    )).toMatchElement(
      <tbody>
        <NxTableRow>
          <NxTableCell>test</NxTableCell>
        </NxTableRow>
      </tbody>
    );
  });
});
