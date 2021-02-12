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
        <section className="nx-card" aria-label="card 1 in row">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__call-out">
              42
            </div>
            <div className="nx-card__text">Card text</div>
          </div>
          <footer className="nx-card__footer">
            <a href="#" className="nx-text-link">Card link</a>
          </footer>
        </section>
        <section className="nx-card" aria-label="Card with column layout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Content in columns</h3>
          </header>
          <div className="nx-card__content nx-card__content--2-column">
            <div className="nx-card__call-out">
              100
            </div>
            <div className="nx-card__text">Data point details</div>
          </div>
          <footer className="nx-card__footer"><a href="#" className="nx-text-link">Link</a></footer>
        </section>
        <section className="nx-card" aria-label="Card with indicators">
          <header className="nx-card__header">
            <h3 className="nx-h3">Server status</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-indicator">
              <NxFontAwesomeIcon icon={faCircle} className="gallery--indicator gallery-icon--indicator-on" />
              <span>Server on</span>
            </div>
            <div className="nx-indicator">
              <NxFontAwesomeIcon icon={faCircle} className="gallery--indicator gallery-icon--indicator-off" />
              <span>Server off</span>
            </div>
          </div>
        </section>
        <section className="nx-card" aria-label="Icon in callout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Icon in callout</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__call-out">
              <NxFontAwesomeIcon icon={faShapes} className="nx-icon--card-call-out" />
            </div>
            <div className="nx-card__text">Data point details</div>
          </div>
          <footer className="nx-card__footer">
            <a href="#" className="nx-text-link">Link</a>
          </footer>
        </section>
      </div>
      <div className="nx-card-container nx-card-container--row">
        <section className="nx-card" aria-label="Another card with icon in callout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__call-out">
              <NxFontAwesomeIcon icon={faShapes} className="nx-icon--card-call-out" />
            </div>
            <div className="nx-card__text">Data point details</div>
          </div>
          <footer className="nx-card__footer">
            <a href="#" className="nx-text-link">Link</a>
          </footer>
        </section>
        <section className="nx-card" aria-label="card 2 in row">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-status-indicator">
              <NxFontAwesomeIcon icon={faCircle} className="gallery--indicator gallery-icon--indicator-on" />
              <span>Server on</span>
            </div>
            <div className="nx-status-indicator">
              <NxFontAwesomeIcon icon={faCircle} className="gallery--indicator gallery-icon--indicator-off" />
              <span>Server off</span>
            </div>
          </div>
          <footer className="nx-card__footer">
            <a href="#" className="nx-text-link">Link</a>
          </footer>
        </section>
        <section className="nx-card" aria-label="card 2 in row">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__content nx-card__content--2-column">
            <div className="nx-card__call-out">
              <NxFontAwesomeIcon icon={faChartLine} className="nx-icon--card-call-out" />
            </div>
            <div className="nx-card__text">Data point details</div>
          </div>
          <footer className="nx-card__footer"><a href="#" className="nx-text-link">Link</a></footer>
        </section>
      </div>
      <div className="nx-card-container nx-card-container--row">
        <section className="nx-card" aria-label="card 3 in row">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__call-out">
              <NxFontAwesomeIcon icon={faShapes} className="nx-icon--card-call-out-xl" />
            </div>
            <div className="nx-card__text">Large icon</div>
          </div>
          <footer className="nx-card__footer">
            <a href="#" className="nx-text-link">Link</a>
          </footer>
        </section>
        <section className="nx-card" aria-label="card 4 in row">
          <header className="nx-card__header">
            <h3 className="nx-h3 nx-h3--card-header">Card header</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__call-out">
              XX%
            </div>
            <div className="nx-card__text">Descriptive text</div>
          </div>
          <footer className="nx-card__footer">
            <a href="#" className="nx-text-link">Link</a>
          </footer>
        </section>
        <section className="nx-card" aria-label="card 5 in row">
          <header className="nx-card__header">
            <h3 className="nx-h3 nx-h3--card-header">Chiba advert hacker hotdog shoes voodoo god 3D-printed</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__call-out">
              <NxFontAwesomeIcon icon={faChartLine} className="nx-icon--card-call-out" />
            </div>
            <div className="nx-card__text">
              Marketing systemic math- hotdog saturation point nodal point footage disposable singularity order-flow
              systemic
            </div>
          </div>
          <footer className="nx-card__footer">
            <div className="nx-btn-bar">
              <NxButton variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
              <NxButton variant="icon-only"><NxFontAwesomeIcon icon={faTrash} /></NxButton>
            </div>
          </footer>
        </section>
        <section className="nx-card" aria-label="card 6 in row">
          <header className="nx-card__header">
            <h3 className="nx-h3 nx-h3--card-header">Render-farm dolphin beef noodles</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__call-out">
              XXX%
            </div>
            <div className="nx-card__text">
              City advert motion apophenia film skyscraper sentient beef noodles industrial grade motion tanto BASE jump
              girl realism
            </div>
          </div>
          <footer className="nx-card__footer">
            <a href="#" className="nx-text-link">Film sprawl wristwatch math-engine</a>
          </footer>
        </section>
      </div>

      <div className="nx-card-container nx-card-container--row">
        <section className="nx-card" aria-label="card 7 in row">
          <header className="nx-card__header">
            <h3 className="nx-h3">Header</h3>
          </header>
          <div className="nx-card__call-out">
            42
          </div>
        </section>
      </div>
      <div className="nx-card-container nx-card-container--row">
        <section className="nx-card" aria-label="card 8 in row">
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
        <section className="nx-card nx-card--align-left gallery-card--66wide" aria-label="card 9 in row">
          <header className="nx-card__header">
            <h3 className="nx-h3">A wide card with left aligned content</h3>
          </header>
          <div className="nx-card__content nx-card__content--2-column">
            <div className="nx-card__call-out">
              <NxFontAwesomeIcon icon={faChartLine} className="nx-icon--card-call-out" />
            </div>
            <div className="nx-card__text">
              Lots of content to force the card to a wider size sentient noodles sprawl tower corrupted cartel
              carbon decay sentient post- singularity
            </div>
          </div>
        </section>
        <section className="nx-card" aria-label="card 1 in row">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__content nx-card__content--2-column">
            <div className="nx-card__call-out">
              <NxFontAwesomeIcon icon={faShapes} className="nx-icon--card-call-out" />
            </div>
            <div className="nx-card__text">
              Sentient post-singularity
            </div>
          </div>
        </section>
      </div>
      <div className="nx-card-container nx-card-container--row">
        <section className="nx-card gallery-card--49wide" aria-label="card 10 in row">
          <header className="nx-card__header">
            <h3 className="nx-h3 nx-h3--card-header">A card that's ~50% of available width</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__text">
              Lots of content to force the card to a wider size alcohol realism tower cardboard network sunglasses
              Tokyo fetishism claymore mine bridge table faded. pistol tiger-team otaku sprawl tower corrupted cartel
              carbon decay sentient post- singularity.
            </div>
          </div>
        </section>
        <section className="nx-card gallery-card--49wide" aria-label="card 10 in row">
          <header className="nx-card__header">
            <h3 className="nx-h3 nx-h3--card-header">A card that's ~50% of available width</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__text">
              Lots of content to force the card to a wider size alcohol realism tower cardboard network sunglasses
              Tokyo fetishism claymore mine bridge table faded. pistol tiger-team otaku sprawl tower corrupted cartel
              carbon decay sentient post- singularity.
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
