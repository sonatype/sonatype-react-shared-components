/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ReactElement } from 'react';
import { NxH3, NxLoadError, NxLoadingSpinner } from '../../..';
import NxList from '../NxList';
import { NxListProps } from '../types';
import { getShallowComponent } from '../../../__testutils__/enzymeUtils';
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

  it('passes props to the parent component and renders bulleted list', function() {
    const contentEl = getShallow({bulleted: true})
    expect(contentEl).toHaveClassName('nx-list--bulleted');
  });

  it('renders the children in an .nx-list__item', function() {
    const children = [
      <NxList.Item key="1">
        <NxList.Text>Test Item 1 Text</NxList.Text>
        <NxList.Subtext>Test Item 1 Subtext</NxList.Subtext>
      </NxList.Item>,
      <NxList.Item key="2">
        <NxList.Text>Test Item 2 Text</NxList.Text>
        <NxList.Subtext>Test Item 2 Subtext</NxList.Subtext>
      </NxList.Item>
    ];

    const contentEl = getShallow({children});
    expect(contentEl).toExist();
    expect(contentEl).toContainMatchingElements(2, NxList.Item);
    contentEl.find('li').forEach((e) => {
      expect(e.hasClass('nx-list__item'));
    });
  });

  it('renders a simple list with a title', function() {
    const title = 'Simple Title';
    const children = [
      <NxH3 key="1">{title}</NxH3>
    ];

    const contentEl = getShallow({children});
    expect(contentEl.find(NxH3)).toExist();
    expect(contentEl.find(NxH3).shallow()).toHaveHTML(`<h3 class="nx-h3">${title}</h3>`);
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

    // the enzyme wrapper contains the <NxTableBody> as its top element, the native el is one level down
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
});
