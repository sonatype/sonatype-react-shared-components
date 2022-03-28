/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps as Props } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { useUniqueId } from '../../util/idUtil';

export { Props } from '@fortawesome/react-fontawesome';

// Hack to get the titleId prop working correctly until
// https://github.com/FortAwesome/react-fontawesome/pull/411
// is merged
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
(FontAwesomeIcon as any).defaultProps.titleId = null;

/**
 * A wrapper component around FontAwesomeIcon that adds our nx-icon css class. Takes the same props as FontAwesomeIcon
 */
const NxFontAwesomeIcon = forwardRef((props: Props, ref) => {
  // eslint-disable-next-line react/prop-types
  const className = classnames(props.className, 'nx-icon'),
      titleId = useUniqueId(''), // FA adds its own prefix to this, no need for us to add one too
      otherProps = props.title ? { titleId } as Partial<Props> : undefined;

  return <FontAwesomeIcon forwardedRef={ref} { ...otherProps } { ...props } className={className} />;
});

export default NxFontAwesomeIcon;
