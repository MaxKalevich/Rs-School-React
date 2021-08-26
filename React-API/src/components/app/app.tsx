import React, { useState } from 'react';
import Dashboard from '../dashboard/dashboard';
import Spinner from '../spinner/spinner';

const App = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <>
      <Dashboard setIsLoading={setIsLoading} />
      {isLoading ? <Spinner /> : false}
    </>
  );
};

export default App;
