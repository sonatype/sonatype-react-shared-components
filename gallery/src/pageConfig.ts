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
import NxSearchDropdownPage from './components/NxSearchDropdown/NxSearchDropdownPage';
import NxStatefulSearchDropdownPage from './components/NxStatefulSearchDropdown/NxStatefulSearchDropdownPage';
import NxIconDropdownPage from './components/NxIconDropdown/NxIconDropdownPage';
import NxStatefulIconDropdownPage from './components/NxStatefulIconDropdown/NxStatefulIconDropdownPage';
import NxNumberInputPage from './components/NxNumberInput/NxNumberInputPage';

const pageConfig: PageConfig = {
  'React Components': {
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
    NxColorPicker: NxColorPickerPage,
    NxStatefulCheckbox: NxStatefulCheckboxPage,
    NxCloseButton: NxCloseButtonPage,
    NxCodeSnippet: NxCodeSnippetPage,
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
    NxNumberInput: NxNumberInputPage,
    NxPageHeader: NxPageHeaderPage,
    NxPagination: NxPaginationPage,
    NxIndeterminatePagination: NxIndeterminatePaginationPage,
    NxPolicyThreatSlider: NxPolicyThreatSliderPage,
    NxPolicyViolationIndicator: NxPolicyViolationIndicatorPage,
    NxRadio: NxRadioPage,
    NxSearchDropdown: NxSearchDropdownPage,
    NxStatefulSearchDropdown: NxStatefulSearchDropdownPage,
    NxSubmitMask: NxSubmitMaskPage,
    NxStatefulSubmitMask: NxStatefulSubmitMaskPage,
    NxTable: NxTablePage,
    NxTabs: NxTabsPage,
    NxStatefulTabs: NxStatefulTabsPage,
    NxTag: NxTagPage,
    NxTextInput: NxTextInputPage,
    NxTextLink: NxTextLinkPage,
    NxStatefulTextInput: NxStatefulTextInputPage,
    NxThreatCounter: NxThreatCounterPage,
    NxThreatIndicator: NxThreatIndicatorPage,
    NxToggle: NxTogglePage,
    NxStatefulToggle: NxStatefulTogglePage,
    NxTooltip: NxTooltipPage,
    NxOverflowTooltip: NxOverflowTooltipPage,
    NxTransferList: NxTransferListPage,
    NxStatefulTransferList: NxStatefulTransferListPage,
    NxTreeView: NxTreeViewPage,
    NxTreeViewMultiSelect: NxTreeViewMultiSelect,
    NxStatefulTreeViewMultiSelect: NxStatefulTreeViewMultiSelect,
    NxTreeViewRadioSelect: NxTreeViewRadioSelectPage,
    NxStatefulTreeViewRadioSelect: NxStatefulTreeViewRadioSelectPage,
    NxVulnerabilityDetails: NxVulnerabilityDetailsPage
  },
  'Guidelines': {
    'Accessibility': AccessibilityPage,
    'Additional Resources': AdditionalResourcePage,
    'Contributing to the Gallery': ContributingPage,
    'font-size and line-height': FontSizePage,
    'Form Validation Guidelines': FormValidationPage,
    'Styling Components': StylingComponentsPage
  },
  'Styles - HTML Elements': {
    'nx-alert': NxAlertPage,
    'nx-blockquote': NxBlockquotePage,
    'nx-btn': NxBtnPage,
    'nx-card': NxCardPage,
    'nx-code': NxCodePage,
    'nx-counter': NxCounterPage,
    'nx-fieldset': NxFieldsetStylePage,
    'nx-form-group': NxFormGroupStylePage,
    'nx-form-select': NxFormSelectPage,
    'nx-h*': NxHPage,
    'nx-global-header': NxGlobalHeaderPage,
    'nx-grid': NxGridPage,
    'nx-icon': NxIconPage,
    'nx-list': NxListPage,
    'nx-p': NxPPage,
    'nx-page-title': NxPageTitlePage,
    'nx-pre': NxPrePage,
    'nx-read-only': NxReadOnlyPage,
    'nx-system-notice': NxSystemNoticePage,
    'nx-table': NxTableStylePage,
    'nx-table-container': NxTableContainerPage,
    'nx-threat-number': NxThreatNumberPage,
    'nx-tile': NxTilePage
  },
  'Styles - Mixins & Helpers': {
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
  'Layout Examples': {
    'Form Layout Styles': NxFormLayoutPage,
    'Page Layout': PageLayoutPage,
    'Read-Only Grid Tile Layout': NxReadOnlyGridTilePage
  },
  'JavaScript & TypeScript Utilities': {
    'TooltipConfigProps': TooltipConfigPropsPage,
    'Policy Threat Level Utils': PolicyThreatLevelUtilsPage,
    'Validation Utils': ValidationUtilsPage,
    'useToggle': UseTogglePage,
    'ID Utils': IdUtilPage,
    'withClass Higher-Order Component': WithClassPage
  }
};

export default pageConfig;
