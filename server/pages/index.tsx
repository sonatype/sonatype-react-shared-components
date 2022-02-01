import type { NextPage } from 'next'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import './crypto-polyfill';
import { NxButton, NxModal, NxP, NxPageHeader, NxPageMain, useUniqueId }  from '@sonatype/react-shared-components';
import { useState } from 'react';

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);
  const id = useUniqueId('foo');

  return (
    <div className="nx-page" id={id}>
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
