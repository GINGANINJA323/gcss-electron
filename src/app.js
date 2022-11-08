import React, { useEffect, useState } from 'react';
import GameSetup from './pages/game-setup';
import Home from './pages/home';
import Setup from './pages/setup';
import { init, loadSettingsFromFile } from './utils';

const App = () => {
  const [settings, setSettings] = useState({});
  const [page, setPage] = useState('home');

  const saveBaseSettings = () => {
    init(settings);
  }

  const hasSettings = Object.keys(settings).length;

  const loadSettings = async() => {
    const fileSettings = await loadSettingsFromFile();

    if (!fileSettings) {
      console.log('Settings empty, initiate setup.');
      setPage('setup');
      return;
    }

    const fileSettingsJson = JSON.parse(fileSettings);

    if (!Object.keys(fileSettingsJson).length) {
      console.log('Settings empty, initiate setup.');
      setPage('setup');
      return;
    }

    setSettings(fileSettingsJson);
  }

  const componentMap = {
    home: <Home hasSettings={hasSettings} />,
    setup: <Setup setSettings={setSettings} />,
    gameSetup: <GameSetup setSettings={setSettings} />
  }

  useEffect(() => {
    // Scan for user settings, if none, initiated setup pathway.
    loadSettings();
  }, []);

  useEffect(() => {
    // Save settings whenever they change.
    if (!hasSettings) {
      return;
    }

    saveBaseSettings();
  }, [settings])

  return (
    <>
      {
        hasSettings ? <></> : null
      }
      {
        componentMap[page]
      }
    </>
  );
}

export default App;