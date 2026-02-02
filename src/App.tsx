import { useState } from 'react';
import Nav from './Pages/Nav/Nav.tsx';
import Content from './Pages/Content/Content.tsx';
import style from './background.module.css'

function App() {
  const [page, setPage] = useState(0);
  return (
    <>
      <div className={style.background}>
        <div className={style.filter}>
          <Nav onButton={(e) => { setPage(e) }} />
          <Content tag={page} />
        </div>
      </div>
    </>
  )
}

export default App;
