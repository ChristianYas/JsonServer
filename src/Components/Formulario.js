import form from '../images/form.jpg'
import Nav from './Nav'
import './Formulario.css'
import Reques from '../Helper/Reques';
import Swal from 'sweetalert2';

const Formulario = () => {

    const handlerSubmit = (e) =>{
        e.preventDefault()
        let validation = 0
        let array = []
        let data
        for(let i=0; i< e.target.length -1; i++){
            if(e['target'][i]['value'] === ''){
                validation++
            }

            array.push([e['target'][i]['name'],e['target'][i]['value']])
        }

        data = Object.fromEntries(array)

        if(validation === 0){
            Reques({
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
    
            Swal.fire({
                title:'Listo!',
                text: 'Ya se ha generado un nuevo usuario',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
            })
    
           setTimeout(() => {
            window.location.pathname = '/usuarios'
           }, 2500);
           
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
   <Nav text='cuenta'/>
     <div className="container-form">
      <div className="form-img">
          <img src={form} alt=""/>
      </div>
      <form onSubmit={handlerSubmit}>
        <input type="text" placeholder="nombre" name="name" autoComplete='off'/>
        <input type="text" placeholder="edad" name="age" autoComplete='off'/>
        <input type="text" placeholder="pais" name="country"  autoComplete='off'/>
        <input type="text" placeholder="foto" name="img"  autoComplete='off'/>
        <input type="text" placeholder="ocupacion" name="ocupation"  autoComplete='off'/>
        <input type="password" placeholder="password" name="password"  autoComplete='off'/>
        <input type='submit' placeholder='Enviar' name='submit' className='buton' autoComplete='off'/>
      </form>
    </div>
   </>
  );
};

export default Formulario;
