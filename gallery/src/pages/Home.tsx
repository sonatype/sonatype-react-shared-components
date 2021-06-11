/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxH3, NxH4, NxCode } from '@sonatype/react-shared-components';

import {GalleryTile} from '../gallery-components/GalleryTiles';

const Home = () =>
  <GalleryTile title="Welcome to the Sonatype React Shared Components Gallery">
    <NxP>
      This gallery demonstrates all UI building blocks available within
      Sonatype's <em>React Shared Components</em> JavaScript library (RSC). The gallery is broken down into pages
      for each styled HTML element and React component, as well as pages for various additional guidelines and
      standard practices that are recommended for all applications using the RSC library. For each element and
      component, live examples are provided along with displays of the code snippets used for generate those live
      examples.
    </NxP>
    <section className="nx-tile-subsection">
      <header className="nx-tile-subsection__header">
        <NxH3>Navigating the Gallery</NxH3>
      </header>
      <NxP>
        The sidebar at left can be used to navigate to the various examples, which are organized into groups
        as follows:
      </NxP>
      <NxH4>React Components</NxH4>
      <NxP>
        Documentation of all React components available to consumers of RSC, including demonstrations, example
        code, and full documentation of relevant React <NxCode>props</NxCode>. Examples here
        demonstrate basic usage of each component along with some modicum of supporting code - for example,
        code tracking the toggle state of a <NxCode>NxCheckbox</NxCode>. This supporting code
        should be taken as example only. Depending on the architectural needs of the consuming application, there
        are many different ways that state management and other supporting concerns could be handled.
      </NxP>
      <NxH4>Guidelines</NxH4>
      <NxP>Miscellaneous advice for RSC consumers</NxP>
      <NxH4>Styles - HTML Elements</NxH4>
      <NxP>
        Demonstrations of raw CSS classes that are available to consumers of RSC. Some of these classes are also
        available as React components, but are documented here as well for lower-level/non-React use.
      </NxP>
      <NxH4>Styles - Mixins &amp; Helpers</NxH4>
      <NxP>
        Documentation of SCSS mixins and CSS helper classes available to consumers of RSC.
      </NxP>
      <NxH4>Layout Examples</NxH4>
      <NxP>
        Explanations of broader layout concepts that includes groups of components and/or styles working together.
      </NxP>
      <NxH4>JavaScript &amp; TypeScript Utilities</NxH4>
      <NxP>Utility function and datatypes available to users of RSC.</NxP>
    </section>
    <section className="nx-tile-subsection">
      <header className="nx-tile-subsection__header">
        <NxH3>Consuming the React Shared Components</NxH3>
      </header>
      <NxP>
        The RSC library is available as an open-source npm module on{' '}
        <a rel="noreferrer" target="_blank" href="https://www.npmjs.com/package/@sonatype/react-shared-components">
          npmjs.com
        </a>
        {' '} under the name <NxCode>@sonatype/react-shared-components</NxCode>. It is packaged as
        ECMAScript modules, and is intended to be consumed by project using webpack or a similar module bundler.
      </NxP>
    </section>
    <section className="nx-tile-subsection">
      <header className="nx-tile-subsection__header">
        <NxH3>Component Architecture Philosophy</NxH3>
      </header>
      <NxP>
        Most if not all components in RSC come in stateless forms by default. That is, they rely on the consuming
        code to manage their state. This approach was taken in order to be as flexible as possible in regards to the
        state management approach that a consuming application might take. For instance, some applications might use
        redux entirely outside of the UI layer. Other applications might take a more traditional approach, and have
        various UI components encapsulating their state internally and communicating through various means. In some
        cases, RSC provides convenience wrapper components to support this latter case. For
        instance <NxCode>NxStatefulTextInput</NxCode> is a wrapper around the
        stateless <NxCode>NxTextInput</NxCode> that keeps track of basic state such as text box
        contents. A non-redux application would likely use this wrapper, which a redux application would not.
      </NxP>
    </section>
  </GalleryTile>;

export default Home;
