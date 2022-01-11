/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faShapes, faChartLine } from '@fortawesome/free-solid-svg-icons';

import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';

export default function NxCardRowLayoutExample() {
  return (
    <>
      <div className="nx-card-container">
        <section className="nx-card" aria-label="Basic card">
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
            <a href="#/" className="nx-text-link">Card link</a>
          </footer>
        </section>
        <section className="nx-card" aria-label="Card with column layout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Content in columns</h3>
          </header>
          <div className="nx-card__content nx-card__content--columns">
            <div className="nx-card__call-out">
              100
            </div>
            <div className="nx-card__text">Data point details</div>
          </div>
          <footer className="nx-card__footer"><a href="#/" className="nx-text-link">Link</a></footer>
        </section>
        <section className="nx-card" aria-label="Server card">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-status-indicator">
              <span>Server one</span>
            </div>
            <div className="nx-status-indicator">
              <span>Server two</span>
            </div>
          </div>
          <footer className="nx-card__footer">
            <a href="#/" className="nx-text-link">Link</a>
          </footer>
        </section>
        <section className="nx-card" aria-label="Icon in callout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Icon in callout</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__call-out">
              <NxFontAwesomeIcon icon={faShapes} className="nx-card__call-out-icon" />
            </div>
            <div className="nx-card__text">Data point details</div>
          </div>
          <footer className="nx-card__footer">
            <a href="#/" className="nx-text-link">Link</a>
          </footer>
        </section>
      </div>
      <div className="nx-card-container">
        <section className="nx-card" aria-label="Another card with icon in callout">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__call-out">
              <NxFontAwesomeIcon icon={faShapes} className="nx-card__call-out-icon" />
            </div>
            <div className="nx-card__text">Data point details</div>
          </div>
          <footer className="nx-card__footer">
            <a href="#/" className="nx-text-link">Link</a>
          </footer>
        </section>
        <section className="nx-card" aria-label="Card with NxReadOnly">
          <div className="nx-card__content">
            <dl className="nx-read-only">
              <dt className="nx-read-only__label">
                Component Foo
              </dt>
              <dd className="nx-read-only__data">
                Component Foo does not contain proprietary packages
              </dd>
              <dt className="nx-read-only__label">
                Component Bar
              </dt>
              <dd className="nx-read-only__data">
                Component Bar does not contain proprietary packages
              </dd>
            </dl>
          </div>
        </section>
        <section className="nx-card" aria-label="Card with content in columns">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__content nx-card__content--columns">
            <div className="nx-card__call-out">
              <NxFontAwesomeIcon icon={faChartLine} className="nx-card__call-out-icon" />
            </div>
            <div className="nx-card__text">Data point details</div>
          </div>
          <footer className="nx-card__footer"><a href="#/" className="nx-text-link">Link</a></footer>
        </section>
      </div>
      <div className="nx-card-container">
        <section className="nx-card" aria-label="Crad with XL icon">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__call-out">
              <NxFontAwesomeIcon icon={faShapes} className="nx-card__call-out-icon--xl" />
            </div>
            <div className="nx-card__text">Large icon</div>
          </div>
          <footer className="nx-card__footer">
            <a href="#/" className="nx-text-link">Link</a>
          </footer>
        </section>
        <section className="nx-card" aria-label="Percentage stats">
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
            <a href="#/" className="nx-text-link">Link</a>
          </footer>
        </section>
        <section className="nx-card" aria-label="Big percentage card">
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
            <a href="#/" className="nx-text-link">Film sprawl wristwatch math-engine</a>
          </footer>
        </section>
      </div>

      <div className="nx-card-container">
        <section className="nx-card" aria-label="Meaning of Life card">
          <header className="nx-card__header">
            <h3 className="nx-h3">Header</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__call-out">
              42
            </div>
          </div>
        </section>
      </div>
      <div className="nx-card-container">
        <section className="nx-card" aria-label="Shapes card">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__call-out">
              <NxFontAwesomeIcon icon={faShapes} className="nx-card__call-out-icon" />
            </div>
          </div>
          <footer className="nx-card__footer">
            <a href="#/" className="nx-text-link">Link</a>
          </footer>
        </section>
      </div>
      <div className="nx-card-container nx-card-container--no-wrap">
        <section className="nx-card gallery-card--align-left gallery-card--no-max" aria-label="Extra wide card">
          <header className="nx-card__header">
            <h3 className="nx-h3">A wide card with left aligned content</h3>
          </header>
          <div className="nx-card__content nx-card__content--columns">
            <div className="nx-card__call-out">
              <NxFontAwesomeIcon icon={faChartLine} className="nx-card__call-out-icon" />
            </div>
            <div className="nx-card__text">
              This card has had its <code className="nx-code">max-width</code> property removed. As a result it will
              expand to occupy as much space as it can. <code className="nx-code">nx-card-container--no-wrap</code>
              {' '}must be used or it will take 100% of the width and force other cards down.
            </div>
          </div>
        </section>
        <section className="nx-card" aria-label="Small card">
          <header className="nx-card__header">
            <h3 className="nx-h3">Card header</h3>
          </header>
          <div className="nx-card__content nx-card__content--columns">
            <div className="nx-card__call-out">
              <NxFontAwesomeIcon icon={faShapes} className="nx-card__call-out-icon" />
            </div>
            <div className="nx-card__text">
              Sentient post-singularity
            </div>
          </div>
        </section>
      </div>
      <div className="nx-card-container">
        <section className="nx-card nx-card--equal" aria-label="Equal width card 1">
          <header className="nx-card__header">
            <h3 className="nx-h3 nx-h3--card-header">Equal width cards</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__text">
              Post-singularity.
            </div>
          </div>
        </section>
        <section className="nx-card nx-card--equal" aria-label="Equal width card 2">
          <header className="nx-card__header">
            <h3 className="nx-h3 nx-h3--card-header">Equal width cards</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__text">
              Tiger-team otaku carbon decay.
            </div>
          </div>
        </section>
      </div>
      <div className="nx-card-container">
        <section className="nx-card nx-card--equal" aria-label="Equal width card 3">
          <header className="nx-card__header">
            <h3 className="nx-h3 nx-h3--card-header">Equal width cards</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__text">
              Post-singularity.
            </div>
          </div>
        </section>
        <section className="nx-card nx-card--equal" aria-label="Equal width card 4">
          <header className="nx-card__header">
            <h3 className="nx-h3 nx-h3--card-header">Equal width cards</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__text">
              Tiger-team otaku carbon decay.
            </div>
          </div>
        </section>
        <section className="nx-card nx-card--equal" aria-label="Equal width card 5">
          <header className="nx-card__header">
            <h3 className="nx-h3 nx-h3--card-header">Equal width cards</h3>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__text">
              Tiger-team otaku carbon decay.
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
