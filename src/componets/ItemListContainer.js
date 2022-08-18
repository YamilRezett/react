import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import CustomLoader from "./CustomLoader"
import ItemList from "./ItemList"
// import Page from "./Page"

const productosIniciales = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 100
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 200
    }
]

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    // const { id } = useParams()

    useEffect(() => {

        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales)
            }, 3000)
        })

        pedido.then((resultado) => {
            setProductos(resultado)
            setLoading(false)
        })

        pedido.catch((error) => {
            console.log("Termino el pedido mal")
        })

    }, [])


    if (loading) {
        return (
            <p>Cargando...</p>
            // <CustomLoader />
        )
    } else {
        return (
            <ItemList productos={productos} />
            // <Page titulo="Catalogo" subtitulo="Todos los productos en un solo lugar">
            //     <ItemList productos={productos} />
            // </Page>
        )
    }

}
export default ItemListContainer

// import { useState, useEffect } from "react";
// import { productosIniciales } from "../productosIniciales";
// import ItemList from "./ItemList";

// // import { logDOM } from "@testing-library/react";

// // const pedido = fetch('https://fakestoreapi.com/products')
           
// // .then(res=>res.json())
           
// // .then(json=>console.log(json))

// const ItemListContainer = () => {
    
//    const [productos, setProductos] = useState([])
//    // const [loading, setLoading] = useState(true)

//    useEffect(() => {
//       console.log("arranca el pedido")

//       const pedido = new Promise((res, rej)=>{
//          setTimeout(()=>{
//             res(productosIniciales)
//          },2000)
//       })
   
//     pedido.then((resultado)=> {
//        console.log("termino el pedido")
//        console.log({resultado})
//        setProductos(resultado)
//     })

//     pedido.catch((error)=> {
//        console.log("Termino el pedido mal")
//     })

//     pedido.finally(()=>{
//        console.log("termino el pedido")
//     })

//    })

//    if(productos.length === 0){
//       return (
//          <p>Cargando...</p>
//       )
//    }else{
//       return ( 

//          <ItemList productos={productos}/>
//       )
    
//    } 
// }
// export default ItemListContainer