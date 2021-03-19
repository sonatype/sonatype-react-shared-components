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
import UseToggleFourthFifthItemExample from './UseToggleFourthFifthItemExample';

const useToggleExampleCode = require('./UseToggleExample?raw'),
    useToggleThirdItemExampleCode = require('./UseToggleThirdItemExample?raw'),
    useToggleFourthFifthItemExampleCode = require('./UseToggleFourthFifthItemExample?raw');

const UseTogglePage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <code className="nx-code">useToggle</code> is a React hook which wraps React's
        built-in <code className="nx-code">useState</code> hook, and provides a level of convenience for
        boolean state values that are meant to be primarily interacted with via toggling (that is, setting
        the state to the opposite of its current value in reaction to some event).{' '}
        <code className="nx-code">useToggle</code> is only usable with boolean state value.
      </p>

      <p className="nx-p">
        Whereas <code className="nx-code">useState</code> returns a pair containing two items: the current state
        value and a setter function which receives the new value as a parameter,{' '}
        <code className="nx-code">useToggle</code> returns a tuple of five items. The first item is still the
        state value. The second however is a parameterless function that, when called, will update the state
        value to be the opposite of what it currently is. Then the third item is the manual update function
        analogous to <code className="nx-code">useState</code>'s second item. The fourth item is a parameterless
        function that always sets the state value to false - useful as
        an <code className="nx-code">onClose</code> handler for a dropdown for instance. Finally, the fifth item
        is a parameterless function that always sets the state value to true – just for the sake of convenience.
        In common usage, the third - fifth items would often not be used, but they are provided for the rare situations
        that call for them.
      </p>

      <p className="nx-p">
        The toggle function provided by <code className="nx-code">useToggle</code> also provides the new state
        value as its return value, which can be useful if that value is needed for passing to a callback prop
        on your own component.
      </p>

      <p className="nx-p">
        Like <code className="nx-code">useState</code>, <code className="nx-code">useToggle</code> takes the
        initial state value as its parameter.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic Example"
                        liveExample={UseToggleExample}
                        codeExamples={useToggleExampleCode}>
      This example shows a React component which uses <code className="nx-code">useToggle</code> to manage the
      state of a checkbox.
    </GalleryExampleTile>

    <GalleryExampleTile title="Third Item Example"
                        liveExample={UseToggleThirdItemExample}
                        codeExamples={useToggleThirdItemExampleCode}>
      This example demonstrates the usage of the third return item
      from <code className="nx-code">useToggle</code> as a means to explicitly set the state value.
    </GalleryExampleTile>

    <GalleryExampleTile title="Fourth and Fifth Item Example"
                        liveExample={UseToggleFourthFifthItemExample}
                        codeExamples={useToggleFourthFifthItemExampleCode}>
      This example demonstrates the usage of the third return item
      from <code className="nx-code">useToggle</code> as a means to explicitly set the state value.
    </GalleryExampleTile>
  </>;

export default UseTogglePage;
