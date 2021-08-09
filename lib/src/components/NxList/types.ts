/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ForwardRefExoticComponent, RefAttributes, HTMLAttributes, LiHTMLAttributes, ValidationMap,
  ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react';
import PropTypes from 'prop-types';

export interface NxListComponent
  extends ForwardRefExoticComponent<NxListProps & RefAttributes<HTMLUListElement>> {
  Item: ForwardRefExoticComponent<NxListItemProps & RefAttributes<HTMLLIElement>>;
  Text: ForwardRefExoticComponent<NxListTextProps & RefAttributes<HTMLSpanElement>>;
  Subtext: ForwardRefExoticComponent<NxListSubtextProps & RefAttributes<HTMLSpanElement>>;
  Actions: ForwardRefExoticComponent<NxListActionProps & RefAttributes<HTMLDivElement>>;
  ButtonItem: ForwardRefExoticComponent<NxListButtonItemProps & RefAttributes<HTMLLIElement>>;
  LinkItem: ForwardRefExoticComponent<NxListLinkItemProps & RefAttributes<HTMLLIElement>>;
  DescriptionTerm: ForwardRefExoticComponent<NxListDescriptionTermProps & RefAttributes<HTMLElement>>;
  Description: ForwardRefExoticComponent<NxListDescriptionProps & RefAttributes<HTMLElement>>;
}

export interface NxListProps extends HTMLAttributes<HTMLUListElement> {
  bulleted?: boolean | null;
  children?: ReactNode | null;
  emptyMessage?: ReactNode | null;
  error?: string | null;
  isLoading?: boolean | null;
  retryHandler?: (() => void) | null;
}

export const nxListPropTypes: ValidationMap<NxListProps> = {
  bulleted: PropTypes.bool,
  children: PropTypes.node,
  emptyMessage: PropTypes.node,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  retryHandler: PropTypes.func
};

export interface NxListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  selected?: boolean | null;
}

export const nxListItemPropTypes: ValidationMap<NxListItemProps> = {
  selected: PropTypes.bool
};

export interface NxListTextProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode | null;
}

export const nxListTextPropTypes: ValidationMap<NxListTextProps> = {
  children: PropTypes.node
};

export interface NxListSubtextProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode | null;
}

export const nxListSubtextPropTypes: ValidationMap<NxListSubtextProps> = {
  children: PropTypes.node
};

export interface NxListActionProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode | null;
}

export const nxListActionPropTypes: ValidationMap<NxListActionProps> = {
  children: PropTypes.node
};

export interface NxListButtonItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children?: ReactNode | null,
  selected?: boolean | null,
  disabled?: boolean | null,
  buttonClassName?: string | null,
  buttonAttributes?: ButtonHTMLAttributes<HTMLButtonElement> | null,
}

export const nxListButtonItemPropTypes: ValidationMap<NxListButtonItemProps> = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  buttonClassName: PropTypes.string
};

export interface NxListLinkItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children?: ReactNode | null,
  disabled?: boolean | null,
  selected?: boolean | null,
  href: string,
  anchorClassName?: string | null,
  anchorAttributes?: AnchorHTMLAttributes<HTMLAnchorElement> | null,
}

export const nxListLinkItemPropTypes: ValidationMap<NxListLinkItemProps> = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  href: PropTypes.string.isRequired
};

export interface NxListDescriptionTermProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode | null
}

export const nxListDescriptionTermPropTypes: ValidationMap<NxListDescriptionTermProps> = {
  children: PropTypes.node
};

export interface NxListDescriptionProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode | null
}

export const nxListDescriptionPropTypes: ValidationMap<NxListDescriptionProps> = {
  children: PropTypes.node
};
