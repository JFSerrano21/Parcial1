import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {
  const [formValues, setFormValues] = useState({email:"", password:""})
  const [validationStates, setValidationStates] = useState({emailState: true, passwordState: true});


  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value});
    
    const isValidEmail = e.target.value.includes('@'); // This is a very basic check
    setValidationStates({...validationStates, emailState: isValidEmail});
  });
  
  const handlePasswordChange = ((e) => {
    setFormValues({...formValues, password: e.target.value});
    
    const isValidPassword = e.target.value.length >= 9; // At least 9 characters
    setValidationStates({...validationStates, passwordState: isValidPassword});
  });
  
  const clickSubmit = (() => {
    alert(JSON.stringify(formValues))
  })
 return (
   <div>
     <h1>Formulario</h1>
    
     <Form>
     <Form.Group className="mb-6" controlId="formBasicEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email}/>
       { !validationStates.emailState && <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>}
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} />
       { !validationStates.passwordState && <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>}
     </Form.Group>
     <Button variant="primary"onClick={clickSubmit}>
       Submit
     </Button>
   </Form>
   </div>
 );
}

export default App;