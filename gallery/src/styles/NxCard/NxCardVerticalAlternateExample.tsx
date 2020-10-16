/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faShapes, faChartLine } from '@fortawesome/free-solid-svg-icons';

import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';

export default function NxCardVerticalAltExample() {
  return (
    <div className="nx-card-container nx-card-container--row">
      <section className="nx-card">
        <header className="nx-card__header">
          <h3 className="nx-h3">Header</h3>
        </header>
        <div className="nx-card__content-container">
          <div className="nx-card__call-out">
            <span className="nx-card__call-out-text">42</span>
          </div>
          <div className="nx-card__content">
            Text
          </div>
        </div>
        <footer className="nx-card__footer"><a href="nx-text-link">Link</a></footer>
      </section>
      <section className="nx-card">
        <header className="nx-card__header">
          <h3 className="nx-h3">Card header</h3>
        </header>
        <div className="nx-card__content-container">
          <div className="nx-card__call-out">
            <NxFontAwesomeIcon icon={faChartLine} />
          </div>
          <div className="nx-card__content">
            Data point details
          </div>
        </div>
        <footer className="nx-card__footer"><a href="nx-text-link">Link</a></footer>
      </section>
      <section className="nx-card">
        <header className="nx-card__header">
          <h3 className="nx-h3">Card header</h3>
        </header>
        <div className="nx-card__content-container">
          <div className="nx-card__call-out">
            <NxFontAwesomeIcon icon={faShapes} className="nx-icon--large" />
          </div>
          <div className="nx-card__content">
            Large icon
          </div>
        </div>
        <footer className="nx-card__footer"><a href="nx-text-link">Link</a></footer>
      </section>
    </div>
  );
}
