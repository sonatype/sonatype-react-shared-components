/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxCode, NxH3, NxH4, NxTextLink, NxList } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

import CodeExample from '../../CodeExample';
import FontLayoutExample from './FontLayoutExample';
import BlockLayoutExample from './BlockLayoutExample';
import FallbackFontExample from './FallbackFontExample';
import BadLineHeightExample from './BadLineHeightExample';

const openSansEmSquareImg = require('./opensans-emsquare.png');
const openSansLineSpacingImg = require('./opensans-line-spacing.png');

const FontLayoutExampleCode = require('./FontLayoutExample?raw');
const FontLayoutExampleStyles = require('./FontLayoutExample.scss?raw');
const BlockLayoutExampleCode = require('./BlockLayoutExample?raw');
const BlockLayoutExampleStyles = require('./BlockLayoutExample.scss?raw');
const FallbackFontExampleCode = require('./FallbackFontExample?raw');
const FallbackFontExampleStyles = require('./FallbackFontExample.scss?raw');
const BadLineHeightExampleCode = require('./BadLineHeightExample?raw');
const BadLineHeightExampleStyles = require('./BadLineHeightExample.scss?raw');

const firstReferenceUrl = 'https://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align',
    css2SpecUrl = 'https://www.w3.org/TR/CSS2/visudet.html#inline-box-height';

const firstImageAltText = `
  In FontForge's "Font Information for OpenSans-Regular" window, the "General" tab is selected.
  Within that tab, three text boxes and their labels are called out:
    the "Ascent" box with a value of 1638,
    the "Descent" box with a value of 410,
    and the "Em Size" box with a value of 2048.
`;

const secondImageAltText = `
  In FontForge's "Font Information for OpenSans-Regular" window, the "OS/2" tab is selected.
  Within that tab, two groups of two text boxes each and their labels are called out:
    first, the "Win Ascent" and "Win Descent" boxes, with values of 2189 and 600 respectively;
    and then the "HHead Ascent" and "HHead Descent" boxes with values of 2189 and -600 respectively.
`;

