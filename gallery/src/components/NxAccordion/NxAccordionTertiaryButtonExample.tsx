/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxAccordion, NxButton } from '@sonatype/react-shared-components';

export default function NxAccordionExample() {
  const [open, setOpen] = useState(false);

  return (
    <NxAccordion open={open} onToggle={setOpen}>
      <NxAccordion.Header>
        <h3 className="nx-accordion__header-title">Foo Bar</h3>
        <div className="nx-btn-bar">
          <NxButton variant="tertiary">Click Here!</NxButton>
        </div>
      </NxAccordion.Header>
      <div className="nx-accordion__subheader">
        Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz
        Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz
        Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz
        Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz
      </div>
      <p className="nx-p">
        Bacon ipsum dolor amet pastrami bacon picanha ball tip bresaola, turkey tri-tip pork chop shoulder beef
        ribs cupim porchetta swine. T-bone brisket frankfurter flank. T-bone chicken prosciutto ribeye kielbasa
        short ribs porchetta alcatra spare ribs kevin sirloin meatball sausage. Corned beef beef ribs sausage spare
        ribs kielbasa picanha andouille doner beef. Tenderloin drumstick kielbasa leberkas burgdoggen tongue
        chicken sausage chuck alcatra.
      </p>
    </NxAccordion>
  );
}
