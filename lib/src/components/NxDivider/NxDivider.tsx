/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';

import { NxDividerProps, nxDividerPropTypes } from './types';

import './NxDivider.scss';

const NxDivider = forwardRef<HTMLDivElement, NxDividerProps>(function NxList(props: NxDividerProps, ref) {
  const {className, horizontal, vertical, ...attrs} = props;
  const classNames = classnames(className, 'nx-divider',
      {'nx-divider--horizontal': horizontal || (!horizontal && !vertical)},
      {'nx-divider--vertical': vertical}
  );

  return (
    <div className={classNames} ref={ref} {...attrs}>

    </div>
  );
}
);

NxDivider.propTypes = nxDividerPropTypes;

export default NxDivider;
export {NxDividerProps, nxDividerPropTypes} from './types';
