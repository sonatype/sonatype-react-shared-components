/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ComponentType } from 'react';
import { render, screen } from '@testing-library/react';
import { rtlRenderElement, runTimers, userEvent } from '../../../__testutils__/rtlUtils';

import NxTile from '../NxTile';

function test(Component: ComponentType<{}>, tagName: string, ...classNames: string[]) {
  return () => {
    const el = render(<Component/>).container.firstElementChild!;
    expect(el.tagName).toBe(tagName.toUpperCase());

    for (const className of classNames) {
      expect(el).toHaveClass(className);
    }
  };
}

describe('NxTile', function() {
  it('makes a <section> tag with an nx-tile class', test(NxTile, 'section', 'nx-tile'));
});

describe('NxTile.Header', function() {
  it('makes a <header> tag with an nx-tile-header class', test(NxTile.Header, 'header', 'nx-tile-header'));
});

describe('NxTile.HeaderTitle', function() {
  const renderEl = rtlRenderElement(NxTile.HeaderTitle, {});

  it('makes a <div> tag with an nx-tile-header__title class', test(NxTile.HeaderTitle, 'div', 'nx-tile-header__title'));

  it('renders a tooltip when the title text is too long to be fully seen', async function() {
  // Mock layout methods that NxOverflowTooltip relies on in order to make it think overflow is occurring
    jest.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      x: 0,
      y: 0,
      width: 1,
      height: 1,
      top: 0,
      right: 1,
      bottom: 1,
      left: 0
    } as DOMRect);

    // mock that text extends 1px farther than container
    jest.spyOn(Range.prototype, 'getBoundingClientRect').mockReturnValue({
      x: 0,
      y: 0,
      width: 2,
      height: 1,
      top: 0,
      right: 2,
      bottom: 1,
      left: 0
    } as DOMRect);

    const el = renderEl({ children: <h2>Title</h2>})!,
        user = userEvent.setup();

    await user.hover(el);
    await runTimers();

    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    expect(screen.getByRole('tooltip')).toHaveTextContent('Title');
  });
});

describe('NxTile.Headings', function() {
  it('makes a <hgroup> tag with an nx-tile-header__headings class',
      test(NxTile.Headings, 'hgroup', 'nx-tile-header__headings'));
});

describe('NxTile.HeaderSubtitle', function() {
  it('makes a <h3> tag with an nx-tile-header__subtitle class',
      test(NxTile.HeaderSubtitle, 'h3', 'nx-tile-header__subtitle'));
});

describe('NxTile.HeaderActions', function() {
  it('makes a <div> tag with an nx-tile__actions class', test(NxTile.HeaderActions, 'div', 'nx-tile__actions'));
});

describe('NxTile.Content', function() {
  it('makes a <div> tag with an nx-tile-content class', test(NxTile.Content, 'div', 'nx-tile-content'));
});

describe('NxTile.Subsection', function() {
  it('makes a <section> tag with an nx-tile-subsection class',
      test(NxTile.Subsection, 'section', 'nx-tile-subsection'));
});

describe('NxTile.SubsectionHeader', function() {
  it('makes a <header> tag with an nx-tile-subsection__header class',
      test(NxTile.SubsectionHeader, 'header', 'nx-tile-subsection__header'));
});

describe('NxTile.HeaderTags', function() {
  it('makes a <div> tag with an nx-tile__tags class', test(NxTile.HeaderTags, 'div', 'nx-tile__tags'));
});
