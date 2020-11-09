/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { DetailsHTMLAttributes, SyntheticEvent, ValidationMap } from 'react';
import * as PropTypes from 'prop-types';

export interface Props extends Omit<DetailsHTMLAttributes<HTMLDetailsElement>, 'onToggle'> {
  onToggle?: ((open: boolean, evt: SyntheticEvent<HTMLDetailsElement, Event>) => void) | null;
}

export const propTypes: ValidationMap<Props> = {
  onToggle: PropTypes.func,
  open: PropTypes.bool
};
