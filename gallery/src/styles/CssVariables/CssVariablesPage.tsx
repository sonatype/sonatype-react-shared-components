/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ReactNode, useEffect, useState } from 'react';
import { NxTextLink, NxP, NxCode, NxList, NxWarningAlert, NxTable } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryTile } from '../../gallery-components/GalleryTiles';

import './CssVariablesPage.scss';

const SpacingDemo = ({ spacingVar }: { spacingVar: string }) =>
  <NxList.Item>
    <NxList.DescriptionTerm><NxCode>{spacingVar}</NxCode></NxList.DescriptionTerm>
    <NxList.Description>
      <div className="gallery-spacing-demo" style={{ width: `var(${spacingVar})` }} />
    </NxList.Description>
  </NxList.Item>;

const PropertyDocItem = ({ propertyVar, children }: { propertyVar: string, children: ReactNode }) =>
  <NxList.Item>
    <NxList.DescriptionTerm><NxCode>{propertyVar}</NxCode></NxList.DescriptionTerm>
    <NxList.Description>{children}</NxList.Description>
  </NxList.Item>;

const ColorDocRow = ({ colorVar, children }: { colorVar: string, children: ReactNode }) =>
  <NxTable.Row>
    <NxTable.Cell><NxCode>{colorVar}</NxCode></NxTable.Cell>
    <NxTable.Cell>{children}</NxTable.Cell>
    <NxTable.Cell>
      <div className="gallery-color-sample" style={{ background: `var(${colorVar})` }} />
    </NxTable.Cell>
  </NxTable.Row>;

