/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';

import NxLoadingSpinner from '../NxLoadingSpinner';

describe('NxLoadingSpinner', function() {
  it('renders an nx-loading-spinner__icon within a nx-loading-spinner', function() {
    expect(shallow(<NxLoadingSpinner />)).toHaveClassName('.nx-loading-spinner');
    expect(shallow(<NxLoadingSpinner />)).toContainMatchingElement('.nx-loading-spinner__icon');
  });

  it('renders the specified children', function() {
    expect(shallow(<NxLoadingSpinner>Foo</NxLoadingSpinner>)).toIncludeText('Foo');
    expect(shallow(<NxLoadingSpinner>Foo</NxLoadingSpinner>)).not.toIncludeText('Loading');
  });

  it('renders the text "Loading…" if no children are provided', function() {
    expect(shallow(<NxLoadingSpinner />)).toIncludeText('Loading…');
  });
});
