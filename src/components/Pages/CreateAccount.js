import {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

import React from 'react';


function CreateAccount(){
const navigate = useNavigate();
const location = useLocation();

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

let { from } = location.state || { from : {pathname : '/login'}};

const createAccount = (e) => {
e.preventDefault();
console.log(username, email, password)
const user = {
    name: username,
    email: email,
    password: password
}

function clearForm(){
    setUsername('');
    setEmail('');
    setPassword('');
  }

console.log(user)
window.localStorage.setItem('user', JSON.stringify(user))
navigate(from)
}
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Create Account</h1>
            <form onSubmit={createAccount}>
            <input className="space" placeholder='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input className="space" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <input className="space" placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
              
               
 
            <button className="btn btn-primary" >Create Account</button>
            </form>
        </div>
    )
}
  

export default CreateAccount;