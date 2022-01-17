//ESTE PROYECTO TIENE REACT ROUTER DOM

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContainerUser from './Components/ContainerUser';
import ContainerUsers from './Components/ContainerUsers';
import Formulario from './Components/Formulario';
import FormularioTarea from './Components/FormularioTarea';
import Home from './Components/Home';

function App() {
  const [contexto, setContexto] = useState('')
   
  const top = 'https://raw.githubusercontent.com/GitHub-dev12345/Profile-card-component/43b64b027750c2e41f94a42c4301f40af0b3a130/images/bg-pattern-top.svg'
  const bottom = 'https://raw.githubusercontent.com/GitHub-dev12345/Profile-card-component/43b64b027750c2e41f94a42c4301f40af0b3a130/images/bg-pattern-bottom.svg'
  
  return (
    <div className="App">
      <span className='top'><img src={top} alt=''/></span>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/usuarios' element={<ContainerUsers />}/>
        <Route path='/form' element={<Formulario/>}/>
        <Route path='/user/:name' element={<ContainerUser setContexto={setContexto}/>}/>
        <Route path='/form-homework' element={<FormularioTarea contexto={contexto}/>}/>
      </Routes>
      <span className='bottom'><img src={bottom} alt=''/></span>
    </div>
  );
}

export default App;
