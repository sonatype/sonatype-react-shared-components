/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxPolicyViolationIndicator } from '@sonatype/react-shared-components';

export default function NxTilePolicyViolationIndicatorExample() {
  return (
    <section className="nx-tile">
      <header className="nx-tile-header">
        <div className="nx-tile-header__title">
          <h2 className="nx-h2">
            Policy Violation Indicator
          </h2>
        </div>
        <div className="nx-tile__tags">
          <NxPolicyViolationIndicator threatLevelCategory="moderate"/>
        </div>
      </header>
      <div className="nx-tile-content">
        <p className="nx-p">
          Bacon ipsum dolor amet tenderloin kevin jerky corned beef, kielbasa cow strip steak. Venison alcatra
          bacon t-bone shank pork chop drumstick. Ribeye kielbasa flank frankfurter. Fatback brisket ham
          turducken. Hamburger pork belly t-bone short loin beef ribs cupim fatback spare ribs shankle chicken.
          Landjaeger bresaola buffalo, chuck ground round pork chop cow biltong pork rump jerky tenderloin
          drumstick. Spare ribs shank buffalo corned beef swine, jowl turducken flank pastrami bacon shoulder
          t-bone cupim landjaeger.
        </p>
      </div>
    </section>
  );
}
