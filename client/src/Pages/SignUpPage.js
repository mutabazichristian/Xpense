import React, { useState } from 'react';
import instance from '../API';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [otherName, setOtherName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [maxExpense, setMaxExpense] = useState();
    async function handleSingup(event,) {
        if (password != repeatPassword) {
            alert('password does not match');
        }
        console.log(firstName, otherName, email, password, repeatPassword, maxExpense)
        event.preventDefault();
        console.log('tryna sign up hun?');
        await instance.post('/signup', { firstName, otherName, email, password, maxExpense })
            .then(res => {
                console.log('response from server', res)
                console.log(res.data)
                if (res.data == 'signedup') {
                    navigate('/');
                }
            })
            .catch(error => console.log(error))


    }

    return (
        <div>
            <form onSubmit={handleSingup}>
                <h1>Create New Xpense Account</h1>
                <table>
                    <tr><td>

                        <label htmlFor="">First Name</label>
                    </td>
                        <td>
                            <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="">Other Name</label>

                        </td>
                        <td>
                            <input type="text" value={otherName} onChange={(e) => { setOtherName(e.target.value) }} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor="">Email</label>
                        </td>
                        <td>
                            <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />

                        </td>
                    </tr>
                    <tr>

                        <td>
                            <label htmlFor="">Password</label>
                        </td>
                        <td>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                        </td></tr>

                    <tr>
                        <td>
                            <label htmlFor="">Repeat Password</label>
                        </td>
                        <td>
                            <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor="maxExpense"> Maximum expense</label>
                        </td>
                        <td>
                            <input type="number" value={maxExpense} onChange={(e) => setMaxExpense(e.target.value)} />
                        </td>
                    </tr>
                </table>
                <button type='submit'> Sign Up</button>
            </form >
        </div >
    );
};

export default SignUpPage;