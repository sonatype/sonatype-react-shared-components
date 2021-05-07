/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, useEffect } from 'react';
import { toPairs } from 'ramda';

import './ColorPaletteExample.scss';
import { NxCard, NxH3 } from '@sonatype/react-shared-components';

const paletteCssPropertyRegex = /^--nx-swatch-(\w+)-\d+$/;

/**
 * Retrieve all --nx-swatch-... CSS custom properties from currently loaded stylesheets
 */
function fetchSwatches(): Record<string, string[]> {
  // note: the built-in iterables involved here aren't array-like enough to satisfy ramda's TS typings, so it's
  // simpler to just use imperative code.

  const retval: Record<string, string[]> = {};
  for (const styleSheet of document.styleSheets) {
    if (styleSheet instanceof CSSStyleSheet && styleSheet.href && styleSheet.href.endsWith('gallery.css')) {

      for (const rule of styleSheet.cssRules) {
        if (rule instanceof CSSStyleRule) {

          for (const propName of rule.style) {
            const matchResult = paletteCssPropertyRegex.exec(propName);
            if (matchResult) {

              const [colorVar, colorName] = matchResult,
                  arrToUpdate = retval[colorName] || [];

              arrToUpdate.push(colorVar);
              retval[colorName] = arrToUpdate;
            }
          }
        }
      }
    }
  }

  return retval;
}

const bodyStyles = getComputedStyle(document.body);

export default function ColorPaletteExample() {
  const [swatches, setSwatches] = useState<Record<string, string[]>>({});

  useEffect(() => {
    const listener = () => setSwatches(fetchSwatches());
    window.addEventListener('load', listener);
    return () => window.removeEventListener('load', listener);
  }, []);

  return (
    <NxCard.Container className="gallery-card-swatch-container">
      { toPairs(swatches).map(([colorName, colorVars]) =>
        <div className="nx-card gallery-card-swatch" key={colorName}>
          <div className="nx-card__header">
            <h3 className="nx-h3">{colorName}</h3>
          </div>
          <div className="nx-card__content">
            {colorVars.map(colorVar =>
              <div className="gallery-swatch" key={colorVar}>
                <div className="gallery-swatch__thumb" style={{backgroundColor: `var(${colorVar})`}}></div>
                <div className="gallery-swatch__hex">
                  {bodyStyles.getPropertyValue(colorVar)}
                </div>
                <div className="gallery-swatch__variable">
                  {colorVar}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Special Case Swatches: black and white */}
      <NxCard className="gallery-card-swatch">
        <NxCard.Header>
          <NxH3>Black and White</NxH3>
        </NxCard.Header>
        <NxCard.Content>
          <div className="gallery-swatch">
            <div className="gallery-swatch__thumb" style={{backgroundColor: 'var(--nx-swatch-black)'}} />
            <div className="gallery-swatch__hex">
              {bodyStyles.getPropertyValue('--nx-swatch-black')}
            </div>
            <div className="gallery-swatch__variable">--nx-swatch-black</div>
          </div>
          <div className="gallery-swatch">
            <div className="gallery-swatch__thumb" style={{backgroundColor: 'var(--nx-swatch-white)'}} />
            <div className="gallery-swatch__hex">
              {bodyStyles.getPropertyValue('--nx-swatch-white')}
            </div>
            <div className="gallery-swatch__variable">--nx-swatch-white</div>
          </div>
        </NxCard.Content>
      </NxCard>
    </NxCard.Container>
  );
}
