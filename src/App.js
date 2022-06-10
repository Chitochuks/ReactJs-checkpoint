import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import chito from './chito.JPG'


function App() {
  return (
    <Container className='d-grid h-100'>
      <Form id="sign-in-form" className='text-center w-100'>
        <img
          className='mb-3 bootstrap-logo'
          src={chito}
          alt="chitos_hairven logo"
          />
        <h1 className='"mb-3 fs-3 fw-normal'>Please Sign in</h1>
        <Form.Group controlId='sign-in-email-adress'>
          <Form.Control type="email" size='lg' placeholder="email address" autoComplete="username" className='position-relative'/>
        </Form.Group>
        <Form.Group className='mb-3' controlId="sign-in-password">
          <Form.Control type="password" size='lg' placeholder="password" autoComplete="current-password" />
        </Form.Group>
        <Form.Group className='d-flex justify-content-center mb-4'>
          <Form.Check  controlId="remember-me" label="Remember me" />
        </Form.Group >
        <div className='d-grid'>
        <Button variant="primary" size='lg'>Sign in</Button>
        </div>
        <p className='mt-5'> &copy; chito, 2022 </p>
        
      </Form>
    </Container>
  );
}

export default App;
