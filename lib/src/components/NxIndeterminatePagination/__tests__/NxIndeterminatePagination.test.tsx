/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import NxIndeterminatePagination, { Props } from '../NxIndeterminatePagination';
import NxButton from '../../NxButton/NxButton';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';

/* eslint-disable @typescript-eslint/no-object-literal-type-assertion */
describe('NxIndeterminatePagination', function() {
  const minimalProps = {
        onPrevPageSelect: () => {},
        onNextPageSelect: () => {}
      },
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxIndeterminatePagination, minimalProps);

  it('renders an nx-btn-bar with back and forwards buttons', function() {
    const component = getShallowComponent();

    expect(component).toHaveClassName('nx-btn-bar');
    expect(component).toMatchElement(
      <nav>
        <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
        <NxButton><NxFontAwesomeIcon icon={{} as IconProp} /></NxButton>
      </nav>
    );

    expect(component.find(NxButton).first()).toHaveProp('aria-label', 'previous page');
    expect(component.find(NxButton).last()).toHaveProp('aria-label', 'next page');

    expect(component.find(NxFontAwesomeIcon).first()).toHaveProp('icon', faCaretLeft);
    expect(component.find(NxFontAwesomeIcon).last()).toHaveProp('icon', faCaretRight);
  });

  it('adds custom class names to the btn bar', function() {
    const component = getShallowComponent({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-btn-bar');
  });

  it('adds native div attrs to the btn bar', function() {
    const component = getShallowComponent({ id: 'foo', spellCheck: true });

    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('spellCheck', true);
  });

  it('fires onPrevPageSelect when the back button is clicked', function() {
    const prevHandler = jest.fn(),
        nextHandler = jest.fn(),
        evt = { foo: 'bar' },
        component = getShallowComponent({
          onPrevPageSelect: prevHandler,
          onNextPageSelect: nextHandler
        });

    component.find(NxButton).first().simulate('click', evt);

    expect(prevHandler).toHaveBeenCalledWith(evt);
    expect(nextHandler).not.toHaveBeenCalled();
  });

  it('fires onNextPageSelect when the back button is clicked', function() {
    const prevHandler = jest.fn(),
        nextHandler = jest.fn(),
        evt = { foo: 'bar' },
        component = getShallowComponent({
          onPrevPageSelect: prevHandler,
          onNextPageSelect: nextHandler
        });

    component.find(NxButton).last().simulate('click', evt);

    expect(nextHandler).toHaveBeenCalledWith(evt);
    expect(prevHandler).not.toHaveBeenCalled();
  });
});
