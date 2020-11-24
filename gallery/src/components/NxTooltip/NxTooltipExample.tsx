/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import {
  NxButton,
  NxTooltip,
  NxCheckbox,
  NxAlert,
  NxErrorAlert,
  NxLoadError,
  NxRadio,
  NxTextInput,
  NxTreeView,
  NxTreeViewChild,
  NxFilterInput,
  NxDropdown
} from '@sonatype/react-shared-components';

import { NxStatefulTextInput, NxStatefulCheckbox } from '@sonatype/react-shared-components';

import { faEye } from '@fortawesome/free-solid-svg-icons';

import './NxTooltipExample.scss';

const NxTooltipExample = () => {
  const [isOpen, toggleOpen] = useState(false),
      toggle = () => toggleOpen(!isOpen);

  return (
    <>
      <div className="nx-btn-bar">
        <NxTooltip title="Tooltip!">
          <NxButton>Hover over me for a tooltip</NxButton>
        </NxTooltip>
        <NxTooltip placement="top"
                   className="gallery-tooltip-example"
                   title={<>Tooltip content can support <strong>HTML</strong> as well</>}>
          <NxButton>Me too!</NxButton>
        </NxTooltip>
        <NxTooltip title="Tip" open>
          <NxButton>My tooltip is always open</NxButton>
        </NxTooltip>
        <NxTooltip placement="right" title="Right tooltip example">
          <NxButton>Right Placement</NxButton>
        </NxTooltip>
      </div>
      <section>
        <header>
          <h3>Tooltip Examples on Various Components</h3>
        </header>
        <NxTooltip title="NxCheckbox" placement="top">
          <NxCheckbox isChecked={false}>NxCheckbox</NxCheckbox>
        </NxTooltip>

        <NxTooltip title="NxStatefulCheckbox" placement="top">
          <NxStatefulCheckbox defaultChecked>NxStatefulCheckbox</NxStatefulCheckbox>
        </NxTooltip>

        <NxTooltip title="NxAlert" placement="top">
          <NxAlert icon={faEye} id="this-id-ends-up-on-the-div" className="nx-alert--modifier">
            <span>
              This is an example <code>NxAlert</code>.
            </span>
          </NxAlert>
        </NxTooltip>

        <NxTooltip title="NxErrorAlert" placement="top">
          <NxErrorAlert>
            <span>This is an example <code>NxErrorAlert</code></span>
          </NxErrorAlert>
        </NxTooltip>

        <NxTooltip title="NxLoadError" placement="top">
          <NxLoadError error="NxLoadError!" />
        </NxTooltip>

        <div>
          <NxTooltip title="NxRadio" placement="top">
            <NxRadio name="color" value="red" isChecked>
              NxRadio
            </NxRadio>
          </NxTooltip>
        </div>

        <div>
          <NxTooltip title="NxTextInput" placement="top">
            <NxTextInput value="NxTextInput" isPristine />
          </NxTooltip>
        </div>

        <div>
          <NxTooltip title="NxStatefulTextInput" placement="top">
            <NxStatefulTextInput placeholder="NxStatefulTextInput"/>
          </NxTooltip>
        </div>

        <div>
          <NxTooltip title="NxFilterInput" placement="top">
            <NxFilterInput value='' placeholder="NxFilterInput" />
          </NxTooltip>
        </div>

        <NxTreeView isOpen
                    triggerContent="NxTreeView"
                    triggerTooltip={{title: 'NxTreeView', placement: 'top'}}>
          <NxTooltip title="Test1" placement="top"><NxTreeViewChild><span>Test1</span></NxTreeViewChild></NxTooltip>
          <NxTooltip title="Test2" placement="top"><NxTreeViewChild><span>Test2</span></NxTreeViewChild></NxTooltip>
        </NxTreeView>

        <NxDropdown variant="tertiary"
                    label="Dropdown!"
                    isOpen={isOpen}
                    toggleTooltip="NxDropdown tooltip"
                    onToggleCollapse={toggle}>
          <NxTooltip title="item 1" placement="top">
            <a className="nx-dropdown-link">Item 1</a>
          </NxTooltip>
          <NxTooltip title="item 1" placement="top">
            <a className="nx-dropdown-link">Item 2</a>
          </NxTooltip>
        </NxDropdown>
      </section>
    </>
  );
};

export default NxTooltipExample;
