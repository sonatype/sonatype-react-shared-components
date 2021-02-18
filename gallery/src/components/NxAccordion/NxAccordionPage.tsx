/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxTableHead, NxTableRow, NxTableCell, NxTableBody, NxInfoAlert }
  from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxAccordionSimpleExample from './NxAccordionExample';
import NxAccordionComplexExample from './NxAccordionComplexExample';
import NxAccordionTertiaryButtonExample from './NxAccordionTertiaryButtonExample';

const NxAccordionSimpleCode = require('!!raw-loader!./NxAccordionExample').default,
    NxAccordionComplexCode = require('!!raw-loader!./NxAccordionComplexExample').default,
    NxAccordionTertiaryButtonCode = require('!!raw-loader!./NxAccordionTertiaryButtonExample').default;

const NxAccordionPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        NxAccordion renders a panel with an always-visible header and a collapsible/expandable body section.
        This is analogous to the HTML 5 <code className="nx-code">&lt;details&gt;</code> element (which is is
        implemented on top of). There are two related components: <code className="nx-code">NxAccordion</code> itself,
        and <code className="nx-code">NxAccordion.Header</code> which represents the header content. All other
        children of <code className="nx-code">NxAccordion</code> aside from
        the <code className="nx-code">Header</code> are rendered in the collapsible section.

        Note that this component is stateless – its open state must be tracked externally.
        See <code className="nx-code">NxStatefulAccordion</code> for a version which tracks its own open state.
      </p>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <h3 className="nx-h3">NxAccordion</h3>
        </header>
        <p className="nx-p">
          In addition to all standard HTML <code className="nx-code">&lt;details&gt;</code> attributes,{' '}
          <code className="nx-code">NxAccordion</code> can receive the following props:
        </p>
        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Name</NxTableCell>
              <NxTableCell>Type</NxTableCell>
              <NxTableCell>Required</NxTableCell>
              <NxTableCell>Description</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody>
            <NxTableRow>
              <NxTableCell>onToggle</NxTableCell>
              <NxTableCell>(() => void)</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>
                A function which gets called when the accordion collapse/expand state is toggled.

                <NxInfoAlert>
                  Deprecated behavior: the onToggle callback does actually get passed a value; it gets the
                  presumed new value of the open state. However with the introduction of
                  the <a href="#/page/useToggle">useToggle</a> hook, that is of minimal value, so for the sake
                  of API consistency the intent going forward is to treat this as a parameterless callback
                </NxInfoAlert>
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>open</NxTableCell>
              <NxTableCell>boolean</NxTableCell>
              <NxTableCell>Yes</NxTableCell>
              <NxTableCell>
                Whether or not the accordion should be rendered "open" with its full content visible, as
                opposed to collapsed.
              </NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </section>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <h3 className="nx-h3">NxAccordion.Header</h3>
        </header>
        <p className="nx-p">
          <code className="nx-code">NxAccordion.Header</code> can receive standard
          HTML <code className="nx-code">&lt;summary&gt;</code> attributes.
        </p>
      </section>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <h3 className="nx-h3">Helper Classes</h3>
        </header>
        <p className="nx-p">The following CSS classes are available for use on child elements.</p>
        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Name</NxTableCell>
              <NxTableCell>Location</NxTableCell>
              <NxTableCell>Description</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody>
            <NxTableRow>
              <NxTableCell><code className="nx-code">nx-accordion__header-title</code></NxTableCell>
              <NxTableCell>First child of <code className="nx-code">NxAccordion.Header</code></NxTableCell>
              <NxTableCell>
                It is expected that the first child of <code className="nx-code">NxAccordion.Header</code> will
                always be an <code className="nx-code">&lt;h2&gt;</code> with
                the <code className="nx-code">.nx-accordion__header-title</code> class containing
                the text content of the always-visible section of the accordion. Note
                that <code className="nx-code">NxAccordion</code> is a{' '}
                <a rel="noreferrer"
                   className="nx-text-link"
                   href="https://html.spec.whatwg.org/multipage/sections.html#sectioning-root">
                  sectioning root
                </a>
                , so it does not matter whether this header is a lower-rank heading than that of its surrounding
                section.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell><code className="nx-code">nx-btn-bar</code></NxTableCell>
              <NxTableCell>Last child of <code className="nx-code">NxAccordion.Header</code></NxTableCell>
              <NxTableCell>
                <code className="nx-code">NxAccordion.Header</code> supports the inclusion of buttons on
                its right-hand side. This is accomplished by adding
                an <code className="nx-code">.nx-btn-bar</code> after
                the <code className="nx-code">.nx-accordion__header-title</code>.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell><code className="nx-code">nx-h3</code></NxTableCell>
              <NxTableCell>Subheader within accordion body</NxTableCell>
              <NxTableCell>
                The contents of the accordion body may include subheaders which should
                be <code className="nx-code">&lt;h3&gt;</code> elements with
                the <code className="nx-code">.nx-h3</code> class.
              </NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </section>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        defaultCheckeredBackground={true}
                        liveExample={NxAccordionSimpleExample}
                        codeExamples={NxAccordionSimpleCode}>
      A simple example of an <code className="nx-code">NxAccordion</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with optional elements"
                        id="nx-accordion-example"
                        defaultCheckeredBackground={true}
                        liveExample={NxAccordionComplexExample}
                        codeExamples={NxAccordionComplexCode}>
      A more complex <code className="nx-code">NxAccordion</code> including header buttons and a subheader.
      This example also demonstrates that clicks on the header and buttons are handled correctly. Clicking a header
      button does not cause the accordion to toggle, but clicking anywhere else on the header does, even including
      places that have their own click handlers (e.g. the accordion title in this example). This example also
      demonstrates that the header title uses ellipsis truncation to handle long content, while the subheader wraps.
      Developers should however avoid creating titles and subheaders that are long enough to trigger these behaviors
      when possible.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with tertiary button in header"
                        id="nx-accordion-tertiary-button-example"
                        defaultCheckeredBackground={true}
                        liveExample={NxAccordionTertiaryButtonExample}
                        codeExamples={NxAccordionTertiaryButtonCode}>
      An <code className="nx-code">NxAccordion</code> which contains a tertiary button in the header. Note that the
      height of this button causes the height of the entire header to grow slightly.
    </GalleryExampleTile>
  </>;

export default NxAccordionPage;
