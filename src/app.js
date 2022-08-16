import Nav from "./componets/nav";
import ItemListContainer from "./componets/ItemListContainer";
import ItemDetailContainer from "./componets/ItemListContainer";
import { BrowserRouter } from "react-router-dom";

function App(){
    return (
       <>
       <BrowserRouter>
       
       <Nav/>
      <div>
        <ItemListContainer/>        
      </div>
      <div>
         {/* <ItemDetailContainer/> */}
      </div>
      </BrowserRouter>
       </>
              
    )
}

export default App;