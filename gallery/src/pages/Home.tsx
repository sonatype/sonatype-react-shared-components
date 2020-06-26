/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {GalleryTile} from '../gallery-components/GalleryTiles';

const Home = () =>
  <GalleryTile title="Welcome to the Sonatype React Shared Components Gallery">
    <p className="nx-p">
      This gallery demonstrates all UI building blocks available within
      Sonatype's <em>React Shared Components</em> JavaScript library (RSC). The gallery is broken down into pages
      for each styled HTML element and React component, as well as pages for various additional guidelines and
      standard practices that are recommended for all applications using the RSC library. For each element and
      component, live examples are provided along with displays of the code snippets used for generate those live
      examples.
    </p>
    <p className="nx-p">
      The sidebar at left can be used to navigate to the various examples, which are organized into groups as follows:
    </p>
    <dl className="nx-list nx-list--definition-list">
      <dt className="nx-list__item nx-list__item--label">Styles - HTML Elements</dt>
      <dd className="nx-list__item">
        Demonstrations of raw CSS classes that are available to consumers of RSC. Some of these classes are also
        available as React components, but are documented here as well for lower-level/non-React use.
      </dd>
      <dt className="nx-list__item nx-list__item--label">Styles - Mixins</dt>
      <dd className="nx-list__item">Documentation of SCSS mixins available to consumers of RSC.</dd>
      {/* TODO Layout Examples? */}
      <dt className="nx-list__item nx-list__item--label">Guidelines</dt>
      <dd className="nx-list__item">Miscellaneous advice for RSC consumers</dd>
      <dt className="nx-list__item nx-list__item--label">React Components</dt>
      <dd className="nx-list__item">
        Documentation of all React components available to consumers of RSC, including demonstrations, example
        code, and full documentation of relevant React <code className="nx-code">props</code>. Examples here
        demonstrate basic usage of each component along with some modicum of supporting code - for example,
        code tracking the toggle state of a <code className="nx-code">NxCheckbox</code>. This supporting code
        should be taken as example only. Depending on the architectural needs of the consuming application, there
        are many different ways that state management and other supporting concerns could be handled.
      </dd>
    </dl>
    <section className="nx-tile-subsection">
      <header className="nx-tile-subsection__header">
        <h3 className="nx-h3">Consuming the React Shared Components</h3>
      </header>
      <p className="nx-p">
        The RSC library is available as an open-source npm module on{' '}
        <a rel="noreferrer" target="_blank" href="https://www.npmjs.com/package/@sonatype/react-shared-components">
          npmjs.com
        </a>
        {' '} under the name <code className="nx-code">@sonatype/react-shared-components</code>. It is packaged as
        ECMAScript modules, and is intended to be consumed by project using webpack or a similar module bundler.
      </p>
    </section>
    <section className="nx-tile-subsection">
      <header className="nx-tile-subsection__header">
        <h3 className="nx-h3">Component Architecture Philosophy</h3>
      </header>
      <p className="nx-p">
        Most if not all components in RSC come in stateless forms by default. That is, they rely on the consuming
        code to manage their state. This approach was taken in order to be as flexible as possible in regards to the
        state management approach that a consuming application might take. For instance, some applications might use
        redux entirely outside of the UI layer. Other applications might take a more traditional approach, and have
        various UI components encapsulating their state internally and communicating through various means. In some
        cases, RSC provides convenience wrapper components to support this latter case. For
        instance <code className="nx-code">NxStatefulTextInput</code> is a wrapper around the
        stateless <code className="nx-code">NxTextInput</code> that keeps track of basic state such as text box
        contents. A non-redux application would likely use this wrapper, which a redux application would not.
      </p>
    </section>
  </GalleryTile>;

export default Home;
