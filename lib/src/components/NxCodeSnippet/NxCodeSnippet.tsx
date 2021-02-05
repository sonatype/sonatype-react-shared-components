/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';

import { Props, propTypes } from './types';
import NxFormGroup from '../NxFormGroup/NxFormGroup';
import NxTextInput from '../NxTextInput/NxTextInput';
import NxButton from '../NxButton/NxButton';

export default function NxCodeSnippet({ content, label, sublabel, className, ...otherProps }: Props) {
  const classes = classnames('nx-code-snippet', className);

  function copyToClipboard() {
    window.navigator.clipboard.writeText(content);
  }

  return (
    <div className={classes} { ...otherProps }>
      <NxFormGroup isRequired={true} label={label} sublabel={sublabel}>
        <NxTextInput type="textarea" value={content} isPristine={true} />
      </NxFormGroup>
      <NxButton variant="tertiary" onClick={copyToClipboard}>Copy Snippet</NxButton>
    </div>
  );
}

NxCodeSnippet.propTypes = propTypes;
