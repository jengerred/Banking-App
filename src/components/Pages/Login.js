import { useState } from "react";
import { useNavigate, useLocation} from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardHeader, Button } from "reactstrap";

function Login(){
    const navigate = useNavigate();
    const location = useLocation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let { from } = location.state || { from: {pathname: '/'} }

    const login = (e) => {
        e.preventDefault();
        console.log(username, password);
        const localUsers = localStorage.getItem('user')
        const jsonUser = JSON.parse(localUsers)
        // check localStorage, 
        if(jsonUser.email === username && jsonUser.password === password) {
            alert(`Thanks for signing In!`);
      
            console.log(true)
        }else {
            alert(`Sorry that user does not exist`);
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
                <input className="login-space" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <input className="login-space" placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button className='btn btn-primary'>Login</button>
            </form>
            </CardBody>
        </div>
        </Card>
        </>
    )
}

export default Login;