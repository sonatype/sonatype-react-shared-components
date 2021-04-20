/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import CodeExample from '../../CodeExample';
import { NxP, NxCode, NxTableHead, NxTableRow, NxTableCell, NxTable, NxTableBody }
  from '@sonatype/react-shared-components';

const NxGlobalSidebarExample = require('./NxGlobalSidebarExample.tsx?raw'),
    NxGlobalSidebarSidebarExample = require('./NxGlobalSidebarSidebarExample.tsx?raw');

export default function NxGlobalSidebarPage() {
  return (
    <>
      <section className="nx-tile">
        <header className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">Description</h2>
          </div>
        </header>
        <div className="nx-tile-content">
          <NxP><NxCode>a</NxCode></NxP>
          <NxTable>
            <NxTableHead>
              <NxTableRow>
                <NxTableCell>Class Name</NxTableCell>
                <NxTableCell>Location</NxTableCell>
                <NxTableCell>Description</NxTableCell>
              </NxTableRow>
            </NxTableHead>
            <NxTableBody>
              <NxTableRow>
                <NxTableCell><NxCode>.nx-gloabl-sidebar</NxCode></NxTableCell>
                <NxTableCell>
                </NxTableCell>
                <NxTableCell>
                </NxTableCell>
              </NxTableRow>
            </NxTableBody>
          </NxTable>
        </div>
      </section>
      <section className="nx-tile">
        <header className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">Basic Example with Nav</h2>
          </div>
        </header>
        <div className="nx-tile-content">
          <CodeExample content={NxGlobalSidebarExample} />
        </div>
      </section>
      <section className="nx-tile">
        <header className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">Shrinking Example</h2>
          </div>
        </header>
        <div className="nx-tile-content">
          <p className="nx-p">
            In this example, there is another sidebar.
          </p>
          <CodeExample content={NxGlobalSidebarSidebarExample} />
        </div>
      </section>
    </>
  );
}
