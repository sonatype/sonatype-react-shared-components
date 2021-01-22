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
      onTagSelect1 = () => setTagSelected1(!tagSelected1),
      [tagSelected2, setTagSelected2] = useState(false),
      onTagSelect2 = () => setTagSelected2(!tagSelected2),
      [tagSelected3, setTagSelected3] = useState(false),
      onTagSelect3 = () => setTagSelected3(!tagSelected3),
      [tagSelected4, setTagSelected4] = useState(false),
      onTagSelect4 = () => setTagSelected4(!tagSelected4),
      [tagSelected5, setTagSelected5] = useState(false),
      onTagSelect5 = () => setTagSelected5(!tagSelected5),
      [tagSelected6, setTagSelected6] = useState(false),
      onTagSelect6 = () => setTagSelected6(!tagSelected6),
      [tagSelected7, setTagSelected7] = useState(false),
      onTagSelect7 = () => setTagSelected7(!tagSelected7),
      [tagSelected8, setTagSelected8] = useState(false),
      onTagSelect8 = () => setTagSelected8(!tagSelected8),
      [tagSelected9, setTagSelected9] = useState(false),
      onTagSelect9 = () => setTagSelected9(!tagSelected9),
      [tagSelected10, setTagSelected10] = useState(false),
      onTagSelect10 = () => setTagSelected10(!tagSelected10);

  return (
    <>
      <NxSelectableTag onTagSelect={onTagSelect1} tagSelected={tagSelected1}>Default</NxSelectableTag>
      <NxSelectableTag onTagSelect={onTagSelect2} tagSelected={tagSelected2} tagColor="purple">
        Purple
      </NxSelectableTag>
      <NxSelectableTag onTagSelect={onTagSelect3} tagSelected={tagSelected3} tagColor="pink">
        Pink - artisinal singularity tiger-team BASE jump meta-soul-delay network footage garage spook towards
        tiger-team weathered chrome warehouse
      </NxSelectableTag>
      <NxSelectableTag onTagSelect={onTagSelect4} tagSelected={tagSelected4} tagColor="blue">
        Blue
      </NxSelectableTag>
      <NxSelectableTag onTagSelect={onTagSelect5} tagSelected={tagSelected5} tagColor="red">
        Red
      </NxSelectableTag>
      <NxSelectableTag onTagSelect={onTagSelect6} tagSelected={tagSelected6} tagColor="green">
        Green
      </NxSelectableTag>
      <NxSelectableTag onTagSelect={onTagSelect7} tagSelected={tagSelected7} tagColor="orange">
        Orange
      </NxSelectableTag>
      <NxSelectableTag onTagSelect={onTagSelect8} tagSelected={tagSelected8} tagColor="yellow">
        Yellow
      </NxSelectableTag>
      <NxSelectableTag onTagSelect={onTagSelect9} tagSelected={tagSelected9} tagColor="lime">
        Lime
      </NxSelectableTag>
      <NxSelectableTag onTagSelect={onTagSelect10} tagSelected={tagSelected10} tagColor="indigo">
        Indigo
      </NxSelectableTag>
    </>
  );
}

export default NxSelectableTagExample;
