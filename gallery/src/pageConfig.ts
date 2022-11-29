/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {PageConfig} from './pageConfigTypes';

import NxAlertPage from './styles/NxAlert/NxAlertPage';
import NxButtonPage from './components/NxButton/NxButtonPage';
import NxCheckboxPage from './components/NxCheckbox/NxCheckboxPage';
import NxDateInputPage from './components/NxDateInput/NxDateInputPage';
import NxStatefulDateInputPage from './components/NxStatefulDateInput/NxStatefulDateInputPage';
import NxTextInputPage from './components/NxTextInput/NxTextInputPage';
import NxStatefulTextInputPage from './components/NxStatefulTextInput/NxStatefulTextInputPage';
import NxBackButtonPage from './components/NxBackButton/NxBackButtonPage';
import NxLoadingSpinnerPage from './components/NxLoadingSpinner/NxLoadingSpinnerPage';
import NxLoadErrorPage from './components/NxLoadError/NxLoadErrorPage';
import NxLoadWrapperPage from './components/NxLoadWrapper/NxLoadWrapperPage';
import NxModalPage from './components/NxModal/NxModalPage';
import NxPageTitlePage from './styles/NxPageTitle/NxPageTitlePage';
import NxTilePage from './styles/NxTile/NxTilePage';
import NxBtnPage from './styles/NxBtn/NxBtnPage';
import NxThreatIndicatorPage from './components/NxThreatIndicator/NxThreatIndicatorPage';
import NxRadioPage from './components/NxRadio/NxRadioPage';
import NxVulnerabilityDetailsPage from './components/NxVulnerabilityDetails/NxVulnerabilityDetailsPage';
import NxListPage from './styles/NxList/NxListPage';
import NxListPageV2 from './components/NxList/NxListPage';
import NxTableStylePage from './styles/NxTable/NxTableStylePage';
import NxTableContainerPage from './styles/NxTable/NxTableContainerPage';
import NxAlertComponentsPage from './components/NxAlert/NxAlertPage';
import NxStatefulAlertComponentsPage from './components/NxStatefulAlert/NxStatefulAlertPage';
import NxContainerHelpersPage from './styles/NxContainerHelpers/NxContainerHelpersPage';
import NxGridPage from './styles/NxGrid/NxGridPage';
import NxIconPage from './styles/NxIcon/NxIconPage';
import NxFontAwesomeIconPage from './components/NxFontAwesomeIcon/NxFontAwesomeIconPage';
import NxCounterPage from './styles/NxCounter/NxCounterPage';
import NxThreatNumberPage from './styles/NxThreatNumber/NxThreatNumberPage';
import NxFormLayoutPage from './styles/NxFormLayout/NxFormLayoutPage';
import NxSubmitMaskPage from './components/NxSubmitMask/NxSubmitMaskPage';
import NxStatefulSubmitMaskPage from './components/NxStatefulSubmitMask/NxStatefulSubmitMaskPage';
import NxTablePage from './components/NxTable/NxTablePage';
import NxTabsPage from './components/NxTabs/NxTabsPage';
import NxStatefulTabsPage from './components/NxStatefulTabs/NxStatefulTabsPage';
import NxTreeViewPage from './components/NxTreeView/NxTreeViewPage';
import NxTreeViewRadioSelectPage from './components/NxTreeViewRadioSelect/NxTreeViewRadioSelectPage';
import NxStatefulTreeViewRadioSelectPage
  from './components/NxStatefulTreeViewRadioSelect/NxStatefulTreeViewRadioSelectPage';
import NxTreeViewMultiSelect from './components/NxTreeViewMultiSelect/NxTreeViewMultiSelectPage';
import NxStatefulTreeViewMultiSelect
  from './components/NxStatefulTreeViewMultiSelect/NxStatefulTreeViewMultiSelectPage';
