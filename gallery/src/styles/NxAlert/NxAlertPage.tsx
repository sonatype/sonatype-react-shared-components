/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxAlertInfoExample from './NxAlertInfoExample';
import NxAlertSuccessExample from './NxAlertSuccessExample';
import NxAlertWarningExample from './NxAlertWarningExample';
import NxAlertErrorExample from './NxAlertErrorExample';

const nxAlertInfoCode = require('!!raw-loader!./NxAlertInfoExample').default,
    nxAlertSuccessCode = require('!!raw-loader!./NxAlertSuccessExample').default,
    nxAlertWarningCode = require('!!raw-loader!./NxAlertWarningExample').default,
    nxAlertErrorCode = require('!!raw-loader!./NxAlertErrorExample').default;

const NxAlertPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Standard name spaced alert styles. Note that these examples are shown in react as each style includes
        specific icons. When working in React, <code className="nx-code">NxFontAwesomeIcon</code> should be used
        as shown to get these icons (or preferably the <code className="nx-code">NxAlert</code> React component and
        its variations should be used). When not working in react, check the FontAwesome 5 documentation for alternative
        ways to include the icons. Alerts should generally include Close buttons or another way to dismiss themselves.
        In this example standard Close button styling is provided by <code className="nx-code">NxCloseButton</code>.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Information alert"
                        liveExample={NxAlertInfoExample}
                        codeExamples={nxAlertInfoCode}>
      An <code className="nx-code">nx-alert</code> demonstrating information styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Success alert"
                        liveExample={NxAlertSuccessExample}
                        codeExamples={nxAlertSuccessCode}>
      An <code className="nx-code">nx-alert</code> demonstrating success styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Warning alert"
                        liveExample={NxAlertWarningExample}
                        codeExamples={nxAlertWarningCode}>
      An <code className="nx-code">nx-alert</code> demonstrating warning styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Error alert"
                        liveExample={NxAlertErrorExample}
                        codeExamples={nxAlertErrorCode}>
      An <code className="nx-code">nx-alert</code> demonstrating error styles.
    </GalleryExampleTile>

    <section className="nx-tile">
      <header className="nx-tile-header">
        <div className="nx-tile-header__title">
          <h2 className="nx-h2">Alert at the Page level</h2>
        </div>
      </header>
      <div className="nx-tile-content">
        <p className="nx-p">
          It is frequently the case that an alert should be conditionally displayed as the entirety of the page
          contents – that is, that a page which would typically include
          an <code className="nx-code">.nx-page-main</code> and perhaps
          an <code className="nx-code">.nx-page-sidebar</code> should instead include only an error alert in the
          event that the data for the page fails to load, or the user does not have permission to access that page,
          or some similar error condition. The RSC styles have specific support for this case:
          an <code className="nx-code">.nx-alert</code> that is the only child of
          the <code className="nx-code">.nx-page-content</code> element will correctly center itself on the page.
          To view this in action, click the link below.
        </p>
        <p className="nx-p">
          <a className="nx-text-link" href="#/PageLevelErrorExample">
            Click here to navigate to the live example.
          </a>
        </p>
        <p className="nx-p">
          In terms of how an application would integrate such an alert, most typically
          an <code className="nx-code">NxLoadWrapper</code> would be used which wraps
          the <code className="nx-code">.nx-page-main</code> and
          (optional) <code className="nx-code">.nx-page-sidebar</code> elements.
        </p>
      </div>
    </section>
  </>;

export default NxAlertPage;
