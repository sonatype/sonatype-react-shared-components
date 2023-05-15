/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ReactNode, useEffect, useState } from 'react';
import { NxTextLink, NxP, NxCode, NxWarningAlert, NxTable, NxDescriptionList } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryTile } from '../../gallery-components/GalleryTiles';

import './CssVariablesPage.scss';

const SpacingDemo = ({ spacingVar }: { spacingVar: string }) =>
  <NxDescriptionList.Item>
    <NxDescriptionList.Term><NxCode>{spacingVar}</NxCode></NxDescriptionList.Term>
    <NxDescriptionList.Description>
      <div className="gallery-spacing-demo" style={{ width: `var(${spacingVar})` }} />
    </NxDescriptionList.Description>
  </NxDescriptionList.Item>;

const PropertyDocItem = ({ propertyVar, children }: { propertyVar: string, children: ReactNode }) =>
  <NxDescriptionList.Item>
    <NxDescriptionList.Term><NxCode>{propertyVar}</NxCode></NxDescriptionList.Term>
    <NxDescriptionList.Description>{children}</NxDescriptionList.Description>
  </NxDescriptionList.Item>;

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
      <GalleryTile title="Spacing Properties" id="css-spacing-properties">
        <NxP>
          RSC has a set of spacing properties which are intended to be used for margin and padding values. They are
          not intended to be used for sizing of heights and widths. These properties are all simple multiples of
          a base spacing value {baseSpacing != null ? <> (<NxCode>{baseSpacing}</NxCode>)</> : null}, and are named
          based on their multiple. The base value itself is available
          as the <NxCode>--nx-spacing-base</NxCode> custom property. The others all follow a similar pattern
          but with a "<NxCode>multiplier</NxCode>x" suffix instead of "base", as seen in the sizing chart below:
        </NxP>
        <NxDescriptionList>
          <SpacingDemo spacingVar="--nx-spacing-base" />
          <SpacingDemo spacingVar="--nx-spacing-2x" />
          <SpacingDemo spacingVar="--nx-spacing-3x" />
          <SpacingDemo spacingVar="--nx-spacing-4x" />
          <SpacingDemo spacingVar="--nx-spacing-6x" />
          <SpacingDemo spacingVar="--nx-spacing-8x" />
          <SpacingDemo spacingVar="--nx-spacing-12x" />
          <SpacingDemo spacingVar="--nx-spacing-16x" />
          <SpacingDemo spacingVar="--nx-spacing-20x" />
        </NxDescriptionList>
      </GalleryTile>
      <GalleryTile title="Property Value Properties" id="css-property-values-tile">
        <NxP>
          Most RSC custom properties which are meant to be used as values for specific CSS properties follow a naming
          pattern consisting of the <NxCode>--nx-</NxCode> prefix, the name of the property to which they apply, and
          then the name of the element and/or situation to which they apply. These variables are as follows:
        </NxP>
        <NxDescriptionList>
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
          <PropertyDocItem propertyVar="--nx-border-width">
            The standard border-width value.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-border-width-alt">
            An alternative border-width value that is identical to <NxCode>--nx-border-width</NxCode> in light mode,
            but thicker in dark mode.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-focus-outline-width">
            The width of the outline when an element is focused.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-focus-outline-offset">
            The spacing between the focus outline and the element's border or outer edge (if no border is present).
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-box-shadow-focus">
            <NxWarningAlert>
              Deprecated: We no longer use a box-shadow when elements are focused.
              The standard box-shadow to apply to focused elements in addition to a border or outline.
            </NxWarningAlert>
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-box-shadow-dropdown">
            The standard box-shadow to apply to dropdown elements.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-drop-shadow-focus">
            <NxWarningAlert>
              Deprecated: We no longer use a drop-shadow/box-shadow when elements are focused.
              Again, the standard shadow to apply to focused elements in addition to a border or outline. On elements
              where <NxCode>box-shadow</NxCode> isn't supported, such as SVG elements, use this instead
              as the value of a <NxCode>filter</NxCode> <NxCode>drop-shadow</NxCode>.
            </NxWarningAlert>
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-border-grid">
            The standard border style for <NxCode>nx-grid</NxCode> vertical borders.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-border-width-global-sidebar">
            The width of the border along the right side of the global sidebar.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-focus-outline-offset-global-sidebar-link">
            The distance that the focus outline should be inset with a <NxCode>NxGlobalSidebar</NxCode>
            navigation item.
          </PropertyDocItem>
          <PropertyDocItem propertyVar="--nx-focus-outline-offset-global-sidebar-toggle">
            The distance that the focus outline should be inset with the <NxCode>NxGlobalSidebar</NxCode>
            toggle button.
          </PropertyDocItem>
        </NxDescriptionList>
      </GalleryTile>
      <GalleryTile title="Semantic Color Properties" id="css-semantic-color-properties">
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
            <ColorDocRow colorVar="--nx-color-disabled">
              Generic disabled color.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-disabled-background">
              Generic disabled background color.
            </ColorDocRow>
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
            <ColorDocRow colorVar="--nx-color-background-success">
              The background color used by certain components to signify success.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-background-error">
              The background color used by certain components to signify an error.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-form-element-border">
              <NxWarningAlert>
                Deprecated: This variable is now replaced by <NxCode>--nx-color-interactive-border</NxCode>
                The standard color for the borders of form fields (such as text inputs) in their default state.
              </NxWarningAlert>
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
            <ColorDocRow colorVar="--nx-color-interactive-border">
              The standard color for the borders of interactive elements (such as clickable list rows and form fields)
              in their default state.
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
              <NxWarningAlert>
                Deprecated: We no longer use a box-shadow/drop-shadow when elements are focused.
                The standard color for the box-shadow/drop-shadow of interactive elements (such as clickable list rows
                and form fields) when they are focused.
              </NxWarningAlert>
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
            <ColorDocRow colorVar="--nx-color-text-placeholder">
              The standard color for placeholder text within a text input.
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
            <ColorDocRow colorVar="--nx-color-threat-unspecified-text">
              The text color for use on a threat level "unspecified" background.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-threat-none-text">
              The text color for use on a threat level "none" background.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-threat-low-text">
              The text color for use on a threat level "low" background.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-threat-moderate-text">
              The text color for use on a threat level "moderate" background.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-threat-severe-text">
              The text color for use on a threat level "severe" background.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-threat-critical-text">
              The text color for use on a threat level "critical" background.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-validation-valid">
              The color used on validatable form fields when they are valid.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-validation-invalid">
              The color used on validatable form fields when they are invalid.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-success">
              The color used for the success icon and for other equivalent icons and purposes.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-error">
              The color used for the error icon and for other equivalent icons and purposes.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-info">
              <NxWarningAlert>
                Deprecated. Please use <NxCode>--nx-color-alert-info-icon</NxCode>.
              </NxWarningAlert>
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-warning">
              <NxWarningAlert>
                Deprecated. Please use <NxCode>--nx-color-alert-warning-icon</NxCode>.
              </NxWarningAlert>
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-success">
              <NxWarningAlert>
                Deprecated. Please use <NxCode>--nx-color-success</NxCode>.
              </NxWarningAlert>
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-error">
              <NxWarningAlert>
                Deprecated. Please use <NxCode>--nx-color-error</NxCode>.
              </NxWarningAlert>
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-background-mask">
              The color of the viewport-wide mask that falls behind elements such as <NxCode>NxModal</NxCode> and{' '}
              <NxCode>NxSubmitMask</NxCode>.
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
            <ColorDocRow colorVar="--nx-color-global-sidebar-background">
              The background color of <NxCode>NxGlobalSidebar</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-global-sidebar-border">
              The border color of <NxCode>NxGlobalSidebar</NxCode>. Note that in light mode this
              has no effect as the border has a width of 0.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-global-sidebar-separator">
              The color of the vertical separator borders within <NxCode>NxGlobalSidebar</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-global-sidebar-border-focus">
              The border color of focused elements within <NxCode>NxGlobalSidebar</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-global-sidebar-toggle">
              The color of the icon within the <NxCode>NxGlobalSidebar</NxCode> toggle button.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-global-sidebar-background-hover">
              The background color of the <NxCode>NxGlobalSidebar</NxCode> toggle button and navigation links on hover.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-global-sidebar-toggle-background-active">
              The background color of the <NxCode>NxGlobalSidebar</NxCode> toggle button on activation.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-global-sidebar-toggle-outline">
              The outline color of the toggle button in <NxCode>NxGlobalSidebar</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-global-sidebar-toggle-inner-outline">
              In dark mode, the <NxCode>NxGlobalSidebar</NxCode> toggle button has an inner outline
              when focused and hovered. This variable defines that color.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-global-sidebar-link-active">
              The background color of <NxCode>NxGlobalSidebar</NxCode> navigation link items on activation.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-global-sidebar-link-selected">
              The background color of the selected <NxCode>NxGlobalSidebar</NxCode> navigation link item.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-global-sidebar-link-text">
              The default text color of the <NxCode>NxGlobalSidebar</NxCode> navigation link items.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-global-sidebar-link-text-interactive">
              The text color of the <NxCode>NxGlobalSidebar</NxCode> navigation link items on hover,
              activation, or selection.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-global-sidebar-link-border-focus">
              The border color of <NxCode>NxGlobalSidebar</NxCode> link items on focus.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-global-sidebar-link-icon">
              The default color of the <NxCode>NxGlobalSidebar</NxCode> navigation link item icons.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-global-sidebar-link-icon-interactive">
              The color of the <NxCode>NxGlobalSidebar</NxCode> navigation link item icons on hover,
              activation, or selection.
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
            <ColorDocRow colorVar="--nx-color-policy-indicator-icon">
              The color for the threat level icon on <NxCode>NxPolicyViolationIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-policy-indicator-text">
              The text color used for <NxCode>NxPolicyViolationIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-counter">
              The border color used on the default state and the background-color used on the active state
              of elements with the <NxCode>nx-counter</NxCode> class.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-counter-active-text">
              The text color used on the active state of elements with the <NxCode>nx-counter</NxCode> class.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-tab-background-hover">
              The background color used on the hover state of a tab in <NxCode>NxTabs</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-primary-button-background">
              The background color of primary buttons.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-primary-button-background-hover">
              The background color of primary buttons on hover.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-primary-button-background-active">
              The background color of primary buttons on activation/click.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-primary-button-focus-outline">
              The color of the focus outline for primary buttons.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-primary-button-text">
              The text color of primary buttons.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-primary-segmented-button-divider">
              The color of the divider for primary segmented buttons.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-secondary-button-background">
              The background color of secondary buttons.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-secondary-button-background-hover">
              The background color of secondary buttons on hover.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-secondary-button-background-active">
              The background color of secondary buttons on activation/click.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-secondary-button-border">
              The border color of secondary buttons.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-secondary-button-border-active">
              The border color of secondary buttons on activation/click.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-secondary-button-focus-outline">
              The color of the focus outline for secondary buttons.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-secondary-button-text">
              The text color of secondary buttons.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-secondary-button-text-hover">
              The text color of secondary buttons on hover.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-tertiary-button-background-hover">
              The background color of tertiary buttons on hover.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-tertiary-button-background-active">
              The background color of tertiary buttons on activation/click.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-tertiary-button-border">
              The border color of tertiary buttons.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-tertiary-button-border-active">
              The border color of tertiary buttons on activation/click.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-tertiary-button-focus-outline">
              The color of the focus outline for tertiary buttons.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-tertiary-button-text">
              The text color of tertiary buttons.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-error-button-background">
              The background color of error buttons.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-error-button-background-hover">
              The background color of error buttons on hover.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-error-button-background-active">
              The background color of error buttons on activation/click.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-error-button-focus-outline">
              The color of the focus outline for error buttons.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-error-button-text">
              The text color of error buttons.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-disabled-button-background">
              The background color of disabled buttons.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-disabled-button-border">
              The border color of disabled buttons.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-disabled-button-text">
              The text color of disabled buttons.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-button-icon-only-background-selected">
              The background color of icon only buttons in <NxCode>NxIconDropdown</NxCode> when the dropdown is open.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-button-icon-only-border-focus">
              The border color of icon only buttons on focus.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-dropdown-menu-text-hover">
              The text color of <NxCode>nx-dropdown-menu</NxCode> item when hovered.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-dropdown-menu-background">
              The default background color of <NxCode>nx-dropdown-menu</NxCode> class.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-dropdown-menu-background-hover">
              The default hover state background color of <NxCode>nx-dropdown-menu</NxCode> class.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-dropdown-menu-background-active">
              The default active state background color of <NxCode>nx-dropdown-menu</NxCode> class.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-progress-background">
              The background color for <NxCode>NxMeter</NxCode>, <NxCode>NxProgressBar</NxCode> and
              {' '}<NxCode>NxBinaryDonutChart</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-progress-fill">
              The fill color for <NxCode>NxMeter</NxCode>, <NxCode>NxProgressBar</NxCode> and
              {' '}<NxCode>NxBinaryDonutChart</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-progress-bar-text-success">
              The text color for <NxCode>NxProgressBar</NxCode>'s label when <NxCode>NxProgressBar</NxCode> is at 100%.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-progress-bar-text-error">
              The text color for <NxCode>NxProgressBar</NxCode>'s label when <NxCode>NxProgressBar</NxCode> has an
              error.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-progress-bar-icon-error">
              The icon color for <NxCode>NxProgressBar</NxCode>'s label when <NxCode>NxProgressBar</NxCode> has an
              error. This color differs from <NxCode>--nx-color-progress-bar-text-error</NxCode> in dark mode.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-progress-bar-counter-text-success">
              The text color for <NxCode>NxProgressBar</NxCode>'s counter when <NxCode>NxProgressBar</NxCode> is at
              100%.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-progress-bar-counter-border-success">
              The border color for <NxCode>NxProgressBar</NxCode>'s counter when <NxCode>NxProgressBar</NxCode> is at
              100%. In dark mode, the border is the same color as the counter's background.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-progress-bar-counter-text-error">
              The text color for <NxCode>NxProgressBar</NxCode>'s counter when <NxCode>NxProgressBar</NxCode> has an
              error.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-progress-bar-counter-border-error">
              The border color for <NxCode>NxProgressBar</NxCode>'s counter when <NxCode>NxProgressBar</NxCode> has an
              error. In dark mode, the border is the same color as the counter's background.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-blockquote-background">
              The default background color of <NxCode>nx-blockquote</NxCode> class.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-pre-border">
              The default border color of <NxCode>nx-pre</NxCode> class.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-text">
              The text color used on <NxCode>NxAlert</NxCode>s.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-link">
              The color for hyperlink text within <NxCode>NxAlert</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-link-focus">
              The color for focus border of hyperlink text within <NxCode>NxAlert</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-link-hover">
              The color for hovered hyperlink text within <NxCode>NxAlert</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-link-active">
              The color for active hyperlink text within <NxCode>NxAlert</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-close-btn">
              The color of the<NxCode>NxAlert</NxCode> close button.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-close-btn-focus">
              The focus outline color of the <NxCode>NxAlert</NxCode> close button.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-info-background">
              The background color of the <NxCode>NxInfoAlert</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-info-border">
              The border color of the <NxCode>NxInfoAlert</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-info-icon">
              The color of the <NxCode>NxInfoAlert</NxCode> icon.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-info-close-btn-active">
              The color of the <NxCode>NxInfoAlert</NxCode> close button on activation/click.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-info-close-btn-hover">
              The color of the <NxCode>NxInfoAlert</NxCode> close button on hover.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-success-background">
              The background color of the <NxCode>NxSuccessAlert</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-success-border">
              The border color of the <NxCode>NxSuccessAlert</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-success-icon">
              The color of the <NxCode>NxSuccessAlert</NxCode> icon.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-success-close-btn-active">
              The color of the <NxCode>NxSuccessAlert</NxCode> close button on activation/click.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-success-close-btn-hover">
              The color of the <NxCode>NxSuccessAlert</NxCode> close button on hover.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-warning-background">
              The background color of the <NxCode>NxWarningAlert</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-warning-border">
              The border color of the <NxCode>NxWarningAlert</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-warning-icon">
              The color of the <NxCode>NxWarningAlert</NxCode> icon.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-warning-close-btn-active">
              The color of the <NxCode>NxWarningAlert</NxCode> close button on activation/click.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-warning-close-btn-hover">
              The color of the <NxCode>NxWarningAlert</NxCode> close button on hover.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-error-background">
              The background color of the <NxCode>NxErrorAlert</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-error-border">
              The border color of the <NxCode>NxErrorAlert</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-error-icon">
              The color of the <NxCode>NxErrorAlert</NxCode> icon.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-error-close-btn-active">
              The color of the <NxCode>NxErrorAlert</NxCode> close button on activation/click.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-alert-error-close-btn-hover">
              The color of the <NxCode>NxErrorAlert</NxCode> close button on hover.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-file-upload-selected-background">
              The background color of the selected file section of <NxCode>NxFileUpload</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-file-upload-selected-border">
              The border color of the selected file section of <NxCode>NxFileUpload</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-file-upload-selected-text">
              The text color of the selected file section of <NxCode>NxFileUpload</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-file-upload-selected-dismiss-text">
              The text/icon color of the dismiss button of <NxCode>NxFileUpload</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-file-upload-selected-dismiss-background-hover">
              The background color of the dismiss button of <NxCode>NxFileUpload</NxCode> on hover.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-file-upload-selected-dismiss-border-hover">
              The border color of the dismiss button of <NxCode>NxFileUpload</NxCode> on hover.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-file-upload-selected-dismiss-background-active">
              The background color of the dismiss button of <NxCode>NxFileUpload</NxCode> on click.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-policy-threat-slider-border-disabled">
              The disabled border color of <NxCode>NxPolicyThreatSlider</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-policy-threat-slider-background-disabled">
              The disabled background color of <NxCode>NxPolicyThreatSlider</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-policy-threat-slider-text-disabled">
              The disabled text color of <NxCode>NxPolicyThreatSlider</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-policy-threat-slider-text">
              The default text color of <NxCode>NxPolicyThreatSlider</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-table-header-background">
              The background color of the <NxCode>NxTable</NxCode> header.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-table-row-background-hover">
              The background color of an <NxCode>NxTable</NxCode> row on hover.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-table-sort-icon-active">
              The color of the sort icon in <NxCode>NxTable</NxCode> header when active.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-list-background-hover">
              The background color of the list item of <NxCode>NxList</NxCode> on hover.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-list-text">
              The text color of the list item of <NxCode>NxList</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-list-text-selected">
              The selected text color of the list item of <NxCode>NxList</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-list-icon">
              The icon color of the list item of <NxCode>NxList</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-pagination-tertiary-border-active">
              The border color of tertiary buttons in <NxCode>NxPagination</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-pagination-tertiary-border-hover">
              The hover border color of tertiary buttons in <NxCode>NxPagination</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-pagination-tertiary-text-hover">
              The hover text color of tertiary buttons in <NxCode>NxPagination</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-pagination-tertiary-text-active">
              The active text color of tertiary buttons in <NxCode>NxPagination</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-tree-line">
              The color of the lines which connect items within <NxCode>NxTree</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-radio-checkbox-selected">
              The default selected color for radios and checkboxes.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-radio-disabled-border">
              The default border color for disabled <NxCode>NxRadio</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-radio-disabled-ring">
              The default ring color for disabled <NxCode>NxRadio</NxCode>.
              The ring is the annulus between the dot and the border of the radio.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-radio-disabled-dot">
              The default dot color for disabled <NxCode>NxRadio</NxCode>.
              The dot is the innermost circle in the concentric circles of the radio.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-checkbox-disabled-background">
              The default background color for disabled <NxCode>NxCheckbox</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-radio-disabled-checked-dot">
              The default background color for disabled and checked <NxCode>NxRadio</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-checkbox-disabled-inner-border">
              The default inner border color for disabled <NxCode>NxCheckbox</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-checkbox-disabled-icon">
              The default checkmark icon color for disabled <NxCode>NxCheckbox</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-toggle-track-disabled">
              The default track color for disabled <NxCode>NxToggle</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-toggle-handle-disabled">
              The default handle color for disabled <NxCode>NxToggle</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-toggle-off-border">
              The default border color for off <NxCode>NxToggle</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-toggle-off-border-hover">
              The default border color when hovered for off <NxCode>NxToggle</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-toggle-off-track">
              The default track color for <NxCode>NxToggle</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-toggle-off-track-hover">
              The default track color when hovered for off <NxCode>NxToggle</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-toggle-off-handle">
              The default handle color for off <NxCode>NxToggle</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-toggle-off-handle-hover">
              The default handle color when hovered for off <NxCode>NxToggle</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-toggle-on-border">
              The default border color for on <NxCode>NxToggle</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-toggle-on-border-hover">
              The default border color when hovered for on <NxCode>NxToggle</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-toggle-on-track">
              The default track color for on <NxCode>NxToggle</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-toggle-on-track-hover">
              The default track color when hovered for on <NxCode>NxToggle</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-toggle-on-handle">
              The default handle color for on <NxCode>NxToggle</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-transfer-list-item-list-background">
              The background color of the list section of a transfer list.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-transfer-list-item-background">
              The default background color of a transfer list item.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-transfer-list-item-background-hover">
              The hover background color of a transfer list item.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-transfer-list-item-background-active">
              The active background color of a transfer list item.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-transfer-list-item-border">
              The default border color of a transfer list item.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-transfer-list-item-border-hover">
              The hover border color of a transfer list item.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-transfer-list-item-border-active">
              The active border color of a transfer list item.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-transfer-list-item-text">
              The default text color of a transfer list item.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-transfer-list-item-text-hover-active">
              The text color of a transfer list item on hover or activation.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-negative-background">
              The default background color of a negative <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-negative-border">
              The default border color of a negative <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-negative-text">
              The default text color of a negative <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-negative-icon-background">
              The default background color of the status icon of a negative <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-negative-icon-border">
              The default border color of the status icon of a negative <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-intermediate-background">
              The default background color of an intermediate <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-intermediate-border">
              The default border color of an intermediate <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-intermediate-text">
              The default text color of an intermediate <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-intermediate-icon-background">
              The default background color of the status icon of an intermediate <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-intermediate-icon-border">
              The default border color of the status icon of an intermediate <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-positive-background">
              The default background color of a positive <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-positive-border">
              The default border color of a positive <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-positive-text">
              The default text color of a positive <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-positive-icon-background">
              The default background color of the status icon of a positive <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-positive-icon-border">
              The default border color of the status icon of a positive <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-error-background">
              The default background color of an error <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-error-border">
              The default border color of an error <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-error-text">
              The default text color of an error <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-error-icon-background">
              The default background color of the status icon of an error <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-status-indicator-error-icon-border">
              The default border color of the status icon of an error <NxCode>NxStatusIndicator</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-collapsible-items-sidebar-background-hover">
              The default hover background color of <NxCode>NxCollapsibleItem</NxCode> when placed
              within <NxCode>.nx-page-sidebar</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-collapsible-items-sidebar-background-active">
              The default active background color of <NxCode>NxCollapsibleItem</NxCode> when placed
              within <NxCode>.nx-page-sidebar</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-accordion-header-divider">
              The color of the divider that separates the header and content in <NxCode>NxAccordion</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-accordion-container">
              The background color of the <NxCode>NxAccordion</NxCode> container in <NxCode>NxTile</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-small-threat-counter-zero-background">
              The background color of the <NxCode>NxSmallThreatCounter</NxCode> with a value of 0.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-small-threat-counter-zero-text">
              The text color of the <NxCode>NxSmallThreatCounter</NxCode> with a value of 0.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-drawer-background">
              The background color of <NxCode>NxDrawer</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-drawer-box-shadow">
              The color of the box-shadow for <NxCode>NxDrawer</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-system-notice-background">
              The default background color for <NxCode>NxSystemNotice</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-system-notice-background-alert">
              The background color for <NxCode>NxSystemNotice</NxCode>s using
              the <NxCode>nx-system-notice--alert</NxCode> class.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-system-notice-text">
              The text color for <NxCode>NxSystemNotice</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-chart-line">
              The value used for line colors within the <NxCode>NIVO_THEME</NxCode> export.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-chart-text">
              The value used for text colors within the <NxCode>NIVO_THEME</NxCode> export.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-color-picker-border-focus">
              The focus border color of <NxCode>NxColorPicker</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-color-picker-check-icon">
              The color of the check icon of <NxCode>NxColorPicker</NxCode>.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-chart-data-1">
              The first of eight colors meant to be used for chart data. For instance, each line in a line graph
              could use a different one of these colors.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-chart-data-2">
              The second of eight colors meant to be used for chart data. For instance, each line in a line graph
              could use a different one of these colors.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-chart-data-3">
              The third of eight colors meant to be used for chart data. For instance, each line in a line graph
              could use a different one of these colors.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-chart-data-4">
              The fourth of eight colors meant to be used for chart data. For instance, each line in a line graph
              could use a different one of these colors.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-chart-data-5">
              The fifth of eight colors meant to be used for chart data. For instance, each line in a line graph
              could use a different one of these colors.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-chart-data-6">
              The sixth of eight colors meant to be used for chart data. For instance, each line in a line graph
              could use a different one of these colors.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-chart-data-7">
              The seventh of eight colors meant to be used for chart data. For instance, each line in a line graph
              could use a different one of these colors.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-chart-data-8">
              The last of eight colors meant to be used for chart data. For instance, each line in a line graph
              could use a different one of these colors.
            </ColorDocRow>
            <ColorDocRow colorVar="--nx-color-page-title-divider">
              The color of the divider between the title and subtitle within <NxCode>NxPageTitle</NxCode>.
            </ColorDocRow>
          </NxTable.Body>
        </NxTable>
      </GalleryTile>
      <GalleryTile title="Swatch Color Properties" id="swatch-color-properties">
        <NxP>
          While the color properties described in the previous section are higher-level, with specific semantics
          around their use, there is another set of lower level color properties defined in terms of color swatches and
          palettes. For information on these properties, see
          the <NxTextLink href="#/pages/Color%20Palettes">Color Palettes</NxTextLink> page.
        </NxP>
      </GalleryTile>
      <GalleryTile title="SCSS Variables and Versioning Guarantees" id="scss-variables-versioning">
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
      <GalleryTile title="Nomenclature: Custom Properties or Variables?" id="nomenclature">
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
