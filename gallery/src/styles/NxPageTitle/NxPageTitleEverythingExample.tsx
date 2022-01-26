/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  NxPageTitle,
  NxButtonBar,
  NxTag,
  NxDropdown,
  NxPolicyViolationIndicator,
  NxThreatCounter,
  NxCode,
  useToggle
} from '@sonatype/react-shared-components';

function NxPageTitleEverythingExample() {
  const [isOpen, onToggleCollapse] = useToggle(false);

  return (
    <NxPageTitle>
      <NxPageTitle.Headings>
        <h1 className="nx-h1">
          Longer Page Title Foo Bar Foo!
        </h1>
        <h2 className="nx-h2 nx-page-title__sub-title">
          This is a page sub-title that will truncate with an ellipsis
        </h2>
      </NxPageTitle.Headings>
      <NxButtonBar>
        <NxDropdown label="Example Dropdown" isOpen={isOpen} onToggleCollapse={onToggleCollapse}>
          <a href="#/" className="nx-dropdown-button">
            <span className="nx-dropdown-button-content">Text Link 1</span>
          </a>
          <a href="#/" className="nx-dropdown-button">
            <span className="nx-dropdown-button-content">Text Link 2</span>
          </a>
          <a href="#/" className="nx-dropdown-button">
            <span className="nx-dropdown-button-content">Text Link 3</span>
          </a>
          <a href="#/" className="nx-dropdown-button">
            <span className="nx-dropdown-button-content">Text Link 4</span>
          </a>
        </NxDropdown>
      </NxButtonBar>
      <NxPageTitle.Description>
        <p className="nx-p">
          The "tags" area of the page title supports the display of <NxCode>NxPolicyViolationIndicator</NxCode>s,
          <NxCode>NxThreatCounter</NxCode>s, and <NxCode>NxTag</NxCode>s, which should be displayed in that order.
        </p>
      </NxPageTitle.Description>
      <NxPageTitle.Tags>
        <NxPolicyViolationIndicator threatLevelCategory="severe">Severe</NxPolicyViolationIndicator>
        <NxPolicyViolationIndicator threatLevelCategory="critical">Critical</NxPolicyViolationIndicator>
        <NxThreatCounter criticalCount={45}
                         severeCount={21114}
                         moderateCount={12}
                         lowCount={45}
                         noneCount={21}/>
        <NxTag>Default</NxTag>
        <NxTag color="purple">Purple</NxTag>
        <NxTag color="sky">Sky</NxTag>
        <NxTag color="pink">Pink</NxTag>
        <NxTag color="blue">Blue</NxTag>
        <NxTag color="red">Red</NxTag>
        <NxTag color="turquoise">Turquoise</NxTag>
        <NxTag color="orange">Orange</NxTag>
        <NxTag color="yellow">Yellow</NxTag>
        <NxTag color="kiwi">Kiwi</NxTag>
      </NxPageTitle.Tags>
    </NxPageTitle>
  );
}

export default NxPageTitleEverythingExample;
