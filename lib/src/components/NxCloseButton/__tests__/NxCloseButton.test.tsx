/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxCloseButton from '../NxCloseButton';
import NxButton from '../../NxButton/NxButton';
import Close from '../../../icons/Close';

describe('NxCloseButton', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent(NxCloseButton, {});

  it('renders an NxButton with type=button', function() {
    expect(getShallowComponent()).toMatchSelector(NxButton);
    expect(getShallowComponent()).toHaveProp('type', 'button');
  });

  it('passes the specified classes to the NxButton plus nx-btn--icon-only', function() {
    expect(getShallowComponent({ className: 'foo' })).toHaveClassName('foo');
    expect(getShallowComponent({ className: 'foo' })).toHaveClassName('nx-btn--icon-only');
  });

  it('passes other props on to the NxButton', function() {
    expect(getShallowComponent({ id: 'foo' })).toHaveProp('id', 'foo');
  });

  it('contains a Close icon', function() {
    expect(getShallowComponent().children()).toMatchSelector(Close);
  });
});
