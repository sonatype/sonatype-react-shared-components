/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {NxListItemActionProps} from './types';
import NxButton from '../NxButton/NxButton';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const NxListItemAction = (props: NxListItemActionProps) => {
  const { title} = props;
  return (
    <>
      <NxButton title={title} variant="icon-only">
        <NxFontAwesomeIcon icon={faEdit} />
      </NxButton>
    </>
  );
};

export default NxListItemAction;
