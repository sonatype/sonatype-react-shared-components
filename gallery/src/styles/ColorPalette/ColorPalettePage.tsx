/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import ColorPaletteExample from './ColorPaletteExample';

const ColorPalettePage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        The design group has created a palette of colors for use in RSC. The colors are organized into swatches
        which each have a consistent hue (red, green, blue, etc) and saturation. Within a swatch the various colors vary
        by lightness, and are named based on their lightness value in the HSL color scheme. Thus darker colors
        have lower values, and lighter colors have higher values. For example the darkest red is
        {' '}<code className="nx-code">--nx-swatch-red-10</code> and the lightest is
        {' '}<code className="nx-code">--nx-swatch-red-95</code>. All of the color swatch values are available as
        CSS custom properties declared within the RSC base styles. The swatches below show all of the colors
        available in RSC along with their hex value and corresponding RSC variable.
      </p>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <h3 className="nx-h3">Using Colors</h3>
        </header>
        <p className="nx-p">
          It is expected that designers and consumers of the RSC will limit themselves to using the colors that have
          been made available in the swatch custom CSS properties. It is preferable to use the
          {' '}custom property rather than hardcoding the color value. Doing so makes it easier
          to replace colors in the future if the palette changes.
        </p>
      </section>
    </GalleryDescriptionTile>

    <ColorPaletteExample/>
  </>;

export default ColorPalettePage;
