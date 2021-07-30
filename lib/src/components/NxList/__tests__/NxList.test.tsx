/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { shallow } from 'enzyme';
import React from 'react';
import { NxH3, NxLoadingSpinner } from '../../..';
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxList from '../NxList';
import { NxListProps } from '../types';

describe('NxList', function() {
  const minimalProps: NxListProps = {};
  const getNxList = enzymeUtils.getShallowComponent<NxListProps>(NxList, minimalProps);

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
      <NxList bulleted></NxList>
    );
    expect(contentEl.find('ul')).toHaveClassName('nx-list--bulleted');
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

    const contentEl = getNxList({children}).find('ul');
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

    const contentEl = getNxList({children}).find('ul');
    expect(contentEl.find(NxH3)).toExist();
    expect(contentEl.find(NxH3).shallow()).toHaveHTML(`<h3 class="nx-h3">${title}</h3>`);
  });

  it('renders a clickable list whose list item element has prop disabled and is disabled', function() {
    const children = [
      <NxList.Button key="1" disabled>
        <NxList.Text>Item 1</NxList.Text>
      </NxList.Button>
    ];

    const contentEl = getNxList({children}).find('ul');
    expect(contentEl.find(NxList.Button)).toExist();
    expect(contentEl).toContainMatchingElements(1, NxList.Button);
    expect(contentEl).toContainMatchingElements(1, NxList.Text);
    expect(contentEl.find(NxList.Button)).toHaveProp('disabled');
    expect(contentEl.find(NxList.Button)).toBeDisabled();
  });

  it('renders a clickable list whose list item element has prop selected and is selected', function() {
    const children = [
      <NxList.Button key="1" selected>
        <NxList.Text>Item 1</NxList.Text>
      </NxList.Button>
    ];

    const contentEl = getNxList({children}).find('ul');
    expect(contentEl.find(NxList.Button)).toExist();
    expect(contentEl).toContainMatchingElements(1, NxList.Button);
    expect(contentEl).toContainMatchingElements(1, NxList.Text);
    expect(contentEl.find(NxList.Button)).toHaveProp('selected');
    expect(contentEl.find(NxList.Button).shallow().setProps({selected: true}).find('button'))
    .toHaveClassName('selected');
  });

  it('renders a clickable link whose list item element has prop disabled and is disabled', function() {
    const children = [
      <NxList.Link key="1" href="www.sonatype.com" disabled>
        <NxList.Text>Item 1</NxList.Text>
      </NxList.Link>
    ];

    const contentEl = getNxList({children}).find('ul');
    expect(contentEl.find(NxList.Link)).toExist();
    expect(contentEl).toContainMatchingElements(1, NxList.Link);
    expect(contentEl).toContainMatchingElements(1, NxList.Text);
    expect(contentEl.find(NxList.Link)).toHaveProp('href');
    expect(contentEl.find(NxList.Link)).toHaveProp('disabled');
    expect(contentEl.find(NxList.Link)).toBeDisabled();
  });

  it('renders a clickable link whose list item element has prop selected and is selected', function() {
    const children = [
      <NxList.Link key="1" href="www.sonatype.com" selected>
        <NxList.Text>Item 1</NxList.Text>
      </NxList.Link>
    ];

    const contentEl = getNxList({children}).find('ul');
    expect(contentEl.find(NxList.Link)).toExist();
    expect(contentEl).toContainMatchingElements(1, NxList.Link);
    expect(contentEl).toContainMatchingElements(1, NxList.Text);
    expect(contentEl.find(NxList.Link)).toHaveProp('href');
    expect(contentEl.find(NxList.Link)).toHaveProp('selected');
    expect(contentEl.find(NxList.Link).shallow().setProps({selected: true, href: 'www.sonatype.com'})
        .find('a')).toHaveClassName('selected');
  });

  it('renders an empty list', function() {
    const children = [
      <NxList.Empty key="1" />
    ];

    const contentEl = getNxList({children}).find('ul');
    expect(contentEl.find(NxList.Empty)).toExist();
    expect(contentEl).toContainExactlyOneMatchingElement(NxList.Empty);
    expect(contentEl.find(NxList.Empty).shallow()).toMatchSelector('li.nx-list__item');
    expect(contentEl.find(NxList.Empty).shallow()).toHaveClassName('nx-list__item nx-list__item--empty');
    expect(contentEl.find(NxList.Empty).shallow().find('span')).toMatchSelector('span.nx-list__text');
    expect(contentEl.find(NxList.Empty).shallow().find('span')).toHaveText('This list is empty.');
  });

  it('renders a list with an error message', function() {
    const errorMessage = 'Error';
    const onClick = () => alert('hi');

    const children = [
      <NxList.Error key="1" onClick={onClick} errorMessage={errorMessage}/>
    ];

    const contentEl = getNxList({children}).find('ul');
    expect(contentEl.find(NxList.Error)).toExist();
    expect(contentEl).toContainExactlyOneMatchingElement(NxList.Error);
    expect(contentEl.find(NxList.Error)).toHaveProp('onClick', onClick);
    expect(contentEl.find(NxList.Error)).toHaveProp('errorMessage', errorMessage);
    expect(contentEl.find(NxList.Error).shallow()).toMatchSelector('li.nx-list__item');
    expect(contentEl.find(NxList.Error).shallow()).toHaveClassName('nx-list__item nx-list__item--error');
  });

  it('renders a list with a loading indicator', function() {
    const children = [
      <NxList.Loading key="1"/>
    ];

    const contentEl = getNxList({children}).find('ul');
    expect(contentEl.find(NxList.Loading)).toExist();
    expect(contentEl).toContainExactlyOneMatchingElement(NxList.Loading);
    expect(contentEl.find(NxList.Loading).shallow()).toMatchSelector('li.nx-list__item');
    expect(contentEl.find(NxList.Loading).shallow().find('li')).toContainReact(<NxLoadingSpinner />);
  });

  it('renders a description list', function() {
    const children = [
      <NxList.Item key="1">
        <NxList.DescriptionTerm>Description Term 1</NxList.DescriptionTerm>
        <NxList.Description>Description 1</NxList.Description>
      </NxList.Item>
    ];

    const contentEl = getNxList({children}).find('ul');
    expect(contentEl).toContainMatchingElements(1, NxList.DescriptionTerm);
    expect(contentEl).toContainMatchingElements(1, NxList.Description);
    expect(contentEl.find(NxList.DescriptionTerm).shallow()).toMatchSelector('dt.nx-list__term');
    expect(contentEl.find(NxList.Description).shallow()).toMatchSelector('dd.nx-list__description');
  });
});
