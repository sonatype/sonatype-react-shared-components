/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, useState } from 'react';
import { negate, pipe, without } from 'ramda';
import { NxStatefulDropdown } from '@sonatype/react-shared-components';
import { compareVersions } from 'compare-versions';

import packageJson from '../../package.json';

import './HostedVersionsSelect.scss';

const CURRENT_VERSION = packageJson.version;
const HOSTED_VERSIONS_JSON_PATH = '/hosted-versions.json';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

async function getHostedVersions(): Promise<string[]> {
  const response = await fetch(HOSTED_VERSIONS_JSON_PATH);

  if (!response.ok) {
    throw new Error('Failed to load hosted versions.');
  }

  return response.json();
}

const HostedVersionsSelect = () => {
  const [isLoadingHostedVersions, setIsLoadingHostedVersions] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hostedVersions, setHostedVersions] = useState([CURRENT_VERSION]);

  useEffect(() => {
    const loadHostedVersions = async () => {
      setIsLoadingHostedVersions(true);

      try {
        const hostedVersions = await getHostedVersions();
        const sortedVersions = without(['latest'], hostedVersions).sort(pipe(compareVersions, negate));

        setHostedVersions(sortedVersions);
        setIsLoadingHostedVersions(false);
      }
      catch {
        setHasError(true);
        setIsLoadingHostedVersions(false);
      }
    };

    if (IS_PRODUCTION) {
      loadHostedVersions();
    }
  }, []);

  return (
    <div className="gallery-hosted-versions-select">
      <span className="gallery-hosted-versions-select__version">
        Version { (!IS_PRODUCTION || hasError) && CURRENT_VERSION }
      </span>
      {
        IS_PRODUCTION && !isLoadingHostedVersions && !hasError && (
          <NxStatefulDropdown className="gallery-hosted-versions-select__dropdown nx-dropdown--short"
                              label={CURRENT_VERSION}
          >
            {
              hostedVersions.map(
                  version => (
                    <a key={version} href={`/versions/${version}`} className="nx-dropdown-button">
                      {version}
                    </a>
                  )
              )
            }
          </NxStatefulDropdown>
        )
      }
    </div>
  );
};

export default HostedVersionsSelect;
