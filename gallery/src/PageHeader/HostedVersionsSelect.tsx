/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ChangeEventHandler } from 'react';
import { NxFormSelect } from '@sonatype/react-shared-components';

import hostedVersionsJson from '../../hosted-versions.json';

import './HostedVersionsSelect.scss';

const HostedVersionsSelect = () => {
  const onChange: ChangeEventHandler<HTMLSelectElement> = event =>
    window.location.href = `/versions/${event.target.value}`;

  return (
    <div className="hosted-versions-select">
      <label className="hosted-versions-select__label" htmlFor="hosted-versions-select">
        Version
      </label>
      <NxFormSelect className="hosted-versions-select__select nx-form-select--short"
                    id="hosted-versions-select"
                    onChange={onChange}>
        {
          hostedVersionsJson.map(
              version => <option key={version} value={version}>{version}</option>
          )
        }
      </NxFormSelect>
    </div>
  );
};

export default HostedVersionsSelect;
