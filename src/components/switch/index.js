import React, { useRef } from 'react'
import './switch.css'

function Switch({ setDarkMode, checked, setChecked }) {

  //Enlazar una referencia hacia un element html, current obtiene el elemento HTML
  const ref = useRef(null)
  
  function handleChange() {
    const mainClass = (ref.current.checked) ? 'is-dark-mode' : 'is-light-mode'
    localStorage.setItem('socialTheme', JSON.stringify(mainClass));
    setChecked(ref.current.checked)
    setDarkMode(ref.current.checked)
  }

  return (
    <div className="dark-mode" >
      <p className="dark-mode-title">Modo Oscuro</p>
      <input ref={ref} onChange={handleChange} type="checkbox" checked={checked} className="checkbox" id="checkbox" />
      <label className="switch" htmlFor="checkbox">
      </label>
    </div>
  )
}

export default Switch