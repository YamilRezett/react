import producto from "../productosIniciales";

const Item = ({ producto }) => {
    return(
       <article>
        <h2>{producto.nombre}</h2>
        <p>Precio : ${producto.precio}</p>
        
       </article>
    )
}

export default Item;