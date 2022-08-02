/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import classnames from 'classnames';
import React, { FormEvent, forwardRef, useEffect, useRef } from 'react';

import { Props, propTypes } from './types';

export { Props };

const NxFileUpload = forwardRef<HTMLDivElement, Props>(function NxFileUpload(props) {
  const { onChange: onChangeProp, files, inputAttrs, className: classNameProp, ...attrs } = props,
      className = classnames('nx-file-upload', classNameProp),
      inputRef = useRef<HTMLInputElement>(null);

  function onChange(evt: FormEvent<HTMLInputElement>) {
    onChangeProp(evt.currentTarget.files);
  }

  useEffect(function() {
    if (inputRef.current) {
      inputRef.current.files = files;
    }
  }, [files]);

  return (
    <div className={className} { ...attrs }>
      <label className="nx-btn nx-btn--tertiary">
        <input ref={inputRef} { ...inputAttrs } onChange={onChange} type="file" />
        <span>Choose File</span>
      </label>
    </div>
  );
});

NxFileUpload.propTypes = propTypes;
export default NxFileUpload;
