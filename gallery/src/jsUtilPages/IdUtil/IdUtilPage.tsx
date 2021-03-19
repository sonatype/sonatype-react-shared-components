/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryExampleTile, GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

import UseUniqueIdUniqueExample from './UseUniqueIdUniqueExample';
import UseUniqueIdExplicitExample from './UseUniqueIdExplicitExample';

const getUniqueIdExampleCode = require('./GetUniqueIdExample?raw'),
    useUniqueIdUniqueExampleCode = require('./UseUniqueIdUniqueExample?raw'),
    useUniqueIdExplicitExampleCode = require('./UseUniqueIdExplicitExample?raw');

const IdUtilPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        The ID Utils consist of two utility functions for managing unique, auto-generated strings for use
        as HTML IDs. This functionality is provided as both a simple
        function: <code className="nx-code">getUniqueId</code>, and as a React
        hook: <code className="nx-code">useUniqueId</code>.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="getUniqueId" codeExamples={getUniqueIdExampleCode}>
      This example shows the simple way that getUniqueId is used to obtain a unique generated id with a given prefix.
      The prefix is passed as a parameter, and the id is returned as a string.
    </GalleryExampleTile>

    <GalleryExampleTile title="useUniqueId Unique Example"
                        liveExample={UseUniqueIdUniqueExample}
                        codeExamples={useUniqueIdUniqueExampleCode}>
      This example renders a simple react component which uses useUniqueId to generate an id which is
      set on the output element and also rendered as text for the sake of observation.
    </GalleryExampleTile>

    <GalleryExampleTile title="useUniqueId Non-Unique Override Example"
                        liveExample={UseUniqueIdExplicitExample}
                        codeExamples={useUniqueIdExplicitExampleCode}>
      This example demonstrates how <code className="nx-code">useUniqueId</code> can be used in situations where an
      explicit ID <em>may</em> be provided by an external source instead. This example features two components: a
      child which can optionally receive an ID as a prop, but which
      uses <code className="nx-code">useUniqueId</code> to generate a random ID in the event that it has not
      received an ID, and a parent component which renders two instances of the child, one with an
      explicit id passed and one without. Note that React hooks should never be called within a conditional
      statement. For this reason, <code className="nx-code">useUniqueId</code> has special support for handling an
      explicit ID as its second parameter, allowing any component
      which <em>might</em> need <code className="nx-code">useUniqueId</code> to <em>always</em>{' '}
      call <code className="nx-code">useUniqueId</code>.
    </GalleryExampleTile>
  </>;

export default IdUtilPage;
