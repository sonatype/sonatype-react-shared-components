/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import RequiredReactNode from './RequiredReactNode';

// Common interface for items which need to have text to display in the UI and a unique id
export default interface DataItem<I extends string | number = string, D extends RequiredReactNode = RequiredReactNode> {
  id: I;
  displayName: D;
}
