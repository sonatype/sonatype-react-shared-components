/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

import './NxBackButton.scss';

import { Props, propTypes } from './types';
export { Props, propTypes } from './types';

/**
 * A standard UI element for navigating back to a previous page
 * @param targetPageTitle The name of the page to navigate to
 * @param text Optional custom text to override the back button's default text logic
 * @param href The URL to navigate to when the back button is clicked
 */
const NxBackButton: FunctionComponent<Props> =
  function NxBackButton({ targetPageTitle, text, href }) {
    const linkText = text || (targetPageTitle ? `Back to ${targetPageTitle}` : 'Back');

    return (
      <div className="nx-back-button tm-back-button">
        <a href={href}>
          <NxFontAwesomeIcon icon={faChevronLeft} />
          <span>{linkText}</span>
        </a>
      </div>
    );
  };

NxBackButton.propTypes = propTypes;

export default NxBackButton;
