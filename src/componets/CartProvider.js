// import { createContext, useState } from "react";


// export const CartContext = createContext()

// const{Provider} = CartContext

// const MyProvider = ({children}) => {
//     const [cart, setCart] = useState([])

//     const isInCart = (id) => {
//         return cart.some(x => x.id === id)
//     }

//     const addItem = () => {

//     }

//     const emptyCart = () => {
//         return setCart([])
//     }

//     const deleteItem = (id) => {
//         return setCart(cart.filter(x => x.id !== id))
//     }
    
//     const getItemQty = () => {
//         return cart.reduce((acc, x) => acc += x.qty, 0)
//     }

//     const getItemPrice = () => {
//         return cart.reduce((acc ,x) => acc += x.qty * x.price, 0)
//     }

//     return <Provider value={{cart, isInCart, emptyCart, deleteItem, getItemQty, getItemPrice}}>{children}</Provider>
// }

// export default MyProvider