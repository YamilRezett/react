import { Button } from "bootstrap"
import {useState} from "react"

const ItemCount =() => {
    const [contador, setContador] = useState(0)

    const aumentarContador = () => {
        console.log("aumentarContador")
        
        if(contador<5){
            setContador(contador + 1)
        }
    }

    const disminuirContador = () => {
        setContador(contador - 1)
    }

    const resetearContador = () => {
        setContador(0)
    }

    return (
        <>
       <div>
            <button onClick={aumentarContador}>click</button>
            <button onClick={resetearContador}>click</button>
            <button onClick={disminuirContador}>click</button>
       </div>
       
        </>
        
     )

}

export default ItemCount;
