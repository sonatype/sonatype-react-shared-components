/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxTableHead, NxTableRow, NxTableCell, NxTableBody, NxBackButton, NxPagination }
  from '@sonatype/react-shared-components';

export default function NxViewportSizedScrollableExample() {
  return (
    <main className="nx-page-main nx-viewport-sized">
      <NxBackButton targetPageTitle="nx-viewport-sized Docs" href="#/pages/nx-viewport-sized"/>
      <section className="nx-tile nx-viewport-sized__container nx-viewport-sized__container--expanding">
        <header className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">A table, with some stuff above</h2>
          </div>
        </header>
        <div className="nx-tile-content nx-viewport-sized__container nx-viewport-sized__container--expanding">
          <p className="nx-p">
            Observe that the table below, along with its containing tile, expands to fit the viewport.
            As the page size is adjusted, the table size changes accordingly. If the page is made so short that
            the table does not fit, it gets a scrollbar just as in the non-expanding example.
          </p>
          <div className="nx-scrollable nx-table-container nx-viewport-sized__scrollable">
            <NxTable>
              <NxTableHead>
                <NxTableRow>
                  <NxTableCell>Name</NxTableCell>
                  <NxTableCell>Country</NxTableCell>
                </NxTableRow>
              </NxTableHead>
              <NxTableBody>
                <NxTableRow>
                  <NxTableCell>Anna</NxTableCell>
                  <NxTableCell>USA</NxTableCell>
                </NxTableRow>
                <NxTableRow>
                  <NxTableCell>Lean</NxTableCell>
                  <NxTableCell>France</NxTableCell>
                </NxTableRow>
                <NxTableRow>
                  <NxTableCell>Louis</NxTableCell>
                  <NxTableCell>France</NxTableCell>
                </NxTableRow>
              </NxTableBody>
            </NxTable>
            <div className="nx-table-container__footer">
              <NxPagination pageCount={1} currentPage={0} onChange={() => {}}/>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
