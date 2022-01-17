import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Reques from "../Helper/Reques";
import CardUser from "./CardUser";
import Nav from "./Nav";
import './ContainerUser.css'

const ContainerUser = ({setContexto}) => {
  const [data, setData] = useState("");
  let { name } = useParams();

  useEffect(()=>{
    setContexto(name)
    let array = []
    Reques(undefined, undefined, true)
    .then((res) => res.json())
    .then(data => {
      data.forEach((tarea,index) =>{
        if(tarea['name'] === name){
          array.push(tarea)
        }

        if(data.length - 1 === index){
          setData(array)
        }
      })
    })
  },[])

  return (
   <>
   <span className="nav-c">
        <Nav text="tarea" user={'user'} id={name}/>
      </span>
     <div className="container-home">
      {
        data.length>0 ? data.map(el => <CardUser key={el['title']} el={el}/>) : <h1 className="message">no hay datos por mostrar</h1>
      }
    </div>
   </>
  );
};

export default ContainerUser;
