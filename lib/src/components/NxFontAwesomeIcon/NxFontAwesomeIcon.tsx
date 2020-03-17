/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, ReactElement } from 'react';
import { FontAwesomeIcon, Props } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

export { Props } from '@fortawesome/react-fontawesome';

/**
 * A wrapper component around FontAwesomeIcon that adds our nx-icon css class. Takes the same props as FontAwesomeIcon
 */
const NxFontAwesomeIcon: FunctionComponent<Props> =
  function NxFontAwesomeIcon(props): ReactElement<Props> {

    // eslint-disable-next-line react/prop-types
    const className = classnames(props.className, 'nx-icon');

    return <FontAwesomeIcon { ...props } className={className} />;
  };

export default NxFontAwesomeIcon;
