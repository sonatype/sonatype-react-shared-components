/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { DetailsHTMLAttributes, ValidationMap, ReactNode } from 'react';
import * as PropTypes from 'prop-types';

export interface Props extends Omit<DetailsHTMLAttributes<HTMLDetailsElement>, 'onToggle'> {
  onToggle?: ((open: boolean) => void) | null;
  headerContent?: ReactNode | null;
}

export const propTypes: ValidationMap<Props> = {
  onToggle: PropTypes.func,
  open: PropTypes.bool,
  headerContent: PropTypes.node
};
