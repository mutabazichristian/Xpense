import React, { useState } from "react";
import instance from "../API";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const { email, setEmail, setUserType } = props;
    const [isWrongCredentials, setIsWrongCredentials] = useState(false);
    async function handleLogin(event) {
        event.preventDefault();
        await instance
            .post("/login", { email, password })
            .then((res) => {
                console.log("response from server", res);
                console.log("user type", res.data.userType);
                setUserType(res.data.userType);
                localStorage.setItem("userType", res.data.userType);
                navigate("/user");
            })
            .catch((err) => {
                console.log("error from server", err);
                if (err.code === "ERR_BAD_REQUEST") {
                    setIsWrongCredentials(true);
                }
            });
    }
    function navigateToSignup() {
        navigate("/signup");
    }
    function navigateToCreate(){
        navigate('/create')
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
                {isWrongCredentials && (
                    <p style={{ color: "red" }}>Please Enter the right credentials!!</p>
                )}
                <p>
                    No account?
                    <button onClick={navigateToSignup}>Sign up</button>
                </p>
                <p>new system Admin
                    <button onClick={navigateToCreate}>Create System Admin</button>
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
