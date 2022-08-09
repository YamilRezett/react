
const Item = ({ product }) => {
    return(
        <>
        <div>{product.product}</div>
        <img src={product.image} />
        </>
        
    )
}

export default Item;