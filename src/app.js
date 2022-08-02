import Nav from "./componets/nav";
import ItemListContainer from "./componets/ItemListContainer";
import {useState} from "react"

function App(){
    return (
       <>
       <Nav/>
      <div>
        <ItemListContainer/>        
      </div>
      
      
       </>
       
    )
}

export default App;