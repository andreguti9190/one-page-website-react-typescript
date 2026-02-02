import style from "./content.module.css";
import info from "../info.json";

interface ContentProps {
    tag: number;
}

function Content(props: ContentProps) {
    return (
        <>
            <div className={style.cover}>
                <div className={style.item}>
                    <img src={`./singer/${info[props.tag].name}.jpg`} alt={info[props.tag].name} className={style.img} />
                </div>
                <div className={`${style.item} ${style.bio}`}>
                    <h1 className={style.title} >{info[props.tag].name}</h1>
                    <p className={style.text} >{info[props.tag].content}</p>
                    <audio src={`./music/${info[props.tag].name}.mp3`} autoPlay
                    className={style.audio}
                    ></audio>
                    <b className={style.alert}
                    style={{display:(info[props.tag].name=='Home')?'flex':'none'}}
                    >¡¡¡ATENCION EL RESTO DE LA PAGINA TIENE MUSICA DE FONDO!!!</b>
                </div>
            </div>
        </>
    );
}

export default Content;
