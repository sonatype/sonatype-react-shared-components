/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import withClass from '../../util/withClass';

import NxDescriptionListButtonItem from './NxDescriptionListButtonItem';

export const NxDescriptionList = Object.assign(withClass('dl', 'nx-list nx-list--description-list'), {
  Item: withClass('div', 'nx-list__item'),
  Term: withClass('dt', 'nx-list__term'),
  Description: withClass('dd', 'nx-list__description'),
  ButtonItem: NxDescriptionListButtonItem
});
