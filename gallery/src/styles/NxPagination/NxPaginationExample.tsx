/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFontAwesomeIcon, NxButton } from '@sonatype/react-shared-components';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const NxAlertErrorExample = () =>
  <div className="nx-footer">
    <div className="nx-btn-bar nx-btn-bar--pagination">
      <NxButton variant="tertiary"><NxFontAwesomeIcon icon={faCaretLeft}/></NxButton>
      <NxButton className="nx-btn--pagination">1</NxButton>
      <NxButton className="nx-btn--pagination">2</NxButton>
      <NxButton className="nx-btn--pagination">3</NxButton>
      <NxButton className="nx-btn--pagination selected">4</NxButton>
      <NxButton className="nx-btn--pagination">5</NxButton>
      <NxButton className="nx-btn--pagination">...</NxButton>
      <NxButton className="nx-btn--pagination">7</NxButton>
      <NxButton variant="tertiary"><NxFontAwesomeIcon icon={faCaretRight}/></NxButton>
    </div>
  </div>;

export default NxAlertErrorExample;
