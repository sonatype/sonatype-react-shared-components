/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {ReactNode, HTMLAttributes, ReactElement, WeakValidationMap} from 'react';
import * as PropTypes from 'prop-types';

import { NX_BUTTON_VARIANTS, NX_BUTTON_VARIANT_TYPE } from '../NxButton/types';
import { TooltipConfigProps, tooltipPropTypesShape } from '../../util/tooltipUtils';

export type Props = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
  label: ReactNode | string;
  isOpen: boolean;
  variant?: NX_BUTTON_VARIANT_TYPE | null;
  className?: string | null;
  children?: ReactElement | ReactElement[] | null;
  disabled?: boolean | null;
  onToggleCollapse: (() => void);
  onClose: (() => void);
  toggleTooltip?: TooltipConfigProps | string | null;
};

export const propTypes: WeakValidationMap<Props> = {
  label: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.string.isRequired
  ]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf(NX_BUTTON_VARIANTS),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
    PropTypes.element.isRequired
  ]),
  disabled: PropTypes.bool,
  onToggleCollapse: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  toggleTooltip: PropTypes.oneOfType([tooltipPropTypesShape, PropTypes.string])
};
