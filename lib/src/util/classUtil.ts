/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { curryN } from "ramda";

// given a class name, create a regex that will match HTML class attrs that have that class name
const classMatchRegex = (cls: string) => new RegExp(String.raw`(\s|^)${cls}(\s|$)`);

/**
 * @return whether the space-separated className string (fullClassName) includes the specified class
 */
export const includesClass = curryN(2,
  (cls: string, fullClassName?: string) => !!(fullClassName && fullClassName.match(classMatchRegex(cls)))
) as ((cls: string) => (className?: string) => boolean) & ((cls: string, className?: string) => boolean);

export const includesDisabledClass = includesClass('disabled');
