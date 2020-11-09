/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { MouseEvent } from 'react';

import { Props, propTypes } from './types';

export default function NxAccordion({ onToggle, onClick: onClickProp, ...otherProps }: Props) {

  function onClick(evt: MouseEvent<HTMLDetailsElement>) {
    evt.preventDefault();

    if (onToggle) {
      onToggle(!evt.currentTarget.open);
    }

    if (onClickProp) {
      onClickProp(evt);
    }
  }

  return <details { ...otherProps} onClick={onClick} />;
}

NxAccordion.propTypes = propTypes;
