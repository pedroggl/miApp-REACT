import { useState } from "react";

export default function Counter() {


    // const [variable, funcion] = useState();
    const [number, setNumber] = useState(0);
    // const [inputTextIngresado, setInputTextIngresado] = useState();

    const sumar = () => {
        setNumber(number + 1);
    }

    const restar = () => {
        setNumber(number - 1);
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={sumar}>Sumar</button>&nbsp;
            <button onClick={restar}>Restar</button>
            <hr />
        </div>
    )
}
