/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {ReactNode, ReactElement, LabelHTMLAttributes} from 'react';
import * as PropTypes from 'prop-types';

import { selectableColors, SelectableColor } from '../../util/selectableColors';

export interface Props extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'onSelect'> {
  children: ReactNode;
  tagColor?: SelectableColor | null;
  // For internal use only, this prop is for our select/deselect tag icons
  selectedIcons?: ReactElement | null;
}

export type PublicProps = Omit<Props, 'selectedIcons'>;

export interface SelectableProps extends Props {
  onSelect: (() => void);
  selected: boolean;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  children: PropTypes.node.isRequired,
  tagColor: PropTypes.oneOf(selectableColors)
};

export const selectablePropTypes: PropTypes.ValidationMap<SelectableProps> = {
  ...propTypes,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
};
