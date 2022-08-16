import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { productosIniciales } from "../productosIniciales";
import { customFetch } from "../customFetch";


const ItemDetailContainer = () => {
    
    const [listProduc, setListProduct] = useState({})
    const [loading, setLoading] = useState(true)
 
    useEffect(() =>{
        setLoading(true)
        customFetch(productosIniciales[0])
           .then(res => {
            setLoading(false) 
            setListProduct(res.find(item => item.id==id))
           })

    }, [id])
    return(
        <>
           <ItemDetail/>
        </>
        
    )
}

 export default ItemDetailContainer;