/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
// entry point for the webpack build that creates the full, precompiled CSS.
// The js result of building this is discarded; only the extracted css is important

// _base.scss and all component styles come in via this
import './index';
