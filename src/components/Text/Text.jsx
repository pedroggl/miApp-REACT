import { useState } from "react"
import TextH2 from "../TextH2/TextH2";

export default function Text() {

  const [show, setShow] = useState(false);

  function handleShow() {
    //establece el valor de la variable show al estado de su contrario
    setShow(!show);
  }

  return (
    <div>
      <br /><button onClick={handleShow}>{show === true ? "Ocultar" : "Mostrar"}</button><br /><br />
      {/* <br /><button onClick={handleShow}>Mostrar / Ocultar</button><br /><br /> */}

      {/* si show es true muestra el contenido, sino no */}
      {/* {show === true && < div > Hola Mundo</div>} */}

      {/* si show es true muestra Hola Mundo, sino muestra Adios mundo */}
      {/* {show === true ? <div> Hola Mundo</div> : <div>Adios Mundo</div>} */}

      {/* Ahora lo que muestra y oculta el boton es un componente, por tanto
    lo que se dice que esta haciendo es montar y desmontar, es decir, desaparece
    del codigo html */}
      {show === true && <TextH2 />}
    </div >
  )
}
