/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {FunctionComponent} from 'react';
import classnames from 'classnames';

import {Props, propTypes} from './types';

import './NxModal.scss';

const NxModal: FunctionComponent<Props> = ({className, ...attrs}) => {

  const modalClasses = classnames('nx-modal', className);
  return (
    <>
      <div className="nx-modal-backdrop">
        <div className={modalClasses} {...attrs} />
      </div>
    </>
  );
};

NxModal.propTypes = propTypes;

export default NxModal;
export {Props} from './types';
