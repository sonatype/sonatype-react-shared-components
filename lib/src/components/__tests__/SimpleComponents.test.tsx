/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ComponentType } from 'react';
import { render } from '@testing-library/react';

import {
  NxP,
  NxCode,
  NxBlockquote,
  NxPre,
  NxFooter,
  NxButtonBar,
  NxCounter,
  NxDivider,
  NxThreatNumber,
  NxPageMain,
  NxPageSidebar,
  NxH1,
  NxH2,
  NxH3,
  NxH4,
  NxCard,
  NxGrid,
  NxPageTitle,
  NxReadOnly,
  NxTableContainer,
  NxGlobalHeader,
  NxFormRow,
  NxGlobalFooter2
} from '../SimpleComponents';

function test(Component: ComponentType<{}>, tagName: string, ...classNames: string[]) {
  return () => {
    const el = render(<Component/>).container.firstElementChild!;
    expect(el.tagName).toBe(tagName.toUpperCase());

    for (const className of classNames) {
      expect(el).toHaveClass(className);
    }
  };
}

describe('NxP', function() {
  it('makes a <p> tag with an nx-p class', test(NxP, 'p', 'nx-p'));
});

describe('NxCode', function() {
  it('makes a <code> tag with an nx-code class', test(NxCode, 'code', 'nx-code'));
});

describe('NxBlockquote', function() {
  it('makes a <blockquote> tag with an nx-blockquote class', test(NxBlockquote, 'blockquote', 'nx-blockquote'));
});

describe('NxPre', function() {
  it('makes a <pre> tag with an nx-pre class', test(NxPre, 'pre', 'nx-pre'));
});

describe('NxFooter', function() {
  it('makes a <footer> tag with an nx-footer class', test(NxFooter, 'footer', 'nx-footer'));
});

describe('NxButtonBar', function() {
  it('makes a <div> tag with an nx-btn class', test(NxButtonBar, 'div', 'nx-btn-bar'));
});

describe('NxCounter', function() {
  it('makes a <span> tag with an nx-counter class', test(NxCounter, 'span', 'nx-counter'));
});

describe('NxThreatNumber', function() {
  it('makes a <span> tag with an nx-threat-number class', test(NxThreatNumber, 'span', 'nx-threat-number'));
});

describe('NxPageMain', function() {
  it('makes a <main> tag with an nx-page-main class', test(NxPageMain, 'main', 'nx-page-main'));
});

describe('NxPageSidebar', function() {
  it('makes a <aside> tag with an nx-page-sidebar class', test(NxPageSidebar, 'aside', 'nx-page-sidebar'));
});

describe('NxH1', function() {
  it('makes a <h1> tag with an nx-h1 class', test(NxH1, 'h1', 'nx-h1'));
});

describe('NxH2', function() {
  it('makes a <h2> tag with an nx-h2 class', test(NxH2, 'h2', 'nx-h2'));
});

describe('NxH3', function() {
  it('makes a <h3> tag with an nx-h3 class', test(NxH3, 'h3', 'nx-h3'));
});

describe('NxH4', function() {
  it('makes a <h4> tag with an nx-h4 class', test(NxH4, 'h4', 'nx-h4'));
});

describe('NxCard', function() {
  it('makes a <section> tag with an nx-card class', test(NxCard, 'section', 'nx-card'));
});

describe('NxCard.Container', function() {
  it('makes a <div> tag with an nx-card-container class', test(NxCard.Container, 'div', 'nx-card-container'));
});

describe('NxCard.Header', function() {
  it('makes a <header> tag with an nx-card__header class', test(NxCard.Header, 'header', 'nx-card__header'));
});

describe('NxCard.Footer', function() {
  it('makes a <footer> tag with an nx-card__footer class', test(NxCard.Footer, 'footer', 'nx-card__footer'));
});

describe('NxCard.Content', function() {
  it('makes a <div> tag with an nx-card__content class', test(NxCard.Content, 'div', 'nx-card__content'));
});

describe('NxCard.CallOut', function() {
  it('makes a <div> tag with an nx-card__call-out class', test(NxCard.CallOut, 'div', 'nx-card__call-out'));
});

describe('NxCard.Text', function() {
  it('makes a <div> tag with an nx-card__text class', test(NxCard.Text, 'div', 'nx-card__text'));
});

