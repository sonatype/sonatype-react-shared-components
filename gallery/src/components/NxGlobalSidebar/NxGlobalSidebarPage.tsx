/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import CodeExample from '../../CodeExample';
import { NxP, NxCode, NxTable } from '@sonatype/react-shared-components';

import './NxGlobalSidebarPage.scss';

const NxGlobalSidebarExample = require('./NxGlobalSidebarExample.tsx?raw'),
    NxGlobalSidebarWithPageSidebarExample = require('./NxGlobalSidebarWithPageSidebarExample.tsx?raw');

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
          <NxP>
            <NxCode>NxGlobalSidebar</NxCode> is a collapsible page level sidebar. It has two main sections:
          </NxP>
          <ul className="nx-list nx-list--bulleted">
            <li className="nx-list__item">A header which contains branding as well as the open/close toggle</li>
            <li className="nx-list__item">
              A navigation link section which display an icon plus text in the open state and an icon in the closed
              state
            </li>
          </ul>
          <NxP>
            Because <NxCode>NxGlobalSidebar</NxCode> contains product branding it should not be used in conjunction
            with <NxCode>NxPageHeader</NxCode> or <NxCode>NxNexusPageHeader</NxCode>. Instead it should be paired with
            <NxCode>NxSystemHeader</NxCode> (not yet added to the gallery).
          </NxP>
          <NxP>
            Addition custom content may be added below the navigation links if desired, care should be taken that such
            content can adapt to both the open and closed states.
          </NxP>
          <section className="nx-tile-subsection">
            <header className="nx-tile-subsection__header">
              <h3 className="nx-h3"><NxCode>NxGlobalSidebar</NxCode> Props</h3>
            </header>
            <NxTable>
              <NxTable.Head>
                <NxTable.Row>
                  <NxTable.Cell>Prop</NxTable.Cell>
                  <NxTable.Cell>Type</NxTable.Cell>
                  <NxTable.Cell>Required</NxTable.Cell>
                  <NxTable.Cell>Details</NxTable.Cell>
                </NxTable.Row>
              </NxTable.Head>
              <NxTable.Body>
                <NxTable.Row>
                  <NxTable.Cell>isOpen</NxTable.Cell>
                  <NxTable.Cell>Boolean</NxTable.Cell>
                  <NxTable.Cell>No</NxTable.Cell>
                  <NxTable.Cell></NxTable.Cell>
                </NxTable.Row>
                <NxTable.Row>
                  <NxTable.Cell>toggleOpenIcon</NxTable.Cell>
                  <NxTable.Cell>IconDefinition</NxTable.Cell>
                  <NxTable.Cell>Yes</NxTable.Cell>
                  <NxTable.Cell>
                    An icon used in the sidebar's open/close toggle to represent Opening the sidebar from a closed
                    state.
                  </NxTable.Cell>
                </NxTable.Row>
                <NxTable.Row>
                  <NxTable.Cell>toggleClosedIcon</NxTable.Cell>
                  <NxTable.Cell>IconDefinition</NxTable.Cell>
                  <NxTable.Cell>Yes</NxTable.Cell>
                  <NxTable.Cell>
                    An icon used in the sidebar's open/close toggle to represent Opening the sidebar from an open
                    state.
                  </NxTable.Cell>
                </NxTable.Row>
                <NxTable.Row>
                  <NxTable.Cell>logoImg</NxTable.Cell>
                  <NxTable.Cell>string</NxTable.Cell>
                  <NxTable.Cell>Yes</NxTable.Cell>
                  <NxTable.Cell>
                    The path to an image placed in the top left corner which displays branding and product name.
                  </NxTable.Cell>
                </NxTable.Row>
                <NxTable.Row>
                  <NxTable.Cell>logoAltText</NxTable.Cell>
                  <NxTable.Cell>string</NxTable.Cell>
                  <NxTable.Cell>Yes</NxTable.Cell>
                  <NxTable.Cell>Alt text for the logo</NxTable.Cell>
                </NxTable.Row>
                <NxTable.Row>
                  <NxTable.Cell>logoLink</NxTable.Cell>
                  <NxTable.Cell>string</NxTable.Cell>
                  <NxTable.Cell>Yes</NxTable.Cell>
                  <NxTable.Cell>
                    When the logo is clicked it navigates to a page (typically Home) specified here.
                  </NxTable.Cell>
                </NxTable.Row>
              </NxTable.Body>
            </NxTable>
          </section>
          <section className="nx-tile-subsection">
            <header className="nx-tile-subsection__header">
              <h3 className="nx-h3"><NxCode>NxGlobalSidebarNavigation</NxCode> Props</h3>
            </header>
            <NxP>
              <NxCode>NxGlobalSidebarNavigation</NxCode> is a container for navigation links.
              It accepts all standard <NxCode>&lt;div&gt;</NxCode> HTML attributes.
            </NxP>
          </section>
          <section className="nx-tile-subsection">
            <header className="nx-tile-subsection__header">
              <h3 className="nx-h3"><NxCode>NxGlobalSidebarNavigationLink</NxCode> Props</h3>
            </header>
            <NxP>
              In addition to all standard <NxCode>&lt;a&gt;</NxCode> HTML attributes,
              <NxCode>NxGlobalSidebarNavigationLink</NxCode> can receive the following props:
            </NxP>
            <NxTable>
              <NxTable.Head>
                <NxTable.Row>
                  <NxTable.Cell>Prop</NxTable.Cell>
                  <NxTable.Cell>Type</NxTable.Cell>
                  <NxTable.Cell>Required</NxTable.Cell>
                  <NxTable.Cell>Details</NxTable.Cell>
                </NxTable.Row>
              </NxTable.Head>
              <NxTable.Body>
                <NxTable.Row>
                  <NxTable.Cell>isSelected</NxTable.Cell>
                  <NxTable.Cell>Boolean</NxTable.Cell>
                  <NxTable.Cell>Optional</NxTable.Cell>
                  <NxTable.Cell>Toggle for the selected state of the currently clicked link</NxTable.Cell>
                </NxTable.Row>
                <NxTable.Row>
                  <NxTable.Cell>icon</NxTable.Cell>
                  <NxTable.Cell>IconDefinition</NxTable.Cell>
                  <NxTable.Cell>Yes</NxTable.Cell>
                  <NxTable.Cell>
                    Navigation links have icons to their left, this specifies the icon to be used.
                  </NxTable.Cell>
                </NxTable.Row>
                <NxTable.Row>
                  <NxTable.Cell>text</NxTable.Cell>
                  <NxTable.Cell>string</NxTable.Cell>
                  <NxTable.Cell>Yes</NxTable.Cell>
                  <NxTable.Cell>The text that should appear in the navigation link</NxTable.Cell>
                </NxTable.Row>
                <NxTable.Row>
                  <NxTable.Cell>href</NxTable.Cell>
                  <NxTable.Cell>string</NxTable.Cell>
                  <NxTable.Cell>Yes</NxTable.Cell>
                  <NxTable.Cell>URL</NxTable.Cell>
                </NxTable.Row>
              </NxTable.Body>
            </NxTable>
          </section>
          <section className="nx-tile-subsection">
            <header className="nx-tile-subsection__header">
              <h3 className="nx-h3"><NxCode>NxGlobalSidebarNavigationLink</NxCode> Props</h3>
            </header>
            <p className="nx-p">The following CSS classes are available for use on child elements.</p>
            <NxTable>
              <NxTable.Head>
                <NxTable.Row>
                  <NxTable.Cell>Name</NxTable.Cell>
                  <NxTable.Cell>Location</NxTable.Cell>
                  <NxTable.Cell>Description</NxTable.Cell>
                </NxTable.Row>
              </NxTable.Head>
              <NxTable.Body>
                <NxTable.Row>
                  <NxTable.Cell><NxCode>nx-global-sidebar__expanded-content</NxCode></NxTable.Cell>
                  <NxTable.Cell>element</NxTable.Cell>
                  <NxTable.Cell>
                    Content wrapped with <NxCode>nx-global-sidebar__expanded-content</NxCode> will appear in the
                    expanded view, but will not be displayed in the collapsed view.
                  </NxTable.Cell>
                </NxTable.Row>
              </NxTable.Body>
            </NxTable>
          </section>
        </div>
      </section>
      <section className="nx-tile">
        <header className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">Basic Global Sidebar Example with Nav</h2>
          </div>
        </header>
        <div className="nx-tile-content">
          <NxP>
            <a className="nx-text-link" href="#/NxGlobalSidebarExample">
              Click here to navigate to the live example.
            </a>
          </NxP>
          <CodeExample content={NxGlobalSidebarExample} />
        </div>
      </section>
      <section className="nx-tile">
        <header className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">Global Sidebar on a page with another page level sidebar</h2>
          </div>
        </header>
        <div className="nx-tile-content">
          <NxP>
            In this example, there is another standard page level sidebar.
          </NxP>
          <NxP>
            <a className="nx-text-link" href="#/NxGlobalSidebarWithPageSidebarExample">
              Click here to navigate to the live example.
            </a>
          </NxP>
          <CodeExample content={NxGlobalSidebarWithPageSidebarExample} />
        </div>
      </section>
    </>
  );
}
