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

export default function NxCodeSnippet({ content, label, sublabel, className, onCopyUsingBtn, ...otherProps }: Props) {
  const classes = classnames('nx-code-snippet', className),
      textInputRef = useRef<HTMLDivElement>(null);

  function copyToClipboard() {
    if (textInputRef.current) {
      const textarea = textInputRef.current.querySelector('textarea');

      if (textarea) {
        textarea.select();
        document.execCommand('copy');

        if (onCopyUsingBtn) {
          onCopyUsingBtn();
        }
      }
    }
  }

  return (
    <div className={classes} { ...otherProps }>
      <NxButton type="button" variant="tertiary" onClick={copyToClipboard}>Copy to Clipboard</NxButton>
      <NxFormGroup label={label} sublabel={sublabel}>
        <NxTextInput ref={textInputRef} type="textarea" value={content} isPristine={true} readOnly />
      </NxFormGroup>
    </div>
  );
}

NxCodeSnippet.propTypes = propTypes;
