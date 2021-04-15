/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { shallow } from 'enzyme';
import React from 'react';

import {
  NxP,
  NxCode,
  NxBlockquote,
  NxPre,
  NxFooter,
  NxButtonBar,
  NxCounter,
  NxFormSelect,
  NxThreatNumber,
  NxPageMain,
  NxPageSidebar,
  NxH1,
  NxH2,
  NxH3,
  NxH4,
  NxTile,
  NxCard,
  NxGrid,
  NxList,
  NxPageTitle,
  NxReadOnly,
  NxTableContainer
} from '../SimpleComponents';

describe('NxP', function() {
  it('makes a <p> tag with an nx-p class', function() {
    expect(shallow(<NxP/>)).toMatchSelector('p.nx-p');
  });
});

describe('NxCode', function() {
  it('makes a <code> tag with an nx-code class', function() {
    expect(shallow(<NxCode/>)).toMatchSelector('code.nx-code');
  });
});

describe('NxBlockquote', function() {
  it('makes a <blockquote> tag with an nx-blockquote class', function() {
    expect(shallow(<NxBlockquote/>)).toMatchSelector('blockquote.nx-blockquote');
  });
});

describe('NxPre', function() {
  it('makes a <pre> tag with an nx-pre class', function() {
    expect(shallow(<NxPre/>)).toMatchSelector('pre.nx-pre');
  });
});

describe('NxFooter', function() {
  it('makes a <footer> tag with an nx-footer class', function() {
    expect(shallow(<NxFooter/>)).toMatchSelector('footer.nx-footer');
  });
});

describe('NxButtonBar', function() {
  it('makes a <div> tag with an nx-btn class', function() {
    expect(shallow(<NxButtonBar/>)).toMatchSelector('div.nx-btn-bar');
  });
});

describe('NxCounter', function() {
  it('makes a <span> tag with an nx-counter class', function() {
    expect(shallow(<NxCounter/>)).toMatchSelector('span.nx-counter');
  });
});

describe('NxFormSelect', function() {
  it('makes a <select> tag with an nx-form-select class', function() {
    expect(shallow(<NxFormSelect/>)).toMatchSelector('select.nx-form-select');
  });
});

describe('NxThreatNumber', function() {
  it('makes a <span> tag with an nx-threat-number class', function() {
    expect(shallow(<NxThreatNumber/>)).toMatchSelector('span.nx-threat-number');
  });
});

describe('NxPageMain', function() {
  it('makes a <main> tag with an nx-page-main class', function() {
    expect(shallow(<NxPageMain/>)).toMatchSelector('main.nx-page-main');
  });
});

describe('NxPageSidebar', function() {
  it('makes a <aside> tag with an nx-page-sidebar class', function() {
    expect(shallow(<NxPageSidebar/>)).toMatchSelector('aside.nx-page-sidebar');
  });
});

describe('NxH1', function() {
  it('makes a <h1> tag with an nx-h1 class', function() {
    expect(shallow(<NxH1/>)).toMatchSelector('h1.nx-h1');
  });
});

describe('NxH2', function() {
  it('makes a <h2> tag with an nx-h2 class', function() {
    expect(shallow(<NxH2/>)).toMatchSelector('h2.nx-h2');
  });
});

describe('NxH3', function() {
  it('makes a <h3> tag with an nx-h3 class', function() {
    expect(shallow(<NxH3/>)).toMatchSelector('h3.nx-h3');
  });
});

describe('NxH4', function() {
  it('makes a <h4> tag with an nx-h4 class', function() {
    expect(shallow(<NxH4/>)).toMatchSelector('h4.nx-h4');
  });
});

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
    expect(shallow(<NxTile.HeaderTitle/>)).toMatchSelector('div.nx-tile-header__title');
  });
});

