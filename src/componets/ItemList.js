import Item from "./Item";

const ItemList = ({ListProductos}) => {


    return( 

        <>

         {ListProductos.map(product => <Item key={product.id} product={product} />)}
         
        </>
    )
}

export default ItemList;