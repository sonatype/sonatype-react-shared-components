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
  [tagSelected2, setTagSelected2] = useState(false),
  [tagSelected3, setTagSelected3] = useState(false),
  [tagSelected4, setTagSelected4] = useState(false),
  [tagSelected5, setTagSelected5] = useState(false),
  [tagSelected6, setTagSelected6] = useState(false),
  [tagSelected7, setTagSelected7] = useState(false),
  [tagSelected8, setTagSelected8] = useState(false),
  [tagSelected9, setTagSelected9] = useState(false),
  [tagSelected10, setTagSelected10] = useState(false),
  [tagSelected11, setTagSelected11] = useState(false),
      onTagSelect1 = () => setTagSelected1(!tagSelected1),
      onTagSelect2 = () => setTagSelected2(!tagSelected2),
      onTagSelect3 = () => setTagSelected3(!tagSelected3),
      onTagSelect4 = () => setTagSelected4(!tagSelected4),
      onTagSelect5 = () => setTagSelected5(!tagSelected5),
      onTagSelect6 = () => setTagSelected6(!tagSelected6),
      onTagSelect7 = () => setTagSelected7(!tagSelected7),
      onTagSelect8 = () => setTagSelected8(!tagSelected8),
      onTagSelect9 = () => setTagSelected9(!tagSelected9),
      onTagSelect10 = () => setTagSelected10(!tagSelected10),
      onTagSelect11 = () => setTagSelected11(!tagSelected11);

  return (
    <div className="nx-tag-container">
      <NxSelectableTag onTagSelect={onTagSelect1} tagSelected={tagSelected1}>Leafspring</NxSelectableTag>
      <NxSelectableTag onTagSelect={onTagSelect2} tagSelected={tagSelected2} className="nx-tag--purple">
        Leaf
      </NxSelectableTag>
      <NxSelectableTag onTagSelect={onTagSelect3} tagSelected={tagSelected3} className="nx-tag--pink">
        Supercalifragilisticexpialidociousupercalifragilisticexpialidocious
        Supercalifragilisticexpialidociousupercalifragilisticexpialidocious
      </NxSelectableTag>
      <NxSelectableTag onTagSelect={onTagSelect4} tagSelected={tagSelected4} className="nx-tag--blue">
        Leafspring
      </NxSelectableTag>
      <NxSelectableTag onTagSelect={onTagSelect5} tagSelected={tagSelected5} className="nx-tag--grey">
        Leafspring
      </NxSelectableTag>
      <NxSelectableTag onTagSelect={onTagSelect6} tagSelected={tagSelected6} className="nx-tag--red">
        Leafspring
      </NxSelectableTag>
      <NxSelectableTag onTagSelect={onTagSelect7} tagSelected={tagSelected7} className="nx-tag--green">
        Leafspring
      </NxSelectableTag>
      <NxSelectableTag onTagSelect={onTagSelect8} tagSelected={tagSelected8} className="nx-tag--orange">
        Leafspring
      </NxSelectableTag>
      <NxSelectableTag onTagSelect={onTagSelect9} tagSelected={tagSelected9} className="nx-tag--yellow">
        Leafspring
      </NxSelectableTag>
      <NxSelectableTag onTagSelect={onTagSelect10} tagSelected={tagSelected10} className="nx-tag--lime">
        Leafspring
      </NxSelectableTag>
      <NxSelectableTag onTagSelect={onTagSelect11} tagSelected={tagSelected11} className="nx-tag--indigo">
        Leafspring
      </NxSelectableTag>
    </div>
  );
}

export default NxSelectableTagExample;
