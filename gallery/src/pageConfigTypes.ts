/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {ComponentType} from 'react';

export const PAGE_TYPES = [
  'documentation',
  'html',
  'react',
  'layout',
  'sass',
  'js',
  'css'
] as const;

export type PageType = typeof PAGE_TYPES[number];

export interface PageContentDescription {
  content: ComponentType;
  type: PageType;
}

export type PageConfig = Record<string, PageMapping>;
export type PageMapping = Record<string, PageContentDescription>;
