import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main";
import CartContext from "./CartContext";

const App = () => {

    return (
        <BrowserRouter>
            <CartContext titulo="hola">
                <Header />
                <Main />
                <Footer />
            </CartContext>
        </BrowserRouter>
    )
}

export default App;