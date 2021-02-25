/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {NxModal, NxFontAwesomeIcon, NxButton} from '@sonatype/react-shared-components';
import {faAngry} from '@fortawesome/free-solid-svg-icons';

export default function NxModalSimpleExample() {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);

  return (
    <>
      <NxButton onClick={() => setShowModal(true)}>Open Modal</NxButton>
      { showModal &&
        <NxModal id="nx-modal-simple-example" onClose={modalCloseHandler}>
          <header className="nx-modal-header">
            <h2 className="nx-h2">
              <NxFontAwesomeIcon icon={faAngry} />
              <span>Example NxModal header</span>
            </h2>
          </header>
          <div className="nx-modal-content">
            <p className="nx-p">
              Bacon ipsum dolor amet tri-tip pork belly pork chop, prosciutto cupim short ribs strip steak frankfurter
              sausage shank alcatra corned beef. Buffalo prosciutto leberkas swine bacon turducken kevin, biltong pork
              chop ham andouille. Landjaeger swine strip steak, cow andouille jerky fatback pork loin short loin. Beef
              ribs t-bone chislic filet mignon chuck porchetta bresaola pork loin. Strip steak rump pancetta, salami
              sausage chicken short ribs tenderloin ham pork belly t-bone sirloin pastrami ground round kielbasa. Cupim
              alcatra landjaeger shank, venison turkey capicola short ribs spare ribs meatloaf. Chislic strip steak
              jowl, ball tip prosciutto salami ham ground round pig pork chop cupim shoulder.
            </p>
            <p className="nx-p">
              Short ribs pancetta tri-tip bacon shoulder jowl bresaola biltong picanha chislic beef ribs jerky
              turducken. Pork chop swine pork belly, meatloaf jerky tail sirloin meatball. Capicola short loin shoulder
              strip steak, tail beef ribs tongue prosciutto turducken tri-tip leberkas. Tenderloin leberkas doner flank
              ball tip tongue drumstick short loin shankle pork.
            </p>
            <p className="nx-p">
              Jowl frankfurter buffalo chuck chicken, pastrami shankle drumstick bresaola picanha strip steak. Sausage
              ball tip buffalo capicola ham shoulder. Beef short loin salami strip steak shankle jowl short ribs rump
              venison. Turkey jerky ham drumstick flank doner boudin sirloin cow tri-tip andouille. Beef ribs burgdoggen
              strip steak shank buffalo turkey corned beef.
            </p>
            <p className="nx-p">
              Shankle boudin filet mignon alcatra jerky. Buffalo prosciutto boudin biltong ball tip, leberkas burgdoggen
              meatloaf pig turducken. Landjaeger turducken pig fatback. Ribeye boudin tongue pork chop short loin pork
              belly buffalo flank tri-tip pancetta fatback shoulder short ribs spare ribs. Brisket chuck buffalo,
              landjaeger pancetta cow jowl rump shankle strip steak turducken burgdoggen spare ribs pork belly
              frankfurter.
            </p>
            <p className="nx-p">
              Doner ham hock cupim, buffalo chicken pig sirloin tri-tip. T-bone sirloin swine capicola ham. Kielbasa
              leberkas doner cupim venison. Ground round pancetta tri-tip prosciutto t-bone brisket, buffalo leberkas
              frankfurter jerky flank chislic corned beef. Swine cow t-bone meatball. Sausage salami turducken bresaola
              brisket kielbasa ham hock. Landjaeger boudin bresaola biltong, ham hock brisket turducken kielbasa
              meatloaf capicola porchetta hamburger shank jerky ribeye.
            </p>
          </div>
          <footer className="nx-footer">
            <div className="nx-btn-bar">
              <NxButton onClick={modalCloseHandler}>Close</NxButton>
            </div>
          </footer>
        </NxModal>
      }
    </>
  );
}
