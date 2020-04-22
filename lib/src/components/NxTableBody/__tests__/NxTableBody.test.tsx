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
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

describe('NxTableBody', function () {
  it('passes additional props through', function () {
    expect(shallow(<NxTableBody className="test" />)).toMatchSelector('tbody.test');
  });

  it('shows the loading spinner when isLoading is set', function () {
    const loadingSpinner = (
      <NxTableRow>
        <NxTableCell isEmpty colSpan={1}>
          <NxLoadingSpinner />
        </NxTableCell>
      </NxTableRow>
    );

    expect(shallow(<NxTableBody isLoading columns={1}>nothing</NxTableBody>)).toContainReact(loadingSpinner);
  });

  it('shows the error when error is set', function () {
    const errorMessage = (
      <NxTableRow>
        <NxTableCell isError colSpan={1}>
          <NxFontAwesomeIcon icon={faExclamationTriangle} fixedWidth />
          Error message
        </NxTableCell>
      </NxTableRow>
    );

    expect(shallow(<NxTableBody error="Error message" columns={1}>nothing</NxTableBody>)).toContainReact(errorMessage);
  });

  it('shows the body', function () {
    const body = <NxTableRow><NxTableCell>test</NxTableCell></NxTableRow>;

    expect(shallow(<NxTableBody>{body}</NxTableBody>)).toContainReact(body);
  });
});
