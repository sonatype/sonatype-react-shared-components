/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes } from 'react';

export type CancelHandler = (evt?: Event) => void;

export interface Props extends HTMLAttributes<HTMLDialogElement> {
  cancelOnClickOutside?: boolean | null;
  cancelOnClickOutsideTargetClassName?: string | null;
  onCancel: CancelHandler;
  useNativeCancelOnEscape?: boolean | null;
  isModal?: boolean | null
}

export interface DialogContextValue {
  dialogEl: HTMLDialogElement | null,
  onCancel?: CancelHandler;
}
