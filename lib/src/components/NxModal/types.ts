/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {WeakValidationMap} from 'react';
import * as PropTypes from 'prop-types';

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  closeModalHandler: () => void;
};

export const propTypes: WeakValidationMap<Props> = {
  className: PropTypes.string,
  closeModalHandler: PropTypes.func.isRequired
};
