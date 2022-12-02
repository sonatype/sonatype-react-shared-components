/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React, { forwardRef } from 'react';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import prettyBytes from 'pretty-bytes';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';
import NxTooltip from '../NxTooltip/NxTooltip';
import { SelectedFileProps, selectedFilePropTypes } from './types';

export { SelectedFileProps };

const formatSize = (size: number) => prettyBytes(size, { minimumFractionDigits: 1, maximumFractionDigits: 1 });

const SelectedFile = forwardRef<HTMLSpanElement, SelectedFileProps>(
    function SelectedFile({ file, onDismiss, descriptionId }, ref) {
      // Testing on NVDA shows a need to set this as the aria-label in addition to the tooltip
      const buttonLabel = 'Dismiss Upload';

      return (
        <span className="nx-selected-file" ref={ref}>
          <span className="nx-selected-file__info" id={descriptionId ?? undefined}>
            <NxOverflowTooltip>
              <span className="nx-selected-file__name">{file.name}</span>
            </NxOverflowTooltip>
            <span className="nx-selected-file__size">{formatSize(file.size)}</span>
          </span>
          <NxTooltip title={buttonLabel}>
            <button type="button"
                    aria-label={buttonLabel}
                    className="nx-selected-file__dismiss-btn"
                    onClick={onDismiss}>
              <NxFontAwesomeIcon icon={faTimesCircle} />
            </button>
          </NxTooltip>
        </span>
      );
    }
);

SelectedFile.propTypes = selectedFilePropTypes;

export default SelectedFile;
