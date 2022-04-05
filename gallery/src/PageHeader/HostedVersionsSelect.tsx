/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, ChangeEventHandler, useState } from 'react';
import { NxFormSelect } from '@sonatype/react-shared-components';

import packageJson from '../../package.json';

import './HostedVersionsSelect.scss';

const CURRENT_VERSION = packageJson.version;
const HOSTED_VERSIONS_JSON_URL = 'https://gallery.sonatype.dev/versions/latest/hosted-versions.json';

const getHostedVersion = () => fetch(HOSTED_VERSIONS_JSON_URL, {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}).then((response) => {
  if (!response.ok) {
    throw new Error('Failed to load hosted versions.');
  }
  return response.json();
});

const HostedVersionsSelect = () => {
  const [isLoadingHostedVersions, setIsLoadingHostedVersions] = useState(false);
  const [hostedVersions, setHostedVersions] = useState([CURRENT_VERSION]);

  const onChange: ChangeEventHandler<HTMLSelectElement> = event =>
    window.location.href = `/versions/${event.target.value}`;

  useEffect(() => {
    setIsLoadingHostedVersions(true);
    getHostedVersion()
        .then((hostedVersions) => {
          setHostedVersions(hostedVersions);
          setIsLoadingHostedVersions(false);
        })
        .catch(() => {
          setHostedVersions([CURRENT_VERSION]);
          setIsLoadingHostedVersions(false);
        });
  }, []);

  return (
    <div className="hosted-versions-select">
      <label className="hosted-versions-select__label" htmlFor="hosted-versions-select">
        Version
      </label>
      {
        !isLoadingHostedVersions && (
          <NxFormSelect className="hosted-versions-select__select nx-form-select--short"
                        id="hosted-versions-select"
                        defaultValue={CURRENT_VERSION}
                        onChange={onChange}>
            {
              hostedVersions.map(
                  version =>
                    <option key={version} value={version}>{version}</option>
              )
            }
          </NxFormSelect>
        )
      }
    </div>
  );
};

export default HostedVersionsSelect;
