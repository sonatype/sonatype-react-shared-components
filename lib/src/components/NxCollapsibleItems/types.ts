/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ReactNode, ReactElement, HTMLAttributes, RefAttributes, Ref } from 'react';
import * as PropTypes from 'prop-types';

import { TooltipConfigProps, tooltipPropTypesShape } from '../../util/tooltipUtils';

export interface PublicProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  onToggleCollapse?: (() => void) | null;
  isOpen: boolean;
  disabled?: boolean | null;
  triggerContent: ReactNode;
  triggerTooltip?: TooltipConfigProps | string | null;
  actionContent?: ReactElement | null;
  children?: ReactNode;
}

export interface Props extends PublicProps {
  contentBeforeChildren?: ReactNode;
  collapsibleChildrenId?: string | null;
}

export type NxCollapsibleItemsChildElement = ReactElement<HTMLAttributes<Element> & RefAttributes<Element | null>>;

// NxCollapsibleItemsChild takes exactly one child element
export interface NxCollapsibleItemsChildProps extends HTMLAttributes<Element> {
  ref?: Ref<Element>;
  children: NxCollapsibleItemsChildElement | string | number;
}

export const propTypes: PropTypes.ValidationMap<PublicProps> = {
  onToggleCollapse: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  triggerContent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  actionContent: PropTypes.element,
  triggerTooltip: PropTypes.oneOfType([tooltipPropTypesShape, PropTypes.string]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export const childPropTypes: PropTypes.WeakValidationMap<NxCollapsibleItemsChildProps> = {
  children: PropTypes.any // there isn't a proptype that quite matches/typechecks against ReactChild
};
