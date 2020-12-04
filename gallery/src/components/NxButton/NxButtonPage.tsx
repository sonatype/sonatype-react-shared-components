/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxButtonDefaultExample from './NxButtonDefaultExample';
import NxButtonPrimaryExample from './NxButtonPrimaryExample';
import NxButtonTertiaryExample from './NxButtonTertiaryExample';
import NxButtonErrorExample from './NxButtonErrorExample';
import NxButtonIconExample from './NxButtonIconExample';
import NxButtonIconOnlyExample from './NxButtonIconOnlyExample';

const NxButtonDefaultCode = require('!!raw-loader!./NxButtonDefaultExample').default,
    nxButtonPrimaryCode = require('!!raw-loader!./NxButtonPrimaryExample').default,
    nxButtonTertiaryCode = require('!!raw-loader!./NxButtonTertiaryExample').default,
    nxButtonErrorCode = require('!!raw-loader!./NxButtonErrorExample').default,
    nxButtonIconCode = require('!!raw-loader!./NxButtonIconExample').default,
    nxButtonIconOnlyCode = require('!!raw-loader!./NxButtonIconOnlyExample').default;

export default function NxButtonPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p"><code className="nx-code">.nx-btn</code> is the standard class for all buttons.</p>
        <p className="nx-p">
          When a button is not contained in a <code className="nx-code">footer</code>, then an enclosing
          <code className="nx-code">.nx-btn-bar</code> is generally required to ensure that the buttons are spaced
          appropriately from other content.
        </p>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Secondary (Default)"
                          id="nx-button-default-example"
                          liveExample={NxButtonDefaultExample}
                          codeExamples={NxButtonDefaultCode}>
        An example of an <code className="nx-code">NxButton</code> using the default styling, also known as the
        "secondary" styling, along with some other inline content and some disabled buttons. Disabling by class will
        add aria-disabled=true to the button.
      </GalleryExampleTile>

      <GalleryExampleTile title="Primary"
                          id="nx-button-primary-example"
                          liveExample={NxButtonPrimaryExample}
                          codeExamples={nxButtonPrimaryCode}>
        An example using the "primary" button styles.
      </GalleryExampleTile>

      <GalleryExampleTile title="Tertiary"
                          id="nx-button-tertiary-example"
                          liveExample={NxButtonTertiaryExample}
                          codeExamples={nxButtonTertiaryCode}>
        An example using the "tertiary" button styles.
      </GalleryExampleTile>

      <GalleryExampleTile title="Error"
                          id="nx-button-error-example"
                          liveExample={NxButtonErrorExample}
                          codeExamples={nxButtonErrorCode}>
        An example using the "error" button styles. Commonly seen in <code className="nx-code">NxErrorAlert</code>s.
      </GalleryExampleTile>

      <GalleryExampleTile title="Using icons in buttons"
                          id="nx-button-icon-example"
                          liveExample={NxButtonIconExample}
                          codeExamples={nxButtonIconCode}>
        An example of a button containing an icon in addition to text.
      </GalleryExampleTile>

      <GalleryExampleTile title="Icon only buttons"
                          id="nx-button-icon-only-example"
                          liveExample={NxButtonIconOnlyExample}
                          codeExamples={nxButtonIconOnlyCode}>
        An example of a button containing only an icon. For accessibility purposes it is important to add an
        aria-label for the screen reader to interpret the content correctly.
      </GalleryExampleTile>
    </>
  );
}
