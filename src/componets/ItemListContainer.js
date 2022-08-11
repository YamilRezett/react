import { useState, useEffect } from "react";
import { productosIniciales } from "../productosIniciales";
import ItemList from "./ItemList";

// import { logDOM } from "@testing-library/react";


const ItemListContainer = () => {
    
   const [productos, setProductos] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      console.log("arranca el pedido")

      const pedido = new Promise((res, rej)=>{
         setTimeout(()=>{
            res(productosIniciales)
         },2000)
      })
   
    pedido.then((resultado)=> {
       console.log("termino el pedido")
       console.log({resultado})
       setProductos(resultado)
    })

    pedido.catch((error)=> {
       console.log("Termino el pedido mal")
    })

    pedido.finally(()=>{
       console.log("termino el pedido")
    })

   })

   if(productos.length === 0){
      return (
         <p>Cargando...</p>
      )
   }else{
      return ( 

         <ItemList productos={productos}/>
      )
    
   } 
}
export default ItemListContainer