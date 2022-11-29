/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxLoadingSpinner from '../NxLoadingSpinner';

describe('NxLoadingSpinner', function() {
  const quickRender = rtlRender(NxLoadingSpinner, {}),
      renderEl = rtlRenderElement(NxLoadingSpinner, {});

  it('renders an nx-loading-spinner__icon within a nx-loading-spinner', function() {
    const { container } = quickRender(<NxLoadingSpinner />);
    expect(container.querySelector('.nx-loading-spinner__icon')).toBeInTheDocument();
  });

  it('renders the text "Loading…" if no children are provided', function() {
    expect(renderEl(<NxLoadingSpinner />)).toHaveTextContent('Loading…');
  });
});
