/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const ColorPaletteCode = require('!!raw-loader!./_nx-color-swatches.scss').default;

const ColorPalettePage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        The design group has created color swatch libraries for use in RSC. The colors are organized into palettes based on hue (red, green, blue, etc) and assigned variables based on their lightness or darkness. Darker colors have higher values, and lighter colors have lower values, e.g. the lightest red is <code className="nx-code">$nx-red-50</code> and the darkest is <code className="nx-code">$nx-red-1000</code>. All of the color swatches are lcoated in <code className="nx-code">_nx-color-swatches.scss</code>. This file reqpresents all of the colors available to RSC at this time.
      </p>
      <p className="nx-p">
        Where a color is used commonly across multiple components a custom variable is created. For example components
        with a disabled state share a common background color so we have created a variable for this state:
        <code className="nx-code">$nx-disabled-background: $nx-grey-200;</code>. If the disabled background color
        should change in the future this allows us to change all of the components in one place without effecting other
        instances where that color might be used. These variables are located in
        <code className="nx-code">_nx-colors.scss</code>.
      </p>
      <p className="nx-p">
        It is expected that consumers of the RSC will limit themselves to using the colors that have been made available in <code className="nx-code">_nx-color-swatches.scss</code>. It is preferable to use the <code className="nx-code">$color</code> variable rather than the hex value. Doing so makes it easier to replace colors in the future if the palette changes.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Color palettes"
                        codeExamples={ColorPaletteCode}>
      Color swatches.
    </GalleryExampleTile>
  </>;

export default ColorPalettePage;
