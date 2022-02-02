/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ProviderProps } from 'react';
import { StableUniqueIdContext } from '../../util/idUtil';

/**
 * Establishes a separate provided value for the StableUniqueIdContext, which is used by the idUtils
 */
export default function NxStableUniqueIdContext(props: Omit<ProviderProps<never>, 'value'>) {
  return <StableUniqueIdContext.Provider value={{ value: 0 }} { ...props } />;
}
