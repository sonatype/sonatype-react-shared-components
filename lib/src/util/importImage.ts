/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

/**
 * Import an image file from the assets/img directory in a way that works with various build systems,
 * notably both vanilla webpack and next.js.
 * @param basename the name of the image file within the assets/img directory
 * @return The runtime path to the image relative to the javascript output bundle, suitable for use in img src
 * attributes
 *
 * Note that even though this import logic is ostensibly dynamic, webpack appears to be smart enough to figure it
 * out statically. This is likely predicated on the basename being itself statically computable.
 */
export default function importImage(basename: string): string {
  const imageImport = require(`../assets/img/${basename}`);

  if (typeof imageImport === 'string') {
    return imageImport;
  }
  else {
    return imageImport.src ?? imageImport.default.src;
  }
}
