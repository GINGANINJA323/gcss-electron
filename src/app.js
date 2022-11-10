import React, { useEffect, useState } from 'react';
import TabView from './components/tab-view';
import GameSetup from './pages/game-setup';
import GameTable from './pages/game-table';
import Home from './pages/home';
import Setup from './pages/setup';
import { saveSettings, loadSettingsFromFile } from './utils';

const App = () => {
  const [settings, setSettings] = useState({});
  const [page, setPage] = useState('home');

  const saveBaseSettings = () => {
    saveSettings(settings);
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
    setup: <Setup setSettings={setSettings} setPage={setPage} />,
    gameTable: <GameTable setPage={setPage} games={[]} />, // Need to fetch the games from git or use the settings...
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
  }, [settings]);

  return (
    <>
      {
        hasSettings ? <TabView tab={page} tabs={Object.keys(componentMap)} changeTab={setPage} /> : null
      }
      {
        componentMap[page]
      }
    </>
  );
}

export default App;