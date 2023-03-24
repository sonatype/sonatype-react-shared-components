/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxLoadingSpinner from '../NxLoadingSpinner';

describe('NxLoadingSpinner', function() {
  const quickRender = rtlRender(NxLoadingSpinner, {}),
      renderEl = rtlRenderElement(NxLoadingSpinner, {});

  it('renders with the role of status', function() {
    expect(quickRender().getByRole('status')).toBeInTheDocument();
  });

  it('renders the text "Loading…" if no children are provided', function() {
    expect(renderEl()).toHaveTextContent('Loading…');
  });
});
