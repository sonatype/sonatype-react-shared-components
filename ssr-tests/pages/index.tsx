/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import type { NextPage } from 'next'
import { faEdit, faBicycle } from '@fortawesome/free-solid-svg-icons';
import {
  NxAccordion,
  NxAlert,
  NxBackButton,
  NxBinaryDonutChart,
  NxButton,
  NxCheckbox,
  NxCloseButton,
  NxCodeSnippet,
  NxCollapsibleItems,
  NxCollapsibleMultiSelect,
  NxCollapsibleRadioSelect,
  NxColorPicker,
  NxCombobox,
  NxDateInput,
  NxDropdown,
  NxErrorAlert,
  NxFieldset,
  NxFilterDropdown,
  NxFilterInput,
  NxFontAwesomeIcon,
  NxForm,
  NxFormGroup,
  NxFormSelect,
  NxGlobalSidebar,
  NxGlobalSidebarFooter,
  NxIconDropdown,
  NxIndeterminatePagination,
  NxInfoAlert,
  NxList,
  NxLoadError,
  NxLoadingSpinner,
  NxLoadWrapper,
  NxModal,
  NxOverflowTooltip,
  NxPageHeader,
  NxPageMain,
  NxPagination,
  NxPolicyThreatSlider,
  NxPolicyViolationIndicator,
  NxProgressBar,
  NxRadio,
  NxSearchDropdown,
  NxSearchTransferList,
  NxSegmentedButton,
  NxSmallThreatCounter,
  NxStableUniqueIdContext,
  NxStatefulAccordion,
  NxStatefulAlert,
  NxStatefulCheckbox,
  NxStatefulCollapsibleMultiSelect,
  NxStatefulCollapsibleRadioSelect,
  NxStatefulDateInput,
  NxStatefulDropdown,
  NxStatefulErrorAlert,
  NxStatefulGlobalSidebar,
  NxStatefulIconDropdown,
  NxStatefulInfoAlert,
  NxStatefulSearchDropdown,
  NxStatefulSearchTransferList,
  NxStatefulSegmentedButton,
  NxStatefulSubmitMask,
  NxStatefulSuccessAlert,
  NxStatefulTabs,
  NxStatefulTextInput,
  NxStatefulToggle,
  NxStatefulTransferList,
  NxStatefulWarningAlert,
  NxSubmitMask,
  NxSuccessAlert,
  NxTab,
  NxTable,
  NxTabList,
  NxTabPanel,
  NxTabs,
  NxTag,
  NxTextInput,
  NxTextLink,
  NxThreatCounter,
  NxThreatIndicator,
  NxThreatIndicatorLegend,
  NxToast,
  NxToastContainer,
  NxToggle,
  NxTooltip,
  NxTransferList,
  NxTree,
  NxVulnerabilityDetails,
  NxWarningAlert,
  NxFileUpload,
  NxStatefulFileUpload,
  NxDescriptionList,
  useUniqueId
} from '@sonatype/react-shared-components';

const vulnerabilityDetailsJson = require('../vulnerabilityDetailsJson.json');
const noop = () => {};

