/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { groupBy, prop, toPairs } from 'ramda';
import React from 'react';

const swatchSCSS =
    require('!!raw-loader!@sonatype/react-shared-components/scss-shared/_nx-color-swatches.scss').default;
import './Swatcher.scss';
interface ColorInfo {
  colorVariable: string;
  colorName: string;
  colorHex: string;
}

const swatchFile: string[] = swatchSCSS.split('\n');

const swatchLines = swatchFile.map(line => {
  const matchResults = /^\s*(\$nx-(\w+)-\d+):\s*#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8});$/.exec(line);

  if (matchResults) {
    return {colorVariable: matchResults[1], colorName: matchResults[2], colorHex: matchResults[3]};
  }
  else {
    return null;
  };
}).filter(data => data !== null) as ColorInfo[];

const varsByColor = groupBy(prop('colorName'), swatchLines);

export default function Swatcher() {
  return (
    <>
      { toPairs(varsByColor).map(([colorName, colors]) =>
        <div className="nx-card gallery-card-swatch" key={colorName}>
          <div className="nx-card__header">
            <h3 className="nx-h3">{colorName}</h3>
          </div>
          <div className="nx-card__content">
            {colors.map(({colorVariable, colorHex}) =>
              <div className="gallery-swatch" key={colorHex}>
                <div className="gallery-swatch__thumb" style={{backgroundColor: `#${colorHex}`}}></div>
                <div className="gallery-swatch__hex">
                  #{colorHex}
                </div>
                <div className="gallery-swatch__variable">
                  {colorVariable}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
