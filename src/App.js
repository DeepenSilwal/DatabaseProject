import React from 'react';
import './App.css';
import Crimes from './Crime';
import { Jumbotron, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Law_Enforcement from './Law_Enforcement';

function App() {
  return (
    <div className="main">
      <Jumbotron id = "crimes-jumbo">
        <h1 align="center" id="crimes-title">Crimes in New York County</h1>
        <Crimes id ="crimes-chart"/>
      </Jumbotron >
      <Jumbotron id = "crimes-jumbo">
      <h1 align="center" id="crimes-title">Law Enforcement in New York County</h1>
        <Law_Enforcement/>
      </Jumbotron>
    </div>
  );
}

export default App;
