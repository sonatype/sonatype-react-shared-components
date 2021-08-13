/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ReactElement } from 'react';
import { NxLoadError, NxLoadingSpinner } from '../../..';
import NxList from '../NxList';
import { NxListProps } from '../types';
import { getMountedComponent, getShallowComponent } from '../../../__testutils__/enzymeUtils';
import { act } from 'react-dom/test-utils';
import { mount, ReactWrapper } from 'enzyme';

describe('NxList', function() {

  let mountContainers: HTMLElement[] = [];

  function getMountContainer() {
    const newContainer = document.createElement('div');
    mountContainers.push(newContainer);
    document.body.append(newContainer);

    return newContainer;
  }

  // create a mounted wrapper that is attached to the document, and deal with the timing complexities
  // triggered by NxList's MutationObserver usage
  async function mountAttached(jsx: ReactElement) {
    let retval: ReactWrapper;
    await act(async () => {
      retval = mount(jsx, { attachTo: getMountContainer() });
    });
    retval!.update();

    return retval!;
  }

  afterEach(function() {
    mountContainers.forEach(container => document.body.removeChild(container));
    mountContainers = [];
  });

  const minimalProps: NxListProps = {};
  const getShallow = getShallowComponent(NxList, minimalProps);
  const getMounted = getMountedComponent(NxList, minimalProps);

  it('renders a list', function() {
    const nxList = getShallow();
    expect(nxList).toMatchSelector('.nx-list');
  });

  it('renders the classNames given to it', function() {
    const extendedProps: Partial<NxListProps> = {
      className: 'test-classname ufo'
    };
    const nxList = getShallow(extendedProps);
    expect(nxList).toMatchSelector('.nx-list.test-classname.ufo');
  });

  it('renders a bulleted list correctly', function() {
    const contentEl = getShallow({bulleted: true});
    expect(contentEl).toHaveClassName('nx-list--bulleted');
  });
  it('shows the emptyMessage when there are no children', async function() {
    const component = await mountAttached(
      <NxList emptyMessage="Empty message">
      </NxList>
    );

    expect(component.find('span')).toHaveText('Empty message');
  });

  it('shows the emptyMessage when the children are removed after the existing', async function() {
    const component = await mountAttached(
      <NxList emptyMessage="Empty message">
        <NxList.Item>
          <NxList.Text>Test 1</NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>Test 2</NxList.Text>
        </NxList.Item>
      </NxList>
    );

    await act(async () => {
      component.setProps({ children: [] });
    });
    component.update();

    expect(component.find('span')).toHaveText('Empty message');
  });

  it('shows the emptyMessage when there are no children, no error, and not loading', async function() {

    const trulyEmptyComponent = await mountAttached(<NxList emptyMessage="Empty message"></NxList>),
        emptyListComponent = await mountAttached(<NxList emptyMessage="Empty message">{[]}</NxList>);

    // the enzyme wrapper contains the <NxList> as its top element, the native el is one level down
    expect(trulyEmptyComponent.children()).toMatchSelector('ul');
    expect(trulyEmptyComponent).toContainExactlyOneMatchingElement('li.nx-list__item');
    expect(trulyEmptyComponent.find('span')).toHaveText('Empty message');

    expect(emptyListComponent.children()).toMatchSelector('ul');
    expect(emptyListComponent).toContainExactlyOneMatchingElement('li.nx-list__item');
    expect(emptyListComponent.find('span')).toHaveText('Empty message');
  });

  it('does not show the emptyMessage when there are children', async function() {
    const component = await mountAttached(
      <NxList emptyMessage="Empty message">
        <NxList.Item>
          <NxList.Text>Foo</NxList.Text>
        </NxList.Item>
      </NxList>
    );

    expect(component).not.toHaveText('Empty message');
  });

  it('does not show the emptyMessage when isLoading', async function() {
    const component = await mountAttached(<NxList emptyMessage="Empty message" isLoading />);

    expect(component).not.toHaveText('Empty message');
  });

  it('does not show the emptyMessage when in error', async function() {
    const component = await mountAttached(
      <NxList emptyMessage="Empty message" error="Errr" retryHandler={() => {}}>
      </NxList>
    );

    expect(component).not.toHaveText('Empty message');
  });

  it('removes the emptyMessage when children are added', async function() {
    const component = await mountAttached(
      <NxList emptyMessage="Empty message"></NxList>
    );

    await act(async () => {
      component.setProps({
        children: (
          <>
            <NxList.Item key="1">
              <NxList.Text>Foo</NxList.Text>
            </NxList.Item>
            <NxList.Item key="2">
              <NxList.Text>Bar</NxList.Text>
            </NxList.Item>
          </>
        )
      });
    });
    component.update();

    expect(component.find('li').length).toBe(2);
    expect(component).not.toIncludeText('Empty message');
  });

  it('renders an empty list', async function() {
    const component = await mountAttached(
      <NxList emptyMessage="Empty message"></NxList>
    );

    expect(component.find('li').length).toBe(1);
    expect(component).toIncludeText('Empty message');
  });

  it('shows the loading spinner when isLoading is set', function() {
    const component = getShallow({isLoading: true});

    expect(component.children()).toMatchSelector('li');
    expect(component).toContainExactlyOneMatchingElement('li.nx-list__item');
    expect(component.find('li').children()).toMatchSelector(NxLoadingSpinner);
  });

  it('shows the error when error is set', async function() {
    const retryHandler = jest.fn(),
        component = getShallow({error: 'Error message', retryHandler: retryHandler});

    expect(component.children()).toMatchSelector('li');
    expect(component).toContainExactlyOneMatchingElement('li.nx-list__item');
    expect(component.find('li').children()).toMatchSelector(NxLoadError);
    expect(component.find(NxLoadError)).toHaveProp('error', 'Error message');
    expect(component.find(NxLoadError)).toHaveProp('retryHandler', retryHandler);
  });

  it('renders children correctly', async function() {
    const children = [
      <NxList.Item key="1">
        <NxList.Text>Test Text</NxList.Text>
        <NxList.Subtext>Test Subtext</NxList.Subtext>
      </NxList.Item>,
      <NxList.ButtonItem key="3">
        <NxList.Text>Test2 ButtonItem Text</NxList.Text>
        <NxList.Subtext>Test2 ButtonItem Subtext</NxList.Subtext>
      </NxList.ButtonItem>,
      <NxList.LinkItem key="4" href="www.sonatype.com">
        <NxList.Text>Test2 LinkItem Text</NxList.Text>
        <NxList.Subtext>Test2 LinkItem Subtext</NxList.Subtext>
      </NxList.LinkItem>
    ];

    const contentEl = getMounted({children});
    expect(contentEl).toExist();
    expect(contentEl).toContainMatchingElements(3, 'li');
    expect(contentEl).toContainMatchingElements(1, 'button');
    expect(contentEl).toContainMatchingElements(1, 'a');

    expect(contentEl.find('li').at(0)).toHaveClassName('nx-list__item');
    expect(contentEl.find('li').at(0).find('span').at(0)).toHaveClassName('nx-list__text');
    expect(contentEl.find('li').at(0).find('span').at(0)).toHaveText('Test Text');
    expect(contentEl.find('li').at(0).find('span').at(1)).toHaveClassName('nx-list__subtext');
    expect(contentEl.find('li').at(0).find('span').at(1)).toHaveText('Test Subtext');

    expect(contentEl.find('li').at(1)).toHaveClassName('nx-list__item nx-list__item--clickable');
    expect(contentEl.find('li').at(1).find('button')).toHaveClassName('nx-list__btn');
    expect(contentEl.find('li').at(1).find('button').find('span').at(0)).toHaveClassName('nx-list__text');
    expect(contentEl.find('li').at(1).find('button').find('span').at(0)).toHaveText('Test2 ButtonItem Text');
    expect(contentEl.find('li').at(1).find('button').find('span').at(1)).toHaveClassName('nx-list__subtext');
    expect(contentEl.find('li').at(1).find('button').find('span').at(1)).toHaveText('Test2 ButtonItem Subtext');

    expect(contentEl.find('li').at(2)).toHaveClassName('nx-list__item nx-list__item--clickable');
    expect(contentEl.find('li').at(2).find('a')).toHaveClassName('nx-list__link');
    expect(contentEl.find('li').at(2).find('a').find('span').at(0)).toHaveClassName('nx-list__text');
    expect(contentEl.find('li').at(2).find('a').find('span').at(0)).toHaveText('Test2 LinkItem Text');
    expect(contentEl.find('li').at(2).find('a').find('span').at(1)).toHaveClassName('nx-list__subtext');
    expect(contentEl.find('li').at(2).find('a').find('span').at(1)).toHaveText('Test2 LinkItem Subtext');

  });
});
