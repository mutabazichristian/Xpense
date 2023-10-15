import React, { useState } from "react";
import axios from 'axios';


function Login(props) {

    const [password, setPassword] = useState('');
    const { email, setEmail, isLoggedIn, setIsLoggedIn } = props;
    function handleLogin(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/login', { email, password })
            .then(res => {
                console.log(res);
                localStorage.setItem("sessionId", res.data.sessionId);
                if (localStorage.getItem('sessionId')) {
                    setIsLoggedIn(true)
                } else {
                    setIsLoggedIn(false);
                }
            })
            .catch(err => console.log(err));
        //redirect
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;   