/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, forwardRef, useEffect, useRef, useState, useContext } from 'react';
import { faExclamationCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import prettyBytes from 'pretty-bytes';
import { concat } from 'ramda';

import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxOverflowTooltip from '../../NxTooltip/NxOverflowTooltip';
import NxButton from '../../NxButton/NxButton';
import NxTooltip from '../../NxTooltip/NxTooltip';
import { FormAriaContext } from '../../NxForm/context';
import { useUniqueId } from '../../../util/idUtil';
import { Props, propTypes, SelectedFileProps } from './types';

export { Props };

import '../NxFileUpload.scss';

const formatSize = (size: number) => prettyBytes(size, { minimumFractionDigits: 1, maximumFractionDigits: 1 });

function SelectedFile({ file, onDismiss }: SelectedFileProps) {
  // Testing on NVDA shows a need to set this as the aria-label in addition to the tooltip
  const buttonLabel = 'Dismiss Upload';
  const descriptionId = useUniqueId('nx-file-upload-description');

  return (
    <span className="nx-selected-file">
      <span className="nx-selected-file__info" id={descriptionId}>
        <NxOverflowTooltip>
          <span className="nx-selected-file__name">{file.name}</span>
        </NxOverflowTooltip>
        <span className="nx-selected-file__size">{formatSize(file.size)}</span>
      </span>
      <NxTooltip title={buttonLabel}>
        <button type="button" aria-label={buttonLabel} className="nx-selected-file__dismiss-btn" onClick={onDismiss}>
          <NxFontAwesomeIcon icon={faTimesCircle} />
        </button>
      </NxTooltip>
    </span>
  );
}

const NxFileUpload = forwardRef<HTMLDivElement, Props>(function NxFileUpload(props, ref) {
  const {
        className: classNameProp,
        onChange: onChangeProp,
        files,
        isRequired,
        isPristine,
        id,
        disabled,
        ...attrs
      } = props,
      isFileSelected = files?.length,
      { showValidationErrors: formShowValidationErrors } = useContext(FormAriaContext),
      showValidationErrors = formShowValidationErrors || !isPristine,
      showError = isRequired && showValidationErrors && !isFileSelected,
      className = classnames('nx-file-upload', classNameProp),
      noFileMessageClassName = classnames('nx-file-upload__no-file-message', {
        'nx-file-upload__no-file-message--invalid': showError
      }),
      inputRef = useRef<HTMLInputElement>(null),
      inputId = useUniqueId('nx-file-upload-input', id),
      validationErrorId = useUniqueId('nx-file-upload-validation-error'),
      [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  function onChange(evt: FormEvent<HTMLInputElement>) {

    const { files } = evt.currentTarget,
        normalizedFiles = !files?.length ? null : files;

    //look into this - how and the array I made of selectedFiles - one to remove?
    onChangeProp(normalizedFiles);

    if (normalizedFiles) {
      const normalizedArray = Array.from(normalizedFiles);
      const newArray = concat(selectedFiles, normalizedArray);
      setSelectedFiles(newArray);
    }
  }

  function openPicker() {
    inputRef.current?.click();
  }

  function onDismiss() {
    inputRef.current?.focus();
    onChangeProp(null);
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
    <div ref={ref} className={className} >
      <input ref={inputRef}
             { ...attrs }
             disabled={disabled}
             onChange={onChange}
             id={inputId}
             className="nx-file-upload__input"
             type="file"
            //  aria-describedby={descriptionId}
             aria-required={isRequired ?? undefined}
             aria-invalid={showError || undefined}
             aria-errormessage={showError ? validationErrorId : undefined}
             multiple/>
      {/* Keynav and screenreaders can ignore the button itself in favor of the <input> */}
      <NxButton type="button"
                aria-hidden={true}
                disabled={disabled}
                variant="tertiary"
                onClick={openPicker}
                tabIndex={-1}
                className="nx-file-upload__select-btn">
        Choose File
      </NxButton>
      { isFileSelected ?
        selectedFiles?.map((file) =>
          <SelectedFile key= {file.name} file={file} onDismiss={onDismiss}/>
        )
        :
        <span className={noFileMessageClassName}
              // id={descriptionId}
          >
          <span>No file selected</span>
          <NxFontAwesomeIcon icon={faExclamationCircle} />
        </span>
      }
      { showError &&
        // TODO confirm whether this text should be hard-coded
        <div id={validationErrorId} role="alert" className="nx-field-validation-message">
          This field is required!
        </div>
      }
    </div>
  );
});

NxFileUpload.propTypes = propTypes;
export default NxFileUpload;
