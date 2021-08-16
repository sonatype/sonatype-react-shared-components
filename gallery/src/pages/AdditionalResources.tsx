/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxP, NxTile, NxH3, NxTextLink } from '@sonatype/react-shared-components';
import {GalleryTile} from '../gallery-components/GalleryTiles';

const AdditionalResources = () =>
  <GalleryTile title="Additional Resources">
    <NxP>
      We have curated a list of additional resources you can use to increase your understanding of react and redux.
    </NxP>

    <NxTile.Subsection>
      <NxTile.SubsectionHeader>
        <NxH3>Classes / Tutorials</NxH3>
      </NxTile.SubsectionHeader>
      <ul className="nx-list nx-list--bulleted">
        <li className="nx-list__item">
          <NxTextLink external href="https://reactjs.org/tutorial/tutorial.html">
            Official ReactJS Tutorial
          </NxTextLink>
          {' '}(Beginner Level)
        </li>
        <li className="nx-list__item">
          <NxTextLink external href="https://redux.js.org/basics/basic-tutorial">
            Official Redux Getting Started
          </NxTextLink>
          {' '}(Beginner Level)
        </li>
        <li className="nx-list__item">
          <NxTextLink external href="https://egghead.io/courses/getting-started-with-redux">
            Getting started with Redux
          </NxTextLink>
          {' '}(egghead.io beginner course)
        </li>
        <li className="nx-list__item">
          <NxTextLink external href="https://www.pluralsight.com/paths/react">
            Pluralsight React Path
          </NxTextLink>
          {' '}(beginner to advanced)
        </li>
        <li className="nx-list__item">
          <NxTextLink external href="https://reactforbeginners.com/">
            React for beginners
          </NxTextLink>
        </li>
      </ul>
    </NxTile.Subsection>

    <NxTile.Subsection>
      <NxTile.SubsectionHeader>
        <NxH3>Good Reads</NxH3>
      </NxTile.SubsectionHeader>
      <ul className="nx-list nx-list--bulleted">
        <li className="nx-list__item">
          <NxTextLink external href="https://reactjs.org/docs/hello-world.html">
            Main Concepts in React
          </NxTextLink>
        </li>
        <li className="nx-list__item">
          <NxTextLink external href="https://reactjs.org/docs/thinking-in-react.html">Thinking in React</NxTextLink>
        </li>
        <li className="nx-list__item">
          Many apps utilizing React and Redux together utilize the official{' '}
          <NxTextLink external href="https://react-redux.js.org/using-react-redux/connect-mapstate">
            react-redux
          </NxTextLink>
          {' '}connectors, as well as the{' '}
          <NxTextLink external href="https://redux-toolkit.js.org/introduction/quick-start">
            Redux toolkit
          </NxTextLink>
          , which is a set of patterns to reduce boilerplate in “vanilla Redux”.
        </li>
        <li className="nx-list__item">
          <NxTextLink external href="https://www.youtube.com/watch?v=nYkdrAPrdcw&time_continue=781">
            Video about Flux
          </NxTextLink>
          , which is a precursor to redux. Uses some real-world problems to motivate the concept of one-way dataflow for
          state management, which is what Redux is all about.
        </li>
      </ul>
    </NxTile.Subsection>

    <NxTile.Subsection>
      <NxTile.SubsectionHeader>
        <NxH3>Getting your hands dirty</NxH3>
      </NxTile.SubsectionHeader>
      <ul className="nx-list nx-list--bulleted">
        <li className="nx-list__item">
          <NxTextLink external href="https://github.com/sonatype/sonatype-application-builder">
            Internal Sonatype Application Builder (SAB) Template
          </NxTextLink>
          {' - '}A great place to start for new projects and a fun place to poke around.
          It is also setup as a GitHub Template, just click the "use this template" button (or click{' '}
          <NxTextLink external href="https://github.com/sonatype/sonatype-application-builder/generate">
            here
          </NxTextLink>
          ) in GitHub to get started. Note that, at this time, this is an internal to Sonatype template.
        </li>
      </ul>
    </NxTile.Subsection>
  </GalleryTile>;

export default AdditionalResources;
