import { useState } from "react";
import { useNavigate, useLocation} from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const location = useLocation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let { from } = location.state || { from: {pathname: '/'} }

    const login = (e) => {
        e.preventDefault();
        console.log(username, password);
        navigate(from);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Login</h1>
            <form onSubmit={login}>
                <input className="login-space" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <input className="login-space" placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button className='btn btn-primary'>Login</button>
            </form>
        </div>
    )
}

export default Login;