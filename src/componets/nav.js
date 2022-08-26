import { Link , NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"


const Nav = ({ type }) => {
  if (type == "header") {
    return (
      <nav>
        <NavLink to="/categoria/airmax">AirMax</NavLink>
        <NavLink to="/categoria/airforce">AirForce</NavLink>
        <CartWidget/> 
      </nav>
    )
  } else {
    return (
      <nav>
        <Link to="#">Nosotros</Link>
        <Link to="#">Origen</Link>
       </nav>
    )
  }
 
}

export default Nav