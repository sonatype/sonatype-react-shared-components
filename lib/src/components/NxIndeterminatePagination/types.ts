/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { MouseEvent, ComponentPropsWithRef } from 'react';
import * as PropTypes from 'prop-types';

export interface Props extends ComponentPropsWithRef<'div'> {
  isFirstPage?: boolean | null;
  isLastPage?: boolean | null;
  onPrevPageSelect: ((evt: MouseEvent) => void);
  onNextPageSelect: ((evt: MouseEvent) => void);
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  isFirstPage: PropTypes.bool,
  isLastPage: PropTypes.bool,
  onPrevPageSelect: PropTypes.func.isRequired,
  onNextPageSelect: PropTypes.func.isRequired
};
