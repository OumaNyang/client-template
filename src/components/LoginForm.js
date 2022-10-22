import React from "react";
import {Card,Form,Button,} from 'react-bootstrap';

function LoginForm(){
  return(

    <Card style={{background:"#4554"}} className="p-4">
    <Form method="post">
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" required placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" required placeholder="Password" />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" required placeholder="Password" />
    </Form.Group>

    <Button variant="primary"  className="btn btn-block" type="submit">
LOGIN    </Button>
  </Form>
  </Card>
  );
}
export default LoginForm;