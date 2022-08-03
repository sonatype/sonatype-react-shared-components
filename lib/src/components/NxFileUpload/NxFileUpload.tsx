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
import NxButton from '../NxButton/NxButton';

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
        id,
        ...attrs
      } = props,
      file = files?.item(0),
      isFileSelected = !!file,
      showError = isRequired && !isPristine && !isFileSelected,
      className = classnames('nx-file-upload', classNameProp),
      noFileMessageClassName = classnames('nx-file-upload__no-file-message', {
        'nx-file-upload__no-file-message--invalid': showError
      }),
      inputRef = useRef<HTMLInputElement>(null),
      inputId = useUniqueId('nx-file-upload-input', id),
      validationErrorId = useUniqueId('nx-file-upload-valiation-error');

  function onChange(evt: FormEvent<HTMLInputElement>) {
    onChangeProp(evt.currentTarget.files);
  }

  function openPicker() {
    inputRef.current?.click();
  }

  useEffect(function() {
    if (inputRef.current) {
      if (isFileSelected) {
        inputRef.current.files = files;
      }
      else {
        // there's no way to clear the list via the files prop, but this does it
        inputRef.current.value = '';
      }
    }
  }, [files]);

  return (
    <div className={className} >
      <input ref={inputRef}
             { ...attrs }
             onChange={onChange}
             id={inputId}
             className="nx-file-upload__input"
             type="file"
             aria-invalid={showError || undefined}
             aria-errormessage={showError ? validationErrorId : undefined} />
      {/* Keynav and screenreaders can ignore the button itself in favor of the <input> */}
      <NxButton type="button" variant="tertiary" onClick={openPicker} role="presentation" tabIndex={-1}>
        Choose File
      </NxButton>
      { isFileSelected ?
        <SelectedFile file={file} onDismiss={() => onChangeProp(null)} /> :
        <span className={noFileMessageClassName}>
          <span>No file selected</span>
          <NxFontAwesomeIcon icon={faExclamationCircle} />
        </span>
      }
      { showError &&
        // TODO confirm whether this text should be hard-coded
        <div id={validationErrorId} role="alert" className="nx-file-upload__validation-error">
          This field is Required!
        </div>
      }
    </div>
  );
});

NxFileUpload.propTypes = propTypes;
export default NxFileUpload;
