/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import NxList from '../NxList';
import { getShallowComponent } from '../../../__testutils__/enzymeUtils';
import 'jest-enzyme';

describe('NxListDescriptionTerm', function() {

  const minimalProps = {};
  const getShallow = getShallowComponent(NxList.DescriptionTerm, minimalProps);

  it('renders children correctly', function() {
    const children = ['Test Description Term'];
    const contentEl = getShallow({children});
    expect(contentEl).toExist();
    expect(contentEl).toContainExactlyOneMatchingElement('dt');
    expect(contentEl).toMatchSelector('.nx-list__term');
    expect(contentEl).toHaveText('Test Description Term');
  });

  it('adds extra classes correctly', function() {
    const children = ['Test Description Term'];
    const contentEl = getShallow({children, className: 'customClassName'});
    expect(contentEl).toExist();
    expect(contentEl).toContainExactlyOneMatchingElement('dt');
    expect(contentEl).toMatchSelector('.nx-list__term');
    expect(contentEl).toHaveClassName('customClassName');
    expect(contentEl).toHaveText('Test Description Term');
  });
});
