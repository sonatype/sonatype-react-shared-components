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
  'fooooooo'
];

export default function NxScrollNavNoOverflowExample() {
  const [isDropdownOpen, toggleDropdownOpen] = useToggle(false),
      [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <div>
      <NxScrollNav scrollSections={sections}
                   activeSection={activeSection}
                   isDropdownOpen={isDropdownOpen}
                   onScrollSectionClick={setActiveSection}
                   onToggleDropdownCollapse={toggleDropdownOpen} />
    </div>
  );
}
