import { NavLink } from "react-router-dom"
import './Nav.css'

const Nav = ({text,user,id}) =>{
    return(
       <header>
            <nav>
            <ol>
                <NavLink to={'/'}>Home</NavLink>
                {
                    user === 'user'
                    ? <>
                        <NavLink to={`/user/${id}`}>Usuario</NavLink> 
                        <NavLink to={'/usuarios'}>Usuarios</NavLink>
                      </>
                    : <NavLink to={'/usuarios'}>Usuarios</NavLink>
                }
                {
                    text === 'cuenta' 
                    ? <NavLink to={'/form'}>Crear Cuenta</NavLink>
                    : <NavLink to={'/form-homework'}>Crear Tarea</NavLink>
                }
            </ol>
        </nav>
       </header>
    )
}

export default Nav