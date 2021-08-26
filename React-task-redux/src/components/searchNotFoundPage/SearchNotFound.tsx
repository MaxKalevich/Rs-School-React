import React from 'react';

const SearchNotFound: React.FC = (): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '500px',
      }}
    >
      <h1>Sorry, your search did not return any results.</h1>
    </div>
  );
};

export default SearchNotFound;
