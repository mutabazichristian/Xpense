import React, { useEffect, useState } from "react";
import instance from "../API";
import { useNavigate } from 'react-router-dom'


function Login(props) {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const { email, setEmail } = props;
    async function handleLogin(event) {
        event.preventDefault();
        await instance.post('/login', { email, password })
            .then(res => {

                console.log("response from server", res);
                navigate('/')
                
            })
            .catch(err => console.log('error from server',err));
    }
    function navigateToSignup(){
        navigate('/signup');
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Submit</button>
                <p>
                    No account?
                        <button onClick={navigateToSignup}>Sign up</button>
                </p>
            </form>
        </div>
    );
}

export default Login;   
            // useEffect(() => {
        
            //     const getExpenses = async () => {
            //         await axios.get('http://localhost:8080/login').then((res) => {
            //             console.log('res...', res);
            //         }).catch(err => {
            //             console.log('err', err);
            //         })
            //     }
        
            //     getExpenses();
        
            // }, [])