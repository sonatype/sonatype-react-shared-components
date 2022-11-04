/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {PageConfig} from './pageConfigTypes';

const pageConfig: PageConfig = {
  'Alerts and Indicators': {
    'Alert': { content: './components/NxAlert/NxAlertPage', type: 'react' },
    'Stateful Alert': { content: './components/NxStatefulAlert/NxStatefulAlertPage', type: 'react' },
    'Counter': { content: './styles/NxCounter/NxCounterPage', type: 'html' },
    'Load Error': { content: './components/NxLoadError/NxLoadErrorPage', type: 'react' },
    'Load Wrapper': { content: './components/NxLoadWrapper/NxLoadWrapperPage', type: 'react' },
    'Loading Spinner': { content: './components/NxLoadingSpinner/NxLoadingSpinnerPage', type: 'react' },
    'Meter': { content: './components/NxMeter/NxMeterPage', type: 'react' },
    'Policy Violation Indicator': {
      content: './components/NxPolicyViolationIndicator/NxPolicyViolationIndicatorPage',
      type: 'react'
    },
    'Progress Bar': { content: './components/NxProgressBar/NxProgressBarPage', type: 'react' },
    'Submit Mask': { content: './components/NxSubmitMask/NxSubmitMaskPage', type: 'react' },
    'Stateful Submit Mask': { content: './components/NxStatefulSubmitMask/NxStatefulSubmitMaskPage', type: 'react' },
    'System Notice': { content: './styles/NxSystemNotice/NxSystemNoticePage', type: 'html' },
    'Tag': { content: './components/NxTag/NxTagPage', type: 'react' },
    'Threat Counter': { content: './components/NxThreatCounter/NxThreatCounterPage', type: 'react' },
    'Small Threat Counter': { content: './components/NxSmallThreatCounter/NxSmallThreatCounterPage', type: 'react' },
    'Status Indicator': { content: './styles/NxStatusIndicator/NxStatusIndicatorPage', type: 'html' },
    'Threat Indicator': { content: './components/NxThreatIndicator/NxThreatIndicatorPage', type: 'react' },
    'Threat Indicator Legend': {
      content: './components/NxThreatIndicatorLegend/NxThreatIndicatorLegendPage',
      type: 'react'
    },
    'Threat Number': { content: './styles/NxThreatNumber/NxThreatNumberPage', type: 'html' },
    'Toast': { content: './components/NxToast/NxToastPage', type: 'react' },
    'Tooltip': { content: './components/NxTooltip/NxTooltipPage', type: 'react' },
    'Overflow Tooltip': { content: './components/NxOverflowTooltip/NxOverflowTooltipPage', type: 'react' }
  },
  'Buttons and Dropdowns': {
    'Back Button': { content: './components/NxBackButton/NxBackButtonPage', type: 'react' },
    'Breadcrumb': { content: './components/NxBreadcrumb/NxBreadcrumbPage', type: 'react' },
    'Stateful Breadcrumb': { content: './components/NxStatefulBreadcrumb/NxStatefulBreadcrumbPage', type: 'react' },
    'Button': { content: './components/NxButton/NxButtonPage', type: 'react' },
    'Segmented Button': { content: './components/NxSegmentedButton/NxSegmentedButtonPage', type: 'react' },
    'Stateful Segmented Button': {
      content: './components/NxStatefulSegmentedButton/NxStatefulSegmentedButtonPage',
      type: 'react'
    },
    'Close Button': { content: './components/NxCloseButton/NxCloseButtonPage', type: 'react' },
    'Combobox': { content: './components/NxCombobox/NxComboboxPage', type: 'react' },
    'Dropdown': { content: './components/NxDropdown/NxDropdownPage', type: 'react' },
    'Stateful Dropdown': { content: './components/NxStatefulDropdown/NxStatefulDropdownPage', type: 'react' },
    'Filter Dropdown': { content: './components/NxFilterDropdown/NxFilterDropdownPage', type: 'react' },
    'Stateful Filter Dropdown': {
      content: './components/NxStatefulFilterDropdown/NxStatefulFilterDropdownPage',
      type: 'react'
    },
    'Icon Dropdown': { content: './components/NxIconDropdown/NxIconDropdownPage', type: 'react' },
    'Stateful Icon Dropdown': {
      content: './components/NxStatefulIconDropdown/NxStatefulIconDropdownPage',
      type: 'react'
    },
    'Pagination': { content: './components/NxPagination/NxPaginationPage', type: 'react' },
    'Indeterminate Pagination': {
      content: './components/NxIndeterminatePagination/NxIndeterminatePaginationPage',
      type: 'react'
    },
    'Search Dropdown': { content: './components/NxSearchDropdown/NxSearchDropdownPage', type: 'react' },
    'Stateful Search Dropdown': {
      content: './components/NxStatefulSearchDropdown/NxStatefulSearchDropdownPage',
      type: 'react'
    },
    'Text Link': { content: './components/NxTextLink/NxTextLinkPage', type: 'react' }
  },
  'Forms': {
    'Checkbox': { content: './components/NxCheckbox/NxCheckboxPage', type: 'react' },
    'Stateful Checkbox': { content: './components/NxStatefulCheckbox/NxStatefulCheckboxPage', type: 'react' },
    'Code Snippet': { content: './components/NxCodeSnippet/NxCodeSnippetPage', type: 'react' },
    'Collapsible Multi-Select': {
      content: './components/NxCollapsibleMultiSelect/NxCollapsibleMultiSelectPage',
      type: 'react'
    },
    'Stateful Collapsible Multi-Select': {
      content: './components/NxStatefulCollapsibleMultiSelect/NxStatefulCollapsibleMultiSelectPage',
      type: 'react'
    },
    'Collapsible Radio-Select': {
      content: './components/NxCollapsibleRadioSelect/NxCollapsibleRadioSelectPage',
      type: 'react'
    },
    'Stateful Collapsible Radio-Select': {
      content: './components/NxStatefulCollapsibleRadioSelect/NxStatefulCollapsibleRadioSelectPage',
      type: 'react'
    },
    'Color Picker': { content: './components/NxColorPicker/NxColorPickerPage', type: 'react' },
    'Copy To Clipboard': { content: './components/NxCopyToClipboard/NxCopyToClipboardPage', type: 'react' },
    'Date Input': { content: './components/NxDateInput/NxDateInputPage', type: 'react' },
    'Stateful Date Input': { content: './components/NxStatefulDateInput/NxStatefulDateInputPage', type: 'react' },
    'Fieldset': { content: './components/NxFieldset/NxFieldsetPage', type: 'react' },
    'File Upload': { content: './components/NxFileUpload/NxFileUploadPage', type: 'react' },
    'Stateful File Upload': { content: './components/NxStatefulFileUpload/NxStatefulFileUploadPage', type: 'react' },
    'Filter Input': { content: './components/NxFilterInput/NxFilterInputPage', type: 'react' },
    'Form': { content: './components/NxForm/NxFormPage', type: 'react' },
    'Stateful Form': { content: './components/NxStatefulForm/NxStatefulFormPage', type: 'react' },
    'Form Group': { content: './components/NxFormGroup/NxFormGroupPage', type: 'react' },
    'Form Select': { content: './components/NxFormSelect/NxFormSelectPage', type: 'react' },
    'Policy Threat Slider': { content: './components/NxPolicyThreatSlider/NxPolicyThreatSliderPage', type: 'react' },
    'Radio': { content: './components/NxRadio/NxRadioPage', type: 'react' },
    'Search Transfer List': { content: './components/NxSearchTransferList/NxSearchTransferListPage', type: 'react' },
    'Stateful Search Transfer List': {
      content: './components/NxStatefulSearchTransferList/NxStatefulSearchTransferListPage',
      type: 'react'
    },
    'Text Input': { content: './components/NxTextInput/NxTextInputPage', type: 'react' },
    'Stateful Text Input': { content: './components/NxStatefulTextInput/NxStatefulTextInputPage', type: 'react' },
    'Toggle': { content: './components/NxToggle/NxTogglePage', type: 'react' },
    'Stateful Toggle': { content: './components/NxStatefulToggle/NxStatefulTogglePage', type: 'react' },
    'Transfer List': { content: './components/NxTransferList/NxTransferListPage', type: 'react' },
    'Stateful Transfer List': {
      content: './components/NxStatefulTransferList/NxStatefulTransferListPage',
      type: 'react'
    },
    'Transfer List Half': {
      content: './components/NxTransferListHalf/NxTransferListHalfPage',
      type: 'react'
    },
    'Tree View Multi-Select': {
      content: './components/NxTreeViewMultiSelect/NxTreeViewMultiSelectPage',
      type: 'react'
    },
    'Stateful Tree View Multi-Select': {
      content: './components/NxStatefulTreeViewMultiSelect/NxStatefulTreeViewMultiSelectPage',
      type: 'react'
    },
    'Tree View Radio-Select': {
      content: './components/NxTreeViewRadioSelect/NxTreeViewRadioSelectPage',
      type: 'react'
    },
    'Stateful Tee View Radio-Select': {
      content: './components/NxStatefulTreeViewRadioSelect/NxStatefulTreeViewRadioSelectPage',
      type: 'react'
    }
  },
  'Data Presentation': {
    'Binary Donut Chart': { content: './components/NxBinaryDonutChart/NxBinaryDonutChartPage', type: 'react' },
    'Collapsible Items': { content: './components/NxCollapsibleItems/NxCollapsibleItemsPage', type: 'react' },
    'Description List': { content: './components/NxDescriptionList/NxDescriptionListPage', type: 'react' },
    'List': { content: './components/NxList/NxListPage', type: 'react' },
    'Table': { content: './components/NxTable/NxTablePage', type: 'react' },
    'Table Container': { content: './styles/NxTable/NxTableContainerPage', type: 'html' },
    'Tree': { content: './components/NxTree/NxTreePage', type: 'react' },
    'Tree View': { content: './components/NxTreeView/NxTreeViewPage', type: 'react' }
  },
  'Layout': {
    'Form Layout Examples': { content: './styles/NxFormLayout/NxFormLayoutPage', type: 'layout' },
    'Page Layout Examples': { content: './styles/PageLayout/PageLayoutPage', type: 'layout' },
    'Read-Only Grid Tile Layout': { content: './styles/NxReadOnlyGridTile/NxReadOnlyGridTilePage', type: 'layout' },
    'Accordion': { content: './components/NxAccordion/NxAccordionPage', type: 'react' },
    'Stateful Accordion': { content: './components/NxStatefulAccordion/NxStatefulAccordionPage', type: 'react' },
    'Card': { content: './styles/NxCard/NxCardPage', type: 'html' },
    'Divider': { content: './styles/NxDivider/NxDividerPage', type: 'html' },
    'Global Header': { content: './styles/NxGlobalHeader/NxGlobalHeaderPage', type: 'html' },
    'Global Sidebar': { content: './components/NxGlobalSidebar/NxGlobalSidebarPage', type: 'react' },
    'Stateful Global Sidebar': {
      content: './components/NxStatefulGlobalSidebar/NxStatefulGlobalSidebarPage',
      type: 'react'
    },
    'Global Sidebar Footer': {
      content: './components/NxGlobalSidebarFooter/NxGlobalSidebarFooterPage',
      type: 'react'
    },
    'Grid': { content: './styles/NxGrid/NxGridPage', type: 'html' },
    'Modal': { content: './components/NxModal/NxModalPage', type: 'react' },
    'Drawer': { content: './components/NxDrawer/NxDrawerPage', type: 'react' },
    'Page Header': { content: './components/NxPageHeader/NxPageHeaderPage', type: 'react' },
    'Page Title': { content: './styles/NxPageTitle/NxPageTitlePage', type: 'html' },
    'Read Only': { content: './styles/NxReadOnly/NxReadOnlyPage', type: 'html' },
    'Tabs': { content: './components/NxTabs/NxTabsPage', type: 'react' },
    'Stateful Tabs': { content: './components/NxStatefulTabs/NxStatefulTabsPage', type: 'react' },
    'Tile': { content: './styles/NxTile/NxTilePage', type: 'html' },
    'Vulnerability Details': {
      content: './components/NxVulnerabilityDetails/NxVulnerabilityDetailsPage',
      type: 'react'
    }
  },
  'Typography and Icons': {
    'Blockquote': { content: './styles/NxBlockquote/NxBlockquotePage', type: 'html' },
    'Code': { content: './styles/NxCode/NxCodePage', type: 'html' },
    'Font Awesome Icon': { content: './components/NxFontAwesomeIcon/NxFontAwesomeIconPage', type: 'react' },
    'H*': { content: './styles/NxH/NxHPage', type: 'html' },
    'P': { content: './styles/NxP/NxPPage', type: 'html' },
    'Pre': { content: './styles/NxPre/NxPrePage', type: 'html' }
  },
  'HTML Variants': {
    'Alert (HTML)': { content: './styles/NxAlert/NxAlertPage', type: 'html' },
    'Button (HTML)': { content: './styles/NxBtn/NxBtnPage', type: 'html' },
    'Icon': { content: './styles/NxIcon/NxIconPage', type: 'html' },
    'List (HTML)': { content: './styles/NxList/NxListPage', type: 'html' },
    'Table (HTML)': { content: './styles/NxTable/NxTableStylePage', type: 'html' }
  },
  'Mixins & Helpers': {
    'Color Palettes': { content: './styles/ColorPalette/ColorPalettePage', type: 'css' },
    'Custom App Font Size': { content: './styles/NxFontSize/NxFontSizePage', type: 'sass' },
    'Ellipsis Truncation': { content: './styles/NxTruncateEllipsis/NxTruncatePage', type: 'sass' },
    'nx-clickable': { content: './styles/NxClickable/NxClickablePage', type: 'css' },
    'Container Helpers': { content: './styles/NxContainerHelpers/NxContainerHelpersPage', type: 'sass' },
    'nx-scrollable': { content: './styles/NxScrollable/NxScrollablePage', type: 'css' },
    'nx-viewport-sized': { content: './styles/NxViewportSized/NxViewportSizedPage', type: 'css' },
    'Selectable Colors': { content: './styles/SelectableColors/SelectableColorsPage', type: 'css' },
    'Style Variables': { content: './styles/CssVariables/CssVariablesPage', type: 'css' },
    'Scroll Render': { content: './components/NxScrollRender/NxScrollRenderPage', type: 'react' }
  },
  'JavaScript & TypeScript Utilities': {
    'IDUtils': { content: './jsUtilPages/IdUtil/IdUtilPage', type: 'js' },
    'Policy Threat Level Utils': {
      content: './jsUtilPages/PolicyThreatLevelUtils/PolicyThreatLevelUtilsPage',
      type: 'js'
    },
    'Server Sid Rendering Utilities': {
      content: './jsUtilPages/ServerSideRendering/ServerSideRenderingUtilsPage',
      type: 'js'
    },
    'TooltipConfigProps': { content: './jsUtilPages/TooltipConfigProps/TooltipConfigPropsPage', type: 'js' },
    'useToggle': { content: './jsUtilPages/UseToggle/UseTogglePage', type: 'js' },
    'Validation Utils': { content: './jsUtilPages/ValidationUtils/ValidationUtilsPage', type: 'js' },
    'withClass Higher-Order Component': { content: './jsUtilPages/WithClass/WithClassPage', type: 'js' }
  },
  'Guidelines': {
    'Accessibility': { content: './pages/Accessibility', type: 'documentation' },
    'Accessibility Checklist': { content: './pages/AccessibilityChecklist', type: 'documentation' },
    'Additional Resources': { content: './pages/AdditionalResources', type: 'documentation' },
    'Contributing to the Gallery': { content: './pages/Contributing', type: 'documentation' },
    'Font-size and Line-height': { content: './guidelines/FontSize/FontSizePage', type: 'documentation' },
    'Styling Components': { content: './pages/StylingComponents', type: 'documentation' },
    'Server Sid Rendering': {
      content: './guidelines/ServerSideRendering/ServerSideRenderingPage',
      type: 'documentation'
    }
  }
};

export default pageConfig;
