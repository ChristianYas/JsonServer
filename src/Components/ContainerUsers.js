import Card from "./Card"
import Reques from '../Helper/Reques'
import { useEffect, useState } from "react"
import './ContainerUsers.css'
import Nav from "./Nav"

const ContainerUsers = ({setIsLoggin,isLoggin}) =>{
    const [data, setData] = useState('')

   useEffect(()=>{
    Reques().then(res => res.json())
    .then(data => setData(data))
   },[])

    return(
        <article className="article-cards">  
         <div className="nav"><Nav text='cuenta'/></div>  
            {
                data.length > 0 ? 
                
                data.map(person => <Card key={person['id']} isLoggin={isLoggin} setIsLoggin={setIsLoggin} data={person}/>)

                : null
            }
        </article>
    )
}

export default ContainerUsers