import style from "./navbar.module.css";
interface contetnProps {
    onButton: (e: number) => void,
    menu:String[]
}

function Navbar(props: contetnProps) {
    return (<>
        <ul className={style.list}>
            {
                props.menu.map((e, index) => {
                    return(<li onClick={() => { props.onButton(index) }}
                        className={style.listElement}>
                        <a href="#" className={style.a} >{e}</a>
                    </li>)
                })
            }
        </ul>
    </>)
}

export default Navbar;