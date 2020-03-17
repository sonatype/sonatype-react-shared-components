/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import * as enzymeUtils from '../../../__testutils__/enzymeUtils';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon';

describe('NxFontAwesomeIcon', function() {
  const minimalProps = { icon: faCheck },
      getShallowComponent = enzymeUtils.getShallowComponent(NxFontAwesomeIcon, minimalProps);

  it('renders a FontAwesomeIcon', function () {
    expect(getShallowComponent()).toMatchSelector(FontAwesomeIcon);
  });

  it('passes its props to the FontAwesomeIcon', function() {
    const component = getShallowComponent({ color: 'foo', spin: true, flip: 'both' });

    expect(component).toHaveProp('color', 'foo');
    expect(component).toHaveProp('spin', true);
    expect(component).toHaveProp('flip', 'both');
    expect(component).toHaveProp('icon', faCheck);
  });

  it('sets the className to nx-icon if no other className is specified', function() {
    expect(getShallowComponent()).toHaveClassName('nx-icon');
  });

  it('merges nx-icon into any specified className', function() {
    const component = getShallowComponent({ className: 'foo' });

    expect(component).toHaveClassName('nx-icon');
    expect(component).toHaveClassName('foo');
  });
});
