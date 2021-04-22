/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxGlobalSidebar, useToggle } from '@sonatype/react-shared-components';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import GalleryNav from '../../GalleryNav';

export default function NxGlobalSidebarWithPageSidebarExample() {
  const [sidebarOpen, onToggleCollapse] = useToggle(false);
  return (
    <div className="nx-page-content">
      <NxGlobalSidebar isOpen={sidebarOpen}
                       toggleOpenIcon={faCircle}
                       toggleCloseIcon={faCircle}
                       onToggleClick={onToggleCollapse}
                       logoImg="foo"
                       logoAltText="foo"
                       logoLink="#" />
      <aside className="nx-page-sidebar" id="gallery-sidebar">
        <GalleryNav />
      </aside>
      <main className="nx-page-main">Page content</main>
    </div>
  );
}
