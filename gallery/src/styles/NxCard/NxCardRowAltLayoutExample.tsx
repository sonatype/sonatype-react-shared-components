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
      <section className="nx-card" aria-label="card 1 in alternate layout">
        <header className="nx-card__header">
          <h3 className="nx-h3">Header</h3>
        </header>
        <div className="nx-card__content nx-card__content--2col">
          <div className="nx-card__call-out nx-card__call-out--text-only">
            42
          </div>
          <p className="nx-p">Text</p>
        </div>
        <footer className="nx-card__footer"><a href="#" className="nx-text-link">Link</a></footer>
      </section>
      <section className="nx-card" aria-label="card 2 in alternate layout">
        <header className="nx-card__header">
          <h3 className="nx-h3">Card header</h3>
        </header>
        <div className="nx-card__content nx-card__content--2col">
          <div className="nx-card__call-out">
            <NxFontAwesomeIcon icon={faChartLine} className="nx-icon--card-call-out" />
          </div>
          <p className="nx-p">Data point details</p>
        </div>
        <footer className="nx-card__footer"><a href="#" className="nx-text-link">Link</a></footer>
      </section>
      <section className="nx-card" aria-label="card 3 in alternate layout">
        <header className="nx-card__header">
          <h3 className="nx-h3">Card header</h3>
        </header>
        <div className="nx-card__content nx-card__content--2col">
          <div className="nx-card__call-out">
            <NxFontAwesomeIcon icon={faShapes} className="nx-icon--card-call-out-xl" />
          </div>
          <p className="nx-p">Large icon</p>
        </div>
        <footer className="nx-card__footer"><a href="#" className="nx-text-link">Link</a></footer>
      </section>
    </div>
  );
}
