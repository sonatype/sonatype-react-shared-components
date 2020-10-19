/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faShapes, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { NxFontAwesomeIcon, NxButton } from '@sonatype/react-shared-components';

export default function NxCardColumnLayoutExample() {
  return (
    <div className="nx-card-container nx-card-container--column">
      <section className="nx-card">
        <header className="nx-card__header">
          <h3 className="nx-h3">Header</h3>
        </header>
        <div className="nx-card__call-out">
          <span className="nx-card__call-out-text">42</span>
        </div>
        <div className="nx-card__content">
          Text
        </div>
        <footer className="nx-card__footer">
          <a href="#" className="nx-text-link">Link</a>
        </footer>
      </section>
      <section className="nx-card">
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
          <div className="nx-btn-bar">
            <NxButton variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
          </div>
        </footer>
      </section>
      <section className="nx-card">
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
          <div className="nx-btn-bar">
            <NxButton variant="icon-only"><NxFontAwesomeIcon icon={faTrash} /></NxButton>
            <NxButton variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
            <NxButton variant="icon-only"><NxFontAwesomeIcon icon={faTrash} /></NxButton>
          </div>
        </footer>
      </section>
      <section className="nx-card">
        <header className="nx-card__header">
          <h3 className="nx-h3">Card header</h3>
        </header>
        <div className="nx-card__call-out">
          <span className="nx-card__call-out-text">XX%</span>
        </div>
        <div className="nx-card__content">
          Descriptive text
        </div>
        <footer className="nx-card__footer">
          <a href="#" className="nx-text-link">Link</a>
        </footer>
      </section>
      <section className="nx-card">
        <header className="nx-card__header">
          <h3 className="nx-h3">Chiba advert hacker hotdog shoes voodoo god 3D-printed</h3>
        </header>
        <div className="nx-card__content">
          Marketing systemic math- hotdog saturation
          systemic
        </div>
        <footer className="nx-card__footer">
          <a href="#" className="nx-text-link">Artisanal denim</a>
        </footer>
      </section>
      <section className="nx-card">
        <header className="nx-card__header">
          <h3 className="nx-h3">Render-farm dolphin beef noodles</h3>
        </header>
        <div className="nx-card__call-out">
          <span className="nx-card__call-out-text">XXX%</span>
        </div>
        <div className="nx-card__content">
          City advert motion apophenia film skyscraper sentient beef
        </div>
      </section>
    </div>
  );
}
