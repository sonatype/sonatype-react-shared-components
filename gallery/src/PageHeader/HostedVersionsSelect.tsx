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
const HOSTED_VERSIONS_JSON_URL = 'https://gallery.sonatype.dev/hosted-versions.json';

const getHostedVersions = () => fetch(HOSTED_VERSIONS_JSON_URL).then((response) => {
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

    const loadHostedVersions = async () => {
      try {
        const hostedVersions = await getHostedVersions();

        const sortedVersions = hostedVersions.filter((v: string) => v !== 'latest').sort((a: string, b: string) => {
          const aParts = a.split('.');
          const bParts = b.split('.');

          const compareVersionPart = (index: number): number => {
            if (aParts[index] === bParts[index]) {
              return index + 1 > aParts.length ? 0 : compareVersionPart(index + 1);
            }
            return -(+aParts[index] - +bParts[index]);
          };

          return compareVersionPart(0);
        });

        setHostedVersions(sortedVersions);
        setIsLoadingHostedVersions(false);
      }
      catch {
        setHostedVersions([CURRENT_VERSION]);
        setIsLoadingHostedVersions(false);
      }
    };

    loadHostedVersions();
  }, []);

  return (
    <div className="gallery-hosted-versions-select">
      <label className="gallery-hosted-versions-select__label" htmlFor="gallery-hosted-versions-select">
        Version
      </label>
      {
        !isLoadingHostedVersions && (
          <NxFormSelect className="gallery-hosted-versions-select__select nx-form-select--short"
                        id="gallery-hosted-versions-select"
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
