/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ComponentType } from 'react';
import { render } from '@testing-library/react';

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
  it('makes a <div> tag with an nx-tile-header__title class', test(NxTile.HeaderTitle, 'div', 'nx-tile-header__title'));
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
