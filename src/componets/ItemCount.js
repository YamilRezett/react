// import {useState ,useEffect } from "react"
// //useEstate: hook de estad
// //useEffect : hook de esectos ("simula los metodos del ciclo de vida de un componente")

//     const ItemCount = ({initial, stock, onAdd}) => {

//         const [count, setCount] = useState(initial)
//         const [titulo, setTitulo] = useState("Hola")

//         const increase = () => count < stock && setCount(count + 1)
//         const decrease = () => count > initial && setCount (count - 1)

//         useEffect(() => {
//             console.log("soy el efecto")
//         }, [titulo])
    
    
//     return (
//         <div> 
//         <button onClick={decrease}>-</button>
//         <button onClick={increase}>+</button>
//         <p id="parrafo">El contador va : {count}</p>
//         <button onClick={() => setTitulo("Chau")}>Agregar al carrito</button>                 
//        </div>       
//           )
// }

// export default ItemCount;

// // const ItemCount = ({initial, stock, onAdd}) => {
//     // const[titulo, setTitulo] = useState("cargando")
//     // const [contador, setContador] = useState(0)
//     // const [confirmed, setConfirmed] = useState(false)

//     // useEffect(() => {
//     //     setTitulo("cargando...")

//     //     setTimeout(() => {
//     //         setTitulo("Producto")
//     //     }, 3000)
//     // }, [confirmed])

//     // const sumar = () => {
//     //     setContador(contador + 1)
//     // }

//     // const restar = () => {
//     //     setContador(contador - 1)
//     // }

//     // const confirmar = () => {
//     //     setConfirmed(!confirmed)
//     // }
// //     return (
// //         <>
// //        <div>
// //             <h1>{titulo}</h1>
// //             <p id="parrafo">El contador va : {contador}</p>
// //             <button onClick={sumar}>Sumar</button>
// //             <button onClick={confirmar}>Confirmar</button>
// //             <button onClick={restar}>Restar</button>
// //        </div>
// //         </>
// //         )
// // }

// // export default ItemCount;
