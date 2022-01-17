import form from '../images/student.jpg'
import Nav from './Nav'
import './FormularioTarea.css'
import Reques from '../Helper/Reques';
import Swal from 'sweetalert2';

const FormularioTarea = ({contexto}) => {

    const handlerSubmit = (e) =>{
        e.preventDefault()
        let validation = 0
        let array = []
        let data = {
            name: contexto,
            type: ''
        }
        for(let i=0; i<e.target.length -1; i++){
            if(e['target'][i]['value'] === ''){
                validation++
            }

            if(i !== 3 ){
                array.push([e['target'][i]['name'],e['target'][i]['value']])
            }

            if(i === 3){
                data.type = e['target'][i]['value']
            }

        }

        array = Object.fromEntries(array)
        data = Object.assign(data,array)
        
      if(validation === 0){
        Reques({
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        },undefined,'tarea')

        Swal.fire({
            title: 'Listo',
            text: 'Se ha generado una nueva tarea',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
        })

        setTimeout(() => {
            window.location.pathname = `/user/${contexto}`
        }, 3000);
    
      }
      else{
        Swal.fire({
            title: 'Se te olvido algun dato',
            text: 'Necesitamos que llenes todos los campos',
            icon: 'error'
        })
      }
    }
    
  return (
   <>
   <Nav text='cuenta' user={'user'} id={contexto}/>
     <div className="container-form">
      <div className="form-img">
          <img src={form} alt=""/>
      </div>
      <form onSubmit={handlerSubmit}>
        <input type="text" placeholder="titulo de la tarea" name="title" autoComplete='off'/>
        <input name='fecha' type='date'/>    
        <textarea placeholder='Escriba la tarea en cuestion' name='text' cols='85' rows='10'></textarea>
        <select>
            <option value='home'>Home</option>
            <option value='school'>School</option>
            <option value='work'>Work</option>
            <option value='social'>Social</option>
            <option value='creatividad'>Recreativo</option>
            <option value='deporte'>Deporte</option>
        </select>
        <input type='submit' placeholder='Enviar' className='buton' autoComplete='off'/>
      </form>
    </div>
   </>
  );
};

export default FormularioTarea;
