/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {FunctionComponent, useEffect} from 'react';
import classnames from 'classnames';

import {Props, propTypes} from './types';

import './NxModal.scss';

const NxModal: FunctionComponent<Props> = ({className, closeModalHandler, ...attrs}) => {

  const hotKeyHandler = ({ key }: { key: string}) => {
    if (key === 'Escape') {
      closeModalHandler();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', hotKeyHandler);
    return () => {
      document.body.removeEventListener('keydown', hotKeyHandler);
    };
  }, []); // Only run on component mounting/un-mounting

  const modalClasses = classnames('nx-modal', className);
  return (
    <>
      <div className="nx-modal-backdrop">
        <div className={modalClasses} {...attrs}/>
      </div>
    </>
  );
};

NxModal.propTypes = propTypes;

export default NxModal;
export {Props} from './types';
