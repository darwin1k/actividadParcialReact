
import { useState } from 'react'
import Card from './Card'

const Form = () => {

    // const [user, setUser] = useState({
    //     nombre:"",
    //     respuesta:"",
    // });
    const [nombre, setNombre] = useState("")
    const [respuesta, setRespuesta] = useState("")

    const [esValido, SetesValido] = useState(false)
    const [error, setError] = useState(false)
   

    const handleSubmit = (event) => {
        event.preventDefault();

        if(nombre.startsWith(" ") || nombre.trim().length <3){
            setError(true);
            SetesValido(false);
            return;
        }
        if (respuesta.length < 6) {
            setError(true);
            SetesValido(false);
            return;
        }
        setError("");
            SetesValido(true);
    };

    return (

        <div className="form-container">
            <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input value={nombre} type="text" onChange={(e)=> setNombre(e.target.value)}/>
            <label>¿Qué libro recomendarias y por qué ?</label>
            <input value={respuesta} type="text" onChange={(e)=> setRespuesta(e.target.value)}/>
            <button >Enviar</button>
            </form>
            {error && (<h4 className='error' style={{color:'red'}}>Por favor chequea que la información sea correcta</h4>)}
            
            {esValido && <Card nombre={nombre} respuesta={respuesta} />} 
        </div>
    )
}

export default Form


