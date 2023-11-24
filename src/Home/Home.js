import React from 'react';
import Navigationbar from './Navigationbar';
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Aeromodelling from './Courses Folder/Aeromodelling';
import UAV from './Courses Folder/UAV';
import DronePiloting from './Courses Folder/DronePiloting';
import AerialCinematography from './Courses Folder/AerialCinematography';
import DisasterManagement from './Courses Folder/DisasterManagement';
import Agricultural from './Courses Folder/Agricultural'
import { Col, Row } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Navigationbar/>
      <div  className='container'>
      <Form className="d-flex mt-5 mb-5" style={{width:'50%', marginLeft:'25%'}}>
            <Form.Control
              type="search"
              placeholder="Search for courses"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      <Container>
        <p style={{fontSize:'180%'}}>Courses we offer!</p>
          <Row className='mt-5'>
        <Col className='mb-4 '><Aeromodelling/></Col>
        <Col className='mb-4 '><UAV/></Col>
        <Col className='mb-4 '><AerialCinematography/></Col>
        <Col className='mb-4 '><DisasterManagement/></Col>
        <Col className='mb-4 '><DronePiloting/></Col>
        <Col className='mb-4 '><Agricultural/></Col>
      </Row>
      </Container>
      </div>
    </div>
  );
}

export default Home;
