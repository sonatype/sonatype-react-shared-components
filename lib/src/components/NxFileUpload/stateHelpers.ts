/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { StateProps } from './types';

export function initialState(files: FileList | null): StateProps {
  return { isPristine: true, files };
}

export function userInput(files: FileList | null): StateProps {
  return { isPristine: false, files };
}
