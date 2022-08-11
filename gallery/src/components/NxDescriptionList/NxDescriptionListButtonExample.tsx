/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxDescriptionList} from '@sonatype/react-shared-components';

const NxDescriptionListNonInteractiveExample = () =>
  <NxDescriptionList>
    <NxDescriptionList.ButtonItem onClick={() => alert('You clicked the first row')}
                                  term="This is the NxDescriptionList.ButtonItem component"
                                  description="Clicking this row will give you an alert message." />
    <NxDescriptionList.ButtonItem onClick={() => alert('You clicked the second row')}
                                  selected
                                  term="Something else to be defined"
                                  description="
                                      A very interesting item. The first item. You might say it's the original. The
                                      item to begin all items. But not to end them; definitely not. Rest assured there
                                      will be more items after this one and they will definitely also have
                                      descriptions. Wait a minute.  This isn't the first item at all." />
    <NxDescriptionList.ButtonItem onClick={() => alert('You clicked the fancy row')}
                                  term={<>This is a <em>fancy</em> term</>}
                                  description={<>The term and description props can<br/>include JSX like this</>} />
    <NxDescriptionList.ButtonItem onClick={() => alert('You clicked the disabled row‽')}
                                  disabled
                                  term="Nope"
                                  description="This row is disabled. You can't click it." />
  </NxDescriptionList>;

export default NxDescriptionListNonInteractiveExample;
