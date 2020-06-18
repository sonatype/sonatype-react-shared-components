/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxLoadError } from '@sonatype/react-shared-components';

function NxLoadErrorRetryLongMessageExample() {
  const [error, setError] = useState<string | null>(`Bacon ipsum dolor amet pastrami meatball boudin swine
      andouille capicola kevin fatback ground round pork chop cow pork kielbasa. Biltong salami sausage
      burgdoggen shoulder tail. Salami kielbasa burgdoggen tongue pork loin. Brisket rump fatback beef ribs
      spare ribs, picanha cow boudin sausage hamburger andouille. Spare ribs shankle bresaola shank short loin
      rump pork meatball, tail boudin chuck. Kevin venison tri-tip short ribs chicken doner porchetta, boudin
      cow kielbasa.`);

  function retryHandler() {
    // lets say the retried action succeeded this time
    setError(null);
  }

  return <NxLoadError { ...({ error, retryHandler }) } />;
}

export default NxLoadErrorRetryLongMessageExample;
