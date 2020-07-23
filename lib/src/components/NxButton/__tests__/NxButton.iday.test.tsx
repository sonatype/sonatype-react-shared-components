/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxButton from '../NxButton';

describe('NxButton', function() {
  it('renders a button', function() {
    render(<NxButton />);

    expect(screen.getByRole('button')).toHaveClass('nx-btn');
  });

  it('renders a primary button', function() {
    render(<NxButton variant="primary">Primary Button</NxButton>);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('nx-btn--primary');
    expect(button).toHaveTextContent('Primary Button');
  });

  it('does not render a variant class if the variant matches the default variant of "secondary"', function() {
    render(<NxButton variant="secondary">Secondary Button</NxButton>);

    expect(screen.getByRole('button')).not.toHaveClass('nx-btn--secondary');
  });

  it('renders an icon-only button', function() {
    render(<NxButton iconOnly={true}><NxFontAwesomeIcon icon={faCheck}/></NxButton>);

    const button = screen.getByRole('button');
    const icon = screen.getByRole('img', { hidden: true });

    expect(button).toHaveClass('nx-btn--icon-only');
    expect(button).toContainElement(icon);
  });

  it('renders an error button', function () {
    render(<NxButton variant="error">Disabled Button</NxButton>);

    expect(screen.getByRole('button')).toHaveClass('nx-btn--error');
  });

  it('is enabled by default', function () {
    render(<NxButton>Button</NxButton>);

    expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
  });

  it('passes the disabled attribute through', function() {
    render(<NxButton disabled>Disabled Button</NxButton>);

    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });

  it('renders an inline button', function() {
    render(<NxButton inline>Disabled Button</NxButton>);

    expect(screen.getByRole('button')).toHaveClass('nx-btn--inline');
  });
});
