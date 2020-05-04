import React, { useState, useEffect } from 'react';
import './global.css';
import Header from './components/header';
import TopCardList from './components/topCardList';
import Overview from './components/overview';
import Switch from './components/switch'
import Footer from './components/footer';

function App() {
  //Variables
  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  const setOwnDarkMode = (value) =>{
    setDarkMode(value);
  }
  const setOwnChecked = (value) =>{
    setChecked(value);
  }
 
  useEffect(() => {
    function changeMedia(mq) {
      setOwnDarkMode(mq.matches)
      setOwnChecked(mq.matches)
    }
  
    //Obtener Valor Item
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setOwnDarkMode(mq.matches)
    setOwnChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])

  //Cambiar Media

  return (
    <main className={mainClass}>
      <Header>
        <Switch
          setDarkMode={setOwnDarkMode}
          checked={checked}
          setChecked={setOwnChecked}
        />
      </Header>
      <TopCardList />
      <Overview />
      <Footer />
    </main>
  )
}

export default App;
