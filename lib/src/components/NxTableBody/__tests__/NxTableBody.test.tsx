/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import NxTableBody from '../NxTableBody';
import NxTableCell from '../../NxTableCell/NxTableCell';
import NxTableRow from '../../NxTableRow/NxTableRow';
import NxLoadingSpinner from '../../NxLoadingSpinner/NxLoadingSpinner';
import NxLoadError from '../../NxLoadError/NxLoadError';

describe('NxTableBody', function () {
  it('passes additional props through', function () {
    expect(shallow(<NxTableBody className="test" emptyMessage="foo" columns={1}/>)).toMatchSelector('tbody.test');
  });

  it('shows the loading spinner when isLoading is set', function () {
    const loadingSpinner = (
      <NxTableRow>
        <NxTableCell metaInfo colSpan={1}>
          <NxLoadingSpinner />
        </NxTableCell>
      </NxTableRow>
    );

    expect(shallow(<NxTableBody isLoading columns={1}>nothing</NxTableBody>)).toContainReact(loadingSpinner);
  });

  it('shows the error when error is set', function () {
    const retryHandler = jest.fn(),
        errorMessage = (
          <NxTableRow>
            <NxTableCell metaInfo colSpan={1}>
              <NxLoadError error="Error message" retryHandler={retryHandler} />
            </NxTableCell>
          </NxTableRow>
        ),
        component = shallow(
          <NxTableBody error="Error message" columns={1} retryHandler={retryHandler}>
            nothing
          </NxTableBody>
        );

    expect(component).toContainReact(errorMessage);
  });

  it('shows the emptyMessage when there are no children, no error, and not loading', function () {
    const emptyMessage = (
      <NxTableRow>
        <NxTableCell metaInfo colSpan={1}>
          Empty message
        </NxTableCell>
      </NxTableRow>
    );

    expect(shallow(<NxTableBody emptyMessage="Empty message" columns={1}></NxTableBody>))
        .toContainReact(emptyMessage);
  });

  it('does not show the emptyMessage when there are children', function () {
    const component = shallow(
      <NxTableBody emptyMessage="Empty message" columns={1}>
        <NxTableRow>
          <NxTableCell>Foo</NxTableCell>
        </NxTableRow>
      </NxTableBody>
    );

    expect(component).not.toHaveText('Empty message');
  });

  it('does not show the emptyMessage when isLoading', function () {
    const component = shallow(
      <NxTableBody emptyMessage="Empty message" columns={1} isLoading>
      </NxTableBody>
    );

    expect(component).not.toHaveText('Empty message');
  });

  it('does not show the emptyMessage when in error', function () {
    const component = shallow(
      <NxTableBody emptyMessage="Empty message" columns={1} error="Errr" retryHandler={() => {}}>
      </NxTableBody>
    );

    expect(component).not.toHaveText('Empty message');
  });

  it('shows the body', function () {
    const body = <NxTableRow><NxTableCell>test</NxTableCell></NxTableRow>;

    expect(shallow(<NxTableBody>{body}</NxTableBody>)).toContainReact(body);
  });
});
