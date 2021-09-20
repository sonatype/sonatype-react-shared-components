/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxCode, NxList } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const threatLevelNumberExampleCode = require('./ThreatLevelNumberExample?raw'),
    threatLevelCategoryExampleCode = require('./ThreatLevelCategoryExample?raw'),
    categoryByPolicyThreatLevelExampleCode = require('./CategoryByPolicyThreatLevelExample?raw');

const PolicyThreatLevelUtilsPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Sonatype's Insight line of products have concepts of Policy Threat Levels and Policy Threat Level
        Categories, as described below. The React Shared Components library includes a few simple JavaScript
        objects and TypeScript types that provide code definitions and mappings between these two concepts.
      </NxP>

      <NxList bulleted>
        <NxList.Item>
          <strong>Policy Threat Level:</strong> An integer between 0 and 10, inclusive, that describes
          the severity of a threat.  Zero represents no
          threat at all and ten represents the most severe of threats
        </NxList.Item>
        <NxList.Item><strong>Policy Threat Level Category:</strong>
          {' '}In increasing order of severity: <q>none</q>; <q>low</q>; <q>moderate</q>; <q>severe</q>;
          and <q>critical</q>, or <q>unspecified</q>. Each Policy Threat Level is a member of a corresponding
          category:

          <NxList bulleted>
            <NxList.Item><strong>none:</strong> 0</NxList.Item>
            <NxList.Item><strong>low:</strong> 1</NxList.Item>
            <NxList.Item><strong>moderate:</strong> 2 - 3</NxList.Item>
            <NxList.Item><strong>severe:</strong> 4 - 7</NxList.Item>
            <NxList.Item><strong>critical:</strong> 8 - 10</NxList.Item>
          </NxList>
        </NxList.Item>
      </NxList>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="ThreatLevelCategory & allThreatLevelCategories"
                        codeExamples={threatLevelCategoryExampleCode}>
      <NxCode>ThreatLevelCategory</NxCode> is a TypeScript type consisting of
      only the valid Threat Level Category strings.
      {' '}<NxCode>allThreatLevelCategories</NxCode> is a read-only array
      containing those same values
    </GalleryExampleTile>

    <GalleryExampleTile title="ThreatLevelNumber & allThreatLevelNumbers"
                        codeExamples={threatLevelNumberExampleCode}>
      <NxCode>ThreatLevelNumber</NxCode> is a TypeScript type consisting of
      only the valid Threat Level Numbers – i.e. the integers 0 through 10.
      {' '}<NxCode>allThreatLevelNumbers</NxCode> is a read-only array
      containing those same values
    </GalleryExampleTile>

    <GalleryExampleTile title="categoryByPolicyThreatLevel"
                        codeExamples={categoryByPolicyThreatLevelExampleCode}>
      <NxCode>categoryByPolicyThreatLevel</NxCode> is a read-only array that,
      when indexed into using a <NxCode>ThreatLevelNumber</NxCode>, gives the
      {' '}<NxCode>ThreatLevelCategory</NxCode> to which that number belongs
    </GalleryExampleTile>
  </>;

export default PolicyThreatLevelUtilsPage;
