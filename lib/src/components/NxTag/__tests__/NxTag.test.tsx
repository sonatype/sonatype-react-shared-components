/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import {
  faBiohazard,
  faCrow
} from '@fortawesome/free-solid-svg-icons';
import NxTag from '../NxTag';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxCloseButton from '../../NxCloseButton/NxCloseButton';

describe('NxTag', function() {
  const minimalProps: NxTagProps = {
    children: 'A message to show in an alert',
    icon: faBiohazard
  };

  const getNxTag = enzymeUtils.getShallowComponent<NxTagProps>(NxTag, minimalProps);

  it('renders an alert', function() {
    const nxTag = getNxTag();
    expect(nxTag).toMatchSelector('.nx-tag');
  });

  it('renders the classNames given to it', function() {
    const extendedProps: Partial<NxTagProps> = {
      className: 'test-classname ufo'
    };
    const nxTag = getNxTag(extendedProps);
    expect(nxTag).toMatchSelector('.nx-tag.test-classname.ufo');
  });

  it('renders the children in an .nx-tag__content', function() {
    const children = [
      <p key="1" className="test-paragraph">Test Paragraph</p>,
      <div key="2" className="test-container"></div>
    ];

    const contentEl = getNxTag({ children }).find('.nx-tag__content');

    expect(contentEl).toExist();
    expect(contentEl.find('.test-paragraph')).toExist();
    expect(contentEl.find('.test-container')).toExist();
  });

  it('renders the icon passed to it', function() {
    expect(getNxTag().find(NxFontAwesomeIcon)).toExist();
    expect(getNxTag().find(NxFontAwesomeIcon)).toHaveProp('icon', faBiohazard);

    expect(getNxTag({icon: faCrow}).find(NxFontAwesomeIcon)).toExist();
    expect(getNxTag({icon: faCrow}).find(NxFontAwesomeIcon)).toHaveProp('icon', faCrow);
  });

  it('passes any other props to the div', function() {
    const component = getNxTag({ id: 'foo', title: 'baz' });
    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('title', 'baz');
  });

  it('sets aria-atomic on the div', function() {
    expect(getNxTag()).toHaveProp('aria-atomic', true);
  });

  it('sets the icons\'s aria-label from the iconLabel prop', function() {
    expect(getNxTag({ iconLabel: 'foo' }).find(NxFontAwesomeIcon)).toHaveProp('aria-label', 'foo');
  });

  it('sets the icons\'s aria-hidden to false if the iconLabel is defined', function() {
    expect(getNxTag({ iconLabel: 'foo' }).find(NxFontAwesomeIcon)).toHaveProp('aria-hidden', false);
    expect(getNxTag().find(NxFontAwesomeIcon)).toHaveProp('aria-hidden', true);
  });

  it('renders a Close button if given an onClose prop', function() {
    const onClose = jest.fn(),
        component = getNxTag({ onClose });

    expect(component).toContainMatchingElement(NxCloseButton);
    expect(onClose).not.toHaveBeenCalled();

    component.find(NxCloseButton).simulate('click');
    expect(onClose).toHaveBeenCalled();
  });

  it('does not render a Close button if not given an onClose prop', function() {
    expect(getNxTag()).not.toContainMatchingElement(NxCloseButton);
  });
});
