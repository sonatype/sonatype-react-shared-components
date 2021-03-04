/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import withClass from '../util/withClass';

// Simple convenience components that are just a particular tag with a particular classname, with the ability
// to add all attrs that you would normally be able to add to that tag (including more classnames)
export const NxP = withClass('nx-p', 'p');
export const NxCode = withClass('nx-code', 'code');
export const NxBlockquote = withClass('nx-blockquote', 'blockquote');
export const NxPre = withClass('nx-pre', 'pre');

export const NxH1 = withClass('nx-h1', 'h1');
export const NxH2 = withClass('nx-h2', 'h2');
export const NxH3 = withClass('nx-h3', 'h3');
export const NxH4 = withClass('nx-h4', 'h4');
