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
import NxTooltipPage from './components/NxTooltip/NxTooltipPage';
import NxOverflowTooltipPage from './components/NxOverflowTooltip/NxOverflowTooltipPage';
import NxFilterInputPage from './components/NxFilterInput/NxFilterInputPage';
import NxPolicyThreatSliderPage from './components/NxPolicyThreatSlider/NxPolicyThreatSliderPage';
import NxDropdownPage from './components/NxDropdown/NxDropdownPage';
import FormValidationPage from './guidelines/FormValidation/FormValidationPage';
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
import NxNexusPageHeaderPage from './components/NxNexusPageHeader/NxNexusPageHeaderPage';
import NxFormSelectPage from './styles/NxFormSelect/NxFormSelectPage';
import NxAccordionPage from './components/NxAccordion/NxAccordionPage';
import NxStatefulAccordionPage from './components/NxStatefulAccordion/NxStatefulAccordionPage';
import NxViewportSizedPage from './styles/NxViewportSized/NxViewportSizedPage';
import NxPolicyViolationIndicatorPage from './components/NxPolicyViolationIndicator/NxPolicyViolationIndicatorPage';
import NxReadOnlyPage from './styles/NxReadOnly/NxReadOnlyPage';
import NxFormGroupPage from './components/NxFormGroup/NxFormGroupPage';
import NxFormGroupStylePage from './styles/NxFormGroup/NxFormGroupStylePage';
import NxFieldsetPage from './components/NxFieldset/NxFieldsetPage';
import NxFieldsetStylePage from './styles/NxFieldset/NxFieldsetStylePage';
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

