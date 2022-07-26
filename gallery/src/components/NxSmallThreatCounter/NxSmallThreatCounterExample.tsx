/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxSmallThreatCounter, NxTable } from '@sonatype/react-shared-components';

export default function NxSmallThreatCounterExample() {
  return (
    <NxTable>
      <NxTable.Head>
        <NxTable.Row>
          <NxTable.Cell>Component</NxTable.Cell>
          <NxTable.Cell>Threats</NxTable.Cell>
        </NxTable.Row>
      </NxTable.Head>
      <NxTable.Body>
        <NxTable.Row>
          <NxTable.Cell>Foo</NxTable.Cell>
          <NxTable.Cell>
            <NxSmallThreatCounter criticalCount={27}
                                  severeCount={5}
                                  moderateCount={1337}
                                  lowCount={323}
                                  noneCount={12}
                                  unspecifiedCount={45} />
          </NxTable.Cell>
        </NxTable.Row>
        <NxTable.Row>
          <NxTable.Cell>Bar</NxTable.Cell>
          <NxTable.Cell>
            <NxSmallThreatCounter criticalCount={999}
                                  severeCount={0}
                                  moderateCount={2}
                                  lowCount={0}
                                  noneCount={1}
                                  unspecifiedCount={0} />
          </NxTable.Cell>
        </NxTable.Row>
        <NxTable.Row>
          <NxTable.Cell>Baz</NxTable.Cell>
          <NxTable.Cell>
            <NxSmallThreatCounter criticalCount={0}
                                  severeCount={0}
                                  moderateCount={0}
                                  lowCount={0}
                                  noneCount={0}
                                  unspecifiedCount={0} />
          </NxTable.Cell>
        </NxTable.Row>
        <NxTable.Row>
          <NxTable.Cell>Qwerty</NxTable.Cell>
          <NxTable.Cell>
            <NxSmallThreatCounter criticalCount={0}
                                  severeCount={0}
                                  moderateCount={0}
                                  lowCount={0}
                                  noneCount={8}
                                  unspecifiedCount={0} />
          </NxTable.Cell>
        </NxTable.Row>
        <NxTable.Row>
          <NxTable.Cell>qJuery</NxTable.Cell>
          <NxTable.Cell>
            <NxSmallThreatCounter criticalCount={1000}
                                  severeCount={0}
                                  moderateCount={0}
                                  lowCount={0}
                                  noneCount={0}
                                  unspecifiedCount={0} />
          </NxTable.Cell>
        </NxTable.Row>
        <NxTable.Row>
          <NxTable.Cell>Shipper</NxTable.Cell>
          <NxTable.Cell>
            <NxSmallThreatCounter criticalCount={0}
                                  severeCount={0}
                                  moderateCount={0}
                                  lowCount={0}
                                  noneCount={0}
                                  unspecifiedCount={16} />
          </NxTable.Cell>
        </NxTable.Row>
        <NxTable.Row>
          <NxTable.Cell>Bean</NxTable.Cell>
          <NxTable.Cell>
            <NxSmallThreatCounter criticalCount={0}
                                  severeCount={0}
                                  moderateCount={0}
                                  lowCount={0}
                                  noneCount={0}
                                  unspecifiedCount={0} />
          </NxTable.Cell>
        </NxTable.Row>
        <NxTable.Row>
          <NxTable.Cell>Respond</NxTable.Cell>
          <NxTable.Cell>
            <NxSmallThreatCounter criticalCount={1000}
                                  severeCount={1000}
                                  moderateCount={1000}
                                  lowCount={1000}
                                  noneCount={1000}
                                  unspecifiedCount={1000} />
          </NxTable.Cell>
        </NxTable.Row>
        <NxTable.Row>
          <NxTable.Cell>E4</NxTable.Cell>
          <NxTable.Cell>
            <NxSmallThreatCounter criticalCount={1}
                                  severeCount={1}
                                  moderateCount={1}
                                  lowCount={1}
                                  noneCount={1}
                                  unspecifiedCount={1} />
          </NxTable.Cell>
        </NxTable.Row>
        <NxTable.Row>
          <NxTable.Cell>Bromine</NxTable.Cell>
          <NxTable.Cell>
            <NxSmallThreatCounter criticalCount={0}
                                  severeCount={0}
                                  moderateCount={0}
                                  lowCount={0}
                                  noneCount={0}
                                  unspecifiedCount={0} />
          </NxTable.Cell>
        </NxTable.Row>
        <NxTable.Row>
          <NxTable.Cell>SpiderBox</NxTable.Cell>
          <NxTable.Cell>
            <NxSmallThreatCounter criticalCount={0}
                                  severeCount={1000}
                                  moderateCount={0}
                                  lowCount={999}
                                  noneCount={888}
                                  unspecifiedCount={0} />
          </NxTable.Cell>
        </NxTable.Row>
      </NxTable.Body>
    </NxTable>
  );
}
