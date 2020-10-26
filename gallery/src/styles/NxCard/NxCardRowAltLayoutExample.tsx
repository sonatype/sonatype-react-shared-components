/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faShapes, faChartLine } from '@fortawesome/free-solid-svg-icons';

import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';

export default function NxCardRowAltLayoutExample() {
  return (
    <div className="nx-card-container nx-card-container--row">
      <section className="nx-card">
        <header className="nx-card__header">
          <h3 className="nx-h3">Header</h3>
        </header>
        <div className="nx-card__content-container">
          <div className="nx-card__call-out nx-card__call-out--text-only">
            42
          </div>
          <div className="nx-card__content">
            Text
          </div>
        </div>
        <footer className="nx-card__footer"><a href="#" className="nx-text-link">Link</a></footer>
      </section>
      <section className="nx-card">
        <header className="nx-card__header">
          <h3 className="nx-h3">Card header</h3>
        </header>
        <div className="nx-card__content-container">
          <div className="nx-card__call-out">
            <NxFontAwesomeIcon icon={faChartLine} className="nx-icon--card-call-out" />
          </div>
          <div className="nx-card__content">
            Data point details
          </div>
        </div>
        <footer className="nx-card__footer"><a href="#" className="nx-text-link">Link</a></footer>
      </section>
      <section className="nx-card">
        <header className="nx-card__header">
          <h3 className="nx-h3">Card header</h3>
        </header>
        <div className="nx-card__content-container">
          <div className="nx-card__call-out">
            <NxFontAwesomeIcon icon={faShapes} className="nx-icon--card-call-out-xl" />
          </div>
          <div className="nx-card__content">
            Large icon
          </div>
        </div>
        <footer className="nx-card__footer"><a href="#" className="nx-text-link">Link</a></footer>
      </section>
    </div>
  );
}
