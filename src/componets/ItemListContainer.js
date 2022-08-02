import { render } from "@testing-library/react";
import ItemCount from "./ItemCount";
import { Button } from "bootstrap"
import {useState} from "react"


const ItemListContainer = (props) => {
    console.log(props)
    return (
      <>
      <p>
           ¡Protegete tu patrimonio {props.name}! 
      </p>

      <div>
         <ItemCount/>
      </div>
      </>
        
    );
    
  }
    
export default ItemListContainer