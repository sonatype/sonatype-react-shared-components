/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, forwardRef, useRef, useContext, useEffect } from 'react';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import { without, findIndex, equals } from 'ramda';

import SelectedFile from '../SelectedFile';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxButton from '../../NxButton/NxButton';
import { FormAriaContext } from '../../NxForm/context';
import { useUniqueId } from '../../../util/idUtil';
import { Props, propTypes, MultiSelectedFileProps } from '../types';

export { Props };

import './NxMultiFileUpload.scss';

function SelectedFileWrapper({file, onDismiss: onDismissProp}: MultiSelectedFileProps) {
  const fileRef = useRef<HTMLSpanElement>(null);

  function onDismiss() {
    onDismissProp(file);
  }

  useEffect(function() {
    if (fileRef.current) {
      fileRef.current.scrollIntoView({block: 'nearest'});
    }
  }, []);

  return (
    <SelectedFile file={file} onDismiss={onDismiss} ref={fileRef}/>
  );
}

const NxMultiFileUpload = forwardRef<HTMLDivElement, Props>(function NxMultiFileUpload(props, ref) {
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
      className = classnames('nx-multi-file-upload', 'nx-file-upload', classNameProp),
      noFileMessageClassName = classnames('nx-file-upload__no-file-message', {
        'nx-file-upload__no-file-message--invalid': showError
      }),
      inputRef = useRef<HTMLInputElement>(null),
      inputId = useUniqueId('nx-multi-file-upload-input', id),
      selectedFilesContainerRef = useRef<HTMLOListElement>(null),
      selectedFilesContainerId = useUniqueId('nx-multi-file-upload-container-files'),
      totalFilesSelected = isFileSelected ? `${files.length} selected files` : 'No file selected',
      totalFilesSelectedId = useUniqueId('nx-multi-file-upload-file-count'),
      validationErrorId = useUniqueId('nx-multi-file-upload-validation-error'),

      // Stable React key values for each File object
      fileKeys = useRef<WeakMap<File, number>>(new WeakMap()),
      nextKey = useRef(0);

  function getKey(file: File): number {
    const existingKey = fileKeys.current.get(file);

    if (existingKey) {
      return existingKey;
    }
    else {
      const newKey = nextKey.current;
      nextKey.current++;
      fileKeys.current.set(file, newKey);

      return newKey;
    }
  }

  function combineFileLists(...fileLists: ArrayLike<File>[]) {
    // DataTransfer has the only known API in which FileLists can be programatically constructed from various Files.
    const dataTransferObject = new DataTransfer();
    for (const list of fileLists) {
      const listArray = Array.from(list);
      for (const file of listArray) {
        dataTransferObject.items.add(file);
      }
    }
    return dataTransferObject.files;
  }

  function onChange(evt: FormEvent<HTMLInputElement>) {
    const inputFiles = evt.currentTarget.files;

    // files refers to the previous file selection, which will be null the first time OnChange is called
    const returnedFileList = inputFiles ? combineFileLists(files ?? [], inputFiles) : null,
        normalizedFiles = returnedFileList?.length ? returnedFileList : null;

    onChangeProp(normalizedFiles);
  }

  function openPicker() {
    inputRef.current?.click();
  }

  function onDismiss(fileObj: File) {
    const closeBtns = Array.from(
        selectedFilesContainerRef.current?.querySelectorAll<HTMLButtonElement>('.nx-selected-file__dismiss-btn') ?? []
    );

    if (files) {
      const filesArray = Array.from(files);
      const idx = findIndex((f) => equals(f, fileObj), filesArray);

      if (idx === files.length - 1) {
        // if the selected file is the last in the container, set the focus to the next last dismiss button
        // if selected file is only file, set focus on the input
        closeBtns.length === 1 ? inputRef.current?.focus() : closeBtns[idx - 1].focus();
      }
      else {
        closeBtns[idx + 1].focus({preventScroll: true});
      }

      const updatedSelectedFiles = without([fileObj], filesArray),
          returnedFileList = combineFileLists(updatedSelectedFiles),
          normalizedFiles = returnedFileList.length ? returnedFileList : null;

      onChangeProp(normalizedFiles);
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
               className="nx-file-upload__input"
               type="file"
               aria-describedby={totalFilesSelectedId}
               aria-required={isRequired ?? undefined}
               aria-invalid={showError || undefined}
               aria-errormessage={showError ? validationErrorId : undefined}
               aria-controls={selectedFilesContainerId}
               multiple/>
        {/* Keynav and screenreaders can ignore the button itself in favor of the <input> */}
        <NxButton type="button"
                  aria-hidden={true}
                  disabled={disabled}
                  variant="tertiary"
                  onClick={openPicker}
                  tabIndex={-1}
                  className="nx-file-upload__select-btn">
          Add Files
        </NxButton>
        <span id={totalFilesSelectedId} className="nx-multi-file-upload__file-count">
          {totalFilesSelected}
        </span>
        <ol ref={selectedFilesContainerRef}
            id={selectedFilesContainerId}
            className="nx-multi-file-upload__container__files nx-scrollable">
          { isFileSelected ?
            Array.from(files).map((file) =>
              <li key={getKey(file)}>
                <SelectedFileWrapper file={file} onDismiss={onDismiss}/>
              </li>
            ) :
            <li className={noFileMessageClassName}>
              <span>{totalFilesSelected}</span>
              <NxFontAwesomeIcon icon={faExclamationCircle} />
            </li>
          }
        </ol>
      </div>

      { showError &&
        <div id={validationErrorId} role="alert" className="nx-field-validation-message">
          This field is required!
        </div>
      }
    </div>
  );
});

NxMultiFileUpload.propTypes = propTypes;
export default NxMultiFileUpload;
