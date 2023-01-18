/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import NxList from '../NxList';
import { getShallowComponent } from '../../../__testutils__/enzymeUtils';
import 'jest-enzyme';

describe('NxListText', function() {

  const minimalProps = {};
  const getShallow = getShallowComponent(NxList.Text, minimalProps);

  it('renders children correctly', function() {
    const children = ['Test Item 1 Text'];
    const contentEl = getShallow({children});
    expect(contentEl).toExist();
    expect(contentEl).toMatchSelector('.nx-list__text');
    expect(contentEl).toHaveText('Test Item 1 Text');
  });

  it('truncates the text correctly', function() {
    const contentEl = getShallow({className: 'nx-truncate-ellipsis'});
    expect(contentEl).toExist();
    expect(contentEl).toMatchSelector('.nx-list__text.nx-truncate-ellipsis');
  });
});
