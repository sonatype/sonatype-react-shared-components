/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import {
  NxBackButton,
  NxPageMain,
  NxStatefulGlobalSidebar2,
  NxGlobalSidebar2NavigationLink,
  NxTextLink,
  NxGlobalFooter2,
  NxTable,
  NxInfoAlert,
  NxH1,
  NxTableContainer,
  NxGlobalHeader2,
  NxFilterInput,
  NxStatefulNavigationDropdown
} from '@sonatype/react-shared-components';
import {
  faArrowLeft,
  faArrowRight,
  faLink,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';

export default function NxGlobalFooter2ViewportSizedExpandingExample() {
  const [filterInputValue, setFilterInputValue] = useState('');

  return (
    <>
      <NxGlobalHeader2 homeHref="#/">
        <NxFilterInput placeholder="Search"
                       aria-label="Global Search"
                       searchIcon
                       value={filterInputValue}
                       onChange={setFilterInputValue} />
        <NxStatefulNavigationDropdown title="User" icon={faUserCircle}>
          <button onClick={() => alert('clicked')} className="nx-dropdown-button">
            Button Link
          </button>
        </NxStatefulNavigationDropdown>
      </NxGlobalHeader2>
      <NxStatefulGlobalSidebar2 isDefaultOpen={false}
                                toggleOpenIcon={faArrowLeft}
                                toggleCloseIcon={faArrowRight}>
        <NxGlobalSidebar2NavigationLink icon={faLink} text="NxGlobalSidebar" href="#/pages/Global%20Sidebar"/>
      </NxStatefulGlobalSidebar2>
      <NxGlobalFooter2.Container className="nx-viewport-sized">
        <NxPageMain className="nx-viewport-sized__container">
          <NxBackButton targetPageTitle="nx-viewport-sized Docs" href="#/pages/nx-viewport-sized"/>
          <NxH1>Viewport Sized Example</NxH1>
          <section className="nx-tile nx-viewport-sized__container">
            <header className="nx-tile-header">
              <div className="nx-tile-header__title">
                <h2 className="nx-h2">A table, with some stuff above</h2>
              </div>
            </header>
            <div className="nx-tile-content nx-viewport-sized__container">
              <p className="nx-p">
                Observe that the table below, along with its containing tile, shrinks to fit the viewport and gets a
                scrollbar. As the page size is adjusted, the table size changes accordingly.
              </p>
              <p className="nx-p" style={{ width: '400px' }}>
                This paragraph has an explicit, non-100% width. It is still left-aligned within the tile just like it
                would be in block layout.
              </p>
              <p className="nx-p">
                Single line paragraph.
              </p>
              <NxInfoAlert>
                This alert is stretched as expected.
              </NxInfoAlert>
              <NxTableContainer className="nx-scrollable nx-viewport-sized__scrollable" tabIndex={0}>
                <NxTable>
                  <NxTable.Head>
                    <NxTable.Row>
                      <NxTable.Cell>Oct</NxTable.Cell>
                      <NxTable.Cell>Dev</NxTable.Cell>
                      <NxTable.Cell>Hex</NxTable.Cell>
                      <NxTable.Cell>Char</NxTable.Cell>
                    </NxTable.Row>
                  </NxTable.Head>
                  <NxTable.Body>
                    <NxTable.Row>
                      <NxTable.Cell>040</NxTable.Cell>
                      <NxTable.Cell>32</NxTable.Cell>
                      <NxTable.Cell>20</NxTable.Cell>
                      <NxTable.Cell>(space)</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>041</NxTable.Cell>
                      <NxTable.Cell>33</NxTable.Cell>
                      <NxTable.Cell>21</NxTable.Cell>
                      <NxTable.Cell>!</NxTable.Cell>
                    </NxTable.Row>
                  </NxTable.Body>
                </NxTable>
              </NxTableContainer>
            </div>
          </section>
        </NxPageMain>
        <NxGlobalFooter2>
          <span>Thank you for choosing RSC</span>
          <NxTextLink href="/#">Home</NxTextLink>
          <NxTextLink href="/#">Also Home</NxTextLink>
        </NxGlobalFooter2>
      </NxGlobalFooter2.Container>
    </>
  );
}
