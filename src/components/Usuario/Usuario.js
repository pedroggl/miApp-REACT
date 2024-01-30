export const Usuario = (props) => {
    //otra opcion de recibir parametros con la desestruturacion directamente
    //sera: ( {nombre, edad, nacionalidad} )
    // console.log(props);
    // console.log(props.nombre);

    // desestructurar el objeto que recibe props en variables para cada elemento
    const { nombre, edad, nacionalidad } = props;

    return (
        <div>
            {/* <h1>Nombre: Pedro</h1>
        <p>Edad: 22</p>
        <p>Nacionalidad: España</p> */}

            {/* <h1> Nombre: {props.nombre}</h1>
        <p>Edad: {props.edad}</p>
        <p> Nacionalidad: {props.nacionalidad}</p> */}

            <h1> Nombre: {nombre}</h1>
            <p>Edad: {edad}</p>
            <p> Nacionalidad: {nacionalidad}</p>
            <hr />
        </div>
    )
}
// export default Usuario;