import NxTooltipPage from './components/NxTooltip/NxTooltipPage';
import NxOverflowTooltipPage from './components/NxOverflowTooltip/NxOverflowTooltipPage';
import NxFilterInputPage from './components/NxFilterInput/NxFilterInputPage';
import NxPolicyThreatSliderPage from './components/NxPolicyThreatSlider/NxPolicyThreatSliderPage';
import NxDropdownPage from './components/NxDropdown/NxDropdownPage';
import PageLayoutPage from './styles/PageLayout/PageLayoutPage';
import NxStatefulDropdownPage from './components/NxStatefulDropdown/NxStatefulDropdownPage';
import NxStatefulCheckboxPage from './components/NxStatefulCheckbox/NxStatefulCheckboxPage';
import ContributingPage from './pages/Contributing';
import FontSizePage from './guidelines/FontSize/FontSizePage';
import NxCloseButtonPage from './components/NxCloseButton/NxCloseButtonPage';
import NxScrollablePage from './styles/NxScrollable/NxScrollablePage';
import TooltipConfigPropsPage from './jsUtilPages/TooltipConfigProps/TooltipConfigPropsPage';
import PolicyThreatLevelUtilsPage from './jsUtilPages/PolicyThreatLevelUtils/PolicyThreatLevelUtilsPage';
import ValidationUtilsPage from './jsUtilPages/ValidationUtils/ValidationUtilsPage';
import NxClickablePage from './styles/NxClickable/NxClickablePage';
import NxPageHeaderPage from './components/NxPageHeader/NxPageHeaderPage';
import NxTruncatePage from './styles/NxTruncateEllipsis/NxTruncatePage';
import NxCodePage from './styles/NxCode/NxCodePage';
import StylingComponentsPage from './pages/StylingComponents';
import AdditionalResourcePage from './pages/AdditionalResources';
import NxFontSizePage from './styles/NxFontSize/NxFontSizePage';
import NxCardPage from './styles/NxCard/NxCardPage';
import NxPaginationPage from './components/NxPagination/NxPaginationPage';
import NxIndeterminatePaginationPage
  from './components/NxIndeterminatePagination/NxIndeterminatePaginationPage';
import NxBinaryDonutChartPage from './components/NxBinaryDonutChart/NxBinaryDonutChartPage';
import NxAccordionPage from './components/NxAccordion/NxAccordionPage';
import NxStatefulAccordionPage from './components/NxStatefulAccordion/NxStatefulAccordionPage';
import NxViewportSizedPage from './styles/NxViewportSized/NxViewportSizedPage';
import NxPolicyViolationIndicatorPage from './components/NxPolicyViolationIndicator/NxPolicyViolationIndicatorPage';
import NxReadOnlyPage from './styles/NxReadOnly/NxReadOnlyPage';
import NxFormGroupPage from './components/NxFormGroup/NxFormGroupPage';
import NxFieldsetPage from './components/NxFieldset/NxFieldsetPage';
import NxFormPage from './components/NxForm/NxFormPage';
import NxTogglePage from './components/NxToggle/NxTogglePage';
import NxStatefulTogglePage from './components/NxStatefulToggle/NxStatefulTogglePage';
import NxBlockquotePage from './styles/NxBlockquote/NxBlockquotePage';
import NxPrePage from './styles/NxPre/NxPrePage';
import NxSegmentedButtonPage from './components/NxSegmentedButton/NxSegmentedButtonPage';
import NxStatefulSegmentedButtonPage from './components/NxStatefulSegmentedButton/NxStatefulSegmentedButtonPage';
import NxTagPage from './components/NxTag/NxTagPage';
import NxCodeSnippetPage from './components/NxCodeSnippet/NxCodeSnippetPage';
import UseTogglePage from './jsUtilPages/UseToggle/UseTogglePage';
import NxColorPickerPage from './components/NxColorPicker/NxColorPickerPage';
import ColorPalettePage from './styles/ColorPalette/ColorPalettePage';
import IdUtilPage from './jsUtilPages/IdUtil/IdUtilPage';
import WithClassPage from './jsUtilPages/WithClass/WithClassPage';
import NxTextLinkPage from './components/NxTextLink/NxTextLinkPage';
import NxThreatCounterPage from './components/NxThreatCounter/NxThreatCounterPage';
import NxGlobalSidebarPage from './components/NxGlobalSidebar/NxGlobalSidebarPage';
import NxStatefulGlobalSidebarPage from './components/NxStatefulGlobalSidebar/NxStatefulGlobalSidebarPage';
import NxGlobalHeaderPage from './styles/NxGlobalHeader/NxGlobalHeaderPage';
import SelectableColorsPage from './styles/SelectableColors/SelectableColorsPage';
import NxReadOnlyGridTilePage from './styles/NxReadOnlyGridTile/NxReadOnlyGridTilePage';
import NxSystemNoticePage from './styles/NxSystemNotice/NxSystemNoticePage';
import NxGlobalSidebarFooterPage from './components/NxGlobalSidebarFooter/NxGlobalSidebarFooterPage';
import NxFormSelectComponentPage from './components/NxFormSelect/NxFormSelectPage';
import CssVariablesPage from './styles/CssVariables/CssVariablesPage';
import NxTransferListPage from './components/NxTransferList/NxTransferListPage';
import NxStatefulTransferListPage from './components/NxStatefulTransferList/NxStatefulTransferListPage';
import NxPPage from './styles/NxP/NxPPage';
import NxHPage from './styles/NxH/NxHPage';
import AccessibilityPage from './pages/Accessibility';
import AccessibilityChecklistPage from './pages/AccessibilityChecklist';
import NxDividerPage from './styles/NxDivider/NxDividerPage';
import NxThreatIndicatorLegendPage from './components/NxThreatIndicatorLegend/NxThreatIndicatorLegendPage';
import NxSearchDropdownPage from './components/NxSearchDropdown/NxSearchDropdownPage';
import NxStatefulSearchDropdownPage from './components/NxStatefulSearchDropdown/NxStatefulSearchDropdownPage';
import NxSearchTransferListPage from './components/NxSearchTransferList/NxSearchTransferListPage';
import NxStatefulSearchTransferListPage
  from './components/NxStatefulSearchTransferList/NxStatefulSearchTransferListPage';
