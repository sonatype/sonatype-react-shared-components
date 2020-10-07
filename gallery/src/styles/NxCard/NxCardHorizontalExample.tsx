/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faShapes } from '@fortawesome/free-solid-svg-icons';

import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';

export default function NxCardVerticalExample() {
  return (
    <div className="nx-card-container nx-card-container--column">
      <div className="nx-card nx-card--horizontal">
        <header className="nx-card-header">
          <h3 className="nx-h3 nx-h3--card-header">Card header</h3>
        </header>
        <div className="nx-card__call-out">
          <span className="nx-call__call-out-text">XXXXX%</span>
        </div>
        <div className="nx-card__text">
          Descriptive text
        </div>
        <footer className="nx-card-footer"><a href="nx-link">Link</a></footer>
      </div>
      <div className="nx-card nx-card--horizontal">
        <header className="nx-card-header">
          <h3 className="nx-h3 nx-h3--card-header">Card header</h3>
        </header>
        <div className="nx-card__call-out">
          <NxFontAwesomeIcon icon={faShapes}/>
        </div>
        <div className="nx-card__text">
          Descriptive text
        </div>
        <footer className="nx-card-footer"><a href="nx-link">Link</a></footer>
      </div>
      <div className="nx-card nx-card--horizontal">
        <header className="nx-card-header">
          <h3 className="nx-h3 nx-h3--card-header">Card header</h3>
        </header>
        <div className="nx-card__call-out">
          <span className="nx-call__call-out-text">XXXXX%</span>
        </div>
        <div className="nx-card__text">
          Descriptive text
        </div>
        <footer className="nx-card-footer"><a href="nx-link">Link</a></footer>
      </div>
    </div>
  );
}