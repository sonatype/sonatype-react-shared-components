/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ComponentType } from 'react';
import { rtlRenderElement } from '../../../__testutils__/rtlUtils';
import { render, within } from '@testing-library/react';

import NxTile from '../NxTile';

function testMergedClassNames(Component: ComponentType) {
  return () => {
    const renderEl = rtlRenderElement(Component, {});

    const defaultEl = renderEl()!,
        customEl = renderEl({ className: 'foo' });

    expect(customEl).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(customEl).toHaveClass(cls);
    }
  };
}

describe('NxTile', function() {
  it('adds specified classnames in addition to the defaults', testMergedClassNames(NxTile));
});

describe('NxTile.Header', function() {
  it('renders a banner element', function() {
    const { container } = render(<NxTile.Header />);
    const header = within(container).getByRole('banner');

    expect(header).toBeInTheDocument();
  });

  it('adds specified classnames in addition to the defaults', testMergedClassNames(NxTile.Header));
});

describe('NxTile.HeaderTitle', function() {
  it('adds specified classnames in addition to the defaults', testMergedClassNames(NxTile.HeaderTitle));
});

describe('NxTile.Headings', function() {
  it('adds specified classnames in addition to the defaults', testMergedClassNames(NxTile.Headings));
});

describe('NxTile.HeaderSubtitle', function() {
  it('renders a heading element', function() {
    const { container } = render(<NxTile.HeaderSubtitle />);
    const subtitle = within(container).getByRole('heading');

    expect(subtitle).toBeInTheDocument();
  });

  it('adds specified classnames in addition to the defaults', testMergedClassNames(NxTile.HeaderSubtitle));
});

describe('NxTile.HeaderActions', function() {
  it('adds specified classnames in addition to the defaults', testMergedClassNames(NxTile.HeaderActions));
});

describe('NxTile.Content', function() {
  it('adds specified classnames in addition to the defaults', testMergedClassNames(NxTile.Content));
});

describe('NxTile.Subsection', function() {
  it('adds specified classnames in addition to the defaults', testMergedClassNames(NxTile.Subsection));
});

describe('NxTile.SubsectionHeader', function() {
  it('renders a banner element', function() {
    const { container } = render(<NxTile.SubsectionHeader />);
    const subsectionHeader = within(container).getByRole('banner');

    expect(subsectionHeader).toBeInTheDocument();
  });

  it('adds specified classnames in addition to the defaults',
      testMergedClassNames(NxTile.SubsectionHeader));
});

describe('NxTile.HeaderTags', function() {
  it('adds specified classnames in addition to the defaults', testMergedClassNames(NxTile.HeaderTags));
});
