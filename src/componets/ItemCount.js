import { Button } from "bootstrap"
import {useState ,useEffect } from "react"
//useEstate: hook de estad
//useEffect : hook de esectos ("simula los metodos del ciclo de vida de un componente")

const ItemCount =({onAdd, stock, initial}) => {
    const[titulo, setTitulo] = useState("cargando")
    const [contador, setContador] = useState(0)
    const [confirmed, setConfirmed] = useState(false)

    useEffect(() => {
        setTitulo("cargando...")

        setTimeout(() => {
            setTitulo("Producto")
        }, 3000)
    }, [confirmed])

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    const confirmar = () => {
        setConfirmed(!confirmed)
    }
    
    
    return (
        <>
       <div>
        <h1>{titulo}</h1>
        <p id="parrafo">El contador va : {contador}</p>
            <button onClick={sumar}>Sumar</button>
            <button onClick={confirmar}>Confirmar</button>
            <button onClick={restar}>Restar</button>
       </div>
       
        </>
        
        )


}

export default ItemCount;
