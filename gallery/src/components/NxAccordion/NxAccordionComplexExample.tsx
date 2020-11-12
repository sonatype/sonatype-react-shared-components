/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { faEdit, faCog } from '@fortawesome/free-solid-svg-icons';

import { NxAccordion, NxFontAwesomeIcon, NxButton } from '@sonatype/react-shared-components';

export default function NxAccordionExample() {
  const [open, setOpen] = useState(false);

  return (
    <NxAccordion open={open} onToggle={setOpen}>
      <NxAccordion.Header>
        <h3 className="nx-h3" onClick={() => { alert('Title click'); }}>
          Foo lots of content to demonstrate that this element does not wrap but rather overflows with
          ellipsis truncation.
        </h3>
        <div className="nx-btn-bar">
          <NxButton variant="icon-only" onClick={() => { alert('Edit click'); }}>
            <NxFontAwesomeIcon icon={faEdit} />
          </NxButton>
          <NxButton variant="icon-only" onClick={() => { alert('Settings click'); }}>
            <NxFontAwesomeIcon icon={faCog} />
          </NxButton>
        </div>
      </NxAccordion.Header>
      <div className="nx-accordion__subheader">
        Foo Bar Baz this subheader does not truncate it wraps;
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
