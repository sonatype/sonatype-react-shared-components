/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { zip } from 'ramda';
import { NxP, NxCode, NxH3, NxTile, NxTable, selectableColors, selectableColorClasses }
  from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import '@sonatype/react-shared-components/scss-shared/_nx-tag-variables.scss';

import SelectableColorNxTagExample from './SelectableColorNxTagExample';
import SelectableColorCustomExample from './SelectableColorCustomExample';

const selectableColorNxTagExampleCode = require('./SelectableColorNxTagExample?raw'),
    selectableColorCustomExampleCode = require('./SelectableColorCustomExample?raw'),
    selectableColorCustomExampleStyles = require('./SelectableColorCustomExample.scss?raw');

const customExampleCode =
    [selectableColorCustomExampleCode, { content: selectableColorCustomExampleStyles, language: 'scss' }];

const deprecatedColorMapping: Record<string, string> = {
  sky: 'light-blue',
  turquoise: 'green',
  kiwi: 'lime'
};

const ColorDocRow = ({ name, className }: { name: string, className: string }) =>
  <NxTable.Row className={className}>
    <NxTable.Cell><NxCode>{name}</NxCode></NxTable.Cell>
    <NxTable.Cell>
      { deprecatedColorMapping[name] && <NxCode>{deprecatedColorMapping[name]}</NxCode> }
    </NxTable.Cell>
    <NxTable.Cell>
      <div className="gallery-color-sample gallery-color-sample__selectable-light" />
    </NxTable.Cell>
    <NxTable.Cell>
      <div className="gallery-color-sample gallery-color-sample__selectable-dark" />
    </NxTable.Cell>
  </NxTable.Row>;

const SelectableColorsPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        RSC provides a palette of color values which are intended to be used for arbitrary but distinctly
        colored elements. Examples include components such as tags and labels, or user interface elements like
        highlighted regions of a text document.
      </NxP>
      <NxP>
        The colors that RSC provides for this purpose are known as the "selectable colors" and they are used within
        the <NxCode>NxColorPicker</NxCode> and <NxCode>NxTag</NxCode> components as well as exposed publicly
        for use in creating custom components.
      </NxP>
      <NxP>
        For each named color within the selectable colors, light and dark RGB color codes are provided in order to
        facilitate the creation of two-tone components. For an example see the selectable <NxCode>NxTag</NxCode>s.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>
            Usage in <NxCode>NxColorPicker</NxCode> and <NxCode>NxTag</NxCode>
          </NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          As documented on its gallery page, <NxCode>NxColorPicker</NxCode> allows the user to select from a set
          of colors. The colors available are precisely the "selectable colors" documented here. On the other side
          of things, <NxCode>NxTag</NxCode> can receive a "selectable color" name as one of its props and will be
          styled using that color.
        </NxP>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>
            Custom Usage of the Selectable Colors
          </NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          A number of CSS classes and custom CSS variables are provided to facilitate the use of the selectable
          colors for styling custom components. Essentially, for each selectable color, a CSS class is provided
          which defines two custom properties: <NxCode>--nx-selectable-color-light</NxCode>{' '}
          and <NxCode>--nx-selectable-color-dark</NxCode>. Where a custom component wants to use a selectable
          color, they would add that color's class to the element in question (or a parent) and then use the custom
          properties to set styles as they see fit.  For instance, they might
          use <NxCode>--nx-selectable-color-light</NxCode> to set the element's background while
          using <NxCode>--nx-selectable-color-dark</NxCode> to set the border color.
        </NxP>
        <NxP>
          It is commonly the case that the custom component won't want or need to know the exact name of the color
          in use, but would rather want to cycle through all of the available colors in a random or round-robin
          fashion. To allow this, RSC also provides a TypeScript array
          named <NxCode>selectableColorClasses</NxCode> containing all of the available selectable
          color CSS classes. A custom component can pull classnames from that array and apply them to elements, never
          needing to know whether it is using, say, the red selectable color vs the sky selectable color.
        </NxP>
        <NxP>
          RSC additionally provides a TypeScript array containing just the selectable color names,
          named <NxCode>selectableColors</NxCode>. The colors in this array are in the same order as
          in <NxCode>selectableColorClasses</NxCode>, so indexing into <NxCode>selectableColorClasses</NxCode>{' '}
          using a given index will get you the CSS class for the color located at the same index
          in <NxCode>selectableColors</NxCode>. The set of valid selectable color names is also available as
          a TypeScript type union named <NxCode>SelectableColor</NxCode>. You may notices this type is
          used on the <NxCode>color</NxCode> prop of <NxCode>NxTag</NxCode>, for instance.
        </NxP>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Deprecated Color Names</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          Over time, the names of selectable colors sometimes change. When this happens, in order to preserve backwards
          compatibility, a mapping is created to designate which one of the current selectable colors the old name
          should refer to. The deprecated name's CSS class is styled equivalently to the class for the new name.
          The deprecated names are <strong>not</strong> present in the <NxCode>selectableColors</NxCode> and{' '}
          <NxCode>selectableColorClasses</NxCode> lists - they only contain current colors. However they are part of
          the <NxCode>SelectableColor</NxCode> TypeScript type so that components which rely on that type can continue
          to accept old names. Deprecated selectable color names may be fully removed in major versions of RSC.
        </NxP>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Selectable Color Names and Values</NxH3>
        </NxTile.SubsectionHeader>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Color Name</NxTable.Cell>
              <NxTable.Cell>Deprecated Names</NxTable.Cell>
              <NxTable.Cell>Light</NxTable.Cell>
              <NxTable.Cell>Dark</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            {
              zip(selectableColors, selectableColorClasses).map(([color, cls]) =>
                <ColorDocRow key={color} name={color} className={cls} />
              )
            }
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxTag Color Variables</NxH3>
        </NxTile.SubsectionHeader>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Property Name</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>--nx-color-tag-selected-hover-border</NxCode></NxTable.Cell>
              <NxTable.Cell>
                The default border color of a selected <NxCode>NxTag</NxCode> when hovered.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>--nx-color-tag-selected-hover-background</NxCode></NxTable.Cell>
              <NxTable.Cell>
                The default background color of a selected <NxCode>NxTag</NxCode> when hovered.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>--nx-color-tag-unselected-hover-border</NxCode></NxTable.Cell>
              <NxTable.Cell>
                The default border color of an unselected <NxCode>NxTag</NxCode> when hovered.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>--nx-color-tag-unselected-hover-background</NxCode></NxTable.Cell>
              <NxTable.Cell>
                The default background color of an unselected <NxCode>NxTag</NxCode> when hovered.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Usage with NxColorPicker and NxTag"
                        liveExample={SelectableColorNxTagExample}
                        codeExamples={selectableColorNxTagExampleCode}>
      This example shows an NxColorPicker which is used to set the color of an NxTag. The color value
      passed between the two is a "selectable color" name.
    </GalleryExampleTile>

    <GalleryExampleTile title="Usage with a Custom Element"
                        liveExample={SelectableColorCustomExample}
                        codeExamples={customExampleCode}>
      This example demonstrates the use of selectable color classes, retrieved from the
      the <NxCode>selectableColorClasses</NxCode> array, along with custom styling utilizing the selectable color
      custom CSS properties, to add colors to a set of custom "candy" elements.
    </GalleryExampleTile>
  </>;

export default SelectableColorsPage;
