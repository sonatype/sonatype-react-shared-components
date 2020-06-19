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

    <h3 className="nx-h3">Classes / Tutorials</h3>
    <ul className="nx-list nx-list--bulleted">
      <li className="nx-list__item">
        <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank">Official ReactJS Tutorial</a> (Beginner Level)
      </li>
      <li className="nx-list__item">
        <a href="https://redux.js.org/basics/basic-tutorial" target="_blank">Redux Getting Started</a>
      </li>
      <li className="nx-list__item">
        <a href="https://egghead.io/courses/getting-started-with-redux" target="_blank">Getting started with Redux</a> (Beginner Level)
      </li>
    </ul>

    <h3 className="nx-h3">Good Reads</h3>
    <ul className="nx-list nx-list--bulleted">
      <li className="nx-list__item">
        <a href="https://reactjs.org/docs/hello-world.html" target="_blank">Main Concepts in React</a>
      </li>
      <li className="nx-list__item">
        <a href="https://reactjs.org/docs/thinking-in-react.html" target="_blank">Thinking in React</a>
      </li>
      <li className="nx-list__item">
      IQ (and many other apps utilizing React and Redux together) heavily utilize the official
      <a href="https://react-redux.js.org/using-react-redux/connect-mapstate">react-redux</a> connectors,
      as well as the <a href="https://redux-toolkit.js.org/introduction/quick-start" target="_blank">Redux toolkit</a>
      , which is a set of patterns to reduce boilerplate in “vanilla Redux”.
      </li>
      <li className="nx-list__item">
        <a href="https://www.youtube.com/watch?time_continue=781&v=nYkdrAPrdcw&feature=emb_logo" target="_blank">Video about Flux</a>
        , which is a precursor to redux. Uses some real-world problems to motivate the concept of one-way dataflow for state management
        , which is what Redux is all about.
      </li>
    </ul>

  </GalleryTile>;

export default AdditionalResources;
