/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, forwardRef, useEffect, useRef, useContext } from 'react';
import { faExclamationCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import prettyBytes from 'pretty-bytes';
// import { concat } from 'ramda';

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

function SelectedFile({ file, onDismiss: onDismissProp }: SelectedFileProps) {
  // Testing on NVDA shows a need to set this as the aria-label in addition to the tooltip
  const buttonLabel = 'Dismiss Upload';

  function onDismiss() {
    onDismissProp(file);
  }

  return (
    <span className="nx-selected-file">
      <span className="nx-selected-file__info">
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
      isFileSelected = !!files?.length,
      { showValidationErrors: formShowValidationErrors } = useContext(FormAriaContext),
      showValidationErrors = formShowValidationErrors || !isPristine,
      showError = isRequired && showValidationErrors && !isFileSelected,
      className = classnames('nx-multi-file-upload', classNameProp),
      noFileMessageClassName = classnames('nx-multi-file-upload__no-file-message', {
        'nx-multi-file-upload__no-file-message--invalid': showError
      }),
      inputRef = useRef<HTMLInputElement>(null),
      inputId = useUniqueId('nx-multi-file-upload-input', id),
      validationErrorId = useUniqueId('nx-multi-file-upload-validation-error');

  function onChange(evt: FormEvent<HTMLInputElement>) {
    const input = (document.getElementById(inputId)) as HTMLInputElement;
    // get the previous files uploaded
    const dataTransferObject = new DataTransfer();
    if (files) {
      for (let i = 0; i < files.length; i++) {
        dataTransferObject.items.add(files[i]);
      }
    }

    const inputFiles = evt.currentTarget.files,
        normalizedFiles = !inputFiles?.length ? null : inputFiles;

    if (normalizedFiles) {
      for (let i = 0; i < normalizedFiles.length; i++) {
        dataTransferObject.items.add(normalizedFiles[i]);
      }
    }
    input.files = dataTransferObject.files;
    onChangeProp(input.files);
  }

  function openPicker() {
    inputRef.current?.click();
  }

  function onDismiss(file : File) {
    const dataTransferObject = new DataTransfer();
    const input = (document.getElementById(inputId)) as HTMLInputElement;
    const { files } = input;

    if (files) {
      for (let i = 0; i < files?.length; i++) {
        if (file !== files[i]) {
          dataTransferObject.items.add(files[i]);
        }
      }
      input.files = dataTransferObject.files;
      onChangeProp(input.files);
    }
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
      <div className="nx-multi-file-upload__container">
        <input ref={inputRef}
               { ...attrs }
               disabled={disabled}
               onChange={onChange}
               id={inputId}
               className="nx-multi-file-upload__input"
               type="file"
               aria-label={isFileSelected ? `${files.length} files selected` : 'No File Selected'}
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
                  className="nx-multi-file-upload__select-btn">
          Add Files
        </NxButton>
        <div className="nx-multi-file-upload__container__files nx-scrollable">
          { isFileSelected ?
            Object.keys(files).map((fileKey) => {
              const idx = parseInt(fileKey);
              return (
                <SelectedFile key= {`${idx}${files[idx].name}`} file={files[idx]} onDismiss={onDismiss}/>
              );
            })
            :
            <span className={noFileMessageClassName}>
              <span>No file selected</span>
              <NxFontAwesomeIcon icon={faExclamationCircle} />
            </span>
          }
        </div>
      </div>

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
