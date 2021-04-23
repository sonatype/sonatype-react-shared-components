/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  NxGlobalSidebar,
  NxGlobalSidebarNavigation,
  NxGlobalSidebarNavigationLink,
  useToggle,
  NxP,
  NxH3,
  NxPageSidebar,
  NxButton,
  NxFontAwesomeIcon,
  NxBackButton,
  NxWarningAlert
} from '@sonatype/react-shared-components';
import { faArrowLeft, faArrowRight, faLink, faExternalLinkSquareAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

export default function NxGlobalSidebarExample() {
  const [sidebarOpen, onToggleCollapse] = useToggle(true);
  return (
    <>
      <aside className="nx-page-local-header">
        <NxBackButton href="#">Foo</NxBackButton>
        <div className="nx-page-local-header__actions">
          <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
          <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
        </div>
      </aside>
      <div className="nx-page-notices">
        <NxWarningAlert>Password Warning: 12345? That's like an idiot's luggage combination!</NxWarningAlert>
      </div>
      <NxGlobalSidebar isOpen={sidebarOpen}
                       toggleOpenIcon={faArrowLeft}
                       toggleCloseIcon={faArrowRight}
                       onToggleClick={onToggleCollapse}
                       logoImg="./assets/logo-plaid-villain-text.png"
                       logoAltText="RSC Plaid Villain"
                       logoLink="#">
        <NxGlobalSidebarNavigation>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxGlobalSidebar" href="#/pages/NxGlobalSidebar"/>
          <NxGlobalSidebarNavigationLink icon={faExternalLinkSquareAlt} text="NxLoadError" href="#/pages/NxLoadError"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxLoadWrapper" href="#/pages/NxLoadWrapper"/>
          <NxGlobalSidebarNavigationLink icon={faExternalLinkSquareAlt}
                                         text="NxLoadingSpinner"
                                         href="#/pages/NxLoadingSpinner"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxModal" href="#/pages/NxModal"/>
          <NxGlobalSidebarNavigationLink icon={faExternalLinkSquareAlt}
                                         text="NxNexusPageHeader"
                                         href="#/pages/NxNexusPageHeader"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxPageHeader" href="#/pages/NxPageHeader"/>
          <NxGlobalSidebarNavigationLink icon={faExternalLinkSquareAlt}
                                         text="NxPagination"
                                         href="#/pages/NxPagination"/>
        </NxGlobalSidebarNavigation>
        <section className="gallery-custom-sidebar-content nx-global-sidebar__expanded-content">
          <NxH3>
            Custom Content
          </NxH3>
          <NxP>
            neural decay saturation point assault camera neon concrete engine
          </NxP>
          <NxP>
            neural decay saturation point assault camera neon concrete engine
          </NxP>
          <NxP>
            neural decay saturation point assault camera neon concrete engine
          </NxP>
          <NxP>
            neural decay saturation point assault camera neon concrete engine
          </NxP>
          <NxP>
            neural decay saturation point assault camera neon concrete engine
          </NxP>
          <NxP>
            neural decay saturation point assault camera neon concrete engine
          </NxP>
          <NxP>
            neural decay saturation point assault camera neon concrete engine
          </NxP>
        </section>
      </NxGlobalSidebar>
      <NxPageSidebar>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
      </NxPageSidebar>
      <main className="nx-page-main">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Proin libero nunc consequat interdum
        varius sit amet mattis. Enim praesent elementum facilisis leo vel. A arcu cursus vitae congue mauris
        rhoncus aenean vel elit. Morbi tincidunt ornare massa eget egestas. Semper auctor neque vitae tempus quam
        pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi est sit. Sit amet aliquam id diam
        maecenas. Porta nibh venenatis cras sed felis eget velit aliquet. Semper feugiat nibh sed pulvinar proin
        gravida hendrerit lectus a. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Purus non enim
        praesent elementum facilisis leo. Dui sapien eget mi proin. Ultrices eros in cursus turpis massa tincidunt
        dui ut ornare. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Turpis egestas maecenas
        pharetra convallis posuere morbi leo urna. Tortor posuere ac ut consequat semper viverra nam libero.
        Volutpat ac tincidunt vitae semper. Pretium fusce id velit ut tortor pretium viverra.
      </main>
    </>
  );
}
