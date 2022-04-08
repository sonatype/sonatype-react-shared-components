/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

export const ColumnCountContext = React.createContext(1);
export const HeaderContext = React.createContext(false);
export const RowContext = React.createContext({ label: '', isFilterHeader: false });
