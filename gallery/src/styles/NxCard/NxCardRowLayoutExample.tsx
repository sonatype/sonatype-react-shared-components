/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faShapes, faChartLine, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { NxFontAwesomeIcon, NxButton } from '@sonatype/react-shared-components';

export default function NxCardRowLayoutExample() {
  return (
    <>
      <div className="nx-card-container nx-card-container--row">
        <section className="nx-card" aria-label="Card 1 in Row Layout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Header</h3>
          </header>
          <div className="nx-card__call-out nx-card__call-out--text-only">
            42
          </div>
          <div className="nx-card__content">
            Text
          </div>
          <footer className="nx-card__footer">
            <a href="#" className="nx-text-link">Link</a>
          </footer>
        </section>
        <section className="nx-card" aria-label="Card 2 in Row Layout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__call-out">
            <NxFontAwesomeIcon icon={faShapes} className="nx-icon--card-call-out" />
          </div>
          <div className="nx-card__content">
            Data point details
          </div>
          <footer className="nx-card__footer">
            <a href="#" className="nx-text-link">Link</a>
          </footer>
        </section>
        <section className="nx-card" aria-label="Card 3 in Row Layout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__call-out">
            <NxFontAwesomeIcon icon={faShapes} className="nx-icon--card-call-out-xl" />
          </div>
          <div className="nx-card__content">
            Large icon
          </div>
          <footer className="nx-card__footer">
            <a href="#" className="nx-text-link">Link</a>
          </footer>
        </section>
        <section className="nx-card" aria-label="Card 4 in Row Layout">
          <header className="nx-card__header">
            <h3 className="nx-h3 nx-h3--card-header">Card header</h3>
          </header>
          <div className="nx-card__call-out nx-card__call-out--text-only">
            XX%
          </div>
          <div className="nx-card__content">
            Descriptive text
          </div>
          <footer className="nx-card__footer">
            <a href="#" className="nx-text-link">Link</a>
          </footer>
        </section>
        <section className="nx-card" aria-label="Card 5 in Row Layout">
          <header className="nx-card__header">
            <h3 className="nx-h3 nx-h3--card-header">Chiba advert hacker hotdog shoes voodoo god 3D-printed</h3>
          </header>
          <div className="nx-card__call-out">
            <NxFontAwesomeIcon icon={faChartLine} className="nx-icon--card-call-out" />
          </div>
          <div className="nx-card__content">
            Marketing systemic math- hotdog saturation point nodal point footage disposable singularity order-flow
            systemic
          </div>
          <footer className="nx-card__footer">
            <div className="nx-btn-bar">
              <NxButton variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
              <NxButton variant="icon-only"><NxFontAwesomeIcon icon={faTrash} /></NxButton>
            </div>
          </footer>
        </section>
        <section className="nx-card" aria-label="Card 6 in Row Layout">
          <header className="nx-card__header">
            <h3 className="nx-h3 nx-h3--card-header">Render-farm dolphin beef noodles</h3>
          </header>
          <div className="nx-card__call-out nx-card__call-out--text-only">
            XXX%
          </div>
          <div className="nx-card__content">
            City advert motion apophenia film skyscraper sentient beef noodles industrial grade motion tanto BASE jump
            girl realism
          </div>
          <footer className="nx-card__footer">
            <a href="#" className="nx-text-link">Film sprawl wristwatch math-engine</a>
          </footer>
        </section>
      </div>

      <div className="nx-card-container nx-card-container--row">
        <section className="nx-card" aria-label="Card 7 in Row Layout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Header</h3>
          </header>
          <div className="nx-card__call-out nx-card__call-out--text-only">
            42
          </div>
        </section>
      </div>
      <div className="nx-card-container nx-card-container--row">
        <section className="nx-card" aria-label="Card 8 in Row Layout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__call-out">
            <NxFontAwesomeIcon icon={faShapes} className="nx-icon--card-call-out" />
          </div>
          <footer className="nx-card__footer">
            <a href="#" className="nx-text-link">Link</a>
          </footer>
        </section>
      </div>
      <div className="nx-card-container nx-card-container--row">
        <section className="nx-card" aria-label="Card 9 in Row Layout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__call-out">
            <NxFontAwesomeIcon icon={faShapes} className="nx-icon--card-call-out" />
          </div>
          <div className="nx-card__content">
            Sentient noodles
          </div>
        </section>
      </div>
      <div className="nx-card-container nx-card-container--row">
        <section className="nx-card" aria-label="Card 10 in Row Layout">
          <header className="nx-card__header">
            <h3 className="nx-h3 nx-h3--card-header">3D-printed voodoo</h3>
          </header>
          <div className="nx-card__content">
            Hotdog saturation point
          </div>
        </section>
      </div>
    </>
  );
}
