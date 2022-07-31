import { render } from "@testing-library/react";

const ItemListContainer = (props) => {
    console.log(props)
    return (
        <p>
           ¡Protegete tu patrimonio {props.name}! 
        </p>
    );
    
  }
    
export default ItemListContainer