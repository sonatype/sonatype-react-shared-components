import type { NextPage } from 'next'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { NxButton, NxModal, NxP, NxPageHeader, NxPageMain }  from '@sonatype/react-shared-components/server';
import { useState } from 'react';

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);

  return (
    <div className="nx-page">
      <NxPageHeader />
      <NxPageMain>
        <NxButton onClick={() => setShowModal(true)}>
          Advanced Search Options
        </NxButton>

        {showModal && (
          <NxModal onCancel={() => setShowModal(false)}>foo</NxModal>
        )}
      </NxPageMain>
    </div>
  )
}

export default Home
