/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {getShallowComponent} from '../../../__testutils__/enzymeUtils';
import Counter, {Props} from '../NxTreeViewCounter';

describe('NxTreeViewCounter', function() {
  const simpleProps: Props = {
    children: 'foobar'
  };
  const getShallow = getShallowComponent<Props>(Counter, simpleProps);

  it('properly renders inactive counter by default', function() {
    const shallowRender = getShallow();
    expect(shallowRender).toHaveClassName('nx-counter');
    expect(shallowRender).not.toHaveClassName('nx-counter--active');
    expect(shallowRender).toHaveText('foobar');
  });

  it('renders active counter if isActive is true', function() {
    const shallowRender = getShallow({
      isActive: true
    });
    expect(shallowRender).toHaveClassName('nx-counter--active');
  });

  it('renders active counter if isActive is false', function() {
    const shallowRender = getShallow({
      isActive: false
    });
    expect(shallowRender).not.toHaveClassName('nx-counter--active');
  });
});
