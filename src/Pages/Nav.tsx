import { useState } from 'react';
import './Nav.css';


function App() {
  const [page, setPage] = useState(0);
  return (
    <>
      <nav className='nav'>
        <div className='nav-item'>
          <h1>Rock Nacional</h1>
        </div>
        <div className='nav-item'>
          <ul className='nav-item-list'>
            <li onClick={ ()=>{ setPage(0) } }>Home</li>
            <li onClick={ ()=>{ setPage(1) } }>Gustavo Cerati</li>
            <li onClick={ ()=>{ setPage(2) } }>Charly Garcia</li>
            <li onClick={ ()=>{ setPage(3) } }>Andres Calamaro</li>
          </ul>
        </div>
      </nav>
      <h1>{ page }</h1>
    </>
  )
}

export default App;
