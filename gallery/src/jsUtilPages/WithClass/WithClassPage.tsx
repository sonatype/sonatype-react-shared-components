/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxCode } from '@sonatype/react-shared-components';

import { GalleryExampleTile, GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

import WithClassExample from './WithClassExample';
import './WithClassExample.scss';

const withClassExampleCode = require('./WithClassExample?raw'),
    withClassExampleScss = require('./WithClassExample.scss?raw');

const WithClassPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>withClass</NxCode> is a higher-order component that allows for the easy creation of
        new React Component types that consist simply of a native DOM element with a particular class name.
        The resulting component supports all props that the underlying native component supports, including
        additionaly class names that are added in addition to the one specified when <NxCode>withClass</NxCode>
        is called.
      </NxP>

      <NxP>
        In the future, the capabilities of <NxCode>withClass</NxCode> might be expanded so that it can operate
        over existing non-native React components which have a <NxCode>className</NxCode> prop as well.
      </NxP>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="withClass Example"
                        liveExample={WithClassExample}
                        codeExamples={[withClassExampleCode, { content: withClassExampleScss, language: 'scss' }]}>
      An example which creates a custom React component named <NxCode>ClassyParagraph</NxCode> using{' '}
      <NxCode>withClass</NxCode> and then renders an instance of that component. Note that the example passes
      an id and an additional classname to the <NxCode>ClassyParagraph</NxCode> instance, both of which are
      passed down to the underlying DOM node.
    </GalleryExampleTile>
  </>;

export default WithClassPage;
