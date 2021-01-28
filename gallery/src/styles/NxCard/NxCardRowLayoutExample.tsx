/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faShapes, faChartLine, faEdit, faTrash, faCircle } from '@fortawesome/free-solid-svg-icons';

import { NxFontAwesomeIcon, NxButton } from '@sonatype/react-shared-components';

export default function NxCardRowLayoutExample() {
  return (
    <>
      <div className="nx-card-container nx-card-container--row">
        <section className="nx-card" aria-label="card 1 in row layout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Header</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__call-out nx-card__call-out--text-only">
              42
            </div>
            <p className="nx-p">Text</p>
          </div>
          <footer className="nx-card__footer">
            <a href="#" className="nx-text-link">Link</a>
          </footer>
        </section>
        <section className="nx-card" aria-label="card 2 in column layout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-indicator">
              <NxFontAwesomeIcon icon={faCircle} className="nx-icon--indicator nx-icon--indicator-on" />
              <span>Server on</span>
            </div>
            <div className="nx-indicator">
              <NxFontAwesomeIcon icon={faCircle} className="nx-icon--indicator nx-icon--indicator-off" />
              <span>Server off</span>
            </div>
          </div>
        </section>
        <section className="nx-card" aria-label="card 2 in row layout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__call-out">
              <NxFontAwesomeIcon icon={faShapes} className="nx-icon--card-call-out" />
            </div>
            <p className="nx-p">Data point details</p>
          </div>
          <footer className="nx-card__footer">
            <a href="#" className="nx-text-link">Link</a>
          </footer>
        </section>
      </div>
      <div className="nx-card-container nx-card-container--row">
        <section className="nx-card" aria-label="card 2 in row layout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__call-out">
              <NxFontAwesomeIcon icon={faShapes} className="nx-icon--card-call-out" />
            </div>
            <p className="nx-p">Data point details</p>
          </div>
          <footer className="nx-card__footer">
            <a href="#" className="nx-text-link">Link</a>
          </footer>
        </section>
        <section className="nx-card" aria-label="card 2 in column layout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__content nx-card__content--margins">
            <div className="nx-status-indicator">
              <NxFontAwesomeIcon icon={faCircle} className="nx-icon--indicator nx-icon--indicator-on" />
              <span>Server on</span>
            </div>
            <div className="nx-status-indicator">
              <NxFontAwesomeIcon icon={faCircle} className="nx-icon--indicator nx-icon--indicator-off" />
              <span>Server off</span>
            </div>
          </div>
        </section>
        <section className="nx-card" aria-label="card 2 in column layout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__content nx-card__content--space-around">
            <div className="nx-status-indicator">
              <NxFontAwesomeIcon icon={faCircle} className="nx-icon--indicator nx-icon--indicator-on" />
              <span>Server on</span>
            </div>
            <div className="nx-status-indicator">
              <NxFontAwesomeIcon icon={faCircle} className="nx-icon--indicator nx-icon--indicator-off" />
              <span>Server off</span>
            </div>
          </div>
        </section>
        <section className="nx-card" aria-label="card 2 in column layout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__content nx-card__content--space-between">
            <div className="nx-status-indicator">
              <NxFontAwesomeIcon icon={faCircle} className="nx-icon--indicator nx-icon--indicator-on" /><span>Server on</span>
            </div>
            <div className="nx-status-indicator">
              <NxFontAwesomeIcon icon={faCircle} className="nx-icon--indicator nx-icon--indicator-off" /><span>Server off</span>
            </div>
          </div>
        </section>
      </div>
      <div className="nx-card-container nx-card-container--row">
        <section className="nx-card" aria-label="card 3 in row layout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__call-out">
              <NxFontAwesomeIcon icon={faShapes} className="nx-icon--card-call-out-xl" />
            </div>
            Large icon
          </div>
          <footer className="nx-card__footer">
            <a href="#" className="nx-text-link">Link</a>
          </footer>
        </section>
        <section className="nx-card" aria-label="card 4 in row layout">
          <header className="nx-card__header">
            <h3 className="nx-h3 nx-h3--card-header">Card header</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__call-out nx-card__call-out--text-only">
              XX%
            </div>
            Descriptive text
          </div>
          <footer className="nx-card__footer">
            <a href="#" className="nx-text-link">Link</a>
          </footer>
        </section>
        <section className="nx-card" aria-label="card 5 in row layout">
          <header className="nx-card__header">
            <h3 className="nx-h3 nx-h3--card-header">Chiba advert hacker hotdog shoes voodoo god 3D-printed</h3>
          </header>
          <div className="nx-card__content">
          <div className="nx-card__call-out">
            <NxFontAwesomeIcon icon={faChartLine} className="nx-icon--card-call-out" />
          </div>
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
        <section className="nx-card" aria-label="card 6 in row layout">
          <header className="nx-card__header">
            <h3 className="nx-h3 nx-h3--card-header">Render-farm dolphin beef noodles</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__call-out nx-card__call-out--text-only">
              XXX%
            </div>
            City advert motion apophenia film skyscraper sentient beef noodles industrial grade motion tanto BASE jump
            girl realism
          </div>
          <footer className="nx-card__footer">
            <a href="#" className="nx-text-link">Film sprawl wristwatch math-engine</a>
          </footer>
        </section>
      </div>

      <div className="nx-card-container nx-card-container--row">
        <section className="nx-card" aria-label="card 7 in row layout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Header</h3>
          </header>
          <div className="nx-card__call-out nx-card__call-out--text-only">
            42
          </div>
        </section>
      </div>
      <div className="nx-card-container nx-card-container--row">
        <section className="nx-card" aria-label="card 8 in row layout">
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
        <section className="nx-card" aria-label="card 9 in row layout">
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
        <section className="nx-card" aria-label="card 10 in row layout">
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
