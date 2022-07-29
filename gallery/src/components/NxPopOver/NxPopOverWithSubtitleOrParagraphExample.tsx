/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import { NxPopOver, NxButton, NxP } from '@sonatype/react-shared-components';

export default function NxPopOverWithSubtitleOrParagraphExample() {
  const [showPopOver, setShowPopOver] = useState(false);
  const [showPopOver2, setShowPopOver2] = useState(false);
  const [showPopOver3, setShowPopOver3] = useState(false);

  const paragraph = (
    <>
      Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </>
  );

  const content = (
    <NxPopOver.Content>
      <NxP>
        Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo{' '}
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum{' '}
        dolore eu fugiat nulla pariatur.
      </NxP>
      <NxP>
        Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo{' '}
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum{' '}
        dolore eu fugiat nulla pariatur.
      </NxP>
      <NxP>
        Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo{' '}
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum{' '}
        dolore eu fugiat nulla pariatur.
      </NxP>
      <NxP>
        Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo{' '}
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum{' '}
        dolore eu fugiat nulla pariatur.
      </NxP>
      <NxP>
        Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo{' '}
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum{' '}
        dolore eu fugiat nulla pariatur.
      </NxP>
      <NxButton>Click</NxButton>
    </NxPopOver.Content>
  );

  return (
    <div className="gallery-pop-over-with-subtitle-or-paragraph-example">
      <NxButton onClick={() => setShowPopOver2(true)}>Open Pop Over with Subtitle</NxButton>
      <NxButton onClick={() => setShowPopOver(true)}>Open Pop Over with Paragraph </NxButton>
      <NxButton onClick={() => setShowPopOver3(true)}>Open Pop Over with Both</NxButton>

      {showPopOver && (
        <NxPopOver onCancel={() => setShowPopOver(false)}
                   headerTitle="Example Pop Over Duis aute irure dolor in reprehenderit in voluptate velit esse{' '}
        cillum dolore eu fugiat nulla pariatur."
                   headerParagraph={paragraph}>
          {content}
        </NxPopOver>
      )}

      {showPopOver2 && (
        <NxPopOver onCancel={() => setShowPopOver2(false)}
                   headerTitle="Example Pop Over Duis aute irure dolor in reprehenderit in voluptate velit esse{' '}
        cillum dolore eu fugiat nulla pariatur."
                   headerSubtitle="Header Subtitle">
          {content}
        </NxPopOver>
      )}

      {showPopOver3 && (
        <NxPopOver onCancel={() => setShowPopOver3(false)}
                   headerTitle="Example Pop Over Duis aute irure dolor in reprehenderit in voluptate velit esse{' '}
        cillum dolore eu fugiat nulla pariatur."
                   headerSubtitle="Header Subtitle"
                   headerParagraph={paragraph}>
          {content}
        </NxPopOver>
      )}
    </div>
  );
}
