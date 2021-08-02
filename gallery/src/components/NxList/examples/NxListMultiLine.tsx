/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxList } from '@sonatype/react-shared-components';

function NxListMultiLine() {
  return (
    <NxList>
      <NxList.Item>
        <NxList.Text>Text wrapping - text that is very long and will wrap onto the next line, standard list
          item text that is very long and will wrap onto the next line
        </NxList.Text>
      </NxList.Item>
      <NxList.Item>
        <NxList.Text truncate>Text truncation - as you can see, this is a pretty long text, but is elegantly
          truncated so that the ellipses appear. If you are wondering what the ellipses mean, they are the
          tiny dots that are displayed at the end.
        </NxList.Text>
      </NxList.Item>
      <NxList.Item>
        <NxList.Text>Subtext wrapping</NxList.Text>
        <NxList.Subtext> A long line of subtext that wraps. as you can see, this is a pretty long text, and can be
          truncated, but let's keep this here for now.
        </NxList.Subtext>
      </NxList.Item>
      <NxList.Item>
        <NxList.Text>Subtext truncation</NxList.Text>
        <NxList.Subtext truncate>Truncation cause the text to truncate at the right edge of the list item.
          The ellipses are elegantly placed to display the truncation as well. For more information on how this works,
          please contact the RSC team.
        </NxList.Subtext>
      </NxList.Item>
    </NxList>
  );
}

export default NxListMultiLine;
