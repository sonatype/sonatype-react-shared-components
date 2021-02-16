/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faShapes, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { NxFontAwesomeIcon, NxButton } from '@sonatype/react-shared-components';
const chart = require('./chart.png');

export default function NxCardColumnLayoutExample() {
  return (
    <div className="nx-card-container nx-card-container--column">
      <section className="nx-card nx-card--horizontal" aria-label="card 1 in column layout">
        <div className="nx-card__call-out">
          42
        </div>
        <div className="nx-card__content">
          <header className="nx-card__header">
            <h3 className="nx-h3">Header</h3>
          </header>
          <div className="nx-card__text">Text</div>
        </div>
        <div className="nx-card__actions">
          <a href="#" className="nx-text-link">Link</a>
        </div>
      </section>
      <section className="nx-card nx-card--horizontal" aria-label="card 2 in column layout">
        <div className="nx-card__call-out">
          <NxFontAwesomeIcon icon={faShapes} className="nx-card__call-out-icon" />
        </div>
        <div className="nx-card__content">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__text">Data point details</div>
        </div>
        <div className="nx-card__actions">
          <div className="nx-btn-bar">
            <NxButton variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
          </div>
        </div>
      </section>
      <section className="nx-card nx-card--horizontal" aria-label="card 3 in column layout">
        <div className="nx-card__call-out">
          <NxFontAwesomeIcon icon={faShapes} className="nx-card__call-out-icon--xl" />
        </div>
        <div className="nx-card__content">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__text">Large icon</div>
        </div>
        <div className="nx-card__actions">
          <div className="nx-btn-bar">
            <NxButton variant="icon-only"><NxFontAwesomeIcon icon={faTrash} /></NxButton>
            <NxButton variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
            <NxButton variant="icon-only"><NxFontAwesomeIcon icon={faTrash} /></NxButton>
          </div>
        </div>
      </section>
      <section className="nx-card nx-card--horizontal" aria-label="card 4 in column layout">
        <div className="nx-card__call-out">
          XX%
        </div>
        <div className="nx-card__content">
          <div className="nx-card__text">Descriptive text</div>
        </div>
        <div className="nx-card__actions">
          <a href="#" className="nx-text-link">Link</a>
        </div>
      </section>
      <section className="nx-card nx-card--horizontal" aria-label="card 5 in column layout">
        <div className="nx-card__content">
          <header className="nx-card__header">
            <h3 className="nx-h3">Chiba advert hacker hotdog shoes voodoo god 3D-printed</h3>
          </header>
          <img src={chart}/>
        </div>
      </section>
      <section className="nx-card nx-card--horizontal" aria-label="card 6 in column layout">
        <div className="nx-card__call-out">
          XXX%
        </div>
        <div className="nx-card__content">
          <header className="nx-card__header">
            <h3 className="nx-h3">Render-farm dolphin beef noodles</h3>
          </header>
          <div className="nx-card__text">City advert motion apophenia film skyscraper sentient beef</div>
        </div>
      </section>
    </div>
  );
}
