/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { NxP, NxDivider } from '@sonatype/react-shared-components';
import React from 'react';

export default function NxDividerVerticalExample() {
  return (
    <>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <NxP>This is the first item</NxP>
        <NxDivider vertical />
        <NxP>This is the second item</NxP>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <NxP>This is the first item</NxP>
        <NxDivider vertical />
        <NxP>This is the second item</NxP>
        <NxDivider vertical />
        <NxP>This is the third item</NxP>
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <NxP>Brief Description</NxP>
        <NxDivider vertical style={{margin: '0 24px'}}/>
        <NxP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum felis risus, sit amet porttitor
          orci dapibus convallis. Cras euismod ligula nec sem hendrerit finibus. Phasellus sit amet lacus enim. Cras
          fringilla sed leo id gravida. Nulla ornare lobortis quam. Sed eu magna quis velit blandit hendrerit. Sed
          porttitor faucibus. Nam tempus elementum nisl non ornare. Nam a elit efficitur, lacinia urna quis, blandit .
          Integer hendrerit erat a ipsum mollis, porta aliquet mauris tempus. Vivamus vitae neque auctor, iaculis ,
          ullamcorper tellus. Duis aliquam neque neque, ut iaculis leo eleifend id.

          Maecenas in nulla quis lorem dictum laoreet ut id dolor. Mauris ut nulla turpis. Nunc sit amet
          accumsan est. Sed malesuada sed nisl in pellentesque. Vestibulum non tincidunt metus, ac condimentum
          facilisi. Nam eu purus sagittis, semper ligula at, tempus enim. Vivamus at nibh id orci tempus tincidunt.
          nunc id imperdiet ornare, leo purus facilisis ipsum, a ullamcorper velit tortor ac turpis. Morbi aliquam
        </NxP>
      </div>
    </>
  );
}
