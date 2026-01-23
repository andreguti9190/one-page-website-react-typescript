import { useState } from 'react'
import './Nav.css'

function App() {
  return (
    <>
      <nav className='nav'>
        <div className='nav-item'>
          <h1>Rock Nacional</h1>
        </div>
        <div className='nav-item'>
          <ul className='nav-item-list'>
            <li>Home</li>
            <li>Gustavo Cerati</li>
            <li>Charly Garcia</li>
            <li>Andres Calamaro</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default App;
