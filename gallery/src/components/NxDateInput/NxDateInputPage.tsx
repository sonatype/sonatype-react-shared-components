/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxP, NxTextLink }
  from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxDateInputSimpleExample from './NxDateInputSimpleExample';

const NxDateInputSimpleExampleCode = require('./NxDateInputSimpleExample?raw');

const NxTextInputPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Standard HTML date input with validation styling.
        It is using <NxTextLink href="#/pages/NxTextInput">NxTextInput</NxTextLink>
        under the hood and has similar features and properties.
        The only attribute that is ignored and should not be passed in this component is `type`.
      </NxP>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        id="nx-date-input-simple-example"
                        liveExample={NxDateInputSimpleExample}
                        codeExamples={NxDateInputSimpleExampleCode}>
      A basic example of an <NxCode>NxDateInput</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxTextInputPage;
