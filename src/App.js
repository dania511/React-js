import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Form, Col, Button, Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    
     <h1>Formulaire De Préinscription à  <img src="https://gomycodewebsite.blob.core.windows.net/website/img/black_Logo_342868e838_129748d4cd.svg" alt="logo" className="top-bar__logo website-pointer undefined"></img></h1> 
     <div className="App1">
     <img src="https://gomytech.gomycode.co/content/images/2020/09/cover--27-.jpg" />
     <div className="classeForm">
     <Form >
  <Form.Row>
    <div className="flex-container">
    <div> 
      <Col className="demi">
      <Form.Label>First name</Form.Label>
      <Form.Control placeholder="First name" />
    </Col></div>
    <div>
      <Col className="demi">
    <Form.Label>Last name</Form.Label>
      <Form.Control placeholder="Last name" />
    </Col></div>
    </div>
   <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

  </Form.Row>
  <Form.Label>Age</Form.Label>
      <Form.Control placeholder="your age" />
  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control placeholder="+xxx xx xxx xxx" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>Tunisie</option>
        <option>Egypte</option>
        <option>Algérie</option>
        <option>Maroc</option>
        <option>Bahreïn</option>
        <option>Nigeria</option>
        <option>Côte d'Ivoire</option>
        <option>Sénégal</option>
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Select a Training</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>FullStack web developer</option>
        <option>UX/UI Designer</option>
        <option>Digital Marketer</option>
        <option>Data Scientist</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>

</Form> 
<Button variant="primary" type="submit">
    Submit
  </Button>
  
</div>    
</div>

</div>

  );
}

export default App;
