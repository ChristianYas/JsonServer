import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Reques from '../Helper/Reques'
import header from '../images/bg-pattern-card.svg'
import know from '../images/link.png'
import './Card.css'

const Card = ({data}) =>{
    const [tareas, setTareas] = useState(0)

    let {name,img,country,age,ocupation,id} = data

    useEffect(()=>{
        let contador = 0
        Reques(undefined,undefined,'tareas',undefined)
        .then(res => res.json())
        .then(data => {
            data.forEach((tarea,index) => {
                if(tarea['name'] === name){
                    contador++
                }

                if(index === data.length -1){
                    setTareas(contador)
                }
            })
        })
    })

    const handlerClick = (e) =>{
       Reques(undefined,e.target.id)
       .then(res => res.json())
       .then(data => {
           let {password,id} = data

           Swal.fire({
               title: 'Password',
               inputAttributes: {
                autocomplete: 'off'
               },
               input: 'password',
               inputLabel: 'Write your password',
               showCancelButton: true,
               inputValidator: (value) =>{
                   if(!value){
                       return 'You need write your password'
                   }

                   if(value === password){
                       window.location.pathname = `/user/${name}`
                   }
                   else{
                       Swal.fire({
                           title: 'Upsi',
                           text: 'La contrasena no es correcta',
                           icon: 'error',
                           confirmButtonText: 'ok'
                       })
                   }
               }
           })
       })
    }

    return(
        <div className="container-card">
            <span className='link'><img onClick={handlerClick} id={id} src={know} alt=''/></span>
            <img src={header} alt="" className='header'/>
            <div className='container-img'><img src={img} alt="" className='person'/></div>

            <div className="card-text">
                <div className="about-user">
                    <p>{name}</p>
                    <small>{country}</small>
                </div>

                <div className="data-user">
                    <ol>
                        <li>
                            <p>Age</p>
                            <small>{age}</small>
                        </li>
                        <li>
                            <p>Tareas</p>
                            <small>{tareas}</small>
                        </li>
                        <li>
                            <p>Ocupation</p>
                            <small>{ocupation}</small>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Card