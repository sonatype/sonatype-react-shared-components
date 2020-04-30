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
import NxTextInputStylesPage from './styles/NxTextInputStyles/NxTextInputStylesPage';
import NxBtnPage from './styles/NxBtn/NxBtnPage';
import NxThreatBarPage from './components/NxThreatBar/NxThreatBarPage';
import NxRadioPage from './components/NxRadio/NxRadioPage';
import NxVulnerabilityDetailsPage from './components/NxVulnerabilityDetails/NxVulnerabilityDetailsPage';
import NxListPage from './styles/NxList/NxListPage';
import NxTableStylePage from './styles/NxTable/NxTableStylePage';
import NxAlertComponentsPage from './components/NxAlert/NxAlertPage';
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
import NxTreeViewPage from './components/NxTreeView/NxTreeViewPage';
import NxTreeViewRadioSelectPage from './components/NxTreeViewRadioSelect/NxTreeViewRadioSelectPage';
import NxStatefulTreeViewRadioSelectPage
  from './components/NxStatefulTreeViewRadioSelect/NxStatefulTreeViewRadioSelectPage';
import NxTreeViewMultiSelect from './components/NxTreeViewMultiSelect/NxTreeViewMultiSelectPage';
import NxStatefulTreeViewMultiSelect
  from './components/NxStatefulTreeViewMultiSelect/NxStatefulTreeViewMultiSelectPage';
import NxTooltipPage from './components/NxTooltip/NxTooltipPage';
import NxFilterInputPage from './components/NxFilterInput/NxFilterInputPage';
import NxPolicyThreatSliderPage from './components/NxPolicyThreatSlider/NxPolicyThreatSliderPage';
import NxDropdownPage from './components/NxDropdown/NxDropdownPage';
import FormValidationPage from './guidelines/FormValidation/FormValidationPage';
import NxStatefulDropdownPage from './components/NxStatefulDropdown/NxStatefulDropdownPage';
import NxStatefulCheckboxPage from './components/NxStatefulCheckbox/NxStatefulCheckboxPage';
import FontSizePage from './guidelines/FontSize/FontSizePage';

const pageConfig: PageConfig = {
  'Styles - HTML Elements': {
    'nx-page-title': NxPageTitlePage,
    'nx-tile': NxTilePage,
    'nx-btn': NxBtnPage,
    'nx-list': NxListPage,
    'nx-text-input': NxTextInputStylesPage,
    'nx-alert': NxAlertPage,
    'nx-table': NxTableStylePage,
    'nx-grid': NxGridPage,
    'nx-counter': NxCounterPage,
    'nx-icon': NxIconPage,
    'nx-threat-number': NxThreatNumberPage,
    'Form Layout Styles': NxFormLayoutPage
  },
  'Styles - Mixins': {
    'nx-container-helpers': NxContainerHelpersPage
  },
  'Guidelines': {
    'Form Validation Guidelines': FormValidationPage,
    'font-size and line-height': FontSizePage
  },
  'React Components': {
    NxButton: NxButtonPage,
    NxCheckbox: NxCheckboxPage,
    NxRadio: NxRadioPage,
    NxTextInput: NxTextInputPage,
    NxBackButton: NxBackButtonPage,
    NxLoadingSpinner: NxLoadingSpinnerPage,
    NxLoadError: NxLoadErrorPage,
    NxLoadWrapper: NxLoadWrapperPage,
    NxModal: NxModalPage,
    NxAlert: NxAlertComponentsPage,
    NxThreatBar: NxThreatBarPage,
    NxFontAwesomeIcon: NxFontAwesomeIconPage,
    NxVulnerabilityDetails: NxVulnerabilityDetailsPage,
    NxSubmitMask: NxSubmitMaskPage,
    NxTable: NxTablePage,
    NxTreeView: NxTreeViewPage,
    NxTooltip: NxTooltipPage,
    NxTreeViewRadioSelect: NxTreeViewRadioSelectPage,
    NxTreeViewMultiSelect: NxTreeViewMultiSelect,
    NxPolicyThreatSlider: NxPolicyThreatSliderPage,
    NxFilterInput: NxFilterInputPage,
    NxDropdown: NxDropdownPage
  },
  'Stateful React Components': {
    NxStatefulCheckbox: NxStatefulCheckboxPage,
    NxStatefulTextInput: NxStatefulTextInputPage,
    NxStatefulSubmitMask: NxStatefulSubmitMaskPage,
    NxStatefulDropdown: NxStatefulDropdownPage,
    NxStatefulTreeViewMultiSelect: NxStatefulTreeViewMultiSelect,
    NxStatefulTreeViewRadioSelect: NxStatefulTreeViewRadioSelectPage
  }
};

export default pageConfig;
