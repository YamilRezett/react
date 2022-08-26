import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CustomLoader from "./CustomLoader"
import ItemList from "./ItemList"
import Page from "./Page"
import ProductosIniciales from "../assets/ProductosIniciales"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    // const { id } = useParams()

    useEffect(() => {

        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(ProductosIniciales)
            }, 2000)
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
             <CustomLoader />
        )
    } else {
        return (
             <Page titulo="Catalogo" subtitulo="Zapatillas Urbanas">
                 <ItemList productos={productos} />
             </Page>
        )
    }

}
export default ItemListContainer

