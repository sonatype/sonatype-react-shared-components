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

const pageConfig: PageConfig = {
  'Styles - HTML Elements': {
    'nx-alert': NxAlertPage,
    'nx-btn': NxBtnPage,
    'nx-counter': NxCounterPage,
    'nx-grid': NxGridPage,
    'nx-icon': NxIconPage,
    'nx-list': NxListPage,
    'nx-page-title': NxPageTitlePage,
    'nx-table': NxTableStylePage,
    'nx-text-input': NxTextInputStylesPage,
    'nx-threat-number': NxThreatNumberPage,
    'nx-tile': NxTilePage
  },
  'Styles - Mixins': {
    'nx-container-helpers': NxContainerHelpersPage
  },
  'Layout Examples': {
    'Form Layout Styles': NxFormLayoutPage
  },
  'Guidelines': {
    'Form Validation Guidelines': FormValidationPage
  },
  'React Components': {
    NxAlert: NxAlertComponentsPage,
    NxBackButton: NxBackButtonPage,
    NxButton: NxButtonPage,
    NxCheckbox: NxCheckboxPage,
    NxDropdown: NxDropdownPage,
    NxFilterInput: NxFilterInputPage,
    NxFontAwesomeIcon: NxFontAwesomeIconPage,
    NxLoadError: NxLoadErrorPage,
    NxLoadingSpinner: NxLoadingSpinnerPage,
    NxLoadWrapper: NxLoadWrapperPage,
    NxModal: NxModalPage,
    NxPolicyThreatSlider: NxPolicyThreatSliderPage,
    NxRadio: NxRadioPage,
    NxSubmitMask: NxSubmitMaskPage,
    NxTable: NxTablePage,
    NxTextInput: NxTextInputPage,
    NxThreatBar: NxThreatBarPage,
    NxTooltip: NxTooltipPage,
    NxTreeView: NxTreeViewPage,
    NxTreeViewMultiSelect: NxTreeViewMultiSelect,
    NxTreeViewRadioSelect: NxTreeViewRadioSelectPage,
    NxVulnerabilityDetails: NxVulnerabilityDetailsPage
  },
  'Stateful React Components': {
    NxStatefulCheckbox: NxStatefulCheckboxPage,
    NxStatefulDropdown: NxStatefulDropdownPage,
    NxStatefulSubmitMask: NxStatefulSubmitMaskPage,
    NxStatefulTextInput: NxStatefulTextInputPage,
    NxStatefulTreeViewMultiSelect: NxStatefulTreeViewMultiSelect,
    NxStatefulTreeViewRadioSelect: NxStatefulTreeViewRadioSelectPage
  }
};

export default pageConfig;
