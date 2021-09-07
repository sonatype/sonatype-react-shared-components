/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';

import { NxDividerProps, nxDividerPropTypes } from './types';

import './NxDivider.scss';

const NxDivider = function NxList(props: NxDividerProps) {
  const {className, horizontal, vertical, ...attrs} = props;
  const isHorizontal = horizontal || (!horizontal && !vertical);
  const classNames = classnames(className, 'nx-divider',
      {'nx-divider--horizontal': isHorizontal},
      {'nx-divider--vertical': vertical}
  );

  if (isHorizontal) {
    return <hr className={classNames} {...attrs} />;
  }

  return <div className={classNames} {...attrs} />;
};

NxDivider.propTypes = nxDividerPropTypes;

export default NxDivider;
export {NxDividerProps, nxDividerPropTypes} from './types';
