/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxStatefulAccordion, NxAccordion } from '@sonatype/react-shared-components';

export default function NxTileAccordionExample() {
  return (
    <section className="nx-tile">
      <header className="nx-tile-header">
        <div className="nx-tile-header__title">
          <h2 className="nx-h2">Tile with accordions</h2>
        </div>
      </header>
      <div className="nx-tile-content">
        <p className="nx-p">
          Other content may optionally be present outside of the accordion container
        </p>
      </div>
      <div className="nx-tile-content nx-tile-content--accordion-container">
        <NxStatefulAccordion>
          <NxAccordion.Header>
            <div className="nx-accordion__header-title">Bacon</div>
          </NxAccordion.Header>
          <p className="nx-p">
            Bacon ipsum dolor amet tenderloin kevin jerky corned beef, kielbasa cow strip steak. Venison alcatra
            bacon t-bone shank pork chop drumstick. Ribeye kielbasa flank frankfurter. Fatback brisket ham
            turducken. Hamburger pork belly t-bone short loin beef ribs cupim fatback spare ribs shankle chicken.
            Landjaeger bresaola buffalo, chuck ground round pork chop cow biltong pork rump jerky tenderloin
            drumstick. Spare ribs shank buffalo corned beef swine, jowl turducken flank pastrami bacon shoulder
            t-bone cupim landjaeger.
          </p>
        </NxStatefulAccordion>
        <NxStatefulAccordion>
          <NxAccordion.Header>
            <div className="nx-accordion__header-title">Landjaeger</div>
          </NxAccordion.Header>
          <p className="nx-p">
            Landjaeger t-bone pastrami flank ribeye buffalo, hamburger salami corned beef tongue sausage. Capicola
            sirloin corned beef kielbasa flank doner meatball jerky burgdoggen ham spare ribs venison ham hock. Rump
            ham beef drumstick jowl ribeye. Ham cupim ground round, chuck turkey buffalo chicken hamburger flank.
          </p>
        </NxStatefulAccordion>
        <NxStatefulAccordion>
          <NxAccordion.Header>
            <div className="nx-accordion__header-title">Drumstick</div>
          </NxAccordion.Header>
          <p className="nx-p">
            Drumstick ground round hamburger, salami turkey buffalo pork loin tri-tip. Doner kevin pancetta
            kielbasa ham porchetta strip steak tail buffalo flank pork tri-tip chislic meatloaf. Ribeye tri-tip
            andouille tail. Pig boudin sausage bacon tail, ham pork loin shank short ribs corned beef capicola
            brisket bresaola kevin. Chislic strip steak tri-tip, prosciutto burgdoggen short ribs jerky ground
            round ribeye tongue cow andouille pastrami pig. Chuck andouille sausage cow shankle alcatra tail rump
            brisket burgdoggen prosciutto.
          </p>
        </NxStatefulAccordion>
        <NxStatefulAccordion>
          <NxAccordion.Header>
            <div className="nx-accordion__header-title">Prosciutto</div>
          </NxAccordion.Header>
          <p className="nx-p">
            Prosciutto chislic tail beef sausage short loin spare ribs leberkas fatback landjaeger t-bone bacon
            andouille venison. Tri-tip salami doner, fatback turkey chicken cow. Cow ball tip rump cupim, burgdoggen
            jerky bresaola chislic andouille kevin spare ribs. Chuck shoulder bacon doner beef. Biltong alcatra beef
            ribs salami buffalo ribeye shank sirloin jowl.
          </p>
        </NxStatefulAccordion>
        <NxStatefulAccordion>
          <NxAccordion.Header>
            <div className="nx-accordion__header-title">Short Loin</div>
          </NxAccordion.Header>
          <p className="nx-p">
            Short loin bresaola turducken corned beef, chicken rump ground round cupim. Burgdoggen swine picanha tail
            rump. Meatball pastrami short loin, chicken tail beef ribs turkey doner ham fatback spare ribs pork loin
            pork belly jowl alcatra. Cow tenderloin pork doner sirloin spare ribs fatback corned beef salami. Short
            loin t-bone biltong, cupim hamburger kevin jerky beef ribs leberkas corned beef jowl brisket spare ribs
            capicola pork loin. Shoulder porchetta salami tri-tip burgdoggen, kevin shankle meatball. Ground round
            capicola beef ribs, cow venison kevin landjaeger strip steak.
          </p>
        </NxStatefulAccordion>
      </div>
    </section>
  );
}
