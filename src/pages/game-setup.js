import React, { useState } from 'react';

const GameSetup = ({ setSettings }) => {
  const [name, setName] = useState();
  const [path, setPath] = useState();
  const [backupPath, setBackupPath] = useState();
  
  const buildAndSaveSettings = () => {
    
  }

  return (
    <>
      <h1>{'GCSS Game Setup'}</h1>
      <h2>{"Enter details about the game below, and we'll add it to your settings."}</h2>

      <div>
        <div>
          <p>{'Game name:'}</p>
          <input onChange={(e) => setName(e.target.value)} value={name}></input>
        </div>
        <div>
          <p>{'Save file directory path:'}</p>
          <input onChange={(e) => setPath(e.target.value)} value={path}></input>
        </div>
        <div>
          <p>{'Backup directory path:'}</p>
          <input onChange={(e) => setBackupPath(e.target.value)} value={backupPath}></input>
        </div>
      </div>

      <button onClick={buildAndSaveSettings}>{'Save settings and continue'}</button>
    </>
  );
}

export default GameSetup;