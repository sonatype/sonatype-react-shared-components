/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { NxSelectableTag } from '@sonatype/react-shared-components';

function NxSelectableTagExample() {
  const [tagSelected1, setTagSelected1] = useState(false),
      onSelect1 = () => setTagSelected1(!tagSelected1),
      [tagSelected2, setTagSelected2] = useState(false),
      onSelect2 = () => setTagSelected2(!tagSelected2),
      [tagSelected3, setTagSelected3] = useState(false),
      onSelect3 = () => setTagSelected3(!tagSelected3),
      [tagSelected4, setTagSelected4] = useState(false),
      onSelect4 = () => setTagSelected4(!tagSelected4),
      [tagSelected5, setTagSelected5] = useState(false),
      onSelect5 = () => setTagSelected5(!tagSelected5),
      [tagSelected6, setTagSelected6] = useState(false),
      onSelect6 = () => setTagSelected6(!tagSelected6),
      [tagSelected7, setTagSelected7] = useState(false),
      onSelect7 = () => setTagSelected7(!tagSelected7),
      [tagSelected8, setTagSelected8] = useState(false),
      onSelect8 = () => setTagSelected8(!tagSelected8),
      [tagSelected9, setTagSelected9] = useState(false),
      onSelect9 = () => setTagSelected9(!tagSelected9),
      [tagSelected10, setTagSelected10] = useState(false),
      onSelect10 = () => setTagSelected10(!tagSelected10);

  return (
    <>
      <NxSelectableTag onSelect={onSelect1} selected={tagSelected1}>Default</NxSelectableTag>
      <NxSelectableTag onSelect={onSelect2} selected={tagSelected2} color="purple">
        Purple
      </NxSelectableTag>
      <NxSelectableTag onSelect={onSelect3} selected={tagSelected3} color="pink">
        Pink - artisinal singularity tiger-team BASE jump meta-soul-delay network footage garage spook towards
        tiger-team weathered chrome warehouse
      </NxSelectableTag>
      <NxSelectableTag onSelect={onSelect4} selected={tagSelected4} color="blue">
        Blue
      </NxSelectableTag>
      <NxSelectableTag onSelect={onSelect5} selected={tagSelected5} color="red">
        Red
      </NxSelectableTag>
      <NxSelectableTag onSelect={onSelect6} selected={tagSelected6} color="green">
        Green
      </NxSelectableTag>
      <NxSelectableTag onSelect={onSelect7} selected={tagSelected7} color="orange">
        Orange
      </NxSelectableTag>
      <NxSelectableTag onSelect={onSelect8} selected={tagSelected8} color="yellow">
        Yellow
      </NxSelectableTag>
      <NxSelectableTag onSelect={onSelect9} selected={tagSelected9} color="lime">
        Lime
      </NxSelectableTag>
      <NxSelectableTag onSelect={onSelect10} selected={tagSelected10} color="indigo">
        Indigo
      </NxSelectableTag>
    </>
  );
}

export default NxSelectableTagExample;
