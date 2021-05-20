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
  NxGlobalSidebarFooter,
  useToggle,
  NxP,
  NxH3,
  NxPageMain,
  NxTreeView,
  NxCheckbox,
  NxRadio,
  NxTreeViewChild }
  from '@sonatype/react-shared-components';
import { faArrowLeft, faArrowRight, faLink, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

const logoImg = require('../../assets/images/logo-plaid-villain-text.png');

export default function NxGlobalSidebarFooterScrollingExample() {
  const [sidebarOpen, onToggleCollapse] = useToggle(true);
  const [is1Open, onToggle1Collapse] = useToggle(false),
      [is2Open, onToggle2Collapse] = useToggle(false);

  return (
    <>
      <NxGlobalSidebar isOpen={sidebarOpen}
                       toggleOpenIcon={faArrowLeft}
                       toggleCloseIcon={faArrowRight}
                       onToggleClick={onToggleCollapse}
                       logoImg={logoImg}
                       logoAltText="RSC Plaid Villain"
                       logoLink="#">
        <NxGlobalSidebarNavigation>
          <NxGlobalSidebarNavigationLink icon={faLink}
                                         text="NxGlobalSidebarFooter"
                                         href="#/pages/NxGlobalSidebarFooter"/>
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
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxPageHeader" href="#/pages/NxPageHeader"/>
          <NxGlobalSidebarNavigationLink icon={faLink} text="NxPageHeader" href="#/pages/NxPageHeader"/>
          <NxGlobalSidebarNavigationLink icon={faExternalLinkSquareAlt}
                                         text="NxPagination"
                                         href="#/pages/NxPagination"/>
        </NxGlobalSidebarNavigation>
        <section className="gallery-custom-sidebar-content
                            nx-global-sidebar__other-content
                            nx-scrollable">
          <div className="nx-global-sidebar__expanded-content">
            <NxH3>
              Custom Content
            </NxH3>
            <NxP>
              neural decay saturation point assault camera neon concrete engine
            </NxP>
            <NxTreeView isOpen={is1Open}
                        onToggleCollapse={onToggle1Collapse}
                        triggerContent="Organization">
              <NxTreeViewChild>
                <NxCheckbox isChecked={true}>
                  Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
                </NxCheckbox>
              </NxTreeViewChild>
              <NxTreeViewChild>
                <NxCheckbox isChecked={true}>Bar</NxCheckbox>
              </NxTreeViewChild>
              <NxTreeViewChild>
                <NxCheckbox isChecked={true}>Baz</NxCheckbox>
              </NxTreeViewChild>
            </NxTreeView>
            <NxTreeView isOpen={is2Open}
                        onToggleCollapse={onToggle2Collapse}
                        triggerContent="Organization">
              <NxTreeViewChild>
                <NxRadio name="test-radio" value="foo" isChecked={false}>Foo</NxRadio>
              </NxTreeViewChild>
              <NxTreeViewChild>
                <NxRadio name="test-radio" value="bar" isChecked={false}>Bar</NxRadio>
              </NxTreeViewChild>
              <NxTreeViewChild>
                <NxRadio name="test-radio" value="baz" isChecked={true}>Baz</NxRadio>
              </NxTreeViewChild>
            </NxTreeView>
            <NxP>
              dolphin -space cardboard claymore mine kanji network footage shrine girl market pre- sentient systemic.
              otaku narrative spook faded spook courier smart- construct vinyl bomb woman numinous beef noodles. San
              Francisco post- j-pop systemic monofilament free-market A.I. Legba receding bomb beef noodles boy
              papier-mache.
            </NxP>
          </div>
        </section>
        <NxGlobalSidebarFooter supportText="Support for RSC"
                               supportLink="https://github.com/sonatype/sonatype-react-shared-components"
                               releaseText="Release 3.1.4"
                               productTagLine="Powered by PLAID VILLAIN"
                               showCreatedBy={false}>
        </NxGlobalSidebarFooter>
      </NxGlobalSidebar>
      <NxPageMain>Page content</NxPageMain>
    </>
  );
}
