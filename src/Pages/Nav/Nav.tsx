import Navbar from "./Navbar.tsx";
import NavbarMobile from "./NavbarMobile.tsx";
import { useState } from 'react';
import style from "./nav.module.css";

interface ContentProps {
  onButton: (e: number) => void;
}

function Nav(props: ContentProps) {
  const menu = ["Home", "Gustavo Cerati", "Charly Garcia", "Andres Calamaro"]
  const [navbar, onNavbar] = useState(false);

  return (
    <>
      <nav className={style.nav}>
        <div className={style.navItem}>
          <h1>Rock Nacional</h1>
        </div>
        <div className={style.navItem}>
          <Navbar
            menu={menu}
            onButton={props.onButton} />
          <NavbarMobile
            menu={menu}
            onButton={props.onButton}
            onNavbar={onNavbar}
            navbar={navbar} />
        </div>
      </nav>
    </>
  )
}

export default Nav;
