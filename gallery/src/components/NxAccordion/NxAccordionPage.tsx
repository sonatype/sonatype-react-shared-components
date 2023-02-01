/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxInfoAlert, NxCode, NxTextLink, NxP, NxH3, NxTile, NxWarningAlert }
  from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxAccordionSimpleExample from './NxAccordionExample';
import NxAccordionComplexExample from './NxAccordionComplexExample';
import NxAccordionButtonHeaderExample from './NxAccordionButtonHeaderExample';
import NxAccordionIconButtonHeaderExample from './NxAccordionIconButtonHeaderExample';
import NxAccordionWithNxListExample from './NxAccordionWithNxListExample';
import { useLocation } from 'react-router';

const NxAccordionSimpleCode = require('./NxAccordionExample?raw'),
    NxAccordionComplexCode = require('./NxAccordionComplexExample?raw'),
    NxAccordionButtonHeaderCode = require('./NxAccordionButtonHeaderExample?raw'),
    NxAccordionIconButtonHeaderCode = require('./NxAccordionIconButtonHeaderExample?raw'),
    NxAccordionWithNxListCode = require('./NxAccordionWithNxListExample?raw');

const NxAccordionPage = () => {
  const { search } = useLocation(),
      hideDeprecatedExamples = search.includes('hideDeprecatedExamples');

  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          NxAccordion renders a panel with an always-visible header and a collapsible/expandable body section.
          This is analogous to the HTML 5 <NxCode>&lt;details&gt;</NxCode> element (which it is
          implemented on top of). There are three related components: <NxCode>NxAccordion</NxCode> itself,
          <NxCode>NxAccordion.Header</NxCode> which represents the header content, and
          {' '}<NxCode>NxAccordion.Title</NxCode> which is a convenience component for the header title. All other
          children of <NxCode>NxAccordion</NxCode> aside from
          the <NxCode>Header</NxCode> and the <NxCode>Title</NxCode> are rendered in the collapsible section.

          Note that this component is stateless – its open state must be tracked externally.
          See <NxCode>NxStatefulAccordion</NxCode> for a version which tracks its own open state.
        </NxP>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>NxAccordion</NxH3>
          </NxTile.SubsectionHeader>
          <NxTable>
            <NxTable.Head>
              <NxTable.Row>
                <NxTable.Cell>Name</NxTable.Cell>
                <NxTable.Cell>Type</NxTable.Cell>
                <NxTable.Cell>Required</NxTable.Cell>
                <NxTable.Cell>Description</NxTable.Cell>
              </NxTable.Row>
            </NxTable.Head>
            <NxTable.Body>
              <NxTable.Row>
                <NxTable.Cell>onToggle</NxTable.Cell>
                <NxTable.Cell>(() =&gt; void)</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>
                  A function which gets called when the accordion collapse/expand state is toggled.

                  <NxInfoAlert>
                    Deprecated behavior: the onToggle callback does actually get passed a value; it gets the
                    presumed new value of the open state. However with the introduction of
                    the <NxTextLink href="#/pages/useToggle">useToggle</NxTextLink> hook, that is of minimal
                    value, so for the sake of API consistency the intent going forward is to treat this as a
                    parameterless callback.
                  </NxInfoAlert>
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>open</NxTable.Cell>
                <NxTable.Cell>boolean</NxTable.Cell>
                <NxTable.Cell>Yes</NxTable.Cell>
                <NxTable.Cell>
                  Whether or not the accordion should be rendered "open" with its full content visible, as
                  opposed to collapsed.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>HTML <NxCode>&lt;details&gt;</NxCode> Attributes</NxTable.Cell>
                <NxTable.Cell>
                  <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/details">
                    HTML details Attributes
                  </NxTextLink>
                </NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>
                  NxAccordion supports any html attribute that's normally supported by the
                  {' '}<NxCode>&lt;details&gt;</NxCode> element
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>NxAccordion.Header</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            <NxCode>NxAccordion.Header</NxCode> can receive standard
            HTML <NxCode>&lt;summary&gt;</NxCode> attributes. Note that the header must be a direct child of {' '}
            <NxCode>NxAccordion</NxCode> to ensure it renders correctly.
          </NxP>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>NxAccordion.Title</NxH3>
            <NxP>
              First child of <NxCode>NxAccordion.Header</NxCode>.
              It is expected that the first child of <NxCode>NxAccordion.Header</NxCode> will
              always be an <NxCode>NxAccordion.Title</NxCode>.
              It is a convenience component for <NxCode>&lt;h2&gt;</NxCode> with
              the <NxCode>.nx-accordion__header-title</NxCode> class containing
              the text content of the always-visible section of the accordion. Note
              that <NxCode>NxAccordion</NxCode> is a{' '}
              <NxTextLink external href="https://html.spec.whatwg.org/multipage/sections.html#sectioning-root">
                sectioning root
              </NxTextLink>
              , so it does not matter whether this header is a lower-rank heading than that of its surrounding
              section.
            </NxP>
          </NxTile.SubsectionHeader>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>Helper Classes</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>The following CSS classes are available for use on child elements.</NxP>
          <NxTable>
            <NxTable.Head>
              <NxTable.Row>
                <NxTable.Cell>Name</NxTable.Cell>
                <NxTable.Cell>Location</NxTable.Cell>
                <NxTable.Cell>Description</NxTable.Cell>
              </NxTable.Row>
            </NxTable.Head>
            <NxTable.Body>
              <NxTable.Row>
                <NxTable.Cell><NxCode>nx-btn-bar</NxCode></NxTable.Cell>
                <NxTable.Cell>Last child of <NxCode>NxAccordion.Header</NxCode></NxTable.Cell>
                <NxTable.Cell>
                  <NxWarningAlert>
                    Deprecated. The pattern of placing buttons within the accordion header creates accessibility
                    problems.  It results in nested click targets and violations of ARIA rules. That said, for backwards
                    compatibility RSC continues to support the styling necessary for the layout of such buttons.
                  </NxWarningAlert>
                  <NxCode>NxAccordion.Header</NxCode> supports the inclusion of buttons on
                  its right-hand side. This is accomplished by adding
                  an <NxCode>.nx-btn-bar</NxCode> after
                  the <NxCode>NxAccordion.Title</NxCode>.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell><NxCode>nx-h3</NxCode></NxTable.Cell>
                <NxTable.Cell>Subheader within accordion body</NxTable.Cell>
                <NxTable.Cell>
                  The contents of the accordion body may include subheaders which should
                  be <NxCode>&lt;h3&gt;</NxCode> elements with
                  the <NxCode>.nx-h3</NxCode> class.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell><NxCode>nx-footer</NxCode></NxTable.Cell>
                <NxTable.Cell>Bottom of accordion body</NxTable.Cell>
                <NxTable.Cell>
                  <NxCode>NxAccordion</NxCode> supports placing a footer at the bottom of its content, typically in
                  order to hold buttons. This is the recommended location to which buttons that were formerly in the
                  accordion's header (in an <NxCode>nx-btn-bar</NxCode>, as described in the deprecated section above)
                  should be migrated.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </NxTile.Subsection>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Simple Example"
                          defaultCheckeredBackground={true}
                          liveExample={NxAccordionSimpleExample}
                          codeExamples={NxAccordionSimpleCode}>
        A simple example of an <NxCode>NxAccordion</NxCode>.
      </GalleryExampleTile>

      <GalleryExampleTile title="Example with nested NxList"
                          id="nx-accordion-nested-nx-list-example"
                          defaultCheckeredBackground={true}
                          liveExample={NxAccordionWithNxListExample}
                          codeExamples={NxAccordionWithNxListCode}>
        An example of an <NxCode>NxAccordion</NxCode> with nested <NxCode>NxList</NxCode>.
        A special styling is applied to <NxCode>NxList</NxCode> when it is the first child nested
        inside <NxCode>NxAccordion</NxCode>. The border and the top padding are removed
        so it looks more unified with the Accordion.
      </GalleryExampleTile>

      <GalleryExampleTile title="Example with optional elements"
                          id="nx-accordion-example"
                          defaultCheckeredBackground={true}
                          liveExample={NxAccordionComplexExample}
                          codeExamples={NxAccordionComplexCode}>
        A more complex <NxCode>NxAccordion</NxCode> including a subheader and a footer. This example also
        demonstrates that the header title uses ellipsis truncation to handle long content, while the subheader wraps.
        Developers should however avoid creating titles and subheaders that are long enough to trigger these behaviors
        when possible.
      </GalleryExampleTile>

      {
        hideDeprecatedExamples ? null :
        <>
          <GalleryExampleTile title="Deprecated: Example with icon buttons in header"
                              id="nx-accordion-icon-button-header-example"
                              defaultCheckeredBackground={true}
                              liveExample={NxAccordionIconButtonHeaderExample}
                              codeExamples={NxAccordionIconButtonHeaderCode}>
            <NxWarningAlert>Deprecated</NxWarningAlert>
            An <NxCode>NxAccordion</NxCode> which contains icon buttons in the header.
          </GalleryExampleTile>

          <GalleryExampleTile title="Deprecated: Example with tertiary button in header"
                              id="nx-accordion-tertiary-button-header-example"
                              defaultCheckeredBackground={true}
                              liveExample={NxAccordionButtonHeaderExample}
                              codeExamples={NxAccordionButtonHeaderCode}>
            <NxWarningAlert>Deprecated</NxWarningAlert>
            An <NxCode>NxAccordion</NxCode> which contains a tertiary button in the header. Note that the
            height of this button causes the height of the entire header to grow slightly.
          </GalleryExampleTile>
        </>
      }
    </>
  );
};

export default NxAccordionPage;
