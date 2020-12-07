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
//import NxTextInputStylesPage from './styles/NxTextInputStyles/NxTextInputStylesPage';
import NxBtnPage from './styles/NxBtn/NxBtnPage';
import NxThreatIndicatorPage from './components/NxThreatIndicator/NxThreatIndicatorPage';
import NxRadioPage from './components/NxRadio/NxRadioPage';
import NxVulnerabilityDetailsPage from './components/NxVulnerabilityDetails/NxVulnerabilityDetailsPage';
import NxListPage from './styles/NxList/NxListPage';
import NxTableStylePage from './styles/NxTable/NxTableStylePage';
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

const pageConfig: PageConfig = {
  'React Components': {
    NxAccordion: NxAccordionPage,
    NxStatefulAccordion: NxStatefulAccordionPage,
    NxAlert: NxAlertComponentsPage,
    NxStatefulAlert: NxStatefulAlertComponentsPage,
    NxBackButton: NxBackButtonPage,
    NxBinaryDonutChart: NxBinaryDonutChartPage,
    NxButton: NxButtonPage,
    NxCheckbox: NxCheckboxPage,
    NxStatefulCheckbox: NxStatefulCheckboxPage,
    NxCloseButton: NxCloseButtonPage,
    NxDropdown: NxDropdownPage,
    NxStatefulDropdown: NxStatefulDropdownPage,
    NxFilterInput: NxFilterInputPage,
    NxFontAwesomeIcon: NxFontAwesomeIconPage,
    NxLoadError: NxLoadErrorPage,
    NxLoadWrapper: NxLoadWrapperPage,
    NxLoadingSpinner: NxLoadingSpinnerPage,
    NxModal: NxModalPage,
    NxNexusPageHeader: NxNexusPageHeaderPage,
    NxPageHeader: NxPageHeaderPage,
    NxPagination: NxPaginationPage,
    NxIndeterminatePagination: NxIndeterminatePaginationPage,
    NxPolicyThreatSlider: NxPolicyThreatSliderPage,
    NxRadio: NxRadioPage,
    NxSubmitMask: NxSubmitMaskPage,
    NxStatefulSubmitMask: NxStatefulSubmitMaskPage,
    NxTable: NxTablePage,
    NxTabs: NxTabsPage,
    NxStatefulTabs: NxStatefulTabsPage,
    NxTextInput: NxTextInputPage,
    NxStatefulTextInput: NxStatefulTextInputPage,
    NxThreatIndicator: NxThreatIndicatorPage,
    NxTooltip: NxTooltipPage,
    NxOverflowTooltip: NxOverflowTooltipPage,
    NxTreeView: NxTreeViewPage,
    NxTreeViewMultiSelect: NxTreeViewMultiSelect,
    NxStatefulTreeViewMultiSelect: NxStatefulTreeViewMultiSelect,
    NxTreeViewRadioSelect: NxTreeViewRadioSelectPage,
    NxStatefulTreeViewRadioSelect: NxStatefulTreeViewRadioSelectPage,
    NxVulnerabilityDetails: NxVulnerabilityDetailsPage
  },
  'Guidelines': {
    'Additional Resources': AdditionalResourcePage,
    'Contributing to the Gallery': ContributingPage,
    'font-size and line-height': FontSizePage,
    'Form Validation Guidelines': FormValidationPage,
    'Styling Components': StylingComponentsPage
  },
  'Styles - HTML Elements': {
    'nx-alert': NxAlertPage,
    'nx-btn': NxBtnPage,
    'nx-card': NxCardPage,
    'nx-code': NxCodePage,
    'nx-counter': NxCounterPage,
    'nx-grid': NxGridPage,
    'nx-icon': NxIconPage,
    'nx-list': NxListPage,
    'nx-page-title': NxPageTitlePage,
    'nx-form-select': NxFormSelectPage,
    'nx-table': NxTableStylePage,
    //'nx-text-input': NxTextInputStylesPage,
    'nx-threat-number': NxThreatNumberPage,
    'nx-tile': NxTilePage
  },
  'Styles - Mixins & Helpers': {
    'Custom app font size': NxFontSizePage,
    'nx-clickable': NxClickablePage,
    'nx-container-helpers': NxContainerHelpersPage,
    'nx-scrollable': NxScrollablePage,
    'nx-truncate-ellipsis': NxTruncatePage
  },
  'Layout Examples': {
    'Form Layout Styles': NxFormLayoutPage,
    'Page Layout': PageLayoutPage
  },
  'JavaScript & TypeScript Utilities': {
    'TooltipConfigProps': TooltipConfigPropsPage,
    'Policy Threat Level Utils': PolicyThreatLevelUtilsPage,
    'Validation Utils': ValidationUtilsPage
  }
};

export default pageConfig;
