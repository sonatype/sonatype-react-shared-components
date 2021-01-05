/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes, ReactNode } from 'react';
import * as PropTypes from 'prop-types';

export interface Props extends HTMLAttributes<HTMLFieldSetElement> {
  label: Exclude<ReactNode, null | undefined>;
  sublabel?: ReactNode | null;
  isRequired?: boolean | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  label: PropTypes.node.isRequired,
  sublabel: PropTypes.node,
  isRequired: PropTypes.bool
};
