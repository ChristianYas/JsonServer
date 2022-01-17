import './CardUser.css'
import home from '../images/casa.png'
import amigos from '../images/amigos.png'
import colegio from '../images/colegio.png'
import programmer from '../images/programmer.png'
import creatividad from '../images/creatividad.png'
import deporte from '../images/estocadas.png'
import remove from '../images/remover.png'
import Reques from '../Helper/Reques'
import Swal from 'sweetalert2'

const CardUser = ({el}) =>{
    let {type,title,text,fecha,id} = el,
        img, color

    switch (type) {
        case 'school':
            img = colegio
            color = 'tomato'
            break;
        case 'social':
            img = amigos
            color = 'skyblue'
            break;
        case 'work':
            img = programmer
            color = '#dd2f2f'
            break;
        case 'home':
            img = home
            color = 'green'
            break;
        case 'creatividad':
            img = creatividad
            color = '#c471ed'
            break;
        case 'deporte':
            img = deporte
            color = '#000'
            break;
        default:
            break;
    }

    const handlerRemove = (e) =>{
       Swal.fire({
           title: 'Espera',
           text: 'Estas seguro de querer borrar esta tarea?, una vez borrada no habra manera de recuperarla',
           icon: 'warning',
           showCancelButton: true,
           preConfirm: (confirm)=>{
               Reques({method:'DELETE'},undefined,undefined,id)
               window.location.reload()
           }

       })
    }


    return(
        <>
        <div className="cardUser">
            <div className='title-card' style={{background:color}}>
                <h2>{type}</h2>
                <img  src={img} alt=''/>
            </div>

          <div className='about-work'>
          <h3>{title}</h3>
            <p>{text}</p>
            <small>{fecha}</small>
          </div>
          <span className='remove'><img onClick={handlerRemove} id={id} src={remove} alt=''/></span>
        </div></>
    )
}

export default CardUser