/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {ReactNode, HTMLAttributes, ReactElement, WeakValidationMap} from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import * as PropTypes from 'prop-types';

import { TooltipConfigProps, tooltipPropTypesShape } from '../../../util/tooltipUtils';

export type Props = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
  label: ReactNode | string;
  className?: string | null;
  children?: ReactElement | ReactElement[] | null;
  disabled?: boolean | null;
  toggleTooltip?: TooltipConfigProps | string | null;
  icon: IconDefinition;
};

export const propTypes: WeakValidationMap<Props> = {
  label: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.string.isRequired
  ]).isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
    PropTypes.element.isRequired
  ]),
  disabled: PropTypes.bool,
  toggleTooltip: PropTypes.oneOfType([tooltipPropTypesShape, PropTypes.string]),
  icon: PropTypes.any
};