const Home: NextPage = () => {
  const id = useUniqueId('foo');

  return (
    <div className="nx-page" id={id}>
      <NxPageMain>
        <NxAccordion>
          <NxAccordion.Header>
            <NxAccordion.Title>Foo</NxAccordion.Title>
          </NxAccordion.Header>
        </NxAccordion>
        <NxAccordion open={true}>
          <NxAccordion.Header>
            <NxAccordion.Title>Foo</NxAccordion.Title>
          </NxAccordion.Header>
        </NxAccordion>
        <NxStatefulAccordion>
          <NxAccordion.Header>
            <NxAccordion.Title>Foo</NxAccordion.Title>
          </NxAccordion.Header>
        </NxStatefulAccordion>
        <NxAlert icon={faEdit} />
        <NxSuccessAlert />
        <NxInfoAlert />
        <NxWarningAlert />
        <NxErrorAlert />
        <NxStatefulAlert icon={faEdit} />
        <NxStatefulSuccessAlert />
        <NxStatefulInfoAlert />
        <NxStatefulWarningAlert />
        <NxStatefulErrorAlert />
        <NxBackButton href="#"/>
        <NxBinaryDonutChart percent={50} />
        <NxButton />
        <NxSegmentedButton variant="primary" buttonContent="Foo" isOpen={false} onToggleOpen={noop} onClick={noop}>
          <button className="nx-dropdown-button">Bar</button>
        </NxSegmentedButton>
        <NxStatefulSegmentedButton variant="primary" buttonContent="Foo" onClick={noop}>
          <button className="nx-dropdown-button">Bar</button>
        </NxStatefulSegmentedButton>
        <NxCheckbox isChecked={false} />
        <NxCloseButton />
        <NxCollapsibleItems isOpen={true} triggerContent="foo" />
        <NxCollapsibleMultiSelect name="travel"
                                  id="nx-travel-collapsible-items"
                                  isOpen={true}
                                  onToggleCollapse={noop}
                                  options={[{ id: 'a', name: 'A' }]}
                                  selectedIds={new Set(['a'])}
                                  onChange={noop}
                                  filter=""
                                  filterPlaceholder="filter vehicle name"
                                  filterThreshold={3}
                                  onFilterChange={noop}
                                  filteredOptions={[{ id: 'a', name: 'A' }]}>
          <NxFontAwesomeIcon icon={faBicycle}/>
          <span>Transportation</span>
        </NxCollapsibleMultiSelect>
        <NxStatefulCollapsibleMultiSelect name="travel"
                                  id="nx-travel-collapsible-items"
                                  isOpen={true}
                                  options={[{ id: 'a', name: 'A' }]}
                                  selectedIds={new Set(['a'])}
                                  onChange={noop}
                                  filterPlaceholder="filter vehicle name"
                                  filterThreshold={3}>
          <NxFontAwesomeIcon icon={faBicycle}/>
          <span>Transportation</span>
        </NxStatefulCollapsibleMultiSelect>
        <NxCollapsibleRadioSelect name="travel"
                                  id="nx-travel-collapsible-items"
                                  isOpen={true}
                                  onToggleCollapse={noop}
                                  options={[{ id: 'a', name: 'A' }]}
                                  selectedId={'a'}
                                  onChange={noop}
                                  filter=""
                                  filterPlaceholder="filter vehicle name"
                                  filterThreshold={3}
                                  onFilterChange={noop}
                                  filteredOptions={[{ id: 'a', name: 'A' }]}>
          <NxFontAwesomeIcon icon={faBicycle}/>
          <span>Transportation</span>
        </NxCollapsibleRadioSelect>
        <NxStatefulCollapsibleRadioSelect name="travel"
                                  id="nx-travel-collapsible-items"
                                  isOpen={true}
                                  options={[{ id: 'a', name: 'A' }]}
                                  selectedId={'a'}
                                  onChange={noop}
                                  filterPlaceholder="filter vehicle name"
                                  filterThreshold={3}>
          <NxFontAwesomeIcon icon={faBicycle}/>
          <span>Transportation</span>
        </NxStatefulCollapsibleRadioSelect>
        <NxColorPicker label="foo" />
        <NxStatefulCheckbox defaultChecked={false} />
        <NxCodeSnippet label="foo" content="bar" />
        <NxDateInput value="2022-01-01" isPristine={false} />
        <NxStatefulDateInput />
        <NxDropdown label="foo" isOpen={false}>
          <button className="nx-dropdown-button">Bar</button>
        </NxDropdown>
        <NxStatefulDropdown label="foo">
          <button className="nx-dropdown-button">Bar</button>
        </NxStatefulDropdown>
        <NxIconDropdown title="foo" isOpen={false}>
          <button className="nx-dropdown-button">Bar</button>
        </NxIconDropdown>
        <NxStatefulIconDropdown title="foo">
          <button className="nx-dropdown-button">Bar</button>
        </NxStatefulIconDropdown>
        <NxFieldset label="foo" />
        <NxFilterInput value="foo" />
        <NxFontAwesomeIcon icon={faEdit} />
        <NxForm onSubmit={noop}>
          Foo
        </NxForm>
        <NxFormGroup label="foo">
          <NxTextInput value="bar" isPristine={false} />
        </NxFormGroup>
        <NxFormSelect />
        <NxGlobalSidebar isOpen={true}
                         toggleOpenIcon={faEdit}
                         toggleCloseIcon={faEdit}
                         onToggleClick={noop}
                         logoImg=""
                         logoAltText="Foo"
                         logoLink="#" />
        <NxStatefulGlobalSidebar isDefaultOpen={false}
                                 toggleOpenIcon={faEdit}
                                 toggleCloseIcon={faEdit}
                                 logoImg=""
                                 logoAltText="Foo"
                                 logoLink="#" />
        <NxGlobalSidebarFooter />
        <NxList>
          <NxList.ButtonItem>
            <NxList.Text>Foo</NxList.Text>
            <NxList.Subtext>Bar</NxList.Subtext>
          </NxList.ButtonItem>
          <NxList.LinkItem href="#">
            <NxList.Text>Foo</NxList.Text>
          </NxList.LinkItem>
          <NxList.Item>
            <NxList.Text>Foo</NxList.Text>
          </NxList.Item>
        </NxList>
        <NxLoadError />
        <NxLoadWrapper retryHandler={noop}>
          Foo
        </NxLoadWrapper>
        <NxLoadingSpinner />
        <NxModal onClose={noop} />
        <NxPageHeader />
        <NxPagination onChange={noop} pageCount={43}  currentPage={2} />
        <NxIndeterminatePagination onPrevPageSelect={noop} onNextPageSelect={noop} />
        <NxPolicyThreatSlider value={[5, 8]} />
        <NxPolicyViolationIndicator />
        <NxProgressBar value={50} label="Foo Bar" />
        <NxRadio name="Foo" value="Bar" isChecked={false} />
        <NxSearchDropdown onSelect={noop}
                          searchText=""
                          onSearchTextChange={noop}
                          onSearch={noop}
                          matches={[]} />
        <NxStatefulSearchDropdown onSelect={noop} onSearch={noop} matches={[]} />
        <NxSearchTransferList searchText=""
                              onSearchTextChange={noop}
                              addedItemsFilter=""
                              onAddedItemsFilterChange={noop}
                              onSearch={noop}
                              loading={false}
                              searchMatches={[]}
                              onSearchMatchSelect={noop}
                              addedItems={[{ id: 'a', displayName: 'b' }]}
                              onRemove={noop} />
        <NxStatefulSearchTransferList onSearch={noop}
                                      loading={false}
                                      searchMatches={[]}
                                      onSearchMatchSelect={noop}
                                      addedItems={[{ id: 'a', displayName: 'b' }]}
                                      onRemove={noop} />
        <NxSubmitMask />
        <NxStatefulSubmitMask />
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Foo</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>Bar</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
        <NxTabs onTabSelect={noop}>
          <NxTabList>
            <NxTab>Foo</NxTab>
          </NxTabList>
          <NxTabPanel />
        </NxTabs>
        <NxStatefulTabs>
          <NxTabList>
            <NxTab>Foo</NxTab>
          </NxTabList>
          <NxTabPanel />
        </NxStatefulTabs>
        <NxTag>Foo</NxTag>
        <NxTextInput value="foo" isPristine={true} />
        <NxStatefulTextInput />
        <NxTextLink />
        <NxThreatCounter criticalCount={2} />
        <NxSmallThreatCounter criticalCount={2} />
        <NxThreatIndicator />
        <NxThreatIndicatorLegend critical />
        <NxToastContainer>
          <NxToast onClose={noop}>
            <NxAlert icon={faEdit} />
          </NxToast>
        </NxToastContainer>
        <NxToggle isChecked={false} />
        <NxStatefulToggle defaultChecked={true} />
        <NxTooltip title="foo">
          <span>bar</span>
        </NxTooltip>
        <NxOverflowTooltip>
          <div style={{ width: '50px' }}>
            supercalifragilisticexpialidocious
          </div>
        </NxOverflowTooltip>
        <NxTransferList allItems={[{ id: 'a', displayName: 'b' }]}
                        selectedItems={new Set(['a'])}
                        availableItemsFilter=""
                        selectedItemsFilter=""
                        onAvailableItemsFilterChange={noop}
                        onSelectedItemsFilterChange={noop}
                        onChange={noop}/>
        <NxStatefulTransferList allItems={[{ id: 'a', displayName: 'b' }]}
                                selectedItems={new Set(['a'])}
                                onChange={noop}/>
        <NxTree>
          <NxTree.Item>
            <NxTree.ItemLabel>Foo</NxTree.ItemLabel>
          </NxTree.Item>
        </NxTree>
        <NxTree>
          <NxTree.StatefulItem>
            <NxTree.ItemLabel>Foo</NxTree.ItemLabel>
          </NxTree.StatefulItem>
        </NxTree>
        <NxVulnerabilityDetails vulnerabilityDetails={vulnerabilityDetailsJson} />
        <NxFilterDropdown isOpen={true}
                          onToggleCollapse={noop}
                          options={[{ id: 'a', displayName: 'b' }]}
                          selectedIds={new Set(['a'])}
                          onChange={noop} />
        <NxFileUpload files={null} onChange={() => {}} />
        <NxStatefulFileUpload />
        <NxDescriptionList>
          <NxDescriptionList.Item>
            <NxDescriptionList.Term>Foo</NxDescriptionList.Term>
            <NxDescriptionList.Description>Foo</NxDescriptionList.Description>
          </NxDescriptionList.Item>
          <NxDescriptionList.ButtonItem term="foo" description="bar" onClick={noop} />
          <NxDescriptionList.LinkItem term="foo" description="bar" href="" />
        </NxDescriptionList>
        <NxCombobox value=""
                    onChange={noop}
                    onSearch={noop}
                    matches={[]}/>
      </NxPageMain>
    </div>
  )
}

export default function App() {
  return (
    <NxStableUniqueIdContext>
      <Home />
    </NxStableUniqueIdContext>
  );
}
