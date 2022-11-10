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
      <p>{'The GCSS allows you to store saves in a Git repo, through this easy to use front-end.'}</p>
      <p>{'Use the tabs above to edit your settings, connected games and synchronise your saves.'}</p>
    </>
  );
}

export default Home;