/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import withClass from '../util/withClass';

// Simple convenience components that are just a particular tag with a particular classname, with the ability
// to add all attrs that you would normally be able to add to that tag (including more classnames)
export const NxP = withClass('nx-p', 'p');
export const NxCode = withClass('nx-code', 'code');
export const NxBlockquote = withClass('nx-blockquote', 'blockquote');
export const NxPre = withClass('nx-pre', 'pre');
export const NxFooter = withClass('nx-footer', 'footer');
export const NxButtonBar = withClass('nx-btn-bar', 'div');
export const NxCounter = withClass('nx-counter', 'span');
export const NxFormSelect = withClass('nx-form-select', 'select');
export const NxThreatNumber = withClass('nx-threat-number', 'span');
export const NxPageMain = withClass('nx-page-main', 'main');
export const NxPageSidebar = withClass('nx-page-sidebar', 'aside');

export const NxH1 = withClass('nx-h1', 'h1');
export const NxH2 = withClass('nx-h2', 'h2');
export const NxH3 = withClass('nx-h3', 'h3');
export const NxH4 = withClass('nx-h4', 'h4');

export const NxTile = Object.assign(withClass('nx-tile', 'section'), {
  Header: withClass('nx-tile-header', 'header'),
  HeaderTitle: withClass('nx-tile-header__title', 'div'),
  HeaderSubtitle: withClass('nx-tile-header__subtitle', 'div'),
  HeaderActions: withClass('nx-tile__actions', 'div'),
  Content: withClass('nx-tile-content', 'div'),
  Subsection: withClass('nx-tile-subsection', 'section'),
  SubsectionHeader: withClass('nx-tile-subsection__header', 'header'),
  HeaderTags: withClass('nx-tile__tags', 'div')
});

export const NxCard = Object.assign(withClass('nx-card', 'section'), {
  Container: withClass('nx-card-container', 'div'),
  Header: withClass('nx-card__header', 'header'),
  Footer: withClass('nx-card__footer', 'footer'),
  Content: withClass('nx-card__content', 'div'),
  CallOut: withClass('nx-card__call-out', 'div'),
  Text: withClass('nx-card__text', 'div')
});

export const NxGrid = {
  Row: withClass('nx-grid-row', 'div'),
  Column: withClass('nx-grid-col', 'div'),
  HorizontalKeyline: withClass('nx-grid-h-keyline', 'div'),
  Header: withClass('nx-grid-header', 'div'),
  HeaderHrule: withClass('nx-grid-header__hrule', 'hr')
};

export const NxList = Object.assign(withClass('nx-list', 'ul'), {
  Item: withClass('nx-list__item', 'li'),
  Text: withClass('nx-list__text', 'span'),
  Subtext: withClass('nx-list__subtext', 'span'),
  Actions: withClass('nx-list__actions', 'div'),
  DescriptionTerm: withClass('nx-list__term', 'dt'),
  Description: withClass('nx-list__description', 'dt')
});

export const NxPageTitle = Object.assign(withClass('nx-page-title', 'div'), {
  Description: withClass('nx-page-title__description', 'div'),
  Tags: withClass('nx-page-title__tags', 'div')
});

export const NxReadOnly = Object.assign(withClass('nx-read-only', 'dl'), {
  Label: withClass('nx-read-only__label', 'dt'),
  Data: withClass('nx-read-only__data', 'dd')
});

export const NxTableContainer = Object.assign(withClass('nx-table-container', 'div'), {
  Footer: withClass('nx-table-container__footer', 'div')
});
