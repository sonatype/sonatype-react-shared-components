/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import RawHtmlExample from '../../RawHtmlExample';
import CodeExample from '../../CodeExample';
import { NxButton, NxModal } from '@sonatype/react-shared-components';

const ViewportOrientedScrollableSizingExample =
      require('!!raw-loader!./ViewportOrientedScrollableSizingExample.html').default,
    ViewportOrientedScrollableSizingStyles =
      require('!!raw-loader!./ViewportOrientedScrollableSizingExample.scss').default;

import './ViewportOrientedScrollableSizingExample.scss';

export default function ViewportOrientedScrollableSizingPage() {
  const [htmlSnippetModalOpen, setHtmlSnippetModalOpen] = useState(false),
      [scssSnippetModalOpen, setScssSnippetModalOpen] = useState(false),
      openHtmlSnippetModal = () => setHtmlSnippetModalOpen(true),
      openScssSnippetModal = () => setScssSnippetModalOpen(true),
      closeHtmlSnippetModal = () => setHtmlSnippetModalOpen(false),
      closeScssSnippetModal = () => setScssSnippetModalOpen(false);

  return (
    <>
      <RawHtmlExample html={ViewportOrientedScrollableSizingExample} />
      <section className="nx-tile">
        <header className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">Code Snippets</h2>
          </div>
        </header>
        <div className="nx-tile-content">
          <p className="nx-p">
            In order to keep the page content small enough to demonstrate the viewport-oriented sizing, code snippets
            for this page avialable in modal windows activated by clicking the buttons below.
          </p>
          <div className="nx-btn-bar">
            <NxButton onClick={openHtmlSnippetModal}>HTML Snippet</NxButton>
            <NxButton onClick={openScssSnippetModal}>SCSS Snippet</NxButton>
          </div>
        </div>
      </section>
      { htmlSnippetModalOpen &&
        <NxModal onClose={closeHtmlSnippetModal}>
          <header className="nx-modal-header">
            <h2 className="nx-h2">Code Example HTML</h2>
          </header>
          <div className="nx-modal-content">
            <CodeExample content={ViewportOrientedScrollableSizingExample} />
          </div>
          <footer className="nx-footer">
            <div className="nx-btn-bar">
              <NxButton onClick={closeHtmlSnippetModal}>Close</NxButton>
            </div>
          </footer>
        </NxModal>
      }
      { scssSnippetModalOpen &&
        <NxModal onClose={closeScssSnippetModal}>
          <header className="nx-modal-header">
            <h2 className="nx-h2">Code Example ScSS</h2>
          </header>
          <div className="nx-modal-content">
            <CodeExample content={ViewportOrientedScrollableSizingStyles} language="scss" />
          </div>
          <footer className="nx-footer">
            <div className="nx-btn-bar">
              <NxButton onClick={closeScssSnippetModal}>Close</NxButton>
            </div>
          </footer>
        </NxModal>
      }
    </>
  );
}
