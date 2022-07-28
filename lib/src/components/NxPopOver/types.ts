/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes, ReactNode } from 'react';
import * as PropTypes from 'prop-types';

export type CloseHandler = (evt: Event) => void;
export const NX_POP_OVER_VARIANTS = ['normal', 'narrow'] as const;
export type NX_POP_OVER_VARIANT_TYPE = (typeof NX_POP_OVER_VARIANTS)[number];

export interface PopOverContextType {
  onCancel: () => void;
}

export interface PopOverContentProps {
  children?: ReactNode;
}

export interface PopOverFooterProps {
  children?: ReactNode;
}

export interface Props extends HTMLAttributes<HTMLDialogElement> {
  onCancel: () => void;
  children?: ReactNode;
  variant?: NX_POP_OVER_VARIANT_TYPE | null;
  headerTitle: ReactNode | string;
  headerSubtitle?: ReactNode | string | null;
  headerParagraph?: ReactNode | string | null;
}

export const propTypes = {
  onCancel: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(NX_POP_OVER_VARIANTS),
  headerTitle: PropTypes.oneOf([PropTypes.string, PropTypes.node]).isRequired,
  headerSubtitle: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  headerParagraph: PropTypes.oneOf([PropTypes.string, PropTypes.node])
} as PropTypes.ValidationMap<Props>;
