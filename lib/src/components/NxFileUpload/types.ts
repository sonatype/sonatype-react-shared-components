/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes, InputHTMLAttributes } from "react";
import { ValidationMap } from "prop-types";

export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  onChange: (files: FileList | null) => void;
  files: FileList | null;
  inputAttrs?: InputHTMLAttributes<HTMLInputElement> | null;
}

export const propTypes: ValidationMap<Props> = {

};
