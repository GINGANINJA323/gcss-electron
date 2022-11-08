import React from 'react';

const Home = ({ hasSettings, setPage }) => {
  return (
    <>
      <h1>{'Welcome to the Git Cloud Save System (GCSS)!'}</h1>
      {
        !hasSettings ?
          <>
            <p>{"It looks like you haven't run this program before. You'll need to complete first time setup "}<p onClick={() => setPage('setup')}>{'here.'}</p></p>
          </> : null
      }
    </>
  );
}

export default Home;