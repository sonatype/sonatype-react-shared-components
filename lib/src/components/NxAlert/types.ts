/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import * as PropTypes from 'prop-types';

export type Props = HTMLAttributes<HTMLDivElement> & {
  onClose?: (() => void) | null;
};

// Casting to hack around flaws in react's typings: the typings for HTMLAttributes.className don't claim to accept null,
// but non-required proptypes do, and the actual implementation does
export const propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func
} as PropTypes.ValidationMap<Props>;

export type NxAlertProps = Props & {
  icon: IconDefinition;
  iconLabel? : string | null;
};

export const nxAlertPropTypes: PropTypes.ValidationMap<NxAlertProps> = {
  icon: PropTypes.any,
  iconLabel: PropTypes.string,
  onClose: PropTypes.func
};
