import { Link , NavLink } from "react-router-dom";

const BrandExample = ({ type }) => {
  if (type === "header") {
    return (

       <nav>
        <NavLink to="/categoria/electronics">electronics</NavLink>
        <NavLink to="/categoria/jewelery">jewelery</NavLink>
        <NavLink to="/cart">
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </NavLink>
      </nav>
     
     
    )
  } else {
    return (
      
      <nav>
        <Link to="#">link-footer</Link>
        <Link to="#">link-footer</Link>
        <Link to="#">link-footer</Link>
      </nav>
     
      
    )
  }

}

export default BrandExample;


// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';

// function BrandExample() {
//   return (
//     <>
//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">
//             {/* <img
//               alt="Logo YR"
//               src="/android-icon-72x72.png"
//               width="56.5"
//               height="56.5"
//               className="fixed-top align-center"
//             />{' '} */}
//             Seguros YR
//           </Navbar.Brand>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default BrandExample;