describe('NxGrid.Row', function() {
  it('makes a <div> tag with an nx-grid-row class', test(NxGrid.Row, 'div', 'nx-grid-row'));
});

describe('NxGrid.Column', function() {
  it('makes a <section> tag with an nx-grid-column class', test(NxGrid.Column, 'section', 'nx-grid-col'));
});

describe('NxGrid.ColumnSection', function() {
  it('makes a <section> tag with an nx-grid-column__section class',
      test(NxGrid.ColumnSection, 'section', 'nx-grid-col__section'));
});

describe('NxGrid.HorizontalKeyline', function() {
  it('makes a <div> tag with an nx-grid-h-keyline class', test(NxGrid.HorizontalKeyline, 'div', 'nx-grid-h-keyline'));
});

describe('NxGrid.Header', function() {
  it('makes a <div> tag with an nx-grid-header class', test(NxGrid.Header, 'div', 'nx-grid-header'));
});

describe('NxGrid.HeaderHrule', function() {
  it('makes a <hr> tag with an nx-grid-header__hrule class', test(NxGrid.HeaderHrule, 'hr', 'nx-grid-header__hrule'));
});

describe('NxPageTitle', function() {
  it('makes a <div> tag with an nx-page-title class', test(NxPageTitle, 'div', 'nx-page-title'));
});

describe('NxPageTitle.Headings', function() {
  it('makes a <hgroup> tag with an nx-page-title__headings class',
      test(NxPageTitle.Headings, 'hgroup', 'nx-page-title__headings'));
});

describe('NxPageTitle.Subtitle', function() {
  it('makes a <h2> tag with nx-h2 and nx-page-title__sub-title classes',
      test(NxPageTitle.Subtitle, 'h2', 'nx-h2', 'nx-page-title__sub-title'));
});

describe('NxPageTitle.Description', function() {
  it('makes a <div> tag with an nx-page-title__description class',
      test(NxPageTitle.Description, 'div', 'nx-page-title__description'));
});

describe('NxPageTitle.Tags', function() {
  it('makes a <div> tag with an nx-page-title__tags class', test(NxPageTitle.Tags, 'div', 'nx-page-title__tags'));
});

describe('NxReadOnly', function() {
  it('makes a <dl> tag with an nx-read-only class', test(NxReadOnly, 'dl', 'nx-read-only'));
});

describe('NxReadOnly.Label', function() {
  it('makes a <dt> tag with an nx-read-only__label class', test(NxReadOnly.Label, 'dt', 'nx-read-only__label'));
});

describe('NxReadOnly.Data', function() {
  it('makes a <dd> tag with an nx-read-only__data class', test(NxReadOnly.Data, 'dd', 'nx-read-only__data'));
});

describe('NxReadOnly.Item', function() {
  it('makes a <div> tag with an nx-read-only__item class', test(NxReadOnly.Item, 'div', 'nx-read-only__item'));
});

describe('NxTableContainer', function() {
  it('makes a <div> tag with an nx-table-container class', test(NxTableContainer, 'div', 'nx-table-container'));
});

describe('NxTableContainer.Footer', function() {
  it('makes a <div> tag with an nx-table-container__footer class',
      test(NxTableContainer.Footer, 'div', 'nx-table-container__footer'));
});

describe('NxGlobalHeader', function() {
  it('makes a <header> with an nx-global-header class', test(NxGlobalHeader, 'header', 'nx-global-header'));
});

describe('NxGlobalHeader.Actions', function() {
  it('makes an <div> with an nx-global-header__actions class',
      test(NxGlobalHeader.Actions, 'div', 'nx-global-header__actions'));
});

describe('NxDivider', function() {
  it('makes a <hr> tag with an nx-divider class', test(NxDivider, 'hr', 'nx-divider'));
});

describe('NxFormRow', function() {
  it('makes a <div> tag with the nx-form-row class', test(NxFormRow, 'div', 'nx-form-row'));
});

describe('NxGlobalFooter2', function() {
  it('makes a <footer> tag with the nx-global-footer-2 class', test(NxGlobalFooter2, 'footer', 'nx-global-footer-2'));
});

describe('NxGlobalFooter2.Container', function() {
  it('makes a <div> tag with the nx-global-footer-2-container class',
      test(NxGlobalFooter2.Container, 'div', 'nx-global-footer-2-container'));
});
