/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';
import * as PropTypes from 'prop-types';
import './NxTag.scss';

// import NxCloseButton from '../NxCloseButton/NxCloseButton';

const NxTag = (
  function NxTag(props) {
    const { className, text } = props,
        classes = classnames('nx-tag', className);

    return (
      <div className={classes} aria-atomic={true}>
        <div className="nx-tag__content">{text}</div>
        {/* { onClose && <NxCloseButton onClick={onClose} /> } */}
      </div>
    );
  }
);

NxTag.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
};
export default NxTag;
