/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

// If process.env.NODE_ENV is defined or interpolated, respect it.  Otherwise, assume production
export const isProduction = (() => {
  try {
    return process.env.NODE_ENV === 'production';
  }
  catch {
    return true;
  }
})();
