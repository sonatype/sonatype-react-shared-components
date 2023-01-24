/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { render, screen } from '@testing-library/react';
import { NxErrorStatusIndicator, NxIntermediateStatusIndicator, NxNegativeStatusIndicator, NxPositiveStatusIndicator }
  from '../NxStatusIndicator';

describe('NxStatusIndicator', function() {
  it('renders NxNegativeStatusIndicator with role status', function() {
    render(<NxNegativeStatusIndicator />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders NxPositiveStatusIndicator with role status', function() {
    render(<NxPositiveStatusIndicator />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders NxIntermediateStatusIndicator with role status', function() {
    render(<NxIntermediateStatusIndicator />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders NxErrorStatusIndicator with role status', function() {
    render(<NxErrorStatusIndicator />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
