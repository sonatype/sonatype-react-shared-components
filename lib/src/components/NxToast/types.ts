/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes } from 'react';
import * as PropTypes from 'prop-types';

import { allToastTypes, ToastType } from '../../util/toastLevels';

export type Props = HTMLAttributes<HTMLDivElement>;

export const propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func
} as PropTypes.ValidationMap<Props>;

export type NxToastProps = HTMLAttributes<HTMLDivElement> & {
  toastId: number,
  type: ToastType;
  className?: string | null;
};

export const nxToastPropTypes: PropTypes.ValidationMap<NxToastProps> = {
  toastId: PropTypes.number.isRequired,
  type: PropTypes.oneOf(allToastTypes).isRequired
};
