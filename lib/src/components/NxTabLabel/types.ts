/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { LiHTMLAttributes } from 'react';
import PropTypes from 'prop-types';

export type Props = LiHTMLAttributes<HTMLLIElement> & {
  active: boolean | null;
};

export const propTypes: PropTypes.ValidationMap<Props> = {
  active: PropTypes.bool,
  children: PropTypes.node
};
