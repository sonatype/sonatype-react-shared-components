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

const NxAccordionSimpleCode = require('./NxAccordionExample?raw'),
    NxAccordionComplexCode = require('./NxAccordionComplexExample?raw'),
    NxAccordionTertiaryButtonCode = require('./NxAccordionTertiaryButtonExample?raw');

const NxAccordionPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        NxAccordion renders a panel with an always-visible header and a collapsible/expandable body section.
        This is analogous to the HTML 5 <NxCode>&lt;details&gt;</NxCode> element (which is is
        implemented on top of). There are two related components: <NxCode>NxAccordion</NxCode> itself,
        and <NxCode>NxAccordion.Header</NxCode> which represents the header content. All other
        children of <NxCode>NxAccordion</NxCode> aside from
        the <NxCode>Header</NxCode> are rendered in the collapsible section.

        Note that this component is stateless – its open state must be tracked externally.
        See <NxCode>NxStatefulAccordion</NxCode> for a version which tracks its own open state.
      </p>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <h3 className="nx-h3">NxAccordion</h3>
        </header>
        <p className="nx-p">
          In addition to all standard HTML <NxCode>&lt;details&gt;</NxCode> attributes,{' '}
          <NxCode>NxAccordion</NxCode> can receive the following props:
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
              <NxTableCell>(() =&gt; void)</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>
                A function which gets called when the accordion collapse/expand state is toggled.

                <NxInfoAlert>
                  Deprecated behavior: the onToggle callback does actually get passed a value; it gets the
                  presumed new value of the open state. However with the introduction of
                  the <a className="nx-text-link" href="#/pages/useToggle">useToggle</a> hook, that is of minimal
                  value, so for the sake of API consistency the intent going forward is to treat this as a
                  parameterless callback.
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
          <NxCode>NxAccordion.Header</NxCode> can receive standard
          HTML <NxCode>&lt;summary&gt;</NxCode> attributes.
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
              <NxTableCell><NxCode>nx-accordion__header-title</NxCode></NxTableCell>
              <NxTableCell>First child of <NxCode>NxAccordion.Header</NxCode></NxTableCell>
              <NxTableCell>
                It is expected that the first child of <NxCode>NxAccordion.Header</NxCode> will
                always be an <NxCode>&lt;h2&gt;</NxCode> with
                the <NxCode>.nx-accordion__header-title</NxCode> class containing
                the text content of the always-visible section of the accordion. Note
                that <NxCode>NxAccordion</NxCode> is a{' '}
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
              <NxTableCell><NxCode>nx-btn-bar</NxCode></NxTableCell>
              <NxTableCell>Last child of <NxCode>NxAccordion.Header</NxCode></NxTableCell>
              <NxTableCell>
                <NxCode>NxAccordion.Header</NxCode> supports the inclusion of buttons on
                its right-hand side. This is accomplished by adding
                an <NxCode>.nx-btn-bar</NxCode> after
                the <NxCode>.nx-accordion__header-title</NxCode>.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell><NxCode>nx-h3</NxCode></NxTableCell>
              <NxTableCell>Subheader within accordion body</NxTableCell>
              <NxTableCell>
                The contents of the accordion body may include subheaders which should
                be <NxCode>&lt;h3&gt;</NxCode> elements with
                the <NxCode>.nx-h3</NxCode> class.
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
      A simple example of an <NxCode>NxAccordion</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with optional elements"
                        id="nx-accordion-example"
                        defaultCheckeredBackground={true}
                        liveExample={NxAccordionComplexExample}
                        codeExamples={NxAccordionComplexCode}>
      A more complex <NxCode>NxAccordion</NxCode> including header buttons and a subheader.
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
      An <NxCode>NxAccordion</NxCode> which contains a tertiary button in the header. Note that the
      height of this button causes the height of the entire header to grow slightly.
    </GalleryExampleTile>
  </>;

export default NxAccordionPage;
