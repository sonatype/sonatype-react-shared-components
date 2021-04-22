/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import CodeExample from '../../CodeExample';
import { NxP, NxCode } from '@sonatype/react-shared-components';

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
          <NxP>Addition custom content may be added below the navigation links if desired.</NxP>
          <section className="nx-tile-subsection">
            <header className="nx-tile-subsection__header">
              <h3 className="nx-h3"><NxCode>NxGlobalSidebar</NxCode> Props</h3>
            </header>
            <table className="nx-table">
              <thead>
                <tr className="nx-table-row">
                  <th className="nx-cell nx-cell--header">Prop</th>
                  <th className="nx-cell nx-cell--header">Type</th>
                  <th className="nx-cell nx-cell--header">Required</th>
                  <th className="nx-cell nx-cell--header">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="nx-table-row">
                  <td className="nx-cell">isOpen</td>
                  <td className="nx-cell">Boolean</td>
                  <td className="nx-cell">No</td>
                  <td className="nx-cell"></td>
                </tr>
                <tr className="nx-table-row">
                  <td className="nx-cell">toggleOpenIcon</td>
                  <td className="nx-cell">IconDefinition</td>
                  <td className="nx-cell">Yes</td>
                  <td className="nx-cell">
                    An icon used in the sidebar's open/close toggle to represent Opening the sidebar from a closed
                    state.
                  </td>
                </tr>
                <tr className="nx-table-row">
                  <td className="nx-cell">toggleClosedIcon</td>
                  <td className="nx-cell">IconDefinition</td>
                  <td className="nx-cell">Yes</td>
                  <td className="nx-cell">
                    An icon used in the sidebar's open/close toggle to represent Opening the sidebar from an open
                    state.
                  </td>
                </tr>
                <tr className="nx-table-row">
                  <td className="nx-cell">logoImg</td>
                  <td className="nx-cell">string</td>
                  <td className="nx-cell">Yes</td>
                  <td className="nx-cell">
                    An image placed in the top left corner which displays branding and product name.
                  </td>
                </tr>
                <tr className="nx-table-row">
                  <td className="nx-cell">logoAltText</td>
                  <td className="nx-cell">string</td>
                  <td className="nx-cell">Yes</td>
                  <td className="nx-cell">Alt text for the logo</td>
                </tr>
                <tr className="nx-table-row">
                  <td className="nx-cell">logoLink</td>
                  <td className="nx-cell">string</td>
                  <td className="nx-cell">Yes</td>
                  <td className="nx-cell">
                    When the logo is clicked it navigates to a page (typically Home) specified here.
                  </td>
                </tr>
              </tbody>
            </table>
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
            <table className="nx-table">
              <thead>
                <tr className="nx-table-row">
                  <th className="nx-cell nx-cell--header">Prop</th>
                  <th className="nx-cell nx-cell--header">Type</th>
                  <th className="nx-cell nx-cell--header">Required</th>
                  <th className="nx-cell nx-cell--header">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="nx-table-row">
                  <td className="nx-cell">isSelected</td>
                  <td className="nx-cell">Boolean</td>
                  <td className="nx-cell">Optional</td>
                  <td className="nx-cell">Toggle for the selected state of the currently clicked link</td>
                </tr>
                <tr className="nx-table-row">
                  <td className="nx-cell">icon</td>
                  <td className="nx-cell">IconDefinition</td>
                  <td className="nx-cell">Yes</td>
                  <td className="nx-cell">
                    Navigation links have icons to their left, this specifies the icon to be used.
                  </td>
                </tr>
                <tr className="nx-table-row">
                  <td className="nx-cell">text</td>
                  <td className="nx-cell">string</td>
                  <td className="nx-cell">Yes</td>
                  <td className="nx-cell">The text that should appear in the navigation link</td>
                </tr>
                <tr className="nx-table-row">
                  <td className="nx-cell">href</td>
                  <td className="nx-cell">string</td>
                  <td className="nx-cell">Yes</td>
                  <td className="nx-cell">URL</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </section>
      <section className="nx-tile">
        <header className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">Basic Example with Nav</h2>
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
            <h2 className="nx-h2">Shrinking Example</h2>
          </div>
        </header>
        <div className="nx-tile-content">
          <NxP>
            In this example, there is another sidebar.
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
