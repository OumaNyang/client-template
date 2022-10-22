import React, { useState } from 'react';
import {Card,Container,Button} from 'react-bootstrap';
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

function Login(){
    const [showLogin, setShowLogin] = useState(true);

  return(
    <Container style={{background:"#def5"}} className='mt-5'>
    <div className="row">
    <div className="col-md-6">

    <Card className="p-4">

    </Card>
</div>
<div className="col-md-6">
{ showLogin? (
              <>
                <LoginForm/>
                <br />
                <p>
                  Don't have an account? &nbsp;
                  <Button variant='dark' className='btn btn-md btn-dark btn-block ' onClick={() => setShowLogin(false)}>Sign Up</Button>
                </p>
              </>
          )
          : (
              <>
                <SignupForm />
                <br />
                <p>
                  Already have an account? &nbsp;
                  <Button variant='dark' className='btn btn-md btn-block  ' onClick={() => setShowLogin(true)}>Log In</Button>
                </p>
         
              </>
          )
        }
</div>
</div>
    
  </Container>

  );
}
export default Login;

