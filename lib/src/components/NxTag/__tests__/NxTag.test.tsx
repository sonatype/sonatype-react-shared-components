/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';

import { NxSelectableTag } from '../NxTag';

describe('NxSelectableTag', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent(NxSelectableTag, { children: 'test' });

  it('renders NxSelectableTag with the `nx-tag--selectable` class', function() {
    const component = getShallowComponent();

    expect(component).toHaveClassName('nx-tag nx-tag--selectable');
  });

  it('sets the nx-tag--default class if no color prop is passed', function() {
    expect(getShallowComponent()).toMatchSelector('.nx-tag--default');
  });

  it('sets the color class using the tagColor if it is provided', function() {
    expect(getShallowComponent({ tagColor: 'orange' })).toMatchSelector('.nx-tag--orange');
    expect(getShallowComponent({ tagColor: 'orange' }))
        .not.toMatchSelector('.nx-tag--default');
  });
});
