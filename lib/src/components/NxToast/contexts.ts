/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { createContext } from 'react';

import { ToastContextType, FocusContextType } from './types';

const ToastContext = createContext<ToastContextType | null>(null);
const FocusContext = createContext<FocusContextType | null>(null);

export {ToastContext, FocusContext};
