function Reques(options,type,tareas,id){

    let endpoint = 'https://6f84-2806-2f0-6000-2d68-600e-b285-dd59-e90e.ngrok.io/data'

    if(!options) options = {method: 'GET'}

    if(type) endpoint = `${endpoint}/${type}`

    if(tareas) endpoint = 'https://6f84-2806-2f0-6000-2d68-600e-b285-dd59-e90e.ngrok.io/homeworks'

    if(id) endpoint = `https://6f84-2806-2f0-6000-2d68-600e-b285-dd59-e90e.ngrok.io/homeworks/${id}`

    return fetch(endpoint,options)
    .then(res => res.ok ? res : Promise.reject(res))
    .then(data => data)
    .catch(err => err)
}

export default Reques