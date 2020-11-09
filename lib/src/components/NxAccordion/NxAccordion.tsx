/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ChangeEvent } from 'react';

import { Props, propTypes } from './types';

export default function NxAccordion({ onToggle: onToggleProp, ...otherProps }: Props) {

  function onToggle(evt: ChangeEvent<HTMLDetailsElement>) {
    if (onToggleProp) {
      onToggleProp(evt.target.open, evt);
    }
  }

  // doing the props like this is a hack around the fact that the onToggle handler is missing
  // from the react typescript types
  const detailsProps = { ...otherProps, onToggle };

  return <details { ...detailsProps } />;
}

NxAccordion.propTypes = propTypes;