import NxIconDropdownPage from './components/NxIconDropdown/NxIconDropdownPage';
import NxStatefulIconDropdownPage from './components/NxStatefulIconDropdown/NxStatefulIconDropdownPage';
import NxSmallThreatCounterPage from './components/NxSmallThreatCounter/NxSmallThreatCounterPage';
import NxCollapsibleItemsPage from './components/NxCollapsibleItems/NxCollapsibleItemsPage';
import NxCollapsibleMultiSelectPage
  from './components/NxCollapsibleMultiSelect/NxCollapsibleMultiSelectPage';
import NxCollapsibleRadioSelectPage
  from './components/NxCollapsibleRadioSelect/NxCollapsibleRadioSelectPage';
import NxStatefulCollapsibleMultiSelectPage
  from './components/NxStatefulCollapsibleMultiSelect/NxStatefulCollapsibleMultiSelectPage';
import NxStatefulCollapsibleRadioSelectPage
  from './components/NxStatefulCollapsibleRadioSelect/NxStatefulCollapsibleRadioSelectPage';
import NxTreePage from './components/NxTree/NxTreePage';
import ServerSideRenderingUtilsPage from './jsUtilPages/ServerSideRendering/ServerSideRenderingUtilsPage';
import NxFilterDropdownPage from './components/NxFilterDropdown/NxFilterDropdownPage';
import NxStatefulFilterDropdownPage from './components/NxStatefulFilterDropdown/NxStatefulFilterDropdownPage';
import NxTransferListHalfPage from './components/NxTransferListHalf/NxTransferListHalfPage';
import NxProgressBarPage from './components/NxProgressBar/NxProgressBarPage';
import ServerSideRenderingPage from './guidelines/ServerSideRendering/ServerSideRenderingPage';
import NxToastPage from './components/NxToast/NxToastPage';
import NxStatusIndicatorPage from './styles/NxStatusIndicator/NxStatusIndicatorPage';
import NxDrawerPage from './components/NxDrawer/NxDrawerPage';
import NxComboboxPage from './components/NxCombobox/NxComboboxPage';
import NxCopyToClipboardPage from './components/NxCopyToClipboard/NxCopyToClipboardPage';
import NxScrollRenderPage from './components/NxScrollRender/NxScrollRenderPage';
import NxStatefulFormPage from './components/NxStatefulForm/NxStatefulFormPage';
import NxFileUploadPage from './components/NxFileUpload/NxFileUploadPage';
import NxStatefulFileUploadPage from './components/NxStatefulFileUpload/NxStatefulFileUploadPage';
import NxDescriptionListPage from './components/NxDescriptionList/NxDescriptionListPage';
import NxMeterPage from './components/NxMeter/NxMeterPage';
import NivoPage from './styles/Nivo/NivoPage';
import NxBreadcrumbPage from './components/NxBreadcrumb/NxBreadcrumbPage';
import NxStatefulBreadcrumbPage from './components/NxStatefulBreadcrumb/NxStatefulBreadcrumbPage';
import NxSkeletonLoaderPage from './components/NxSkeletonLoader/NxSkeletonLoaderPage';

