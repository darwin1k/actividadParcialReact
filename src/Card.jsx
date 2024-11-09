


const Card = ({nombre, respuesta}) => {
    return (
        <div className="card">
            <h3>Hola {nombre}</h3>
            <h3>Sabemos que tu recomendación de libro es: {respuesta}</h3>
            </div>
    )
};

export default Card;