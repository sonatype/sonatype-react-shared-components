/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import { DOMAttributes, HTMLElementType, PropsWithChildren, ReactElement, RefAttributes } from 'react';

export interface Props<T extends HTMLElement> {
  children: ReactElement<PropsWithChildren & RefAttributes<T> & Pick<DOMAttributes<T>, 'onScroll'>>;
  reuseChildren?: boolean | null;
  initialChildCount?: number | null;
  spacerEl?: HTMLElementType | null;
}
