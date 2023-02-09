/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ComponentType } from 'react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxTile from '../NxTile';

function testMergedClassNames(Component: ComponentType<{}>) {
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

function quickRender(Component: ComponentType<{}>) {
  const quickView = rtlRender(Component, {});
  return quickView();
}

describe('NxTile', function() {
  it('adds specified classnames in addition to the defaults', testMergedClassNames(NxTile));
});

describe('NxTile.Header', function() {
  it('renders a top level element with role=banner', function() {
    const view = quickRender(NxTile.Header),
        header = view.getByRole('banner');

    expect(header).toBeInTheDocument();
    expect(header).toBe(view.container.firstElementChild);
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
  it('renders a top level element with role=heading', function() {
    const view = quickRender(NxTile.HeaderSubtitle),
        subtitle = view.getByRole('heading');

    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toBe(view.container.firstElementChild);
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
  it('renders a top level element with role=banner', function() {
    const view = quickRender(NxTile.SubsectionHeader),
        subsectionHeader = view.getByRole('banner');

    expect(subsectionHeader).toBeInTheDocument();
    expect(subsectionHeader).toBe(view.container.firstElementChild);
  });

  it('madds specified classnames in addition to the defaults',
      testMergedClassNames(NxTile.SubsectionHeader));
});

describe('NxTile.HeaderTags', function() {
  it('adds specified classnames in addition to the defaults', testMergedClassNames(NxTile.HeaderTags));
});
