import { NxButton, NxH1, NxH2 } from '@sonatype/react-shared-components/server';
import React, { useCallback, useState } from 'react';

const ExampleComponent = () => {

  const [isClicked, setIsClicked] = useExampleState();

  const renderIsClicked = () => {
    return (
      <>
      <div>
        <NxH1>Stuff</NxH1>
        <p></p>
        <NxH2>{isClicked.toString()}</NxH2>
        <NxButton onClick={setIsClicked}>Click Me</NxButton>
      </div>
      </>
    );
  }

  return (
    renderIsClicked() 
  );
}

export default ExampleComponent;
