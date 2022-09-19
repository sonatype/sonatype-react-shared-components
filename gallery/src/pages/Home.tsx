/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faCode, faFile, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { NxP, NxH3, NxCode, NxTile, NxTextLink, NxDescriptionList, NxFontAwesomeIcon } from '@sonatype/react-shared-components';

import {GalleryTile} from '../gallery-components/GalleryTiles';
import { faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { GalleryNavIconCSS3 } from '../GalleryNav/GalleryNavIcons';

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
    <NxTile.Subsection>
      <NxTile.SubsectionHeader>
        <NxH3>Navigating the Gallery</NxH3>
      </NxTile.SubsectionHeader>
      <NxP>
        The sidebar at left can be used to navigate to the various components, styles and utilities. The navigation
        is grouped by general purpose, as follows:
      </NxP>
      <NxDescriptionList>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term>Alerts and Indicators</NxDescriptionList.Term>
          <NxDescriptionList.Description>
            This section includes documentation regarding components which are intended to convey specific types of
            information to the user. For example, alert components for informing the user of events, and counters, tags,
            and threat indicators for creating consistent ways of present particular aspects of a data entity.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term>Buttons and Dropdowns</NxDescriptionList.Term>
          <NxDescriptionList.Description>
            This section includes components that the user would activate in order to initiate some action – buttons,
            dropdowns and other menus, and also links.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term>Forms</NxDescriptionList.Term>
          <NxDescriptionList.Description>
            This sections includes all components that are typically used within a form. Components for forms themselves,
            form structures such as fieldset, and for various kinds of form fields all fall within this section.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term>Data Presentation</NxDescriptionList.Term>
          <NxDescriptionList.Description>
            This section groups together components which are intended for organizing and displaying data. This includes
            views such as lists, tables, and trees, and also visualizations such as the donut chart.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term>Layout</NxDescriptionList.Term>
          <NxDescriptionList.Description>
            Components which make up the "page skeleton" are included in this section. This includes page-level components
            such as the global sidebar and also containers such as tiles and accordions. In addition, rich examples of
            layouts incorporating multiple components working together are also found here.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term>Typography and Icons</NxDescriptionList.Term>
          <NxDescriptionList.Description>
            This section includes semantic and typographic containers for text content, such as paragraphs and code
            blocks.  It also includes utility components that facilitate the use of icons.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term>HTML Variants</NxDescriptionList.Term>
          <NxDescriptionList.Description>
            Some RSC components and styles have separate support for usage via React component and via bare CSS classes.
            In these cases, the React components and bare CSS classes are documented separately. For any such component
            which has both types of documentation, the HTML documentation is currently sequestered in this section.
            Generally, for React-using consumers, the React components should be preferred over the bare CSS class
            approach, and this section should thus generally be ignored.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term>Mixins and Helpers</NxDescriptionList.Term>
          <NxDescriptionList.Description>
            This section includes CSS and SCSS utilities such as helper classes, SCSS mixins, and CSS variables.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term>JavaScript and TypeScript Utilities</NxDescriptionList.Term>
          <NxDescriptionList.Description>
            This section includes utilities that can be useful when writing code that uses RSC components. No actual React
            components are present in this section, however React hooks are documented here in addition to JavaScript
            functions and TypeScript types.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term>Guidelines</NxDescriptionList.Term>
          <NxDescriptionList.Description>
            Rather than documentation of specific components or usable pieces of code, this section includes higher level
            descriptions, tutorials, and recommendations regarding usage of RSC components and web UI development in
            general.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
      </NxDescriptionList>
      <NxP>
        In addition to the groupings within the sidebar, you will notice that each page entry has an icon which
        indicates the type of item documented on that page:
      </NxP>
      <NxDescriptionList>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term><NxFontAwesomeIcon icon={faReact} fixedWidth /></NxDescriptionList.Term>
          <NxDescriptionList.Description>
            Documentation for a React component or family of closely related React components. Typically includes
            technical details about the props that may be passed to the component along with live examples of its use.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term><NxFontAwesomeIcon icon={faCode} fixedWidth /></NxDescriptionList.Term>
          <NxDescriptionList.Description>
            Documentation for usage of bare CSS classes within HTML. Some RSC "components" consist almost entirely of
            styling with little or no special behavior that must be implemented. For these cases, the bare classes
            are themselves a documented and stable part of the RSC API, allowing them to be used even in applications
            which do not use React. Many of these components are also exposed via React "convenience components"
            which simply pair the class in question with the HTML tag to which it is most typically applied.
            Convenience components are not typically documented separated and are simply mentioned on these non-React
            pages. In some cases however, a component may have a simple form exposed as a base CSS class while
            also having a non-trivial React component implementing a certain amount of behavior which a non-React
            application would have to manage themselves. In these cases, the React component is documented on a separate
            page from the base CSS classes. Live examples on these pages are often implemented in bare HTML, though
            some are still implemented in React in order to simplify the inclusion of things such as icons.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term><NxFontAwesomeIcon icon={faRulerCombined} fixedWidth /></NxDescriptionList.Term>
          <NxDescriptionList.Description>
            Complex, compound layout documentation. These pages feature combinations of RSC components that have
            separately have their own documentation pages, but which must also be documented in unison in order to
            understand the full effect. For instance, one such page demonstrates the use
            of <NxCode>nx-read-only</NxCode>, <NxCode>nx-grid</NxCode>, and <NxCode>nx-tile</NxCode> together in order
            to implement a common data display pattern.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term>
            <GalleryNavIconCSS3 />
          </NxDescriptionList.Term>
          <NxDescriptionList.Description>
            Documentation of CSS-based stylesheet utilities and helpers such as CSS custom properties (aka variables)
            and general-purpose classes which may be applied to other RSC components or HTML elements in general.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term><NxFontAwesomeIcon icon={faSass} fixedWidth /></NxDescriptionList.Term>
          <NxDescriptionList.Description>
            Documentation of SCSS-based stylesheet utilities and helpers such as mixins. While projects are not
            required to use SCSS in order to use RSC, any projects which do not use SCSS cannot directly use these
            helpers.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term><NxFontAwesomeIcon icon={faJs} fixedWidth /></NxDescriptionList.Term>
          <NxDescriptionList.Description>
            JavaScript and TypeScript utilities. Documentation within these pages describes various functions,
            data structures, and types that are available within RSC which can be valuable to a consuming application.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term><NxFontAwesomeIcon icon={faFile} fixedWidth /></NxDescriptionList.Term>
          <NxDescriptionList.Description>
            General Documentation. Explanatory guides that do not fall into any of the other categories and generally
            focus on higher-level concepts rather than specific APIs.
          </NxDescriptionList.Description>
        </NxDescriptionList.Item>
      </NxDescriptionList>
    </NxTile.Subsection>
    <NxTile.Subsection>
      <NxTile.SubsectionHeader>
        <NxH3>Consuming the React Shared Components</NxH3>
      </NxTile.SubsectionHeader>
      <NxP>
        The RSC library is available as an open-source npm module on{' '}
        <NxTextLink external href="https://www.npmjs.com/package/@sonatype/react-shared-components">
          npmjs.com
        </NxTextLink>
        {' '} under the name <NxCode>@sonatype/react-shared-components</NxCode>. It is packaged as
        ECMAScript modules, and is intended to be consumed by project using webpack or a similar module bundler.
      </NxP>
    </NxTile.Subsection>
    <NxTile.Subsection>
      <NxTile.SubsectionHeader>
        <NxH3>Component Architecture Philosophy</NxH3>
      </NxTile.SubsectionHeader>
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
    </NxTile.Subsection>
  </GalleryTile>;

export default Home;