describe('NxTile.HeaderSubtitle', function() {
  it('makes a <div> tag with an nx-tile-header__subtitle class', function() {
    expect(shallow(<NxTile.HeaderSubtitle/>)).toMatchSelector('div.nx-tile-header__subtitle');
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

describe('NxCard', function() {
  it('makes a <section> tag with an nx-card class', function() {
    expect(shallow(<NxCard/>)).toMatchSelector('section.nx-card');
  });
});

describe('NxCard.Container', function() {
  it('makes a <div> tag with an nx-card-container class', function() {
    expect(shallow(<NxCard.Container/>)).toMatchSelector('div.nx-card-container');
  });
});

describe('NxCard.Header', function() {
  it('makes a <header> tag with an nx-card__header class', function() {
    expect(shallow(<NxCard.Header/>)).toMatchSelector('header.nx-card__header');
  });
});

describe('NxCard.Footer', function() {
  it('makes a <footer> tag with an nx-card__footer class', function() {
    expect(shallow(<NxCard.Footer/>)).toMatchSelector('footer.nx-card__footer');
  });
});

describe('NxCard.Content', function() {
  it('makes a <div> tag with an nx-card__content class', function() {
    expect(shallow(<NxCard.Content/>)).toMatchSelector('div.nx-card__content');
  });
});

describe('NxCard.CallOut', function() {
  it('makes a <div> tag with an nx-card__call-out class', function() {
    expect(shallow(<NxCard.CallOut/>)).toMatchSelector('div.nx-card__call-out');
  });
});

describe('NxCard.Text', function() {
  it('makes a <div> tag with an nx-card__text class', function() {
    expect(shallow(<NxCard.Text/>)).toMatchSelector('div.nx-card__text');
  });
});

describe('NxGrid.Row', function() {
  it('makes a <div> tag with an nx-grid-row class', function() {
    expect(shallow(<NxGrid.Row/>)).toMatchSelector('div.nx-grid-row');
  });
});

describe('NxGrid.Column', function() {
  it('makes a <div> tag with an nx-grid-column class', function() {
    expect(shallow(<NxGrid.Column/>)).toMatchSelector('div.nx-grid-col');
  });
});

describe('NxGrid.HorizontalKeyline', function() {
  it('makes a <div> tag with an nx-grid-h-keyline class', function() {
    expect(shallow(<NxGrid.HorizontalKeyline/>)).toMatchSelector('div.nx-grid-h-keyline');
  });
});

describe('NxGrid.Header', function() {
  it('makes a <div> tag with an nx-grid-header class', function() {
    expect(shallow(<NxGrid.Header/>)).toMatchSelector('div.nx-grid-header');
  });
});

describe('NxGrid.HeaderHrule', function() {
  it('makes a <hr> tag with an nx-grid-header__hrule class', function() {
    expect(shallow(<NxGrid.HeaderHrule/>)).toMatchSelector('hr.nx-grid-header__hrule');
  });
});

describe('NxList', function() {
  it('makes a <ul> tag with an nx-list class', function() {
    expect(shallow(<NxList/>)).toMatchSelector('ul.nx-list');
  });
});

describe('NxList.Item', function() {
  it('makes a <li> tag with an nx-list__item class', function() {
    expect(shallow(<NxList.Item/>)).toMatchSelector('li.nx-list__item');
  });
});

describe('NxList.Text', function() {
  it('makes a <span> tag with an nx-list__text class', function() {
    expect(shallow(<NxList.Text/>)).toMatchSelector('span.nx-list__text');
  });
});

describe('NxList.Subtext', function() {
  it('makes a <span> tag with an nx-list__subtext class', function() {
    expect(shallow(<NxList.Subtext/>)).toMatchSelector('span.nx-list__subtext');
  });
});

describe('NxList.Actions', function() {
  it('makes a <div> tag with an nx-list__actions class', function() {
    expect(shallow(<NxList.Actions/>)).toMatchSelector('div.nx-list__actions');
  });
});

describe('NxList.DescriptionTerm', function() {
  it('makes a <dt> tag with an nx-list__term class', function() {
    expect(shallow(<NxList.DescriptionTerm/>)).toMatchSelector('dt.nx-list__term');
  });
});

describe('NxList.Description', function() {
  it('makes a <dd> tag with an nx-list__description class', function() {
    expect(shallow(<NxList.Description/>)).toMatchSelector('dd.nx-list__description');
  });
});

describe('NxPageTitle', function() {
  it('makes a <div> tag with an nx-page-title class', function() {
    expect(shallow(<NxPageTitle/>)).toMatchSelector('div.nx-page-title');
  });
});

describe('NxPageTitle.Description', function() {
  it('makes a <div> tag with an nx-page-title__description class', function() {
    expect(shallow(<NxPageTitle.Description/>)).toMatchSelector('div.nx-page-title__description');
  });
});

describe('NxPageTitle.Tags', function() {
  it('makes a <div> tag with an nx-page-title__tags class', function() {
    expect(shallow(<NxPageTitle.Tags/>)).toMatchSelector('div.nx-page-title__tags');
  });
});

describe('NxReadOnly', function() {
  it('makes a <dl> tag with an nx-read-only class', function() {
    expect(shallow(<NxReadOnly/>)).toMatchSelector('dl.nx-read-only');
  });
});

describe('NxReadOnly.Label', function() {
  it('makes a <dt> tag with an nx-read-only__label class', function() {
    expect(shallow(<NxReadOnly.Label/>)).toMatchSelector('dt.nx-read-only__label');
  });
});

describe('NxReadOnly.Data', function() {
  it('makes a <dd> tag with an nx-read-only__data class', function() {
    expect(shallow(<NxReadOnly.Data/>)).toMatchSelector('dd.nx-read-only__data');
  });
});

describe('NxTableContainer', function() {
  it('makes a <div> tag with an nx-table-container class', function() {
    expect(shallow(<NxTableContainer/>)).toMatchSelector('div.nx-table-container');
  });
});

describe('NxTableContainer.Footer', function() {
  it('makes a <div> tag with an nx-table-container__footer class', function() {
    expect(shallow(<NxTableContainer.Footer/>)).toMatchSelector('div.nx-table-container__footer');
  });
});
