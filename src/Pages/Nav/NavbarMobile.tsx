
import style from "./navbarMobile.module.css";

interface contentProps {
    onButton: (e: number) => void,
    onNavbar: (e: boolean) => void,
    navbar: boolean,
    menu: String[]
}

function NavbarMobile(props: contentProps) {
    return (<>
        <i className={`fa solid fa-bars ${style.menu}`}
            onClick={() => props.navbar ? props.onNavbar(false) : props.onNavbar(true)}>
        </i>
        <ul className={style.list}
            style={{ transform: props.navbar ? 'translateX(0)' : 'translateX(100vw)' }}>
            <li onClick={() => { props.onNavbar(false) }}
                className={style.li}>
                <i className={`fa-solid fa-x ${style.x}`}></i>
            </li>
            {props.menu.map((e, index) => {
                return (
                    <li onClick={() => { props.onButton(index);props.onNavbar(false) }}
                        className={style.li}>
                        <a href="#" className={style.a} >{e}</a>
                    </li>)
            })
            }
        </ul>
    </>)
}

export default NavbarMobile;