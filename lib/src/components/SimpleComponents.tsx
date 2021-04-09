/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import withClass from '../util/withClass';

// Simple convenience components that are just a particular tag with a particular classname, with the ability
// to add all attrs that you would normally be able to add to that tag (including more classnames)
export const NxP = withClass('p', 'nx-p');
export const NxCode = withClass('code', 'nx-code');
export const NxBlockquote = withClass('blockquote', 'nx-blockquote');
export const NxPre = withClass('pre', 'nx-pre');
export const NxFooter = withClass('footer', 'nx-footer');
export const NxButtonBar = withClass('div', 'nx-btn-bar');
export const NxCounter = withClass('span', 'nx-counter');
export const NxFormSelect = withClass('select', 'nx-form-select');
export const NxThreatNumber = withClass('span', 'nx-threat-number');
export const NxPageMain = withClass('main', 'nx-page-main');
export const NxPageSidebar = withClass('aside', 'nx-page-sidebar');

export const NxH1 = withClass('h1', 'nx-h1');
export const NxH2 = withClass('h2', 'nx-h2');
export const NxH3 = withClass('h3', 'nx-h3');
export const NxH4 = withClass('h4', 'nx-h4');

export const NxTile = Object.assign(withClass('section', 'nx-tile'), {
  Header: withClass('header', 'nx-tile-header'),
  HeaderTitle: withClass('div', 'nx-tile-header__title'),
  HeaderSubtitle: withClass('div', 'nx-tile-header__subtitle'),
  HeaderActions: withClass('div', 'nx-tile__actions'),
  Content: withClass('div', 'nx-tile-content'),
  Subsection: withClass('section', 'nx-tile-subsection'),
  SubsectionHeader: withClass('header', 'nx-tile-subsection__header'),
  HeaderTags: withClass('div', 'nx-tile__tags')
});

export const NxCard = Object.assign(withClass('section', 'nx-card'), {
  Container: withClass('div', 'nx-card-container'),
  Header: withClass('header', 'nx-card__header'),
  Footer: withClass('footer', 'nx-card__footer'),
  Content: withClass('div', 'nx-card__content'),
  CallOut: withClass('div', 'nx-card__call-out'),
  Text: withClass('div', 'nx-card__text')
});

export const NxGrid = {
  Row: withClass('div', 'nx-grid-row'),
  Column: withClass('div', 'nx-grid-col'),
  HorizontalKeyline: withClass('div', 'nx-grid-h-keyline'),
  Header: withClass('div', 'nx-grid-header'),
  HeaderHrule: withClass('hr', 'nx-grid-header__hrule')
};

export const NxList = Object.assign(withClass('ul', 'nx-list'), {
  Item: withClass('li', 'nx-list__item'),
  Text: withClass('span', 'nx-list__text'),
  Subtext: withClass('span', 'nx-list__subtext'),
  Actions: withClass('div', 'nx-list__actions'),
  DescriptionTerm: withClass('dt', 'nx-list__term'),
  Description: withClass('dd', 'nx-list__description')
});

export const NxPageTitle = Object.assign(withClass('div', 'nx-page-title'), {
  Description: withClass('div', 'nx-page-title__description'),
  Tags: withClass('div', 'nx-page-title__tags')
});

export const NxReadOnly = Object.assign(withClass('dl', 'nx-read-only'), {
  Label: withClass('dt', 'nx-read-only__label'),
  Data: withClass('dd', 'nx-read-only__data')
});

export const NxTableContainer = Object.assign(withClass('div', 'nx-table-container'), {
  Footer: withClass('div', 'nx-table-container__footer')
});
