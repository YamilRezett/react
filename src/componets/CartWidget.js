//  import { useContext } from "react"
 import { NavLink } from "react-router-dom"
 import { useCarrito } from "./CartContext"

 const CartWidget = () => {

     const { cantidad } = useCarrito()

     return (
         <NavLink to="/cart">
             <span className="material-symbols-outlined">
                 shopping_cart
             </span>
             {cantidad}
         </NavLink>
     )
 }
 export default CartWidget