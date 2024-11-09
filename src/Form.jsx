
import { useState } from 'react'
import Card from './Card'

const Form = () => {

    const [user, setUser] = useState({
        nombre:"",
        respuesta:"",
    });

    const [esValido, SetesValido] = useState(false)
    const [error, setError] = useState(false)
   

    const handleSubmit = (event) => {
        event.preventDefault();

        if(user.nombre.trim().length >=3 && user.respuesta.length >=6){
            SetesValido(true);
            setError(false);
        }
        else
        setError(true);
        
    }
    return (

        <div>
            <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input value={user.nombre} type="text" onChange={(e)=> setUser({...user, nombre:e.target.value})}/>
            <label>¿Qué libro recomendarias y por qué ?</label>
            <input value={user.respuesta} type="text" onChange={(e)=> setUser({...user, respuesta:e.target.value})}/>
            <button >Enviar</button>

            {error ? (<h4 style={{color:'red'}}>Por favor chequea que la información sea correcta</h4>):null}
            </form>
            {esValido? <Card nombre={user.nombre} respuesta={user.respuesta} /> : null} 
        </div>
    )
}

export default Form