const pageConfig: PageConfig = {
  'Alerts, Indicators, and Notifications': {
    NxAlert: { content: NxAlertComponentsPage, type: 'react' },
    'nx-alert': { content: NxAlertPage, type: 'html' },
    NxStatefulAlert: { content: NxStatefulAlertComponentsPage, type: 'react' },
    NxBinaryDonutChart: { content: NxBinaryDonutChartPage, type: 'react' },
    'nx-counter': { content: NxCounterPage, type: 'html' },
    NxFontAwesomeIcon: { content: NxFontAwesomeIconPage, type: 'react' },
    'nx-icon': { content: NxIconPage, type: 'html' },
    NxLoadError: { content: NxLoadErrorPage, type: 'react' },
    NxLoadWrapper: { content: NxLoadWrapperPage, type: 'react' },
    NxLoadingSpinner: { content: NxLoadingSpinnerPage, type: 'react' },
    NxPolicyViolationIndicator: { content: NxPolicyViolationIndicatorPage, type: 'react' },
    NxSubmitMask: { content: NxSubmitMaskPage, type: 'react' },
    NxStatefulSubmitMask: { content: NxStatefulSubmitMaskPage, type: 'react' },
    NxTag: { content: NxTagPage, type: 'react' },
    NxThreatCounter: { content: NxThreatCounterPage, type: 'react' },
    NxSmallThreatCounter: { content: NxSmallThreatCounterPage, type: 'react' },
    NxThreatIndicator: { content: NxThreatIndicatorPage, type: 'react' },
    NxThreatIndicatorLegend: { content: NxThreatIndicatorLegendPage, type: 'react' },
    'nx-threat-number': { content: NxThreatNumberPage, type: 'html' },
    NxTooltip: { content: NxTooltipPage, type: 'react' },
    NxOverflowTooltip: { content: NxOverflowTooltipPage, type: 'react' }
  },
  'Forms': {
    'Form Layout Examples': { content: NxFormLayoutPage, type: 'layout' },
    NxButton: { content: NxButtonPage, type: 'react' },
    NxSegmentedButton: { content: NxSegmentedButtonPage, type: 'react' },
    NxStatefulSegmentedButton: { content: NxStatefulSegmentedButtonPage, type: 'react' },
    NxCheckbox: { content: NxCheckboxPage, type: 'react' },
    NxCollapsibleMultiSelect: { content: NxCollapsibleMultiSelectPage, type: 'react' },
    NxStatefulCollapsibleMultiSelect: { content: NxStatefulCollapsibleMultiSelectPage, type: 'react' },
    NxCollapsibleRadioSelect: { content: NxCollapsibleRadioSelectPage, type: 'react' },
    NxStatefulCollapsibleRadioSelect: { content: NxStatefulCollapsibleRadioSelectPage, type: 'react' },
    NxColorPicker: { content: NxColorPickerPage, type: 'react' },
    NxStatefulCheckbox: { content: NxStatefulCheckboxPage, type: 'react' },
    NxDateInput: { content: NxDateInputPage, type: 'react' },
    NxStatefulDateInput: { content: NxStatefulDateInputPage, type: 'react' },
    NxFieldset: { content: NxFieldsetPage, type: 'react' },
    'nx-fieldset': { content: NxFieldsetStylePage, type: 'html' },
    NxFilterInput: { content: NxFilterInputPage, type: 'react' },
    NxForm: { content: NxFormPage, type: 'react' },
    NxFormGroup: { content: NxFormGroupPage, type: 'react' },
    'nx-form-group': { content: NxFormGroupStylePage, type: 'html' },
    NxFormSelect: { content: NxFormSelectComponentPage, type: 'react' },
    'nx-form-select': { content: NxFormSelectPage, type: 'html' },
    NxPolicyThreatSlider: { content: NxPolicyThreatSliderPage, type: 'react' },
    NxRadio: { content: NxRadioPage, type: 'react' },
    'nx-read-only': { content: NxReadOnlyPage, type: 'html' },
    NxSearchTransferList: { content: NxSearchTransferListPage, type: 'react' },
    NxStatefulSearchTransferList: { content: NxStatefulSearchTransferListPage, type: 'react' },
    NxTextInput: { content: NxTextInputPage, type: 'react' },
    NxStatefulTextInput: { content: NxStatefulTextInputPage, type: 'react' },
    NxToggle: { content: NxTogglePage, type: 'react' },
    NxStatefulToggle: { content: NxStatefulTogglePage, type: 'react' },
    NxTransferList: { content: NxTransferListPage, type: 'react' },
    NxStatefulTransferList: { content: NxStatefulTransferListPage, type: 'react' }
  },
  'Layout': {
    'Page Layout Examples': { content: PageLayoutPage, type: 'layout' },
    'nx-card': { content: NxCardPage, type: 'html' },
    'nx-divider': { content: NxDividerPage, type: 'html' },
    'nx-global-header': { content: NxGlobalHeaderPage, type: 'html' },
    NxGlobalSidebar: { content: NxGlobalSidebarPage, type: 'react' },
    NxStatefulGlobalSidebar: { content: NxStatefulGlobalSidebarPage, type: 'react' },
    NxGlobalSidebarFooter: { content: NxGlobalSidebarFooterPage, type: 'react' },
    'nx-grid': { content: NxGridPage, type: 'html' },
    'Read-Only Grid Tile Layout': { content: NxReadOnlyGridTilePage, type: 'html' },
    NxNexusPageHeader: { content: NxNexusPageHeaderPage, type: 'react' },
    NxPageHeader: { content: NxPageHeaderPage, type: 'react' },
    'nx-page-title': { content: NxPageTitlePage, type: 'html' },
    'nx-tile': { content: NxTilePage, type: 'html' },
    NxVulnerabilityDetails: { content: NxVulnerabilityDetailsPage, type: 'react' }
  },
  'Navigation': {
    NxBackButton: { content: NxBackButtonPage, type: 'react' },
    NxDropdown: { content: NxDropdownPage, type: 'react' },
    NxStatefulDropdown: { content: NxStatefulDropdownPage, type: 'react' },
    NxIconDropdown: { content: NxIconDropdownPage, type: 'react' },
    NxStatefulIconDropdown: { content: NxStatefulIconDropdownPage, type: 'react' },
    NxTextLink: { content: NxTextLinkPage, type: 'react' }
  },
  'Other Components': {
    NxAccordion: { content: NxAccordionPage, type: 'react' },
    NxStatefulAccordion: { content: NxStatefulAccordionPage, type: 'react' },
    NxBinaryDonutChart: { content: NxBinaryDonutChartPage, type: 'react' },
    NxCloseButton: { content: NxCloseButtonPage, type: 'react' },
    NxCodeSnippet: { content: NxCodeSnippetPage, type: 'react' },
    NxCollapsibleItems: { content: NxCollapsibleItemsPage, type: 'react' },
    NxList: { content: NxListPageV2, type: 'react' },
    'nx-list': { content: NxListPage, type: 'html' },
    NxModal: { content: NxModalPage, type: 'react' },
    NxPagination: { content: NxPaginationPage, type: 'react' },
    NxIndeterminatePagination: { content: NxIndeterminatePaginationPage, type: 'react' },
    NxSearchDropdown: { content: NxSearchDropdownPage, type: 'react' },
    NxStatefulSearchDropdown: { content: NxStatefulSearchDropdownPage, type: 'react' },
    NxSubmitMask: { content: NxSubmitMaskPage, type: 'react' },
    NxStatefulSubmitMask: { content: NxStatefulSubmitMaskPage, type: 'react' },
    'nx-system-notice': { content: NxSystemNoticePage, type: 'html' },
    NxTable: { content: NxTablePage, type: 'react' },
    'nx-table': { content: NxTableStylePage, type: 'html' },
    'nx-table-container': { content: NxTableContainerPage, type: 'html' },
    NxTabs: { content: NxTabsPage, type: 'react' },
    NxStatefulTabs: { content: NxStatefulTabsPage, type: 'react' },
    NxTooltip: { content: NxTooltipPage, type: 'react' },
    NxOverflowTooltip: { content: NxOverflowTooltipPage, type: 'react' },
    NxTree: { content: NxTreePage, type: 'react' },
    NxTreeView: { content: NxTreeViewPage, type: 'react' }
  },
  'Typograpgy': {
    'nx-blockquote': { content: NxBlockquotePage, type: 'html' },
    'nx-code': { content: NxCodePage, type: 'html' },
    'nx-h*': { content: NxHPage, type: 'html' },
    'nx-p': { content: NxPPage, type: 'html' },
    'nx-pre': { content: NxPrePage, type: 'html' }
  },
  'Mixins & Helpers': {
    'Color Palettes': ColorPalettePage,
    'Custom app font size': NxFontSizePage,
    'Ellipsis Truncation': NxTruncatePage,
    'nx-clickable': NxClickablePage,
    'nx-container-helpers': NxContainerHelpersPage,
    'nx-scrollable': NxScrollablePage,
    'nx-viewport-sized': NxViewportSizedPage,
    'Selectable Colors': SelectableColorsPage,
    'Style Variables': CssVariablesPage
  },
  'JavaScript & TypeScript Utilities': {
    'TooltipConfigProps': TooltipConfigPropsPage,
    'Policy Threat Level Utils': PolicyThreatLevelUtilsPage,
    'Validation Utils': ValidationUtilsPage,
    'useToggle': UseTogglePage,
    'ID Utils': IdUtilPage,
    'withClass Higher-Order Component': WithClassPage
  },
  'Guidelines': {
    'Accessibility': { content: AccessibilityPage, type: 'documentation' },
    'Additional Resources': { content: AdditionalResourcePage, type: 'documentation' },
    'Contributing to the Gallery': { content: ContributingPage, type: 'documentation' },
    'font-size and line-height': { content: FontSizePage, type: 'documentation' },
    'Form Validation Guidelines': { content: FormValidationPage, type: 'documentation' },
    'Styling Components': { content: StylingComponentsPage, type: 'documentation' }
  }
  /*
  'All Components': {
    NxAccordion: NxAccordionPage,
    NxStatefulAccordion: NxStatefulAccordionPage,
    NxAlert: NxAlertComponentsPage,
    NxStatefulAlert: NxStatefulAlertComponentsPage,
    NxBackButton: NxBackButtonPage,
    NxBinaryDonutChart: NxBinaryDonutChartPage,
    NxButton: NxButtonPage,
    NxSegmentedButton: NxSegmentedButtonPage,
    NxStatefulSegmentedButton: NxStatefulSegmentedButtonPage,
    NxCheckbox: NxCheckboxPage,
    NxCloseButton: NxCloseButtonPage,
    NxCollapsibleItems: NxCollapsibleItemsPage,
    NxCollapsibleMultiSelect: NxCollapsibleMultiSelectPage,
    NxStatefulCollapsibleMultiSelect: NxStatefulCollapsibleMultiSelectPage,
    NxCollapsibleRadioSelect: NxCollapsibleRadioSelectPage,
    NxStatefulCollapsibleRadioSelect: NxStatefulCollapsibleRadioSelectPage,
    NxColorPicker: NxColorPickerPage,
    NxStatefulCheckbox: NxStatefulCheckboxPage,
    NxCodeSnippet: NxCodeSnippetPage,
    NxDateInput: NxDateInputPage,
    NxStatefulDateInput: NxStatefulDateInputPage,
    NxDropdown: NxDropdownPage,
    NxStatefulDropdown: NxStatefulDropdownPage,
    NxIconDropdown: NxIconDropdownPage,
    NxStatefulIconDropdown: NxStatefulIconDropdownPage,
    NxFieldset: NxFieldsetPage,
    NxFilterInput: NxFilterInputPage,
    NxFontAwesomeIcon: NxFontAwesomeIconPage,
    NxForm: NxFormPage,
    NxFormGroup: NxFormGroupPage,
    NxFormSelect: NxFormSelectComponentPage,
    NxGlobalSidebar: NxGlobalSidebarPage,
    NxStatefulGlobalSidebar: NxStatefulGlobalSidebarPage,
    NxGlobalSidebarFooter: NxGlobalSidebarFooterPage,
    NxList: NxListPageV2,
    NxLoadError: NxLoadErrorPage,
    NxLoadWrapper: NxLoadWrapperPage,
    NxLoadingSpinner: NxLoadingSpinnerPage,
    NxModal: NxModalPage,
    NxNexusPageHeader: NxNexusPageHeaderPage,
    NxPageHeader: NxPageHeaderPage,
    NxPagination: NxPaginationPage,
    NxIndeterminatePagination: NxIndeterminatePaginationPage,
    NxPolicyThreatSlider: NxPolicyThreatSliderPage,
    NxPolicyViolationIndicator: NxPolicyViolationIndicatorPage,
    NxRadio: NxRadioPage,
    NxSearchDropdown: NxSearchDropdownPage,
    NxStatefulSearchDropdown: NxStatefulSearchDropdownPage,
    NxSearchTransferList: NxSearchTransferListPage,
    NxStatefulSearchTransferList: NxStatefulSearchTransferListPage,
    NxSubmitMask: NxSubmitMaskPage,
    NxStatefulSubmitMask: NxStatefulSubmitMaskPage,
    NxTable: NxTablePage,
    NxTabs: NxTabsPage,
    NxStatefulTabs: NxStatefulTabsPage,
    NxTag: NxTagPage,
    NxTextInput: NxTextInputPage,
    NxStatefulTextInput: NxStatefulTextInputPage,
    NxTextLink: NxTextLinkPage,
    NxThreatCounter: NxThreatCounterPage,
    NxSmallThreatCounter: NxSmallThreatCounterPage,
    NxThreatIndicator: NxThreatIndicatorPage,
    NxThreatIndicatorLegend: NxThreatIndicatorLegendPage,
    NxToggle: NxTogglePage,
    NxStatefulToggle: NxStatefulTogglePage,
    NxTooltip: NxTooltipPage,
    NxOverflowTooltip: NxOverflowTooltipPage,
    NxTransferList: NxTransferListPage,
    NxStatefulTransferList: NxStatefulTransferListPage,
    NxTree: NxTreePage,
    NxTreeView: NxTreeViewPage,
    NxTreeViewMultiSelect: NxTreeViewMultiSelect,
    NxStatefulTreeViewMultiSelect: NxStatefulTreeViewMultiSelect,
    NxTreeViewRadioSelect: NxTreeViewRadioSelectPage,
    NxStatefulTreeViewRadioSelect: NxStatefulTreeViewRadioSelectPage,
    NxVulnerabilityDetails: NxVulnerabilityDetailsPage
  }
  */
};

export default pageConfig;
