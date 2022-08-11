import Nav from "./componets/nav";
import ItemListContainer from "./componets/ItemListContainer";
import {useState} from "react"
import ItemDetailContainer from "./componets/ItemListContainer";

function App(){
    return (
       <>
       <Nav/>
      <div>
        <ItemListContainer/>        
      </div>
      <div>
         <ItemDetailContainer/>
      </div>
       </>
       
    )
}

export default App;