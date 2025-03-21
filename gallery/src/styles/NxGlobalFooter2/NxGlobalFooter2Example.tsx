/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import {
  NxPageMain,
  NxP,
  NxPageTitle,
  NxH1,
  NxStatefulGlobalSidebar2,
  NxGlobalSidebar2NavigationLink,
  NxTextLink,
  NxGlobalFooter2,
  NxGlobalHeader2,
  NxFilterInput,
  NxStatefulNavigationDropdown
} from '@sonatype/react-shared-components';
import {
  faArrowLeft,
  faArrowRight,
  faLink,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';

export default function NxGlobalFooter2Example() {
  const [filterInputValue, setFilterInputValue] = useState('');

  return (
    <>
      <NxGlobalHeader2 homeHref="#/">
        <NxFilterInput placeholder="Search" searchIcon value={filterInputValue} onChange={setFilterInputValue} />
        <NxStatefulNavigationDropdown title="User" icon={faUserCircle}>
          <button onClick={() => alert('clicked')} className="nx-dropdown-button">
            Button Link
          </button>
        </NxStatefulNavigationDropdown>
      </NxGlobalHeader2>
      <NxStatefulGlobalSidebar2 isDefaultOpen={false}
                                toggleOpenIcon={faArrowLeft}
                                toggleCloseIcon={faArrowRight}>
        <NxGlobalSidebar2NavigationLink icon={faLink} text="NxGlobalSidebar" href="#/pages/Global%20Sidebar"/>
      </NxStatefulGlobalSidebar2>
      <NxGlobalFooter2.Container>
        <NxPageMain tabIndex={0}>
          <NxPageTitle>
            <NxH1>Lorem Ipsum</NxH1>
          </NxPageTitle>
          <NxP>
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
          </NxP>
          <NxP>
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
          </NxP>
          <NxP>
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
          </NxP>
          <NxP>
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
          </NxP>
          <NxP>
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
          </NxP>
          <NxP>
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
          </NxP>
          <NxP>
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
          </NxP>
        </NxPageMain>
        <NxGlobalFooter2>
          <span>Thank you for choosing RSC</span>
          <NxTextLink href="/#">Home</NxTextLink>
          <NxTextLink href="/#">Also Home</NxTextLink>
        </NxGlobalFooter2>
      </NxGlobalFooter2.Container>
    </>
  );
}
