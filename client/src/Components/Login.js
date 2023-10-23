import React, { useEffect, useState } from "react";
import axios from 'axios';


function Login(props) {

    const [password, setPassword] = useState('');
    const { email, setEmail, cookies } = props;
    async function handleLogin(event) {
        event.preventDefault();
        await axios.post('http://localhost:8080/login', { email, password })
            .then(res => {
                console.log("response from server", res);
                //const cookieValue = cookies.get('authCookie');
                console.log('the cookie value is', cookies);
                //cookies.set('authCookie', cookieValue);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {

        const getExpenses = async () => {
            await axios.get('http://localhost:8080/login').then((res) => {
                console.log('res...', res);
            }).catch(err => {
                console.log('err', err);
            })
        }

        getExpenses();

    }, [])
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