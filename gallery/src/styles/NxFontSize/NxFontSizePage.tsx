/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const nxFontSizeHtmlExampleCode = require('!!raw-loader!./NxFontSizeHtmlExample.html').default;
const nxFontSizeScssExampleCode = require('!!raw-loader!./NxFontSizeScssExample.scss').default;

const NxFontSizePage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <code className="nx-code">font-size()</code> is a mixin that can be applied to the
        {' '}<code className="nx-code">&lt;body&gt;</code> tag of your project to adjust the default RSC font size to
        better match your project. The default font size in RSC is 16px.
      </p>
      <p className="nx-p">
        The mixin takes a single variable which is the desired font-size with unit. For example:
        {' '}<code className="nx-code">@include font-size(14px);</code> or
        {' '}<code className="nx-code">@include font-size(1.1em);</code>.
      </p>
      <p className="nx-p">
        The mixin adjusts the default text size as well as several form elements which have default font size values
        set by the browser.
      </p>
      <p className="nx-p">
        This mixin is primarily intended for use when RSC is incorporated into existing/legacy projects. If you're
        using it on a new project then you should confirm with your designer, or the design group that custom font
        sizes are a design requirement.
      </p>
    </GalleryDescriptionTile>
    <GalleryExampleTile title="Sample HTML"
                        codeExamples={[{ content: nxFontSizeHtmlExampleCode, language: 'html' },
                          { content: nxFontSizeScssExampleCode, language: 'scss' }]}
                        htmlExample={nxFontSizeHtmlExampleCode}>
      In the example below the &lt;body&gt; tag has a custom CSS class applied which is referenced in the SCSS.
    </GalleryExampleTile>
  </>;

export default NxFontSizePage;
