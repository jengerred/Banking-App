import {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardHeader, CardText } from "reactstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';




export default function CreateAccount(){
const navigate = useNavigate();
const location = useLocation();


const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [type, setType] = useState('');


let { from } = location.state || { from : {pathname : '/alert'}};

const createAccount = (e) => {
e.preventDefault();
navigate(from)
}

console.log(username, email, password, type);


const user = {
    name : username,
   email : email,
    password : password,
    type : type
}



function clearForm(){
    setUsername('');
    setEmail('');
    setPassword('');
    setType('');
  }


console.log(user)
window.localStorage.setItem('user', JSON.stringify(user))

const checking = document.getElementById("checking");
const savings = document.getElementById("savings");

function disableCheck() {
  if(savings.checked){
  checking.disabled = true;
  }
  else{
    checking.disabled = false;
}
}

function disableSave() {
if(checking.checked){
savings.disabled = true;
}
else{
  savings.disabled = false;
}
}


    return (
        <Card className="center-card" style={{ width: "95vw" }}>
      
           <CardHeader style={{ backgroundColor: "#0275d8" }}><h1 className="w-white-text">Create Account</h1></CardHeader>
                <CardBody style={{ textAlign: "center" }}>
                    <Container >
                        <form onSubmit={createAccount}>

            <Row>   
                <Col>
                    <CardText>
                        <label className="top">Name:
                         <input className="name" placeholder='username'  value={username} onChange={(e) => setUsername(e.target.value)}></input>
                         </label>
                    </CardText>
                </Col>
                   
                <Col>
                     <CardSubtitle>
                        <label className="top">Email: 
                        <input className="name" placeholder='email' type='email'  value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <CardText className="width">We'll never share your email with anyone else.</CardText>
                        </label> 
                    </CardSubtitle>
                </Col>

                <Col>
                    <CardSubtitle>
                        <label className="top">Password: 
                        <input className="name" placeholder='password' type='password'  value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <CardText className="width">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</CardText>
                        </label>
                    </CardSubtitle>
                </Col>
            </Row>
              
            <Row>
                <Col>
                    <CardSubtitle>
                        <CardText className="top" tag="h5">Please Choose the type of account you would like to create:</CardText>
                    </CardSubtitle>
                </Col>
            </Row>
            <Row className="check" style={{ margin: "auto" }}>
                <Col>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="checking" value="Checking Account" onClick={disableSave} onChange={e => setType(e.target.value)}/>
                        <label className="form-check-label">
                        Checking
                        </label>
                    </div>
                 </Col>
                 <Col>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Savings Account" id="savings" onClick={disableCheck} onChange={e => setType(e.target.value)} />
                        <label className="form-check-label">
                        Savings
                        </label>
                    </div>
                 <br/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <button className="btn btn-primary" >Create Account</button>
                </Col>
           </Row>

            </form>

                </Container>
            </CardBody>      
        </Card>
        
    )

}
  
