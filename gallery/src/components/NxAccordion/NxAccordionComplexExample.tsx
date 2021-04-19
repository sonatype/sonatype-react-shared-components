/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faEdit, faCog } from '@fortawesome/free-solid-svg-icons';

import { NxAccordion, NxFontAwesomeIcon, NxButton, useToggle } from '@sonatype/react-shared-components';

export default function NxAccordionExample() {
  const [open, toggleOpen] = useToggle(false);

  return (
    <NxAccordion open={open} onToggle={toggleOpen}>
      <NxAccordion.Header>
        <h2 className="nx-accordion__header-title" onClick={() => { alert('Title click'); }}>
          Foo lots of content to demonstrate that this element does not wrap but rather overflows with
          ellipsis truncation.
        </h2>
        <div className="nx-btn-bar">
          <NxButton title="Edit" variant="icon-only" onClick={() => { alert('Edit click'); }}>
            <NxFontAwesomeIcon icon={faEdit} />
          </NxButton>
          <NxButton title="Settings" variant="icon-only" onClick={() => { alert('Settings click'); }}>
            <NxFontAwesomeIcon icon={faCog} />
          </NxButton>
        </div>
      </NxAccordion.Header>
      <p className="nx-p">
        Bacon ipsum dolor amet chicken ball tip t-bone, alcatra pastrami cupim kielbasa swine shank bacon shankle
        landjaeger porchetta. Beef ribs kielbasa chuck buffalo. Flank brisket tri-tip capicola, biltong tongue chuck
        pancetta pastrami burgdoggen. Pancetta jowl short ribs ground round.
      </p>
      <h3 className="nx-h3">
        This is an example of a subheader within a tile. It does not truncate but rather wraps.
        Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz Foo Bar Baz
      </h3>
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
