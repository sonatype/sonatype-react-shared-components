/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import { ReactNode } from 'react';

// Common interface for items which need to have text to display in the UI and a unique id
export default interface DataItem<T extends string | number = string> {
  id: T;
  displayName: Exclude<ReactNode, null | undefined>;
}
