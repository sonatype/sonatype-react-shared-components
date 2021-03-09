/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import Swatcher from './ColorPaletteExample';

const ColorPalettePage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        The design group has created a palette of colors for use in RSC. The colors are organized into swatches
        based on hue (red, green, blue, etc) and assigned values based on their lightness or darkness. Darker colors
        have higher values, and lighter colors have lower values, for example the lightest red is
        {' '}<NxCode>$nx-red-50</NxCode> and the darkest is
        {' '}<NxCode>$nx-red-1000</NxCode>. All of the color swatches are located in
        {' '}<NxCode>_nx-color-swatches.scss</NxCode>. The swatches below show all of the colors
        available in RSC along with their hex value and corresponding RSC variable.
      </p>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <h3 className="nx-h3">Using Colors</h3>
        </header>
        <p className="nx-p">
          It is expected that designers and consumers of the RSC will limit themselves to using the colors that have
          been made available in <NxCode>_nx-color-swatches.scss</NxCode>. It is preferable to use the
          {' '}<NxCode>$color-###</NxCode> variable rather than the hex value. Doing so makes it easier
          to replace colors in the future if the palette changes.
        </p>
        <p className="nx-p">
          To access the color variables you'll need to load
          {' '}<NxCode>_nx-variables.scss</NxCode> into your SCSS like this:
          {' '}<NxCode>@import '~@sonatype/react-shared-components/scss-shared/nx-variables';</NxCode>.
        </p>
      </section>
    </GalleryDescriptionTile>

    <div className="nx-card-container">
      <Swatcher/>
    </div>
  </>;

export default ColorPalettePage;
