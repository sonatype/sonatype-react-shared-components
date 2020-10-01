/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

interface Props {
  html: string;
}

const RawHtmlExample = ({ html }: Props) =>
  <div className="gallery-example-live gallery-example-live--raw-html" dangerouslySetInnerHTML={{ __html: html }} />;

export default RawHtmlExample;
