/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps as Props } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

// react-fontawesome 3 dropped its `Props` alias, exporting only the `FontAwesomeIconProps` name
export type { FontAwesomeIconProps as Props } from '@fortawesome/react-fontawesome';

/**
 * A wrapper component around FontAwesomeIcon that adds our nx-icon css class. Takes the same props as FontAwesomeIcon
 */
export default function NxFontAwesomeIcon(props: Props) {
  // Font Awesome 7 no longer renders a <title> element within the SVG, so the `title` prop by itself no
  // longer provides an accessible name (and no longer needs a `titleId`). aria-label is the mechanism FA 7
  // does honor, and setting it also clears the aria-hidden that FA otherwise adds. A `title` takes
  // precedence over an explicitly passed aria-label, matching the precedence that the aria-labelledby/<title>
  // pair had over aria-label under Font Awesome 6.
  const className = classnames(props.className, 'nx-icon'),
      ariaLabel = props.title || props['aria-label'];

  return <FontAwesomeIcon { ...props } aria-label={ariaLabel} className={className} />;
}
