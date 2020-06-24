/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {GalleryTile} from '../gallery-components/GalleryTiles';

const StylingRSCPage = () =>
  <GalleryTile title="How to style your app when using RSC">
    <p className="nx-p">
      If you have styling needs that aren't covered by the styles included in React Shared Components (RSC),
      then you're going to have to create your own styles.
    </p>
    <h2 className="h2">Page specific stylesheets</h2>
    <p className="nx-p">
      Take a look at <code className="nx-code">frontend/src/main/scss/app-styles.scss</code>. This file
      contains custom styles for the app and imports external (page specific) stylesheets. Why have page
      specific stylesheets? By grouping our styles together by use and (ideally) locating the SCSS
      next to the HTML that it modifies we decrease clutter/noise in our main stylesheet, keep our styles focused
      to what they modify, and also help maintain a clear separation between code, layout, and styling.
    </p>
    <h2 className="h2">B.E.M.</h2>
    <p className="nx-p">
      You might have noticed lots of dashes and underscores in our class names. That's because we use BEM naming
      by default. BEM stands for "Block", "Element", and "Modifier".
      <a href="https://www.toptal.com/css/introduction-to-bem-methodology">Learn more about BEM</a>. We use a
      slightly modified version of BEM in the RSC, we have added name-spaces and utility classes.
    </p>
    <h2 className="h2">Namespaces</h2>
    <p className="nx-p">
      Because the RSC styles are used by multiple apps we wanted to clearly distinguish between RSC styles and
      custom app styles. To that end we use a namespace prefix in our class names. In RSC that prefix
      is <code className="nx-code">.nx-</code>. In IQ thet use <code className="nx-code">.iq-</code>,
      as a prefix in order to differentiate between classes in IQ and classes from RSC. When you
      create custom SCSS in your app you should create a simple unique prefix for your app.
    </p>
    <h2 className="h2">Utility classes</h2>
    <p className="nx-p">
      You may notice as you work with the various RSC that some components have CSS classes that don't follow
      normal BEM naming conventions. Classes like:
    </p>
    <ul className="nx-list nx-list--bulleted">
      <li className="nx-list-item">
        <code className="nx-code">.open</code> &amp; <code className="nx-code">.closed</code>
      </li>
      <li className="nx-list-item">
        <code className="nx-code">.disabled</code>
      </li>
      <li className="nx-list-item">
        <code className="nx-code">.pristine</code>, <code className="nx-code">.valid</code>,
        {' '}<code className="nx-code">.invalid</code>
      </li>
      <li className="nx-list-item">
        <code className="nx-code">.selected</code> &amp; <code className="nx-code">.unselected</code>
      </li>
    </ul>
    <p className="nx-p">
      These are commonly refered to as "utility classes". Uutility classes usually describe a change in a components'
      visual state. These classes are common across all components that might need them, especially in the case of the
      validation utility classes.
    </p>
    <p>
      If you have questions about how to use RSC's styles in your app, or how to create customs style for your app
      #react-components on Slack is a good place to ask.
    </p>
  </GalleryTile>;

export default StylingRSCPage;
