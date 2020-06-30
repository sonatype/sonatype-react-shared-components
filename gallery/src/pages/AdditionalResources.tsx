/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {GalleryTile} from '../gallery-components/GalleryTiles';

const AdditionalResources = () =>
  <GalleryTile title="Additional Resources">
    <p className="nx-p">
      We have curated a list of additional resources you can use to increase your understanding of react and redux.
    </p>

    <h3 className="nx-h3 nx-tile__section-header">Classes / Tutorials</h3>
    <ul className="nx-list nx-list--bulleted">
      <li className="nx-list__item">
        <a rel="noreferrer" href="https://reactjs.org/tutorial/tutorial.html" target="_blank">
          Official ReactJS Tutorial
        </a>
        {' '}(Beginner Level)
      </li>
      <li className="nx-list__item">
        <a rel="noreferrer"
           href="https://redux.js.org/basics/basic-tutorial"
           target="_blank">Official Redux Getting Started
        </a>
        {' '}(Beginner Level)
      </li>
      <li className="nx-list__item">
        <a rel="noreferrer"
           href="https://egghead.io/courses/getting-started-with-redux"
           target="_blank">
          Getting started with Redux
        </a>
        {' '}(egghead.io beginner course)
      </li>
      <li className="nx-list__item">
        <a rel="noreferrer"
           href="https://www.pluralsight.com/paths/react"
           target="_blank">
             Pluralsight React Path
        </a>
        {' '}(beginner to advanced)
      </li>
      <li className="nx-list__item">
        <a rel="noreferrer"
           href="https://reactforbeginners.com/"
           target="_blank">
             React for beginners
        </a>
      </li>
    </ul>

    <h3 className="nx-h3 nx-tile__section-header">Good Reads</h3>
    <ul className="nx-list nx-list--bulleted">
      <li className="nx-list__item">
        <a rel="noreferrer" href="https://reactjs.org/docs/hello-world.html" target="_blank">
          Main Concepts in React
        </a>
      </li>
      <li className="nx-list__item">
        <a rel="noreferrer" href="https://reactjs.org/docs/thinking-in-react.html" target="_blank">Thinking in React</a>
      </li>
      <li className="nx-list__item">
        Many apps utilizing React and Redux together utilize the official{' '}
        <a rel="noreferrer" href="https://react-redux.js.org/using-react-redux/connect-mapstate" target="_blank">
          react-redux
        </a>
        {' '}connectors, as well as the{' '}
        <a rel="noreferrer" href="https://redux-toolkit.js.org/introduction/quick-start" target="_blank">
          Redux toolkit
        </a>
        , which is a set of patterns to reduce boilerplate in “vanilla Redux”.
      </li>
      <li className="nx-list__item">
        <a rel="noreferrer"
           href="https://www.youtube.com/watch?v=nYkdrAPrdcw&time_continue=781"
           target="_blank">
          Video about Flux
        </a>
        , which is a precursor to redux. Uses some real-world problems to motivate the concept of one-way dataflow for
        state management, which is what Redux is all about.
      </li>
    </ul>

    <h3 className="nx-h3 nx-tile__section-header">Getting your hands dirty</h3>
    <ul className="nx-list nx-list--bulleted">
      <li className="nx-list__item">
        <a rel="noreferrer"
           href="https://github.com/sonatype/sonatype-application-builder"
           target="_blank">
          Internal Sonatype Application Builder (SAB) Template
        </a>
        {' - '}A great place to start for new projects and a fun place to poke around.
        It is also setup as a GitHub Template, just click the "use this template" button (or click{' '}
        <a rel="noreferrer"
           href="https://github.com/sonatype/sonatype-application-builder/generate"
           target="_blank">
          here
        </a>
        ) in GitHub to get started. Note that, at this time, this is an internal to Sonatype template.
      </li>
    </ul>

  </GalleryTile>;

export default AdditionalResources;
