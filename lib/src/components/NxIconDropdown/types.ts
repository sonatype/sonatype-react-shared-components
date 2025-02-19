/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ComponentProps, KeyboardEventHandler } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import * as PropTypes from 'prop-types';
import { OptionalReactElement } from '../../util/reactUtil';
import { childrenPropTypes } from '../NxDropdown/types';

export interface Props extends ComponentProps<'div'> {
  isOpen: boolean;
  children?: OptionalReactElement | OptionalReactElement[] | null;
  disabled?: boolean | null;
  onToggleCollapse?: (() => void) | null;
  onCloseKeyDown?: KeyboardEventHandler | null;
  onCloseClick?: ((e: MouseEvent) => void) | null;
  icon?: IconDefinition;
};

export const propTypes: PropTypes.WeakValidationMap<Props> = {
  isOpen: PropTypes.bool.isRequired,
  children: childrenPropTypes,
  disabled: PropTypes.bool,
  onToggleCollapse: PropTypes.func,
  onCloseKeyDown: PropTypes.func,
  onCloseClick: PropTypes.func,
  icon: PropTypes.any
};
