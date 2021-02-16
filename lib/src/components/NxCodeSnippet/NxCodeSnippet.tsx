/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef } from 'react';
import classnames from 'classnames';

import { Props, propTypes } from './types';
import NxFormGroup from '../NxFormGroup/NxFormGroup';
import NxTextInput from '../NxTextInput/NxTextInput';
import NxButton from '../NxButton/NxButton';

import './NxCodeSnippet.scss';

export { Props };

export default function NxCodeSnippet(props: Props) {
  const { content, label, sublabel, className, onCopyUsingBtn, inputProps, ...otherProps } = props,
      classes = classnames('nx-code-snippet', className),
      textInputRef = useRef<HTMLDivElement>(null);

  function copyWithNavigatorClipboard() {
    window.navigator.clipboard.writeText(content).then(function() {
      // select all text in the input to help the user understand what happened
      if (textInputRef.current) {
        const textarea = textInputRef.current.querySelector('textarea');

        if (textarea) {
          textarea.select();
        }
      }

      if (onCopyUsingBtn) {
        onCopyUsingBtn();
      }
    }, function(e) {
      console.error('Error copying to clipboard', e);
    });
  }

  function copyWithExecCommand() {
    if (textInputRef.current) {
      const textarea = textInputRef.current.querySelector('textarea');

      if (textarea) {
        textarea.select();
        const copySuccessful = document.execCommand('copy');

        if (copySuccessful && onCopyUsingBtn) {
          onCopyUsingBtn();
        }
      }
    }
  }

  function copyToClipboard() {
    // the clipboard object is the modern API, but it is only available in secure contexts (ie https or localhost)
    if (window.navigator.clipboard) {
      copyWithNavigatorClipboard();
    }
    else {
      // document.execCommand works outside of https, but is deprecated and might be deactivated some day
      copyWithExecCommand();
    }
  }

  return (
    <div className={classes} { ...otherProps }>
      <NxButton type="button" variant="tertiary" onClick={copyToClipboard}>Copy to Clipboard</NxButton>
      <NxFormGroup label={label} sublabel={sublabel}>
        <NxTextInput { ...inputProps } ref={textInputRef} type="textarea" value={content} isPristine={true} readOnly />
      </NxFormGroup>
    </div>
  );
}

NxCodeSnippet.propTypes = propTypes;
