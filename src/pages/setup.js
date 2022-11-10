import React, { useState } from 'react';

const Setup = ({ setSettings, setPage }) => {
  const [owner, setOwner] = useState();
  const [auth, setAuth] = useState();
  const [repo, setRepo] = useState();
  
  const buildAndSaveSettings = () => {
    setSettings({
      repo,
      owner,
      auth
    });
    setPage('home')
  }

  return (
    <>
      <h1>{'GCSS Setup'}</h1>
      <h2>{'We need some information in order to setup the GCSS. Please fill out the form below:'}</h2>

      <div>
        <div>
          <p>{'Github account username:'}</p>
          <input onChange={(e) => setOwner(e.target.value)} value={owner}></input>
        </div>
        <div>
          <p>{'Github personal access token:'}</p>
          <input onChange={(e) => setAuth(e.target.value)} value={auth}></input>
        </div>
        <div>
          <p>{'Github repository name:'}</p>
          <input onChange={(e) => setRepo(e.target.value)} value={repo}></input>
        </div>
      </div>

      <button onClick={buildAndSaveSettings}>{'Save settings and continue'}</button>
    </>
  );
}

export default Setup;