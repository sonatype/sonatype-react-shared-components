/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, forwardRef, useRef, useContext, useEffect } from 'react';
import { faExclamationCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import prettyBytes from 'pretty-bytes';
import { forEach, without } from 'ramda';

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
  const selectedFileRef = useRef<null | HTMLSpanElement>(null);

  function onDismiss() {
    onDismissProp(file, selectedFileRef.current);
  }
  useEffect(() => {
    if (selectedFileRef.current) {
      selectedFileRef.current.scrollIntoView({block: 'nearest'});
    }
  }, []);

  return (
    <span className="nx-selected-file" ref={selectedFileRef}>
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
      selectedFilesContainerRef = useRef<HTMLDivElement>(null),
      validationErrorId = useUniqueId('nx-multi-file-upload-validation-error');

  function onChange(evt: FormEvent<HTMLInputElement>) {

    const dataTransferObject = new DataTransfer();

    // get the previous files uploaded
    if (files) {
      forEach((f) => dataTransferObject.items.add(f), Array.from(files));
    }

    const inputFiles = evt.currentTarget.files,
        normalizedFiles = !inputFiles?.length ? null : inputFiles;

    if (normalizedFiles) {
      forEach((f) => dataTransferObject.items.add(f), Array.from(normalizedFiles));
    }

    onChangeProp(dataTransferObject.files);
  }

  function openPicker() {
    inputRef.current?.click();
  }

  function onDismiss(fileObj : File, selectedFile : HTMLElement | null) {
    // if the selected file is the last file in the container, set the focus to the dismiss button of previous
    // file's dismiss button
    // if the selected file is the only file in the container, set the focus on the input
    const closeBtns = Array.from(selectedFilesContainerRef.current?.
        querySelectorAll<HTMLButtonElement>('.nx-selected-file__dismiss-btn') ?? []);

    if (selectedFile === selectedFilesContainerRef.current?.lastElementChild) {
      closeBtns.length <= 1 ? inputRef.current?.focus() : closeBtns[closeBtns.length - 2].focus();
    }

    const dataTransferObject = new DataTransfer();
    if (inputRef.current) {
      if (files) {
        forEach((f: File) => dataTransferObject.items.add(f), without([fileObj], Array.from(files)));

        const normalizedFiles = !dataTransferObject.files.length ? null : dataTransferObject.files;
        onChangeProp(normalizedFiles);
      }
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
        <div ref={selectedFilesContainerRef} className="nx-multi-file-upload__container__files nx-scrollable">
          { isFileSelected ?
            Array.from(files).map((file, key) =>
              <SelectedFile key= {`${key}__selected-file}`} file={file} onDismiss={onDismiss}/>
            ) :
            <span className={noFileMessageClassName}>
              <span>No file selected</span>
              <NxFontAwesomeIcon icon={faExclamationCircle} />
            </span>
          }
        </div>
      </div>

      { showError &&
        <div id={validationErrorId} role="alert" className="nx-field-validation-message">
          This field is required!
        </div>
      }
    </div>
  );
});

NxFileUpload.propTypes = propTypes;
export default NxFileUpload;
