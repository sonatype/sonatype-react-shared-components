/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {FunctionComponent, useEffect} from 'react';
import classnames from 'classnames';

import {CloseHandler, Props, propTypes} from './types';

import './NxModal.scss';

const currentModalCloseHandlers: CloseHandler[] = [];

const NxModal: FunctionComponent<Props> = ({className, onClose, ...attrs}) => {
  const modalClasses = classnames('nx-modal', className);

  const modalCloseListener = ({ key }: KeyboardEvent) => {
    const isKeyPressedEscape = key === 'Escape' || key === 'Esc';
    if (isKeyPressedEscape && currentModalCloseHandlers.length) {
      currentModalCloseHandlers[currentModalCloseHandlers.length - 1]();
    }
  };

  const removeCloseHandlerListener = () => {
    const idx = currentModalCloseHandlers.indexOf(onClose);
    currentModalCloseHandlers.splice(idx, 1);

    if (!currentModalCloseHandlers.length) {
      document.removeEventListener('keydown', modalCloseListener);
    }
  };

  useEffect(function() {
    if (!currentModalCloseHandlers.length) {
      document.addEventListener('keydown', modalCloseListener);
    }
    currentModalCloseHandlers.push(onClose);

    return removeCloseHandlerListener;
  }, []);

  return (
    <div className="nx-modal-backdrop">
      <section className={modalClasses} {...attrs} />
    </div>
  );
};

NxModal.propTypes = propTypes;

export default NxModal;
export {Props} from './types';
