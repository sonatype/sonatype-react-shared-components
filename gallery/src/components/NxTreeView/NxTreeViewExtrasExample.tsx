/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import {faCube} from '@fortawesome/free-solid-svg-icons';

import { NxTreeView, NxTreeViewChild, NxFontAwesomeIcon } from '@sonatype/react-shared-components';

function NxTreeViewExtrasExample() {
  // this example uses the `useState` hook for succinctness, but you could also manage the state manually
  // in a class component
  const [toggleCheck1, setToggleCheck1] = useState(false),
      onToggleCollapse1 = () => setToggleCheck1(!toggleCheck1);

  const [toggleCheck2, setToggleCheck2] = useState(false),
      onToggleCollapse2 = () => setToggleCheck2(!toggleCheck2);

  const [toggleCheck3, setToggleCheck3] = useState(false),
      onToggleCollapse3 = () => setToggleCheck3(!toggleCheck3);

  return (
    <>
      <NxTreeView onToggleCollapse={onToggleCollapse1}
                  isOpen={toggleCheck1}
                  triggerContent={
                    <>
                      <NxFontAwesomeIcon icon={faCube}/>
                      <span>Trigger with icon &amp; counter</span>
                      <div aria-label="12 options out of 43 selected" className="nx-counter">
                        12 of 43
                      </div>
                    </>
                  }>
        <NxTreeViewChild>Test1</NxTreeViewChild>
        <NxTreeViewChild>Test2</NxTreeViewChild>
      </NxTreeView>
      <NxTreeView onToggleCollapse={onToggleCollapse2}
                  isOpen={toggleCheck2}
                  triggerContent={
                    <>
                      <NxFontAwesomeIcon icon={faCube}/>
                      <span>Foo</span>
                      <div aria-label="12 options out of 43 selected" className="nx-counter">
                        12 of 43
                      </div>
                    </>
                  }>
        <NxTreeViewChild>Test1</NxTreeViewChild>
        <NxTreeViewChild>Test2</NxTreeViewChild>
      </NxTreeView>
      <NxTreeView onToggleCollapse={onToggleCollapse3}
                  isOpen={toggleCheck3}
                  triggerContent={
                    <>
                      <NxFontAwesomeIcon icon={faCube}/>
                      <span>This title is extra long and triggers ellipsis truncation</span>
                      <div aria-label="12 options out of 43 selected" className="nx-counter">
                        12 of 43
                      </div>
                    </>
                  }>
        <NxTreeViewChild>Test1</NxTreeViewChild>
        <NxTreeViewChild>Test2</NxTreeViewChild>
      </NxTreeView>
    </>
  );
}

export default NxTreeViewExtrasExample;