const FontSizePage = () =>
  <GalleryDescriptionTile>
    <NxP>
      The layout details of inline elements - rendered height, line box height, vertical alignments, etc, is
      one of the more poorly understood areas of CSS and HTML rendering. This page seeks to lay out some
      of these less-well-known details in the context of the specific styles (e.g. font faces) used within
      the React Shared Components.
    </NxP>
    <NxP>
      At the time of writing, RSC uses the OpenSans font. This font will be used as the example for this guide,
      with screenshots showing its configuration as observed using the font editing program FontForge. Several
      FontForge screenshots are displayed here. If you'd like to see this information in FontForge yourself, it is
      located in the UI under Element -&gt; Font Info.
    </NxP>

    <section>
      <NxH3>Vocabulary</NxH3>
      <NxList>
        <NxList.Item>
          <NxList.Text>Glyph:</NxList.Text>
          <NxList.Subtext>The visible shape of a character.</NxList.Subtext>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>Baseline:</NxList.Text>
          <NxList.Subtext>
            When writing or printing characters, the baseline is the <q>bottom</q> of standard characters. For
            instance, when writing by hand on ruled paper, the rule line on which you are writing is the baseline.
            By default, the characters in a sequence of text all have their baselines aligned.
          </NxList.Subtext>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>Descender:</NxList.Text>
          <NxList.Subtext>
            Many glyphs, such as <q>q</q>, contain parts that drop below the baseline. Fonts and line layouts must
            take this into account.
          </NxList.Subtext>
        </NxList.Item>
      </NxList>
    </section>

    <section>
      <NxH3>Boxes</NxH3>
      <NxP>
        There are a number of boxes which get sized and positioned as the layout of inline text is determined.
        Some of these are familiar to any HTML/CSS developer, but others are lower level concepts that get into
        the realm of the fonts themselves. This guide will start at the lowest relevant level and work its way
        up to the CSS block element level.
      </NxP>

      <section>
        <NxH4>Font Em-Square</NxH4>
        <NxP>
          Font glyphs are defined in a unitless coordinate space known as the em-square. The font defines
          this coordinate space using two values: the Ascent and the Descent. The Ascent gives the extent of the box
          above the baseline, and the Descent gives the extent of the box below. The sum of these values is the
          em-square. Em-squares are typically one of the following sizes, though they could be anything: 1000, 1024,
          or 2048. Again, these are unitless, abstract values we are talking about; so far this has nothing to do
          with the rendered size on the page.
        </NxP>
        <NxP>
          OpenSans has an Em-square of 2048, broken down into an ascent of 1638 and a descent of 410, as seen in
          FontForge below
        </NxP>
        <img alt={firstImageAltText} src={openSansEmSquareImg}/>

        <NxP>
          Theoretically, the em-square can be thought of as roughly the extent of the visible area of the font's
          glyphs. This isn't strictly true, as the font writer is perfectly allowed to draw outside the lines,
          and in particular things like accent marks may fall outside of it. Additionally there is no guarantee
          that glyphs will go right up <em>to</em> the lines. Particularly, there is another number stored in the
          font, the Capital Height, which indicates the actual (unitless) size of capital letters -
          capital <q>X</q> to be specific. In OpenSans, this number is 1462, which you might note is smaller than
          the em-square's Ascent value.
        </NxP>
        <NxP>
          Despite the nuances described above, we now get to the first connection with familiar CSS concepts:{' '}
          <strong>
            the actual rendered size of the em-square box is what the CSS <NxCode>font-size</NxCode>
            {' '}property specifies.
          </strong>
        </NxP>
      </section>

      <section>
        <NxH4>Text Node Content Area</NxH4>
        <NxP>
          As we've established, <NxCode>font-size</NxCode> sets the height of the em-square, a box
          that is at a lower level than the HTML/CSS model. So what about HTML nodes and elements, what sets their
          height? Let's start with text nodes, and by extension, simple inline elements that only contain text
          nodes.
        </NxP>
        <NxP>
          In addition to the em-square ascent and descent values described above, fonts also have another set of
          ascent and descent values which describe line spacing. Actually, it's several sets of values which
          are each used by different operating systems in different circumstances. Luckily for us however, OpenSans
          uses a consistent set of values: 2189 for the ascender and 600 for the descender, as pictured below:
        </NxP>
        <img alt={secondImageAltText} src={openSansLineSpacingImg}/>

        <NxP>
          As you can see these values are larger than those that defined the em-square, and they are once again
          unitless. So what do they do? They help define the line spacing: glyphs outside of the box defined
          by these values will be cut off, and more notably for web developers, they define the CSS content-height of
          the text node. So, the box defined by these values is 2189 + 600 = 2789 units tall. This is about 1.36
          times the height of the em-square, so if we had text with a font-size of 100px, the resulting text node
          would have a height of about 136px. Notwithstanding any padding or borders, an inline HTML element
          containing that text node would be that same height, as would the area colored by any background
          applied to said element. This exact scenario is demonstrated in the live example below:
        </NxP>

        <FontLayoutExample/>
        <CodeExample content={FontLayoutExampleCode}/>
        <CodeExample language="scss" content={FontLayoutExampleStyles}/>

        <NxP>
          Notice in this example that nothing you can visibly measure is actually 100px tall even though that is the
          font size. The glyphs aren't, because they aren't guaranteed to perfectly fill out the em-square. The
          background isn't, because it is based on the line spacing characteristics described above - and indeed
          it comes out to 136px as predicted.
        </NxP>
      </section>

      <section>
        <NxH4>Line Boxes</NxH4>
        <NxP>
          In HTML/CSS, inline elements are contained within block elements, in which the inline elements get laid
          out into a series of line boxes. The line boxes are a layout detail and not a manipulatable part of
          the DOM. Each one consists of (parts of) one or more inline elements and bare text nodes, and a given
          element/node may be split over multiple lines. The spacing between these lines is set using the familiar
          {' '}<NxCode>line-height</NxCode> property. Extra space resulting from a
          high <NxCode>line-height</NxCode> value is distributed equally above and below the content
          box, putting the content boxes in the middle of each line box. Note however that the visible glyphs are
          not necessarily in the middle of their content box. This extra space is known as the <q>leading</q>.
        </NxP>

        <NxP>
          <NxCode>line-height</NxCode> can be set in a number of ways, some of which are more
          problematic than others:
        </NxP>

        <h5 className="nx-h5">Absolute <NxCode>line-height</NxCode> values</h5>
        <NxP>
          <NxCode>line-height</NxCode> can be set using absolute units such
          as <NxCode>px</NxCode>. This allows simple, fine-grained control, but is inflexible,
          especially when applied as a page-wide style.
        </NxP>

        <h5 className="nx-h5">Proportional <NxCode>line-height</NxCode> values</h5>
        <NxP>
          <NxCode>line-height</NxCode> can be also be set using proportional values such as
          percentages and unitless values. Both of these are relative to the font-size, but there is an important
          difference. The unitless values compute a line-height relative to the actual font-size at which the text is
          displayed. In contrast, the percentage values compute a line-height relative to the
          font-size of the element on which the line-height is specified, which could be an ancestor with a
          different font size than the text is actually being displayed
          at. <strong>Prefer the unitless approach.</strong>
        </NxP>

        <h5 className="nx-h5">Automatic <NxCode>line-height</NxCode></h5>
        <NxP>
          The default value for <NxCode>line-height</NxCode> is
          {' '}<NxCode>normal</NxCode>. The CSS spec is vague about what this means but in
          practice it takes into account the font metrics described above plus one more: the Line Gap.
          The Line Gap is another value built into the font which tells renderers how much extra space to put
          between lines in addition to the line spacing ascender and descender values. Conveniently for us, in
          OpenSans the line gap is zero, as can be seen in the FontForge images above. This means that in our case the
          default CSS <NxCode>line-height</NxCode> works out to the ratio between the em-square and the
          content-box, which once again is about 1.36. This also means that when
          using <NxCode>line-height: normal</NxCode> with OpenSans, the content boxes of adjacent
          lines of text will touch without overlapping. This is not necessarily the case with other fonts, where
          there may be a gap.
        </NxP>

        <NxP>
          When setting an explicit <NxCode>line-height</NxCode>, even a proportional one, it should
          be noted that the ideal/default value varies from one font to another based on the font metrics
          described above. The only <NxCode>line-height</NxCode> setting that is really
          future-proofed against changes to a different font-face is <NxCode>normal</NxCode>.
        </NxP>
      </section>

      <section>
        <NxH4>Block Elements</NxH4>
        <NxP>
          Block Elements are more firmly within the realm of CSS itself and more directly controlled by CSS
          properties such as <NxCode>height</NxCode> and <NxCode>width</NxCode>,
          which won't be discussed here. A block elements can form a container for line boxes, the block's width
          determining the length of each line and thus, along with the text content, the number of lines. A block
          element's content area contains not only the content areas of its inline children but also any
          additional spacing applied to their line boxes. Notice the different in the height of the colored
          backgrounds below:
        </NxP>

        <BlockLayoutExample/>
        <CodeExample content={BlockLayoutExampleCode}/>
        <CodeExample language="scss" content={BlockLayoutExampleStyles}/>
      </section>
    </section>

    <section>
      <NxH3>Additional Nuances</NxH3>
      <NxP>
        Here is an incomplete list of additional nuances to consider when dealing with inline formatting
      </NxP>
      <NxList className="nx-list--bulleted">
        <NxList.Item>
          <NxList.Text>
            Inline elements do not respond to CSS width, height, margin-top, or margin-bottom properties. Their
            size and vertical spacing only follows the <NxCode>font-size</NxCode>,
            {' '}<NxCode>line-height</NxCode>, and font metrics as described above, as well as padding
            and borders.
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            inline-block elements <em>are</em> sizable using the CSS width and height properties
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            inline-block elements use the baseline of their last line box as their baseline, unless they have no text
            content or have <NxCode>overflow</NxCode> set to something other
            than <NxCode>visible</NxCode>. In these cases the baseline is the bottom margin
            edge. <NxTextLink external href={css2SpecUrl}>[3]</NxTextLink>
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            Things get more complicated when a line box includes inline elements of multiple heights. In this
            scenario, the elements are sized individually,
            including <NxCode>line-height</NxCode> spacing, lined up according to
            the <NxCode>vertical-align</NxCode> property (by default: so their baselines
            are aligned), and then the line box goes from the highest top to the lowest bottom.
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            Parent elements contribute a zero-width <q>strut</q> character to the line spacing. In other words,
            if an inline element is in a line box along with a parent element that has a larger line height,
            the parent's line height (and baseline) will come into play even if the parent has no text of its own
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            Due to the off-center nature of the baseline, vertical-alignment of elements of different font sizes is
            extremely, unavoidably counterintuitive. See the examples in the vertical alignment section
            of <NxTextLink external href={firstReferenceUrl}>[1]</NxTextLink>
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            <NxP>
              It is possible to specify a <NxCode>line-height</NxCode> smaller than an element's content
              height, in which case the leading will be negative and text node content areas will have a height
              exceeding that of their line box. In this scenario, text nodes in adjacent line boxes will overlap one
              another.
            </NxP>
            <NxP>
              This is one reason why a global, absolute line-height is a poor choice - this line height will need to be
              adjusted explicitly for any element which has a larger font size in order to prevent visible crowding and
              overlap. The example below demonstrates what might happen with a large-font header in an app with a 18px
              "global" line-height and no element-specific line-height adjustments:
            </NxP>

            <BadLineHeightExample />
            <CodeExample content={BadLineHeightExampleCode}/>
            <CodeExample language="scss" content={BadLineHeightExampleStyles}/>
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            It is possible for a single text node to contain glyphs from multiple font faces, and even for it to contain
            no glyphs from the font face specified in CSS. This can happen when the preferred font face has glyphs for
            some (or none), but not all, of the code points requested, and a different font face is used as the
            fallback. Different fonts, of course, have different metrics, which means different heights.
            Experimentally, in this case the browser appears to take the metrics of the declared font, even if that font
            is not contributing <em>any</em> of the glyphs in the text node in question. As an example, observe the
            <NxCode>span</NxCode>s containing the following emojis. The first inherits the page styles setting OpenSans
            as the font family.  Despite not actually having any glyphs from OpenSans, it still has a content height
            derived from OpenSans metrics - that is, a content height that is roughly 1.36 times the font size. The
            second <NxCode>span</NxCode> however is styled with the generic <NxCode>sans-serif</NxCode> font family. You
            will likely observe that this second <NxCode>span</NxCode> has a different height - one which will depend on
            the default sans-serif font installed on your operating system:

            <FallbackFontExample />
            <CodeExample content={FallbackFontExampleCode}/>
            <CodeExample language="scss" content={FallbackFontExampleStyles}/>
          </NxList.Text>
        </NxList.Item>
      </NxList>
    </section>

    <section>
      <NxH3>References, further reading</NxH3>
      <NxP>
        The first reference here is particularly valuable, and is where the bulk of the knowledge on this page come
        from.
      </NxP>
      <ol>
        <li>
          <NxTextLink external id="font-size-ref-1" href={firstReferenceUrl}>
            Deep dive CSS: font metrics, line-height and vertical-align
          </NxTextLink>
        </li>
        <li>
          <NxTextLink external href="https://glyphsapp.com/tutorials/vertical-metrics">
            Vertical Metrics - Glyphs
          </NxTextLink>
        </li>
        <li>
          <NxTextLink external href={css2SpecUrl}>Line Height Calculatons: CSS 2.1 Spec</NxTextLink>
        </li>
      </ol>
    </section>
  </GalleryDescriptionTile>;

export default FontSizePage;
