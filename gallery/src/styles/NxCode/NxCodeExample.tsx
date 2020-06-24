/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

const NxCodeExample = () =>
  <>
    <p className="nx-p">
      When you wrap HTML tags <code className="nx-code">&lt;HTML&gt;</code> remember to escape &lt;&gt;.
    </p>
    <p className="nx-p">Note that <code className="nx-code">.nx-code</code> always appears inline.</p>
  </>;

export default NxCodeExample;
