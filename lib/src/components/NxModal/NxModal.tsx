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
document.body.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape' && currentModalCloseHandlers.length) {
    currentModalCloseHandlers[0]();
  }
});

const NxModal: FunctionComponent<Props> = ({className, onClose, ...attrs}) => {
  const modalClasses = classnames('nx-modal', className);

  useEffect(function() {
    currentModalCloseHandlers.unshift(onClose);

    return function() {
      const idx = currentModalCloseHandlers.indexOf(onClose);
      currentModalCloseHandlers.splice(idx, 1);
    };
  }, []);

  return (
    <div className="nx-modal-backdrop">
      <div className={modalClasses} {...attrs} />
    </div>
  );
};

NxModal.propTypes = propTypes;

export default NxModal;
export {Props} from './types';
