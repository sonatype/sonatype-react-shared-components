/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faShapes, faChartLine } from '@fortawesome/free-solid-svg-icons';

import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';

export default function NxCardVerticalExample() {
  return (
    <>
      <div className="nx-card-container nx-card-container--row">
        <div className="nx-card nx-card--vertical">
          <header className="nx-card-header">
            <h3 className="nx-h3">Header</h3>
          </header>
          <div className="nx-card__call-out">
            <span className="nx-call__call-out-text">42</span>
          </div>
          <div className="nx-card__text">
            Text
          </div>
          <footer className="nx-card-footer">
            <a href="#" className="nx-text-link">Link</a>
          </footer>
        </div>
        <div className="nx-card nx-card--vertical">
          <header className="nx-card-header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__call-out">
            <NxFontAwesomeIcon icon={faShapes} />
          </div>
          <div className="nx-card__text">
            Data point details
          </div>
          <footer className="nx-card-footer">
            <a href="#" className="nx-text-link">Link</a>
          </footer>
        </div>
        <div className="nx-card nx-card--vertical">
          <header className="nx-card-header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__call-out">
            <NxFontAwesomeIcon icon={faShapes} className="nx-icon--large" />
          </div>
          <div className="nx-card__text">
            Large icon
          </div>
          <footer className="nx-card-footer">
            <a href="#" className="nx-text-link">Link</a>
          </footer>
        </div>
      </div>
      <div className="nx-card-container nx-card-container--row">
        <div className="nx-card nx-card--vertical">
          <header className="nx-card-header">
            <h3 className="nx-h3 nx-h3--card-header">Card header</h3>
          </header>
          <div className="nx-card__call-out">
            <span className="nx-call__call-out-text">XX%</span>
          </div>
          <div className="nx-card__text">
            Descriptive text
          </div>
          <footer className="nx-card-footer">
            <a href="#" className="nx-text-link">Link</a>
          </footer>
        </div>
        <div className="nx-card nx-card--vertical">
          <header className="nx-card-header">
            <h3 className="nx-h3 nx-h3--card-header">Chiba advert hacker hotdog shoes voodoo god 3D-printed</h3>
          </header>
          <div className="nx-card__call-out">
            <NxFontAwesomeIcon icon={faShapes}/>
          </div>
          <div className="nx-card__text">
            Marketing systemic math- hotdog saturation point nodal point footage disposable singularity order-flow
            systemic
          </div>
          <footer className="nx-card-footer">
            <a href="#" className="nx-text-link">Artisanal denim</a>
          </footer>
        </div>
        <div className="nx-card nx-card--vertical">
          <header className="nx-card-header">
            <h3 className="nx-h3 nx-h3--card-header">Render-farm dolphin beef noodles</h3>
          </header>
          <div className="nx-card__call-out">
            <span className="nx-call__call-out-text">XXX%</span>
          </div>
          <div className="nx-card__text">
            City advert motion apophenia film skyscraper sentient beef noodles industrial grade motion tanto BASE jump
            girl realism
          </div>
          <footer className="nx-card-footer">
            <a href="#" className="nx-text-link">Film sprawl wristwatch math-engine</a>
          </footer>
        </div>
      </div>
      <div className="nx-card-container nx-card-container--row">
        <div className="nx-card nx-card--vertical">
          <header className="nx-card-header">
            <h3 className="nx-h3 nx-h3--card-header">Weathered plastic saturation point realism</h3>
          </header>
          <div className="nx-card__call-out">
            <span className="nx-call__call-out-text">XXXX%</span>
          </div>
          <div className="nx-card__text">
            Construct otaku monofilament skyscraper
          </div>
          <footer className="nx-card-footer">
            <a href="#" className="nx-text-link">Jabberwocky</a>
          </footer>
        </div>
        <div className="nx-card nx-card--vertical">
          <header className="nx-card-header">
            <h3 className="nx-h3 nx-h3--card-header">Augmented reality grenade</h3>
          </header>
          <div className="nx-card__call-out">
            <NxFontAwesomeIcon icon={faShapes} className="nx-icon--large" />
          </div>
          <div className="nx-card__text">
            Neural sign shrine corrupted decay fluidity paranoid nodality long-chain hydrocarbons physical shoes 8-bit
            singularity sensory smart-boat Legba smart-sunglasses spook city
          </div>
          <footer className="nx-card-footer">
            <a href="#" className="nx-text-link">uplink numinous pen</a>
          </footer>
        </div>
        <div className="nx-card nx-card--vertical">
          <header className="nx-card-header">
            <h3 className="nx-h3 nx-h3--card-header">
              Fluidity futurity order-flow city neon pre-DIY wristwatch-space bicycle digital geodesic realism sensory
              dome otaku rain-ware lights
            </h3>
          </header>
          <div className="nx-card__call-out">
            <NxFontAwesomeIcon icon={faChartLine} className="nx-icon--large" />
          </div>
          <div className="nx-card__text">
            BASE jump boy corrupted nano-skyscraper disposable sub-orbital marketing apophenia sign military-grade
            saturation point drugs
          </div>
          <footer className="nx-card-footer">
            <a href="#" className="nx-text-link">digital military-grade j-pop-ware</a>
          </footer>
        </div>
      </div>
    </>
  );
}
