/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import NxTabs from '../NxTabs';
import NxTabList from '../NxTabList';
import NxTab from '../NxTab';
import NxTabPanel from '../NxTabPanel';

describe('NxTabs', function () {
  it('renders with a unique id each time', function () {
    const firstTabs = shallow(
      <NxTabs onTabSelect={() => {}} activeTab={0}>
        <NxTabList>
          <NxTab>Tabs 0 Tab 0</NxTab>
        </NxTabList>
      </NxTabs>
    );
    const secondTabs = shallow(
      <NxTabs onTabSelect={() => {}} activeTab={0}>
        <NxTabList>
          <NxTab>Tabs 1 Tab 0</NxTab>
        </NxTabList>
      </NxTabs>
    );

    expect(firstTabs).not.toHaveProp('id', secondTabs.prop('id'));
  });

  it('renders with the correct classnames', function () {
    const component = shallow(
      <NxTabs onTabSelect={() => {}} activeTab={-1} className="test">
        <NxTabList>
          <NxTab>Tab 0</NxTab>
        </NxTabList>
        <NxTabPanel>Content 0</NxTabPanel>
      </NxTabs>
    );

    expect(component).toHaveClassName('nx-tabs test');
  });

  it('renders a generated id', function () {
    const component = shallow(
      <NxTabs onTabSelect={() => {}} activeTab={-1}>
        <NxTabList>
          <NxTab>Tab 0</NxTab>
        </NxTabList>
        <NxTabPanel>Content 0</NxTabPanel>
      </NxTabs>
    );

    expect(component.prop('id')).toMatch(/^nx-tabs-\d+$/);
  });

  it('renders using as specific id', function () {
    const component = shallow(
      <NxTabs onTabSelect={() => {}} activeTab={-1} id="my-tabs">
        <NxTabList>
          <NxTab>Tab 0</NxTab>
        </NxTabList>
        <NxTabPanel>Content 0</NxTabPanel>
      </NxTabs>
    );

    expect(component.prop('id')).toMatch('my-tabs');
  });

  it('renders no tab contents when none are active', function () {
    const component = mount(
      <NxTabs onTabSelect={() => {}} activeTab={-1}>
        <NxTabList>
          <NxTab>Tab 0</NxTab>
        </NxTabList>
        <NxTabPanel>Content 0</NxTabPanel>
      </NxTabs>
    );

    expect(component.find(NxTab)).not.toHaveClassName('active');
    expect(component.find(NxTabPanel)).toBeEmptyRender();
  });

  it('renders no tab contents when no active tab is specified', function () {
    const component = mount(
      <NxTabs onTabSelect={() => {}}>
        <NxTabList>
          <NxTab>Tab 0</NxTab>
        </NxTabList>
        <NxTabPanel>Content 0</NxTabPanel>
      </NxTabs>
    );

    expect(component.find(NxTab)).not.toHaveClassName('active');
    expect(component.find(NxTabPanel)).toBeEmptyRender();
  });

  it('activates the active tab', function () {
    const component = mount(
      <NxTabs onTabSelect={() => {}} activeTab={1}>
        <NxTabList>
          <NxTab>Tab 0</NxTab>
          <NxTab>Tab 1</NxTab>
        </NxTabList>
        <NxTabPanel>Content 0</NxTabPanel>
        <NxTabPanel>Content 1</NxTabPanel>
      </NxTabs>
    );

    expect(component.find('[role="tab"]').first()).not.toHaveClassName('active');
    expect(component.find('[role="tab"]').last()).toHaveClassName('active');
    expect(component.find('[role="tabpanel"]')).toHaveText('Content 1');
  });

  it('calls onTabSelect when a tab is clicked', function () {
    const onTabSelect = jest.fn();
    const component = mount(
      <NxTabs activeTab={0} onTabSelect={onTabSelect}>
        <NxTabList>
          <NxTab>Tab 0</NxTab>
        </NxTabList>
      </NxTabs>
    );

    component.find('[role="tab"]').simulate('click');

    expect(onTabSelect).toHaveBeenCalledWith(0);
  });

  it('calls onTabSelect when a tab is selected via keyboard', function () {
    const onTabSelect = jest.fn();
    const component = mount(
      <NxTabs activeTab={0} onTabSelect={onTabSelect}>
        <NxTabList>
          <NxTab>Tab 0</NxTab>
        </NxTabList>
      </NxTabs>
    );

    component.find('[role="tab"]').simulate('keypress', { key: ' ' });

    expect(onTabSelect).toHaveBeenCalledWith(0);
  });
});
