import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'; 
import { Image } from 'react-bootstrap';
import myImage from './ycflogo.png';
import Contact from './Contact'

function Home() {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container fluid>
      <div className="mb-0">
            <Image src={myImage} alt="ycflogo" fluid style={{height:'120px',width:'120px'}}/>
            </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', marginLeft:'66.5%' }}
            navbarScroll
          >
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Home">Blog</Nav.Link>
            
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Aeromodelling</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                UAV Engineering
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Aerial Cinematography
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Drone Piloting
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Agricultural
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#action2">Contact Us</Nav.Link> */}
            <Contact/>
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
          </Nav>
        
            <Link to='/Login'>
            <Button variant="outline-danger" className='m-3'>Logout</Button>
            </Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;