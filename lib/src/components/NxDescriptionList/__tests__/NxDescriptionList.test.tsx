/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { render } from '@testing-library/react';
import NxDescriptionList from '../NxDescriptionList';

describe('NxDescriptionList', function() {
  it('adds specified classNames to the element in addition to the defaults when component is empty', function() {
    function EmptyComponent() {
      return null;
    }

    const el = render(<NxDescriptionList className="foo"><EmptyComponent /></NxDescriptionList>)
            .container.firstElementChild,
        defaultEl = render(<NxDescriptionList><EmptyComponent /></NxDescriptionList>)
            .container.firstElementChild!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('adds specified classNames to the element in addition to the defaults when not empty', function() {
    const el = render(
      <NxDescriptionList className="foo">
        <NxDescriptionList.Item>
          <NxDescriptionList.Term>Foo</NxDescriptionList.Term>
          <NxDescriptionList.Description>Bar</NxDescriptionList.Description>
        </NxDescriptionList.Item>
      </NxDescriptionList>
    ).container.firstElementChild;

    const defaultEl = render(
      <NxDescriptionList>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term>Foo</NxDescriptionList.Term>
          <NxDescriptionList.Description>Bar</NxDescriptionList.Description>
        </NxDescriptionList.Item>
      </NxDescriptionList>
    ).container.firstElementChild!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('renders a ul with a default empty message when empty', function() {
    const reallyEmpty = render(<NxDescriptionList />),
        reallyEmptyList = reallyEmpty.getByRole('list'),
        reallyEmptyListItem = reallyEmpty.getByRole('listitem');

    expect(reallyEmptyList.tagName).toBe('UL');
    expect(reallyEmptyListItem).toHaveTextContent('This list is empty.');
    expect(reallyEmptyList).toHaveTextContent('This list is empty.');
  });

  it('renders a ul with a default empty message when empty despite child JSX element', function() {
    function EmptyComponent() {
      return null;
    }

    const emptyComponent = render(<NxDescriptionList><EmptyComponent /></NxDescriptionList>),
        emptyComponentList = emptyComponent.getByRole('list'),
        emptyComponentListItem = emptyComponent.getByRole('listitem');

    expect(emptyComponentList.tagName).toBe('UL');
    expect(emptyComponentListItem).toHaveTextContent('This list is empty.');
    expect(emptyComponentList).toHaveTextContent('This list is empty.');
  });

  it('renders a ul with a default empty message when empty despite child list', function() {
    const listComponent = render(<NxDescriptionList>{[]}</NxDescriptionList>),
        listComponentList = listComponent.getByRole('list'),
        listComponentListItem = listComponent.getByRole('listitem');

    expect(listComponentList.tagName).toBe('UL');
    expect(listComponentListItem).toHaveTextContent('This list is empty.');
    expect(listComponentList).toHaveTextContent('This list is empty.');
  });

  it('renders the specified emptyMessage when provided', function() {
    const reallyEmpty = render(<NxDescriptionList emptyMessage="foo" />),
        reallyEmptyList = reallyEmpty.getByRole('list'),
        reallyEmptyListItem = reallyEmpty.getByRole('listitem');

    expect(reallyEmptyListItem).toHaveTextContent('foo');
    expect(reallyEmptyList).toHaveTextContent('foo');
  });

  it('renders a dl when non-empty', function() {
    const component = render(
      <NxDescriptionList>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term>Foo</NxDescriptionList.Term>
          <NxDescriptionList.Description>Bar</NxDescriptionList.Description>
        </NxDescriptionList.Item>
      </NxDescriptionList>
    );

    // dl's don't have a role
    const list = component.container.querySelector('dl')!;

    expect(list).toBeTruthy();
    expect(list).toHaveTextContent('FooBar');
  });

  it('renders terms and definitions for appropriate children', function() {
    const component = render(
      <NxDescriptionList>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term>Foo</NxDescriptionList.Term>
          <NxDescriptionList.Description>Bar</NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term>Baz</NxDescriptionList.Term>
          <NxDescriptionList.Description>Qwerty</NxDescriptionList.Description>
        </NxDescriptionList.Item>
      </NxDescriptionList>
    );

    const terms = component.getAllByRole('term'),
        definitions = component.getAllByRole('definition');

    expect(terms.length).toBe(2);
    expect(terms[0]).toHaveTextContent('Foo');
    expect(terms[1]).toHaveTextContent('Baz');

    expect(definitions.length).toBe(2);
    expect(definitions[0]).toHaveTextContent('Bar');
    expect(definitions[1]).toHaveTextContent('Qwerty');
  });

  it('renders valid HTML children for dl', function() {
    const component = render(
      <NxDescriptionList>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term>Foo</NxDescriptionList.Term>
          <NxDescriptionList.Description>Bar</NxDescriptionList.Description>
        </NxDescriptionList.Item>
        <NxDescriptionList.Item>
          <NxDescriptionList.Term>Bar</NxDescriptionList.Term>
          <NxDescriptionList.Description>qwerty</NxDescriptionList.Description>
        </NxDescriptionList.Item>
      </NxDescriptionList>
    );

    const list = component.container.firstElementChild!;

    expect(list.tagName).toBe('DL');

    for (const item of Array.from(list.children)) {
      expect(item.tagName).toBe('DIV');

      expect(item.childElementCount).toBe(2);
      expect(item.children[0].tagName).toBe('DT');
      expect(item.children[1].tagName).toBe('DD');
    }
  });

  it('attaches a ref to the top-level element', function() {
    const emptyListRef = React.createRef<HTMLDListElement>(),
        nonEmptyListRef = React.createRef<HTMLDListElement>(),
        emptyList = render(<NxDescriptionList ref={emptyListRef} />),
        nonEmptyList = render(
          <NxDescriptionList ref={nonEmptyListRef} >
            <NxDescriptionList.Item>
              <NxDescriptionList.Term>Foo</NxDescriptionList.Term>
              <NxDescriptionList.Description>Bar</NxDescriptionList.Description>
            </NxDescriptionList.Item>
          </NxDescriptionList>
        );

    expect(emptyListRef.current).toBe(emptyList.container.firstElementChild!);
    expect(nonEmptyListRef.current).toBe(nonEmptyList.container.firstElementChild!);
  });
});
