/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {ReactNode, HTMLAttributes} from 'react';
import * as PropTypes from 'prop-types';

import { NX_BUTTON_VARIANTS, NX_BUTTON_VARIANT_TYPE } from '../../NxButton/types';
import { TooltipConfigProps, tooltipPropTypesShape } from '../../../internalUtil/tooltipUtils';

export type Props = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
  label: ReactNode | string;
  variant?: NX_BUTTON_VARIANT_TYPE | null;
  className?: string | null;
  children?: ReactNode | null;
  disabled?: boolean | null;
  toggleTooltip?: TooltipConfigProps | string | null;
};

export const propTypes: PropTypes.ValidationMap<Props> = {
  label: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.string.isRequired
  ]).isRequired,
  variant: PropTypes.oneOf(NX_BUTTON_VARIANTS),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  disabled: PropTypes.bool,
  toggleTooltip: PropTypes.oneOfType([tooltipPropTypesShape, PropTypes.string])
};
