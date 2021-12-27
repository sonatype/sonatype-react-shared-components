import type { NextPage } from 'next'
import { NxButton}  from '@sonatype/react-shared-components/dist/server';
import { useState } from 'react';
import ExampleComponent from '../components/ExampleComponent';
import NxStatefulCheckbox from '../components/stateful/NxStatefulCheckbox'

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);

  return (
      <div className="nx-page">
      <NxButton onClick={() => setShowModal(true)}>
        Advanced Search Options
      </NxButton>

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
