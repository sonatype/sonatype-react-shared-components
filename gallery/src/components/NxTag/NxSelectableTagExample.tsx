/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { NxSelectableTag, NX_TAG_COLORS_TYPE } from '@sonatype/react-shared-components';

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
  { color: 'indigo', value: 'Indigo' }
];

function NxSelectableTagExample() {
  const [selectedTags, setSelectedTags] = useState<Set<TagInfo>>(new Set()),
      tagComponents = tags.map(tag => (
        <NxSelectableTag key={tag.value}
                         onSelect={() => toggleTag(tag)}
                         selected={selectedTags.has(tag)}
                         color={tag.color}>
          {tag.value}
        </NxSelectableTag>
      ));

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

  return <>{tagComponents}</>;
}

export default NxSelectableTagExample;
