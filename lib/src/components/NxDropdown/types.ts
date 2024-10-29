/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { RefObject, ReactNode, HTMLAttributes, WeakValidationMap, KeyboardEventHandler, Ref } from 'react';
import * as PropTypes from 'prop-types';

import { NX_BUTTON_VARIANTS, NX_BUTTON_VARIANT_TYPE } from '../NxButton/types';
import { TooltipConfigProps, tooltipPropTypesShape } from '../../util/tooltipUtils';
import { OptionalReactElement } from '../../util/reactUtil';

export type AbstractDropdownRenderToggleElement =
  (toggleRef: RefObject<HTMLButtonElement>, onToggleCollapse: (() => void)) => ReactNode;

export interface AbstractDropdownProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  disabled?: boolean | null;
  renderToggleElement: AbstractDropdownRenderToggleElement;
  children?: OptionalReactElement | OptionalReactElement[] | null;
  onToggleCollapse?: (() => void) | null;
  onCloseKeyDown?: KeyboardEventHandler | null;
  onCloseClick?: ((e: MouseEvent) => void) | null;
  menuRef?: Ref<HTMLDivElement>;
}

export type Props = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
  label: ReactNode | string;
  isOpen: boolean;
  variant?: NX_BUTTON_VARIANT_TYPE | null;
  className?: string | null;
  children?: OptionalReactElement | OptionalReactElement[] | null;
  disabled?: boolean | null;
  onToggleCollapse?: (() => void) | null;
  onCloseKeyDown?: KeyboardEventHandler | null;
  onCloseClick?: ((e: MouseEvent) => void) | null;
  toggleTooltip?: TooltipConfigProps | string | null;
  menuRef?: Ref<HTMLDivElement>;
};

export const childrenPropTypes = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.oneOf([null, undefined, false])])),
  PropTypes.oneOfType([PropTypes.element, PropTypes.oneOf([null, undefined, false])])
]);

export const propTypes: WeakValidationMap<Props> = {
  label: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.string.isRequired
  ]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf(NX_BUTTON_VARIANTS),
  className: PropTypes.string,
  children: childrenPropTypes,
  disabled: PropTypes.bool,
  onToggleCollapse: PropTypes.func,
  onCloseKeyDown: PropTypes.func,
  onCloseClick: PropTypes.func,
  toggleTooltip: PropTypes.oneOfType([tooltipPropTypesShape, PropTypes.string])
};
