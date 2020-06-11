/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { LiHTMLAttributes } from 'react';
import PropTypes from 'prop-types';

export type Props = LiHTMLAttributes<HTMLLIElement> & {
  id: string;
  active?: boolean | null | undefined;
};

export const propTypes: PropTypes.ValidationMap<Props> = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node
  // the active prop will be set dynamically by NxStatefulTabs so we don't want to validate it here
};
