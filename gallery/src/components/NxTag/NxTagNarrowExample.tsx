/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { NxTag, NxSelectableTag, NX_TAG_COLORS_TYPE } from '@sonatype/react-shared-components';

interface TagInfo {
  color?: NX_TAG_COLORS_TYPE;
  value: string;
}

const tags: TagInfo[] = [
  { color: undefined, value: 'Default' },
  { color: 'purple', value: 'Purple' },
  {
    color: 'pink',
    value: `Pink - artisinal singularity tiger-team BASE jump meta-soul-delay network footage garage spook towards
        tiger-team weathered chrome warehouse`
  },
  { color: 'blue', value: 'Blue' },
  { color: 'red', value: 'Red' },
  { color: 'green', value: 'Green' },
  { color: 'orange', value: 'Orange' },
  { color: 'yellow', value: 'Yellow' },
  { color: 'lime', value: 'Lime' },
  { color: 'light-blue', value: 'Light Blue' }
];

function NxTagNarrowExample() {
  const [selectedTags, setSelectedTags] = useState<Set<TagInfo>>(new Set());

  function toggleTag(tag: TagInfo) {
    const newSet = new Set(selectedTags);

    if (newSet.has(tag)) {
      newSet.delete(tag);
    }
    else {
      newSet.add(tag);
    }

    setSelectedTags(newSet);
  }

  return (
    <div style={{width: '250px', border: '1px solid #ddd'}}>
      <NxTag>Default</NxTag>
      <NxTag color="light-blue">Light Blue</NxTag>
      <NxTag color="purple">Purple</NxTag>
      <NxTag color="pink">Pink</NxTag>
      <NxTag color="blue">Blue</NxTag>
      <NxTag color="green">
        Green - artisinal singularity tiger-team BASE jump meta-soul-delay network footage garage spook towards
        tiger-team weathered chrome warehouse
      </NxTag>
      <NxTag color="red">Red</NxTag>

      {
        tags.map(tag => (
          <NxSelectableTag key={tag.value}
                           onSelect={() => toggleTag(tag)}
                           selected={selectedTags.has(tag)}
                           color={tag.color}>
            {tag.value}
          </NxSelectableTag>
        ))
      }

      <NxTag color="orange">Orange</NxTag>
      <NxTag color="yellow">Yellow</NxTag>
      <NxTag color="lime">Lime</NxTag>
    </div>
  );
}

export default NxTagNarrowExample;
