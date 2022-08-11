import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img
              alt="Logo YR"
              src="/android-icon-72x72.png"
              width="56.5"
              height="56.5"
              className="fixed-top align-center"
            />{' '} */}
            Seguros YR
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;