/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, useState } from 'react';
import { without } from 'ramda';
import { NxStatefulDropdown } from '@sonatype/react-shared-components';
import compareVersions from 'compare-versions';

import packageJson from '../../package.json';

import './HostedVersionsSelect.scss';

const CURRENT_VERSION = packageJson.version;
const HOSTED_VERSIONS_JSON_URL = 'https://gallery.sonatype.dev/hosted-versions.json';

const getHostedVersions = async () => {
  const response = await fetch(HOSTED_VERSIONS_JSON_URL);

  if (!response.ok) {
    throw new Error('Failed to load hosted versions.');
  }

  return response.json();
};

const HostedVersionsSelect = () => {
  const [isLoadingHostedVersions, setIsLoadingHostedVersions] = useState(false);
  const [hostedVersions, setHostedVersions] = useState([CURRENT_VERSION]);

  useEffect(() => {
    setIsLoadingHostedVersions(true);

    const loadHostedVersions = async () => {
      try {
        const hostedVersions = await getHostedVersions();
        const sortedVersions = without(['latest'], hostedVersions).sort(compareVersions).reverse();

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
          <NxStatefulDropdown className="gallery-hosted-versions-select__dropdown nx-dropdown--short"
                              id="gallery-hosted-versions-select"
                              label={CURRENT_VERSION}
          >
            {
              hostedVersions.map(
                  version => (
                    <a key={version} href={`versions/${version}`} className="nx-dropdown-button">
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
