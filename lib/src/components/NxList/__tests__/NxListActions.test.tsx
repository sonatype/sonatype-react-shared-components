/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import NxList from '../NxList';
import { getShallowComponent } from '../../../__testutils__/enzymeUtils';
import 'jest-enzyme';

describe('NxListActions', function() {

  const minimalProps = {};
  const getShallow = getShallowComponent(NxList.Actions, minimalProps);

  it('renders a div with class nx-list__actions', function() {
    const contentEl = getShallow();
    expect(contentEl).toExist();
    expect(contentEl.find('div')).toHaveClassName('.nx-list__actions');
  });

  it('renders the classNames given to it', function() {
    const contentEl = getShallow({className: 'customClassName'});
    expect(contentEl).toExist();
    expect(contentEl.find('div')).toMatchSelector('.nx-list__actions.customClassName');
  });
});
