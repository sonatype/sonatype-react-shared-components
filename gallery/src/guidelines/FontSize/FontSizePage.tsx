/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';
import FontLayoutExample from './FontLayoutExample';
import BlockLayoutExample from './BlockLayoutExample';

const openSansEmSquareImg = require('./opensans-emsquare.png');
const openSansLineSpacingImg = require('./opensans-line-spacing.png');

const FontLayoutExampleCode = require('!!raw-loader!./FontLayoutExample').default;
const FontLayoutExampleStyles = require('!!raw-loader!./FontLayoutExample.scss').default;
const BlockLayoutExampleCode = require('!!raw-loader!./BlockLayoutExample').default;
const BlockLayoutExampleStyles = require('!!raw-loader!./BlockLayoutExample.scss').default;

const firstReferenceUrl = 'https://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align';

const FontSizePage = () =>
  <GalleryDescriptionTile>
    <p>
      The layout details of inline elements - rendered height, line box height, vertical alignments, etc, is
      one of the more poorly understood areas of CSS and HTML rendering. This page seeks to lay out some
      of these less-well-known details in the context of the specific styles (e.g. font faces) used within
      the React Shared Components.
    </p>
    <p>
      At the time of writing, RSC uses the OpenSans font. This font will be used as the example for this guide,
      with screenshots showing its configuration as observed using the font editing program FontForge.  Several
      FontForge screenshots are displayed here.  If you'd like to see this information in FontForge yourself, it is
      located in the UI under Element -> Font Info.
    </p>

    <section>
      <h3>Vocabulary</h3>
      <dl>
        <dt>Glyph</dt>
        <dd>The visible shape of a character</dd>
        <dt>Baseline</dt>
        <dd>
          When writing or printing characters, the baseline is the <q>bottom</q> of standard characters.  For instance,
          when writing by hand on ruled paper, the rule line on which you are writing is the baseline. By default,
          the characters in a sequence of text all have their baselines aligned.
        </dd>
        <dt>Descender</dt>
        <dd>
          Many glyphs, such as <q>q</q>, contain parts that drop below the baseline. Fonts and line layouts
          must take this into account
        </dd>
      </dl>
    </section>

    <section>
      <h3>Boxes</h3>
      <p>
        There are a number of boxes which get sized and positioned as the layout of inline text is determined.
        Some of these are familiar to any HTML/CSS developer, but others are lower level concepts that get into
        the realm of the fonts themselves. This guide will start at the lowest relevant level and work its way
        up to the CSS block element level.
      </p>

      <section>
        <h4>Font Em-Square</h4>
        <p>
          Font glyphs are defined in a unitless coordinate space known as the em-square. The font defines
          this coordinate space using two values: the Ascent and the Descent. The Ascent gives the extent of the box
          above the baseline, and the Descent gives the extent of the box below.  The sum of these values is the
          em-square.  Em-squares are typically one of the following sizes, though they could be anything: 1000, 1024,
          or 2048. Again, these are unitless, abstract values we are talking about; so far this has nothing to do
          with the rendered size on the page.
        </p>
        <p>
          OpenSans has an Em-square of 2048, broken down into an ascent of 1638 and a descent of 410, as seen in
          FontForge below
        </p>
        <img src={openSansEmSquareImg}/>

        <p>
          Theoretically, the em-square can be thought of as roughly the extent of the visible area of the font's
          glyphs. This isn't strictly true, as the font writer is perfectly allowed to draw outside the lines,
          and in particular things like accent marks may fall outside of it. Additionally there is no guarantee
          that glyphs will go right up <em>to</em> the lines. Particularly, there is another number stored in the
          font, the Capital Height, which indicates the actual (unitless) size of capital letters - capital <q>X</q>
          to be specific.  In OpenSans, this number is 1462, which you might note is smaller than the em-square's
          Ascent value.
        </p>
        <p>
          Despite the nuances described above, we now get to the first connection with familiar CSS concepts:{' '}
          <strong>
            the actual rendered size of the em-square box is what the CSS <code className="nx-code">font-size</code>
            {' '}property specifies.
          </strong>
        </p>
      </section>

      <section>
        <h4>Text Node Content Area</h4>
        <p>
          As we've established, <code className="nx-code">font-size</code> sets the height of the em-square, a box
          that is at a lower level than the HTML/CSS model.  So what about HTML nodes and elements, what sets their
          height?  Let's start with text nodes, and by extension, simple inline elements that only contain text
          nodes.
        </p>
        <p>
          In addition to the em-square ascent and descent values described above, fonts also have another set of
          ascent and descent values which describe line spacing. Actually, it's several sets of values which
          are each used by different operating systems in different circumstances. Luckily for us however, OpenSans
          uses a consistent set of values: 2189 for the ascender and 600 for the descender, as pictured below:
        </p>
        <img src={openSansLineSpacingImg}/>

        <p>
          As you can see these values are larger than those that defined the em-square, and they are once again
          unitless.  So what do they do?  They help define the line spacing: glyphs outside of the box defined
          by these values will be cut off, and, more notably for web developers, they defined the content-height of
          the text node. So, the box defined by these values is 2189 + 600 = 2787 units tall.  This is about 1.36
          times the height of the em-square, so if we had text with a font-size of 100px, the resulting text node
          would have a height of about 136px.  Notwithstanding any padding or borders, an inline HTML element
          containing that text node would be that same height, as would the area colored by any background
          applied to said element.  This exact scenario is demonstrated in the live example below:
        </p>

        <FontLayoutExample/>
        <CodeExample content={FontLayoutExampleCode}/>
        <CodeExample language="scss" content={FontLayoutExampleStyles}/>

        <p>
          Notice in this example that nothing you can visibly measure is actually 100px tall even though that is the
          font size.  The glyphs aren't, because they aren't guaranteed to perfectly fill out the em-square. The
          background isn't, because it is based on the line spacing characteristics described above - and indeed
          it comes out to 136px as predicted.
        </p>
      </section>

      <section>
        <h4>Line Boxes</h4>
        <p>
          In HTML/CSS, inline elements are contained within block elements, in which the inline elements get laid
          out into a series of line boxes.  The line boxes are a layout detail and not a manipulatable part of
          the DOM.  Each one consists of (parts of) one or more inline elements and bare text nodes, and a given
          element/node may be split over multiple lines.  The spacing between these lines is set using the familiar
          {' '}<code className="nx-code">line-height</code> property.  Extra space resulting from a
          high <code className="nx-code">line-height</code> value is distributed equally above and below the content
          box, putting the content boxes in the middle of each line box (note however that the visible glyphs are
          not necessarily in the middle of their content box).
        </p>

        <p>
          <code className="nx-code">line-height</code> can be set in a number of ways, some of which are more
          problematic than others:
        </p>

        <h5>Absolute <code className="nx-code">line-height</code> values</h5>
        <p>
          <code className="nx-code">line-height</code> can be set using absolute units such
          as <code className="nx-code">px</code>. This allows simple, fine-grained control, but is inflexible,
          especially when applied as a page-wide style.
        </p>

        <h5>Proportional <code className="nx-code">line-height</code> values</h5>
        <p>
          <code className="nx-code">line-height</code> can be also be set using proportional values such as
          percentages and unitless values.  Both of these are relative to the font-size, but there is an important
          difference. The unitless values compute a line-height relative to actual font-size at which the text is
          displayed. In contrast, the percentage values compute a line-height relative to the
          font-size of the element on which the line-height is specified, which could be an ancestor with a
          different font size than the text is actually being displayed at. Prefer the unitless approach.
        </p>

        <h5>Automatic <code className="nx-code">line-height</code></h5>
        <p>
          The default value for <code className="nx-code">line-height</code> is
          {' '}<code className="nx-code">normal</code>. The CSS spec is vague about what this means but in
          practice it takes into account the font metrics described above plus one more: the Line Gap.
          The Line Gap is another value built into the font which tells renderers how much extra space to put
          between lines in addtion to the line spacing ascender and descender values.  Conveniently for us, in
          OpenSans the line gap is zero.  This means that in our case the default
          CSS <code className="nx-code">line-height</code> works out to the ratio between the em-square and the
          content-box, which once again is about 1.36. This also means that when
          using <code className="nx-code">line-height: normal</code> with OpenSans, the content boxes of adjacent
          lines of text will touch without overlapping. This is not necessarily the case with other fonts, where
          there may be either an overlap or a gap
        </p>

        <p>
          When setting an explicit <code className="nx-code">line-height</code>, even a proportional one, it should
          be noted that the ideal/default line-height varies from one font to another based on the font metrics
          described above. The only <code className="nx-code">line-height</code> setting that is really
          future-proofed against changes to a different font-face is <code className="nx-code">normal</code>.
        </p>
      </section>

      <section>
        <h4>Block Elements</h4>
        <p>
          Block Elements are more firmly within the realm of CSS itself and more directly controlled by CSS
          properties such as <code className="nx-code">height</code> and <code className="nx-code">width</code>,
          which won't be discussed here.  A block elements can form a container for line boxes, the block's width
          determining the length of each line and thus, along with the text content, the number of lines. A block
          element's content area contains not only the content areas of its inline children but also any
          additional spacing applied to their line boxes.  Notice the different in the height of the colored
          backgrounds below.
        </p>

        <BlockLayoutExample/>
        <CodeExample content={BlockLayoutExampleCode}/>
        <CodeExample language="scss" content={BlockLayoutExampleStyles}/>
      </section>
    </section>

    <section>
      <h3>Additional Nuances</h3>
      <p>Here is an incomplete list of additional nuances to consider when dealing with inline formatting</p>
      <ul>
        <li>
          Inline elements do not respond to CSS width, height, margin-top, or margin-bottom properties.  Their
          size and vertical spacing only follows the <code className="nx-code">font-size</code>,
          {' '}<code className="nx-code">line-height</code>, and font metrics as described above.
        </li>
        <li>inline-block elements <em>are</em> sizable using the CSS width and height properties</li>
        <li>
          inline-block elements use the bottom of the element as their baseline, even if they only contain text
        </li>
        <li>
          Things get more complicated when a line box includes inline elements of multiple heights. In this
          scenario, the elements are sized individually,
          including <code className="nx-code">line-height</code> spacing, lined up according to
          the <code className="nx-code">vertical-align</code> property (by default, so their so their baselines
          are aligned), and then the line box goes from the highest top to the lowest bottom.
        </li>
        <li>
          Parent elements contribute a zero-width <q>strut</q> character to the line spacing.  In other words,
          if an inline element is in a line box with along with a parent element that has a larger line height,
          the parent's line height (and baseline) will come into play even if the parent has no text of its own
        </li>
        <li>
          Due to the off-center nature of the baseline, vertical-alignment of elements of different font sizes is
          extremely counterintuitive. See the examples in the vertical alignment section
          of <a href={firstReferenceUrl}>[1]</a>
        </li>
      </ul>
    </section>

    <section>
      <h3>References, further reading</h3>
      <p>
        The first reference here is particularly valuable, and is where the bulk of the knowledge on this page come
        from.
      </p>
      <ol>
        <li>
          <a id="font-size-ref-1" href={firstReferenceUrl}>
            Deep dive CSS: font metrics, line-height and vertical-align
          </a>
        </li>
        <li>
          <a href="https://glyphsapp.com/tutorials/vertical-metrics">Vertical Metrics - Glyphs</a>
        </li>
        <li>
          <a href="https://www.w3.org/TR/CSS2/visudet.html#inline-box-height">Line Height Calculatons: CSS 2.1 Spec</a>
        </li>
      </ol>
    </section>
  </GalleryDescriptionTile>;

export default FontSizePage;
