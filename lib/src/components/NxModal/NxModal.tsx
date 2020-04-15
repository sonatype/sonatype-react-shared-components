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

const NxModal: FunctionComponent<Props> = ({className, modalStack, closeHandler, ...attrs}) => {

  const keyHandler = (event: HTMLElementEventMap['keydown']) => {
    const { key } = event;
    if (key === 'Escape') {
      if (modalStack && modalStack[modalStack.length - 1] === closeHandler) {
        closeHandler();
      }
    }
  };

  useEffect(() => {
    if (modalStack && closeHandler) {
      modalStack.push(closeHandler);
      document.body.addEventListener('keydown', keyHandler);
      return () => {
        modalStack.pop();
        document.body.removeEventListener('keydown', keyHandler);
      };
    }
    return () => {};
  }, []);

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
