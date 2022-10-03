/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';

import NxTile from '../NxTile';

describe('NxTile', function() {
  it('makes a <section> tag with an nx-tile class', function() {
    expect(shallow(<NxTile/>)).toMatchSelector('section.nx-tile');
  });
});

describe('NxTile.Header', function() {
  it('makes a <header> tag with an nx-tile-header class', function() {
    expect(shallow(<NxTile.Header/>)).toMatchSelector('header.nx-tile-header');
  });
});

describe('NxTile.HeaderTitle', function() {
  it('makes a <div> tag with an nx-tile-header__title class', function() {
    expect(shallow(<NxTile.HeaderTitle/>).children()).toMatchSelector('div.nx-tile-header__title');
  });
});

describe('NxTile.Headings', function() {
  it('makes a <hgroup> tag with an nx-tile-header__headings class', function() {
    expect(shallow(<NxTile.Headings/>)).toMatchSelector('hgroup.nx-tile-header__headings');
  });
});

describe('NxTile.HeaderSubtitle', function() {
  it('makes a <h3> tag with an nx-tile-header__subtitle class', function() {
    expect(shallow(<NxTile.HeaderSubtitle/>)).toMatchSelector('h3.nx-tile-header__subtitle');
  });
});

describe('NxTile.HeaderActions', function() {
  it('makes a <div> tag with an nx-tile__actions class', function() {
    expect(shallow(<NxTile.HeaderActions/>)).toMatchSelector('div.nx-tile__actions');
  });
});

describe('NxTile.Content', function() {
  it('makes a <div> tag with an nx-tile-content class', function() {
    expect(shallow(<NxTile.Content/>)).toMatchSelector('div.nx-tile-content');
  });
});

describe('NxTile.Subsection', function() {
  it('makes a <section> tag with an nx-tile-subsection class', function() {
    expect(shallow(<NxTile.Subsection/>)).toMatchSelector('section.nx-tile-subsection');
  });
});

describe('NxTile.SubsectionHeader', function() {
  it('makes a <header> tag with an nx-tile-subsection__header class', function() {
    expect(shallow(<NxTile.SubsectionHeader/>)).toMatchSelector('header.nx-tile-subsection__header');
  });
});

describe('NxTile.HeaderTags', function() {
  it('makes a <div> tag with an nx-tile__tags class', function() {
    expect(shallow(<NxTile.HeaderTags/>)).toMatchSelector('div.nx-tile__tags');
  });
});
