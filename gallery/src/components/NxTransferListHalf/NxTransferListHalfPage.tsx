/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState} from 'react';

import { NxScrollRender } from '@sonatype/react-shared-components';

const ListComponent = (props: any) => {
  const initialItems: string[] = [];
  if (props.a != undefined && props.a != null) {
    initialItems.push(props.a);
  }
  const [items, setItems] = useState<string[]>(initialItems);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1> lenght: {items.length}</h1>
      <button onClick={addItem}>Add Item</button>
      
      <NxScrollRender>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      </NxScrollRender>
      
    </div>
  );
};

const NxTransferListPage = () =>
  <>
  <ListComponent></ListComponent>
  </>;

export default NxTransferListPage;
