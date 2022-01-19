import type { NextPage } from 'next'
import { NxButton, NxP }  from '@sonatype/react-shared-components/server';
import { useState } from 'react';
import ExampleComponent from '../components/ExampleComponent';
import NxStatefulCheckbox from '../components/stateful/NxStatefulCheckbox'

import imgPath from '@sonatype/react-shared-components/server/assets/img/sonatype-logo-with-hexagon.png';

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);

  return (
      <div className="nx-page">
      <NxButton onClick={() => setShowModal(true)}>
        Advanced Search Options
      </NxButton>

      <img src={imgPath.src} />

      {showModal && (
        <>
        <ExampleComponent />
        <NxStatefulCheckbox defaultChecked={false}/>
        </>
      )}
      </div>
  )
}

export default Home
