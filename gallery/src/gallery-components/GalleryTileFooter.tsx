/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { NxButton, NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import React, { useState } from 'react';
import { copyTextToClipboard, removeLicense } from '../util/exampleUtil';
import PropTypes from 'prop-types';
import './GalleryTileFooter.scss';

type GalleryTileFooterProps = {
  clipboardContent: string;
};

export const GalleryTileFooter = (props: GalleryTileFooterProps) => {
  const { clipboardContent } = props;
  const setCopyStatusWithTimeout = (status: string) => {
        //Set timeout to show copy status message as button text
        //before reverting to default button text
        const timeout = 3000;
        setCopyStatus(status);
        setTimeout(() => {
          setCopyStatus('');
        }, timeout);
      },
      [copyStatus, setCopyStatus] = useState<string>(''),
      copyOnClick = () => {
        copyTextToClipboard(removeLicense(clipboardContent))
            .then(() => setCopyStatusWithTimeout('success'))
            .catch(() => setCopyStatusWithTimeout('error'));
      };
  return (
    <footer className="nx-footer">
      <div className="nx-btn-bar">
        {copyStatus === 'success' &&
          <>
            <NxFontAwesomeIcon className="gallery-footer-clipboard__success"
                               icon={faCheckCircle}
                               title="Copied!"/>
            <span>Copied!</span>
          </>
        }
        {copyStatus === 'error' &&
          <>
            <NxFontAwesomeIcon className="gallery-footer-clipboard__error"
                               icon={faExclamationCircle}
                               title="Copy failed."/>
            <span>Copy failed.</span>
          </>
        }
        <NxButton onClick={copyOnClick}>Copy to Clipboard</NxButton>
      </div>
    </footer>);
};

GalleryTileFooter.propTypes = {
  clipboardContent: PropTypes.string.isRequired
};
