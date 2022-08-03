/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, forwardRef, useEffect, useRef } from 'react';
import { faExclamationCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import prettyBytes from 'pretty-bytes';

import { useUniqueId } from '../../util/idUtil';
import { Props, propTypes, SelectedFileProps } from './types';

export { Props };

import './NxFileUpload.scss';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';

const formatSize = (size: number) => prettyBytes(size, { minimumFractionDigits: 1, maximumFractionDigits: 1 });

function SelectedFile({ file, onDismiss }: SelectedFileProps) {
  return (
    <span className="nx-selected-file">
      <NxOverflowTooltip>
        <span className="nx-selected-file__name">{file.name}</span>
      </NxOverflowTooltip>
      <span className="nx-selected-file__size">{formatSize(file.size)}</span>
      <button className="nx-selected-file__dismiss-btn" onClick={onDismiss}>
        <NxFontAwesomeIcon icon={faTimesCircle} />
      </button>
    </span>
  );
}

const NxFileUpload = forwardRef<HTMLDivElement, Props>(function NxFileUpload(props) {
  const {
        className: classNameProp,
        onChange: onChangeProp,
        files,
        isRequired,
        isPristine,
        inputAttrs,
        ...attrs
      } = props,
      file = files?.item(0),
      fileSelected = !!file,
      showError = isRequired && !isPristine && !fileSelected,
      className = classnames('nx-file-upload', classNameProp),
      inputClassName = classnames('nx-file-upload__input', inputAttrs?.className),
      noFileMessageClassName = classnames('nx-file-upload__no-file-message', {
        'nx-file-upload__no-file-message--invalid': showError
      }),
      inputRef = useRef<HTMLInputElement>(null),
      inputId = useUniqueId('nx-file-upload-input', inputAttrs?.id);

  function onChange(evt: FormEvent<HTMLInputElement>) {
    onChangeProp(evt.currentTarget.files);
  }

  useEffect(function() {
    if (inputRef.current) {
      if (fileSelected) {
        inputRef.current.files = files;
      }
      else {
        // there's no way to clear the list via the files prop, but this does it
        inputRef.current.value = '';
      }
    }
  }, [files]);

  return (
    <div className={className} { ...attrs }>
      <input ref={inputRef} { ...inputAttrs } onChange={onChange} id={inputId} className={inputClassName} type="file" />
      <label htmlFor={inputId} className="nx-btn nx-btn--tertiary">
        <span>Choose File</span>
      </label>
      { fileSelected ?
        <SelectedFile file={file} onDismiss={() => onChangeProp(null)} /> :
        <span className={noFileMessageClassName}>
          <span>No file selected</span>
          <NxFontAwesomeIcon icon={faExclamationCircle} />
        </span>
      }
      { showError &&
        // TODO confirm whether this text should be hard-coded
        <div role="alert" className="nx-file-upload__validation-error">This field is Required!</div>
      }
    </div>
  );
});

NxFileUpload.propTypes = propTypes;
export default NxFileUpload;
