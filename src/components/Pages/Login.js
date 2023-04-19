import { useState } from "react";
import { useNavigate, useLocation} from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardHeader, Button } from "reactstrap";

function Login(){
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let { from } = location.state || { from: {pathname: '/'} }

    const login = (e) => {
        e.preventDefault();
        console.log(email, password);

        const localEmails = localStorage.getItem('email')
    const jsonEmail = JSON.parse(localEmails)
  console.log(localEmails);

    const localPasswords = localStorage.getItem('password')
    const jsonPassword = JSON.parse(localPasswords)
    console.log(localPasswords)
        // check localStorage, 
        if(jsonEmail === email && jsonPassword === password) {
            alert(`Thanks for signing In!`);
            console.log(email, password)
            console.log(true)
        }else {
            alert(`Sorry that user does not exist`);
            console.log(email, password)
            console.log(false)
        }
        navigate(from);
    }

    return (
        <>
        <Card className="center-card" style={{ width: "95vw" }}>
        <div style={{ textAlign: "center" }}>
        <CardHeader style={{ backgroundColor: "#0275d8" }}><h1 className="w-white-text">Login</h1></CardHeader>
            <CardBody>
            <form onSubmit={login}>
            <label className="top">Email:
                <input className="login-space" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </label>

                <label className="top" style={{ marginLeft: "40px" }}>Password:
                <input className="login-space" placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </label>
                <button className='btn btn-primary'>Login</button>
            </form>
            </CardBody>
        </div>
        </Card>
        </>
    )
}

export default Login;