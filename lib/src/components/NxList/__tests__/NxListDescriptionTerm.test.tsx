/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import NxList from '../NxList';
import NxDescriptionList from '../../NxDescriptionList/NxDescriptionList';

describe('NxList.DescriptionTerm', function() {
  it('is aliased as NxDescriptionList.Term', function() {
    expect(NxList.DescriptionTerm).toBe(NxDescriptionList.Term);
  });
});