const CssVariablesPage = () => {
  const [baseSpacing, setBaseSpacing] = useState<string | null>(null);

  function detectBaseSpacing() {
    setBaseSpacing(getComputedStyle(document.body).getPropertyValue('--nx-spacing-base').trim());
  }

  useEffect(() => {
    detectBaseSpacing();

    window.addEventListener('load', detectBaseSpacing);
    return () => window.removeEventListener('load', detectBaseSpacing);
  }, []);

  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          RSC has a variety of concepts within its styles built on common values. Major examples include common
          spacing sizes and common colors. To prevent duplication and aide in dissemination of these values,
          they are codified as{' '}
          <NxTextLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*" external>
            CSS custom properties
          </NxTextLink>
          {' '}which may be used as variables in the styles of downstream projects. These custom properties are
          defined on the <NxCode>:root</NxCode> selector within the base styles of RSC, and so are available to
          any element on the page, automatically when the RSC library is in use.
        </NxP>
        <NxP>
          To avoid naming conflicts with other custom properties which may be present, all RSC custom properties
          begin with <NxCode>--nx-</NxCode>. Following that prefix, the variables follow one of several consistent
          naming schemes, depending on what type of value the variable holds.
        </NxP>
      </GalleryDescriptionTile>
      <GalleryTile title="Spacing Properties">
        <NxP>
          RSC has a set of spacing properties which are intended to be used for margin and padding values. They are
          not intended to be used for sizing of heights and widths. These properties are all simple multiples of
          a base spacing value {baseSpacing != null ? <> (<NxCode>{baseSpacing}</NxCode>)</> : null}, and are named
          based on their multiple. The base value itself is available
          as the <NxCode>--nx-spacing-base</NxCode> custom property. The others all follow a similar pattern
          but with a "<NxCode>multiplier</NxCode>x" suffix instead of "base", as seen in the sizing chart below:
        </NxP>
        <dl className="nx-list nx-list--description-list">
          <SpacingDemo spacingVar="--nx-spacing-base" />
          <SpacingDemo spacingVar="--nx-spacing-2x" />
          <SpacingDemo spacingVar="--nx-spacing-3x" />
          <SpacingDemo spacingVar="--nx-spacing-4x" />
          <SpacingDemo spacingVar="--nx-spacing-6x" />
          <SpacingDemo spacingVar="--nx-spacing-8x" />
          <SpacingDemo spacingVar="--nx-spacing-12x" />
          <SpacingDemo spacingVar="--nx-spacing-16x" />
          <SpacingDemo spacingVar="--nx-spacing-20x" />
        </dl>
      </GalleryTile>
      <GalleryTile title="Property Value Properties" id="css-property-values-tile">
        <NxP>
          Most RSC custom properties which are meant to be used as values for specific CSS properties follow a naming
          pattern consisting of the <NxCode>--nx-</NxCode> prefix, the name of the property to which they apply, and
          then the name of the element and/or situation to which they apply. These variables are as follows:
        </NxP>
        <dl className="nx-list nx-list--description-list">
          <PropertyDocItem propertyVar="--nx-width-page-max">
            The maximum content width in Legacy Page Header based page layouts. In those layouts, when the viewport
            is wider than this value, the page content area (including any sidebar) will stay at this width and
            become horizontally centered. This is not used in the newer Global Sidebar page layouts which
            span the full width of the viewport at any size.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-width-page-min">
            The minimum supported width for the viewport. If the viewport is shrunk smaller than this, a page-level
            horizontal scrollbar will appear, ensuring that the content always has at least this much width available.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-width-content-proportion">
            The proportion of horizontal space alloted to the main content area when an adjacent sidebar is present
            in Legacy Page Header based page layouts (and accordingly, the complement of the proportion alloted
            to the sidebar itself). This value is a unitless number between zero and one and is thus not suitable
            for use as a <NxCode>width</NxCode> value by itself. Rather, it is intended to be used in dynamic
            calculations of widths (e.g. CSS <NxCode>calc()</NxCode> functions).
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-width-content">
            The percentage width alloted to the main content area of the page in Legacy Page Header page layouts when
            a sidebar is also present. Essentially, the same as <NxCode>--nx-width-content-proportion</NxCode> but
            expressed as a percentage instead of a proportion out of 1.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-width-sidebar">
            The percentage width alloted to the sidebar in Legacy Page Header page layouts.
            Essentially, the complement of <NxCode>--nx-width-content</NxCode>.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-width-scrollbar">
            The width that RSC assumes a scrollbar will be. Note that this assumption in only a reasonable guess,
            since browsers vary in how they present scrollbars. RSC styles do not rely on this in a way that breaks
            if it is incorrect.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-width-form-element-normal">
            The standard width of a form element such as a text input.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-width-form-element-wide">
            The standard width for the "wide" variant of a form element such as a text input.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-width-form-element-short">
            The standard width for the "short" variant of a form element such as a text input.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-font-size">
            The standard RSC font size.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-font-size-s">
            The standard small variant of the RSC font size.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-font-size-xs">
            The standard extra-small variant of the RSC font size.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-font-size-heading-1">
            The standard font size for <NxCode>h1</NxCode> elements that use RSC styles.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-font-size-heading-2">
            The standard font size for <NxCode>h2</NxCode> elements that use RSC styles.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-font-size-heading-3">
            The standard font size for <NxCode>h3</NxCode> elements that use RSC styles.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-font-size-heading-4">
            The standard font size for <NxCode>h4</NxCode> elements that use RSC styles.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-line-height">
            The standard line height for RSC elements.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-z-index-submit-mask">
            The z-index of <NxCode>NxSubmitMask</NxCode> elements. This is provided as a variable in case downstream
            code wants to set the z-index of another element relative to it (e.g. to ensure that that other element
            always appears above, or always below, the submit mask).
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-z-index-modal-backdrop">
            <NxP>
              The z-index of the backdrop of <NxCode>NxModal</NxCode> elements. This is provided as a variable in
              case downstream code wants to set the z-index of another element relative to it (e.g. to ensure that
              that other element always appears above, or always below, the modal).
            </NxP>
            <NxWarningAlert>
              Note that in browsers with proper support for HTML <NxCode>&lt;dialog&gt;</NxCode> elements, the
              modal will be rendered into the{' '}
              <NxTextLink href="https://fullscreen.spec.whatwg.org/#top-layer" external>top layer</NxTextLink>
              , making its z-index irrelevant.
            </NxWarningAlert>
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-z-index-drawer">
            <NxP>
              The z-index of <NxCode>NxDrawer</NxCode> component. This is provided as a variable in
              case downstream code wants to set the z-index of another element relative to it (e.g. to ensure that
              that other element always appears above, or always below, the drawer).
            </NxP>
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-z-index-toast">
            The z-index of <NxCode>NxToast</NxCode> elements. This is provided as a variable in case downstream
            code wants to set the z-index of another element relative to it (e.g. to ensure that that other element
            always appears above, or always below, the toast).
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-border-radius">
            The typical border-radius applied to RSC elements with rounded borders.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-border-default">
            Standard border styles for higher-level elements.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-border-secondary">
            Secondary border styles generally used inside components or after a default border.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-border-subsection">
            <NxWarningAlert>
              Deprecated. Standard border styles for lower-level elements such as tile subsections.
            </NxWarningAlert>
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-box-shadow-focus">
            The standard box-shadow to apply to focused elements in addition to a border or outline.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-box-shadow-dropdown">
            The standard box-shadow to apply to dropdown elements.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-drop-shadow-focus">
            Again, the standard shadow to apply to focused elements in addition to a border or outline. On elements
            where <NxCode>box-shadow</NxCode> isn't supported, such as SVG elements, use this instead
            as the value of a <NxCode>filter</NxCode> <NxCode>drop-shadow</NxCode>.
          </PropertyDocItem>
        </dl>
      </GalleryTile>
      <GalleryTile title="Semantic Color Properties">
        <NxP>
          RSC has a number of color defined in custom properties which are intended for specific purposes. These
          properties' names take the following form: <NxCode>--nx-color[-element?][-property?][-circumstance?]</NxCode>.
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Property Name</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
              <NxTable.Cell>Sample</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <ColorDocRow colorVar="--nx-color-border">
              Color for standard higher-level borders
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-border-secondary">
              Color for secondary borders
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-subsection-border">
              <NxWarningAlert>
                Deprecated. Standard border color for lower-level elements such as tile subsections.
              </NxWarningAlert>
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-component-background">
              The background color of most RSC components including tiles and form fields. Note that many RSC
              components simply have transparent backgrounds. For those that have an actual color however, it is
              typically this value.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-site-background">
              The background color of the page as a whole within RSC styles.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-form-element-border">
              The standard color for the borders of form fields (such as text inputs) in their default state.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-form-element-border-pristine">
              <NxWarningAlert>
                Deprecated: We no longer want to show when input is in a pristine state.
                The standard color for the borders of form fields
                (such as text inputs) in their pristine state.
              </NxWarningAlert>
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-interactive-background-selected">
              The standard color for the backgrounds of interactive elements (such as clickable list rows) when they
              are selected.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-interactive-background-active">
              The standard color for the backgrounds of interactive elements (such as clickable list rows) when they
              are active (in the <NxCode>:active</NxCode> sense – while the mouse is depressed on them).
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-interactive-background-hover">
              The standard color for the backgrounds of interactive elements (such as clickable list rows) when they
              are hovered.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-interactive-background-disabled">
              The standard color for the backgrounds of interactive elements (such as clickable list rows and form
              fields) when they are disabled.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-interactive-border-disabled">
              The standard color for the borders of interactive elements (such as clickable list rows and form fields)
              when they are disabled.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-interactive-border-focus">
              The standard color for the borders/outlines of interactive elements (such as clickable list rows and
              form fields) when they are focused.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-interactive-shadow-focus">
              The standard color for the box-shadow/drop-shadow of interactive elements (such as clickable list rows and
              form fields) when they are focused.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-text">The standard text color within RSC.</ColorDocRow>
            <ColorDocRow colorVar="--nx-color-text-stark">
              The standard dark variant of the text color within RSC.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-text-dark">
              <NxWarningAlert>
                Deprecated. Please use <NxCode>--nx-color-text-stark</NxCode>.
              </NxWarningAlert>
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-text-disabled">
              The standard color for text within disabled elements in RSC.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-link">
              The standard color for hyperlink text within RSC.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-link-active">
              The standard color for active hyperlink text within RSC.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-link-hover">
              The standard color for hovered hyperlink text within RSC.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-link-disabled">
              The standard color for disabled hyperlink text within RSC.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-threat-unspecified">
              The color associated with threats of an unspecified severity.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-threat-none">
              The color associated with threats of zero severity.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-threat-low">
              The color associated with threats of low severity.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-threat-moderate">
              The color associated with threats of moderate severity.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-threat-severe">
              The color associated with threats of severe severity.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-threat-critical">
              The color associated with threats of critical severity.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-validation-valid">
              The color used on validatable form fields when they are valid.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-validation-invalid">
              The color used on validatable form fields when they are invalid.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-info">
              The color used on the <NxCode>NxAlert</NxCode> info icon and for other equivalent icons and purposes.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-success">
              The color used on the <NxCode>NxAlert</NxCode> success icon and for other equivalent icons and purposes.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-warning">
              The color used on the <NxCode>NxAlert</NxCode> warning icon and for other equivalent icons and purposes.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-error">
              The color used on the <NxCode>NxAlert</NxCode> error icon and for other equivalent icons and purposes.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-binary-donut-chart-background-fill">
              The color used on the <NxCode>NxBinaryDonutChart</NxCode> background.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-binary-donut-chart-arc-stroke">
              The color used on the <NxCode>NxBinaryDonutChart</NxCode> arc color.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-global-header-border">
              The border color used on the <NxCode>NxGlobalHeader</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-page-header-background">
              The background color used on the <NxCode>NxPageHeader</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-page-header-border">
              The bottom border color used on the <NxCode>NxPageHeader</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-page-header-divider">
              The color used on the <NxCode>NxPageHeader</NxCode> vertical divider.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-page-header-product-name-text">
              The text color used on the <NxCode>NxPageHeader</NxCode> Product Name.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-page-header-link">
              The text color used on the <NxCode>NxPageHeader</NxCode> links.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-tooltip-background">
              The background color used on the <NxCode>NxTooltip</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-tooltip-text">
              The text color used on the <NxCode>NxTooltip</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-code-background">
              The background color used on the <NxCode>NxCode</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-code-border">
              The border color used on the <NxCode>NxCode</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-code-text">
              The text color used on the <NxCode>NxCode</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-threat-indicator-legend-header-text">
              The text color used on the <NxCode>NxThreatIndicatorLegend</NxCode> header.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-threat-level-text">
              The text color used on <NxCode>NxThreatCounter</NxCode> and
              the <NxCode>NxThreatIndicatorLegend</NxCode> items.
            </ColorDocRow>
          </NxTable.Body>
        </NxTable>
      </GalleryTile>
      <GalleryTile title="Swatch Color Properties">
        <NxP>
          While the color properties described in the previous section are higher-level, with specific semantics
          around their use, there is another set of lower level color properties defined in terms of color swatches and
          palettes. For information on these properties, see
          the <NxTextLink href="#/pages/Color%20Palettes">Color Palettes</NxTextLink> page.
        </NxP>
      </GalleryTile>
      <GalleryTile title="SCSS Variables and Versioning Guarantees">
        <NxP>
          Previous versions of RSC defined a wide range of SCSS variables that were never properly delineated or
          documented in terms of which were public to downstream projects and which were internal to the library. In
          RSC 7.0.0, most of those variables were migrated to the CSS custom properties documented above. Any SCSS
          variables still present within the RSC codebase are now officially private and subject to change in any way in
          any future version of the library. The CSS custom properties on the other hand are all public and their names
          and meanings will not be changed (aside from additions) except in new major versions. Note however that their
          values are subject to change at any time.
        </NxP>
      </GalleryTile>
      <GalleryTile title="Nomenclature: Custom Properties or Variables?">
        <NxP>
          This same feature, the ability to define arbitrary named values in CSS using property names starting
          with <NxCode>--</NxCode>, and then referred to in <NxCode>var()</NxCode> expressions, is widely referred to
          as both "custom properties" and "variables".  Even within
          the <NxTextLink href="https://www.w3.org/TR/css-variables-1/" external>specification</NxTextLink> both terms
          are used.
        </NxP>
        <NxP>
          The most-correct usage of the terms appears to be that they both refer to basically the same feature from
          two different sides. "Custom properties" refers to the definition of custom name-value bindings within CSS
          using the <NxCode>--foo: blue</NxCode> syntax, while "variables" refers to the <em>usage</em> of custom
          properties within <NxCode>var()</NxCode> expressions to substitute the named value into another CSS
          property definition. They are defined as properties, but used as variables.
        </NxP>
        <NxP>
          It is worth noting that as the spec points out, there are conceivably other uses of custom properties beside
          CSS variables. For instance, arbitrary text could be included as the property value and then extracted via
          JavaScript using the CSSOM APIs. In an extreme example from the spec, the value of a custom property could
          even be a snippet of JavaScript code which a script extracts and evals!{' '}
          <small className="gallery-small-parenthetical">(What a horrible idea, don't do this.)</small>
        </NxP>
      </GalleryTile>
    </>
  );
};

export default CssVariablesPage;
