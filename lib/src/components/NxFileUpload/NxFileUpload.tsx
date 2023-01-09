/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, forwardRef, useEffect, useRef, useContext } from 'react';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxButton from '../NxButton/NxButton';
import SelectedFile from './SelectedFile';
import { FormAriaContext } from '../NxForm/context';
import { useUniqueId } from '../../util/idUtil';
import { Props, propTypes } from './types';

export { Props };

import './NxFileUpload.scss';

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
      file = files?.item(0),
      isFileSelected = !!file,
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
      descriptionId = useUniqueId('nx-file-upload-description');

  function onChange(evt: FormEvent<HTMLInputElement>) {
    const { files } = evt.currentTarget,
        normalizedFiles = !files?.length ? null : files;

    onChangeProp(normalizedFiles);
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
             aria-describedby={descriptionId}
             aria-required={isRequired ?? undefined}
             aria-invalid={showError || undefined}
             aria-errormessage={showError ? validationErrorId : undefined} />
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
        <SelectedFile descriptionId={descriptionId} file={file} onDismiss={onDismiss} /> :
        <span id={descriptionId} className={noFileMessageClassName}>
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