const pageConfig: PageConfig = {
  'Alerts and Indicators': {
    'Alert': { content: NxAlertComponentsPage, type: 'react' },
    'Stateful Alert': { content: NxStatefulAlertComponentsPage, type: 'react' },
    'Counter': { content: NxCounterPage, type: 'html' },
    'Load Error': { content: NxLoadErrorPage, type: 'react' },
    'Load Wrapper': { content: NxLoadWrapperPage, type: 'react' },
    'Loading Spinner': { content: NxLoadingSpinnerPage, type: 'react' },
    'Meter': { content: NxMeterPage, type: 'react' },
    'Policy Violation Indicator': { content: NxPolicyViolationIndicatorPage, type: 'react' },
    'Progress Bar': { content: NxProgressBarPage, type: 'react' },
    'Submit Mask': { content: NxSubmitMaskPage, type: 'react' },
    'Stateful Submit Mask': { content: NxStatefulSubmitMaskPage, type: 'react' },
    'System Notice': { content: NxSystemNoticePage, type: 'html' },
    'Tag': { content: NxTagPage, type: 'react' },
    'Threat Counter': { content: NxThreatCounterPage, type: 'react' },
    'Skeleton Loader': { content: NxSkeletonLoaderPage, type: 'react' },
    'Small Threat Counter': { content: NxSmallThreatCounterPage, type: 'react' },
    'Status Indicator': { content: NxStatusIndicatorPage, type: 'html' },
    'Threat Indicator': { content: NxThreatIndicatorPage, type: 'react' },
    'Threat Indicator Legend': { content: NxThreatIndicatorLegendPage, type: 'react' },
    'Threat Number': { content: NxThreatNumberPage, type: 'html' },
    'Toast': { content: NxToastPage, type: 'react' },
    'Tooltip': { content: NxTooltipPage, type: 'react' },
    'Overflow Tooltip': { content: NxOverflowTooltipPage, type: 'react' }
  },
  'Buttons and Dropdowns': {
    'Back Button': { content: NxBackButtonPage, type: 'react' },
    'Breadcrumb': { content: NxBreadcrumbPage, type: 'react' },
    'Stateful Breadcrumb': { content: NxStatefulBreadcrumbPage, type: 'react' },
    'Button': { content: NxButtonPage, type: 'react' },
    'Segmented Button': { content: NxSegmentedButtonPage, type: 'react' },
    'Stateful Segmented Button': { content: NxStatefulSegmentedButtonPage, type: 'react' },
    'Close Button': { content: NxCloseButtonPage, type: 'react' },
    'Combobox': { content: NxComboboxPage, type: 'react' },
    'Dropdown': { content: NxDropdownPage, type: 'react' },
    'Stateful Dropdown': { content: NxStatefulDropdownPage, type: 'react' },
    'Filter Dropdown': { content: NxFilterDropdownPage, type: 'react' },
    'Stateful Filter Dropdown': { content: NxStatefulFilterDropdownPage, type: 'react' },
    'Icon Dropdown': { content: NxIconDropdownPage, type: 'react' },
    'Stateful Icon Dropdown': { content: NxStatefulIconDropdownPage, type: 'react' },
    'Pagination': { content: NxPaginationPage, type: 'react' },
    'Indeterminate Pagination': { content: NxIndeterminatePaginationPage, type: 'react' },
    'Search Dropdown': { content: NxSearchDropdownPage, type: 'react' },
    'Stateful Search Dropdown': { content: NxStatefulSearchDropdownPage, type: 'react' },
    'Text Link': { content: NxTextLinkPage, type: 'react' }
  },
  'Forms': {
    'Checkbox': { content: NxCheckboxPage, type: 'react' },
    'Stateful Checkbox': { content: NxStatefulCheckboxPage, type: 'react' },
    'Code Snippet': { content: NxCodeSnippetPage, type: 'react' },
    'Collapsible Multi-Select': { content: NxCollapsibleMultiSelectPage, type: 'react' },
    'Stateful Collapsible Multi-Select': { content: NxStatefulCollapsibleMultiSelectPage, type: 'react' },
    'Collapsible Radio-Select': { content: NxCollapsibleRadioSelectPage, type: 'react' },
    'Stateful Collapsible Radio-Select': { content: NxStatefulCollapsibleRadioSelectPage, type: 'react' },
    'Color Picker': { content: NxColorPickerPage, type: 'react' },
    'Copy To Clipboard': { content: NxCopyToClipboardPage, type: 'react' },
    'Date Input': { content: NxDateInputPage, type: 'react' },
    'Stateful Date Input': { content: NxStatefulDateInputPage, type: 'react' },
    'Fieldset': { content: NxFieldsetPage, type: 'react' },
    'File Upload': { content: NxFileUploadPage, type: 'react' },
    'Stateful File Upload': { content: NxStatefulFileUploadPage, type: 'react' },
    'Filter Input': { content: NxFilterInputPage, type: 'react' },
    'Form': { content: NxFormPage, type: 'react' },
    'Stateful Form': { content: NxStatefulFormPage, type: 'react' },
    'Form Group': { content: NxFormGroupPage, type: 'react' },
    'Form Select': { content: NxFormSelectComponentPage, type: 'react' },
    'Policy Threat Slider': { content: NxPolicyThreatSliderPage, type: 'react' },
    'Radio': { content: NxRadioPage, type: 'react' },
    'Search Transfer List': { content: NxSearchTransferListPage, type: 'react' },
    'Stateful Search Transfer List': { content: NxStatefulSearchTransferListPage, type: 'react' },
    'Text Input': { content: NxTextInputPage, type: 'react' },
    'Stateful Text Input': { content: NxStatefulTextInputPage, type: 'react' },
    'Toggle': { content: NxTogglePage, type: 'react' },
    'Stateful Toggle': { content: NxStatefulTogglePage, type: 'react' },
    'Transfer List': { content: NxTransferListPage, type: 'react' },
    'Stateful Transfer List': { content: NxStatefulTransferListPage, type: 'react' },
    'Transfer List Half': { content: NxTransferListHalfPage, type: 'react' },
    'Tree View Multi-Select': { content: NxTreeViewMultiSelect, type: 'react' },
    'Stateful Tree View Multi-Select': { content: NxStatefulTreeViewMultiSelect, type: 'react' },
    'Tree View Radio-Select': { content: NxTreeViewRadioSelectPage, type: 'react' },
    'Stateful Tree View Radio-Select': { content: NxStatefulTreeViewRadioSelectPage, type: 'react' }
  },
  'Data Presentation': {
    'Binary Donut Chart': { content: NxBinaryDonutChartPage, type: 'react' },
    'Collapsible Items': { content: NxCollapsibleItemsPage, type: 'react' },
    'Description List': { content: NxDescriptionListPage, type: 'react' },
    'List': { content: NxListPageV2, type: 'react' },
    'Nivo Charts': { content: NivoPage, type: 'react' },
    'Table': { content: NxTablePage, type: 'react' },
    'Table Container': { content: NxTableContainerPage, type: 'html' },
    'Tree': { content: NxTreePage, type: 'react' },
    'Tree View': { content: NxTreeViewPage, type: 'react' }
  },
  'Layout': {
    'Form Layout Examples': { content: NxFormLayoutPage, type: 'layout' },
    'Page Layout Examples': { content: PageLayoutPage, type: 'layout' },
    'Read-Only Grid Tile Layout': { content: NxReadOnlyGridTilePage, type: 'layout' },
    'Accordion': { content: NxAccordionPage, type: 'react' },
    'Stateful Accordion': { content: NxStatefulAccordionPage, type: 'react' },
    'Card': { content: NxCardPage, type: 'html' },
    'Divider': { content: NxDividerPage, type: 'html' },
    'Global Header': { content: NxGlobalHeaderPage, type: 'html' },
    'Global Sidebar': { content: NxGlobalSidebarPage, type: 'react' },
    'Stateful Global Sidebar': { content: NxStatefulGlobalSidebarPage, type: 'react' },
    'Global Sidebar Footer': { content: NxGlobalSidebarFooterPage, type: 'react' },
    'Grid': { content: NxGridPage, type: 'html' },
    'Modal': { content: NxModalPage, type: 'react' },
    'Drawer': { content: NxDrawerPage, type: 'react' },
    'Page Header': { content: NxPageHeaderPage, type: 'react' },
    'Page Title': { content: NxPageTitlePage, type: 'html' },
    'Read Only': { content: NxReadOnlyPage, type: 'html' },
    'Tabs': { content: NxTabsPage, type: 'react' },
    'Stateful Tabs': { content: NxStatefulTabsPage, type: 'react' },
    'Tile': { content: NxTilePage, type: 'html' },
    'Vulnerability Details': { content: NxVulnerabilityDetailsPage, type: 'react' }
  },
  'Typography and Icons': {
    'Blockquote': { content: NxBlockquotePage, type: 'html' },
    'Code': { content: NxCodePage, type: 'html' },
    'Font Awesome Icon': { content: NxFontAwesomeIconPage, type: 'react' },
    'H*': { content: NxHPage, type: 'html' },
    'P': { content: NxPPage, type: 'html' },
    'Pre': { content: NxPrePage, type: 'html' }
  },
  'HTML Variants': {
    'Alert (HTML)': { content: NxAlertPage, type: 'html' },
    'Button (HTML)': { content: NxBtnPage, type: 'html' },
    'Icon': { content: NxIconPage, type: 'html' },
    'List (HTML)': { content: NxListPage, type: 'html' },
    'Table (HTML)': { content: NxTableStylePage, type: 'html' }
  },
  'Mixins & Helpers': {
    'Color Palettes': { content: ColorPalettePage, type: 'css' },
    'Custom App Font Size': { content: NxFontSizePage, type: 'sass' },
    'Ellipsis Truncation': { content: NxTruncatePage, type: 'sass' },
    'nx-clickable': { content: NxClickablePage, type: 'css' },
    'Container Helpers': { content: NxContainerHelpersPage, type: 'sass' },
    'nx-scrollable': { content: NxScrollablePage, type: 'css' },
    'nx-viewport-sized': { content: NxViewportSizedPage, type: 'css' },
    'Selectable Colors': { content: SelectableColorsPage, type: 'css' },
    'Style Variables': { content: CssVariablesPage, type: 'css' },
    'Scroll Render': { content: NxScrollRenderPage, type: 'react' }
  },
  'JavaScript & TypeScript Utilities': {
    'IDUtils': { content: IdUtilPage, type: 'js' },
    'Policy Threat Level Utils': { content: PolicyThreatLevelUtilsPage, type: 'js' },
    'Server Side Rendering Utilities': { content: ServerSideRenderingUtilsPage, type: 'js'},
    'TooltipConfigProps': { content: TooltipConfigPropsPage, type: 'js' },
    'useToggle': { content: UseTogglePage, type: 'js' },
    'Validation Utils': { content: ValidationUtilsPage, type: 'js' },
    'withClass Higher-Order Component': { content: WithClassPage, type: 'js' }
  },
  'Guidelines': {
    'Accessibility': { content: AccessibilityPage, type: 'documentation' },
    'Accessibility Checklist': { content: AccessibilityChecklistPage, type: 'documentation' },
    'Additional Resources': { content: AdditionalResourcePage, type: 'documentation' },
    'Contributing to the Gallery': { content: ContributingPage, type: 'documentation' },
    'Font-size and Line-height': { content: FontSizePage, type: 'documentation' },
    'Styling Components': { content: StylingComponentsPage, type: 'documentation' },
    'Server Side Rendering': { content: ServerSideRenderingPage, type: 'documentation' }
  }
};

export default pageConfig;
