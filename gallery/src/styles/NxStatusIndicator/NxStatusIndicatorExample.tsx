/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

export default function NxStatusIndicatorExample() {
  return (
    <>
      Some text <span className="nx-status-indicator">Off</span> and
      then<span className="nx-status-indicator nx-status-indicator--negative">Inactive</span>
      <span className="nx-status-indicator nx-status-indicator--positive">Active</span>
      <span className="nx-status-indicator nx-status-indicator--intermediate">Starting</span>
      <span className="nx-status-indicator nx-status-indicator--error">Failed</span>
    </>
  );
}
