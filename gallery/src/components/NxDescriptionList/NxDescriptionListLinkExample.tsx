/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxDescriptionList } from '@sonatype/react-shared-components';

const NxDescriptionListLinkExample = () =>
  <NxDescriptionList>
    <NxDescriptionList.LinkItem href="#/"
                                term="This is the NxDescriptionList.LinkItem component"
                                description="Clicking this row will go somewhere." />
    <NxDescriptionList.LinkItem href="#/"
                                selected
                                term="Something else to be defined"
                                description="
                                    A very interesting item. The first item. You might say it's the original. The
                                    item to begin all items. But not to end them; definitely not. Rest assured there
                                    will be more items after this one and they will definitely also have
                                    descriptions. Wait a minute.  This isn't the first item at all." />
    <NxDescriptionList.LinkItem href="#/"
                                term={<>This is a <em>fancy</em> term</>}
                                description={<>The term and description props can<br/>include JSX like this</>} />
    <NxDescriptionList.LinkItem href="#/"
                                disabled
                                term="Nope"
                                description="This row is disabled. You can't click it." />
  </NxDescriptionList>;

export default NxDescriptionListLinkExample;
