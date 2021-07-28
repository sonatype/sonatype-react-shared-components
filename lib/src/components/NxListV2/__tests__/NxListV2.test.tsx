/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { shallow } from 'enzyme';
import React from 'react';
import { NxLoadingSpinner } from '../../..';
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxListV2 from '../NxListV2';
import { NxListProps } from '../types';

describe('NxListV2', function() {
  const minimalProps: NxListProps = {};
  const getNxList = enzymeUtils.getShallowComponent<NxListProps>(NxListV2, minimalProps);

  it('renders a list', function() {
    const nxList = getNxList();
    expect(nxList.find('ul')).toMatchSelector('.nx-list');
  });

  it('renders the classNames given to it', function() {
    const extendedProps: Partial<NxListProps> = {
      className: 'test-classname ufo'
    };
    const nxList = getNxList(extendedProps);
    expect(nxList.find('ul')).toMatchSelector('.nx-list.test-classname.ufo');
  });

  it('passes props to the parent component and renders bulleted list', function() {
    const contentEl = shallow(
      <NxListV2 bulleted></NxListV2>
    );
    expect(contentEl.find('ul')).toHaveClassName('nx-list--bulleted');
  });

  it('renders the children in an .nx-list__item', function() {
    const children = [
      <NxListV2.Item key="1">
        <NxListV2.Text>Test Item 1 Text</NxListV2.Text>
        <NxListV2.Subtext>Test Item 1 Subtext</NxListV2.Subtext>
      </NxListV2.Item>,
      <NxListV2.Item key="2">
        <NxListV2.Text>Test Item 2 Text</NxListV2.Text>
        <NxListV2.Subtext>Test Item 2 Subtext</NxListV2.Subtext>
      </NxListV2.Item>
    ];

    const contentEl = getNxList({children}).find('ul');
    expect(contentEl).toExist();
    expect(contentEl).toContainMatchingElements(2, NxListV2.Item);
    contentEl.find('li').forEach((e) => {
      expect(e.hasClass('nx-list__item'));
    });
  });

  it('renders a simple list with a title', function() {
    const title = 'Simple Title';
    const children = [
      <NxListV2.Title key="1">{title}</NxListV2.Title>
    ];

    const contentEl = getNxList({children});
    expect(contentEl.find('NxListTitle')).toExist();
    expect(contentEl.find('NxListTitle')).toHaveHTML(`<h3 class="nx-h3">${title}</h3>`);
  });

  it('renders a clickable list whose list item element has prop disabled and is disabled', function() {
    const children = [
      <NxListV2.Button key="1" disabled>
        <NxListV2.Text>Item 1</NxListV2.Text>
      </NxListV2.Button>
    ];

    const contentEl = getNxList({children}).find('ul');
    expect(contentEl.find(NxListV2.Button)).toExist();
    expect(contentEl).toContainMatchingElements(1, NxListV2.Button);
    expect(contentEl).toContainMatchingElements(1, NxListV2.Text);
    expect(contentEl.find(NxListV2.Button)).toHaveProp('disabled');
    expect(contentEl.find(NxListV2.Button)).toBeDisabled();
  });

  it('renders a clickable list whose list item element has prop selected and is selected', function() {
    const children = [
      <NxListV2.Button key="1" selected>
        <NxListV2.Text>Item 1</NxListV2.Text>
      </NxListV2.Button>
    ];

    const contentEl = getNxList({children}).find('ul');
    expect(contentEl.find(NxListV2.Button)).toExist();
    expect(contentEl).toContainMatchingElements(1, NxListV2.Button);
    expect(contentEl).toContainMatchingElements(1, NxListV2.Text);
    expect(contentEl.find(NxListV2.Button)).toHaveProp('selected');
    expect(contentEl.find(NxListV2.Button).shallow().setProps({selected: true}).find('button'))
    .toHaveClassName('selected');
  });

  it('renders a clickable link whose list item element has prop disabled and is disabled', function() {
    const children = [
      <NxListV2.Link key="1" href="www.sonatype.com" disabled>
        <NxListV2.Text>Item 1</NxListV2.Text>
      </NxListV2.Link>
    ];

    const contentEl = getNxList({children}).find('ul');
    expect(contentEl.find(NxListV2.Link)).toExist();
    expect(contentEl).toContainMatchingElements(1, NxListV2.Link);
    expect(contentEl).toContainMatchingElements(1, NxListV2.Text);
    expect(contentEl.find(NxListV2.Link)).toHaveProp('href');
    expect(contentEl.find(NxListV2.Link)).toHaveProp('disabled');
    expect(contentEl.find(NxListV2.Link)).toBeDisabled();
  });

  it('renders a clickable link whose list item element has prop selected and is selected', function() {
    const children = [
      <NxListV2.Link key="1" href="www.sonatype.com" selected>
        <NxListV2.Text>Item 1</NxListV2.Text>
      </NxListV2.Link>
    ];

    const contentEl = getNxList({children}).find('ul');
    expect(contentEl.find(NxListV2.Link)).toExist();
    expect(contentEl).toContainMatchingElements(1, NxListV2.Link);
    expect(contentEl).toContainMatchingElements(1, NxListV2.Text);
    expect(contentEl.find(NxListV2.Link)).toHaveProp('href');
    expect(contentEl.find(NxListV2.Link)).toHaveProp('selected');
    expect(contentEl.find(NxListV2.Link).shallow().setProps({selected: true, href: 'www.sonatype.com'})
        .find('a')).toHaveClassName('selected');
  });

  it('renders an empty list', function() {
    const children = [
      <NxListV2.Empty key="1" />
    ];

    const contentEl = getNxList({children}).find('ul');
    expect(contentEl.find(NxListV2.Empty)).toExist();
    expect(contentEl).toContainExactlyOneMatchingElement(NxListV2.Empty);
    expect(contentEl.find(NxListV2.Empty).shallow()).toMatchSelector('li.nx-list__item');
    expect(contentEl.find(NxListV2.Empty).shallow()).toHaveClassName('nx-list__item nx-list__item--empty');
    expect(contentEl.find(NxListV2.Empty).shallow().find('span')).toMatchSelector('span.nx-list__text');
    expect(contentEl.find(NxListV2.Empty).shallow().find('span')).toHaveText('This list is empty.');
  });

  it('renders a list with an error message', function() {
    const errorMessage = 'Error';
    const onClick = () => alert('hi');

    const children = [
      <NxListV2.Error key="1" onClick={onClick} errorMessage={errorMessage}/>
    ];

    const contentEl = getNxList({children}).find('ul');
    expect(contentEl.find(NxListV2.Error)).toExist();
    expect(contentEl).toContainExactlyOneMatchingElement(NxListV2.Error);
    expect(contentEl.find(NxListV2.Error)).toHaveProp('onClick', onClick);
    expect(contentEl.find(NxListV2.Error)).toHaveProp('errorMessage', errorMessage);
    expect(contentEl.find(NxListV2.Error).shallow()).toMatchSelector('li.nx-list__item');
    expect(contentEl.find(NxListV2.Error).shallow()).toHaveClassName('nx-list__item nx-list__item--error');
  });

  it('renders a list with a loading indicator', function() {
    const children = [
      <NxListV2.Loading key="1"/>
    ];

    const contentEl = getNxList({children}).find('ul');
    expect(contentEl.find(NxListV2.Loading)).toExist();
    expect(contentEl).toContainExactlyOneMatchingElement(NxListV2.Loading);
    expect(contentEl.find(NxListV2.Loading).shallow()).toMatchSelector('li.nx-list__item');
    expect(contentEl.find(NxListV2.Loading).shallow().find('li')).toContainReact(<NxLoadingSpinner />);
  });
});
