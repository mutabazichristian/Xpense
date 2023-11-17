import React from 'react';
import instance from '../API/index';
import { useState } from 'react';

function Create() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        instance.post('/systemadmin', { username, email, password, repeatPassword })
        .then((res)=>{
            console.log('response, creating system admin', res);
        })
        .catch(err => console.log('error from server', err))
        console.log('these are the collecte information', username, email, password, repeatPassword)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Create new sytem admin</h1>
                <table>
                    <tr>
                        <td><label htmlFor="">Name</label></td>
                        <td><input type="text" onChange={(e) => setUsername(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">email</label></td>
                        <td><input type="email" onChange={(e) => setEmail(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">password</label></td>
                        <td><input type="password" onChange={(e) => setPassword(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">retype password</label></td>
                        <td><input type="password" onChange={(e) => setRepeatPassword(e.target.value)} /></td>
                    </tr>
                    <button type='submit'>Create</button>
                </table>
            </form>
        </div>
    );
}

export default Create;