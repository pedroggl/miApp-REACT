import { useState, useEffect } from "react";

export default function TextH2() {

    const [text, setText] = useState("");

    const handleText = (e) => {
        // muestra todo el contenido del evento que recibe "e"
        // console.log(e);
        setText(e.target.value);
    }

    // cada vez que se actualiza se escribe en el console.log
    // useEffect(() => {
    //     console.log("componente montado");
    // });

    //de esta manera solo aparecera el console.log cuando se monte,
    //y no cuando se actualice.
    //Mediante el return se consigue que muestre el log al desmontarse
    // useEffect(() => {
    //     //cuando se monta
    //     console.log("componente montado");
    //     //cuando se desmonta
    //     return () => {
    //         console.log("componente desmontado")
    //     };
    // }, [text]); //si intrduzco la variabel text dentro del array, cuando
    //se modifique ele valor de text tambien aparecera el console.log
    //de componente montado

    // se escribe cuando se monta o se desmonta solo
    // useEffect(
    //     () => {
    //         console.log("Componente montado");
    //         return () => {
    //             console.log("Componente desmontado");
    //         }
    //     }, []);

    // se escribe cuando se monta y cuando se modifica el texto
    useEffect(
        () => {
            console.log("Texto cambiado");
        }, [text]);

    return (
        <>
            <input type="text" name="entrada" id="entrada" onChange={handleText} />
            <h2>{text}</h2>
        </>
    )
}
