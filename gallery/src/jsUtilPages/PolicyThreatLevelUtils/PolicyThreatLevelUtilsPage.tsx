/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const threatLevelNumberExampleCode = require('!!raw-loader!./ThreatLevelNumberExample').default,
    threatLevelCategoryExampleCode = require('!!raw-loader!./ThreatLevelCategoryExample').default,
    categoryByPolicyThreatLevelExampleCode = require('!!raw-loader!./CategoryByPolicyThreatLevelExample').default;

const PolicyThreatLevelUtilsPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Sonatype's Insight line of products have concepts of Policy Threat Levels and Policy Threat Level
        Categories, as described below. The React Shared Components library includes a few simple JavaScript
        objects and TypeScript types that provide code definitions and mappings between these two concepts.
      </p>

      <dl className="nx-list nx-list--definition-list">
        <dt className="nx-list__item nx-list__item--label">Policy Threat Level</dt>
        <dd className="nx-list__item">
          An integer between 0 and 10, inclusive, that describes the severity of a threat.  Zero represents no
          threat at all and ten represents the most severe of threats
        </dd>
        <dt className="nx-list__item nx-list__item--label">Policy Threat Level Category</dt>
        <dd className="nx-list__item">
          In increasing order of severity: <q>none</q>; <q>low</q>; <q>moderate</q>; <q>severe</q>;
          and <q>critical</q>, or <q>unspecified</q>. Each Policy Threat Level is a member of a corresponding
          category:

          <dl className="nx-list nx-list--definition-list">
            <dt className="nx-list__item nx-list__item--label">none</dt><dd className="nx-list__item">0</dd>
            <dt className="nx-list__item nx-list__item--label">low</dt><dd className="nx-list__item">1</dd>
            <dt className="nx-list__item nx-list__item--label">moderate</dt><dd className="nx-list__item">2 - 3</dd>
            <dt className="nx-list__item nx-list__item--label">severe</dt><dd className="nx-list__item">4 - 7</dd>
            <dt className="nx-list__item nx-list__item--label">critical</dt><dd className="nx-list__item">8 - 10</dd>
          </dl>
        </dd>
      </dl>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="ThreatLevelCategory & allThreatLevelCategories"
                        codeExamples={threatLevelCategoryExampleCode}>
      <code className="nx-code">ThreatLevelCategory</code> is a TypeScript type consisting of
      only the valid Threat Level Category strings.
      {' '}<code className="nx-code">allThreatLevelCategories</code> is a read-only array
      containing those same values
    </GalleryExampleTile>

    <GalleryExampleTile title="ThreatLevelNumber & allThreatLevelNumbers"
                        codeExamples={threatLevelNumberExampleCode}>
      <code className="nx-code">ThreatLevelNumber</code> is a TypeScript type consisting of
      only the valid Threat Level Numbers – i.e. the integers 0 through 10.
      {' '}<code className="nx-code">allThreatLevelNumbers</code> is a read-only array
      containing those same values
    </GalleryExampleTile>

    <GalleryExampleTile title="categoryByPolicyThreatLevel"
                        codeExamples={categoryByPolicyThreatLevelExampleCode}>
      <code className="nx-code">categoryByPolicyThreatLevel</code> is a read-only array that,
      when indexed into using a <code className="nx-code">ThreatLevelNumber</code>, gives the
      {' '}<code className="nx-code">ThreatLevelCategory</code> to which that number belongs
    </GalleryExampleTile>
  </>;

export default PolicyThreatLevelUtilsPage;
