/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxWarningAlert, NxP, NxCode, NxTile, NxH3 } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

import ColorPaletteExample from './ColorPaletteExample';

const ColorPalettePage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        The design group has created palettes of colors for use in RSC. The colors are organized into palettes
        which each have a consistent hue (red, green, blue, etc) and saturation. Within a palette the various
        indivdual swatches vary by lightness, and are named based on their lightness value in the HSL color scheme.
        Thus darker colors have lower values, and lighter colors have higher values. For example the darkest red is
        {' '}<NxCode>--nx-swatch-red-10</NxCode> and the lightest is <NxCode>--nx-swatch-red-95</NxCode>. All of the
        color swatch values are available as CSS custom properties declared within the RSC base styles. The
        demonstrations below show all of the colors available in RSC along with their hex value and corresponding RSC
        variable.
      </NxP>
      <NxWarningAlert>
        The lime palette is deprecated and is currently an alias for a subset of the green palette.
      </NxWarningAlert>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Using Colors</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          It is expected that designers and consumers of the RSC will limit themselves to using the colors that have
          been made available in the swatch custom CSS properties. It is preferable to use the
          {' '}custom property rather than hardcoding the color value. Doing so makes it easier
          to replace colors in the future if the palette changes.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <ColorPaletteExample/>
  </>;

export default ColorPalettePage;
