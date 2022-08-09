import ItemCount from "./ItemCount";
import { customFetch } from "../customFetch";
import { useState, useEffect } from "react";
import { productos } from "../productos";
import ItemList from "./ItemList";


const ItemListContainer = (props) => {
    console.log(props)
    

   const [listProductos, setListProductos] = useState([])

   useEffect(() => {
    customFetch(productos)
       .then(data => setListProductos(data))
   }, [])

   console.log(productos);

    return (
      <>
      <p>
           ¡Protegete tu patrimonio {props.name}! 
      </p>

      <div>
         <ItemCount/>
      </div>
      
      <div>
         
         <ItemList/>

      </div>
      
      </>
        
    );
    
  }
    
export default ItemListContainer;