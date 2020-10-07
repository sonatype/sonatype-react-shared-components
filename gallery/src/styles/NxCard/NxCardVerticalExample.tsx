/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faShapes } from '@fortawesome/free-solid-svg-icons';

import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';

export default function NxCardVerticalExample() {
  return (
    <>
      <div className="nx-card-container nx-card-container--row">
        <div className="nx-card">
          <header className="nx-card-header">
            <h3 className="nx-h3">Header</h3>
          </header>
          <div className="nx-card-content">
            <div className="nx-card__call-out">
              <span className="nx-call__call-out-text">42</span>
            </div>
            <div className="nx-card__text">
              Text
            </div>
          </div>
          <footer className="nx-card-footer"><a href="nx-link">Link</a></footer>
        </div>
        <div className="nx-card">
          <header className="nx-card-header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card-content">
            <div className="nx-card__call-out">
              <NxFontAwesomeIcon icon={faShapes}/>
            </div>
            <div className="nx-card__text">
              Data point details
            </div>
          </div>
          <footer className="nx-card-footer"><a href="nx-link">Link</a></footer>
        </div>
        <div className="nx-card">
          <header className="nx-card-header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card-content">
            <div className="nx-card__call-out">
              <span className="nx-call__call-out-text">XX%</span>
            </div>
            <div className="nx-card__text">
              Descriptive text
            </div>
          </div>
          <footer className="nx-card-footer"><a href="nx-link">Link</a></footer>
        </div>
      </div>
      <div className="nx-card-container nx-card-container--row">
      <div className="nx-card">
          <header className="nx-card-header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card-content">
            <div className="nx-card__call-out">
              <span className="nx-call__call-out-text">XXX%</span>
            </div>
            <div className="nx-card__text">
              Descriptive text
            </div>
          </div>
          <footer className="nx-card-footer"><a href="nx-link">Link</a></footer>
        </div>
        <div className="nx-card">
          <header className="nx-card-header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card-content">
            <div className="nx-card__call-out">
              <span className="nx-call__call-out-text">XXXX%</span>
            </div>
            <div className="nx-card__text">
              Descriptive text
            </div>
          </div>
          <footer className="nx-card-footer"><a href="nx-link">Link</a></footer>
        </div>
        <div className="nx-card">
          <header className="nx-card-header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card-content">
            <div className="nx-card__call-out">
              <span className="nx-call__call-out-text">XXXXX%</span>
            </div>
            <div className="nx-card__text">
              Descriptive text
            </div>
          </div>
          <footer className="nx-card-footer"><a href="nx-link">Link</a></footer>
        </div>
      </div>
    </>
  );
}
