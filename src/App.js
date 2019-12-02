import React from 'react';
import './App.css';
import Crimes from './Crime';
import { Jumbotron, Button, Container, Row, Navbar, Brand } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Law_Enforcement from './Law_Enforcement';
import Final from './Final'

function App() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home" >
       Data Visualization
      </Navbar.Brand>
    </Navbar>
    <Container>
        <Row id ="Row">
          <Jumbotron id ="Jumbo">
            <h1 align="center" id="crimes-title">Crimes in New York County</h1>
            <Crimes id/>
          </Jumbotron >
        </Row>
        <Row id ="Row">
        <Jumbotron>
        <h1 align="center" id="crimes-title">Law Enforcement in New York County</h1>
          <Law_Enforcement/>
        </Jumbotron>
        </Row>
        <Row id ="Row">
        <Jumbotron>
        <h1 align="center" id="crimes-title">Crimes VS Law Enforcement</h1>
          <Final/>
        </Jumbotron>
        </Row>

      </Container>
    </>
  );
}

export default App;
