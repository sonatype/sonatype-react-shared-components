/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { NxScrollNav, useToggle } from '@sonatype/react-shared-components';

const sections = [
  'foo',
  'fooo',
  'foooo',
  'fooooo',
  'foooooo',
  'fooooooo',
  'foooooooo',
  'fooooooooo',
  'foooooooooo',
  'fooooooooooo',
  'foooooooooooo',
  'fooooooooooooo',
  'foooooooooooooo',
  'fooooooooooooooo',
  'foooooooooooooooo'
];

export default function NxScrollNavExample() {
  const [isDropdownOpen, toggleDropdownOpen] = useToggle(false),
      [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div>
      <span>Current Section: {currentSection}</span>
      <NxScrollNav scrollSections={sections}
                   isDropdownOpen={isDropdownOpen}
                   onScrollSectionClick={setCurrentSection}
                   onToggleDropdownCollapse={toggleDropdownOpen} />
    </div>
  );
}
