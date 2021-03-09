/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryExampleTile, GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

import UseToggleExample from './UseToggleExample';
import UseToggleThirdItemExample from './UseToggleThirdItemExample';

const useToggleExampleCode = require('./UseToggleExample?raw'),
    useToggleThirdItemExampleCode = require('./UseToggleThirdItemExample?raw');

const UseTogglePage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <NxCode>useToggle</NxCode> is a React hook which wraps React's
        built-in <NxCode>useState</NxCode> hook, and provides a level of convenience for
        boolean state values that are meant to be primarily interacted with via toggling (that is, setting
        the state to the opposite of its current value in reaction to some event).{' '}
        <NxCode>useToggle</NxCode> is only usable with boolean state value.
      </p>

      <p className="nx-p">
        Whereas <NxCode>useState</NxCode> returns a pair containing two items: the current state
        value and a setter function which receives the new value as a parameter,{' '}
        <NxCode>useToggle</NxCode> returns a tuple of three items. The first item is still the
        state value. The second however is a parameterless function that, when called, will update the state
        value to be the opposite of what it currently is. Then the third item is the manual update function
        analogous to <NxCode>useState</NxCode>'s second item. In common usage, the third
        item would often not be used, but it is provided in cases there are rare situations that call for it.
      </p>

      <p className="nx-p">
        The toggle function provided by <NxCode>useToggle</NxCode> also provides the new state
        value as its return value, which can be useful if that value is needed for passing to a callback prop
        on your own component.
      </p>

      <p className="nx-p">
        Like <NxCode>useState</NxCode>, <NxCode>useToggle</NxCode> takes the
        initial state value as its parameter.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic Example"
                        liveExample={UseToggleExample}
                        codeExamples={useToggleExampleCode}>
      This example shows a React component which uses <NxCode>useToggle</NxCode> to manage the
      state of a checkbox.
    </GalleryExampleTile>

    <GalleryExampleTile title="Third Item Example"
                        liveExample={UseToggleThirdItemExample}
                        codeExamples={useToggleThirdItemExampleCode}>
      This example demonstrates the usage of the third return item
      from <NxCode>useToggle</NxCode> as a means to manually set the state value.
    </GalleryExampleTile>
  </>;

export default UseTogglePage;
