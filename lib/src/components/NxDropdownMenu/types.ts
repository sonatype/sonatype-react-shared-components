/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ComponentPropsWithRef } from 'react';
import * as PropTypes from 'prop-types';

export interface Props extends ComponentPropsWithRef<'div'> {
  onClosing: () => void;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  onClosing: PropTypes.func.isRequired,
  children: PropTypes.node
};
