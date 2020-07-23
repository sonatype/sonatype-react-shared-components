/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NxBackButton from '../NxBackButton';

describe('NxBackButton', function () {
  it('renders the link', function () {
    render(<NxBackButton href="/foo" />);

    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', '/foo');
  });

  it('renders the specified text within the link', function () {
    render(<NxBackButton href="/foo" text="Link Text" />);

    const link = screen.getByRole('link');

    expect(link).toHaveTextContent('Link Text');
  });

  it('ignores the targetPageTitle when the text prop is set', function () {
    render(<NxBackButton href="/foo" text="Link Text" targetPageTitle="BarBaz" />);

    const link = screen.getByRole('link');

    expect(link).toHaveTextContent('Link Text')
  });

  it('renders text based on the targetPageTitle if no text was specified', function () {
    render(<NxBackButton href="/foo" targetPageTitle="BarBaz" />);

    const link = screen.getByRole('link');

    expect(link).toHaveTextContent('BarBaz')
  });

  it('renders just the word "Back" if no text was specified and the state does not have a title', function () {
    render(<NxBackButton href="/foo" />);

    const link = screen.getByRole('link');

    expect(link).toHaveTextContent('Back')
  });
});
